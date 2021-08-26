<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <div class="inner">
      <header id="header">
        <div class="inner">
          <!-- Logo -->
          <a href="index.html" class="logo">
            <span class="symbol"><img src="/images/logo.svg" alt="" /></span>
          </a>

          <!-- Nav -->
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>

    <!-- Menu -->
    <nav id="menu">
      <div class="inner">
        <h2>Menu</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/restaurants">Restaurants</a></li>
          <li v-if="isLoggedIn()">
            <a href="/restaurants/new">New Restaurant</a>
          </li>
          <li v-if="!isLoggedIn()">
            <a href="/signup">Signup</a>
          </li>
          <li v-if="!isLoggedIn()">
            <a href="/login">Login</a>
          </li>
          <li v-if="isLoggedIn()">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  // data: function () {
  //   return {
  //     user_id: "",
  //   };
  // },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
