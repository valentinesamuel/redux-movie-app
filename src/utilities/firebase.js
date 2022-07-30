import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, doc,where, getDoc, getDocs, getFirestore, query, setDoc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq0W_85Mup1gZowKexlhNxkHMxVKwRAr4",
  authDomain: "redux-movie-app-ef57c.firebaseapp.com",
  projectId: "redux-movie-app-ef57c",
  storageBucket: "redux-movie-app-ef57c.appspot.com",
  messagingSenderId: "460626016583",
  appId: "1:460626016583:web:360ac3a0fe177fcfabb462",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

const githubProvider = new GithubAuthProvider();


export const auth = getAuth();
export const signInWithGooglePopup = () => {
return  signInWithPopup(auth, googleProvider);
};

export const signInWithGithubPopup = () => {
  return signInWithPopup(auth, githubProvider);
}

export const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Done!");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'users')
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const getUser = async (email) => {
  const collectionRef = collection(db, 'users')
  const q = query(collectionRef, where("email", "==", email));
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())

}

export const getUserMovieList = async (email) => {
  const collectionRef = collection(db, 'movies')
  const q = query(collectionRef, where("email", "==", email));
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.email);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating ", error.message);
    }
  }
  return userSnapshot;
};

export const createUserMovieListDocument = async (
  userAuth,
  listOfMovies
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'movies', userAuth.email);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    try {
      await setDoc(userDocRef, {
        email,
        listOfMovies
      });
    } catch (error) {
      console.log("error creating ", error.message);
    }
  }
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);