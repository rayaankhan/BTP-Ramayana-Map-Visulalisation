import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Contact({ onClose }) {
  let [imgData, setImgData] = useState(null);
  
  useEffect(() => {
    const fetchImg = async () => {
      try {
        let imgUrls = ['yash', 'rayaan', 'santhoshini'].map((name) => `https://backend-node-y6o2.onrender.com/image/${name}`);
        const imgResponses = await Promise.all(imgUrls.map((url) => fetch(url)));
        const imgBlobs = await Promise.all(imgResponses.map((response) => response.blob()));
        const data = imgBlobs.map((blob) => URL.createObjectURL(blob));
        setImgData(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
    fetchImg();
  }, []);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 mt-16">
      <div className="relative flex flex-col items-center p-2 bg-slate-800 rounded-lg font-serif h-[72vh] md:h-[80vh] w-[80vw] md:w-[60vw] overflow-y-auto md:overflow-hidden shadow-2xl border border-orange-500">
        <button
          className="absolute top-2 right-2 text-2xl text-white hover:text-orange-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="text-4xl font-bold my-4 text-center text-white">Contact Us</div>
        <div className="my-4 text-center">
          <h2 className="text-3xl font-semibold text-orange-500">Who are we?</h2>
          <p className="text-base text-white">
            We are undergraduate students in our fourth year at IIIT Hyderabad. This website is a part of our BTP project under the guidance of Professor R.C. Prasad. We are passionate computer science students and are thrilled to share this website with you. Feel free to contact us for collaborations or freelance work.
          </p>
        </div>
        <div className="flex flex-col items-center my-0 md:flex-row md:justify-evenly p-1">
          <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[35vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-0 transform transition-all hover:scale-105 border border-orange-500">
            {imgData && <img src={imgData[0]} alt="Yash Shivhare" className="rounded-full w-32 h-32 mb-4" />}
            <div className="text-center">
              <p className="font-semibold text-lg text-orange-500">Yash Shivhare</p>
              <p className="text-sm text-black">CSE IIITH</p>
            </div>
            <div className="flex mt-2 justify-center space-x-3">
              <a href="https://www.linkedin.com/in/yashshivhare007" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-700 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivhareyash007@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} className="text-xl hover:text-red-500 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://github.com/YashShivhare007" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-black transition-transform transform hover:scale-125" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[35vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-0 transform transition-all hover:scale-105 border border-orange-500">
            {imgData && <img src={imgData[1]} alt="Rayaan Khan" className="rounded-full w-32 h-32 mb-4" />}
            <div className="text-center">
              <p className="font-semibold text-lg text-orange-500">Rayaan Khan</p>
              <p className="text-sm text-black">CSE IIITH</p>
            </div>
            <div className="flex mt-2 justify-center space-x-3">
              <a href="https://www.linkedin.com/in/rayaank" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-700 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=khan.rayaan2003@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} className="text-xl hover:text-red-500 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://github.com/rayaankhan" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-black transition-transform transform hover:scale-125" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[35vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-0 transform transition-all hover:scale-105 border border-orange-500">
            {imgData && <img src={imgData[2]} alt="Santhoshini Thota" className="rounded-full w-32 h-32 mb-4" />}
            <div className="text-center">
              <p className="font-semibold text-lg text-orange-500">Santhoshini</p>
              <p className="text-sm text-black">CSE IIITH</p>
            </div>
            <div className="flex mt-2 justify-center space-x-3">
              <a href="https://www.linkedin.com/in/jessicaparker" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-700 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=santhuthota456@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} className="text-xl hover:text-red-500 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://github.com/jessicaparker" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-black transition-transform transform hover:scale-125" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
