import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import firebase from 'firebase/app'
import './assets/css/main.css'
import './assets/css/header.css'
import './assets/css/dashboard.css'
import './assets/css/footer.css'
import './assets/css/form.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyCykJA_FwrrxYniKmC0kiHnz0Seerd60hI',
  authDomain: 'todolist-2ec1e.firebaseapp.com',
  databaseURL: 'https://todolist-2ec1e-default-rtdb.firebaseio.com',
  projectId: 'todolist-2ec1e',
  storageBucket: 'todolist-2ec1e.appspot.com',
  messagingSenderId: '503465171404',
  appId: '1:503465171404:web:db7a8365a5552d52d26569',
  measurementId: 'G-DTF7YDK8G0'
}
firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
