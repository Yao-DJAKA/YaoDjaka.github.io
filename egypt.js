//  26.8206° N, 30.8025° E  -> 26.8206, 30.8025
let map = L.map("map", {
  center: [ 26.8206, 30.8025],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Luxar Temple: Coordinates: 25° 41' 14.0748'' N 	32° 38' 22.6932'' E -> 25.687243, 32.639637

L.cirle()[25.687243, 32.639637], {
    fillcolor: 'teal',
    color: 'black' ,
    radius: 1000
}).bindpopup(`<iframe width="280" height="120" src="https://www.youtube.com/embed/EDjJLd0TApo?si=dLU5KvQjvJFzpzWW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);


//var circle = L.circle([51.508, -0.11], {
  //  color: 'red',
 //   fillColor: '#f03',
   // fillOpacity: 0.5,
   // radius: 500
//}).addTo(map);
