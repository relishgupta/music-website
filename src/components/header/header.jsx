import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import profile from "../../assets/images/b4.jpg";
import { navBar } from "../../assets/data";
import { NavLink,Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";

const Header=()=>{
    const activeNavLink=({isActive})=>(isActive?'action':'navLink')
    const [isMenu,setIsMenu]=useState(false);
        return(
            <header className="fixed top-0 left-0 z-50 w-screen h-[8vh] md:shadow-sm bg-white">
                {/* desktop and tablet*/}
                <div className="hidden md:flex justify-between px-7 p-2 ">
                    <div className="logo flex">
                        <div>
                            <CrwnLogo width='40px' height='40px' />
                        </div>
                        <h2 className="text-2xl font-semibold ml-3 mt-1">CrownTunes</h2>
                    </div>
                    {/* navlinks */}
                    <div className="menu">
                        <ul className="flex">
                            {navBar.map((list,id)=>(
                                <li className={`mx-5 py-2 ${activeNavLink}`} key={id}>
                                    <NavLink to={list.path}>{list.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* profile */}
                    <div className="profile flex items-center">
                        <AiOutlineSearch size={22} />
                        <button className="bg-primary px-6 py-1.5 text-white rounded-full mx-3">Upload</button>
                        <div className="img w-10 h-10 rounded-full">
                            <img src={profile} alt='profile' className="img w-10 h-10 bg-red-300 rounded-full object-cover cursor-pointer"/>
                        </div>
                    </div>
                </div>
                    {/* mobile */}
                    <div className='flex items-center justify-between md:hidden h-full pl-2 pr-8'>
                        {/* logo */}
                        <Link to={"/"} className='flex items-center gap-2'>
                        <div className='logo flex'>
                            <div>
                            <CrwnLogo width='40px' height='40px'/>
                            </div>
                            <h2 className='text-2xl font-semibold ml-3'>CrownTunes</h2>
                        </div>
                        </Link>
                        {/* navlinks */}
                        <div>
                            {isMenu && (
                                <div className='bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 left-0 w-full '>
                                    <ul className='flex flex-col'>
                                        {navBar.map((list, id) => (
                                        <li className={`mx-5 py-2  ${activeNavLink}`} key={id}>
                                            <NavLink to={list.path}>{list.name}</NavLink>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <AiOutlineMenu size={20} onClick={() => setIsMenu(!isMenu)} />
                        </div>
                    </div>
            </header>
    )
}

export default Header;