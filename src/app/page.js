import Image from 'next/image';
import React from 'react';
import img from '../../public/pizza.png'
import pizzaImg from '../../public/pizza.png'

import Menu from "../component/Menu";
import Title from "../component/extra/Title";

export const metadata = {
  title: 'Home || CraveSlice',
  description: 'This is Home page',
}
export default function Home() {
  return (
    // this is the main root page in my side || Home page 
    <main className="min-h-screen ">
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
      <section>
        {/* <div className="relative">
          <div className=" top--5">
            <Image src={img} alt="salad" width={100} height={100}></Image>
          </div>
        </div> */}
        <Title title={'Our Best Sellers'} subTitle={'Check Out'}></Title>
        <div className="grid grid-cols-3 gap-4 py-3">
          <div className="bg-slate-200 rounded-lg text-center p-4">
            <Image className="ml-20" src={pizzaImg} width={180} height={70}></Image>
            <h1 className="text-3xl font-semibold">Chess Pizza</h1>
            <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque perferendis cupiditate quisquam.</p>
            <button className="bg-[#f13a01] w-44 p-3 text-xl font-semibold text-white rounded-3xl">Order Now </button>

          </div>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
        </div>
        <Title title={'About Us'} subTitle={'Our Story'}></Title>
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4 py-2 pb-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat suscipit molestias incidunt tempora voluptates dolore eos hic, porro inventore iusto enim ea, nobis doloribus excepturi distinctio culpa. Officiis, aperiam!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium odit aspernatur velit molestias, omnis harum! Provident totam molestias sed neque quisquam voluptatum sint quas quae vel maxime. Quo, blanditiis mollitia.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium odit aspernatur velit molestias, omnis harum! Provident totam molestias sed neque quisquam voluptatum sint quas quae vel maxime. Quo, blanditiis mollitia.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium odit aspernatur velit molestias, omnis harum! Provident totam molestias sed neque quisquam voluptatum sint quas quae vel maxime. Quo, blanditiis mollitia.</p>
        </div>
        <Title title={'Contact us'} subTitle={'Don\'t hesitate'}></Title>
        <div className="mt-3 text-center pb-4">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
    </main>
  )
}
