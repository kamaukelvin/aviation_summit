<template>
  <div id="app">
    <Navbar v-if="!mobileView" />

    <v-app>
      <router-view />
    </v-app>
    <ContactInformation />
    <Footer />
  </div>
</template>

<script>
import ContactInformation from "./components/ContactInformation.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    ContactInformation,
    Navbar,
    Footer,
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  data:()=>({mobileView: false,
      showNav: false,}), 
  
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 600;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Interstate";
  src: url("./assets/fonts/interstate/Interstate-bold.ttf");
  src: url("./assets/fonts/interstate/Interstate-light.ttf");
  src: url("./assets/fonts/interstate/Interstate-regular.ttf");
}
@font-face {
  font-family: "LucidaSans";
  src: url("./assets/fonts/lucida-sans/Regular.ttf");
}
@font-face {
  font-family: "Lucida Grande";
  src: url("./assets/fonts/lucida-grande/LucidaGrande.ttf");
}
@import url(./assets/fonts/icomoon/style.css);
body {
  font-family: Interstate !important;
  overflow-x: hidden;
}

h1,
h2,
h3,
h5,
h6 {
  font-family: LucidaSans !important;
  font-style: italic;
  margin-bottom: 0 !important;
}
:root {
  --main-color: #ec2027;
  --secondary-color: #cbb677;
  --dark-color: #03180d;
  --dark-red: #820024;
  --grey: #c4c4c4;
}
h1 {
  font-weight: 500;
}

p {
  color: var(--dark-color);
  font-family: Interstate !important;
  font-size: 16px;
  line-height: 1.8;
}
h4 {
  font-size: 18px !important;
  line-height: 30px !important;
  color: var(--dark-color);
  font-weight: 600 !important;
  opacity: 0.8;
}
.main-button {
  background: var(--main-color);
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  text-transform: capitalize;
  font-weight: bold;
  margin: 1em 0;
}
.secondary-button {
  background: var(--dark-red);
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  text-transform: capitalize;
}

#section-title {
  color: var(--main-color);
  font-style: italic;
  font-size: 1.7rem !important;
  font-weight: 600;
}
#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 20px;
  cursor: pointer;
}
.content {
  position: absolute;
  top: 50px;
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}
.open {
  transform: translateX(250px);
}
</style>
