import React from 'react'
import { data } from '../data/data'

const Food = () => {
    
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Swallow</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Fruits</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Light Food</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Heavy Food</button>
                </div>
            </div>

            {/* Filter Price */}
            <div className='mt-4 md:mt-0'>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$1 - $10</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$11 - $20</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$21 - $30</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>$31 - $40</button>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Food