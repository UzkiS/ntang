/**
 * 获取 Query String Parameter
 * @param parameter 参数名
 * @returns
 */
export const getParameter = (parameter: string): string | undefined => {
  const reg = new RegExp("(^|&|\\?)" + parameter + "=([^&#]*)", "i");
  const r = location.href.match(reg);
  if (r != null) return decodeURI(r[2]);
  return undefined;
};
