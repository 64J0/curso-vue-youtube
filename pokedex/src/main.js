import Vue from "vue";
import App from "./App.vue";
import "../node_modules/bulma/css/bulma.css";
import "./styles/pokemonTypeStyles.css";

Vue.config.productionTip = false;

new Vue({
  render: hyperscript => hyperscript(App),
}).$mount("#app");
