interface checker {
  isPhone: (content: string) => boolean;
}

/**
 * @description 检查手机号是否正确
 * @param {string} phone
 * @return {*}
 */
const isPhone = (phone: string): boolean => {
  if (phone == "" || !/^1[3456789]\d{9}$/.test(phone)) {
    return false;
  } else {
    return true;
  }
};

const checker: checker = {
  isPhone,
};

const useChecker = (): checker => {
  return checker;
};

export { useChecker };
