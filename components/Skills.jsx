import React from 'react'
import Image from 'next/image'
import git from '../public/assets/skills/git.jpg'
import go from '../public/assets/skills/go.jpg'
import grafana from '../public/assets/skills/grafana.jpg'
import html from '../public/assets/skills/html.jpg'
import js from '../public/assets/skills/js.jpg'
import kafka from '../public/assets/skills/kafka.jpg'
import kibana from '../public/assets/skills/kibana.jpg'
import mongo from '../public/assets/skills/mongo.jpg'
import mysql from '../public/assets/skills/mysql.jpg'
import php from '../public/assets/skills/php.jpg'
import postman from '../public/assets/skills/postman.jpg'
import react from '../public/assets/skills/react.jpg'


function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={go} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://go.dev/doc/' target="_blank" rel="noreferrer noopener">
                                <h3>GoLang</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={php} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://php.org/' target="_blank" rel="noreferrer noopener">
                                <h3>PHP</h3>
                            </a>

                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://reactjs.org/' target="_blank" rel="noreferrer noopener">
                                <h3>React</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mongo} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://www.mongodb.com/docs/manual/core/document/' target="_blank" rel="noreferrer noopener">
                                <h3>MongoDB</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={mysql} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                           <a href='https://www.mysql.com/' target="_blank" rel="noreferrer noopener">
                             <h3>MySQL</h3>
                           </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                           <a href='http://html.net/' target="_blank" rel="noreferrer noopener">
                             <h3>HTML</h3>
                           </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={js} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://www.javascript.com/' target="_blank" rel="noreferrer noopener">
                                <h3>JavaScript</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={git} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://git-scm.com/' target="_blank" rel="noreferrer noopener">
                                <h3>Git</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={kafka} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://kafka.apache.org/' target="_blank" rel="noreferrer noopener">
                                <h3>Kafka</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={kibana} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://www.elastic.co/kibana/' target="_blank" rel="noreferrer noopener">
                                <h3>Kibana</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={grafana} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://grafana.com/' target="_blank" rel="noreferrer noopener">
                                <h3>Grafana</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={postman} alt='' width='64px' height='64px' />
                        </div>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <a href='https://www.postman.com/' target="_blank" rel="noreferrer noopener">
                                <h3>Postman</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
