import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import './assets/tailwind.css';

store.dispatch('GeolocationModule/getCoordinates');

console.log(store);

createApp(App).use(store).mount('#app');