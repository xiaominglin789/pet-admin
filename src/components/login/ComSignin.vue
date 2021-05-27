<template >
  <!-- 登录form -->
  <el-form v-if="signinModel" :model="signinModel" status-icon ref="ruleForm">
    <el-form-item class="title" :label="t('signInAndUp.signIn')">
    </el-form-item>
    <el-form-item :label="t('signInAndUp.account')" prop="account">
      <el-input v-model="signinModel.account" :placeholder="t('signInAndUp.accountTip')"></el-input>
    </el-form-item>
    <el-form-item :label="t('signInAndUp.password')" prop="passord">
      <el-input type="password" v-model="signinModel.password" :placeholder="t('signInAndUp.passwordTip')"></el-input>
    </el-form-item>
    <el-form-item class="btn-form">
      <el-button type="primary" @click="emit('onSubmit', signinModel)">{{ t("signInAndUp.signIn") }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { useVueI18n } from "../../hooks/useVueI18n";
import { defineEmit, ref } from "vue";
import type { SigninModelType } from "../../utils/interface-type";

const signinModel = ref<SigninModelType>({
  account: "",
  password: ""
});

const emit = defineEmit(['onSubmit']);

const { t } = useVueI18n();

</script>

<style lang="scss" scoped>
  
</style>