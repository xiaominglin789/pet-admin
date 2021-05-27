<template>
	<div class="page login container" :class="{'signup-up-mode': signupUpMode}">
		<div class="forms-container">
			<div class="signin-signup">
        <ComSignin class="form form-signin" @onSubmit="onSubmitSigninThrottle"></ComSignin>
        <ComSignup class="form form-signup" @onSubmit="onSubmitSignupThrottle"></ComSignup>
      </div>
		</div>
    
		<!-- 切换栏 -->
		<div class="panels-container">
			<!-- 左侧提示 -->
			<div class="panel left-panel">
				<div class="content">
					<h3>CSS Transform</h3>
					<p>Transform字面上就是变形，改变的意思。在CSS3中transform主要包括以下几种：旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix。下面我们一起来看看CSS3中transform的旋转rotate、扭曲skew、缩放scale和移动translate具体如何实现，老样子，我们就从transform的语法开始吧。</p>
					<button @click="signupUpMode = !signupUpMode" class="btn convert">{{ t('signInAndUp.signUp') }}</button>
				</div>
				<!-- img -->
				<img src="@/assets/img/signup.svg" class="image" />
			</div>
			<!-- 右侧提示 -->
			<div class="panel right-panel">
				<div class="content">
					<h3>::before ? ::after</h3>
					<p>CSS样式表的主要作用是修饰Web页面上的HTML标记，但有时候，为了实现某个效果而往页面里反复添加某个HTML标记很繁琐，或者是显得多余，或者是由于某种原因而做不到。这就是CSS伪元素(Pseudo-Element)可以发挥作用的地方，所谓‘伪元素’，就是本身不存在的页面元素，HTML代码里并没有这样的元素，但在页面显示时，你却能看到这些本来不存在的元素发挥着作用。</p>
					<button @click="signupUpMode = !signupUpMode" class="btn convert">{{ t('signInAndUp.signIn') }}</button>
				</div>
				<!-- img -->
				<img src="@/assets/img/signin.svg" class="image" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { debounce } from "../../utils/util";
import { useVueI18n } from "../../hooks/useVueI18n";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import ComSignin from "../../components/login/ComSignin.vue";
import ComSignup from "../../components/login/ComSignup.vue";

const router = useRouter();
const { t } = useVueI18n();
/** 控制去注册或去登录 */
const signupUpMode = ref(false);

const onSubmitSigninThrottle = debounce((params: any) => {
  console.log(params);
  ElMessage.error(t("signInAndUp.signInError"));
  router.replace("/");
}, 500);

const onSubmitSignupThrottle = debounce((params: any) => {
  console.log(params);
  ElMessage.error(t("signInAndUp.signUpError"));
}, 500);

</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
}

.container:before {
  content: "";
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background-color: #4d84e2;
  background: linear-gradient(-45deg, #4481eb, #04befe);
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  z-index: 6;
  transition: 1.2s ease-in-out;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;
}

.signin-signup .btn-form {
}

.signin-signup:deep(.btn-form .el-button) {
  width: 210px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;
}


.form:deep(.title .el-form-item__label) {
  color: #333;
  margin-bottom: 0;
  font-size: 27px;
  margin-bottom: 0;
  width: 210px;
  text-align: right;
  text-decoration: underline;
}


.form.form-signup:deep(.title .el-form-item__label) {
  color: #333;
  margin-bottom: 0 !important;
  font-size: 27px !important;
  margin-bottom: 0 !important;
  width: 290px !important;
  text-align: right;
  text-decoration: underline;
}

.form.form-signin {
  z-index: 2;
  opacity: 1;
}

.form.form-signup {
  z-index: 1;
  opacity: 0;
  transform: translateX(100%);
}

.panels-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.panel {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  z-index: 7;
  text-align: center;
}

.left-panel {
  padding: 3rem 16% 2rem 12%;
  pointer-events: all;
}

.right-panel {
  padding: 3rem 12% 2rem 16%;
  pointer-events: none;
}

.panel .content {
  color: #fff;
  transition: 0.8s 0.6s ease-in-out;
}

.panel h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
}

