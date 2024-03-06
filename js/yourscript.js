// Map initialization module
const initializeMap = () => {
  const map = L.map("map").setView([20.5937, 78.9629], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map data © OpenStreetMap contributors",
  }).addTo(map);

  return map;
};

data_path = "../json/new_maps.json";

// Points data retrieval module
const getPointsData = async () => {
  try {
    const response = await fetch(data_path);
    const data = await response.json();
    return data.points || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const createCircle = (point) => {
  return L.circle([point.lat, point.lon], {
    color: "red",
    fillColor: "red",
    fillOpacity: 1,
    radius: 5,
  }).addTo(map);
};

const addArrowToMap = (lat, lon, nextlat, nextlon) => {
  return L.polyline(
    [
      [lat, lon],
      [nextlat, nextlon],
    ],
    {
      color: "blue",
      weight: 2,
      opacity: 0,
    }
  ).addTo(map);
};

// This function takes an idx and iterates through all the incidents happened here saves their idx and subno and returns that array
const createArrow = (pointsdata, idx) => {
  let next_location = [];
  let arrows = [];
  const lat = pointsdata[idx].lat;
  const lon = pointsdata[idx].lon;
  list_content = pointsdata[idx].list_content;
  for (let i = 0; i < list_content.length; i++) {
    const nextno = list_content[i].nextno - 1;
    const nextsubno = list_content[i].nextsubno - 1;
    next_location.push([nextno, nextsubno]);
    arrows.push(
      addArrowToMap(lat, lon, pointsdata[nextno].lat, pointsdata[nextno].lon)
    );
  }
  // console.log(idx, arrows);
  return [next_location, arrows];
};

// Circle and arrow creation module
// const createCirclesAndArrows = (map, pointsData) => {
//   const arrows = [];

//   for (let i = 0; i < pointsData.length; i++) {
//     const point = pointsData[i];
//     const nextPoint = pointsData[(i + 1) % pointsData.length];
//     const circle = createCircle(point);
//     const arrow = createArrow(point, nextPoint);
//     arrows.push(arrow);

//     const container = createPopupContainer(point, i, pointsData, arrows, map);
//     const popup = circle.bindPopup(container, { className: "custom-popup" });

<<<<<<< Updated upstream
    circle.on("click", () => {
      toggleArrows(i, arrows);
      openPopupWithButtons(point, i, pointsData, arrows, map);
    });
  }
};
=======
//     circle.on("click", () => {
//       toggleArrows(i, arrows);
//       openPopupWithButtons(point, i, pointsData, arrows, map);
//     });
//   }
// };
>>>>>>> Stashed changes

// // Popup container creation module
// const createPopupContainer = (point, index, pointsData, arrows, map) => {
//   const container = L.DomUtil.create("div", "popup-container");
//   const contentDiv = L.DomUtil.create("div", "popup-content", container);
//   contentDiv.innerHTML = point.content;

//   const nextButton = createPopupButton("Next", () => {
//     const nextIndex = (index + 1) % pointsData.length;
//     // map.closePopup();
//     toggleArrows(nextIndex, arrows);
//     openPopupWithButtons(
//       pointsData[nextIndex],
//       nextIndex,
//       pointsData,
//       arrows,
//       map
//     );
//   });

//   const prevButton = createPopupButton("Previous", () => {
//     const prevIndex = (index - 1 + pointsData.length) % pointsData.length;
//     // map.closePopup();
//     toggleArrows(prevIndex, arrows);
//     openPopupWithButtons(
//       pointsData[prevIndex],
//       prevIndex,
//       pointsData,
//       arrows,
//       map
//     );
//   });

//   container.appendChild(nextButton);
//   container.appendChild(prevButton);

//   return container;
// };

// Popup button creation module
const createPopupButton = (label, onClick) => {
  const button = L.DomUtil.create("button", "popup-button");
  button.innerHTML = label;
  button.addEventListener("click", onClick);
  return button;
};

// Popup with buttons module
// const openPopupWithButtons = (point, index, pointsData, arrows, map) => {
//   const container = createPopupContainer(point, index, pointsData, arrows, map);

//   const popup = L.popup()
//     .setLatLng([point.lat, point.lon])
//     .setContent(container)
//     .openOn(map);
// };

// Sidebar and toggle button module
const setupSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    map.invalidateSize();
  });
};

