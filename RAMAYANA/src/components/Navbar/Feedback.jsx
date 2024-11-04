import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Feedback({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Load SMTP.js dynamically
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleFeedback = async (e) => {
    e.preventDefault();
    const res = await fetch("https://backend-node-y6o2.onrender.com/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) {
      setStatus("Feedback sent successfully!");
    }

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 mt-16">
      <div className="relative flex flex-col items-center pt-20 p-4 bg-slate-900 rounded-lg font-serif h-[72vh] md:h-[80vh] w-[80vw] md:w-[60vw] overflow-y-auto md:overflow-hidden shadow-2xl border border-orange-500">
        <button
          className="absolute top-2 right-2 text-2xl text-white hover:text-orange-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="text-4xl font-bold my-4 text-center text-white">Feedback</div>
        <form
          className="w-full max-w-lg bg-gray-300 p-6 rounded-lg shadow-md border border-orange-500"
          onSubmit={handleFeedback}
        >
          <div className="mb-4">
            <label
              className="block text-orange-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border border-orange-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              style={{ backgroundColor: "white" }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-orange-500 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border border-orange-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              style={{ backgroundColor: "white" }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-orange-500 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border border-orange-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              style={{ backgroundColor: "white" }}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Feedback
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-green-600">{status}</p>}
      </div>
    </div>
  );
}

export default Feedback;
