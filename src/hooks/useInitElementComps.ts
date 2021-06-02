import "element-plus/packages/theme-chalk/src/base.scss";
import ElementLocale from 'element-plus/lib/locale';
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
} from "element-plus";

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
]

const useElementComps = (app:any) => {

  const init = (i18n?: any) => {
    // 为了实现element插件的多语言切换
    i18n && ElementLocale.i18n((k,v) => i18n.global.t(k, v));

    // 按需引入
    elComponents.length > 0 && elComponents.forEach(el => {
      app.component(el.name, el);
    });
  }

  return {
    init
  }
}

export {
  useElementComps
};
