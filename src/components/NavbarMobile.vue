<template>
  <div id="navigation-mobile">
    <nav class="navbar navbar-light py-0 ">
      <div class="container ">
        <a class="navbar-brand"><img class="logo" :src="Logo" alt="Logo"/></a>
        <button
          class="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-links">
          <ul>
            <li><a href="#" class="active"> Home</a></li>
            <li><a href="#Agenda">Agenda</a></li>
            <li><a href="#Speakers">Speakers</a></li>
            <li><a href="#venue">Venue</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        <div class="partners"></div>
      </div>
    </nav>
  </div>
</template>
<script>
import Logo from "../assets/kq-logo-main.png";
export default {
  name: "Navbar",
  data:()=>
     ({ Logo })

};
</script>
<style scoped>

.partners {
  background: url("../assets/partners.png") no-repeat center/contain;
  height: 100px;
  /* margin: 2em 0; */
}
#navigation-mobile{
  padding: 20px 0 0 0;
  position:sticky;
  top:10px
}
.navbar-links {
  /* display: flex;
  align-items: center;
  justify-content: flex-end; */
}
ul {
  list-style-type: none;
  padding-left: 20px;
  width:150px;
}
ul li {
  display: inline-block;
  font-size: 16px;
  padding: 2px 10px;
  color: #000;
  cursor:pointer
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
