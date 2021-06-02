import { createApp } from 'vue'
import App from '@/App.vue'
import "@/permission";
import router from "@/router";
import { useElementComps } from "@/hooks/useInitElementComps";
import VueI18n from "@/i18n";

const app = createApp(App);

// 注册element组件
useElementComps(app).init(VueI18n);

// 语言国际化
app.use(VueI18n);

app.use(router).mount('#app')
