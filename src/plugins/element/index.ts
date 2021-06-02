import "element-plus/packages/theme-chalk/src/base.scss";
import i18n from "../i18n";
import ElementLocale from "element-plus/lib/locale";
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElButton,
  ElTabs,
  ElTag,
  ElDropdownMenu,
  ElDropdownItem,
  ElDropdown,
  ElForm,
  ElFormItem,
  ElInput,
  ElUpload,
  ElPagination,
  ElCalendar,
  ElDatePicker
} from "element-plus";

// 关于ui库部分组件有使用day.js,完全国际化还需要对day.js进行处理
// ui组件内部支持i18n的国际化
ElementLocale.i18n(i18n.global.t);

const elComponents = [
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElButton,
  ElTabs,
  ElTag,
  ElDropdownMenu,
  ElDropdownItem,
  ElDropdown,
  ElForm,
  ElFormItem,
  ElInput,
  ElUpload,
  ElPagination,
  ElCalendar,
  ElDatePicker
]

export default {
  install: function(Vue: any) {
    // 按需引入组件
    elComponents.length > 0 && elComponents.forEach(el => {
      Vue.component(el.name, el);
    });
    // el全局配置: 组件默认大小、层级
    const option = {
      size: "medium",
      zIndex: 2000,
    }
    Vue.config.globalProperties.$ELEMENT = option
  }
};
