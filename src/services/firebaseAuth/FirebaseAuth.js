/* eslint-disable no-console */
import { auth } from '../firebase/Firebase';

/* auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log(user);
  } else {
    // No user is signed in.
    console.log(user);
    // eslint-disable-next-line no-alert
    alert('You are signed out');
  }
  return user;
}); */

const updateUserName = async (user, name) => {
  try {
    await user.updateProfile({
      displayName: name,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const signUpWithEmailAndPassAndName = async (email, password, name) => {
  let currentUser;
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    currentUser = auth.currentUser;
    await updateUserName(currentUser, name);
  } catch (error) {
    // An error happened.
    console.log(error.message);
    currentUser = null;
  }
  console.log(`curentUser name: ${auth?.currentUser?.displayName}`);
  return currentUser;
};

export const signInWithEmailAndPass = async (email, password) => {
  let res;
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((r) => {
      res = r;
    })
    .catch((error) => {
      // An error happened.
      console.log(error.message);
      res = error;
    });
  return res;
};

export const signOut = async () => {
  await auth
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful');
    })
    .catch((error) => {
      // An error happened.
      console.log(error.message);
    });
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
  uid: null,
  zoomName: null,
}

------------------
firebase.auth().currentUser.getIdToken( \/*forceRefresh \* true).then(function(idToken) {
  // Send token to your backend via HTTPS
  // ...
}).catch(function(error) {
  // Handle error
});

*/
