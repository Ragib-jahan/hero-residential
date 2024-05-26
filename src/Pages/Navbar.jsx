import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact_us'>Contact Us</NavLink></li>
    </>

    const { user, logOut } = useContext(AuthContext)


    const logOuts = () => {
        logOut()
    }
    return (
        <div className="mb-10 z-50">
            <Link to='/'><a className="btn btn-ghost text-xl flex md:hidden">Hero Residential</a></Link>
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
                    <Link to='/'><a className="btn btn-ghost text-xl hidden md:flex">Hero Residential</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user? user.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to='/profile'>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </Link>
                                </li>

                                <li><a onClick={logOuts}>Logout</a></li>
                            </ul>
                        </div> : <>
                            <Link to='/login'><button className="btn mr-3">Login</button></Link>
                            <Link to='/register'><button className="btn">Register</button></Link>
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;