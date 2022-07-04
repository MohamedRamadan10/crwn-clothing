import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./nav.styles.scss";
const Nav = () => {
   const { currentUser, setCurrentUser } = useContext(UserContext);

   const handleSignOut = async () => {
      await signOutUser();
      setCurrentUser(null);
   };

   return (
      <>
         <div className='nav'>
            <div className='logo'>
               <Link to='/'>
                  <Logo />
               </Link>
            </div>
            <div className='links'>
               <Link to='/shop' className='link'>
                  Shop
               </Link>
               {currentUser ? (
                  <span className='nav-link' onClick={handleSignOut}>
                     Sign Out
                  </span>
               ) : (
                  <Link to='/auth' className='link'>
                     Sign In
                  </Link>
               )}
            </div>
         </div>
         <Outlet />
      </>
   );
};

export default Nav;
