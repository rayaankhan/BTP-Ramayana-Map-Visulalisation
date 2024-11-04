import React, { useState, useEffect } from "react";
import referenceStoriesData from "../../json/referencestory.json";
function ReferenceStories({ onClose }) {
  const [referenceStories] = useState(referenceStoriesData);
  const [selectedStory, setSelectedStory] = useState(null);

  const openStoryModal = (story) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-slate-900 w-[85%] h-[75%] rounded-lg overflow-hidden shadow-lg text-white p-4 flex flex-col border border-orange-500">
        {/* Modal Header */}
        <div className="text-3xl font-bold text-center text-orange-500 mb-4">
          Reference Stories
          <button
            onClick={closeModal}
            className="float-right text-xl text-gray-300 hover:text-orange-500"
          >
            &times;
          </button>
        </div>

        {/* Reference Story Cards */}
        <div className="referencestory-cards flex flex-wrap justify-around overflow-y-auto p-4 py-6">
          {referenceStories.map((story) => (
            <div
              key={story.name}
              className="referencestory-card w-72 h-72 bg-cover bg-center rounded-lg shadow-md cursor-pointer transition-transform duration-200 hover:translate-y-[-5px] my-4 border border-orange-500"
              style={{ backgroundImage: `url(${story.image})` }}
              onClick={() => openStoryModal(story)}
            >
              <div className="w-full h-1/5 bg-black bg-opacity-60 text-center text-white font-semibold flex items-center justify-center">
                {story.name}
              </div>
            </div>
          ))}
        </div>

        {/* Reference Story Detail Modal */}
        {selectedStory && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="modal-content bg-slate-900 w-3/4 h-3/4 p-8 rounded-lg shadow-2xl text-white">
              <div className="modal-header flex justify-between items-center text-2xl font-bold text-orange-500">
                {selectedStory.name}
                <button
                  onClick={closeModal}
                  className="text-2xl text-gray-300 hover:text-orange-500"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body flex flex-col lg:flex-row mt-4 space-y-5 lg:space-y-0 lg:space-x-4 h-full w-full">
                {/* Left Side - Description */}
                <div className="modal-body-left lg:w-2/3 p-4 text-lg h-2/5  lg:h-4/5 overflow-y-auto">
                  {selectedStory.about}
                </div>
                
                {/* Right Side - Image */}
                <div className="modal-body-right lg:w-1/3 h-2/5 lg:h-4/5 flex justify-center items-center">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.name}
                    className="h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReferenceStories;
