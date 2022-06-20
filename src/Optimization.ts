interface optimization {
  debounce: (
    fn: Function,
    delay?: number,
    immediate?: boolean
  ) => (...args: any) => void;
  throttle: (
    fn: Function,
    delay?: number,
    immediate?: boolean
  ) => (...args: any) => void;
}

/**
 * @description 防抖函数
 * @param {Function} fn 函数名
 * @param {number} delay 延迟时间
 * @param {boolean} immediate 是否立即执行
 * @return {*}
 */
const debounce = (
  fn: Function,
  delay: number = 500,
  immediate: boolean = false
): any => {
  let timer: NodeJS.Timeout | undefined;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    if (immediate) {
      if (!timer) fn.apply(this, args);
      timer = setTimeout(function () {
        timer = undefined;
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
};

/**
 * @description 节流函数
 * @param {Function} fn 函数名
 * @param {number} delay 延迟时间
 * @param {boolean} immediate 是否立即执行
 * @return {*}
 */
const throttle = (
  fn: Function,
  delay: number = 500,
  immediate: boolean = true
) => {
  if (immediate) {
    let prevTime = 0;
    return (...args: any) => {
      let nowTime = Date.now();
      if (nowTime - prevTime >= delay) {
        fn.apply(this, args);
        prevTime = nowTime;
      }
    };
  } else {
    let timer: NodeJS.Timeout | undefined;
    return (...args: any) => {
      if (!timer) {
        fn.apply(this, args);
        timer = setTimeout(() => {
          timer && clearTimeout(timer);
          timer = undefined;
        }, delay);
      }
    };
  }
};

const optimization: optimization = { debounce, throttle };

const useOptimization = () => {
  return optimization;
};

export { useOptimization };
