// main.js
import { initializeMap, getData } from '../modules/map.js';
import { createCirclesAndArrowsWithList } from '../modules/circleArrow.js';
import { setupSidebar, setupNavbarLinks, setupModals } from '../modules/setup.js';
const data_path = "../../../json/kandas/kiskindha.json";
const location_file_path = "../../../json/location.json";
const marker_color = "orange";
// console.log("Kiskindha")

// Main execution
const map = initializeMap();
// console.log(map);

// console.log(location_data)
getData(data_path).then((pointsData) => {
  // console.log(pointsData);
  getData(location_file_path).then((location_data) => {
    const creationPromise = new Promise((resolve, reject) => {
      const [arrows, circles] = createCirclesAndArrowsWithList(map, pointsData.points, location_data, marker_color);
      resolve([arrows, circles]);
    });

    creationPromise.then(([arrows, circles]) => {
      // Now circles array is fully populated, you can safely access it here.
    }).catch(error => {
      console.error('Error creating circles and arrows:', error);
    });
  });
});
setupSidebar(map);
setupNavbarLinks();
setupModals();
