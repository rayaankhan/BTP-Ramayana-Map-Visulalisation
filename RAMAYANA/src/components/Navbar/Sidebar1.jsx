import { FaChevronRight } from "react-icons/fa"; // Import arrow icon
import CompleteRamayana from "../SideNavbar/CompleteRamayana";
import Summary from "../SideNavbar/Summary";
import RamaOrigin from "../SideNavbar/RamaOrigin";
import RavanaOrigin from "../SideNavbar/RavanaOrigin";
import OtherCharacters from "../SideNavbar/OtherCharacters";
import ReferenceStories from "../SideNavbar/ReferenceStories";
import { useState } from "react";
const Sidebar1 = ({
  isOpen,
  toggleSidebar,
  toggleContact,
  toggleFeedback,
  toggleAbout,
  toggleLearnings
}) => {
  const [isCompleteRamayanaOpen, setIsCompleteRamayanaOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isRamaOriginOpen, setIsRamaOriginOpen] = useState(false);
  const [isRavanaOriginOpen, setIsRavanaOriginOpen] = useState(false);
  const [isOtherCharactersOpen, setIsOtherCharactersOpen] = useState(false);
  const [isReferenceStoriesOpen, setIsReferenceStoriesOpen] = useState(false);
  const toggleCompleteRamayana=()=>{
    setIsCompleteRamayanaOpen(!isCompleteRamayanaOpen)
  }
  const toggleSummary=()=>{
    setIsSummaryOpen(!isSummaryOpen)
  }
  const toggleRamaOrigin=()=>{
    setIsRamaOriginOpen(!isRamaOriginOpen)
  }
  const toggleRavanaOrigin=()=>{
    setIsRavanaOriginOpen(!isRavanaOriginOpen)
  }
  const toggleOtherCharacters=()=>{
    setIsOtherCharactersOpen(!isOtherCharactersOpen)
  }
  const toggleReferenceStories=()=>{
    setIsReferenceStoriesOpen(!isReferenceStoriesOpen)
  }


  return (
    <div
      className={`fixed inset-0 bg-gray-300 z-30 flex flex-col overflow-y-auto transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col p-4">
        <div 
          className="relative my-4"
          onClick={toggleCompleteRamayana}
        >
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4 mt-16"
          >
            Complete Ramayana
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleSummary}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            Summary
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleRamaOrigin}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            Origins of Lord Rama
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleRavanaOrigin}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            Origins of Ravana
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleOtherCharacters}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            Other Characters
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleReferenceStories}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            Reference Stories
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleAbout}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            About
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleContact}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            Contact
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleFeedback}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            Feedback
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
        </div>
        <div className="relative my-4" onClick={toggleLearnings}>
          <a
            href="#"
            className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4"
          >
            Learnings
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500" />
          
        </div>
      </div>
      {isCompleteRamayanaOpen && <CompleteRamayana onClose={toggleCompleteRamayana} />}
      {isSummaryOpen && <Summary onClose={toggleSummary} />}
      {isRamaOriginOpen && <RamaOrigin onClose={toggleRamaOrigin} />}
      {isRavanaOriginOpen && <RavanaOrigin onClose={toggleRavanaOrigin} />}
      {isOtherCharactersOpen && <OtherCharacters onClose={toggleOtherCharacters}/>}
      {isReferenceStoriesOpen && <ReferenceStories onClose={toggleReferenceStories}/>}

    </div>

  );
};

export default Sidebar1;
