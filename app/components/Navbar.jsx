'use client'

import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="w-full fixed z-[100] bg-[#FFEDE6] shadow-xl h-5">
            <div className="flex items-center justify-between h-full w-full">
                <Link href="/">
                    <div className="flex items-center">
                        <Image 
                            src="/tirth-icon06-11@2x.png"
                            alt="logo"
                            width='20'
                            height='20'
                            priority 
                        />
                        <p className="text-[#E14503] font-bold ml-2">tirth.co</p>
                    </div>
                </Link>
            </div>
            <div className={
                menuOpen ? 'left-0 top-0 w-full h-screen relative bg-[#ecf0f3] ease-in duration-500 flex flex-col justify-start z-50': 'hidden'
            }>
                <div className="flex absolute top-6 right-6 w-full justify-end items-center">
                    <AiOutlineClose onClick={handleMenu} className="text-2xl text-black mb-4" />
                </div>
                <ul className="flex flex-col justify-center items-center mt-20">
                    <li className="text-2xl text-black mb-4">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-2xl text-black mb-4">
                        <Link href="/about">About us</Link>
                    </li>
                    <li className="text-2xl text-black mb-4">
                        <Link href="/testimonials">Testimonials</Link>
                    </li>
                    <li className="text-2xl text-black mb-4">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
