<template>
  <div id="app">
    <Navbar />
    <v-app>
      <router-view />
    </v-app>
    <br/>
    <br/>
    <ContactInformation />
    <Footer/>
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
    Footer
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
}

h1,
h2,
h3,
h5,
h6 {
  font-family: LucidaSans !important;
  font-style: italic;
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
  /* opacity: 0.7; */
}
h4 {
  font-size: 18px !important;
  line-height: 30px !important;
  color: var(--dark-color);
  font-weight:600 !important
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
hr {
  border: 1px solid var(--grey);
}
#section-title{
      color:var(--main-color);
    font-style:italic;
    font-size:1.7rem !important;
    font-weight:600
}
</style>
