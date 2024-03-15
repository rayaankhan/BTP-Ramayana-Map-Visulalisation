// main.js
import { initializeMap, getData } from '../modules/map.js';
import { createCirclesAndArrowsWithList } from '../modules/circleArrow.js';
import { setupSidebar, setupNavbarLinks, setupModals } from '../modules/setup.js';
const data_path = "../../../json/kandas/aranya.json";
const location_file_path = "../../../json/location.json";

console.log("Aranya")

// Main execution
const map = initializeMap();
// console.log(map);

// console.log(location_data)
getData(data_path).then((pointsData) => {
  // console.log(pointsData);
  getData(location_file_path).then((location_data) => {
    const arrows = createCirclesAndArrowsWithList(map, pointsData.points, location_data);
  });
});
setupSidebar();
setupNavbarLinks();
setupModals();
