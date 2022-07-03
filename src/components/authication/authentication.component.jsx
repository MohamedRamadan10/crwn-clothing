import Signup from "../signup/signup.component";
import Signin from "../signin/signin.component";
import "./authentication.styles.scss";

export default function Authentication() {
   return (
      <div className='authentication-container'>
         <Signin />
         <Signup />
      </div>
   );
}
