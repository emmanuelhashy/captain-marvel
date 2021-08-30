import Vue from 'vue'
import App from './App.vue'
import infiniteScroll from 'vue-infinite-scroll'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import router from './router';
import axios from 'axios'

 
// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)
library.add(fab)
library.add(far)
 
// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$http = axios

Vue.use(infiniteScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
