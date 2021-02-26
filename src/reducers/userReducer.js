const initialState = {
  isSignedIn: false,
  name: '',
  zoomName: '',
  congregation: '',
  meetingId: '',
  userId: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
