interface time {
  sleep?: (ms: number) => Promise<any>;
}

const time: time = {};

/**
 * @description: 暂停函数
 * @param {number} ms 毫秒
 * @return {*}
 */
time.sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const useTime = () => {
  return time;
};

export { useTime };
