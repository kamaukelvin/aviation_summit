<template>
  <div class="container">
    <SpeakerModal v-show="isModalVisible" @close="closeMod" />

    <h2 id="section-title">Speakers</h2>
    <Hr />
    <p>
      We have brought together key players in the aviation ecosystem to begin
      reimagining the future of aviation and travel in Africa, as a key enabler
      for economic growth and development.
    </p>
    <div class="row mt-md-4">
      <div class="col-md-4" v-for="(speaker, index) in speakers" :key="index">
        <a type="button" @click="showMod(speaker)">
          <SpeakerCard
            :image="speaker.image"
            :title="speaker.title"
            :name="speaker.name"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Hr from "../components/Hr.vue";
import SpeakerCard from "../components/SpeakerCard.vue";
import Speaker1 from "../assets/speaker-1.png";
import Speaker2 from "../assets/speaker-2.png";
import Speaker3 from "../assets/speaker-3.png";
import SpeakerModal from "../components/modals/SpeakerModal.vue";
export default {
  name: "Speakers",
  components: {
    Hr,
    SpeakerCard,
    SpeakerModal,
  },
  data: () => ({
    speakers: [
      {
        name: "Martin Kibisu",
        title: "Research & Development Lead, Kenya Airways",
        image: Speaker1,
      },
      {
        name: "Grace Vihenda",
        title:
          "Innovation Hub Lead – Business Development & Strategy Kenya, Airways",
        image: Speaker2,
      },
      {
        name: "John Dough",
        title: "Research & Development Lead, Kenya Airways",
        image: Speaker3,
      },
      {
        name: "John Dough",
        title: "Research & Development Lead, Kenya Airways",
        image: Speaker3,
      },
      {
        name: "Martin Kibisu",
        title: "Research & Development Lead, Kenya Airways",
        image: Speaker1,
      },
      {
        name: "Grace Vihenda",
        title:
          "Innovation Hub Lead – Business Development & Strategy Kenya, Airways",
        image: Speaker2,
      },
      {
        name: "Martin Kibisu",
        title: "Research & Development Lead, Kenya Airways",
        image: Speaker1,
      },
      {
        name: "Grace Vihenda",
        title:
          "Innovation Hub Lead – Business Development & Strategy Kenya, Airways",
        image: Speaker2,
      },
      {
        name: "John Dough",
        title: "Research & Development Lead, Kenya Airways",
        image: Speaker3,
      },
    ],
    isModalVisible: false,
  }),

  methods: {
    showMod(speaker) {
      this.isModalVisible = true;
      Event.$emit('speaker:view',speaker)
    },
    closeMod() {
      this.isModalVisible = false;
    },
  },
};
</script>
<style lang="scss"></style>
