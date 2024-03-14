// main.js
import { initializeMap, getData } from './modules/map.js';
import { createCirclesAndArrowsWithList } from './modules/circleArrow.js';
import { setupSidebar, setupNavbarLinks, setupModals } from './modules/setup.js';
const data_path = "../../json/updated_maps.json";
const location_file_path = "../../json/location.json";

// Main execution
const map = initializeMap();

// console.log(location_data)
getData(data_path).then((pointsData) => {
  getData(location_file_path).then((location_data) => {
    const arrows = createCirclesAndArrowsWithList(map, pointsData.points, location_data);
  });
});



setupSidebar();
setupNavbarLinks();
setupModals();
