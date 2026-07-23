import React from 'react'
import Link from "next/link";

const navbar = () => {
    return (
        // <div className='flex justify-between items-center px-4 bg-cyan-900 text-white'>

        //   {/* <ul className='flex gap-8 items-center'> */}
        //   <ul className='flex justify-between gap-4'>
        //     <div>AliFaazVerse</div>
        //   <li>Home</li>
        //   <li>About</li>
        //   <li>Services</li>
        //   <li>Portfolio</li>
        //   <li>Contact</li>
        //   </ul>
        // </div>
        <div className="flex justify-between items-center px-8 py-4 bg-cyan-900 text-white">
            <div className="text-2xl font-bold cursor-pointer">
                <Link href="/">AliFaazVerse</Link>
            </div>

            <ul className="flex items-center gap-4">
                <li>
                    <Link
                        href="/"
                        className="px-5 py-2 rounded-[34px] transition-all duration-300 hover:bg-cyan-500 hover:shadow-lg cursor-pointer"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/about"
                        className="px-5 py-2 rounded-[34px] transition-all duration-300 hover:bg-cyan-500 hover:shadow-lg cursor-pointer"
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        href="/services"
                        className="px-5 py-2 rounded-[34px] transition-all duration-300 hover:bg-cyan-500 hover:shadow-lg cursor-pointer"
                    >
                        Services
                    </Link>
                </li>

                <li>
                    <Link
                        href="/Portfolio"
                        className="px-5 py-2 rounded-[34px] transition-all duration-300 hover:bg-cyan-500 hover:shadow-lg cursor-pointer"
                    >
                        Portfolio
                    </Link>
                </li>

                <li>
                    <Link
                        href="/contact"
                        className="px-5 py-2 rounded-[34px] transition-all duration-300 hover:bg-cyan-500 hover:shadow-lg cursor-pointer"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default navbar
