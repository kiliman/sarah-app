/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");
window.Vue = require("vue").default;
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./globalComponents";
//import { routes } from "./routes";
import router from "./router";
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const app = new Vue({
    el: "#app",
    router: router,
    render: (h) => h(App),
});
