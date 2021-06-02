import { createI18n } from "vue-i18n";
import elementlangEn from 'element-plus/lib/locale/lang/en';
import elementlangZhCn from 'element-plus/lib/locale/lang/zh-cn';
import ZhCnMsg from "./zh-cn";
import enMsg from "./en";

const i18n = createI18n({
  legacy: false,
  locale: "zh-cn", // 默认语言
  messages: {
    "zh-cn": {
      ...elementlangZhCn,
      ...ZhCnMsg,
    },
    "en": {
      ...elementlangEn,
      ...enMsg
    },
  }
});

// 初始化设置缓存的语言

export default i18n;
