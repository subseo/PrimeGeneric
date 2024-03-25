import type {App} from 'vue';
import {Button, Card, GradiantSlider, InputSwitch, MenuBar, Slider} from "./index.ts";
import PrimeVue from 'primevue/config';

const PrimeGeneric = {
    install: (app: App) => {
        app.use(PrimeVue, {
            unstyled: true
        });
        app.component('Button', Button);
        app.component('Toggle', InputSwitch)
        app.component('Card', Card)
        app.component('MenuBar', MenuBar)
        app.component('Slider', Slider)
        app.component('GradiantSlider', GradiantSlider)

    }
};

export {PrimeGeneric, InputSwitch, Card, Slider, GradiantSlider};