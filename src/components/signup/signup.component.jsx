import { useState } from "react";

export default function Signup() {
   const defaultFormFileds = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
   };

   const [formFields, setFormFields] = useState(defaultFormFileds);

   const { displayName, email, password, confirmPassword } = formFields;

   console.log(formFields);

   const handleChange = (e) => {
      e.preventDefault();

      const { name, value } = e.target;

      setFormFields({ ...formFields, [name]: value });
   };

   return (
      <>
         <h1>Signup with email and password</h1>
         <form onSubmit={() => {}}>
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
