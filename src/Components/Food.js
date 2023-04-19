import React, { useState } from 'react';
import { data } from '../data/data'
import { Link } from 'react-router-dom'
import FoodOrder from './FoodOrder';

const Food = () => {

const [foods, setFoods] = useState(data)

const allArray = ()=>{
    const foodlist = data.map((item)=>{
        return {...item}
    })
    setFoods(foodlist)
}
const swallowArray = ()=>{
      
      const foodlist = data.filter((item)=>{
          if (item.category === "Swallow"){
              return true
          }
      })
      setFoods(foodlist)
      
}
const fruitsArray = ()=>{
    
    const foodlist = data.filter((item)=>{
        if (item.category === "Fruits"){
            return true
        }
    })
    setFoods(foodlist)    
}
const lightArray = ()=>{
    
    const foodlist = data.filter((item)=>{
        if (item.category === "Light Food"){
            return true
        }
    })
    setFoods(foodlist)   
}
const heavyArray = ()=>{
    
    const foodlist = data.filter((item)=>{
        if (item.category === "Heavy Food"){
            return true
        }
    })
    setFoods(foodlist)
}

const priceCatOne = () => {
    const foodlist = data.filter((item)=>{
        if (item.price <= 10){
            return true
        }
    })
    setFoods(foodlist)
}
const priceCatTwo = () => {
    const foodlist = data.filter((item)=>{
        if (item.price > 10 && item.price <= 20){
            return true
        }
    })
    setFoods(foodlist)
}
const priceCatThree = () => {
    const foodlist = data.filter((item)=>{
        if (item.price > 20 && item.price <= 30){
            return true
        }
    })
    setFoods(foodlist)
}
const priceCatFour = () => {
    const foodlist = data.filter((item)=>{
        if (item.price > 30 && item.price <= 40){
            return true
        }
    })
    setFoods(foodlist)
}

    
  return (
    <div name="order" className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center mb-5'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={allArray}>All</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={swallowArray}>Swallow</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={fruitsArray}>Fruits</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={lightArray}>Light Food</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={heavyArray}>Heavy Food</button>
                </div>
            </div>

            {/* Filter Price */}
            <div className='mt-4 md:mt-0'>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={priceCatOne}>$1 - $10</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={priceCatTwo}>$11 - $20</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={priceCatThree}>$21 - $30</button>
                    <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' onClick={priceCatFour}>$31 - $40</button>   
                </div>
            </div>
        </div>
        {/* Display Foods */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  pt-4'>
           {
               foods.map((item, index)=> (
                <Link to= {`/foodOrder/${item.id}`} key={index} element ={<FoodOrder />}>
                  <div key={index} className="border rounded-lg shadow-xl hover:scale-105 duration-300">
                      <img src={item.image} alt={item.name} className="w-full h-[300px] object-cover rounded-t-lg" />
                      <div className='flex justify-between align-center bg-orange-200 rounded-b-lg px-2 py-4'>
                          <p className='font-bold text-[20px] text-[tomato]'>{item.name}</p>
                          <p>
                              <span className='bg-orange-500 text-white p-2 rounded-full'>${item.price}</span>
                          </p>
                      </div>
                  </div>
                  </Link>
               ))
           }
        </div>
    </div>
  )
}

export default Food