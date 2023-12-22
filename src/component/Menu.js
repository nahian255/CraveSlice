import Image from 'next/image';
import React from 'react';
import pizzaImg from '../../public/pizza.png'

const Menu = () => {
    return (
        <div className="bg-slate-200 rounded-lg text-center p-4">
            <Image className="ml-20" src={pizzaImg} width={180} height={70}></Image>
            <h1 className="text-3xl font-semibold">Chess Pizza</h1>
            <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque perferendis cupiditate quisquam.</p>
            <button className="bg-[#f13a01] w-44 p-3 text-xl font-semibold text-white rounded-3xl">Order Now </button>

        </div>
    );
};

export default Menu;