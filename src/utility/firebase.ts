
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { createSignal } from 'solid-js';

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

const [loading, setLoading] = createSignal(false);

const googleProvider = new GoogleAuthProvider();
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const signInWithGoogle = async () => {
  try {
    setLoading(true)
    const res = await signInWithPopup(auth, googleProvider);
    return res.user;
  } catch (err) {
    console.error(err);
    alert((err as unknown as any).message);
  } finally {
    setLoading(false)
  }
};
const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    setLoading(true)
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert((err as unknown as any).message);
  } finally {
    setLoading(false)
  }
};

const logout = () => {
  signOut(auth);
};


export {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  logout,
  loading
};