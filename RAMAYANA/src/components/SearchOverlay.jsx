import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";

const SearchOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white hover:text-gr text-2xl"
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className=" w-full max-w-3xl p-8">
        <div className="flex items-center bg-transparent p-2 rounded-lg border-none">
          <FaSearch className="text-white text-md mx-2" />
          <input
            type="text"
            className="w-full px-2  rounded-lg m-2 bg-transparent"
            placeholder="Search"
          />
      </div>
          <div
            className={`m-0 mb-2 h-0.5 bg-gradient-to-r from-red-500 to-blue-500`}
          />
        </div>
    </div>
  );
};

export default SearchOverlay;
