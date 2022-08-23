import { Component, createEffect, createSignal } from 'solid-js';
import { CustomUser } from '../App';
import { signInWithGoogle, logout, auth } from '../utility/firebase';
import logo from '../logo.svg';
import { User } from 'firebase/auth';

const Navbar: Component = () => {
  const [user, setUser] = createSignal<CustomUser>({
    uid: '', displayName: '', photoURL: '', email: ''
  });

  createEffect(() => {
    auth.onAuthStateChanged((user: (User | null) ) => {
      if (user) {
        console.log('user', user);
        const { uid, displayName, photoURL, email } = user;
        setUser({ uid, displayName, photoURL, email });
      } else {
        setUser({ uid: '', displayName: '', photoURL: '', email: '' });
      }
    })
  })
  return (
    <div class="flex flex-1 p-3 bg-stone-50 items-center content-center">
      <div class="inner flex w-full justify-between">
        <img src={logo} alt="hello" style={{ width: '50px', height: '50px' }} />
        <div class="flex items-center content-center">
          {user().displayName && (
            <p class="mr-3">{user().displayName}</p>
          )}
          {user().photoURL && (
            <img class="rounded-full w-12 h-12 mr-3" src={user().photoURL} />
          )}
          {!user().uid && (
            <button class="bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" onClick={signInWithGoogle}>
              Sign in
            </button>
          )}
          {user().uid && (
            <button class="bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ml-3" onClick={logout}>
              Sign out
            </button>
          )}
        </div>
      </div>
    </div>
  )
};

export default Navbar;