import { createApp } from 'vue';
import App from './App.vue';

import '../../../scss/main.scss';

const app = createApp(App);
app.use(VgCountdown).mount("#app");
