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

/*
export default function myLogger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    // console.log('state after dispatch', getState());
    return returnValue;
  };
}
-------
export const myLogger = (store) => (next) => (action) => {
  console.log('will dispatch', action);
  next(action);
}; 

*/
