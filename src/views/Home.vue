<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>{{ message2 }}</h2>
    <div id="map"></div>
  </div>
</template>

<style>
#map {
  height: 350px;
  width: auto;
}
</style>

<script>
/* global mapboxgl */
export default {
  data: function () {
    return {
      message: "Welcome to Dine for less!",
      message2: "Where stomachs and wallets stay full",
    };
  },
  mounted: function () {
    this.setUpMap();
  },
  created: function () {},
  methods: {
    setUpMap: function () {
      // var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
      mapboxgl.accessToken = process.env.VUE_APP_KEY;
      // "pk.eyJ1IjoicnNlYXJscyIsImEiOiJja3JwOXdybmYyNjJiMnpxcmg4bWFhNGYzIn0.HTFQvxEQZzDP5lngLTB6gQ";

      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/rsearls/cksozuxqa0u9d17o38dyx0o8a", // style URL
        center: [-104.9903, 39.7392], // starting position [lng, lat]
        zoom: 11, // starting zoom
      });

      map.on("click", function (e) {
        // If the user clicked on one of your markers, get its information.
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["denver-restaurants"], // replace with your layer name
        });
        if (!features.length) {
          return;
        }
        var feature = features[0];
        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML("<h3>" + feature.properties.title + "</h3>" + "<p>" + feature.properties.description + "</p>")
          .addTo(map);
        popup.addTo(map);
      });
      console.log(map);
    },
  },
};
</script>
