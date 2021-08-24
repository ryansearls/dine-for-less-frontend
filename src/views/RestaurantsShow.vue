<template>
  <div class="restaurants-show">
    <div id="wrapper">
      <!-- Menu -->
      <nav id="menu">
        <h2>Menu</h2>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="generic.html">Ipsum veroeros</a></li>
          <li><a href="generic.html">Tempus etiam</a></li>
          <li><a href="generic.html">Consequat dolor</a></li>
          <li><a href="elements.html">Elements</a></li>
        </ul>
      </nav>

      <!-- Main -->
      <div id="main">
        <div class="inner">
          <h1>{{ restaurant.name }}</h1>
          <span class="image main"><img :src="restaurant.image" alt="" /></span>
          <p>
            {{ restaurant.happy_hour }}
          </p>
          <p>
            {{ restaurant.food_specials }}
          </p>
          <p>
            {{ restaurant.neighborhood }}
          </p>
          <li>
            <router-link v-bind:to="`/restaurants/${restaurant.id}/edit`"><button>Edit Restaurant</button></router-link>
          </li>
          <li>
            <button v-on:click="destroyrestaurant(restaurant)">Delete Restaurant</button>
          </li>
          <router-link to="/restaurants">Back to restaurants</router-link>
          -->
        </div>
      </div>

      <!-- Footer -->
      <footer id="footer">
        <div class="inner">
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
          <ul class="copyright">
            <li>&copy; Untitled. All rights reserved</li>
            <li>
              Design:
              <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    <!-- <body class="is-preload"> -->
    <!-- Wrapper -->
    <!-- <div id="wrapper"> -->
    <!-- <div id="main">
      <div class="inner">
        <h1>{{ restaurant.name }}</h1>
        <span class="image main"><img :src="restaurant.image" alt="" /></span>
        <p>
          {{ restaurant.neighborhood }}
        </p>
        <p>
          {{ restaurant.food_specials }}
        </p>
        <p>
          {{ restaurant.happy_hour }}
        </p>
      </div>
    </div> -->
    <!-- <h2>{{ restaurant.name }}</h2>
    <p>{{ restaurant.neighborhood }}</p>
    <p>{{ restaurant.food_specials }}</p>
    <p>{{ restaurant.happy_hour }}</p>
    <img v-bind:src="restaurant.image" contain height="450px" width="700px" />
    <div>
      <li>
        <router-link v-bind:to="`/restaurants/${restaurant.id}/edit`"><button>Edit Restaurant</button></router-link>
      </li>
      <li>
        <button v-on:click="destroyrestaurant(restaurant)">Delete Restaurant</button>
      </li>
      <router-link to="/restaurants">Back to restaurants</router-link> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      restaurant: {},
    };
  },
  created: function () {
    axios.get("/restaurants/" + this.$route.params.id).then((response) => {
      console.log("restaurants show", response);
      this.restaurant = response.data;
    });
  },
  methods: {
    destroyrestaurant: function (restaurant) {
      axios.delete("/restaurants/" + restaurant.id).then((response) => {
        console.log("restaurants destroy", response);
        this.$router.push("/restaurants");
      });
    },
  },
};
</script>

<style></style>
