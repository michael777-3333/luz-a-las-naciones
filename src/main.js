import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import 'vue-material-design-icons/styles.css';
//  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Inder&family=Roboto:ital,wght@1,100&display=swap');
import materialIcons from '@dbetka/vue-material-icons';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import VueSweetalert2 from 'vue-sweetalert2';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {createRouter, createWebHashHistory} from 'vue-router'
import {routes} from './routes/routes.js'
import 'animate.css';

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// type TVueSwalInstance = typeof Swal & typeof Swal.fire;

const myApp = createApp(App);


myApp.use(materialIcons);
myApp.use(VueSweetalert2)
myApp.use(router)
myApp.mount('#app');