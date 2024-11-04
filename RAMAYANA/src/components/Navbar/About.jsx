import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function About({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 mt-16">
      <div className="relative flex flex-col items-center p-4 bg-slate-900 rounded-lg font-serif h-[72vh] md:h-[80vh] w-[80vw] md:w-[60vw] overflow-y-auto shadow-2xl border border-orange-500">
        <button
          className="absolute top-2 right-2 text-2xl text-white hover:text-orange-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="text-4xl font-bold my-4 text-center text-white">
          About This Website
        </div>

        {/* Project/Website Brief */}
        <div className="my-4 p-4 bg-gray-300 rounded-lg shadow-lg text-center border border-orange-500">
          <h2 className="text-3xl font-semibold mb-2 text-orange-500">
            Project Aim
          </h2>
          <p className="text-base text-[#6e4d31]">
            The goal of this project is to develop a web application that
            visualizes and educates users about the Ramayana through an
            interactive map interface using Leaflet. The interactive map of the
            Ramayana highlights key locations and events using geographical data.
            It enhances user experience through narrative visualization and educational tools for cultural exploration. 
            Users can click on map markers or a synchronized list to view detailed information about each location significant in the Ramayana. 
            Most locations are directly referred to in Valmiki's Ramayana. The website aims to offer an engaging educational experience and promote cultural heritage awareness.
          </p>
        </div>

        {/* Components Section */}
        <div className="my-4 w-full">
          <h2 className="text-3xl font-semibold text-center mb-4 text-white">
            Website Components
          </h2>

          {/* Component Section */}
          <div className="flex flex-col md:flex-row md:justify-evenly mb-4 mr-10">
            {/* Navbar Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-2 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
              <h3 className="font-semibold text-lg text-orange-500">Navbar</h3>
              <p className="text-sm text-[#6e4d31]">
                The Navbar consists of four buttons: <strong>Learnings</strong>,{" "}
                <strong>About</strong>, <strong>Feedback</strong>, and{" "}
                <strong>Contact Us</strong>, offering information about the
                learnings from the Ramayana, details about the website, a feedback
                collection form, and contact information.
              </p>
            </div>

            {/* Map Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
              <h3 className="font-semibold text-lg text-orange-500">Map</h3>
              <p className="text-sm text-[#6e4d31]">
                The map displays the current location selected from the Locations
                List, providing a visual representation of events in the Ramayana,
                along with details about the event and sequential context for the
                previous and next events.
              </p>
            </div>

            {/* Locations List Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
              <h3 className="font-semibold text-lg text-orange-500">
                Locations List
              </h3>
              <p className="text-sm text-[#6e4d31]">
                The Locations List shows all the significant places where key
                incidents in the Ramayana occurred. The user can filter the
                locations based on the selected Kanda via the footer. By default,
                the locations are displayed sequentially.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-evenly mb-4 mr-10">
            {/* Learnings Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
              <h3 className="font-semibold text-lg text-orange-500">
                Learnings
              </h3>
              <p className="text-sm text-[#6e4d31]">
                This section presents a detailed history of the selected location,
                along with an AI-generated image depicting what it might have
                looked like during that period.
              </p>
            </div>

            {/* Footer Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
              <h3 className="font-semibold text-lg text-orange-500">Footer</h3>
              <p className="text-sm text-[#6e4d31]">
                The Footer allows users to select a Kanda (Bala, Ayodhya, Aranya,
                Kishkindha, Sundara, Yuddha) to view locations or events from
                that specific Kanda.
              </p>
            </div>

            {/* Chatbot Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
              <h3 className="font-semibold text-lg text-orange-500">Chatbot</h3>
              <p className="text-sm text-[#6e4d31]">
                An AI chatbot, specifically fine-tuned for this website, is
                available to answer queries and provide guidelines for
                navigating the site.
              </p>
            </div>
          </div>

          {/* Sidebar Specific Components */}
          <div className="my-4 w-full">
            <h2 className="text-3xl font-semibold text-center mb-4 text-white">
              Sidebar Components
            </h2>

            <div className="flex flex-col md:flex-row md:justify-evenly mb-4 mr-10">
              {/* Complete Ramayana Component */}
              <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
                <h3 className="font-semibold text-lg text-orange-500">
                  Complete Ramayana
                </h3>
                <p className="text-sm text-[#6e4d31]">
                  Provides an in-depth overview of the entire Ramayana, along with
                  a Kanda-by-Kanda summary of events in each section of the epic.
                </p>
              </div>

              {/* Summary Component */}
              <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
                <h3 className="font-semibold text-lg text-orange-500">Summary</h3>
                <p className="text-sm text-[#6e4d31]">
                  Gives an overall summary of the Ramayana, explaining its story,
                  themes, and its enduring cultural and spiritual significance.
                </p>
              </div>

              {/* Origins of Lord Rama Component */}
              <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
                <h3 className="font-semibold text-lg text-orange-500">
                  Origins of Lord Rama
                </h3>
                <p className="text-sm text-[#6e4d31]">
                  Describes the birth of Lord Rama as recounted in Valmiki's
                  Ramayana, including details about his divine heritage.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-evenly mb-4 mr-10">
              {/* Origins of Ravana Component */}
              <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
                <h3 className="font-semibold text-lg text-orange-500">
                  Origins of Ravana
                </h3>
                <p className="text-sm text-[#6e4d31]">
                  Provides details about the birth of Ravana and explores why he
                  became the villain in the Ramayana, as told by Valmiki.
                </p>
              </div>

              {/* Other Characters Component */}
              <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
                <h3 className="font-semibold text-lg text-orange-500">
                  Other Characters
                </h3>
                <p className="text-sm text-[#6e4d31]">
                  This section provides brief biographies and information about
                  other important characters from the Ramayana who played
                  significant roles in shaping the story.
                </p>
              </div>

              {/* Reference Stories Component */}
              <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-gray-300 rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-orange-500 overflow-y-auto">
                <h3 className="font-semibold text-lg text-orange-500">
                  Reference Stories
                </h3>
                <p className="text-sm text-[#6e4d31]">
                  Contains side stories and events that are part of the Ramayana
                  but not directly tied to the main storyline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
