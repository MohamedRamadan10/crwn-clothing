import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
} from "firebase/auth";

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
provider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);