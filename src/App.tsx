import { Component } from 'solid-js';
import 'firebaseui/dist/firebaseui.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

import styles from './App.module.css';
import image from './assets/image1.jpg';

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

export interface CustomUser {
  displayName: string;
  uid: string;
  photoURL: string;
  email: string;
}

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div class="firebase-auth-container"></div>
      <div class="flex flex-row">
        <Navbar />
      </div>
      {data.map(x => (
        <Card data={x} />
      ))}
    </div>
  );
};

export default App;
