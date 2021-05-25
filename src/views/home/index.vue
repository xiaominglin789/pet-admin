<template>
  <el-container>
    <el-header >
      <el-dropdown @command="onDropdownChange">
        <span class="el-dropdown-link">
          {{t("lauguage.change")}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="lang in langData" :key="lang.title" :command="lang.value">{{ lang.title }}</el-dropdown-item>
            <el-dropdown-item disabled>{{ t("lauguage.loginOut") }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useVueI18n } from "../../hooks/useVueI18n";

const  { langData, change, t } = useVueI18n();

const onDropdownChange = (target:string) => {
  change(target);
}
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>