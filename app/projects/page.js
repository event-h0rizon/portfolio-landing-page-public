'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import PublicIcon from '@mui/icons-material/Public';
import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    const autoplayOptions = {
        stopOnInteraction: false,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }
    const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    const [emblaRef2] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    const [emblaRef3] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    const [emblaRef4] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    const [emblaRef1m] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    const [emblaRef2m] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    const [emblaRef3m] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    const [emblaRef4m] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])



    return (
        <>
            <div className='md:h-screen '>
                <Navbar />
                <div className='pt-24 font-semibold font-Oxygen px-4 text-xl bg-[#EEEEEE]'>Projects</div>

                <div className='py-8 pb-12 grid grid-cols-1 px-3 content-center gap-y-20 gap-x-3 bg-[#EEEEEE]'>
                    <div className='hidden lg:flex justify-center items-center bg-white py-4 px-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <div className='w-[1894px]'>
                            <div className="embla" ref={emblaRef1}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/secure-chat/1.jpg" priority alt="" />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/secure-chat/2.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/secure-chat/3.jpg" alt="" priority />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='font-Oxygen text-xl font-semibold pt-2 px-4 grow'>
                            <div className='flex justify-between'>
                                <p className='text-center text-3xl pb-6'>SecureChat</p>
                                <div className='flex gap-4 pr-4'>
                                    <Link target='_blank' href='https://secure-chat-xi.vercel.app/'>
                                        <PublicIcon className='text-3xl' />
                                    </Link>
                                    <Link target='_blank' href='https://github.com/event-h0rizon/secure-chat-public'>
                                        <GitHubIcon className='text-3xl' />
                                    </Link>
                                </div>
                            </div>
                            <p className='font-normal'>A real time chatting WebApp where anyone registered for an account could chat with other registered users in real time. Users can opt to get a verified badge next to their name by paying for the verification process.</p>
                            <p className='pt-3'>Tech used:</p>
                            <p className='font-normal'>HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, MongoDB, Express, Node.js, Material UI, React Toastify, JSON Web Token</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:hidden justify-center  bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <div className='flex items-baseline justify-between'>
                            <p className=' font-semibold pb-6 pl-3'>SecureChat</p>
                            <div className='flex gap-3 pr-4'>
                                <Link target='_blank' href='https://secure-chat-xi.vercel.app/'>
                                    <PublicIcon className='' />
                                </Link>
                                <Link target='_blank' href='https://github.com/event-h0rizon/secure-chat-public'>
                                        <GitHubIcon className='' />
                                    </Link>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <div className="embla" ref={emblaRef1m}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/secure-chat/1.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/secure-chat/2.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/secure-chat/3.jpg" alt="" priority />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='font-Oxygen font-semibold pt-2 px-2 grow'>
                            <p className='font-normal pt-2'>A real time chatting WebApp where anyone registered for an account could chat with other registered users in real time. Users can opt to get a verified badge next to their name by paying for the verification process.</p>
                            <p className='pt-3'>Tech used:</p>
                            <p className='font-normal'>HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, MongoDB, Express, Node.js, Material UI, React Toastify, JSON Web Token</p>
                        </div>
                    </div>

                    {/*  */}


                    <div className='hidden lg:flex justify-center items-center bg-white py-4 px-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <div className='w-[2000px]'>
                            <div className="embla" ref={emblaRef2}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/1.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/2.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/3.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/4.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/5.jpg" alt="" priority />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='font-Oxygen text-xl font-semibold pt-2 px-4  grow'>
                            <div className='flex justify-between'>
                                <p className='text-center text-3xl pb-6'>eShop</p>
                                <div className='flex gap-4 pr-4'>
                                    <Link target='_blank' href='https://e-shop-silk.vercel.app/'>
                                        <PublicIcon className='text-3xl' />
                                    </Link>
                                    <Link target='_blank' href='https://github.com/event-h0rizon/eShop-public'>
                                        <GitHubIcon className='text-3xl' />
                                    </Link>
                                </div>
                            </div>
                            <p className='font-normal'>An online e-commerce WebApp where users can buy products using an account that keeps track of their orders with a dynamic cart that users can access anywhere across the site and add/remove/change the number of items.</p>
                            <p className='pt-3'>Tech used:</p>
                            <p className='font-normal'>HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, MongoDB, Express, Node.js, Daisy UI, React Toastify, JSON Web Token</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:hidden justify-center  bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <div className='flex items-baseline justify-between'>
                            <p className=' font-semibold pb-6 pl-3'>eShop</p>
                            <div className='flex gap-3 pr-4'>
                                <Link target='_blank' href='https://e-shop-silk.vercel.app/'>
                                    <PublicIcon className='' />
                                </Link>
                                <Link target='_blank' href='https://github.com/event-h0rizon/eShop-public'>
                                        <GitHubIcon className='' />
                                    </Link>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <div className="embla" ref={emblaRef2m}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/1.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/2.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/3.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/4.jpg" alt=""priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/eShop/5.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='font-Oxygen font-semibold pt-2 px-2 grow'>
                            <p className='font-normal pt-2'>An online e-commerce WebApp where users can buy products using an account that keeps track of their orders with a dynamic cart that users can access anywhere across the site and add/remove/change the number of items.</p>
                            <p className='pt-3'>Tech used:</p>
                            <p className='font-normal'>HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, MongoDB, Express, Node.js, Daisy UI, React Toastify, JSON Web Token</p>
                        </div>
                    </div>
                    {/*  */}

                    <div className='hidden lg:flex justify-center items-center bg-white py-4 px-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <div className='w-[1280px]'>
                            <div className="embla" ref={emblaRef3}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/my-diary/1.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/my-diary/2.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/my-diary/3.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='font-Oxygen text-xl font-semibold pt-2 px-4 grow'>
                            <div className='flex justify-between'>
                                <p className='text-center text-3xl pb-6'>MyDiary</p>
                                <div className='flex gap-4 pr-4'>
                                    <Link target='_blank' href='https://my-diary-client-production.vercel.app/'>
                                        <PublicIcon className='text-3xl' />
                                    </Link>
                                    <Link target='_blank' href='https://github.com/event-h0rizon/MyDiaryClient'>
                                        <GitHubIcon className='text-3xl' />
                                    </Link>
                                </div>
                            </div>
                            <p className='font-normal'>An online e-diary where users can store their daily events securely and access it anywhere, anytime. Dedicated login and authentication system.</p>
                            <p className='pt-3'>Tech used:</p>
                            <p className='font-normal'>HTML, CSS, JavaScript, Bootstrap, React, MongoDB, Express, Node.js, JSON Web Token</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:hidden justify-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <div className='flex items-baseline justify-between'>
                            <p className=' font-semibold pb-6 pl-3'>MyDiary</p>
                            <div className='flex gap-3 pr-4'>
                                <Link target='_blank' href='https://my-diary-client-production.vercel.app/'>
                                    <PublicIcon className='' />
                                </Link>
                                <Link target='_blank' href='https://github.com/event-h0rizon/MyDiaryClient'>
                                        <GitHubIcon className='' />
                                    </Link>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <div className="embla" ref={emblaRef3m}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/my-diary/1.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/my-diary/2.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/my-diary/3.jpg" alt="" priority />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='font-Oxygen font-semibold pt-2 px-2 grow'>
                            <p className='font-normal pt-2'>An online e-diary where users can store their daily events securely and access it anywhere, anytime. Dedicated login and authentication system.</p>
                            <p className='pt-3'>Tech used:</p>
                            <p className='font-normal'>HTML, CSS, JavaScript, Bootstrap, React, MongoDB, Express, Node.js, JSON Web Token</p>
                        </div>
                    </div>


                    {/* 
                    
                    */}

                    <div className='hidden lg:flex justify-center items-center bg-white py-4 px-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <div className='w-[700px]'>
                            <div className="embla" ref={emblaRef4}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/landing-page/1.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/landing-page/2.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/landing-page/3.jpg" alt="" priority />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='font-Oxygen text-xl font-semibold pt-2 px-4 grow'>
                            <div className='flex justify-between'>
                                <p className='text-center text-3xl pb-6'>Portfolio/ Business Landing Page</p>
                                <div className='flex gap-4 pr-4'>
                                    <Link target='_blank' href='https://portfolio-landing-page-iota.vercel.app/'>
                                        <PublicIcon className='text-3xl' />
                                    </Link>
                                    <Link target='_blank' href='https://github.com/event-h0rizon/portfolio-landing-page-public'>
                                        <GitHubIcon className='text-3xl' />
                                    </Link>
                                </div>
                            </div>
                            <p className='font-normal'>A responsive and beautiful portfolio/landing page for businesses.</p>
                            <p className='pt-3'>Tech used:</p>
                            <p className='font-normal'>HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, Node.js, Material UI</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:hidden justify-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <div className='flex items-baseline justify-between'>
                            <p className=' font-semibold pb-6 pl-3'>Portfolio/ Business Landing Page</p>
                            <div className='flex gap-3 pr-4'>
                                <Link target='_blank' href='https://portfolio-landing-page-iota.vercel.app/'>
                                    <PublicIcon className='' />
                                </Link>
                                <Link target='_blank' href='https://github.com/event-h0rizon/portfolio-landing-page-public'>
                                        <GitHubIcon className='' />
                                    </Link>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <div className="embla" ref={emblaRef4m}>
                                <div className="embla__container">
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/landing-page/1.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/landing-page/2.jpg" alt="" priority />
                                        </div>
                                    </div>
                                    <div className="embla__slide">
                                        <div className='grid justify-center'>
                                            <Image width='1894' height='864' className=' text-center' src="/landing-page/3.jpg" alt="" priority/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='font-Oxygen font-semibold pt-2 px-2 grow'>
                            <p className='font-normal pt-2'>A responsive and beautiful portfolio/landing page for businesses.</p>
                            <p className='pt-3'>Tech used:</p>
                            <p className='font-normal'>HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, Node.js, Material UI</p>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}

export default Projects
