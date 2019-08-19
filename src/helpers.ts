export const checkIsBrowserEnv = () => {
  return typeof window !== 'undefined'
};

export const validateStateKeys = (keys: any[] = []) => {
  return keys.map(key => {
    let attr = key;

    if (typeof attr !== 'string') {
      throw new TypeError(
        `localStorageSync Unknown Parameter Type: ` +
        `Expected type of string, got ${typeof attr}`
      );
    }
    return key;
  });
};
