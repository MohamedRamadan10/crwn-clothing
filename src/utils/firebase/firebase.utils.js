import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCTgZNVCwt516zVFYTJ0bRoiLkx2jd2P-0",
   authDomain: "crwn-react-db-6a561.firebaseapp.com",
   projectId: "crwn-react-db-6a561",
   storageBucket: "crwn-react-db-6a561.appspot.com",
   messagingSenderId: "1036899489737",
   appId: "1:1036899489737:web:c6b1fbbbd8c809b8957a18",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
   signInWithRedirect(auth, provider);

const db = getFirestore();

export const createUserDocWithAuth = async (userAuth) => {
   const userDocRef = doc(db, "users", userAuth.uid);
   // console.log(userDocRef);

   const userSnapshoot = await getDoc(userDocRef);
   // console.log(userSnapshoot);
   // console.log(userSnapshoot.exists());

   if (!userSnapshoot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, { displayName, email, createdAt });
      } catch (error) {
         console.log(error.message);
      }
   }

   return userDocRef;
};
