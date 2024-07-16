//  26.8206° N, 30.8025° E  -> 26.8206, 30.8025
let map = L.map("map", {
  center: [ 26.8206, 30.8025],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
