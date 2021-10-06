<template>
  <div id="venue" class="my-md-5">
    <div class="bg--img" />
    <div class="venue--excerpt">
      <div class="container">
        <h2 class="font-weight-bold">Venue</h2>
        <p class="font-weight-bold text-justify ">
          Ole- Sereni is one of the best Five-star hotels in Nairobi, Kenya
          offering serene views with warm hospitality. Located just off Mombasa
          road, near Nairobi National Park, the hotel enjoys proximity to JKIA
          (12km), Wilson Airport (6km) and City Centre (10km). Our hotel is a
          perfect blend of service excellence, quality accommodation and
          quintessential conference facility.
        </p>
        <button class="secondary-button">Read More</button>
      </div>
    </div>
  </div>
</template>
<script>
import Sereni from "../../assets/ole-sereni.png";
export default {
  name: "Venue",
  data() {
    return {
      Sereni,
    };
  },
};
</script>
<style scoped>
#venue {
  display: flex;
  flex-wrap: wrap;
}
.bg--img {
  background: url("../../assets/ole-sereni.png") no-repeat top/auto;
  width: 40%;
  z-index: 100;
}
.venue--excerpt {
  background: var(--secondary-color);
  padding: 50px;
  width: 60%;
  height: 33em;
  margin-top: -40px;
  margin-left: -40px;
}
h2 {
  color: var(--dark-red);
}
@media only screen and (max-width: 600px) {
  .bg--img {
    background: url("../../assets/ole-sereni.png") no-repeat center/cover;
  width: 100%;
  height:300px
  }
  .venue--excerpt {
  padding: 12px;
  width: 100%;
  height: auto;
  margin-top: 0px;
  margin-left: 0px;
}

}
</style>
