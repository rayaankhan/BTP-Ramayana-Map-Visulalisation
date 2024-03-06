// Map initialization module
const initializeMap = () => {
  const map = L.map("map").setView([20.5937, 78.9629], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Map data © OpenStreetMap contributors",
  }).addTo(map);

  return map;
};

// Points data retrieval module
const getPointsData = async () => {
  try {
    const response = await fetch("../json/maps.json");
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

const createArrow = (point, nextPoint) => {
  return L.polyline(
    [
      [point.lat, point.lon],
      [nextPoint.lat, nextPoint.lon],
    ],
    {
      color: "blue",
      weight: 2,
      opacity: 0,
    }
  ).addTo(map);
};

// Circle and arrow creation module
const createCirclesAndArrows = (map, pointsData) => {
  const arrows = [];

  for (let i = 0; i < pointsData.length; i++) {
    const point = pointsData[i];
    const nextPoint = pointsData[(i + 1) % pointsData.length];
    const circle = createCircle(point);
    const arrow = createArrow(point, nextPoint);
    arrows.push(arrow);

    const container = createPopupContainer(point, i, pointsData, arrows, map);
    const popup = circle.bindPopup(container, { className: "custom-popup" });

    circle.on("click", () => {
      toggleArrows(i, arrows);
      openPopupWithButtons(point, i, pointsData, arrows, map);
    });
  }

  return arrows;
};

// Popup container creation module
const createPopupContainer = (point, index, pointsData, arrows, map) => {
  const container = L.DomUtil.create("div", "popup-container");
  const contentDiv = L.DomUtil.create("div", "popup-content", container);
  contentDiv.innerHTML = point.content;

  const nextButton = createPopupButton("Next", () => {
    const nextIndex = (index + 1) % pointsData.length;
    // map.closePopup();
    toggleArrows(nextIndex, arrows);
    openPopupWithButtons(
      pointsData[nextIndex],
      nextIndex,
      pointsData,
      arrows,
      map
    );
  });

  const prevButton = createPopupButton("Previous", () => {
    const prevIndex = (index - 1 + pointsData.length) % pointsData.length;
    // map.closePopup();
    toggleArrows(prevIndex, arrows);
    openPopupWithButtons(
      pointsData[prevIndex],
      prevIndex,
      pointsData,
      arrows,
      map
    );
  });

  container.appendChild(nextButton);
  container.appendChild(prevButton);

  return container;
};

// Popup button creation module
const createPopupButton = (label, onClick) => {
  const button = L.DomUtil.create("button", "popup-button");
  button.innerHTML = label;
  button.addEventListener("click", onClick);
  return button;
};

// Popup with buttons module
const openPopupWithButtons = (point, index, pointsData, arrows, map) => {
  const container = createPopupContainer(point, index, pointsData, arrows, map);

  const popup = L.popup()
    .setLatLng([point.lat, point.lon])
    .setContent(container)
    .openOn(map);
};

// Arrows visibility toggle module
const toggleArrows = (selectedIndex, arrows) => {
  arrows.forEach((arrow, index) => {
    arrow.setStyle({ opacity: index === selectedIndex ? 1 : 0 });
  });
};

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

// Main execution
const map = initializeMap();
getPointsData().then((pointsData) => {
  const arrows = createCirclesAndArrows(map, pointsData);
});

setupSidebar();
setupNavbarLinks();
setupModals();
