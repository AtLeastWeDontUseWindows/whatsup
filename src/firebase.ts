
import firebase from 'firebase/compat/app';
import "firebase/auth";

const { 
  VITE_APIKEY, 
  VITE_AUTHDOMAIN, 
  VITE_DATABASEURL, 
  VITE_PROJECTID, 
  VITE_STORAGEBUCKET, 
  VITE_MESSAGINGSENDERID, 
  VITE_APPID
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();

export default firebase;