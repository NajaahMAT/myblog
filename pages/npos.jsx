import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import nposImg from '../public/assets/projects/npos.jpg'

function npos() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
              <Image className='absolute z-1' layout='fill' objectFit='cover'  src={nposImg} alt='/'/>
              <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Neutripos</h2>
                <h3>GoLang / MongoDB</h3>
              </div>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
              <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <div className='flex items-center pt-4'>
                  <p>
                    Cloud-based payment terminals record transactions in real-time, allowing to access data from anywhere with an internet connection quickly.
                    The cloud-based cashiering system can be truly portable (if using mobile devices), while the business owner can check and use sales data from
                    anywhere that they have cloud access. Because the data is stored on the POS system provider’s remote servers, a cloud-based POS system can
                    generally only work when there is an internet connection, although providers may offer some offline functionality to minimize potential disruptions
                    to the customer service.Small businesses with multiple POS systems or multiple locations benefit from a cloud-based POS system, as the data syncs
                    with a centralized database, giving you an overview of the business. Many cloud-based POS systems also include real-time inventory updates,
                    which is useful for merchants with multiple stores to track product levels.
                  </p>
                </div>
                <button className='px-8 py-2 mt-4 mr-8'>More</button>
              </div>
              <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                  <p className='text-center font-bold pb-2'>Technologies</p>
                  <div className='grid grid-cols-3 md:grid-cols-1'>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Golang
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> MongoDB
                    </p>
                  </div>
                </div>
              </div>
              <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
              </Link>
            </div>
    </div>
  )
}

export default npos
