import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC8rTpsA4py_CKbEXmOLGTgtD8KXSatnvg',
  authDomain: 'crwn-clothing-web.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-web.firebaseio.com',
  projectId: 'crwn-clothing-web',
  storageBucket: 'crwn-clothing-web.appspot.com',
  messagingSenderId: '1009133875244',
  appId: '1:1009133875244:web:e2fbd5982d229fe8e96189'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
