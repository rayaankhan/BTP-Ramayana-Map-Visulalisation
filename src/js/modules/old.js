import { toggleArrows } from "./circleArrow.js";

// Popup with buttons module for list content
export const openPopupWithList = (
  idx,
  arrows,
  map,
  pointsData,
  locations_data
) => {
  const point = pointsData[idx];
  const location_name = point.location;
  const location_coordinates = locations_data[location_name];
  const latitude = location_coordinates[0];
  const longitude = location_coordinates[1];

  const container = createPopupContainerWithList(idx, arrows, map, pointsData, locations_data);

  const popup = L.popup()
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
  const buttonsContainer = L.DomUtil.create("div", "popup-buttons-container");
  var nextButton = L.DomUtil.create("button", "popup-button");
  // buttonsContainer.appendChild(nextButton);
  nextButton = buttonCreator("Next", idx + 1, pointsData, arrows, map);
  // var prevButton = prevButtonCreator( point.list_content[subindex - 1], pointsData, arrows, map);
  buttonsContainer.appendChild(nextButton);
  // buttonsContainer.appendChild(prevButton);
  list_incident_indexes = getIncidentPointIndexes(point, pointsData);
  point.list_content.forEach((item, i) => {
    const button = createPopupButton(i, () => {
      contentDiv.innerHTML = item.content;
      buttonsContainer.removeChild(nextButton);
      // buttonsContainer.removeChild(prevButton);
      nextButton = buttonCreator("Next", item, pointsData, arrows, map);
      // prevButton = prevButtonCreator(item, pointsData, arrows, map);
      // buttonsContainer.appendChild(prevButton);
      buttonsContainer.appendChild(nextButton);
    });
    buttonsContainer.appendChild(button);
  });
  const contentDiv = L.DomUtil.create("div", "popup-content", buttonsContainer);
  contentDiv.innerHTML = point.list_content[subindex - 1].content;
  buttonsContainer.removeChild(nextButton);
  // buttonsContainer.removeChild(prevButton);
  // buttonsContainer.appendChild(prevButton);
  buttonsContainer.appendChild(nextButton);

  return buttonsContainer;
};

const buttonCreator = (button_name, idx, pointsData, arrows, map) => {
  const Button = createPopupButton(button_name, () => {
    const point = pointsData[idx];
    toggleArrows(idx, arrows);
    openPopupWithList(nextPoint, nextSubIndex, arrows, map, pointsData);
  });
  return Button;
};

// const prevButtonCreator = (item, pointsData, arrows, map) => {
//   const prevButton = createPopupButton("Previous", () => {
//     const prevno = item.prevno;
//     if (prevno == -1) return -1;
//     const prevSubIndex = item.prevsubno;
//     const prevPoint = pointsData[prevno - 1];
//     toggleArrows(prevno - 1, arrows);
//     openPopupWithList(prevPoint, prevSubIndex, arrows, map, pointsData);
//   });
//   return prevButton;
// };

// Popup button creation module
const createPopupButton = (label, onClick) => {
  const button = L.DomUtil.create("button", "popup-button");
  button.innerHTML = label;
  button.addEventListener("click", onClick);
  return button;
};
