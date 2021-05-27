export const bind = (func, context, arg1) => {
  return function (arg2) {
    return func.call(context, [arg1, arg2]);
  };
};
