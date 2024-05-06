const referencestorys_path = "../../json/referencestory.json";

function openReferenceStoryModal(referencestoryName) {
    // Fetch the referencestory description from the referencestorys.json file
    fetch(referencestorys_path)
        .then(response => response.json())
        .then(data => {
            console.log("HOI!!!"); // Log the fetched data to the console
            const referencestoryDescription = data.find(referencestory => referencestory.name === referencestoryName);
            // Display the referencestory modal with the fetched description
            if (referencestoryDescription) {
                // Open modal with referencestory description
                const modalContent = document.querySelector('#modal6 .modal-content');

                modalContent.innerHTML = `
                    <div class="modal-header">
                        ${referencestoryName}
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-left" style="width: 60%;">
                        <p style="color: white;">${referencestoryDescription.about}</p>
                        </div>
                        <div class="modal-body-right" style="width: 40%; margin-left: 10px;height: 80%; display: flex; justify-content: center; align-items: center;">
                            <img src="${referencestoryDescription.image}" alt="${referencestoryName}" style="max-height: 100%; max-width: 100%;">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="modal-close">Close Modal</button>
                    </div>
                `;
                const modal = document.getElementById('modal6');
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
                console.error(`referencestory '${referencestoryName}' not found.`);
            }
        })
        .catch(error => {
            console.error('Error fetching referencestory description:', error);
        });
}
console.log("HOIAAA!!!"); // Log the fetched data to the console
fetch(referencestorys_path)
    .then(response => response.json())
    .then(data => {
        console.log("data:",data)
        const referencestoryCardsContainer = document.querySelector('.referencestory-cards');
        console.log("referencestoryCardsContainer:",referencestoryCardsContainer)
        // Loop through the data and create referencestory cards
        data.forEach(referencestory => {
            const referencestoryCard = document.createElement('div');
            referencestoryCard.classList.add('referencestory-card');

            // Set the click event to open modal
            referencestoryCard.onclick = () => openReferenceStoryModal(referencestory.name);

            // Create and append image element
            const image = document.createElement('img');
            image.src = referencestory.image;
            image.alt = referencestory.name;
            image.style.height = '90%'; // Set image height to 85% of the referencestory card
            referencestoryCard.appendChild(image);

            // Create and append referencestory name element
            const name = document.createElement('p');
            name.textContent = referencestory.name;
            name.style.height = '10%'; // Set name height to 15% of the referencestory card
            referencestoryCard.appendChild(name);
            // Append the referencestory card to the container
            referencestoryCardsContainer.appendChild(referencestoryCard);
        });
    })
    .catch(error => console.error('Error fetching referencestory data:', error));
