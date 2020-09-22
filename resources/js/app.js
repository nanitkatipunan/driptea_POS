require('./bootstrap');

import Vue from 'vue'
import App from '@/js/App.vue'
import Router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
// import '@fortawesome/fontawesome-free'

Vue.prototype.$axios = axios
const app = new Vue({
    icons: {
        iconfont: 'fa'
    },
    el: '#app',
    router: Router,
    render: h => h(App)
});

export default app;
