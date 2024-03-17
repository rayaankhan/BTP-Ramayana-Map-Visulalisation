
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

export const zoomSetter = (arrows, idx, map) => {
  const options = {
    paddingTopLeft: [150, 150], // Add padding to the top left corner (in pixels)
    paddingBottomRight: [100, 100], // Add padding to the bottom right corner (in pixels)
  };
  if(idx == arrows.length){
    return -1;
  }
  const arrowCoordinates = arrows[idx].getLatLngs();
  if(arrowCoordinates[0].lat == arrowCoordinates[1].lat && arrowCoordinates[0].lng == arrowCoordinates[1].lng) {
    map.setView(arrowCoordinates[0], 7, options);
  }
  else{
    map.flyToBounds(arrowCoordinates, options);
  }
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
