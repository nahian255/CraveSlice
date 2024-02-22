import Link from 'next/link';


const Navbar = () => {
    return (
        <div>
            <nav className=' flex justify-between py-5 '>
                <div>
                    <Link className='text-4xl font-semibold px-4 text-[#f13a01]' href={'/'}>Crave Slice</Link>
                </div>
                <div></div>
                <div className='text-xl text-slate-600 font-serif flex justify-evenly gap-4'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Menu</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact</Link>
                    <Link href={'/login'}> <button className="bg-[#f13a01] w-28  text-xl font-semibold text-white rounded-3xl">Login </button></Link>
                    <Link href={'/register'}> <button className="bg-[#f13a01] w-28  text-xl font-semibold text-white rounded-3xl">Register</button></Link>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;