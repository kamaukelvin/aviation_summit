<template>
  <v-carousel :cycle="true" :show-arrows="false" height="700px">
    <v-carousel-item
      v-for="(item, i) in images"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <img class="slider--img" :src="item.src"
    /></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "Slider",
  props: {
    images: {
      default: [],
    },
  },
};
</script>
<style>
.slider--img {
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
}
.v-carousel__controls {
  background: transparent !important;
}
.theme--dark.v-btn--active.v-btn--icon {
  color: #820024;
}


.v-btn--icon.v-size--small {
  height: 15px;
  width: 15px;
}

.theme--dark.v-btn--active::before,
.theme--dark.v-btn--active:hover::before {
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .v-carousel {
    height: 250px !important;
  }
  .slider--img {
    height: auto;
    width: 100%;
    object-position: center;
    object-fit: contain;
  }
  .v-carousel__controls {
    background: transparent !important;
  }
}
</style>
