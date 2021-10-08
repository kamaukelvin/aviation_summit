<template>
  <div id="venue" class="my-md-5">
    <img :src="Sereni" alt="" class="bg--img"/>
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
        <button class="secondary-button" @click="goToVenue()">Read More</button>
      </div>
    </div>
  </div>
</template>
<script>
import Sereni from "../../assets/ole-sereni.jpg";
export default {
  name: "Venue",
  data:()=>({
      Sereni,
    }),
  methods: {
    goToVenue() {
      this.$router.push({
        name: "Venue",
      });
    },
  },
};
</script>
<style scoped>
#venue {
  display: flex;
  flex-wrap: wrap;
  position:relative
}
.bg--img {
  object-fit: cover;
  width:40%;
  min-height: 23em;
  z-index:1

}
.venue--excerpt {
  background: var(--secondary-color);
  padding: 80px;
  width: 63%;
  min-height: calc(23em + 80px);
position:absolute;
right:0;
top:-40px;
}
h2 {
  color: var(--dark-red);
}
@media only screen and (max-width: 600px) {
  .bg--img {
   width:100%
  }
  .venue--excerpt {
    position:relative;
    width:100%;
    padding:12px;
    top:0
  }
}
</style>
