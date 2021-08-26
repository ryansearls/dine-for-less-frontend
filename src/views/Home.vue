<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>{{ message2 }}</h2>
    <div id="map"></div>
    <p></p>
    <footer id="footer">
      <div>
        <section>
          <h2>Get in touch</h2>
          <form method="post" action="#">
            <div class="fields">
              <div class="field half">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="field half">
                <input type="email" name="email" id="email" placeholder="Email" />
              </div>
              <div class="field">
                <textarea name="message" id="message" placeholder="Message"></textarea>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send" class="primary" /></li>
            </ul>
          </form>
        </section>
      </div>
    </footer>
  </div>
</template>

<style>
#map {
  width: 75%;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
}

.inner {
  text-align: center;
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
      mapboxgl.accessToken = process.env.VUE_APP_KEY;

      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/rsearls/cksozuxqa0u9d17o38dyx0o8a", // style URL
        center: [-104.9903, 39.7392], // starting position [lng, lat]
        zoom: 11.5, // starting zoom
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
