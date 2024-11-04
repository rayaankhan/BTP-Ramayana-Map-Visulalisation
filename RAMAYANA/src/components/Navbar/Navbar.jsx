import React, { useState, useEffect } from "react";
import Sidebar1 from "./Sidebar1";
import Sidebar2 from "./Sidebar2";
import Contact from "./Contact";
import Feedback from "./Feedback";
import About from "./About";
import Learnings from "./Learnings";
import Logo1 from "../../assets/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa";

function Navbar({ onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebar1Open, setIsSidebar1Open] = useState(false);
  const [isSidebar2Open, setIsSidebar2Open] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isLearningsOpen, setIsLearningsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close both sidebars when resizing
      setIsSidebar1Open(false);
      setIsSidebar2Open(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  const isMobile = windowWidth < 1024;
  const bgColor = isMobile || isScrolled ? "bg-slate-300" : "bg-white/50";
  const logo = Logo1;
  const textColor = isMobile || isScrolled ? "text-black" : "text-white";

  const toggleSidebar1 = () => {
    setIsSidebar1Open(!isSidebar1Open);
    // Close Sidebar2 when Sidebar1 is opened
    if (isSidebar2Open) {
      setIsSidebar2Open(false);
    }
  };

  const toggleSidebar2 = () => {
    setIsSidebar2Open(!isSidebar2Open);
    if (isSidebar1Open) {
      setIsSidebar1Open(false);
    }
  };

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };
  const toggleFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };
  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };
  const toggleLearnings = () => {
    setIsLearningsOpen(!isLearningsOpen);
  };
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 w-[100vw] transition-colors duration-300 ${bgColor} flex flex-col rounded-b-lg shadow-lg`}
      >
        <div className=" flex items-center justify-between w-[100vw] lg:px-10">
          {/* 1st Flexbox - sidebar and logo*/}
          <div className="flex pl-10">
            {/* 1st - Sidebar */}
            <div className="flex items-center space-x-5 m-0 md:mr-5">
              {isMobile && (
                <button
                  onClick={toggleSidebar1}
                  className={`text-2xl ${textColor}`}
                >
                  <FaBars />
                </button>
              )}
              {!isMobile && (
                <button
                  onClick={toggleSidebar2}
                  className={`text-2xl ${textColor}`}
                >
                  <FaBars />
                </button>
              )}
            </div>
            {/* 2nd - Logo*/}
            <div className="flex justify-evenly text-md ml-5 md:text-2xl">
              <a
                href="https://ramayana4everyone.netlify.app/"
                target="_blank"
                className="flex justify-center"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-20 w-18 mr-2 rounded-lg"
                />
                <div className="flex flex-col justify-center">
                  <h1
                    className={`${textColor} leading-tight font-serif font-semibold`}
                  >
                    The Chronicles
                  </h1>
                  <h1
                    className={`${textColor} leading-tight font-serif font-semibold`}
                  >
                    Of Sri Rama
                  </h1>
                </div>
              </a>
            </div>
          </div>

          {/* 2nd Flexbox- about,contact and feedback */}
          <div className="hidden lg:flex items-center justify-end space-x-5 font-serif font-semibold text-2xl pr-0">
          <div
              className={`flex items-center ${textColor} relative hover:text-orange-600 hover:scale-[1.05] duration-200 ease-in-out`}
              onMouseEnter={() => handleMouseEnter("Learnings")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleLearnings}
            >
              <a href="#">Learnings</a>
            </div>
            <div
              className={`flex items-center ${textColor} relative hover:text-orange-600 hover:scale-[1.05] duration-200 ease-in-out`}
              onMouseEnter={() => handleMouseEnter("About")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleAbout}
            >
              <a href="#">About</a>
            </div>
            <div
              className={`flex items-center ${textColor} relative  hover:text-orange-600 hover:scale-[1.05] duration-200 ease-in-out`}
              onMouseEnter={() => handleMouseEnter("Feedback")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleFeedback}
            >
              <a href="#">Feedback</a>
            </div>
            <div
              className={`flex items-center ${textColor} relative mr-5  hover:text-orange-600 hover:scale-[1.05] duration-200 ease-in-out`}
              onMouseEnter={() => handleMouseEnter("Contact")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleContact}
            >
              <a href="#" className="mr-10">
                Contact
              </a>
            </div>
            
          </div>
        </div>
      </nav>

      {isContactOpen && <Contact onClose={toggleContact} />}
      {isFeedbackOpen && <Feedback onClose={toggleFeedback} />}
      {isAboutOpen && <About onClose={toggleAbout} />}
      {isLearningsOpen && <Learnings onClose={toggleLearnings} />}

      <Sidebar1
        isOpen={isSidebar1Open}
        toggleSidebar={toggleSidebar1}
        toggleContact={toggleContact}
        toggleFeedback={toggleFeedback}
        toggleAbout={toggleAbout}
        toggleLearnings={toggleLearnings}

      />
      <Sidebar2
        isOpen={isSidebar2Open}
      />
    </>
  );
}

export default Navbar;
