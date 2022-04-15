import React from 'react';
import { Link } from 'react-router-dom';
import fbImg from '../../images/icons/fb.png';
import googleImg from '../../images/icons/google.png';

const Login = () => {
    return (
        <section className='min-h-screen pt-28'>
            <div className='border-gray-400 border w-[40%] mx-auto mt-24 py-6 px-10 rounded-md'>
                <h2 className='text-left font-bold text-3xl'>Login</h2>
                <form>
                    <input className='block outline-none border-b-2 border-gray-400 w-full mt-5' type="email" placeholder='Email' />
                    <input className='block outline-none border-b-2 border-gray-400 w-full mt-10' type="password" placeholder='Password' />
                    <button className='my-5 bg-base-yellow w-full py-3 rounded-lg text-black font-medium hover:opacity-60 duration-300'>Login</button>
                </form>
                <p>Don't have an account? <Link className='text-base-yellow underline hover:opacity-50 duration-300' to='/signup'>Create an account</Link></p>
            </div>
            <div>
                <div className='flex items-center w-[30%] mx-auto'>
                    <div className='w-1/2 h-px bg-gray-400'></div>
                    <div className='mx-2 my-10'>Or</div>
                    <div className='w-1/2 h-px bg-gray-400'></div>
                </div>
                <div className='flex flex-col items-center w-[30%] mx-auto'>
                    <button className='w-full border-2 p-2 rounded-full flex items-center justify-between hover:opacity-50 duration-300'>
                        <img className='w-[37px]' src={fbImg} alt="" />
                        <p className='text-left w-[65%]'>Continue with Facebook</p>
                    </button>
                    <button className='w-full border-2 p-2 rounded-full flex items-center justify-between mt-5 hover:opacity-50 duration-300'>
                        <img className='w-[37px]' src={googleImg} alt="" />
                        <p className='text-left w-[65%]'>Continue with Google</p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;