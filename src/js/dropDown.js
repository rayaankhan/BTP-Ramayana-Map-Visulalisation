const populateDropdownMenu = async () => {
    try {
        const response = await fetch('../../json/main.json');
        const data = await response.json();
        const dropdownContent = document.getElementById('guide-dropdown-content');

        // Check if data.points is an array
        if (Array.isArray(data.points)) {
            // Iterate over each item in the points array
            data.points.forEach((item, index) => {
                const heading = `${item.no}. ${item.topic}`;
                const listItem = document.createElement('li');
                listItem.textContent = heading;
                dropdownContent.appendChild(listItem);
              });              
        } else {
            console.error('Error: Data points is not an array');
        }
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
};
// Handle dropdown menu overflow
const handleDropdownOverflow = () => {
    const dropdownButton = document.getElementById('guide-dropdown-btn');
    const dropdownContent = document.getElementById('guide-dropdown-content');
    
    dropdownButton.addEventListener('click', () => {
      dropdownContent.classList.toggle('show');
    });
  
    // Close dropdown when clicking outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#guide-dropdown-btn')) { // Use the ID selector
          if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
          }
        }
      });
  };
  
  // Call functions to populate dropdown menu and handle overflow
  populateDropdownMenu();
  handleDropdownOverflow();