/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

export const myLogger = () => (next) => (action) => {
  const { type, payload } = action;
  console.log(
    `%c ${type || 'no type Action'} %c with payload: %c ${
      JSON.stringify(payload) || payload || 'without'
    }`,
    'font-weight: bold; color: blue',
    '',
    'color: green',
  );
  next(action);
};
