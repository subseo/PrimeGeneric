import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import {PrimeGeneric} from "../lib/main.ts";


const app = createApp(App);
app.use(PrimeGeneric);

app.mount('#app')
