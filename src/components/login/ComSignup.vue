<template >
  <!-- 注册form -->
  <el-form :model="signupMole" label-width="80px" status-icon ref="ruleForm" class="form form-signup">
    <el-form-item class="title" :label="t('signInAndUp.signUp')"></el-form-item>
    <el-form-item :label="t('signInAndUp.account')" prop="account">
      <el-input v-model="signupMole.account" :placeholder="t('signInAndUp.accountTip')"></el-input>
    </el-form-item>
    <el-form-item :label="t('signInAndUp.password')" prop="passord">
      <el-input type="password" v-model="signupMole.password" :placeholder="t('signInAndUp.passwordTip')"></el-input>
    </el-form-item>
    <el-form-item :label="t('signInAndUp.email')" prop="email">
      <el-input type="email" v-model="signupMole.email" :placeholder="t('signInAndUp.emailTip')"></el-input>
    </el-form-item>
    <el-form-item :label="t('signInAndUp.code')" prop="code">
      <el-input v-model="signupMole.code"></el-input>
    </el-form-item>
    <el-form-item class="btn-form">
      <el-button type="primary" @click="emit('onSubmit', signupMole)">{{ t("signInAndUp.signUp") }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { useVueI18n } from "../../hooks/useVueI18n";
import { defineEmit, ref } from "vue";
import type { SignupModelType } from "../../utils/types/interface-type";

const emit = defineEmit(['onSubmit']);
const signupMole = ref<SignupModelType>({
  account: "",
  password: "",
  email: "",
  code: ""
});

const { t } = useVueI18n();

</script>
