import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import laptop from '../public/assets/laptop.jpg'
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaPhone, FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa'
//import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { sendContactForm } from '../lib/api'
import { useForm } from "react-hook-form";
import { init, sendForm } from 'emailjs-com';
//init('template_qkf0sci')
init('qxyrmpoCazTDUzpRf')

function Contacts() {
  const {register, handleSubmit, watch, formState, errors} = useForm();

  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    //console.log(data);
    generateContactNumber();
    // sendForm('default_service', 'template_qkf0sci', '#contact-form')
    // .then(function(response) {
    //   console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //   console.log('FAILED...', error);
    // });

    console.log("Form data:", data);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={laptop} alt=''/>
                        </div>
                        <div>
                            <h2 className='py-2'>Thajun Najaah M.A</h2>
                            <p>Back-End Developer - GoLang|PHP</p>
                            <p className='py-4'>I am available for freelance or full-time position. Contact me and lets talk.</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="https://lk.linkedin.com/in/thajunnajaah/" target="_blank" rel="noreferrer noopener">
                                    <FaLinkedinIn/>
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="https://github.com/Thajun" target="_blank" rel="noreferrer noopener">
                                    <FaGithub/>
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href='https://twitter.com/najaah_thajun/' target="_blank" rel="noreferrer noopener">
                                    <FaTwitter/>
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="mailto:najaah9@gmail.com" target="_blank" rel="noreferrer noopener">
                                    <AiOutlineMail/>
                                </a>
                            </div>
                            {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill/>
                            </div> */}
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="http://wa.me/94768433003" target="_self" rel="noreferrer noopener">
                                    <FaWhatsapp/>
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <a href="tel:+94777301150" target="_self" rel="noreferrer noopener">
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
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type="text"
                                // name="name"
                                //aria-invalid={errors.name ? "true" : "false"}
                                {...register('name')}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Phone Number</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type="text"
                                //name="phone"
                                {...register('phone')}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type="email"
                            //name="email"
                            {...register('email')}
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Subject</label>
                        <input
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type="text"
                            //name="subject"
                            {...register('subject')}
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message</label>
                        <textarea
                            className='border-2 rounded-lg p-3 border-gray-300'
                            type="text"
                            rows="10"
                            //name="message"
                            {...register('message')}
                        />
                        {/* <input type='hidden' name='contact_number' value={contactNumber} /> */}
                    </div>

                    <input
                        type="submit"
                        className="w-full p-4 text-gray-100 mt-4 bg-slate-600"
                        //   disabled={formState.isSubmitting}
                        value="Send Message"
                    />
                    {/* <button
                      className='w-full p-4 text-gray-100 mt-4'
                      disabled={formState.isSubmitting}
                    >Send Message</button> */}
                </form>
            </div>
        </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contacts
