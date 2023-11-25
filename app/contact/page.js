import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Contact = () => {
    return (
        <>
            <div className='md:h-screen '>
                <Navbar />
                <div className='pt-24 font-semibold font-Oxygen px-4 text-xl bg-[#EEEEEE]'>Contact</div>

                <div className='py-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-3 content-center gap-y-8 gap-x-2 bg-[#EEEEEE]'>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <Link href="mailto:karthikp0231@gmail.com">
                            <MailOutlineIcon className='text-6xl' />
                        </Link>
                        <Link href="mailto:karthikp0231@gmail.com" className='font-Oxygen font-semibold pt-2'>Email</Link>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <Link href="https://github.com/event-h0rizon" target='_blank'>
                            <GitHubIcon className='text-6xl' />
                        </Link>
                        <Link href="https://github.com/event-h0rizon" target='_blank' className='font-Oxygen font-semibold pt-2'>Github</Link>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <Link href="https://www.linkedin.com/in/karthikp0231" target='_blank'>
                            <LinkedInIcon className='text-6xl' />
                        </Link>
                        <Link href="https://www.instagram.com/karthik_hitman/" target='_blank' className='font-Oxygen font-semibold pt-2'>LinkedIn</Link>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <Link href="whatsapp://send?phone=7660954174" >
                            <WhatsAppIcon className='text-6xl' />
                        </Link>
                        <Link href="whatsapp://send?phone=7660954174" className='font-Oxygen font-semibold pt-2'>Whatsapp</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
