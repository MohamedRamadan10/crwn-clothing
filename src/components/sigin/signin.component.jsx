import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
   auth,
   createUserDocWithAuth,
   signInWithGooglePopup,
   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import Signup from "../signup/signup.component";
import Button from "../button/button.component";

const SingIn = () => {
   useEffect(() => {
      const fetchUserData = async () => {
         const res = await getRedirectResult(auth);
         if (res) {
            const userDocRef = await createUserDocWithAuth(res.user);
         }
      };
      fetchUserData();
   }, []);

   const logUserGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocWithAuth(user);
   };

   return (
      <>
         <h1>Sign In</h1>
         <Button buttonType='google' onClick={logUserGoogle}>
            Sign in with Google Popup
         </Button>
         <Button buttonType='inverted' onClick={logUserGoogle}>
            Sign in with Google Redirect
         </Button>
         <Signup />
      </>
   );
};

export default SingIn;
