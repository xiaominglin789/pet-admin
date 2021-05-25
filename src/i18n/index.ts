import { createI18n } from "vue-i18n";
import cnMsg from "./cn";
import enMsg from "./en";

const i18n = createI18n({
  legacy: false,
  locale: "cn",
  messages: {
    cn: {
      // ...(() => import("./cn/cn"))
      ...cnMsg,
    },
    en: {
      ...enMsg
    },
  }
});

export default i18n;
