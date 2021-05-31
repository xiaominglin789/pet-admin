import { createI18n } from "vue-i18n";
import cnMsg from "./cn";
import enMsg from "./en";

const i18n = createI18n({
  legacy: false,
  locale: "cn",
  messages: {
    cn: {
      ...cnMsg,
    },
    en: {
      ...enMsg
    },
  }
});

// 初始化设置缓存的语言

export default i18n;
