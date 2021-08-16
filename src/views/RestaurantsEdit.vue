<template>
  <div class="restaurants-edit">
    <form v-on:submit.prevent="updateRestaurant()">
      <h1>Edit Restaurant</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="currentRestaurantParams.name" />
      </div>
      <div>
        <label>Neighborhood:</label>
        <input type="text" v-model="currentRestaurantParams.neighborhood" />
      </div>
      <div>
        <label>Food Specials:</label>
        <input type="text" v-model="currentRestaurantParams.food_specials" />
      </div>
      <div>
        <label>Happy Hour:</label>
        <input type="text" v-model="currentRestaurantParams.happy_hour" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="currentRestaurantParams.image" />
      </div>
      <router-link to="/restaurants">Back to restaurants</router-link>
      <input type="submit" value="Submit" />
      <button v-on:click="destroyRestaurant()">Delete</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentRestaurantParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/restaurants/${this.$route.params.id}`).then((response) => {
      console.log("Restaurant Info:", response.data);
      this.currentRestaurantParams = response.data;
    });
  },
  methods: {
    updateRestaurant: function () {
      axios.patch(`/restaurants/${this.$route.params.id}`, this.currentRestaurantParams).then((response) => {
        console.log(response.data);
        this.$router.push(`/restaurants/${response.data.id}`);
      });
    },
    destroyRestaurant: function () {
      axios.delete(`/restaurants/${this.$route.params.id}`).then((response) => {
        console.log("Good job!", response.data);
        this.$router.push("/restaurants");
      });
    },
  },
};
</script>
