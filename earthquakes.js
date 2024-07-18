let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

d3.json(url).then(
  function(data)
    {
     
      console.log(data);
  
      let map = L.map("map",{
        center: [37.09, -95.71],
        zoom: 5 
      });
      
    }
);
