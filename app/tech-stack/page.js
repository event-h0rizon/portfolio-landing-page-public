import React from 'react'
import Navbar from '@/components/Navbar'


const TechStack= () => {
  return (
   
     <>
            <div className='md:h-screen '>
                <Navbar />
                <div className='pt-24 font-semibold font-Oxygen px-4 text-xl bg-[#EEEEEE]'>Tech Stack</div>

                <div className='py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-3 content-center gap-y-8 gap-x-2 bg-[#EEEEEE]'>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/html.png" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>HTML</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/css.png" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>CSS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/js.png" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>JavaScript</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/tailwind.webp" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>Tailwind CSS</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/bootstrap.png" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>Bootstrap</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/react.svg" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>React</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/next.svg" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold relative top-[36px]'>Next.js</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/express.svg" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>Express.js</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/node.svg" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>node.js</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/mongo.svg" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>MongoDB</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/mongoose.png" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>Mongoose</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <img src="/git.png" width='80px'  alt="" />
                        <p className='font-Oxygen font-semibold pt-2'>Git</p>
                    </div>

                </div>

            </div>
        </>

  )
}

export default TechStack