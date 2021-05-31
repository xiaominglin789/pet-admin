<template>
  <el-container class="page home">
    <el-header class="home-header" >
      <!-- 语言切换 -->
      <com-lauguage-drapdown>
        <template #others>
          <el-button @click="onSignOut" class="btn-sign-out">{{ t("lauguage.loginOut") }}</el-button>
        </template>
      </com-lauguage-drapdown>
    </el-header>
    
  </el-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import ComLauguageDrapdown from "@/components/public/ComLauguageDropdown.vue"
import { useVueI18n } from "../../hooks/useVueI18n";
import { ElMessage, ElMessageBox } from "element-plus";

const router = useRouter();
const { t } = useVueI18n();

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