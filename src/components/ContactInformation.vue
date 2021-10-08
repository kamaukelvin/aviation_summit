<template>
  <div class="container">
    <h2 id="section-title">Contact Information</h2>
    <Hr />
    <p>For more information about this workshop please contact</p>
    <div class="row">
      <div class="col-md-6">
        <ul class="contact-person">
          <h4 class="title">Martin Kibisu</h4>
          <li>Research & Development Lead</li>
          <li>Kenya Airways</li>
          <li>Mobile: +254 722 325 732</li>
          <li>Email: Martin.Kibisu@kenya-airways.com</li>
          <li>Website: www.kenya-airways.com</li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="contact-person">
          <h4 class="title">Grace Vihenda</h4>
          <li>Innovation Hub Lead - Business Development & Strategy</li>
          <li>Kenya Airways</li>
          <li>Mobile:+254 20 6422658</li>
          <li>Email: Grace.Vihenda@kenya-airways.com</li>
          <li>Website: www.kenya-airways.com</li>
        </ul>
      </div>

      <div class="col-md-12 mt-md-5 mt-3">
        <h1>Karibuni Nyote!</h1>
        <Hr />
      </div>
      <div class="col-md-6">
        <div class="karibuni">
          November 22nd-24th <br />
          Nairobi, Kenya<br />
          Ole Sereni Hotel
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-md-flex justify-content-end align-items-baseline">
          <button class="main-button">
            Register Today
          </button>
        </div>
      </div>
      <div class="col-md-12">
        <img :src="Partners" alt="" class="partners" />
      </div>
    </div>
  </div>
</template>
<script>
import Hr from "./Hr.vue";
import Partners from '../assets/partners.png'
export default {
  name: "Contact",
  components: {
    Hr,
  },
  data:()=>({Partners})
};
</script>
<style scoped>
h2,
h1 {
  color: var(--main-color);
  font-weight: bold !important;
}

.title {
  color: var(--dark-red);
  font-style: italic;
  font-weight: bold;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul li {
  /* font-weight: bold; */
  font-size: 14px;
}
.partners {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
}
.karibuni {
  color: var(--dark-red);
  font-size: 20px;
}
</style>
