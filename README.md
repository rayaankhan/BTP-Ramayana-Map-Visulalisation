### Link - https://ramayana4everyone-old.netlify.app/

# Ramayana Map Visualization

## Project Overview

This project aims to create an interactive map that provides an engaging and informative way to learn about the Ramayana, an ancient Indian epic. Users can explore the locations and events of the story in a visually compelling manner, gaining a deeper understanding of the narrative and its geographical context.

## Tech Stack

### Leaflet

- A lightweight and open-source JavaScript library for creating interactive maps.
- Offers features for map manipulation, markers, popups, etc.
- Well-suited for this project due to its ease of use and flexibility.

### HTML, CSS, JavaScript

- Fundamental building blocks of web development.
- Used to structure the map, style its elements, and implement interactivity.

### JSON

- Data format used to store and retrieve information about locations, characters, and events in the Ramayana.

## Why We Used This Tech Stack

- **Leaflet's Ease of Use and Flexibility**: Provides a straightforward API for creating interactive maps, allowing focus on content and user experience.
- **Open-Source Nature**: Ensures long-term support and access to resources.
- **Cross-Browser Compatibility**: Works seamlessly across different web browsers, ensuring a consistent experience.
- **Lightweight and Performant**: Designed to be efficient, resulting in fast-loading maps.

## Project Implementation

### Map Initialization

- Leaflet library used to create an interactive map centered on the Indian subcontinent.
- Base map layer added to provide background.

### Data Retrieval

- JSON files store data about locations, characters, and events.
- getData function fetches data asynchronously using the Fetch API.

### Location Markers

- Important locations marked on the map using Leaflet markers.
- Clicking on a marker opens a popup displaying information about the location's significance and relevant events.

### Character Information

- Character cards or popups display information about key characters.
- Includes images, descriptions, and potentially key dialogues or actions.

### Narrative Progression

- Interactive elements connect locations in the order they appear in the narrative.
- Clicking provides information about events between those locations.

### Kandas Navigation

- Buttons or tabs allow users to navigate between the seven Kandas (chapters) of the Ramayana.

### Visual Enhancements

- Illustrations, animations, background music, or sound effects can enhance the user experience.
- Interactive quizzes or games can test users' knowledge.

### Accessibility and User-friendliness

- Clear instructions and navigation tools provided.
- Compatible with different devices and screen sizes.
- Multiple language options can be offered.

## Resources Used

- Leaflet Documentation: [leafletjs.com/reference.html](https://leafletjs.com/reference.html)
- OpenStreetMap: [www.openstreetmap.org](https://www.openstreetmap.org/)
- JSON Data Files: (Provide links or paths to your JSON data files)

## Libraries Used

- Leaflet: [leafletjs.com](https://leafletjs.com/)

## To run the code
- Windows
```
python -m http.server
```
- Ubuntu
```
python3 -m http.server
```  
