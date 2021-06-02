import { ref } from "vue";
import { useI18n } from "vue-i18n";

const useVueI18n = () => {
  const currLang = ref("");

  const { locale, t } = useI18n({ useScope: 'global' });

  const change = (lang: string) => {
    console.log("切换成: ", lang);
    locale.value = lang;
    currLang.value = lang;
    // 保持至缓存
  }

  return {
    t,
    change,
    langData: [
      { title: "中文", value: "zh-cn" },
      { title: "Eglish", value: "en" },
    ]
  }
}

export {
  useVueI18n
};
