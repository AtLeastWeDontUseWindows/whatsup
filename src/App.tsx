import { Component, createEffect, createSignal } from 'solid-js';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app';
import { firebaseAuth } from './firebase';
import 'firebaseui/dist/firebaseui.css';
import Card from './Card';

import logo from './logo.svg';
import styles from './App.module.css';
import image from './assets/image1.jpg';
import { onAuthStateChanged, User } from 'firebase/auth';

export interface DataObject {
  image: string;
  title: string;
  description: string;
  time: Date;
  location: string;
}

const data: DataObject[] = [
  {
    image: image,
    title: 'Out Of Office',
    description: `OUT OF OFFICE CITY FESTIVAL - 100% vädersäkrad Förena nytta med nöje tillsammans med vänner & kollegor på Out of Office After Works City Festival. Till skillnad mot evenemanget 1 juli så blir det denna gång 1st större tält (och ej flera mindre) som rymmer samtliga 2000st deltagare. Strikt 23-årsgräns och vårdad klädsel. Du behöver en biljett för att delta så passa på att köpa en Early Bird-biljett för halva priset innan de tar slut. Bokat VIP-bord ger fri entré. Strikt 23-årsgräns och vårdad klädsel.`,
    time: new Date(),
    location: 'Malmö Live',
  },
  {
    image: image,
    title: 'Lorem ipsum',
    description: 'Lorem Lorem',
    time: new Date(),
    location: 'Skanör falsterbad',
  }
]

interface CustomUser {
  displayName: string;
  uid: string;
  photoURL: string;
  email: string;
}

const App: Component = () => {
  createEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebaseAuth);
    ui.start('.firebase-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        }
      ],
      signInSuccessUrl: '/authenticated',
    })
  });
  const [user, setUser] = createSignal<CustomUser>({
    uid: '', displayName: '', photoURL: '', email: ''
  });
  createEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user', user);
        const { uid, displayName, photoURL, email } = user;
        return setUser({ uid, displayName, photoURL, email });
      }
      console.log('came there');
      return setUser({ uid: '', displayName: '', photoURL: '', email: '' });
    })
  })
  // console.log('rendered', user());w
  // const { apple } = user().ap || {};
  return (
    <div class={styles.App}>
      <p>{user().uid}</p>
      <p>{user().displayName}</p>
      <img src={user().photoURL} />
      <p>{user().email}</p>
      <div class="firebase-auth-container"></div>
      <button type="button" onClick={() => firebase.auth().signOut()}>Sign out</button>
      <div class="flex flex-row">
        <div class="flex flex-1 p-3 bg-stone-50 items-center content-center">
          <div class="inner flex w-2/5 m-auto w-2/5 justify-between">
            <img src={logo} alt="hello" style={{ width: '50px', height: '50px' }} />
            <button class="bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
              Sign in
            </button>
          </div>
        </div>
      </div>
      {data.map(x => (
        <Card data={x} />
      ))}
    </div>
  );
};

export default App;
