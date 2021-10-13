<template>
  <div class="">
    <nav class="navbar navbar-light py-0 ">
      <div class="container ">
        <a class="navbar-brand"><img class="logo" :src="Logo" alt="Logo"/></a>
        <div class="navbar-links d-none d-md-block">
          <ul>
            <li>
              <router-link class="" :to="{ name: 'Homepage' }">
                Home</router-link
              >
            </li>
            <li>
              <router-link class="" :to="{ name: 'Agenda' }">
                Agenda</router-link
              >
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
      </div>
    </nav>
  </div>
</template>
<script>
import Logo from "../assets/kq-logo-main.png";
export default {
  name: "Navbar",
  data: () => ({ Logo }),
};
</script>
<style scoped>
.logo {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
}
.navbar-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  float: right;
}
ul li {
  display: inline-block;
  font-size: 16px;
  padding: 20px;
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
@media only screen and (max-width: 600px) {
  .logo {
    max-width: 250px;
    max-height: 100%;
  }
}
</style>
