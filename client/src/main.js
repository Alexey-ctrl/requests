import { createApp } from "vue";
import App from "./App.vue";
import Store from "./store/store";
import router from "./router";

const app = createApp(App);
app.use(Store);
app.use(router);
app.mount("#app");
