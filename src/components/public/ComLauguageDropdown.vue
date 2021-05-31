<template>
  <div :class="['com', className]">
    <p hidden>语言切换组件</p>
    <!-- 语言切换 -->
    <el-dropdown trigger="click" @command="onDropdownChange">
      <span class="el-dropdown-link">
        {{ t("lauguage.change") }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="header-dropdown-menu">
          <el-dropdown-item v-for="lang in langData" :key="lang.title" :command="lang.value">{{ lang.title }}</el-dropdown-item>
          <slot name="others"></slot>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">import router from "@/router";
import { defineProps } from "@vue/runtime-core";
import { ElMessage, ElMessageBox } from "element-plus";
import { useVueI18n } from "../../hooks/useVueI18n";

defineProps({
  className: {
    type: String,
    default: "lauguage-dropdown"
  }
})

const  { langData, change, t } = useVueI18n();

const onDropdownChange = (target:string) => {
  change(target);
}

const onSignOut = () => {
  ElMessageBox.confirm(t("lauguage.isLoginOut"), "", {
    center: true
  }).then(res=> {
    router.replace('/login');
    ElMessage.success(t("lauguage.loginOutSeccuss"));
  }).catch(err => {
    console.log(err);
  });
}

</script>
