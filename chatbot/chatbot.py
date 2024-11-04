import os
from dotenv import load_dotenv
from langchain.prompts import ChatPromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage, SystemMessage

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()

os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")
os.environ["LANGCHAIN_API_KEY"] = os.getenv("LANGCHAIN_API_KEY")
# This variable is used by the LangChain library to enable tracing and debugging features.
os.environ["LANGCHAIN_TRACING_V2"] = "true"

prompt=ChatPromptTemplate.from_messages(
    [
        ("user","Question:{question}")
    ]
)

llm=ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
)

with open("context.txt","r") as f:
    context=f.read()

def get_response(input_text):
    output=llm.invoke(
        [
            SystemMessage(content=context),
            HumanMessage(content=input_text)
        ]
    )
    with open("context.txt","a") as f:
        f.write("\n" + "user:" + input_text)
        f.write("\n" + "system:" + output.content)
    return output

# Define an API endpoint
@app.route('/chat', methods=['POST'])
def run_function():
    data = request.json
    message = data.get('message', '')
    output = get_response(message)
    return jsonify({'reply': output.content})
