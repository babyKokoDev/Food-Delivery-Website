import React, { useState } from 'react'
import { data } from '../data/data'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const FoodOrder = () => {
    const [num, setNum] = useState(1)
    const increase = () => {
        setNum(num + 1)
    }
    const decrease = () => {
       num > 1 ? setNum(num - 1) : setNum(1)   
    }
    const params = useParams()
    const userIndex =  `${params.foodId}`
    const userData = data[userIndex-1]

    console.log(userData)
  return (
    <>
        <Navbar />
          
          <div className='max-w-[1320px] mx-auto p-3 md:p-10 my-10'>
            <h1 className='mb-5 text-center font-bold text-blue-700 text-4xl'>ORDER NOW</h1>
              <div className='grid md:grid-cols-2 gap-10'>
                  <div>
                    <img src={userData.image} className='w-full h-[400px] object-cover' alt="" />
                  </div>
                  <div className='text-center px-2'>
                    <p className='text-slate-700 text-3xl mb-3'>{userData.name}</p>
                    <div className='flex justify-center items-center'>
                         <span onClick={decrease} className='cursor-pointer hover:bg-slate-500 p-2'><AiOutlineMinus  size={30} /></span>
                         <span className='mx-4 border-slate-700 border px-5 text-2xl'>{num}</span>
                         <span onClick={increase} className='cursor-pointer hover:bg-slate-500 p-2'><AiOutlinePlus  size={30}/></span>
                    </div>
                    <div className='mt-4 w-full  md:w-[50%] mx-auto bg-slate-400 shadow-lg py-2 text-white text-2xl'>${userData.price*num}</div>
                    <button className='mt-4 w-full  md:w-[50%] mx-auto bg-[#D75127] shadow-lg py-2 text-white border-none rounded-none hover:scale-105 text-2xl'>Buy it now</button>
                    <div className='mt-4 text-orange-600 text-xl'>{userData.description}</div>
                  </div>
              </div>
          </div>

         <Footer />
    </>
  )
}

export default FoodOrder