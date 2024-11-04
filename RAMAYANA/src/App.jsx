import { useState } from 'react';
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="overflow-x-hidden">
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <>
          <Hero />
          <Chatbot />
        </>
      )}
    </div>
  );
}
