import React from 'react';
import sajek from '../../images/Sajek.png';
import sreemongol from '../../images/Sreemongol.png';
import sundorbon from '../../images/sundorbon.png';
import { ArrowRightIcon } from '@heroicons/react/outline';

const Destinations = () => {

    return (
        <div className='mt-10'>
            <h2 className='text-white text-left text-4xl font-semibold'>Our Destinations</h2>
            <div className='grid grid-cols-3 gap-5 mt-10'>
                <div>
                    <img className='w-3/4 mx-auto shadow-2xl' src={sajek} alt="" />
                    <h3 className='text-white font-medium text-3xl mt-5'>Sajek</h3>
                    <button className='bg-base-yellow px-7 py-2 mt-5 rounded-lg text-black font-medium hover:opacity-60 duration-300'>
                        Booking
                        <ArrowRightIcon className='w-5 inline-block ml-4' />
                    </button>
                </div>
                <div>
                    <img className='w-3/4 mx-auto shadow-2xl' src={sreemongol} alt="" />
                    <h3 className='text-white font-medium text-3xl mt-5'>Sreemongol</h3>
                    <button className='bg-base-yellow px-7 py-2 mt-5 rounded-lg text-black font-medium hover:opacity-60 duration-300'>
                        Booking
                        <ArrowRightIcon className='w-5 inline-block ml-4' />
                    </button>
                </div>
                <div>
                    <img className='w-3/4 mx-auto shadow-2xl' src={sundorbon} alt="" />
                    <h3 className='text-white font-medium text-3xl mt-5'>Sundorbon</h3>
                    <button className='bg-base-yellow px-7 py-2 mt-5 rounded-lg text-black font-medium hover:opacity-60 duration-300'>
                        Booking
                        <ArrowRightIcon className='w-5 inline-block ml-4' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Destinations;