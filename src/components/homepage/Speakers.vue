<template>
  <div class="container ">
    <h2 id="section-title">Speakers</h2>
    <Hr />
    <h4 class="py-md-5">
      We have brought together key players in the aviation ecosystem to begin
      reimagining the future of aviation and travel in Africa, as a key enabler
      for economic growth and development.
    </h4>
    <div class="row mt-md-4">
      <div class="col-md-4" v-for="(speaker, index) in featuredSpeakers" :key="index">
        <a type="button" @click="openModal">
      <SpeakerCard :image="speaker.image" :title="speaker.title" :name="speaker.name"/>
      </a>
      </div>
      
     
    </div>
    <button class="main-button" @click="goToSpeakers()">see more speakers</button>
  </div>
</template>
<script>
import Speaker1 from "../../assets/speaker-1.png";
import Speaker2 from "../../assets/speaker-2.png";
import Speaker3 from "../../assets/speaker-3.png";
import SpeakerCard from "../SpeakerCard.vue";
import Hr from '../Hr.vue'
export default {
  name: "Speakers",
  data:()=>({
      featuredSpeakers:[
        {
        name:"Martin Kibisu",
        title:"Research & Development Lead, Kenya Airways",
        image:Speaker1
      },
        {
        name:"Grace Vihenda",
        title:"Innovation Hub Lead – Business Development & Strategy Kenya, Airways",
        image:Speaker2
      },
        {
        name:"John Dough",
        title:"Research & Development Lead, Kenya Airways",
        image:Speaker3
      }
      ]
    }),
  components:{
    Hr,
    SpeakerCard
  },
  methods: {
    goToSpeakers() {
      this.$router.push({
        name: "Speakers",
      });
    },
  },
};
</script>
<style scoped>

</style>
