const kandaSummary = `
The Ramayana, an ancient Indian epic, is a timeless tale of love, duty, and the eternal struggle between good and evil. Its significance spans across religious, cultural, social, political, and global spheres, leaving an indelible mark on human civilization.

Religiously, the Ramayana is revered as one of Hinduism's most sacred texts. It narrates the life of Lord Rama, an incarnation of the god Vishnu, who embarks on a journey to rescue his wife Sita from the clutches of the demon king Ravana. The epic serves as a spiritual guide, teaching profound lessons about righteousness (dharma), devotion, and the consequences of one's actions (karma). It inspires millions of devotees to lead virtuous lives and cultivate unwavering faith in the divine.

Culturally, the Ramayana has shaped artistic expression across millennia. Its stories have been immortalized in classical Indian dance forms such as Bharatanatyam, Kathakali, and Odissi, each performance intricately weaving together movement, music, and emotion to bring the epic to life. Additionally, the Ramayana has inspired countless paintings, sculptures, and murals, adorning temples, palaces, and galleries across South and Southeast Asia. Its literary influence extends beyond the original Sanskrit text, with adaptations and retellings in various languages enriching the literary traditions of different cultures.

Socially, the Ramayana has influenced norms and values, particularly regarding familial relationships and societal duties. The idealized portrayal of Rama as a just and virtuous king, and Sita as the epitome of wifely devotion, has shaped societal expectations in many communities. The epic's characters serve as role models, guiding individuals in their interactions with family, society, and the world at large.

Politically, the Ramayana has been invoked to legitimize authority and governance. Throughout history, rulers and political leaders have drawn parallels between themselves and the noble characters of the epic, presenting themselves as righteous kings who uphold justice and protect their subjects. By aligning themselves with the ideals of Rama's kingship, leaders seek to gain legitimacy and inspire loyalty among their people.

Moreover, the Ramayana's influence extends far beyond the Indian subcontinent, reaching countries like Indonesia, Thailand, Cambodia, and Myanmar. Its stories have been adapted into local languages and incorporated into various art forms, literature, and religious practices. The epic's universal themes of love, loyalty, and heroism resonate with people around the world, transcending cultural and linguistic barriers.

In conclusion, the Ramayana stands as a testament to the enduring power of storytelling and the profound impact of ancient wisdom on human civilization. Its significance transcends religious boundaries, enriching cultures, shaping societies, and inspiring individuals across generations. As a timeless epic, the Ramayana continues to illuminate the path of righteousness and guide humanity towards truth, compassion, and spiritual fulfillment.Let us now delve more in depth intop the summary of the each kandas ramayana has.
`;
const initialImagePath = "../../images/kanda/image1.png";

export function createKandaButtons() {
  fetch("../../json/kanda.json") // Replace with the path to your JSON file
    .then((response) => response.json())
    .then((kandaData) => {
      const kandaButtonsContainer = document.getElementById("kanda-buttons");

      // Display the summary initially
      const modalContentLeft = document.querySelector("#modal1 .modal-content-left");
      modalContentLeft.innerHTML = kandaSummary;
      const modalContentRight = document.querySelector("#modal1 .modal-content-right");
      const initialImage = document.createElement("img");
      initialImage.src = initialImagePath;
      initialImage.alt = "Default Ramayana Image";
      initialImage.style.width = "100%";
      modalContentRight.appendChild(initialImage);

      kandaData.forEach((kanda) => {
        const button = document.createElement("button");
        button.textContent = kanda.kanda; // Use the 'kanda' property from your JSON
        button.addEventListener("click", () => {
          updateModalContent(kanda.kanda);
        });
        kandaButtonsContainer.appendChild(button);
      });
    })
    .catch((error) => console.error("Error fetching kanda data:", error));
}

export function updateModalContent(kandaName) {
  // Fetch the kanda data from your single JSON file
  fetch("../../json/kanda.json") // Your path to the JSON file
    .then((response) => response.json())
    .then((kandaData) => {
      // Find the matching kanda object
      const matchingKanda = kandaData.find(
        (kanda) => kanda.kanda === kandaName
      );

      if (matchingKanda) {
        // Update modal content and heading
        const modalContentLeft = document.querySelector(
          "#modal1 .modal-content-left"
        );
        modalContentLeft.innerHTML = matchingKanda.about;

        const kandaHeading = document.getElementById("kanda-heading");
        kandaHeading.textContent = kandaName; // Set the heading text

        // Update modal image content
        const modalContentRight = document.querySelector(
          "#modal1 .modal-content-right"
        );
        modalContentRight.innerHTML = ""; // Clear previous image

        // Create and append image element
        const image = document.createElement("img");
        console.log("matching kanda ", matchingKanda);
        image.src = matchingKanda.image; // Use the 'img' property from your JSON
        image.alt = `Image for ${kandaName}`;
        image.style.width = "100%";
        modalContentRight.appendChild(image);
      } else {
        console.error(`Kanda '${kandaName}' not found in the JSON data.`);
      }
    })
    .catch((error) => console.error("Error fetching kanda data:", error));
}