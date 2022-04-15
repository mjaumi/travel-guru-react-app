import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { destination } = useParams();

    return (
        <section className='bg-home-bg min-h-screen bg-cover bg-center bg-black/50 bg-blend-multiply pt-28'>
            <div className='w-4/5 mx-auto flex items-center justify-between h-[85vh]'>
                <div className='text-left text-white'>
                    <h5 className='font-medium text-3xl'>Trip To</h5>
                    <h2 className='font-extrabold text-6xl uppercase'>{destination}</h2>
                </div>
                <div className='w-[40%]'>
                    <form className='bg-white rounded-md p-5'>
                        <div>
                            <label className='block text-left text-[#818181] font-thin mb-2' htmlFor="origin">Origin</label>
                            <input className='bg-gray-100 px-4 py-3 font-bold rounded-sm w-full' type="text" value='Dhaka' name='origin' />
                        </div>
                        <div>
                            <label className='block text-left text-[#818181] font-thin my-2' htmlFor="destination">Destination</label>
                            <input className='bg-gray-100 px-4 py-3 font-bold rounded-sm w-full' type="text" value={destination} name='destination' />
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <label className='block text-left text-[#818181] font-thin my-2' htmlFor="from">From</label>
                                <input className='bg-gray-100 px-4 py-3 font-bold rounded-sm w-full' type="date" name='from' />
                            </div>
                            <div>
                                <label className='block text-left text-[#818181] font-thin my-2' htmlFor="to">To</label>
                                <input className='bg-gray-100 px-4 py-3 font-bold rounded-sm w-full' type="date" name='to' />
                            </div>
                        </div>
                        <button className='mt-5 bg-base-yellow w-full py-3 rounded-lg text-black font-medium hover:opacity-60 duration-300'>Start Booking</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;