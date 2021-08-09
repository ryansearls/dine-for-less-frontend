<template>
  <div class="restaurants-index">
    <div v-for="restaurant in restaurants" :key="restaurant.id">
      <router-link v-bind:to="`/restaurants/#{restaurant.id}`">
        <h2>Name: {{ restaurant.name }}</h2>
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
    }
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
