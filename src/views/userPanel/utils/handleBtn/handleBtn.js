import { getDateFn } from 'utils/GetDateFn';

export const makeUserId = (userZoomName) => `${userZoomName}_${getDateFn()[2].replace(/\s+/g, '')}`;

export const resetForminputs = (setStateFn) => {
  setStateFn((prevState) => ({
    ...prevState,
    congregation: '',
    id: '',
    name: '',
  }));
};
