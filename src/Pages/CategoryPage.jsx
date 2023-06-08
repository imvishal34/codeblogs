import React from 'react';
import { Header } from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { Blogs } from '../components/Blogs';
import { Pagination } from '../components/Pagination';

const CategoryPage = () => {

    const navigation  = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div className='flex flex-col'>
        <Header/>
        <div className='mt-20 flex justify-center'>
            <button className='px-2 mx-1 bg-black text-white'
            onClick={() => navigation(-1)}
            >
                {/* navigation(-1) back by one page */}
                Back
            </button>
            <h2 className='mx-1 text-2xl font-semibold'>
                Blogs on <span className='underline'>{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage