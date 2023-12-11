interface Type {
  isObject: (content: any) => boolean;
  isArray: (content: any) => boolean;
}

const isArray = (content: any): boolean => Array.isArray(content);

const isObject = (content: any): boolean =>
  Object.prototype.toString.call(content) === "[object Object]" &&
  !isArray(content);

const type: Type = {
  isObject,
  isArray,
};

const useType = (): Type => {
  return type;
};

export { useType };
