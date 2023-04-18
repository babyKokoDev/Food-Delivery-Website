import React from 'react'
import { data } from '../data/data'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const FoodOrder = () => {
    const params = useParams()
    const userIndex =  `${params.foodId}`
    const userData = data[userIndex-1]

    console.log(userData)
  return (
    <>
        <Navbar />
          
          <div className='max-w-[1320px] mx-auto p-10 my-10'>
            <h1 className='mb-5 text-center font-bold text-blue-700 text-4xl'>ORDER NOW</h1>
              <div className='grid md:grid-cols-2 gap-10'>
                  <div>
                    <img src={userData.image} className='w-full h-[400px] object-cover' alt="" />
                  </div>
                  <div className='text-center'>
                    <p className='text-slate-700 text-3xl'>{userData.name}</p>
                  </div>
              </div>
          </div>

         <Footer />
    </>
  )
}

export default FoodOrder