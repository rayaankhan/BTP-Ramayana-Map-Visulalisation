import { toggleArrows } from "./circleArrow.js";
import { zoomSetter } from "./map.js";

// Popup with buttons module for list content
export const openPopupWithList = (idx, arrows, map, pointsData, locations_data) => {

  // idx is the index of the point that is clicked
  // arrows, map, pointsData, locations_data are the same as in the main function

  const point = pointsData[idx];
  const location_name = point.location;
  // console.log(locations_data);
  const location_coordinates = locations_data[location_name];
  const latitude = location_coordinates[0];
  const longitude = location_coordinates[1];

  const container = createPopupContainerWithList(idx, arrows, map, pointsData, locations_data);

  const popup = L.popup({
    maxHeight: 200, // Adjust the maxHeight value as needed
  })
    .setLatLng([latitude, longitude])
    .setContent(container)
    .openOn(map);
};

const getIncidentPointIndexes = (point, pointsData) => {
  let list_incidents = [];
  const location = point.location;
  pointsData.forEach((item, i) => {
    if (item.location == location) {
      list_incidents.push(i);
    }
  });
  return list_incidents;
}

// Popup container creation module for list content
const createPopupContainerWithList = (idx, arrows, map, pointsData, locations_data) => {
  const point = pointsData[idx]; // This is the point which is clicked
  // console.log(point.content);

  const buttonsContainer = L.DomUtil.create("div", "popup-buttons-container");
  
  const list_incident_indexes = getIncidentPointIndexes(point, pointsData);
  list_incident_indexes.forEach((pointIndex, i) => {
    const button_name = pointsData[pointIndex].no;
    const button = buttonCreator(button_name, pointIndex, pointsData, arrows, map, locations_data);
    buttonsContainer.appendChild(button);
  })
  const contentDiv = L.DomUtil.create("div", "popup-content", buttonsContainer);
  const content = point.content;
  // console.log(content);
  contentDiv.innerHTML = content;
  if(idx - 1 >= 0) {
    var prevButton = L.DomUtil.create("button", "popup-button");
    prevButton = buttonCreator("Prev", idx - 1, pointsData, arrows, map, locations_data);
    buttonsContainer.appendChild(prevButton); // buttonsContainer is my full popup box
  }
  if(idx + 1 < pointsData.length) {
    var nextButton = L.DomUtil.create("button", "popup-button");
    nextButton = buttonCreator("Next", idx + 1, pointsData, arrows, map, locations_data);
    buttonsContainer.appendChild(nextButton); // buttonsContainer is my full popup box
  }
  return buttonsContainer;
};

const buttonCreator = (button_name, idx, pointsData, arrows, map, locations_data) => {
  const Button = createButtonWithOnclick(button_name, () => {
    toggleArrows(idx, arrows);
    openPopupWithList(idx, arrows, map, pointsData, locations_data);
    zoomSetter(arrows, idx, map);
  });
  return Button;
};
const createButtonWithOnclick = (label, onClick) => {
  const button = L.DomUtil.create("button", "popup-button");
  button.innerHTML = label;
  button.addEventListener("click", onClick);
  return button;
};
