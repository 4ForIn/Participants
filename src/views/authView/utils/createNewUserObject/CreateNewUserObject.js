export const createNewUserObject = (id, userData) => {
  const newUser = {
    email: userData.email,
    idToken: '',
    name: userData.name ?? '',
    password: userData.password,
    userId: id,
  };
  return newUser;
};

/*
user object:
{
  congregation: null,
  email: null,
  idToken: null,
  isSignedIn: false,
  meetingId: null,
  name: '',
  participantsQuantity: null,
  userId: getDateFn()[2].replace(/\s+/g, ''),
  zoomName: null,
}
*/
