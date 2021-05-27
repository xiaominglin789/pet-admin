import { ref } from "vue";
import { useI18n } from "vue-i18n";

const useVueI18n = () => {
  const currLang = ref("");

  const { locale, t } = useI18n({ useScope: 'global' });

  const change = (lang: string) => {
    locale.value = lang;
    currLang.value = lang;
    // 保持至缓存
  }

  return {
    t,
    change,
    langData: [
      { title: "中文", value: "cn" },
      { title: "Eglish", value: "en" },
    ]
  }
}

export {
  useVueI18n
};
