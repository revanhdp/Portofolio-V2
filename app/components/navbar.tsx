import React from 'react'
import { Home, Instagram, Linkedin, List, Phone, Twitter } from "lucide-react";
import Link from "next/link";

type Nav = {
  name: string;
  src: string;
}

const navlist: Nav[] = [
  {name: 'Home', src: '<Home/>'}
]

export const Navbar = () => {
  return (
    <>
      <nav className="mt-7 w-fit mx-auto flex border px-4 rounded-3xl py-3 gap-5 justify-center items-center fixed right-0 left-0 bg-white">
          <div className="border-r h-fit border-slate-300 pr-5">
              <Link href="#" className="text-black"><Home/></Link>
          </div>
          <div className=" border-r-1 h-fit border-slate-300 pr-5 flex gap-4">
              <Link href="#" className="text-black hover:-translate-y-1 transition-all"><Twitter/> </Link>
              <Link href="#" className="text-black"><List/> </Link>
              <Link href="#" className="text-black"><Phone/></Link>
          </div>
          <div className="">
              <button className="text-white bg-black py-3 rounded-2xl px-7">Book a Call</button>
          </div>
      </nav>
    </>
  )
}
