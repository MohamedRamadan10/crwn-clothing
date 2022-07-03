import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";
import "./nav.styles.scss";
const Nav = () => {
   const { currentUser } = useContext(UserContext);
   console.log(currentUser);

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
               <Link to='/auth' className='link'>
                  Sign In
               </Link>
            </div>
         </div>
         <Outlet />
      </>
   );
};

export default Nav;