// Navbar links event listener module
const setupNavbarLinks = () => {
  const navbarLinks = document.querySelectorAll("#menu a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      $.ajax({
        url: href,
        success: function (data) {
          $("#content").html(data);
        },
      });
    });
  });
};

// Modal functionality module
const setupModals = () => {
  const modalBtns = document.querySelectorAll(".modal-open");

  modalBtns.forEach((btn) => {
    btn.onclick = function () {
      const modal = btn.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
    };
  });

  const closeBtns = document.querySelectorAll(".modal-close");

  closeBtns.forEach((btn) => {
    btn.onclick = function () {
      const modal = btn.closest(".modal");
      modal.style.display = "none";
    };
  });
};

const nextButtonCreator = (item, pointsData, arrows) => {
  nextButton = createPopupButton("Next", () => {
    const nextno = item.nextno;
    const nextSubIndex = item.nextsubno;
    const nextPoint = pointsData[nextno - 1];
    toggleArrows(nextno - 1, arrows);
    openPopupWithList(nextPoint, nextSubIndex, arrows, map, pointsData);
  });
  return nextButton;
};

const prevButtonCreator = (item, pointsData, arrows) => {
  prevButton = createPopupButton("Previous", () => {
    const prevno = item.prevno;
    if(prevno == -1) return -1;
    const prevSubIndex = item.prevsubno;
    const prevPoint = pointsData[prevno - 1];
    toggleArrows(prevno - 1, arrows);
    openPopupWithList(prevPoint, prevSubIndex, arrows, map, pointsData);
  });
  return prevButton;
};

// Popup container creation module for list content
const createPopupContainerWithList = (point, subindex, arrows, map, pointsData) => {
  const buttonsContainer = L.DomUtil.create("div", "popup-buttons-container");
  var nextButton = L.DomUtil.create("button", "popup-button");
  // buttonsContainer.appendChild(nextButton);
  nextButton = nextButtonCreator(
    point.list_content[subindex - 1],
    pointsData,
    arrows
  );
  prevButton = prevButtonCreator(
    point.list_content[subindex - 1],
    pointsData,
    arrows
  );
  buttonsContainer.appendChild(nextButton);
  buttonsContainer.appendChild(prevButton);

  point.list_content.forEach((item, i) => {
    const button = createPopupButton(i, () => {
      contentDiv.innerHTML = item.content;
      buttonsContainer.removeChild(nextButton);
      buttonsContainer.removeChild(prevButton);
      nextButton = nextButtonCreator(item, pointsData, arrows);
      prevButton = prevButtonCreator(item, pointsData, arrows);
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

// Create circle with list content
const createResponsiveCircle = (point, onClick) => {
  const circle = createCircle(point);
  circle.on("click", onClick);
  return circle;
};

const setAllOtherToOpaque = (arrows) => {
  arrows.forEach((arrow) => {
    arrow.forEach((line) => {
      line.setStyle({ opacity: 0 });
    });
  });
};

// Arrows visibility toggle module
const toggleArrows = (selectedIndex, arrows) => {
  setAllOtherToOpaque(arrows);
  const selectedArrows = arrows[selectedIndex] || [];
  selectedArrows.forEach((arrow) => {
    arrow.setStyle({ opacity: 1 });
  });
};

// Popup with buttons module for list content
const openPopupWithList = (point, subindex, arrows, map, pointsData) => {
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

// Circle and arrow creation module with list content
const createCirclesAndArrowsWithList = (map, pointsData) => {
  const arrows = [];
  const next_location = [];

  for (let i = 0; i < pointsData.length; i++) {
    const point = pointsData[i];
    const nextPoint = pointsData[(i + 1) % pointsData.length];
    const circle = createResponsiveCircle(point, () => {
      toggleArrows(i, arrows);
      openPopupWithList(point, 1, arrows, map, pointsData);
    });

    const [next_location_list, arrow_list] = createArrow(pointsData, i);
    arrows.push(arrow_list);
    next_location.push(next_location_list);

    circle.addTo(map);
  }

  return arrows;
};
// Main execution
const map = initializeMap();
getPointsData().then((pointsData) => {
  const arrows = createCirclesAndArrowsWithList(map, pointsData);
});


setupSidebar();
setupNavbarLinks();
setupModals();
