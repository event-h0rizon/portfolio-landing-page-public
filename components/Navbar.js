'use client'
import React, { useState, useEffect } from 'react'
export const dynamic = 'force-dynamic'
import WebIcon from '@mui/icons-material/Web';
import ConstructionIcon from '@mui/icons-material/Construction';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';


const Navbar = () => {
    const [navMenuMQ, setNavMenuMQ] = useState(false)
    const [navMenu, setNavMenu] = useState(false)
    const toggleMenu = () => {
        setNavMenu(value => !value)
    }

    return (
        <div className='fixed w-[100vw] flex items-center justify-between text-xl py-6 font-Roboto bg-white z-30'>
            <Link href='/' className='pl-4 font-bold'>
                Karthik
            </Link>
            { <div className='pr-6 md:hidden'>
                <div className=''>
                    <button  onClick={toggleMenu} className='px-2 py-1'><MenuIcon/></button>
                    <div className={`${navMenu ? 'flex flex-col' : 'hidden'} absolute left-0 top-[60px] bg-white w-[100%] text-center pb-5 pt-5 gap-2 border-b-2`}>
                        <Link href='/projects'>
                            Projects <WebIcon />
                        </Link>
                        <Link href='/tech-stack'>
                            Tech Stack <ConstructionIcon />
                        </Link>
                        <Link href='/contact'>
                            Contact <PermPhoneMsgIcon />
                        </Link>
                    </div>
                </div>
            </div>}
            { <div className='hidden md:flex items-center justify-between space-x-5 pr-6'>
                <Link href='/projects' className='hover:border-b-2 hover:border-black border-b-2 border-white'>
                    Projects <WebIcon />
                </Link>
                <Link href='/tech-stack' className='hover:border-b-2 hover:border-black border-b-2 border-white'>
                    Tech Stack <ConstructionIcon />
                </Link>
                <Link href='/contact' className='hover:border-b-2 hover:border-black border-b-2 border-white'>
                    Contact <PermPhoneMsgIcon />
                </Link>
            </div>}


        </div>
    )
}

export default Navbar
