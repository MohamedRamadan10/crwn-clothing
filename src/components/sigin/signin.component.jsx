import {
   createUserDocFromAuth,
   signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SingIn = () => {
   const signInUser = async () => {
      const { user } = await signInWithGooglePopup();
      createUserDocFromAuth(user);
   };
   return (
      <>
         <h1>Sign In</h1>
         <button onClick={signInUser}>Sign in with Google</button>
      </>
   );
};

export default SingIn;
