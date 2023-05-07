import React from 'react'
import laptop from '../public/assets/laptop.jpg'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div id='about' className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 justify-center items-center'>
            <p className='uppercase text-xl tracking-widest  text-[#5651e5]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-4 text-gray-600'>
              I’m a Senior Software Engineer with 5+ years of experience in the IT industry. My expertise
              is in Golang Backend Development while being capable of Microservices and Event Driven
              Architecture. I have earned a “BSc (Hons) in Information Technology (University of Moratuwa,
              Faculty of Information Technology)” degree and an “Masters of IT (UCSC)”. I have the
              willingness to strengthen my technical knowledge / expertise, people skills and contribute
              towards the organization and develop efficient server applications.
              <br />
              <br />
            </p>
            <div>
               <h3>Academic and Professional Qualifications</h3>
               <ul>
                <li>
                    <p className='text-gray-600 py-1'>- Master of Information Technology – University of Colombo (2018 to 2020)</p>
                </li>
                <li>
                    <p className='text-gray-600 py-1'>- B.Sc (Hons) in Information Technology – University of Moratuwa (2013 to 2017)</p>
                </li>
                <li>
                    <p className= 'text-gray-600 py-1'>- Diploma in Computer – MICTC MCSD</p>
                </li>
                <li>
                    <p className='py-1 text-gray-600'>- Programming in C# - Microsoft Certification – Esoft</p>
                </li>
               </ul>
            </div>
            <br />
            <Link href='/#projects'>
              <p className='py-2 text-blue-800 underline cursor-pointer'>Check out some of my latest projects.</p>
            </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-100 ease-in duration-300'>
            <Image className='rounded-xl' src={laptop} alt=''/>
        </div>
    </div>
  )
}

export default About
