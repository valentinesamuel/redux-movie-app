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
  User,
  NextOrObserver,
} from "firebase/auth";
import { collection, doc, where, getDoc, getDocs, getFirestore, query, setDoc } from "firebase/firestore";
import { Movie } from "../features/movie/movie.types";
import { UserDetails } from "../features/user/user.types";

const firebaseConfig = {
  apiKey: "AIzaSyAq0W_85Mup1gZowKexlhNxkHMxVKwRAr4",
  authDomain: "redux-movie-app-ef57c.firebaseapp.com",
  projectId: "redux-movie-app-ef57c",
  storageBucket: "redux-movie-app-ef57c.appspot.com",
  messagingSenderId: "460626016583",
  appId: "1:460626016583:web:360ac3a0fe177fcfabb462",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

const githubProvider = new GithubAuthProvider();


export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGithubPopup = () => {
  return signInWithPopup(auth, githubProvider);
}

export const db = getFirestore();

// export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);
//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });
//   await batch.commit();
//   console.log("Done!");
// };

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'users')
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const getUser = async (email: string) => {
  const collectionRef = collection(db, 'users')
  const q = query(collectionRef, where("email", "==", email));
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())

}

export const getUserMovieList = async (email: string) => {
  const collectionRef = collection(db, 'movies')
  const q = query(collectionRef, where("email", "==", email));
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, `users/${userAuth.email}`);
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
      console.log("error creating ", error);
    }
  }
  return userSnapshot;
};

export const createUserMovieListDocument = async (
  userAuth: UserDetails,
  listOfMovies: Movie[]
) => {
  // request for user:User
  if (!userAuth) return;
  // change userauth.email to uid
  const userDocRef = doc(db, `users/${userAuth.email}`);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    try {
      await setDoc(userDocRef, {
        email,
        listOfMovies
      });
    } catch (error) {
      console.log("error creating ", error);
    }
  }
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email:string, password:string) => {
  if (!email || !password) return;

  return  (await createUserWithEmailAndPassword(auth, email, password)).user;
};

export const signInAuthUserWithEmailAndPassword = async (email:string, password:string) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback:NextOrObserver<User>) => onAuthStateChanged(auth, callback);