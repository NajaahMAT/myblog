import React from 'react'
import Image from 'next/image'
import reportImg from '../public/assets/projects/reporting.webp'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

function reporting() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
              <Image className='absolute z-1' layout='fill' objectFit='cover'  src={reportImg} alt='/'/>
              <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Powerful Reporting</h2>
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
                    APIs used to generates reports that uses all sales data to create various reports within seconds.
                    Because it tracks all sales by item, time of day, promotion, prices etc. it can help businesses see
                    how successful their store is and where it needs to be improved. Reporting breaks down sales, staff
                    performance, inventory, profit margins, and much more. Each of these can be fully customized to fit
                    to business’s needs. They can help gauge the success of a promotion, individual employee performance,
                    seasonal trends, problematic products, and much more.
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
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Bigquery
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

export default reporting
