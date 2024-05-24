import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const navLink = <>
   <li><NavLink to='/'>Home</NavLink></li>
   <li><NavLink to='/contact_us'>Contact Us</NavLink></li>
    </>

    const {user, logOut} = useContext(AuthContext)


const logOuts = ()=>{
    logOut()
}
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/'><a className="btn btn-ghost text-xl">Hero Residential</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
               <div className="navbar-end space-x-3">
               {
                    user?<Link><button onClick={logOuts} className="btn">LogOut</button></Link> : <div>
                    <Link to='/login'><button className="btn">Login</button></Link>
                    <Link to='/register'><button className="btn">Register</button></Link>
                  </div>
                }
               </div>
            </div>
        </div>
    );
};

export default Navbar;