import React from 'react'
import Post from './Post'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

function Blogs({posts}) {
 // console.log(posts)
  return (
    <div id='blogs' className='w-full'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Blog Posts</p>
            <div className='grid md:grid-cols-2 gap-8'>
                {posts.map((post, index) => (
                        <Post post={post}/>

                ))}
            </div>
        </div>
    </div>
  )
}

export default Blogs
