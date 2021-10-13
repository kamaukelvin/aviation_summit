import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../views/Homepage.vue";
import Agenda from "../views/Agenda.vue";
import Speakers from "../views/Speakers.vue";
import Venue from "../views/Venue.vue";
import Register from "../views/Register.vue";
// import SpeakerModal from "../components/modals/SpeakerModal";
// Vue.component("SpeakerModal", SpeakerModal);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda,
  },
  {
    path: "/speakers",
    name: "Speakers",
    component: Speakers,
  },
  {
    path: "/venue",
    name: "Venue",
    component: Venue,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  // redirect incase user types navigates to a wrong path route
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  next();
});

export default router;
