<template>
  <div class="container ">
    <h2 id="section-title">Speakers</h2>
    <hr />
    <h4 class="py-md-5">
      We have brought together key players in the aviation ecosystem to begin
      reimagining the future of aviation and travel in Africa, as a key enabler
      for economic growth and development.
    </h4>
    <div class="row mt-md-4">
      <div class="col-md-4">
        <div class="card">
          <div
            class="card--img"
            v-bind:style="{ backgroundImage: 'url(' + Speaker1 + ')' }"
          />
          <div class="card-body">
            <h4 class="title">Martin Kibisu</h4>
            <p class="card--text">
              Research & Development Lead, Kenya Airways.
            </p>
            <hr class="card--line" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div
            class="card--img"
            v-bind:style="{ backgroundImage: 'url(' + Speaker2 + ')' }"
          />
          <div class="card-body">
            <h4 class="title">Grace Vihenda</h4>
            <p class="card--text">
              Innovation Hub Lead – Business Development & Strategy, Kenya
              Airways
            </p>
            <hr class="card--line" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div
            class="card--img"
            v-bind:style="{ backgroundImage: 'url(' + Speaker3 + ')' }"
          />
          <div class="card-body">
            <h4 class="title">John Dough</h4>
            <p class="card--text">Research & Development Lead, Kenya Airways</p>
            <hr class="card--line" />
          </div>
        </div>
      </div>
    </div>
    <button class="main-button">see more speakers</button>
  </div>
</template>
<script>
import Speaker1 from "../../assets/speaker-1.png";
import Speaker2 from "../../assets/speaker-2.png";
import Speaker3 from "../../assets/speaker-3.png";
export default {
  name: "Speakers",
  data() {
    return {
      Speaker1,
      Speaker2,
      Speaker3,
    };
  },
};
</script>
<style scoped>
.card {
  border: none;
}
.card--line {
  border: 1px solid #cbb677;
  opacity:0.6
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
