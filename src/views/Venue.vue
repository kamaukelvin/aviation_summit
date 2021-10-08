<template>
  <div class="container">
    <h2 id="section-title">Venue</h2>
    <Hr />
    <p>
      Ole- Sereni is one of the best Five-star hotels in Nairobi, Kenya offering
      serene views with warm hospitality. Located just off Mombasa road, near
      Nairobi National Park, the hotel enjoys proximity to JKIA (12km), Wilson
      Airport (6km) and City Centre (10km). Our hotel is a perfect blend of
      service excellence, quality accommodation and quintessential conference
      facility.
    </p>
    
      <Slider :images="images" />
    
    <p class="pt-5">
      It is for this reason that the Kenya Airways Fahari Innovation Hub has
      curated a Summit with the theme, ‘Reimagining Aviation in a Post-Covid
      World’, that seeks to bring together different players in the aviation
      ecosystem to kickstart the process of collectively reimagining the future
      of aviation and travel in Africa, as a key enabler for economic growth and
      development. The Summit dubbed, ‘Africa Aviation & Travel Innovation
      Summit’, slated for the 22nd - 24th November 2021, will be an in-person
      event held at the Ole Sereni hotel, Nairobi.
    </p>
    <a
      href="https://emara.ole-sereni.com/"
      target="_blank"
      type="button"
      class="secondary-button"
      >Visit website</a
    >
     <GoogleMap />
  </div>
</template>
<script>
import Hr from "../components/Hr.vue";
import GoogleMap from "../components/GoogleMap.vue";
import Slider from "../components/Slider.vue";
import Sereni from "../assets/ole-sereni.jpg";
import Sereni1 from "../assets/ole-sereni1.jpg";
import Sereni2 from "../assets/ole-sereni2.jpg";
export default {
  name: "Venue",
  components: {
    Hr,
    Slider,
    GoogleMap
  },
  data:()=>({
      images: [
        {
          src: Sereni,
        },
        {
          src: Sereni1,
        },
        {
          src: Sereni2,
        },
      ],
    }),
};
</script>
<style scoped>
a {
  color: #fff !important;
  text-decoration: none;
}
</style>
