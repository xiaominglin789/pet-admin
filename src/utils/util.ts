/** 对象类型判断 */
const isObject = (obj: any) => {
    return typeof obj === "object" && obj != null;
}

/**
   * 节流函数
   * @param fn 
   * @param delay 延迟时间,默认 300ms
   */
const throttle = (fn: Function, delay: number=300) => {
  let timer: number|null = null;
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
  let timer: number|null = null;
  let result: any = null;

  return (...args:any) => {
    if (timer) {
      clearTimeout(timer);
    }
    console.log("参数 immediatory => ", immediatory);
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

export {
  isObject,
  throttle,
  debounce
};
