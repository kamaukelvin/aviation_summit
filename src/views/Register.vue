<template>
  <div class="container">
    <h2 id="section-title" class="mt-4">Registration is now open!</h2>
    <Hr />
    <p class="mt-5">
      You're just clicks away from "Re-imagining avaition in a post covid world"
      at Africa Aviation Innovation Summit. We can't wait to learn, collaborate
      and celebrate with you for a safe in-person gathering on November 22-24 in
      Nairobi, Kenya.
    </p>

    <small
      >There is no fee for the summit. Attendees pay for subsidised accomodation
      and air ticket. Kindly enter your details below to be informed once the
      information is available. If you have any questions, see our contact
      information <a href="#">here</a></small
    >
    <form class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label"
          >What's you name?<span class="text-danger">*</span></label
        >
        <input
          type="text"
          class="form-control"
          id="name"
          required
          placeholder="Enter your full name"
        />
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label"
          >What's your email address?<span class="text-danger">*</span></label
        >
        <input
          type="email"
          class="form-control"
          id="email"
          required
          placeholder="another@example.com"
        />
      </div>
      <div class="col-md-6">
        <label for="organization" class="form-label">Organization</label>
        <input
          type="text"
          class="form-control"
          id="organization"
          placeholder="Enter the name of your organization"
        />
      </div>
      <div class="col-md-6">
        <label for="role" class="form-label">Role/Title</label>
        <input
          type="text"
          class="form-control"
          id="role"
          placeholder="Enter your role/title in the organization"
        />
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label">Phone Number</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="+254 123 456 789"
        />
      </div>
      <div class="col-md-6">
        <label for="country" class="form-label">Country</label>
        <select id="country" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class=" main-button text-white">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import Hr from "../components/Hr.vue";
export default {
  components: {
    Hr,
  },
};
</script>
<style scoped>
.form-control {
  color: #212529;
  background-color: #e5e5e5;
  border: 1px solid #a7a9ac;
  border-radius: 4px;
  outline: 0;
  box-shadow: none;
}
.form-control:focus,
.form-select:focus {
  color: #212529;
  background-color: #fff;
  border-color: #00b259;
  outline: 0;
  box-shadow: none;
}
small {
  font-size: 15px;
}
</style>
