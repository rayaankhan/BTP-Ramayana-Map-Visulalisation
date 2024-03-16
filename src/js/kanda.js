export function createKandaButtons() {
  fetch("../../json/kanda.json") // Replace with the path to your JSON file
    .then((response) => response.json())
    .then((kandaData) => {
      const kandaButtonsContainer = document.getElementById("kanda-buttons");
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
          image.src = matchingKanda.img; // Use the 'img' property from your JSON
          image.alt = `Image for ${kandaName}`;
          modalContentRight.appendChild(image);
        } else {
          console.error(`Kanda '${kandaName}' not found in the JSON data.`);
        }
      })
      .catch((error) => console.error("Error fetching kanda data:", error));
  }