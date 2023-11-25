import React from 'react'
import Link from 'next/link'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FaCircleArrowRight } from "react-icons/fa6";

const Glimpse = () => {
    return (
        <div className='lg:px-14 flex flex-col gap-y-4'>
            <div className='font-Oxygen text-xl rounded-lg  text-slate-500 px-4 py-6'>
                Highly skilled and ambitious full stack developer, who is passionate about creating secure & reliable APIs, creating responsive & beautiful design to provide the best possible user experience. Looking for an opportunity to kick start my career as a front-end/back-end developer. Check out my projects from the navigation bar or by clicking below.
            </div>
            <Link className='flex justify-center text-gray-800 text-6xl' href='/projects'><FaCircleArrowRight className='text-6xl'/></Link>
        </div>
    )
}

export default Glimpse
