import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { registerStore } from "./store";
import icons from "./icons";

import router from "./router";
import "./permissions";

import "virtual:svg-icons-register";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(icons);
// 注册 Pinia
registerStore();

app.mount("#app");
