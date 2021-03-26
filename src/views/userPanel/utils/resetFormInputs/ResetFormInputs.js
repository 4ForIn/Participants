export const resetForminputs = (setStateFn) => {
  setStateFn((prevState) => ({
    ...prevState,
    congregation: '',
    id: '',
    name: '',
  }));
};
