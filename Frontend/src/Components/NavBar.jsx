import React from 'react'

import Logo from '../assets/image.png';
import Signup from '../assets/Profile Circle 2.png';

function NavBar() {
    return (
        <div className='bg-custom-purple h-20 flex  items-center justify-between'>
            <img src={Logo} className="h-12 w-12" alt="Logo"></img>
            <nav className='flex items-center justify-center space-x-4'>
                <button className='text-white font-bold py-2 px-4 rounded navbtn'>Home</button>
                <button className='text-white font-bold py-2 px-4 rounded navbtn'>Chats</button>
                <button className='text-white font-bold py-2 px-4 rounded navbtn'>Contact Us</button>
                <button className='text-white font-bold py-2 px-4 rounded navbtn'>Profile</button>
                <button className='text-white font-bold py-2 px-4 rounded navbtn'>Login</button>
                <div className='flex items-center px-3 bg-custom-blue rounded-full'>
                    <img src={Signup} className='h-6 w-6' alt="Signup Icon"></img>
                    <button className='text-white font-bold py-2 px-4 rounded navbtn'>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar