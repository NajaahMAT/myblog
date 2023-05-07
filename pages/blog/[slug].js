import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import md from "markdown-it";
import {DiscussionEmbed} from "disqus-react"

export default function PostPage({frontmatter:{title, date, cover_image}, content}){

    function createMarkup() {
        return {
            __html: marked(content)
        }
     };

   const disqusShortname = "myblog"

   const disqusConfig = {
        url: "http://localhost:3001",
        identifier: '1', // Single post id
        title: title // Single post title
    }

    return(
         <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[30vh] bg-black/80 z-10'>
                    {/* <Image className='absolute z-1' src={cover_image} alt='/' height={100} width={1500}/> */}
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='py-2'>{title}</h2>
                        <div className='post-date'>Posted on {date}</div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
              <div className='col-span-4'>
                  <div dangerouslySetInnerHTML={createMarkup()} />
              </div>

            </div>

            <div>
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            </div>

            <Link href='/#blogs'>
                <p className='underline cursor-pointer'>Back</p>
              </Link>
        </div>
    )
}

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md','')
        }
    }))


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params:{slug}}){
    //console.log(slug)

    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data:frontmatter, content} = matter(markdownWithMeta)

    // console.log(frontmatter)
    // console.log(content)

    return{
        props: {
            frontmatter,
            content,
        },
    }
}
