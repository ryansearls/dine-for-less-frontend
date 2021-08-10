<template>
  <div class="restaurants-show">
    <h2>{{ restaurant.name }}</h2>
    <p>{{ restaurant.neighborhood }}</p>
    <p>{{ restaurant.food_specials }}</p>
    <p>{{ restaurant.happy_hour }}</p>
    <p>{{ restaurant.image }}</p>
    <router-link v-bind:to="`/restaurants/${restaurant.id}/edit`">Edit Restaurant</router-link>
    |
    <button v-on:click="destroyrestaurant(restaurant)">Delete Restaurant</button>
    |
    <router-link to="/restaurants">Back to restaurants</router-link>
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
