// // Add console.log to check to see if our code is working.
// console.log("working");

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: "mapbox/streets-v11",
//   tileSize: 512,
//   zoomOffset: -1,
//   accessToken: API_KEY
// });

// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: "mapbox/satellite-streets-v11",
//   tileSize: 512,
//   zoomOffset: -1,
//   accessToken: API_KEY
// });


// // Create a base layer that holds both maps.
// let baseMaps = {
//   Streets : streets,
//   Satellite : satelliteStreets
// };

// // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//   center: [43.7, -79.3],
//   zoom: 11,
//   layers: [satelliteStreets]
// })
// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// //  // // We create the tile layer that will be the background of our map.
// // // Accessing the airport GeoJSON URL
// let torontoHoods  = "https://raw.githubusercontent.com/sheel-gandhi/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
// });


// Add console.log to check to see if our code is working.
console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "mapbox/streets-v11",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "mapbox/satellite-streets-v11",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
  Streets : streets,
  Satellite : satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//  // // We create the tile layer that will be the background of our map.
// // Accessing the airport GeoJSON URL
let torontoHoods  = "https://raw.githubusercontent.com/sheel-gandhi/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 2
}

// // Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data,{
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
  }
})
.addTo(map);
});