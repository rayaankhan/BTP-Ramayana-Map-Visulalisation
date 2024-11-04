import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function RavanaOrigin({ onClose }) {
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">Ravana: The Demon King of Lanka</h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">The Multi-Headed Ravana:</h3>
          <p>Ravana is the mythical multi-headed demon-king of Lanka in Hindu mythology. With ten heads and twenty
                  arms, Ravana could change into any form he wished. Representing the very essence of evil, he famously
                  fought and ultimately lost a series of epic battles against the hero Rama, seventh avatar of Vishnu.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Creation of Rakshasas and Yakshas:</h3>
          <p>In the beginning, after Lord Brahma formed the universe, he created two distinct entities to serve specific roles. The Rakshasas, or demons, were tasked with protecting the universe, while the Yakshas, or spirits, were meant to pray for its well-being. Among the Rakshasas, two brothers stood out prominently: Heti and Praheti. While Praheti chose the path of righteousness and pursued meditation, Heti ventured into family life by marrying Bhaya, the sister of Kaal. Their lineage eventually led to the birth of Vidyut Kesha, who later married Balakantaka, setting the stage for the next generations of Rakshasas.</p>

          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Sukesh's Boon and Lineage:</h3>
          <p>One significant event in the Rakshasa lineage occurred with the birth of Sukesh. Abandoned in a forest and left unattended, Sukesh was discovered by Lord Shiva and Parvati during their celestial travels. Moved by compassion, Parvati's heart melted upon seeing the baby's distress, prompting Lord Shiva to grant Sukesh the boon of eternal life. Additionally, Parvati blessed all female Rakshasas with the power to have their sons mature into teenagers immediately upon birth. Sukesh later married Devvati, and together they had three sons: Malyavan, Mali, and Sumali, who became pivotal figures in Rakshasa history.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Rise of Malyavan, Mali, and Sumali:</h3>
          <p>The three sons of Sukesh—Malyavan, Mali, and Sumali—embarked on a path of intense devotion and penance, seeking boons and divine blessings to enhance their power. Through years of dedicated worship, they gained immense strength and prowess, becoming feared throughout the universe for their terrorizing ways. Their increasing influence disrupted the harmony between Devas (celestial beings) and Rakshasas, leading to confrontations and conflicts that threatened the cosmic balance.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Birth of Kaiksi and Rishi Vishwa's Prophecy:</h3>
          <p>Sumali's lineage continued with the birth of his daughter, Kaiksi. Aware of her family's ambitions and desire for power, Kaiksi married Rishi Vishwa's son with the hope of bearing mighty offspring who would restore Rakshasa dominance. However, Rishi Vishwa, possessing prophetic insight into Kaiksi's intentions, granted her children under a specific condition. He foresaw that the children would inherit traits based on Kaiksi's underlying intentions, setting the stage for the birth of Dashgriva (Ravana), Kumbhakarna, Shurpanakha, and Vibhishana—the legendary siblings whose destinies would shape the course of history.</p>
          
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600">Emergence of Ravana:</h3>
          <p>Dashgriva, named Ravana by Lord Shiva himself, was the epitome of Rakshasa power and ambition. Born from Kaiksi's union with Rishi Vishwa, Ravana possessed unparalleled strength and intellect, destined to leave an indelible mark on the world. His story intertwines with profound themes of destiny, power, and the eternal struggle between righteousness and malevolence, as depicted in the timeless epic of the Ramayana.</p>
        </div>
        
        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <img src="images/characters/ravan1.jpeg" alt="Ravana"
            className="h-64 md:h-full w-full object-cover rounded-lg border border-orange-500"
          />
        </div>
      </div>
    </div>
  );
}

export default RavanaOrigin;
