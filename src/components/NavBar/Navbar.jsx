import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(res => {
                console.log('asdf')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100 max-w-[90rem] m-auto " data-aos="fade-right">
            <div className="navbar-start w-[60%] hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="mx-2"><NavLink to="/">Home</NavLink></li>
                    <li className="mx-2" tabIndex={0}><NavLink to="/abt">About Us</NavLink></li>
                    <li className="mx-2"><NavLink to="/serv">Services</NavLink></li>
                    <li><NavLink to="/gal">Gallery</NavLink></li>
                    <li><NavLink to="/blog">Blogs</NavLink></li>
                    <li><NavLink to="/rev">Reviews</NavLink></li>
                    <li><NavLink to="/cont">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/abt">About Us</NavLink></li>
                        <li><NavLink to="/serv">Services</NavLink></li>
                        <li><NavLink to="/gal">Gallery</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/testi">TestimoniNavLinkl</NavLink></li>
                        <li><NavLink to="/cont">Contact Us</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">FestiveFest</Link>
            </div>
            <div className="navbar-end flex flex-col md:flex-row">
                <div className="flex flex-col items-center">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user.photoURL} /> : <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
                            }
                        </div>
                    </label>
                    <p className="m-auto md:mx-4">
                        {
                            user && user.displayName
                        }
                    </p>
                </div>
                {
                    user ? <button onClick={handleLogOut} className="btn btn-primary mx-4">Log Out</button> : <button className="btn btn-primary mx-4"><NavLink to="/log">Login</NavLink></button>
                }

            </div>
        </div>
    );
};

export default Navbar;