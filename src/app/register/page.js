"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError("All fields are necessary.");
            return;
        }

        try {

            const resUserExists = await fetch("api/userExiste", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists.");
                return;
            }
            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
            } else {
                console.log('user failed');
            }

        } catch (error) {
            console.log('error during registion', error);
        }

    }

    return (

        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#f13a01]">
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
                    <button type='submit' className="bg-[#f13a01] text-white font-bold cursor-pointer px-6 py-2">
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