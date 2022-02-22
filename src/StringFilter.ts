interface stringFilter {
  leaveNum: (content: string) => string;
}

/**
 * @description: 保留字符串中的数字
 * @param {string} content 待操作字符串
 * @return {*}
 */
const leaveNum = (content: string): string => {
  return content.replace(/[^\d]/g, "");
};

const stringFilter: stringFilter = {
  leaveNum,
};

const useStringFilter = (): stringFilter => {
  return stringFilter;
};

export { useStringFilter };
