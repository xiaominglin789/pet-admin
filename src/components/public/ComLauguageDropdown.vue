<template>
  <div :class="['com lauguage-dropdown', className]">
    <p hidden>语言切换组件</p>
    <!-- 语言切换 -->
    <el-dropdown trigger="click" @command="onDropdownChange">
      <span class="el-dropdown-link">
        <i class="el-icon-eleme el-icon--right"></i>
        {{ currentLangText }}
        <i class="el-icon-arrow-down el-icon--left"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="header-dropdown-menu">
          <el-dropdown-item command="cn">{{ t('lauguage.chinese') }}</el-dropdown-item>
          <el-dropdown-item command="en">{{ t('lauguage.english') }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "@vue/runtime-core";
import { ElMessage } from "element-plus";
import { useVueI18n } from "@/hooks/useVueI18n";
import { computed } from "vue";

defineProps({
  className: {
    type: String,
    default: "lauguage-dropdown"
  }
})

const  { lang, change, t } = useVueI18n();

const onDropdownChange = (target:string) => {
  change(target);
  ElMessage.success(t("lauguage.changeSuccess"));
}

const currentLangText = computed(()=> {
  let langText = "";
  switch (lang.value) {
    case "cn":
      langText = t('lauguage.chinese');
      break;
    case "en":
      langText = t('lauguage.english');
      break;
    default:
      langText = t('lauguage.chinese');
      break;
  }
  return langText;
})

</script>

<style lang="scss" scrope>
.lauguage-dropdown {
  display: inline-block;
  cursor: pointer;
}
</style>