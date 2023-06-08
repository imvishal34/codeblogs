import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {

  const {page, handlePageChange, totalPages} = useContext(AppContext)
  console.log(totalPages)
  return (
    <div className='w-full flex justify-center items-center border-2 py-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[550px]'>
        <div className='flex gap-x-2'>
        { page>1 &&
          (
            <button
            className='rounded-md border-2 px-4 py-1'
            onClick={()=> handlePageChange(page-1)}>
              Previous 
            </button>
          )
        }

        {page<totalPages &&
         (
          <button
          className='rounded-md border-2 px-4 py-1'
          onClick={()=> handlePageChange(page+1)}>
            Next
          </button>
         ) 
        }
        </div>

        <p className='font-bold text-sm mt-2'>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}
