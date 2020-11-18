import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/
// Hyperscript significa "script que gera estruturas de HTML"
new Vue({
  render: hyperscript => hyperscript(App),
}).$mount('#app')
