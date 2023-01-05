import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import 'flowbite';
// import {v4 as uuidv4} from 'uuid';


axios.defaults.baseURL = 'https://myboringproject.com';
// axios.defaults.baseURL = 'http://127.0.0.1:8000';
// axios.defaults.withCredentials = true

createApp(App).use(store).use(router, axios).mount('#app')
