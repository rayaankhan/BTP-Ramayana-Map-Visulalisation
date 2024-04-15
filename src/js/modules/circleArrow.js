import { openPopupWithList } from "./popup.js";
import { zoomSetter } from "./map.js";

// Circle and arrow creation module with list content
export const createCirclesAndArrowsWithList = async (
  map,
  pointsData,
  locations_data,
  marker_color
) => {
  const arrows = [];
  const circles = [];
  const location_repeater = []; // stores all the unique locations

  for (let i = 0; i < pointsData.length; i++) {
    const point = pointsData[i];
    let fl = 0;
    location_repeater.forEach((item, i) => {
      if (point.location == item) {
        fl = 1;
      }
    });
    // if (fl == 0) {
    //   location_repeater.push(point.location);
    //   createResponsiveCircle(map, point, locations_data, marker_color, () => {
    //     toggleArrows(i, arrows);
    //     openPopupWithList(i, arrows, map, pointsData, locations_data);
    //     zoomSetter(arrows, i, map);
    //     location_repeater.push(point.location);
    //   }).then((circle) => {
    //     circles.push(circle);
    //   });
    // }
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
  // Trigger click event on the first circle
  if (circles.length > 0) {
    circles[0].fire("click");
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
  // if (selectedIndex - 1 >= 0) {
  //   const selectedArrows = arrows[selectedIndex - 1];
  //   selectedArrows.setStyle({ opacity: 1 });
  // }
  // selectedArrows.forEach((arrow) => {
  //   arrow.setStyle({ opacity: 1 });
  // });
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
  // pointsdata is entire json having location, content, heading
  // idx is the index from where arrow will start and end in the next point
  // map is the ultimate map
  // location_data is the json having location and its lat, lon

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

  // for (let i = 0; i < list_content.length; i++) {
  //   const nextno = list_content[i].nextno - 1;
  //   const nextsubno = list_content[i].nextsubno - 1;
  //   next_location.push([nextno, nextsubno]);
  //   arrows.push(
  //     addArrowToMap(lat, lon, pointsdata[nextno].lat, pointsdata[nextno].lon, map)
  //   );
  // }
  // console.log(idx, arrows);
  return arrow;
};
