import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import "leaflet-arrowheads";
import "../map.css";

const markerIcons = {
  all: "/images/marker/blue.png",
  bala: "/images/marker/red.png",
  ayodhya: "/images/marker/green.png",
  aranya: "/images/marker/orange.png",
  kishkindha: "/images/marker/purple.png",
  sundara: "/images/marker/yellow.png",
  yuddha: "/images/marker/maroon.png",
};

function Map({ selectedPeriod }) {
  const [isLocationsVisible, setIsLocationsVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [currData, setCurrData] = useState([]);
  const [location, setLocation] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const markersRef = useRef([]);
  const [mapCenter, setMapCenter] = useState([23.512, 80.329]);
  const [mapZoom, setMapZoom] = useState(4);
  const mapRef = useRef(); // Move mapRef here
  const [customIcon, setCustomIcon] = useState(null);

  // Function to create a custom icon based on the selected period
  const createCustomIcon = (iconUrl) => {
    return new L.Icon({
      iconUrl: iconUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      // shadowUrl: "../icons/marker-shadow.png", // Replace with actual shadow URL if needed
      shadowSize: [41, 41],
      shadowAnchor: [12, 41],
    });
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Adjust as per your md breakpoint
        hideSidebar();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // To set the location and data of particular kanda
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("../json/story/" + selectedPeriod + ".json")
          .then((response) => response.json())
          .then((data) => {
            setCurrData(data.points);
            setFilteredData(data.points);
          });

        fetch("../json/story/location.json")
          .then((response) => response.json())
          .then((data) => {
            setLocation(data);
          });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, [selectedPeriod]);

  useEffect(() => {
    // Create a custom icon based on the selected period
    const iconUrl = markerIcons[selectedPeriod] || markerIcons.period1; // Fallback to a default icon
    setCustomIcon(createCustomIcon(iconUrl));
  }, [selectedPeriod]);

  useEffect(() => {
    // Automatically open the first popup when the component mounts
    if (filteredData.length > 0) {
      const marker = markersRef.current[0];
      if (marker) {
        const latLng = marker.getLatLng();
        setMapCenter(latLng);
        setMapZoom(6);
        marker.openPopup();
      }
    }
  }, [filteredData]);

  useEffect(() => {
    // Automatically open the first popup when the component mounts
    if (filteredData.length > 0) {
      const marker = markersRef.current[0];
      if (marker) {
        // Use setTimeout to ensure the marker is rendered before opening the popup
        setTimeout(() => {
          marker.openPopup();
        }, 0); // Adjust the timeout as needed; using 0 ensures it's run after the rendering is complete
        handleButtonClick(0);
      }
    }
  }, [filteredData]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = currData.filter((place) =>
      place.topic.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const MapController = ({ center, zoom }) => {
    const map = useMap();
    // const mapRef = useRef(map);
    useEffect(() => {
      mapRef.current = map;
      map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const getZoom = (marker, nextMarker) => {
    if (marker && nextMarker) {
      const latLng = marker.getLatLng();
      const nextLatLng = nextMarker.getLatLng();
      const bounds = L.latLngBounds([latLng, nextLatLng]);
      return Math.min(10, mapRef.current.getBoundsZoom(bounds));
    }
    return 6;
  };

  const getMapCenter = (marker, nextMarker) => {
    const latLng = marker.getLatLng();
    if (marker && nextMarker) {
      const nextLatLng = nextMarker.getLatLng();
      return L.latLngBounds([latLng, nextLatLng]).getCenter();
    }
    return latLng;
  };

  const openPopupWithList = (idx) => {
    setCurrentIndex(idx); // Set the current index to show the appropriate popup content
    const marker = markersRef.current[idx];
    const nextMarker = markersRef.current[idx + 1]; // Get the next marker
    let zoom = getZoom(marker, nextMarker) - 1;
    let mapCenter = getMapCenter(marker, nextMarker);
    if (marker) {
      setMapCenter(mapCenter);
      setMapZoom(zoom);
      marker.openPopup();
    } else {
      console.error("Marker not found at index:", idx);
    }
  };

  const getIncidentPointIndexes = (point) => {
    return currData.filter((item) => item.location === point.location);
  };

  const currentArrowRef = useRef(); // Variable to hold the current arrow
  const drawArrow = (fromLatLng, toLatLng) => {
    const latLngs = [fromLatLng, toLatLng];

    // Remove the existing arrow if it exists
    if (currentArrowRef.current) {
      mapRef.current.removeLayer(currentArrowRef.current);
    }

    // Create a new polyline for the arrow with an arrowhead
    currentArrowRef.current = L.polyline(latLngs, {
      color: "blue",
      weight: 2,
      opacity: 0,
    }).addTo(mapRef.current);

    // Add arrowhead to the polyline
    currentArrowRef.current.arrowheads({
      size: "8px",
      fill: "blue",
      frequency: "10px",
    });
  };

  const handleButtonClick = (idx) => {
    openPopupWithList(idx);
    const currentMarker = markersRef.current[idx];
    const nextMarker = markersRef.current[idx + 1]; // Get the next marker

    if (currentMarker && nextMarker) {
      drawArrow(currentMarker.getLatLng(), nextMarker.getLatLng());
    } else {
      console.log("One of the markers is not defined");
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center text-blue-400 mx-5 rounded-md md:space-x-3 md:space-y-0 h-[70vh]">
      <div className="bg-slate-200 rounded-lg md:mb-0 lg:w-9/12 w-full h-full align-middle overflow-hidden z-0">
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: "80vh", width: "100%",backgroundColor:'transparent' }}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapController
            center={mapCenter}
            zoom={mapZoom}
            drawArrow={drawArrow}
          />
          {filteredData.map((place, index) => {
            const coordinates = location[place.location];
            if (coordinates) {
              return (
                <Marker
                  key={index}
                  position={coordinates}
                  icon={customIcon}
                  ref={(el) => (markersRef.current[index] = el)}
                  eventHandlers={{
                    click: () => handleButtonClick(index),
                  }}
                >
                  <Popup className="bg-gray-300 bg-opacity-50 rounded-lg shadow-md">
                    <div className="popup-buttons-container bg-transparent">
                      {/* Incident List */}
                      {getIncidentPointIndexes(place).map(
                        (incidentPoint, i, arr) => (
                          <React.Fragment key={i}>
                            <button
                              className="popup-button px-1.5 py-1 mx-0.5 mb-2 border border-orange-600 text-white bg-orange-500 rounded-md"
                              onClick={() =>
                                handleButtonClick(incidentPoint.no - 1)
                              }
                            >
                              {incidentPoint.no}
                            </button>
                          </React.Fragment>
                        )
                      )}

                      {/* Heading */}
                      <h3 className="popup-heading font-semibold pb-1 text-orange-600">
                        {place.no}. {place.topic}
                      </h3>

                      {/* Content */}
                      <div className="popup-content pb-2">{place.content}</div>

                      {/* Navigation Buttons */}
                      {index - 1 >= 0 && (
                        <button
                          className="popup-button border border-orange-600 bg-orange-500 text-white rounded-md px-1.5 py-0.5 mx-0.5"
                          onClick={() => handleButtonClick(index - 1)}
                        >
                          Prev
                        </button>
                      )}
                      {index + 1 < currData.length && (
                        <button
                          className="popup-button border border-orange-600 bg-orange-500 text-white rounded-md px-1.5 py-0.5 mx-0.5"
                          onClick={() => handleButtonClick(index + 1)}
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </Popup>
                </Marker>
              );
            }
            return null;
          })}
        </MapContainer>
      </div>

      <div
        className={`bg-slate-200/95 rounded-lg md:w-3/12 w-4/5 md:h-full text-black ${
          isSidebarVisible
            ? "absolute top-0 right-0 h-full w-3/5 z-30"
            : "hidden lg:block"
        } justify-center`}
      >
        <div className="flex justify-center text-2xl font-bold font-serif py-4 underline">
          Incident List
        </div>
        <button
          className="z-30 lg:hidden absolute top-1/2 -left-10 transform -translate-y-1/2 bg-orange-600 text-white px-3 py-2 rounded-e-md"
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? ">" : "<"}
        </button>
        <div className="places-list px-4 overflow-y-auto h-5/6">
          <input
            type="text"
            placeholder="Search locations..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 mb-4 text-black rounded"
          />
          <ul className="space-y-2">
            {filteredData.map((place, index) => (
              <li
                key={index}
                className="text-black font-serif hover:scale-105 hover:bg-orange-600/40 text-lg group"
              >
                <a
                  href="#"
                  onClick={() => handleButtonClick(index)}
                  className="group-hover:underline"
                >
                  {index + 1}. {place.topic}
                </a>
              </li>
            ))}
            {filteredData.length === 0 && (
              <li className="text-black font-serif text-lg">
                No results found
              </li>
            )}
          </ul>
        </div>
      </div>

      {!isSidebarVisible && (
        <button
          className="lg:hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-600/90  text-white px-3 py-2 rounded-s-md"
          onClick={toggleSidebar}
        >
          {"<"}
        </button>
      )}
    </div>
  );
}

export default Map;
