import Intro from '@/components/Intro'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Glimpse from '@/components/Glimpse'


export default function Home() {
  return (
    <>
      <div className='md:h-screen'>
        <Navbar />
        {<div className='hidden md:flex md:justify-around md:items-center md:px-3 h-[100%]'>
          <div className='w-[100%] pl-20 pr-1'>
            <Intro />
          </div>
          <div className='pb-8'>
            <div className=' bg-blue-600 h-[90vh] w-[4px] rounded-sm'></div>
          </div>
          <div className='pr-3 pt-6 pb-6'>
            <Glimpse />
          </div>

        </div>}

        {<div className='flex flex-col md:hidden justify-around items-center pt-11'>
          <div className='w-[100%] pl-6 pr-1 pt-24'>
            <Intro />
          </div>
          <div className='w-[100%] px-4'>
            <div className='mt-20 bg-blue-600 w-[100%] h-[4px] rounded-sm' ></div>
          </div>
          <div className='px-4 pt-20 mx-auto pb-20'>
            <Glimpse />
          </div>

        </div>}
      </div>
    </>

  )
}
