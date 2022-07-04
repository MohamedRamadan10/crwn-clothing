import { getRedirectResult } from "firebase/auth";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../contexts/user.context";
import {
   createUserAuthWithEmailAndPassword,
   createUserDocWithAuth,
   auth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.componet";

import "./signup.styles.scss";

export default function Signup() {
   const defaultFormFileds = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
   };

   const [formFields, setFormFields] = useState(defaultFormFileds);

   const { displayName, email, password, confirmPassword } = formFields;

   const { setCurrentUser } = useContext(UserContext);

   useEffect(() => {
      const fetchUserData = async () => {
         const res = await getRedirectResult(auth);
         if (res) {
            await createUserDocWithAuth(res.user);
         }
      };
      fetchUserData();
   }, []);

   const resetForm = () => {
      setFormFields(defaultFormFileds);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
         alert("Passwords do not match");
         return;
      }

      try {
         const { user } = await createUserAuthWithEmailAndPassword(
            email,
            password
         );

         await createUserDocWithAuth(user, { displayName });

         setCurrentUser(user);

         resetForm();
      } catch (error) {
         if (error.code === "auth/email-already-in-use") {
            alert("Email is already in use");
         } else {
            console.log(error);
         }
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormFields({ ...formFields, [name]: value });
   };

   return (
      <div className='signup-container'>
         <h2>Don't have an account, create new</h2>
         <span>Signup with email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label='Display Name'
               type='text'
               name='displayName'
               value={displayName}
               onChange={handleChange}
               required
            />

            <FormInput
               label='Email Address'
               type='email'
               name='email'
               value={email}
               onChange={handleChange}
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

            <FormInput
               label='Confirm Passowrd'
               type='password'
               name='confirmPassword'
               value={confirmPassword}
               onChange={handleChange}
               required
            />

            <Button buttonType='inverted' type='submit'>
               Sgin Up
            </Button>
         </form>
      </div>
   );
}
