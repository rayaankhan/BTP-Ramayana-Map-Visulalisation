
import { openPopupWithList } from "./popup.js";
import { zoomSetter } from "./map.js";

export const createCirclesAndArrowsWithList = async (
  map,
  pointsData,
  locations_data,
  marker_color,
  incidentNumber
) => {
  const arrows = [];
  const circles = [];
  const circles2 = [];
  const location_repeater = []; // stores all the unique locations
  const repeated_location = []; // stores all the repeated locations
  console.log("inci:->",incidentNumber)
  for (let i = 0; i < pointsData.length; i++) {
    const point = pointsData[i];
    const circle = await createResponsiveCircle(map, point, locations_data, marker_color, () => {
      toggleArrows(i, arrows);
      openPopupWithList(i, arrows, map, pointsData, locations_data);
      zoomSetter(arrows, i, map);
    });
    circles2.push(circle);
    let fl = 0;
    location_repeater.forEach((item, i) => {
      if (point.location == item) {
        fl = 1;
      }
    });
    if (fl == 0) {
      location_repeater.push(point.location);
      try {
        const circle = await createResponsiveCircle(map, point, locations_data, marker_color, () => {
          toggleArrows(i, arrows);
          openPopupWithList(i, arrows, map, pointsData, locations_data);
          zoomSetter(arrows, i, map);
          location_repeater.push(point.location);
        });
        circles.push(circle);
      } catch (error) {
        console.error("Error creating circle:", error);
      }
    }

    const arrow = createArrow(pointsData, i, map, locations_data);
    if (arrow != -1) {
      arrows.push(arrow);
    }
  }
  // if (incidentNumber == 1 && circles.length > 0) {
  //   circles[0].fire("click");
  // }
  if (incidentNumber ==1 && circles.length > 0) {
    circles[0].fire("click");
  } else if (incidentNumber && circles2.length > incidentNumber - 1) {
    circles2[incidentNumber -1].fire("click");
  } 

  return [arrows, circles];
};

// Create circle with list content
const createCircle = (point, map, locations_data, marker_color) => {
  let location_name = point.location;

  // Return a Promise that resolves with the circle object
  let location_coordinates = locations_data[location_name];
  let latitude = location_coordinates[0];
  let longitude = location_coordinates[1];
  let circle = 0;

  // Define a custom icon with orange color
  // console.log("color is: ", marker_color);
  const icon_location = `../../../images/marker/${marker_color}.png`;
  const coloredIcon = L.icon({
    iconUrl: icon_location, // URL to the marker icon image
    iconSize: [25, 41], // Size of the icon (width, height) in pixels
    iconAnchor: [12, 41], // The coordinates of the "tip" of the icon (relative to its top left corner)
    popupAnchor: [1, -34], // The coordinates of the point from which popups will "open", relative to the icon anchor
  });
  const promise = new Promise((resolve, reject) => {
    circle = L.marker([latitude, longitude], {
      icon: coloredIcon // Use the custom icon
    }).addTo(map);
    resolve(circle);
  });
  return promise;
};

const createResponsiveCircle = async (map, point, locations_data, marker_color, onClick) => {
  // Call createCircle function and handle the resolved circle object
  try {
    const circle = await createCircle(point, map, locations_data, marker_color);
    circle.on("click", onClick);
    return circle;
  } catch (error) {
    console.error("Error creating circle:", error);
    return -1;
  }
};

const setAllOtherToOpaque = (arrows) => {
  arrows.forEach((arrow) => {
    arrow.setStyle({ opacity: 0 });
  });
};

// Arrows visibility toggle module
export const toggleArrows = (selectedIndex, arrows) => {
  setAllOtherToOpaque(arrows);
  if (selectedIndex >= arrows.length) return;
  const selectedArrows = arrows[selectedIndex];
  selectedArrows.setStyle({ opacity: 1 });
};

const addArrowToMap = (lat, lon, nextlat, nextlon, map) => {
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

// This function creates arrow and adds it to the map too
const createArrow = (pointsdata, idx, map, location_data) => {


  if (idx == pointsdata.length - 1) {
    return -1;
  }
  const cur_point = pointsdata[idx];
  const coor = location_data.delhi;
  const cur_coordinates = location_data[cur_point.location];
  const cur_lat = cur_coordinates[0];
  const cur_lon = cur_coordinates[1];

  const next_point = pointsdata[idx + 1];
  const next_coordinate = location_data[next_point.location];
  const next_lat = next_coordinate[0];
  const next_lon = next_coordinate[1];

  let arrow = addArrowToMap(cur_lat, cur_lon, next_lat, next_lon, map);
  return arrow;
};
