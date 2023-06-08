import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
import BlogDetails from './BlogDetails'
// import { Card } from './Card'

export const Blogs = () => {

  const {posts,loading} = useContext(AppContext)
  console.log(posts)

  return (
    <div className='w-11/12 max-w-[650px] py-3 flex flex-col gap-y-5 mx-auto my-16'>
     {
      loading ? (<Spinner/>) : (
        posts.length===0 ? (
          <div>
            <p>No Post Found</p>
          </div>
        ) : (posts.map( (post) => (
          <BlogDetails key={post.id} post={post}/>
        )))
      )
     }
    </div>
  )
}
