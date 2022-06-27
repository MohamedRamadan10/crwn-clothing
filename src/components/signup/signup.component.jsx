import { useState } from "react";
import {
   createUserAuthWithEmailAndPassword,
   createUserDocWithAuth,
} from "../../utils/firebase/firebase.utils";

export default function Signup() {
   const defaultFormFileds = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
   };

   const [formFields, setFormFields] = useState(defaultFormFileds);

   const { displayName, email, password, confirmPassword } = formFields;

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
      <>
         <h1>Signup with email and password</h1>
         <form onSubmit={handleSubmit}>
            <label htmlFor='displayName'>Display Name</label>
            <input
               type='text'
               name='displayName'
               id='displayName'
               onChange={handleChange}
               value={displayName}
               required
            />

            <label htmlFor='email'>Email Address</label>
            <input
               type='email'
               name='email'
               id='email'
               onChange={handleChange}
               value={email}
               required
            />

            <label htmlFor='password'>Passowrd</label>
            <input
               type='password'
               name='password'
               id='password'
               value={password}
               onChange={handleChange}
               required
            />

            <label htmlFor='confirmPassword'>Confirm Passowrd</label>
            <input
               type='password'
               name='confirmPassword'
               id='confirmPassword'
               value={confirmPassword}
               onChange={handleChange}
               required
            />

            <button type='submit'>Sgin Up</button>
         </form>
      </>
   );
}
