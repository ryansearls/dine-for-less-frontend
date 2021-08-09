<template>
  <div class="restaurants-index"
    <div v-for="restaurant in restaurants" :key="restaurant.id"
      <router-link v-bind:to="`/restaurants/#{restaurant.id}`">
        <h2>Name: {{ restaurant.name }}</h2>
      <router-link>
    </div>
  </div>      
</template>      
