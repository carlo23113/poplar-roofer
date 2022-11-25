import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import "@/assets/css/index.css";
import mitt from "mitt";

import { registerPlugins } from "@/plugins";

const app = createApp(App);
export const emitter = mitt();

registerPlugins(app);

app.use(router);
app.mount("#app");
