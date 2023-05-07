import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import eposImg from '../public/assets/projects/epos.jpg'

function epos() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
              <Image className='absolute z-1' layout='fill' objectFit='cover'  src={eposImg} alt='/'/>
              <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>ElectriPOS</h2>
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
                    Electronic Point of Sale (EPOS):  Solution for Retail Point of Sales solutions in the market vary from really basic systems
                    to highly sophisticated solutions to help you manage your complete end-to-end retail operations.
                    It is typically used at the checkout counter in retail stores of all sizes (eg. grocery, antiques, electronics, books, liquor stores,
                    convenience stores, etc.). Advantages of a terminal include easy employee restrictions and the ability to integrate additional point
                    of sale hardware pieces (such as tablets) or software (such as online ordering).
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

export default epos
