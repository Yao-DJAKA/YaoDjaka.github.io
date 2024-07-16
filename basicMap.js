console.log("JS File was loaded");

// 35.2176665 N, 80.831473 W -> 35.2176665, -80.831473

let map = L.map("map", {
  center: [35.2176665, -80.831473],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([35.2176665, -80.831473],  {
title: "CPCC Central Campus"
}).bindPopup(`<iframe width="560" height="315" src="https://www.youtube.com/embed/wCyHWiYPiXU?si=Xm44NlBXJW4G399z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
 .addTo(map);

L.marker([35.2176665, -80.831473], {
    title: "Hello from CPCC!"
}).bindPopup(`
<center>

<h2>Hello from CPCC</h2>
<hr>
<a href="https:www.cpcc.edu">Click here to go to CPCC's webpage</a><br>
<iframe width="260" height="160" src="https://www.youtube.com/embed/SIOicrto1yw?si=IiQG4kfL91Q1yZC6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<hr>
<p>[https://www.youtube.com/watch?v=SIOicrto1yw]</p>
</center>
`)
  .addTo(map);
