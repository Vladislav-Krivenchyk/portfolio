import './bootstrap'
import {createApp} from 'vue'
import router from "../router/router.js";
import Index from "./Index.vue";
import I18n from "../src/i18n/index.js";
const app = createApp(Index)

app.use(router)
app.use(I18n)
app.mount('#app')







