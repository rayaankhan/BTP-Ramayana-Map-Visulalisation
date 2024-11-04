import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function RamaOrigin({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 mt-16">
      <div className="relative flex flex-col lg:flex-row p-4 bg-slate-900 rounded-lg font-serif h-[80vh] w-[90vw] md:w-[70vw] shadow-2xl border border-orange-500 overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-2xl text-white hover:text-orange-500"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <br/>
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 p-4 text-white space-y-4 overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Rama: The Hero of Ramayana</h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Lineage and Background:</h3>
          <p>Lord Rama belongs to the illustrious Ikshvaku dynasty, also known as the Raghu dynasty. This lineage traces its origins to Manu, the progenitor of humanity according to Hindu mythology. Ikshvaku, the founder of this dynasty, was a noble ruler known for his righteousness. Over generations, the dynasty produced several heroic and virtuous kings, including Lord Rama's father, King Dasharatha.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Dasharatha's Childlessness:</h3>
          <p>King Dasharatha's struggle with childlessness was a source of great sorrow for him, as having an heir was crucial for the continuity of his lineage and the kingdom. Despite having three queens, his lack of offspring led him to seek a solution through the performance of the Putrakameshti Yagna.</p>

          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">The Putrakameshti Yagna:</h3>
          <p>The Putrakameshti Yagna was a significant Vedic ritual performed by King Dasharatha under the guidance of Sage Rishyashringa. This complex and devout ritual involved elaborate ceremonies and offerings aimed at invoking divine blessings for progeny. The successful completion of this yagna played a pivotal role in fulfilling Dasharatha's desire for children.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Divine Blessings:</h3>
          <p>As a result of the Putrakameshti Yagna and the gods' benevolence, Queen Kausalya, Kaikeyi, and Sumitra were blessed with the divine nectar (payasam), which facilitated their pregnancies. The consumption of this sacred substance symbolized the divine intervention that led to the birth of Lord Rama and his brothers.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">The Birth of Lord Rama:</h3>
          <p>Lord Rama, the epitome of virtue and righteousness, was born to Queen Kausalya. His birth is celebrated as a significant event in Hindu mythology, marking the incarnation of the divine on Earth. His brothers—Bharata, Lakshmana, and Shatrughna—were also born around the same time, each destined to play crucial roles in the epic saga of the Ramayana.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Shringi Rishi's Curse:</h3>
          <p>The curse of Shringi Rishi was a pivotal moment that influenced the course of Lord Rama's life. The young sage's curse, provoked by Manthara's scheming, foretold the pain of separation and turmoil that would afflict Dasharatha's lineage. This curse eventually became intertwined with the events leading to Rama's exile and the subsequent unfolding of the Ramayana narrative.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Impacts:</h3>
          <p>In Hindu tradition, the birth and life of Lord Rama are not only revered for their mythological significance but also cherished for the profound moral lessons and ideals they embody. The Ramayana, recounting Rama's journey, continues to inspire countless generations with its themes of duty, devotion, and the eternal battle between good and evil.</p>
        </div>
        
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <img src="/images/characters/ram.jpg" alt="Rama" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default RamaOrigin;
