"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");

    // console.log('re', email, password);

    const handleSubmit = async (e) => {
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

        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                        Register
                    </button>

                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link className="text-sm mt-3 text-right" href={"/login"}>
                        Already have an account? <span className="underline">Login</span>
                    </Link>
                </form>
            </div>
        </div>

        // old code 

        // <div className='py-4  min-h-screen'>
        //     <h1 className='text-3xl text-center font-semibold text-[#f13a01] py-3'> Register</h1>
        //     <form className=" block max-w-sm mx-auto  text-center" onSubmit={handelFromSubmit} >
        //         <input className='bg-gray-200 p-1 rounded-lg my-1' type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}
        //         />
        //         <input className='bg-gray-200 p-1 rounded-lg my-1' type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}
        //         /> <br />
        //         <button className='bg-[#f13a01] w-[234px] p-1 rounded-lg my-1 text-white' type="submit" >
        //             Register
        //         </button>
        //         <div className="my-1 text-center border-gray-300">
        //             or login with provider
        //         </div>
        //         <button className='bg-gray-200 w-[234px] p-1 rounded-lg my-1 ' type="submit" >
        //             Login with Google
        //         </button>
        //         {/* <button
        //             onClick={() => signIn('google', { callbackUrl: '/' })}
        //             className="flex gap-4 justify-center">
        //             <Image src={'/google.png'} alt={''} width={24} height={24} />
        //             Login with google
        //         </button>
        //         <div className="text-center my-4 text-gray-500 border-t pt-4">
        //             Existing account?{' '}
        //             <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        //         </div> */}
        //     </form>
        // </div>
    );
};

export default register;