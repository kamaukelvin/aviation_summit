import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import vuetify from './plugins/vuetify';
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";
import Events from "./assets/js/events";

global.Event = new Events(new Vue());

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDzNTJNVJ59tgYXCdXtUdf1jN5qfFtvw7A",
    libraries: "places",
  },
});

new Vue({
  vuetify,
	router,
  render: h => h(App),
}).$mount('#app')
