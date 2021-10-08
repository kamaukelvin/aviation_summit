<template id="Agenda">
  <div class="container">
    <h2 id="section-title">Agenda</h2>
    <Hr />

    <h4>
      The summit will be an in-person event that will kick off with a
      Demo-Flight and welcome event sponsored by Embraer at Jomo Kenyatta
      International Airport, Nairobi. The Participants and speakers will then be
      transferred to Ole Sereni hotel for registration.
    </h4>
    <p>
      The main program will commence with opening session and a welcome address,
      followed by a keynote speech and a series of panel discussions. There will
      be a gala dinner and networking event on the first evening. The second day
      will kick off with a panel session, followed by the KQ Design Challenge,
      presented by selected entrepreneurs. The closing will be an award ceremony
      for the winning entrepreneur. The participants and speakers have the
      option of booking a highly subsidized Safari for either 3, 5 or days. The
      details will be provided in the registration website.
    </p>
    <button class="main-button" @click="goToAgenda()">view agenda</button>
  </div>
</template>
<script>
import Hr from "../Hr.vue";
export default {
  name: "Agenda",
  components: {
    Hr,
  },
  methods: {
    goToAgenda() {
      this.$router.push({
        name: "Agenda",
      });
    },
  },
};
</script>
<style scoped>
h2 {
  color: var(--main-color);
  font-style: italic;
  font-size: 1.8rem !important;
  font-weight: 600;
}
p {
  opacity: 0.7;
}
</style>
