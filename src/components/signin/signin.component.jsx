import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../contexts/user.context";
import {
   createUserDocWithAuth,
   SignInAuthWithEmailAndPassword,
   signInWithGooglePopup,
   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.componet";

import "./signin.styles.scss";

export default function Signin() {
   const defaultFormFileds = {
      email: "",
      password: "",
   };

   const [formFields, setFormFields] = useState(defaultFormFileds);

   const { email, password } = formFields;

   const { setCurrentUser } = useContext(UserContext);

   const resetForm = () => {
      setFormFields(defaultFormFileds);
   };

   const signInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      await createUserDocWithAuth(user);
   };

   const signInWithGoogleSameTab = async () => {
      const { user } = await signInWithGoogleRedirect();
      await createUserDocWithAuth(user);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const { user } = await SignInAuthWithEmailAndPassword(email, password);

         setCurrentUser(user);

         resetForm();
      } catch (error) {
         switch (error.code) {
            case "auth/user-not-found":
               alert("No user associated with this email!");
               break;

            case "auth/wrong-password":
               alert("Incorrect Password!!");
               break;

            default:
               break;
         }

         console.log(error);
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormFields({ ...formFields, [name]: value });
   };

   return (
      <div className='signin-container'>
         <h2>Already have an account, Sign In</h2>
         <form onSubmit={handleSubmit}>
            <FormInput
               label='Email Address'
               type='email'
               name='email'
               onChange={handleChange}
               value={email}
               required
            />

            <FormInput
               label='Passowrd'
               type='password'
               name='password'
               value={password}
               onChange={handleChange}
               required
            />

            <Button type='submit'>Sgin In</Button>
         </form>

         <hr />

         <div className='buttons-container'>
            <Button
               type='button'
               buttonType='google'
               onClick={signInWithGoogle}
            >
               Google Popup
            </Button>
            <Button
               type='button'
               buttonType='inverted'
               onClick={signInWithGoogleSameTab}
            >
               Google Redirect
            </Button>
         </div>
      </div>
   );
}
