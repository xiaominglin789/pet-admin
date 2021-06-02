import { createI18n } from 'vue-i18n';
import messages from "./langs";

const i18n = createI18n({
  locale: 'cn', // 默认语言,初始化时读取缓存配置
  fallbackLocale: 'en', // 错误时使用英文包
  messages,
});

export default i18n;
