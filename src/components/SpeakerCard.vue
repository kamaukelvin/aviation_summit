<template>
  <div>
    
    
      <div class="card">
        <div
          class="card--img"
          v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
        />
        <div class="card-body">
          <h4 class="title">{{ name }}</h4>
          <p class="card--text">
            {{ title }}
          </p>
          <hr class="card--line" />
        </div>
      </div>
  
  </div>
</template>
<script>

export default {
  name: "SpeakerCard",
  props: {
    image: {
      default: "",
    },
    name: {
      default: "Speaker Name",
    },
    title: {
      default: "Speaker position",
    },
  },
 
};
</script>
<style scoped>
.card {
  border: none;
}
.card--line {
  border: 1px solid #cbb677;
  opacity: 0.6;
}
.card--img {
  height: 15em;
  border-radius: 5px;
  background-position: center;
  background-size: contain;
}
h2 {
  color: var(--main-color);
  font-style: italic;
}

.title {
  color: var(--dark-red);
  font-style: italic;
  font-weight: bold;
}
.card--text {
  font-weight: bold;
  color: #000;
  opacity: 1;
}
</style>
