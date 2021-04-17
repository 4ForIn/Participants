import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const firestoreSettings = { timestampsInSnapshots: true };

firebase.initializeApp(firebaseConfig);
const db1 = firebase.firestore();
db1.settings(firestoreSettings);
export const auth = firebase.auth();
export const db = db1;

/*
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestoreDb = firebase.firestore();

....
const firestoreSettings = { timestampsInSnapshots: true };
export const db = firestoreDb.settings(firestoreSettings);

*/
