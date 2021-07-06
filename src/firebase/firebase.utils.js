import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwCWZL4kbJLN2oQWYWyeCZedYQCHA2xEc",
    authDomain: "infinity-apparel.firebaseapp.com",
    projectId: "infinity-apparel",
    storageBucket: "infinity-apparel.appspot.com",
    messagingSenderId: "229896509291",
    appId: "1:229896509291:web:686ae9998057f783e95e2e"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;