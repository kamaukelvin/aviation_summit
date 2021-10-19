<template>
  <div class="wave">
    <div id="hero">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 ">
            <img :src="Plane" alt="" class=" plane" />
          </div>
          <div class="col-12 col-md-6 ">
            <h1 class="hero-text">
              Africa Aviation<br />
              Innovation Summit
            </h1>
            <h4 class="mt-4 text-white opacity-100">
              November 22nd - 24th <br />Nairobi, Kenya
            </h4>
            <p class="text-white opacity-100 ">
              In-person event at Ole Sereni hotel
            </p>
            <!-- <div class="partners" /> -->
            <div><img :src="Partners" alt="" class="partners" /></div>
          </div>
        </div>
      </div>
      <h2 class="text-center py-3">
        “Re-imagining aviation in a post-covid world”
      </h2>
      <span class="text-center d-block my-md-5">
        <button class="main-button">Register Today</button>
      </span>

      <small class="text-center d-block pb-4">Read More</small>
      <a href="#about">
        <div class="scroll-down" />
      </a>
      <div class="p-relative">
        <div class="skew-right" />
        <div class="skew-left" />
      </div>
    </div>
  </div>
</template>
<script>
import Partners from "../../assets/partners.png";
import Plane from "../../assets/plane.png";

export default {
  name: "Hero",

  data() {
    return {
      Partners,
      Plane,
    };
  },
  methods: {
    onClickOutside() {
      console.log("drawer ficja");
    },
  },
  // beforeDestroy() {
  //   Event.$off("menu", this.open);
  // },
};
</script>
<style>
#hero {
  background-image: url("../../assets/sky.png");
  /* min-height: calc(100vh - 50px); */
  min-height: calc(0.664 * 100vw);
  background-size: cover;
  background-position: bottom;
  color: #fff;
  position: relative;
  padding: 1rem 0 1rem 0;
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%); */
  z-index: 1000;
}
/* .wave {
  display: inline-block;
  position: relative;
  max-height: calc(100vh - 80px);
  width: 100%;
  background: var(--main-color);
  box-sizing: border-box;
  clip-path: polygon(0% 0%, 100% 0%, 100% 87%, 50% 100%, 0% 87%);
} */
.hero-text {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  font-size: 50px;
  padding: 0.5em 0 0;
}

.plane {
  object-fit: contain;
  object-position: left;
  width: 100%;
  height: 100%;
}
.skew-right {
  /* z-index: 10; */
  position: absolute;
  right: 0;
  bottom: 0;

  border-width: 0 0 11vh 50vw;
  border-style: solid;
  border-color: transparent transparent #ffffff transparent;
}
/* .skew-right::before {
  
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border-width: 0 0 11vh 50vw;
  border-style: solid;
  border-color: transparent transparent red transparent; 
  transform: rotate(180deg);
 }  */

.skew-left {
  /* z-index: 10; */
  position: absolute;
  left: 0;
  bottom: 0;
  border-width: 9vh 0 0 50vw;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  transform: rotate(-180deg);
}
.contenedor {
  overflow: hidden;
}
.partners {
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.scroll-down {
  height: 40px;
  width: 40px;
  border: 2px solid var(--secondary-color);
  position: absolute;
  left: 48.7%;
  bottom: -20px;
  border-radius: 50px;
  cursor: pointer;
  background-color: var(--secondary-color);
  z-index: 5;
}
.scroll-down::before,
.scroll-down::after {
  content: "";
  position: absolute;
  top: 20%;
  left: 50%;
  height: 10px;
  width: 10px;
  transform: translate(-59%, -100%) rotate(45deg);
  border: 2px solid #fff;
  border-top: transparent;
  border-left: transparent;
  animation: scroll-down 1s ease-in-out infinite;
}
.scroll-down::before {
  top: 30%;
  animation-delay: 0.3s;
}
.menu-cover {
  position: relative;
}

@keyframes scroll-down {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    top: 90%;
    opacity: 0;
  }
}
@media only screen and (max-width: 600px) {
  #hero {
    padding: 0rem 0 1rem 0;
  }
  .hero-text {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    font-size: 35px;
    padding: 0;
  }
  h2 {
    font-size: 22px;
  }
  .skew-right {
    border-width: 0 0 3vh 50vw;
  }
  .skew-left {
    border-width: 3vh 0 0 50vw;
  }
  .scroll-down {
    left: 45.5%;
  }
}
@media (min-width: 768px) {
  #hero {
    min-height: 100vh;
  }
}
</style>
