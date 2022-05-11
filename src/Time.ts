interface time {
  sleep: (ms: number) => Promise<any>;
}

/**
 * @description 暂停函数
 * @param {number} ms 等待时间
 * @return {*}
 */
const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const time: time = { sleep };

const useTime = () => {
  return time;
};

export { useTime };
