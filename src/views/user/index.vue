<template>
  <!-- 头像上传 -->
  <el-upload
    class="avatar-uploader"
    name="avater"
    action="/api/upload"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
  <!-- 原生 单图-上传 -->
  <div class="upload">
    <input @change="onSelected($event)" name="avatar" type="file" accept="image/*">
    <img :src="useAvatar?useAvatar:''" width="200">
    <el-button @click="onUpload">上传</el-button>
  </div>
  <!-- ajax -->
  <el-button @click="onUpload2">ajax</el-button>
  <!-- get -->
  <el-button @click="getTestGet">get</el-button>
  <!-- post -->
  <el-button @click="getTestPost">post</el-button>
  <!-- put -->
  <el-button @click="getTestPut">put</el-button>
  <!-- delete -->
  <el-button @click="getTestDelete">delete</el-button>

</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import { ElMessage } from "element-plus";
import { useVueI18n } from "@/hooks/useVueI18n";
import { getTest4, getTest3, getTestGet, getTestPost, getTestPut, getTestDelete } from "@/api/user";
import { debounce } from "@/utils/util";

const imageUrl = ref("");
const { t } = useVueI18n();
const useAvatar = ref("");
const uploadFile = ref<File>();

// 日历
const data = ref(new Date());


// 
const onSelected = (e: any) => {
  if (!e.target?.files?.length) return;

  uploadFile.value = e.target.files[0];
}

const onUpload2 = async() => {
  await getTest3();
}

const onUpload = debounce(async() => {
  console.log(uploadFile.value);
  if (!uploadFile.value) return;

  const res = await getTest4("avatar", uploadFile.value);
}, 1000);

const beforeAvatarUpload = async(e: any) => {
  // 图片大小、格式、的限制
  // TODO
}

const handleAvatarSuccess = async(e: any) => {
  imageUrl.value = e.url;
  ElMessage.success(t("upload.success"));
}

const submitUpload = async() => {
  console.log("提交");
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>