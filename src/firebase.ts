
import firebase from 'firebase/compat/app';
import "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyABjppgZYco1PyrV3zy4S3OPFMObcKLkBk",
  authDomain: "test-9a9cf.firebaseapp.com",
  databaseURL: "https://test-9a9cf.firebaseio.com",
  projectId: "test-9a9cf",
  storageBucket: "test-9a9cf.appspot.com",
  messagingSenderId: "552361323154",
  appId: "1:552361323154:web:f0e71025e8f907c73d544b"
};

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();

export default firebase;