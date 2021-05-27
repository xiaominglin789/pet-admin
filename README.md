# Vue 3 + Typescript + Vite + Element-plus 开发后台



### 使用的技术真
构建： vite2
核心: vue3.05 + vue-router4 + vuex4
ui: element-plus、echarts





- vscode vetur/volar 插件 对 `<script setup lang="ts">` 的相关异常提示: 
volar插件提示报错 ts(2693):
1.ts报错: "PropType"仅表示类型，但在此处却作为值使用。
2.找了2天,volar/vetur插件卸载,也没法很好解决
3.在vue-next issues:3824 等找到相关的处理方案: ts 对于要引入的的是类型，多加个 type 表示。
4.用了 srcipt setup 的子组件,在导入父组件时, vetur 插件会提示 没有 export 该组件。解决方案: 卸载 vetur 插件,只用 volar 插件就好了。




- @vue-compiler-sfc 样式穿透 `>>>`、`/deep/`、`::v-deep` 换成了 `:depp(<要穿透的样式>)`
```bash
// 修改下 element的样式,其中 .title 是指定的某些class的 .el-form-item__label
.form:deep(.title .el-form-item__label) {
  color: green;
}
```
