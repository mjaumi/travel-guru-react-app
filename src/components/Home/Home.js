import React from 'react';
import Destinations from '../Destinations/Destinations';

const Home = () => {
    return (
        <section className='bg-home-bg min-h-screen bg-cover bg-center bg-black/50 bg-blend-multiply pt-28'>
            <div className='w-4/5 mx-auto'>
                <Destinations />
            </div>
        </section>
    );
};

export default Home;