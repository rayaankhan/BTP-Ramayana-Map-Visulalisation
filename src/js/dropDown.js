import { getData, initializeMap } from "./modules/map.js";
import { createCirclesAndArrowsWithList } from "./modules/circleArrow.js";
import { setupSidebar, setupNavbarLinks, setupModals } from "./modules/setup.js";
import { createKandaButtons, updateModalContent } from "./kanda.js";
const data_path = "../../json/main.json";
const location_file_path = "../../json/location.json";
const marker_color = "blue";

const mapInitializer = (incidentNumber) => {
  const map = initializeMap();
  getData(data_path).then((pointsData) => {
  getData(location_file_path).then((location_data) => {
    const arrows = createCirclesAndArrowsWithList(map, pointsData.points, location_data, marker_color,incidentNumber);
  });
});
setupSidebar(map);
setupNavbarLinks();
setupModals();
createKandaButtons();
};
const populateDropdownMenu = async () => {
  try {
    const response = await fetch('../../json/main.json');
    const data = await response.json();
    const dropdownContent = document.getElementById('guide-dropdown-content');

    if (Array.isArray(data.points)) {
      // Iterate over each item in the points array
      data.points.forEach((item, index) => {
        const heading = `${item.no}. ${item.topic}`;
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.style.border = 'none'; 
        button.style.backgroundColor = 'transparent';
        button.style.color = 'white';
        button.textContent = heading;
        button.addEventListener('mouseover', () => {
          button.style.color = 'rgb(240, 100, 6)';
        });
        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = 'transparent';
          button.style.color = 'white';
        });
        button.addEventListener('click', function () {
          console.log("pompom",item.no);
          mapInitializer(item.no);
        });
        listItem.appendChild(button);
        dropdownContent.appendChild(listItem);
      });              
    } else {
      console.error('Error: Data points is not an array');
    }
  } catch (error) {
    console.error('Error fetching or parsing JSON:', error);
  }
};

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

populateDropdownMenu();
handleDropdownOverflow();