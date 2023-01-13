interface checker {
  isPhone: (content: string) => boolean;
  isPhoneNumber: (content: string) => boolean;
}

/**
 * @description 检查手机号是否正确
 * @param {string} phone
 * @return {*}
 */
const isPhoneNumber = (phone: string): boolean => {
  if (phone == "" || !/^1[3456789]\d{9}$/.test(phone)) {
    return false;
  } else {
    return true;
  }
};

/**
 * @deprecated 使用 isPhoneNumber 替代
 */
const isPhone = isPhoneNumber;

const checker: checker = {
  isPhone,
  isPhoneNumber,
};

const useChecker = (): checker => {
  return checker;
};

export { useChecker };
