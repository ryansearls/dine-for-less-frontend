import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RestaurantsIndex from "../views/RestaurantsIndex.vue";
import RestaurantsNew from "../views/RestaurantsNew.vue";

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
    path: "/restaurants",
    name: "restaurants-index",
    component: RestaurantsIndex,
  },
  {
    path: "/restaurants/new",
    name: "restaurants-new",
    component: RestaurantsNew,
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
