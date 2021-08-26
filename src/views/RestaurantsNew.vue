<template>
  <div class="restaurants-new">
    <h1>New Restaurant</h1>
    <form class="flex-down" v-on:submit.prevent="createRestaurant()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <li>
        Name:
        <input type="text" v-model="newRestaurantParams.name" />
      </li>
      <li>
        Neighborhood:
        <input type="text" v-model="newRestaurantParams.neighborhood" />
      </li>
      <li>
        Food Specials:
        <input type="text" v-model="newRestaurantParams.food_specials" />
      </li>
      <li>
        Happy Hour:
        <input type="text" v-model="newRestaurantParams.happy_hour" />
      </li>
      <li>
        Image:
        <input type="text" v-model="newRestaurantParams.image" />
      </li>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<style>
.post-image-body {
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
}
.post-image-body * {
  flex: 1 1 auto;
  text-align: center;

  margin: 5px;
}
.flex-down {
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: space-between;
  /* width: 50%; */
}
.flex-down * {
  margin: 10px;
  max-width: 540px;
}
</style>

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
