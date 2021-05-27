<template>
  <el-container class="page home">
    <el-header class="home-header" >
      <!-- 语言切换 -->
      <el-dropdown trigger="click" @command="onDropdownChange">
        <span class="el-dropdown-link">
          {{ t("lauguage.change") }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="header-dropdown-menu">
            <el-dropdown-item v-for="lang in langData" :key="lang.title" :command="lang.value">{{ lang.title }}</el-dropdown-item>
            <el-button class="btn-sign-out" @click.prevent="onSignOut">{{ t("lauguage.loginOut") }}</el-button>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    
  </el-container>
</template>

<script setup lang="ts">
import { useVueI18n } from "../../hooks/useVueI18n";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const  { langData, change, t } = useVueI18n();
const router = useRouter();

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

<style lang="scss" scoped>
.el-header.home-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 1px 2px 1px #eee;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
.header-dropdown-menu {
  text-align: center;
  .btn-sign-out {
    outline: none !important;
    border: none !important;
    width: 100% !important;
  }
}

</style>