import Image from "next/image";
import img from '../../public/pizza.png'

export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* header part */}
      <section className="flex">
        <div className="bg-slate-400 w-1/2 py-8">
          <h1 className="text-7xl font-semibold">Everything better with a Pizza</h1>
          <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium magnam numquam quisquam aperiam error sapiente temporibus quos enim ducimus iure consectetur quibusdam beatae vitae iusto, atque repudiandae earum voluptas.</p>
        </div>
        <div>
          <Image src={img} height={400} width={500} alt="pizza"></Image>
        </div>
      </section>
    </main>
  )
}
