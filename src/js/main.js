// main.js
import { initializeMap, getData } from './modules/map.js';
import { createCirclesAndArrowsWithList } from './modules/circleArrow.js';
import { setupSidebar, setupNavbarLinks, setupModals } from './modules/setup.js';
import { createKandaButtons, updateModalContent } from './kanda.js';
const data_path = "../../json/main.json";
const location_file_path = "../../json/location.json";
const marker_color = "blue";

// console.log("Main")

// Main execution
const map = initializeMap();
// console.log(map);

getData(data_path).then((pointsData) => {
  getData(location_file_path).then((location_data) => {
    const arrows = createCirclesAndArrowsWithList(map, pointsData.points, location_data, marker_color,1);
  });
});
setupSidebar(map);
setupNavbarLinks();
setupModals();
createKandaButtons();
