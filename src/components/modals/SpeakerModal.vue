<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="mod"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <section class="modal-body">
          <slot name="body">
            <div class="row">
              <div class="col-md-5">
                <img class="image" :src="details.image" alt="" />
              </div>
              <div class="col-md-7">
                <div>
                  <div class="excerpt-top">
                    <div>
                      <h4 class="name--text">{{ details.name }}</h4>
                      <p class="title--text">
                        {{ details.title }}
                      </p>
                      <hr class="bd" />
                    </div>
                    <button
                      type="button"
                      class="btn-close"
                      @click="close"
                    ></button>
                  </div>
                  <p>
                    Faucibus consectetur tristique etiam turpis. Enim amet erat
                    at mattis mattis imperdiet in sapien, et. Ullamcorper est
                    elementum pellentesque consectetur ipsum pellentesque fames
                    fringilla amet. Vel et, natoque lectus placerat ipsum sed.
                    Nisl dolor vel bibendum nisl et. Quam nisl dolor mauris
                    fringilla purus. At semper consequat justo porttitor enim
                    pretium vulputate tellus. Fusce amet pharetra sit urna quis
                    interdum consequat. Erat mauris, dictum mauris elementum.
                    Turpis ut euismod tellus eget a. At nullam at magna integer
                    tincidunt sit elit. Faucibus non facilisi posuere ac cras
                    proin pellentesque. Adipiscing at posuere lacus, lectus
                    nibh.
                  </p>
                </div>
              </div>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import Speaker1 from "../../assets/speaker-1.png";
export default {
  name: "modal",

  created() {
    Event.$on("speaker:view", async (payload) => {
      console.log("is payload here", payload);
      this.details = payload;
    });
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  data() {
    return {
      Speaker1,
      details: {},
    };
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(3, 24, 13, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mod {
  background: #ffffff;
  box-shadow: 2px 2px 10px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  border-radius: 4px;
}

.modal-header,
.modal-footer {
  padding: 10px;
  display: flex;
  border: none;
}
.excerpt-top {
  display: flex;
  justify-content: space-between;
}

.modal-header {
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
.name--text {
  color: var(--dark-red);
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
}
.title--text {
  color: #000;
  opacity: 1;
  font-size: 15px;
}
.bd {
  border-top: 3px solid #cbb677;
  background: #cbb677;
}
.btn-close:focus {
  box-shadow: none;
}
.btn-close:hover {
  color: var(--main-color);
}
</style>
