const initialState = {
  date: '',
  formType: 'signup',
  isAuth: true,
  isMenuOpen: false,
  isOtherNoVisible: true,
};

export default function appStateReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
