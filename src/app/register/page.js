"use client"
import React, { useState } from 'react';

const register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // console.log('re', email, password);

    const handelFromSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle successful response, if needed
        } catch (error) {
            // Handle error, e.g., log or display an error message
            console.error('Error during registration:', error);
        }
    }
    return (
        <div className='py-4  min-h-screen'>
            <h1 className='text-3xl text-center font-semibold text-[#f13a01] py-3'> Register</h1>
            <form className=" block max-w-sm mx-auto  text-center" onSubmit={handelFromSubmit} >
                <input className='bg-gray-200 p-1 rounded-lg my-1' type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}
                />
                <input className='bg-gray-200 p-1 rounded-lg my-1' type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}
                /> <br />
                <button className='bg-[#f13a01] w-[234px] p-1 rounded-lg my-1 text-white' type="submit" >
                    Register
                </button>
                <div className="my-1 text-center border-gray-300">
                    or login with provider
                </div>
                <button className='bg-gray-200 w-[234px] p-1 rounded-lg my-1 ' type="submit" >
                    Login with Google
                </button>
                {/* <button
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={''} width={24} height={24} />
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?{' '}
                    <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div> */}
            </form>
        </div>
    );
};

export default register;