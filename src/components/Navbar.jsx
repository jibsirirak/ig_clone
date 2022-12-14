import React from 'react'
import Logo from '../assets/img/Logo.png'
import ProfilePic from '../assets/img/Profile.png'
import { FaHome, FaFacebookMessenger, FaPlusSquare, FaRegCompass, FaRegHeart ,FaSearch} from "react-icons/fa"

function Navbar() {
    return (
        <div>
            <nav className='border-b'>
                <div className="sm:w-full md:w-[60rem] lg:w-[60rem] mx-auto">
                    <div className='flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row h-40 md:h-16 lg:h-16 py-4 items-center'>
                        <div className="logo">
                            <img src={Logo} alt="Instagram Logo" />
                        </div>
                        <div className="search">
                            <input className='border text-center rounded' type="text" placeholder='Search' />
                        </div>
                        <ul className="menus flex">
                            <li className='ml-5'><a href='#' className='text-2xl'><FaHome /></a></li>
                            <li className='ml-5'><a href='#' className='text-2xl' ><FaFacebookMessenger /></a></li>
                            <li className='ml-5'><a href='#' className='text-2xl'><FaPlusSquare /></a></li>
                            <li className='ml-5'><a href='#' className='text-2xl'><FaRegCompass /></a></li>
                            <li className='ml-5'><a href='#' className='text-2xl'><img src={ProfilePic} alt="Profile Pig" /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar