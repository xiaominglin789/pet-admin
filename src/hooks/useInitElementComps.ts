import "element-plus/packages/theme-chalk/src/base.scss";
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
  ElDropdown
]

const useElementComps = (app:any, i18nOptioons?: Record<string, any>) => {

  const init = () => {
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
