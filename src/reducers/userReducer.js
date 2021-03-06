const initialState = {
  congregation: '',
  isSignedIn: true,
  meetingId: '',
  name: '',
  participantsQuantity: 1,
  userId: '',
  zoomName: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
