
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'


library.add(faFacebookSquare,faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#d32f2f',
    secondary: '#9692af',
    tertiary: '#9692af',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
