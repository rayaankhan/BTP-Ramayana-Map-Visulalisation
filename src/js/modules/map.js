// map.js
// import * as L from 'leaflet';

// export const initializeMap = () => {
//   const map = L.map("map").setView([20.5937, 78.9629], 5);

//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "Map data © OpenStreetMap contributors",
//   }).addTo(map);

//   return map;
// };

let mapInstance = null; // variable to store the map instance
let isMapInitialized = false; // flag to track initialization status

export const initializeMap = () => {
  if (!isMapInitialized) {
    // Initialize the map if it's not already initialized
    mapInstance = L.map("map").setView([20.5937, 78.9629], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data © OpenStreetMap contributors",
    }).addTo(mapInstance);

    isMapInitialized = true; // update the initialization status
  } else {
    // If map is already initialized, remove the existing map
    mapInstance.remove();
    // Create a new map instance
    mapInstance = L.map("map").setView([20.5937, 78.9629], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data © OpenStreetMap contributors",
    }).addTo(mapInstance);
  }
  
  return mapInstance;
};





// Points data retrieval module
export const getData = async (data_path) => {
  try {
    // console.log(data_path);
    const response = await fetch(data_path);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
