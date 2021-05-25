import { computed, onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const useVueI18n = () => {
  const currLang = ref("");
  const { locale, t, messages } = useI18n({ useScope: 'global' });

  onMounted(() => {
    // 初始化是取缓存配置
    console.log(messages);
    console.log("locale: ", locale.value);
  })

  const change = (lang: string) => {
    console.log("lang: ", lang);
    locale.value = lang;
    currLang.value = lang;
    // 保持至缓存

    console.log("locale: ", locale.value);
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
