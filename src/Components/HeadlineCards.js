import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                  <p className='px-2 '>Through 8/26</p>
                  <Link to="order" smooth={true} offset={50} duration={500}><button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button></Link>
            </div>
            <img className='max-h-[250px] md:max-h-[250px] w-full h-full object-cover rounded-xl' src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/70 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                  <p className='px-2 font-bold text-[pink] text-1xl'>Added Daily</p>
                  <Link to="order" smooth={true} offset={50} duration={500}><button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button></Link>
            </div>
            <img className='max-h-[250px] md:max-h-[250px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>We deliver Pounded Yam too</p>
                  <p className='px-2 font-bold text-[skyblue] text-1xl'>Tasty Treats</p>
                  <Link to="order" smooth={true} offset={50} duration={500}><button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button></Link>
            </div>
            <img className='max-h-[250px] md:max-h-[250px] w-full h-full object-cover rounded-xl' src="https://ocdn.eu/pulscms-transforms/1/vHwktkqTURBXy8xMGU2MTFjNDAxMWE5NDk2ODE1ZjFjMzVjOGM1YzNmNS5qcGVnkpUDAA7NApTNAXOTBc0EsM0Cdg" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards