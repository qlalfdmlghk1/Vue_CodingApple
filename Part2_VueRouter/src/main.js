import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "@/assets/router.js";

createApp(App).use(router).mount("#app");
