import React, { useState } from 'react';
import logo from '../../logo.png';
import { SearchIcon } from '@heroicons/react/outline';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [homeOrBooking, setHomeOrBooking] = useState(true);
    const navigate = useNavigate();

    const redirectToLogin = () => {
        setHomeOrBooking(false);
        navigate('/login');
    }

    return (
        <header className='w-4/5 py-5 flex items-center justify-between absolute left-1/2 -translate-x-1/2'>
            <div>
                <img className='w-32' src={logo} alt="" />
            </div>
            <div className='flex item-center justify-between w-4/5'>
                <div className='flex border px-4 py-2 rounded-md flex-1 bg-white/20'>
                    <SearchIcon className='w-5 mr-2 text-white' />
                    <input className='outline-none w-full bg-transparent text-white font-medium' type="text" placeholder='Search Your Destination...' />
                </div>
                <div className={`flex item-center ${homeOrBooking ? 'text-white' : 'text-black'}`}>
                    <Link className='ml-14 my-auto hover:opacity-60 duration-300' to='/news'>News</Link>
                    <Link className='ml-14 my-auto hover:opacity-60 duration-300' to='/destination'>Destination</Link>
                    <Link className='ml-14 my-auto hover:opacity-60 duration-300' to='/blog'>Blog</Link>
                    <Link className='ml-14 my-auto hover:opacity-60 duration-300' to='/contact'>Contact</Link>
                    <button
                        onClick={redirectToLogin}
                        className='ml-14 bg-base-yellow px-7 rounded-lg text-black hover:opacity-60 duration-300'>
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;