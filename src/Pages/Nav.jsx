import { NavLink } from 'react-router-dom';
import logoimg  from '../assets/icons/logo.svg'
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../authproviders/AuthProvider';


const Nav = () => {

   const {user, olgOut} = useContext(AuthContext);

   const handleLogOut = () =>{
    olgOut()
    .then(()=>{})
    .catch(error=> console.log(error));

   }
 
   const navItems = <>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
     <li><NavLink to='/blog'>Blog</NavLink></li>
     <li><NavLink to='/contact'>Contact</NavLink></li>
     { user?.email? <>
      <li><NavLink to='/bookings'>My Bookings</NavLink></li>
      <li><button onClick={handleLogOut}>Log out</button></li>
     </> 
     :<li><NavLink to='/login'>Login</NavLink></li>}
   
   </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navItems}
            </ul>
          </div>
          <img src={logoimg} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
         <div className='flex gap-4 items-center'>
         <MdOutlineShoppingBag/>
         <IoSearchOutline/>
         <button className="px-3 border border-red-400 p-2 text-red-500">Appointment</button>
         </div>
        
        </div>
      </div>
    );
};

export default Nav;