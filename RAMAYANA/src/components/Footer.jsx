import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faWalking,
  faTree,
  faHandshake,
  faFeatherAlt,
  faFistRaised,
} from "@fortawesome/free-solid-svg-icons";

const Dock = ({ children, className = "" }) => {
  return (
    <div className={`flex justify-center items-center space-y-1 space-x-1 lg:space-y-0 lg:space-x-8 bg-slate-100 bg-opacity-15 p-0 lg:p-4 rounded-lg backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
};

const DockIcon = ({ icon, label, timeframe, textColor, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center hover:scale-105 transition-all ${textColor} cursor-pointer hover:text-orange-600`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={icon} className="mr-1" />
        <span>{label}</span>
      </div>
      <span className="text-xs">{timeframe}</span>
    </div>
  );
};

function Footer({ onPeriodChange }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const textColor = isScrolled ? "text-black" : "text-white";

  return (
    <div className="fixed bottom-3 w-full z-50 flex flex-col items-center space-y-2">
      {/* For large screens (lg and above), render a single Dock */}
      <Dock className="hidden lg:flex">
        <DockIcon
          icon={faChild} // Child icon for "Balakanda"
          label="BALA"
          timeframe="Childhood of Rama"
          textColor={textColor}
          onClick={() => onPeriodChange("bala")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faWalking} // Walking icon for "Ayodhyakanda"
          label="AYODHYA"
          timeframe="Rama's Exile"
          textColor={textColor}
          onClick={() => onPeriodChange("ayodhya")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faTree} // Tree icon for "Aranyakanda"
          label="ARANYA"
          timeframe="Forest Life"
          textColor={textColor}
          onClick={() => onPeriodChange("aranya")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faHandshake} // Alliance icon for "Kishkindhakanda"
          label="KISHKINDHA"
          timeframe="Alliance with Sugriva"
          textColor={textColor}
          onClick={() => onPeriodChange("kishkindha")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faFeatherAlt} // Feather icon for "Sundarakanda"
          label="SUNDARA"
          timeframe="Hanuman's Odyssey"
          textColor={textColor}
          onClick={() => onPeriodChange("sundara")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faFistRaised} // Fist icon for "Yuddhakanda"
          label="YUDDHA"
          timeframe="War with Ravana"
          textColor={textColor}
          onClick={() => onPeriodChange("yuddha")}
        />
      </Dock>

      {/* For small and medium screens (below lg), render two separate Docks */}
      <Dock className="lg:hidden px-3">
        <DockIcon
          icon={faChild} // Child icon for "Balakanda"
          label="BALA"
          timeframe="Childhood of Rama"
          textColor={textColor}
          onClick={() => onPeriodChange("bala")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faWalking} // Walking icon for "Ayodhyakanda"
          label="AYODHYA"
          timeframe="Rama's Exile"
          textColor={textColor}
          onClick={() => onPeriodChange("ayodhya")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faTree} // Tree icon for "Aranyakanda"
          label="ARANYA"
          timeframe="Forest Life"
          textColor={textColor}
          onClick={() => onPeriodChange("aranya")}
        />
      </Dock>
      <Dock className="lg:hidden px-3">
        <DockIcon
          icon={faHandshake} // Alliance icon for "Kishkindhakanda"
          label="KISHKINDHA"
          timeframe="Alliance with Sugriva"
          textColor={textColor}
          onClick={() => onPeriodChange("kishkindha")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faFeatherAlt} // Feather icon for "Sundarakanda"
          label="SUNDARA"
          timeframe="Hanuman's Odyssey"
          textColor={textColor}
          onClick={() => onPeriodChange("sundara")}
        />
        <span className={textColor} style={{ fontSize: '2rem' }}>|</span>
        <DockIcon
          icon={faFistRaised} // Fist icon for "Yuddhakanda"
          label="YUDDHA"
          timeframe="War with Ravana"
          textColor={textColor}
          onClick={() => onPeriodChange("yuddha")}
        />
      </Dock>
    </div>
  );
}

export default Footer;
