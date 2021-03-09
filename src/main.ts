import { createApp } from 'vue';
import AOS from 'aos';
import App from './App.vue';

import router from './router';
import 'aos/dist/aos.css';

import './assets/styles/index.css';

createApp(App).use(router).mount('#app');

AOS.init();

window.addEventListener('load', () => {
  AOS.refresh();
});
