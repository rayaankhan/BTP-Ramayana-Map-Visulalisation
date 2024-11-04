import React, { useState, useEffect } from "react";
import kandaData from "../../json/kanda.json";
function CompleteRamayana({ onClose }) {
  const [kandas] = useState(kandaData);
  const [selectedKanda, setSelectedKanda] = useState(null);


  const handleKandaSelect = (kanda) => {
    setSelectedKanda(kanda);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-slate-900 w-[85%] h-[75%] rounded-lg overflow-hidden shadow-lg text-white p-4 flex flex-col">
        {/* Modal Header */}
        <div className="text-3xl font-bold text-center text-orange-500 mb-4">
          Complete Ramayana
          <button
            onClick={onClose}
            className="float-right text-xl text-gray-300 hover:text-orange-500"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body flex flex-col lg:flex-row overflow-y-auto lg:h-[calc(100%-4rem)] lg:space-x-4">
          {/* Left Side - Kanda Content */}
          <div
            className={`modal-content-left flex-1 p-4 ${
              selectedKanda ? "lg:max-h-full overflow-y-auto" : ""
            } ${
              selectedKanda ? "" : "lg:text-center"
            } transition-all ease-in-out duration-300`}
          >
            <h2 className="text-2xl font-bold mb-4">
              {selectedKanda ? selectedKanda.kanda : "Overview"}
            </h2>
            <p>
              {selectedKanda
                ? selectedKanda.about
                : `
The Ramayana, an ancient Indian epic, is a timeless tale of love, duty, and the eternal struggle between good and evil. Its significance spans across religious, cultural, social, political, and global spheres, leaving an indelible mark on human civilization.

Religiously, the Ramayana is revered as one of Hinduism's most sacred texts. It narrates the life of Lord Rama, an incarnation of the god Vishnu, who embarks on a journey to rescue his wife Sita from the clutches of the demon king Ravana. The epic serves as a spiritual guide, teaching profound lessons about righteousness (dharma), devotion, and the consequences of one's actions (karma). It inspires millions of devotees to lead virtuous lives and cultivate unwavering faith in the divine.

Culturally, the Ramayana has shaped artistic expression across millennia. Its stories have been immortalized in classical Indian dance forms such as Bharatanatyam, Kathakali, and Odissi, each performance intricately weaving together movement, music, and emotion to bring the epic to life. Additionally, the Ramayana has inspired countless paintings, sculptures, and murals, adorning temples, palaces, and galleries across South and Southeast Asia. Its literary influence extends beyond the original Sanskrit text, with adaptations and retellings in various languages enriching the literary traditions of different cultures.

Socially, the Ramayana has influenced norms and values, particularly regarding familial relationships and societal duties. The idealized portrayal of Rama as a just and virtuous king, and Sita as the epitome of wifely devotion, has shaped societal expectations in many communities. The epic's characters serve as role models, guiding individuals in their interactions with family, society, and the world at large.

Politically, the Ramayana has been invoked to legitimize authority and governance. Throughout history, rulers and political leaders have drawn parallels between themselves and the noble characters of the epic, presenting themselves as righteous kings who uphold justice and protect their subjects. By aligning themselves with the ideals of Rama's kingship, leaders seek to gain legitimacy and inspire loyalty among their people.

Moreover, the Ramayana's influence extends far beyond the Indian subcontinent, reaching countries like Indonesia, Thailand, Cambodia, and Myanmar. Its stories have been adapted into local languages and incorporated into various art forms, literature, and religious practices. The epic's universal themes of love, loyalty, and heroism resonate with people around the world, transcending cultural and linguistic barriers.

In conclusion, the Ramayana stands as a testament to the enduring power of storytelling and the profound impact of ancient wisdom on human civilization. Its significance transcends religious boundaries, enriching cultures, shaping societies, and inspiring individuals across generations. As a timeless epic, the Ramayana continues to illuminate the path of righteousness and guide humanity towards truth, compassion, and spiritual fulfillment.Let us now delve more in depth intop the summary of the each kandas ramayana has.
`}
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="modal-content-right flex-1 flex justify-center items-center lg:max-h-full lg:max-w-full mt-4 lg:mt-0 overflow-hidden">
            <img
              src={
                selectedKanda
                  ? selectedKanda.image
                  : "/images/kanda/image1.png"
              }
              alt={selectedKanda ? selectedKanda.kanda : "Overview Image"}
              className="rounded-lg max-w-full max-h-full object-cover transition-all duration-300"
            />
          </div>
        </div>

        {/* Footer with Kanda Buttons */}
        <div className="modal-footer flex flex-wrap justify-center mt-4 space-x-2">
          {kandas.map((kanda) => (
            <button
              key={kanda.kanda}
              className="px-4 py-2 m-1 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
              onClick={() => handleKandaSelect(kanda)}
            >
              {kanda.kanda}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompleteRamayana;
