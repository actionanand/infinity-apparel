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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const addCollectionsAndDocuments = async (collectionKey, ObjectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  ObjectsToAdd.forEach(element => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, element);
  });
  // return await batch.commit(); // un comment this to store the "items & title" of the "shop data" in firebase
}

export const convertSnapshotCollectionsToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;