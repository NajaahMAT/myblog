import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaPhone, FaTwitter, FaFacebook,FaInstagram} from 'react-icons/fa'
//import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LETS BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I am <span className='text-[#5651e5]'>Thajun Najaah</span>
                </h1>
                <h2 className='py-2 text-gray-700'>
                    A Back-End Developer.
                </h2>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a back-end Go Lang Developer with 5+years of experience in the Software Industry.Currently,
                    I am focused on building microservices and rest apis while learning front-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[360px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href="https://lk.linkedin.com/in/thajunnajaah/" target="_blank" rel="noreferrer noopener">
                            <FaLinkedinIn/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='https://github.com/Thajun' target="_blank" rel="noreferrer noopener">
                            <FaGithub/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='https://twitter.com/najaah_thajun/' target="_blank" rel="noreferrer noopener">
                            <FaTwitter/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='mailto:najaah9@gmail.com' target="_blank" rel="noreferrer noopener">
                            <AiOutlineMail/>
                        </a>
                    </div>
                    {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='http://google.com' target="_blank" rel="noreferrer noopener">
                            <BsFillPersonLinesFill/>
                        </a>
                    </div> */}
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='http://wa.me/94768433003' target="_self" rel="noreferrer noopener">
                            <FaWhatsapp/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='tel:+94777301150' target="_self" rel="noreferrer noopener">
                            <FaPhone/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='https://facebook.com/thajun.najaah.73/' target="_blank" rel="noreferrer noopener">
                            <FaFacebook/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='https://instagram.com/thajunnajaah/' target="_blank" rel="noreferrer noopener">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
