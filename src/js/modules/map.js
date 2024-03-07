// map.js
// import * as L from 'leaflet';

export const initializeMap = () => {
  const map = L.map("map").setView([20.5937, 78.9629], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map data © OpenStreetMap contributors",
  }).addTo(map);

  return map;
};

// Points data retrieval module
export const getPointsData = async (data_path) => {
  try {
    const response = await fetch(data_path);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data.points || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
