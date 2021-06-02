import { inject, provide } from "@vue/runtime-core";

/** store基础泛类 */
export interface FunctionStore<T> {
  (): T;
  root?: T;
  token?: symbol;
}

/** 单收集依赖 */
const useProvider = <T>(func: FunctionStore<T>): T => {
  // 保证唯一键名
  !func.token && (func.token = Symbol('functional store'));
  const deps = func();
  provide(func.token, deps);
  return deps;
}

/** 多收集依赖 */
const useProviders = (...funcs: FunctionStore<any>[]) => {
 funcs.forEach(func => {
  useProvider(func);
 });
}

/** 注入作用类型声明, 标记 root: 全局, optional: 局部 */
type InjectType = "root" | "optional";

/** 依赖注入 */
const useInjector = <T>(input: FunctionStore<T> | symbol, type?: InjectType) => {
  let token: any;
  let func: any;
  let root: any;
  let name: string = "";

  if (typeof input === "symbol") {
    token = input;
  } else {
    // FunctionStore<T>
    func = input;
    token = input.token;
    root = input.root;
    name = input.name;
  }

  switch (type) {
    default:
      if (inject<T>(token)) {
        return inject<T>(token);
      }
      if (root) return root;
      throw new Error(`状态钩子函数 ${name} 未在上层组件通过调用 useProvider 收集依赖.`)
    case "optional": 
      return inject<T>(token) || root || null;
    case "root":
      if (!root) {
        func.root = func();
      }
      return func.root;
  }
}

export {
  useProvider,
  useInjector,
  useProviders,
};
