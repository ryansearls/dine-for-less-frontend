<template>
  <div class="restaurants-new">
    <h1>New Restaurant</h1>
    <form v-on:submit.prevent="createRestaurant()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newRestaurantParams.name" />
      Neighborhood:
      <input type="text" v-model="newRestaurantParams.neighborhood" />
      Food Specials:
      <input type="text" v-model="newRestaurantParams.food_specials" />
      Happy Hour:
      <input type="text" v-model="newRestaurantParams.happy_hour" />
      Image:
      <input type="text" v-model="newRestaurantParams.image" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newRestaurantParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createRestaurant: function () {
      axios
        .post("/restaurants", this.newRestaurantParams)
        .then((response) => {
          console.log("Restaurant Created", response);
          this.$router.push("/restaurants");
        })
        .catch((error) => {
          console.log("restaurant create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
