import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import pickmeImg from '../public/assets/projects/pickme2.jpg'

function pickme() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
              <Image className='absolute z-1' layout='fill' objectFit='cover'  src={pickmeImg} alt='/'/>
              <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>PickMe Driver API</h2>
                <h3>GoLang / PHP/ MySQL</h3>
              </div>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
              <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <div className='flex items-center pt-4'>
                  <p>
                     Worked on multiple services for the PickMe driver application. PickMe is a Ride-Hailing
                     application includes the largest fleet of vehicles in Sri Lanka offering both on-demand
                     and pre-booking features at the best rates, including TUK-TUKs Flex, Minis, Cars, Minivans
                     and  Vans.

                     The  projects I have worked are, Driver API Trip Life Cycle, Fare Service, Backend Meter,
                     Driver Notifier, Driver Rating, Booking Creator, Driver Learning Service, Directional Hire etc.
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
                      <RiRadioButtonFill className='pr-1'/> MySQL
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Kafka
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> MQTT
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Clean Architecture
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Git
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Agile Scrum
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Docker
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Kubernetes
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Jenkins
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Grafana
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> Kibana
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> JMeter
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> PHP - Lumen
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                      <RiRadioButtonFill className='pr-1'/> PHP - Kohana
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

export default pickme
