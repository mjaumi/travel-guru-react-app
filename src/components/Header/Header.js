import React from 'react';
import logo from '../../logo.png';
import { SearchIcon } from '@heroicons/react/outline';

const Header = () => {
    return (
        <header className='w-4/5 mx-auto py-5 flex items-center justify-between'>
            <div>
                <img className='w-32' src={logo} alt="" />
            </div>
            <div className='flex item-center justify-between w-4/5'>
                <div className='flex border px-4 py-2 rounded-md flex-1'>
                    <SearchIcon className='w-5 mr-2 text-white' />
                    <input className='outline-none w-full' type="text" placeholder='Search Your Destination...' />
                </div>
                <div className='flex item-center'>
                    <p className='ml-14'>News</p>
                    <p className='ml-14'>Destination</p>
                    <p className='ml-14'>Blog</p>
                    <p className='ml-14'>Contact</p>
                    <p className='ml-14'>Login</p>
                </div>
            </div>
        </header>
    );
};

export default Header;