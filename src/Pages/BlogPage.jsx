import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Header } from '../components/Header';
import { Spinner } from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const newBaseUrl ="https://codehelp-apis.vercel.app/api/get-blog"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading,setLoading} = useContext(AppContext);

    const blogId= location.pathname.split('/').at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}?blogId=${blogId}`;
        try {
            const res= await fetch(url);
            const data =await res.json();
            // console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error Occured!")
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( ()=> {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname])

  return (
    <div className='flex flex-col'>
        <Header/>
        <div >
            <div className='mt-20 flex justify-center'>
                <button className='px-2 mx-1 bg-black text-white'
                onClick={()=>navigation(-1)}
                >
                    Back
                </button>
            </div>
            <div className='w-11/12 max-w-[650px] py-3 gap-y-5 my-5 mx-auto'>
                {
                    loading ? (<Spinner/>) : 
                    blog ?
                        (
                            <div>
                                <BlogDetails post={blog} />
                                <h2 className='my-5 font-extrabold text-2xl font-serif underline'>Related Blogs</h2>
                                {
                                    relatedBlogs.map( (post) => (
                                        <div key={post.id} className='my-4'>
                                            <BlogDetails post={post} />
                                        </div>
                                    ))
                                 }
                            </div>
                        ) : (<p>No Blog Found</p>)
                }
            </div>
        </div>
    </div>
  )
}
export default BlogPage