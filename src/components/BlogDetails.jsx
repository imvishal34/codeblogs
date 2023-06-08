import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    // console.log("Data received")
    // console.log(post)   
  return (
    <div className='gap-y-7'>
        <p className='font-bold text-sm'>
            <NavLink to={`/blog/${post.id}`}>
                <span>{post.title}</span>
            </NavLink>
        </p>
        <p className='text-[12px]'>
            By{" "}
            <span className='italic'>{post.author}</span> {" "}
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className='underline font-bold'>{post.category}</span>
            </NavLink>
        </p>
        <p className='text-[12px]'>Posted on {post.date}</p>
        <p className='text-[13px] mt-2'>{post.content}</p>
        <div className='flex gap-x-3 mt-2'>
            {post.tags.map( (tag,index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span className='underline text-blue-500 font-bold text-[10px]'>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogDetails