const characters_path = "../../json/characters.json";

function openCharacterModal(characterName) {
    // Fetch the character description from the characters.json file
    fetch(characters_path)
        .then(response => response.json())
        .then(data => {
            // console.log(data); // Log the fetched data to the console
            const characterDescription = data.find(character => character.name === characterName);
            // Display the character modal with the fetched description
            if (characterDescription) {
                // Open modal with character description
                const modalContent = document.querySelector('#modal5 .modal-content');
                modalContent.innerHTML = `
                    <div class="modal-header">
                        ${characterName}
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>${characterDescription.about}</p>
                    </div>
                    <div class="modal-footer">
                        <button class="modal-close">Close Modal</button>
                    </div>
                `;
                const modal = document.getElementById('modal5');
                modal.style.display = 'flex';

                // Add event listeners to close buttons
                const closeButtonTop = modal.querySelector('.modal-header .modal-close');
                const closeButtonBottom = modal.querySelector('.modal-footer .modal-close');

                closeButtonTop.addEventListener('click', () => {
                    modal.style.display = 'none';
                    location.reload(); // Reload the page upon closing the modal
                });

                closeButtonBottom.addEventListener('click', () => {
                    modal.style.display = 'none';
                    location.reload(); // Reload the page upon closing the modal
                });

                // Add event listener to overlay to close modal
                modal.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                        location.reload(); // Reload the page upon closing the modal
                    }
                });

                // Prevent modal propagation to parent modals
                modal.onclick = (event) => {
                    event.stopPropagation();
                };
            } else {
                console.error(`Character '${characterName}' not found.`);
            }
        })
        .catch(error => {
            console.error('Error fetching character description:', error);
        });
}

fetch(characters_path)
    .then(response => response.json())
    .then(data => {
        const characterCardsContainer = document.querySelector('.character-cards');

        // Loop through the data and create character cards
        data.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');

            // Set the click event to open modal
            characterCard.onclick = () => openCharacterModal(character.name);

            // Create and append image element
            const image = document.createElement('img');
            image.src = character.image;
            image.alt = character.name;
            characterCard.appendChild(image);

            // Create and append character name element
            const name = document.createElement('p');
            name.textContent = character.name;
            characterCard.appendChild(name);

            // Append the character card to the container
            characterCardsContainer.appendChild(characterCard);
        });
    })
    .catch(error => console.error('Error fetching character data:', error));
