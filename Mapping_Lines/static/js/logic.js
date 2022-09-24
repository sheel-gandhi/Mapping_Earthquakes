// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. (Method 2)
// let map = L.map("mapid", {
//     center: [
//       36.1733, -120.1794
//     ],
//     zoom: 7
//   });

// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);

// We create the tile layer that will be the background of our map.(Method 2)
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Create the map object with a center and zoom level. (Method 2)
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// // Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);


//  // // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox/satellite-streets-v11",
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });


// Create the map object with a center and zoom level. (Method 2)
let map = L.map('mapid').setView([36.1540, -95.9928], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: .5,
  dashArray: '2,10'
}).addTo(map);


 // // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/light-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});



// // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


