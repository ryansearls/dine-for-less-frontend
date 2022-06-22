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
            {{ restaurant.neighborhood }}
          </p>
          <p>
            {{ restaurant.food_specials }}
          </p>
          <p>
            {{ restaurant.happy_hour }}
          </p>
          <li>
            <router-link v-bind:to="`/restaurants/${restaurant.id}/edit`"><button>Edit Restaurant</button></router-link>
          </li>
          <li>
            <button v-on:click="destroyrestaurant(restaurant)">Delete Restaurant</button>
          </li>
          <router-link to="/restaurants">Back to restaurants</router-link>
        </div>
      </div>
    </div>
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