.panel p {
  font-size: 18px;
  padding: 4px 0;
  word-break: break-all;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;
}

.panel .btn.convert {
  border: 2px solid #fff;
  width: 180px;
  height: 48px;
  border-radius: 24px;
  font-size: 22px;
}

.image {
  width: 100%;
  transition: 1.2s 0.4s ease-in-out;
}

.right-panel .content, .right-panel .image {
  transform: translateX(800px);
}

/* 动画 */
.container.signup-up-mode::before{
  transform: translate(100%, -50%);
  right: 52%;
}

.container.signup-up-mode .left-panel .image,
.container.signup-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.signup-up-mode .right-panel .image,
.container.signup-up-mode .right-panel .content {
  transform: translateX(0px);
}

.container.signup-up-mode .left-panel {
  pointer-events: none;
}

.container.signup-up-mode .right-panel {
  pointer-events: all;
}

.container.signup-up-mode .signin-signup {
  left: 25%;
}

.container.signup-up-mode .form.form-signin {
  z-index: 1;
  opacity: 0;
}

.container.signup-up-mode .form.form-signup {
  z-index: 2;
  opacity: 1;
  transform: translateX(0px);
}

/* 响应式-media +870-570-0 */
@media(max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }

  .container:before {
    /* display: none; */
    width: 1500px;
    height: 1500px;
    left: 30%;
    bottom: 68%;
    transform: translateX(-50%);
    right: initial;
    top: initial;
    transition: 1.6s ease-in-out;
  }

  .signin-signup {
    width: 100%;
    left: 50%;
    top: 83%;
    transform: translate(-50%, -100%);
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
  }

  .panel .content {
    padding-right: 10%;
    transition: 0.8s 0.8s ease-in-out;
  }

  .panel h3 {
    font-size: 32px;
  }
  
  .panel p {
    font-size: 20px;
    padding: 4px 0;
  }

  .panel .btn.convert {
    border: 1px solid #fff;
    width: 120px;
    height: 36px;
    font-size: 18px;
    border-radius: 18px;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .image {
    width: 32%;
    transition: 0.8s 0.5s ease-in-out;
  }

  .right-panel .content, .right-panel .image {
    transform: translateY(300px);
  }

  .container.signup-up-mode::before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.signup-up-mode .left-panel .image,
  .container.signup-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.signup-up-mode .signin-signup {
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

@media(max-width: 570px) {

  .container.signup-up-mode .signin-signup {
    top: 10%;
    left: 45%;
    transform: translate(-50%, 0);
  }

  .form {
    padding: 0 10px;
  }

  .image {
    display: none;
  }

  .panel .content {
    padding: 10px 16px;
  }

  .panel h3 {
    font-size: 24px;
  }

  .panel p {
    font-size: 16px;
    padding: 4px 0;
    -webkit-line-clamp: 2;
  }
  
  .container::before {
    bottom: 72%;
    left: 50%;
  }

  form {
    padding: 0 36px;
  }
  
  .container.signup-up-mode::before {
    bottom: 28%;
    left: 50%;
  }
}

@media(max-width: 320px) {
  .container {
    min-height: 680px;
    height: 100vh;
  }

  .container.signup-up-mode .signin-signup {
    top: 10%;
    left: 45%;
    transform: translate(-50%, 0);
  }

  .form:deep(.title .el-form-item__label) {
    margin-bottom: 0 !important;
    font-size: 18px !important;
    width: 100%;
    text-align: right;
    text-decoration: underline;
  }

  .panel {
    padding: 0.6rem 6%;
  }

  .panel h3 {
    font-size: 24px;
  }

  .panel p {
    font-size: 16px;
    padding: 4px 0;
    -webkit-line-clamp: 2;
  }

  form {
    padding: 0 18px;
  }
  
  form .input-field {
    max-width: 300px;
    width: 100%;
    height: 36px;
  }

  form .input-field i {
    line-height: 36px;
  }

  .input-field input {
    font-size: 14px;
  } 
}
</style>