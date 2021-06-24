
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform'

import moment from 'moment';
import Gate from './gate'

window.Fire = new Vue();


Vue.prototype.$gate = new Gate(window.user)

Vue.component('pagination', require('laravel-vue-pagination'));


Window.Form = Form


Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'
import Swal from 'sweetalert2'

window.Swal = Swal
Vue.use(VueRouter)


window.Form = Form
const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

window.toast = toast
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2000000px'
})

//axios
import axios from "axios";
window.axios = axios;


//Bootstrtap vue
import BootstrapVue from 'bootstrap-vue'

//bootstapVue
Vue.use(BootstrapVue);
import 'bootstrap-vue/dist/bootstrap-vue.css'

//jquery
import $ from 'jquery'
window.$ = $

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();


Vue.filter('mydate', function (created) {
  return moment(created).format("MMM Do YY");
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})



const app = new Vue({
  router,
  el: '#app'
});
