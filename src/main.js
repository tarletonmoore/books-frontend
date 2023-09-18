import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";


createApp(App).use(router).mount('#app');