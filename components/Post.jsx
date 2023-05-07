import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BlockItemCleanGo({post}) {
    console.log(post.slug)

    return (
        <div className='relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image
                className='rounded-xl group-hover:opacity-10'
                src={post.frontmatter.cover_image}
                height={300}
                width={300}
                alt=""
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{post.frontmatter.title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>Posted on {post.frontmatter.date}</p>
                <Link href={`/blog/${post.slug}`}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Read More</p>
                </Link>
            </div>
        </div>
    )
}

export default BlockItemCleanGo
