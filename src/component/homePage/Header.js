import Image from 'next/image';
import React from 'react';
import img from '../../../public/pizza.png'


const Header = () => {
    return (
        <div>
            {/* header part */}
            <section className="flex">
                <div className=" w-1/2 py-8">
                    <h1 className="text-7xl font-semibold">Everything <br /> is better <br /> with a <span className="text-[#f13a01]">  Pizza</span></h1>
                    <p className="py-6 text-slate-600 text-">Pizza is a missing piece that makes everyday completed, a simple yet delicious joy in life.</p>
                    <button className="bg-[#f13a01] w-44 p-3 text-xl font-semibold text-white rounded-3xl">Order Now </button>
                </div>
                <div className="pl-8">
                    <Image src={img} height={400} width={500} alt="pizza"></Image>
                </div>
            </section>
        </div>
    );
};

export default Header;