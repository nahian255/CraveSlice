import Link from 'next/link';
import React from 'react';

const navbar = () => {
    return (
        <div>
            <nav className='flex py-5 bg-red-1'>
                <div className='flex gap-4'>
                    <Link className='text-4xl font-semibold px-4 text-[#f13a01]' href={'/'}>Crave Slice</Link>
                    <div className='text-2xl text-slate-700 flex justify-evenly gap-6'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Menu</Link>
                        <Link href={'/'}>About</Link>
                        <Link href={'/'}>Contact</Link>
                    </div>
                </div>
                {/* <div className='text-end'>
              <Link className='text-end' href={'/'}>Login</Link>
            </div> */}
            </nav>
        </div>
    );
};

export default navbar;