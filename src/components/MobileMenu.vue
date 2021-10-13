<template>
  <div>
    <div class="mobile__nav container">
      <div class="menu-btn d-md-none" @click="open">
        <div class="menu-btn__burger" />
      </div>
      <div>
        <img
          :src="MainLogo"
          class="mobile__logo"
          :class="{ drawer__active: isDrawerOpen }"
        />
      </div>
      <div />
    </div>
    <v-navigation-drawer
      :stateless="this.menuOpen"
      v-model="this.isDrawerOpen"
      absolute
      left
      temporary
      height="100vh"
    >
      <v-toolbar>
        <v-img contain height="100%" :src="MainLogo" />
      </v-toolbar>
      <div class="navbar-links">
        <ul>
          <li>
            <router-link class="" :to="{ name: 'Homepage' }"> Home</router-link>
          </li>
          <li>
            <router-link class="" :to="{ name: 'Agenda' }"> Agenda</router-link>
          </li>
          <li>
            <router-link class="" :to="{ name: 'Speakers' }">
              Speakers</router-link
            >
          </li>
          <li>
            <router-link class="" :to="{ name: 'Venue' }"> Venue</router-link>
          </li>
          <li>
            <router-link class="" :to="{ name: 'Register' }"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import MainLogo from "../assets/kq-logo-main.png";
export default {
  data: () => ({ MainLogo }),
  props: ["isDrawerOpen", "menuOpen"],

  methods: {
    open() {
      this.$emit("menu", {});
    },
  },
};
</script>
<style scoped>
.mobile__nav {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 200000;
}
.menu-btn {
  /* width: 20px;
  height: 20px; */
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger {
  width: 30px;
  height: 3px;
  background: var(--main-color);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  z-index: 20000;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 3px;
  background: var(--main-color);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-7px);
}
.menu-btn__burger::after {
  transform: translateY(7px);
}
.mobile__logo {
  object-fit: contain;
  object-position: left;
  width: 150px;
  height: 50px;
}
/* animation */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
.theme--light.v-navigation-drawer {
  z-index: 10000;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
  border-bottom: 1px solid #ec2027;
}
.drawer__active {
  display: none !important;
}
.navbar-links {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
ul li {
  font-size: 16px;
  padding: 16px 20px;
  color: #000;
}
.navbar-links a {
  text-decoration: none;
  color: #000;
}
.navbar-links a.active {
  color: #ec2027;
}

a:hover {
  text-decoration: none;
  color: #ec2027;
}
</style>
