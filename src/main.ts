import { createApp } from 'vue'
import App from '@/App.vue'
import "@/permission";
import router from "@/router";
import Element from "@/plugins/element";
import VueI18n from "@/plugins/i18n";

const app = createApp(App);

// 注册element组件
app.use(Element);
// 语言国际化
app.use(VueI18n);

app.use(router).mount('#app')
