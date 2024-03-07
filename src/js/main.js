// main.js
import { initializeMap, getPointsData } from './modules/map.js';
import { createCirclesAndArrowsWithList } from './modules/circleArrow.js';
import { setupSidebar, setupNavbarLinks, setupModals } from './modules/setup.js';
const data_path = "../../json/new_maps.json";

// Main execution
const map = initializeMap();
getPointsData(data_path).then((pointsData) => {
  const arrows = createCirclesAndArrowsWithList(map, pointsData);
});



setupSidebar();
setupNavbarLinks();
setupModals();
