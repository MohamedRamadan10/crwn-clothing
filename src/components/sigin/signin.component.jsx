import {
   createUserDocWithAuth,
   signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SingIn = () => {
   const logUserGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocWithAuth(user);
   };
   return (
      <>
         <h1>Sign In</h1>
         <button onClick={logUserGoogle}>Sign in with Google</button>
      </>
   );
};

export default SingIn;
