import {createApp} from 'vue'
import App from './App.vue'
import '../lib/index.css'
import {PrimeGeneric} from "../lib/main";


const app = createApp(App);
app.use(PrimeGeneric);

app.mount('#app')
