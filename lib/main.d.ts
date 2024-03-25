import type { App } from 'vue';
import { MyButton } from "./index.ts";
declare const PrimeGeneric: {
    install: (app: App) => void;
};
export { PrimeGeneric, MyButton };
