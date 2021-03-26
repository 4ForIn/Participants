import { SET_USER_PROPERTIES } from 'actions/ActionsTypes';

export const setUserProperties = (userProps) => ({
  type: SET_USER_PROPERTIES,
  payload: userProps,
});
/*
userProps are some of these properies:
{
  congregation: '',
  isSignedIn: true,
  meetingId: '',
  name: '',
  participantsQuantity: 1,
  userId: '',
  zoomName: '',
}
 */
