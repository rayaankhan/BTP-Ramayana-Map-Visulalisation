import { toggleArrows } from "./circleArrow.js";

// Popup with buttons module for list content
export const openPopupWithList = (point, subindex, arrows, map, pointsData) => {
    const container = createPopupContainerWithList(
      point,
      subindex,
      arrows,
      map,
      pointsData
    );
  
    const popup = L.popup()
      .setLatLng([point.lat, point.lon])
      .setContent(container)
      .openOn(map);
  };

// Popup container creation module for list content
const createPopupContainerWithList = (point, subindex, arrows, map, pointsData) => {
    const buttonsContainer = L.DomUtil.create("div", "popup-buttons-container");
    var nextButton = L.DomUtil.create("button", "popup-button");
    // buttonsContainer.appendChild(nextButton);
    nextButton = nextButtonCreator(
      point.list_content[subindex - 1],
      pointsData,
      arrows,
      map
    );
    var prevButton = prevButtonCreator(
      point.list_content[subindex - 1],
      pointsData,
      arrows,
      map
    );
    buttonsContainer.appendChild(nextButton);
    buttonsContainer.appendChild(prevButton);
  
    point.list_content.forEach((item, i) => {
      const button = createPopupButton(i, () => {
        contentDiv.innerHTML = item.content;
        buttonsContainer.removeChild(nextButton);
        buttonsContainer.removeChild(prevButton);
        nextButton = nextButtonCreator(item, pointsData, arrows, map);
        prevButton = prevButtonCreator(item, pointsData, arrows, map);
        buttonsContainer.appendChild(prevButton);
        buttonsContainer.appendChild(nextButton);
      });
      buttonsContainer.appendChild(button);
    });
    const contentDiv = L.DomUtil.create("div", "popup-content", buttonsContainer);
    contentDiv.innerHTML = point.list_content[subindex - 1].content;
    buttonsContainer.removeChild(nextButton);
    buttonsContainer.removeChild(prevButton);
    buttonsContainer.appendChild(prevButton);
    buttonsContainer.appendChild(nextButton);
  
    return buttonsContainer;
  };

  const nextButtonCreator = (item, pointsData, arrows, map) => {
    const nextButton = createPopupButton("Next", () => {
      const nextno = item.nextno;
      const nextSubIndex = item.nextsubno;
      const nextPoint = pointsData[nextno - 1];
      toggleArrows(nextno - 1, arrows);
      openPopupWithList(nextPoint, nextSubIndex, arrows, map, pointsData);
    });
    return nextButton;
  };
  
  const prevButtonCreator = (item, pointsData, arrows, map) => {
    const prevButton = createPopupButton("Previous", () => {
      const prevno = item.prevno;
      if(prevno == -1) return -1;
      const prevSubIndex = item.prevsubno;
      const prevPoint = pointsData[prevno - 1];
      toggleArrows(prevno - 1, arrows);
      openPopupWithList(prevPoint, prevSubIndex, arrows, map, pointsData);
    });
    return prevButton;
  };

// Popup button creation module
const createPopupButton = (label, onClick) => {
    const button = L.DomUtil.create("button", "popup-button");
    button.innerHTML = label;
    button.addEventListener("click", onClick);
    return button;
  };