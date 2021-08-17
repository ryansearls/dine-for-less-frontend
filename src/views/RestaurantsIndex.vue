<template>
  <div class="restaurants-index">
    <div v-for="restaurant in restaurants" :key="restaurant.id">
      <router-link v-bind:to="`/restaurants/${restaurant.id}`">
        <h1>{{ restaurant.name }}</h1>
        <img v-bind:src="restaurant.image" contain height="400px" width="550px" />
        <h3>{{ restaurant.neighborhood }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      restaurants: [],
    };
  },

  created: function () {
    this.indexRestaurants();
  },

  methods: {
    indexRestaurants: function () {
      axios.get("/restaurants").then((response) => {
        this.restaurants = response.data;
        console.log("All Restaurants:", this.restaurants);
      });
    },
  },
};
</script>
