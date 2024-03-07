import { openPopupWithList } from "./popup.js";

// Circle and arrow creation module with list content
export const createCirclesAndArrowsWithList = (map, pointsData) => {
  const arrows = [];
  const next_location = [];

  for (let i = 0; i < pointsData.length; i++) {
    const point = pointsData[i];
    const nextPoint = pointsData[(i + 1) % pointsData.length];
    const circle = createResponsiveCircle(map, point, () => {
      toggleArrows(i, arrows);
      openPopupWithList(point, 1, arrows, map, pointsData);
    });

    const [next_location_list, arrow_list] = createArrow(pointsData, i, map);
    arrows.push(arrow_list);
    next_location.push(next_location_list);

    circle.addTo(map);
  }

  return arrows;
};

// Create circle with list content
const createResponsiveCircle = (map, point, onClick) => {
  const circle = createCircle(point, map);
  circle.on("click", onClick);
  return circle;
};

const createCircle = (point, map) => {
    return L.circle([point.lat, point.lon], {
      color: "red",
      fillColor: "red",
      fillOpacity: 1,
      radius: 5,
    }).addTo(map);
  };

const setAllOtherToOpaque = (arrows) => {
  arrows.forEach((arrow) => {
    arrow.forEach((line) => {
      line.setStyle({ opacity: 0 });
    });
  });
};

// Arrows visibility toggle module
export const toggleArrows = (selectedIndex, arrows) => {
    setAllOtherToOpaque(arrows);
    const selectedArrows = arrows[selectedIndex] || [];
    selectedArrows.forEach((arrow) => {
      arrow.setStyle({ opacity: 1 });
    });
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
  
  // This function takes an idx and iterates through all the incidents happened here saves their idx and subno and returns that array
  const createArrow = (pointsdata, idx, map) => {
    let next_location = [];
    let arrows = [];
    const lat = pointsdata[idx].lat;
    const lon = pointsdata[idx].lon;
    const list_content = pointsdata[idx].list_content;
    for (let i = 0; i < list_content.length; i++) {
      const nextno = list_content[i].nextno - 1;
      const nextsubno = list_content[i].nextsubno - 1;
      next_location.push([nextno, nextsubno]);
      arrows.push(
        addArrowToMap(lat, lon, pointsdata[nextno].lat, pointsdata[nextno].lon, map)
      );
    }
    // console.log(idx, arrows);
    return [next_location, arrows];
  };

