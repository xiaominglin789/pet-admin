/** 工具函数 */

/**
   * 节流函数
   * @param fn 
   * @param delay 延迟时间,默认 300ms
   */
const throttle = (fn: Function, delay: number=300) => {
  let timer: any = null;
  let result: any = null;

  return (...args: any) => {
    if (!timer) {
      timer = setTimeout(() => {
        result = fn(...args);
        timer = null;
      }, delay);
    }
    return result;
  }
}

/**
   * 防抖函数
   * @param fn 
   * @param delay 延迟时间,默认 300ms
   * @param immediatory 是否立刻执行方法,默认 false
   */
const debounce = (fn: Function, delay: number=300, immediatory: boolean=false) => {
  let timer: any = null;
  let result: any = null;

  return (...args:any) => {
    if (timer) {
      clearTimeout(timer);
    }

    if (immediatory) {
      const immedia = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);

      if (immedia) {
        result = fn(...args);
      }
    } else {
      timer = setTimeout(() => {
        result = fn(...args);
      }, delay);
    }
    return result;
  }
}

/**
 * 判断 是否为对象类型
 * @param target 
 * @returns true: 是对象类型,  false: 非对象类型
 */
 function isObject(target: any): boolean {
  return typeof target == "object" && target !== null;
}

/**
 * 判断 是不是数组类型
 * @param target 
 * @returns true: 数组类型,  false: 非数组类型
 */
function isArray(target: any): boolean {
  return Array.isArray(target);
}

/**
 * 判断 是不是函数类型
 * @param target 
 * @returns true: 函数类型,  false: 非函数类型
 */
function isFunction(target: any): boolean {
  return typeof target == "function";
}

/**
 * 判断 是不是数字类型
 * @param target 
 * @returns true: 数字类型,  false: 非数字类型
 */
 function isNumber(target: any): boolean {
  return typeof target == "number";
}

/**
 * 判断 是不是字符串类型
 * @param target 
 * @returns true: 字符串类型,  false: 非字符串类型
 */
 function isString(target: any): boolean {
  return typeof target == "string";
}

/**
 * 判断 是不是整形数字类型
 * @param target 
 * @returns true: 整形数字类型,  false: 非 整形数字类型
 */
function isInteger(target: any): boolean {
  return parseInt(target) + "" === target;
}

/**
 * target 是否有 key 这个属性
 * @param target 
 * @param key key键的属性
 * @returns 
 */
function hasOwnKey(target: any, key: string) {
  return Object.prototype.hasOwnProperty.call(target, key);
}

/**
 * 比较变量是否相等
 * @param valA 
 * @param valB 
 * @returns true: 值一样的， false: 值不一样
 */
function  compareValue<T>(valA: T, valB: T) {
  if (!valA || !valB) {
    return false;
  }

  return valB === valA;
}

export {
  isObject,
  throttle,
  debounce,
  isArray,
  isFunction,
  isNumber,
  isString,
  isInteger,
  hasOwnKey,
  compareValue
};
