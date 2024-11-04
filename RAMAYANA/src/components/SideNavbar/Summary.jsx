import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function Summary({ onClose }) {
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">Summary of the Ramayana</h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Overview:</h3>
          <p>The Ramayana, one of the two great epics of India, narrates the story of Rama, the prince of Ayodhya. Composed by the sage Valmiki, the epic encompasses the virtues of honor, bravery, and devotion.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Birth and Education:</h3>
          <p>Rama, the eldest son of King Dasharatha, is born under auspicious signs, fulfilling the king's desire for heirs. Alongside his brothers Lakshmana, Bharata, and Shatrughna, Rama receives a princely education, mastering various arts and sciences under sage Vashistha.</p>

          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Marriage to Sita:</h3>
          <p>Rama, known for his courage and virtue, wins the hand of Sita, the daughter of King Janaka, by successfully stringing the divine bow at her swayamvara, a ceremony attended by many princes.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Exile to the Forest:</h3>
          <p>Due to palace intrigue instigated by his stepmother Kaikeyi, Rama is exiled to the forest for fourteen years. Devotedly, Sita and his faithful brother Lakshmana join him, and they lead a life of simplicity and virtue among the sages and forest dwellers.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Abduction of Sita:</h3>
          <p>Sita is abducted by Ravana, the ten-headed king of Lanka, prompting Rama and Lakshmana to embark on a quest to rescue her. During their journey, they form alliances with the monkey king Sugriva and his minister Hanuman, who becomes a devoted follower of Rama.</p>

          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Building the Bridge:</h3>
          <p>With the help of the vanara army, Rama constructs a bridge over the ocean to Lanka. This monumental effort symbolizes the power of unity and perseverance.</p>

          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">The Great Battle:</h3>
          <p>In Lanka, a great battle ensues between Rama’s forces and the armies of Ravana. After many fierce battles and the strategic brilliance of Rama’s allies, Ravana is slain, and Sita is freed.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Return to Ayodhya:</h3>
          <p>Upon completing his exile, Rama returns to Ayodhya where he is crowned king. His reign, known as Ram Rajya, is marked by peace, prosperity, and justice—a golden age for all his subjects.</p>

          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Legacy:</h3>
          <p>The Ramayana not only explores the trials and triumphs of its divine hero, Rama, but also offers lessons on dharma (righteousness), devotion, and the duties of relationships, providing a moral foundation for millions of believers.</p>
          </div>
        
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <img src="images/kanda/image.png" alt="Summary"
            className="h-64 md:h-full w-full object-cover rounded-lg border border-orange-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;
