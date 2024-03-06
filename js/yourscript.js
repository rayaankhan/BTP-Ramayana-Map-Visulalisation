// Initialize the map
const map = L.map("map").setView([20.5937, 78.9629], 5);

// Add a tile layer (you can use other tile providers)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data © OpenStreetMap contributors",
}).addTo(map);

let pointsData = []; // Array to store the points data
let arrows = []; // Array to store the arrows

// Fetch the entire maps.json file
fetch("../json/maps.json")
  .then((response) => response.json())
  .then((data) => {
    pointsData = data.points || [];

    // Add circles and popups to the map
    for (let i = 0; i < pointsData.length; i++) {
      const point = pointsData[i];
      const nextPoint = pointsData[(i + 1) % pointsData.length];
      const circle = L.circle([point.lat, point.lon], {
        color: "red",
        fillColor: "red",
        fillOpacity: 1,
        radius: 5,
      }).addTo(map);

      // Create arrows (lines) corresponding to each point
      const arrow = L.polyline(
        [
          [point.lat, point.lon],
          [nextPoint.lat, nextPoint.lon],
        ],
        {
          color: "blue",
          weight: 2,
          opacity: 0, // Initially hide the arrows
        }
      ).addTo(map);
      arrows.push(arrow);

      // Create a container for popup content
      const container = L.DomUtil.create("div", "popup-container");

      // Create a separate div for the popup content
      const contentDiv = L.DomUtil.create("div", "popup-content", container);
      contentDiv.innerHTML = point.content;

      // Add next and previous buttons to the container
      const nextButton = L.DomUtil.create("button", "popup-button", container);
      nextButton.innerHTML = "Next";
      nextButton.addEventListener("click", () => {
        const nextIndex = (i + 1) % pointsData.length;
        openPopupWithButtons(pointsData[nextIndex], nextIndex);
      });

      const prevButton = L.DomUtil.create("button", "popup-button", container);
      prevButton.innerHTML = "Previous";
      prevButton.addEventListener("click", () => {
        const prevIndex = (i - 1 + pointsData.length) % pointsData.length;
        openPopupWithButtons(pointsData[prevIndex], prevIndex);
      });

      // Add a popup with the container as content
      const popup = circle.bindPopup(container, { className: "custom-popup" });
      circle.on("click", () => {
        toggleArrows(i);
        openPopupWithButtons(point, i);
      });
    }
  })
  .catch((error) => console.error("Error fetching data:", error));

// Function to open popup with buttons
function openPopupWithButtons(point, index) {
  const container = L.DomUtil.create("div", "popup-container");

  const contentDiv = L.DomUtil.create("div", "popup-content", container);
  contentDiv.innerHTML = point.content;

  const nextButton = L.DomUtil.create("button", "popup-button", container);
  nextButton.innerHTML = "Next";
  nextButton.addEventListener("click", () => {
    map.closePopup();
    const nextIndex = (index + 1) % pointsData.length;
    toggleArrows(nextIndex)
    openPopupWithButtons(pointsData[nextIndex], nextIndex);
  });

  const prevButton = L.DomUtil.create("button", "popup-button", container);
  prevButton.innerHTML = "Previous";
  prevButton.addEventListener("click", () => {
    map.closePopup();
    const prevIndex = (index - 1 + pointsData.length) % pointsData.length;
    toggleArrows(prevIndex)
    openPopupWithButtons(pointsData[prevIndex], prevIndex);
  });

  const popup = L.popup()
      .setLatLng([point.lat, point.lon])
      .setContent(container)
      .openOn(map);
}

function toggleArrows(selectedIndex) {
  arrows.forEach((arrow, index) => {
    arrow.setStyle({ opacity: index === selectedIndex ? 1 : 0 });
  });
}

// Get the sidebar and toggle button elements
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");

// Add an event listener to the toggle button to open and close the sidebar
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  map.invalidateSize(); // Trigger a map resize event to adjust the map to the new width
});

// Add event listeners to the navbar links
const navbarLinks = document.querySelectorAll("#menu a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default behavior of the link

    // Get the href attribute of the link
    const href = link.getAttribute("href");

    // Load the corresponding page using AJAX (for example, using jQuery)
    $.ajax({
      url: href,
      success: function (data) {
        // Update the content of the page with the data returned from the server
        $("#content").html(data);
      },
    });
  });
});
var modalBtns = document.querySelectorAll(".modal-open");
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
var closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = (btn.closest(".modal").style.display = "none");
  };
});
