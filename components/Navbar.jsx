import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/logo.png'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaPhone, FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa'
//import {BsFillPersonLinesFill} from 'react-icons/bs'
import {useRouter} from 'next/router';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(()=>{
       if(
         router.asPath === '/reporting' ||
         router.asPath === '/pickme' ||
         router.asPath === '/npos' ||
         router.asPath === '/epos' ||
         router.asPath === '/hcm' ||
         router.asPath === '/cloudbkup'
       ){
         setNavBg('transparent')
         setLinkColor('#ecf0f3');
       }else{
         setNavBg('#ecf0f3')
         setLinkColor('#1f2937');
       }
    },[router])

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true);
            }else{
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    },[]);

    return (
        <div style={{backgroundColor:`${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt= "/"
                        width='115'
                        height='40'
                    />
                </Link>
                <div className=''>
                    <ul style={{color:`${linkColor}`}}  className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#blogs'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Posts</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                    <div
                        className={
                            nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ccf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                        }
                    >
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <Link href='/'>
                                    <Image src={logo} width='87' height='35' alt='/' />
                                </Link>
                                <div onClick={handleNav} className='rounded-full shadow-lg  shadow-gray-400 p-3 cursor-pointer'>
                                    <AiOutlineClose/>
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>Let`s build something legendary together</p>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href='/'>
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link href='/#about'>
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                                </Link>
                                <Link href='/#skills'>
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                                </Link>
                                <Link href='/#projects'>
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
                                </Link>
                                <Link href='/#blogs'>
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Posts</li>
                                </Link>
                                <Link href='/#contact'>
                                    <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                                </Link>
                            </ul>
                            <div className='pt-40'>
                                <p className='uppercase tracking-widest text-[#5651e5]'>Let`s Connect</p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href="https://lk.linkedin.com/in/thajunnajaah/" target="_blank" rel="noreferrer noopener">
                                            <FaLinkedinIn/>
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='https://github.com/Thajun' target="_blank" rel="noreferrer noopener">
                                            <FaGithub/>
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='https://twitter.com/najaah_thajun/' target="_blank" rel="noreferrer noopener">
                                            <FaTwitter/>
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='mailto:najaah9@gmail.com' target="_blank" rel="noreferrer noopener">
                                            <AiOutlineMail/>
                                        </a>
                                    </div>
                                    {/* <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='http://google.com' target="_blank" rel="noreferrer noopener">
                                            <BsFillPersonLinesFill/>
                                        </a>
                                    </div> */}
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='http://wa.me/94768433003' target="_self" rel="noreferrer noopener">
                                            <FaWhatsapp/>
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='tel:+94777301150' target="_self" rel="noreferrer noopener">
                                            <FaPhone/>
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='https://facebook.com/thajun.najaah.73/' target="_blank" rel="noreferrer noopener">
                                            <FaFacebook/>
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='https://instagram.com/thajunnajaah/' target="_blank" rel="noreferrer noopener">
                                            <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
