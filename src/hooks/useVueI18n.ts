import { ref } from "vue";
import { useI18n } from "vue-i18n";

const useVueI18n = () => {
  const lang = ref("");

  const { locale, t } = useI18n({ useScope: 'global' });

  const change = (_lang: string) => {
    console.log("切换成: ", _lang);
    locale.value = _lang;
    lang.value = _lang;
    // 保持至缓存
  }

  return {
    t,
    lang,
    change,
  }
}

export {
  useVueI18n
};
