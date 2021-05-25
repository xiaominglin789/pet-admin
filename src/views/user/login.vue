<template>
	<div ref="loginRef" class="page login container">
		<div class="forms-container">
			<div class="signin-signup">
				<!-- signin-form -->
				<form class="sign-in-form">
					<h2 class="title">登录平台</h2>
					<!-- username -->
					<div class="input-field">
						<i class="iconfont icon-user"></i>
						<input type="text" placeholder="账号" />
					</div>
					<!-- password -->
					<div class="input-field">
						<i class="iconfont icon-lock"></i>
						<input type="password" placeholder="密码" />
					</div>
					<!-- submit -->
					<input @click.prevent="onSubmitThrottle" type="submit" value="登录" class="btn solid" />
					<p class="thirds-login-text">其他第三方登录</p>
					<!-- thirds -->
					<div class="thirds">
						<a href="#" class="third-icon">
							<i class="iconfont icon-wechat"></i>
						</a>
						<a href="#" class="third-icon">
							<i class="iconfont icon-qq"></i>
						</a>
						<a href="#" class="third-icon">
							<i class="iconfont icon-zhifubao"></i>
						</a>
						<a href="#" class="third-icon">
							<i class="iconfont icon-xiaomi"></i>
						</a>
					</div>
				</form>

				<!-- signup-form -->
				<form class="sign-up-form">
					<h2 class="title">马上注册</h2>
					<!-- username -->
					<div class="input-field">
						<i class="iconfont icon-user"></i>
						<input type="text" placeholder="账号" />
					</div>
					<!-- email -->
					<div class="input-field">
						<i class="iconfont icon-email"></i>
						<input type="text" placeholder="邮箱" />
					</div>
					<!-- password -->
					<div class="input-field">
						<i class="iconfont icon-lock"></i>
						<input type="password" placeholder="密码" />
					</div>
					<!-- submit -->
					<input @click.prevent="onSubmitThrottle" type="submit" value="注册" class="btn solid" />
				</form>
			</div>
		</div>
    
		<!-- 切换栏 -->
		<div class="panels-container">
			<!-- 左侧提示 -->
			<div class="panel left-panel">
				<div class="content">
					<h3>CSS Transform</h3>
					<p>Transform字面上就是变形，改变的意思。在CSS3中transform主要包括以下几种：旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix。下面我们一起来看看CSS3中transform的旋转rotate、扭曲skew、缩放scale和移动translate具体如何实现，老样子，我们就从transform的语法开始吧。</p>
					<button @click="toSignUp" class="btn convert">去注册</button>
				</div>
				<!-- img -->
				<img src="@/assets/img/signup.svg" class="image" />
			</div>
			<!-- 右侧提示 -->
			<div class="panel right-panel">
				<div class="content">
					<h3>::before ? ::after</h3>
					<p>CSS样式表的主要作用是修饰Web页面上的HTML标记，但有时候，为了实现某个效果而往页面里反复添加某个HTML标记很繁琐，或者是显得多余，或者是由于某种原因而做不到。这就是CSS伪元素(Pseudo-Element)可以发挥作用的地方，所谓‘伪元素’，就是本身不存在的页面元素，HTML代码里并没有这样的元素，但在页面显示时，你却能看到这些本来不存在的元素发挥着作用。</p>
					<button @click="toSignIn" class="btn convert">去登录</button>
				</div>
				<!-- img -->
				<img src="@/assets/img/signin.svg" class="image" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import { debounce } from "../../utils/util";

const loginRefChangeClass = "signup-up-mode";
const loginRef = ref<Element|undefined>();

onMounted(() => {
  nextTick(() => {
    // 进入页面显示登录的
    onSigninOrSignupDebounce(true);
  });
});

const onSigninOrSignupDebounce = debounce((flag: boolean) => {
  console.log("flag: ", flag);
  if (flag) {
    // true
    console.log("去登录 ", loginRef.value?.classList);
    loginRef.value?.classList.remove(loginRefChangeClass);
    console.log("去登录 ", loginRef.value?.classList);
  } else {
    // false
    console.log("去注册 ", loginRef.value?.classList);
    loginRef.value?.classList.add(loginRefChangeClass);
    console.log("去注册 ", loginRef.value?.classList);
  }
}, 600, true)


const toSignUp = () => {
  onSigninOrSignupDebounce(false);
}

const toSignIn = () => {
  onSigninOrSignupDebounce(true);
}

const onSubmitThrottle = debounce(() => {
  console.log("提交...");
});

</script>

<style lang="css" scoped>
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

form {
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

form.sign-in-form {
  z-index: 2;
  opacity: 1;
}

form.sign-up-form {
  z-index: 1;
  opacity: 0;
  transform: translateX(100%);
}

.title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #888;
}

.input-field {
  max-width: 380px;
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  margin: 8px 0;
  border-radius: 24px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 16px;
}

.input-field i {
  text-align: center;
  line-height: 50px;
  color: #acacac;
  font-size: 16px;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 16px;
  color: #555;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 600;
}

.btn {
  border: none;
  outline: none;
  border-radius: 24px;
  width: 160px;
  height: 40px;
  background-color: #5995fd;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin: 8px 0;
}

.btn:hover {
  background-color: #4d84e2;
}

.third-logins {
  padding: 4px 0;
  font-size: 16px;
}

.thirds-login-text {
  font-size: 14px;
  color: #888;
  padding: 8px 0;
}

.thirds {
  display: flex;
  justify-content: center;
}

.third-icon {
  width: 36px;
  height: 36px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  color: #333;
  border-radius: 50%;
  transition: .3s;
}

.third-icon:hover {
  color: #4d84e2;
  border-color: #4d84e2;
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
  padding: 3rem 17% 2rem 12%;
  pointer-events: all;
}

.right-panel {
  padding: 3rem 12% 2rem 17%;
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
  width: 120px;
  height: 40px;
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

.container.signup-up-mode form.sign-in-form {
  z-index: 1;
  opacity: 0;
}

.container.signup-up-mode form.sign-up-form {
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
    top: 85%;
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

  .btn.convert {
    border: 1px solid #fff;
    width: 100px;
    height: 36px;
    font-size: 18px;
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
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

@media(max-width: 570px) {
  form {
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

  .title {
    font-size: 24px;
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