import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RestaurantsIndex from "../views/RestaurantsIndex.vue";
import RestaurantsNew from "../views/RestaurantsNew.vue";
import RestaurantsShow from "../views/RestaurantsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/restaurants",
    name: "restaurants-index",
    component: RestaurantsIndex,
  },
  {
    path: "/restaurants/new",
    name: "restaurants-new",
    component: RestaurantsNew,
  },
  {
    path: "/restaurants/:id",
    name: "restaurants-show",
    component: RestaurantsShow,
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
