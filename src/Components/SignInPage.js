import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const SignInPage = () => {
  return (
    <>
    <Navbar />
    <div className='text-center italic mt-20 mb-5 text-3xl text-pink-500'>CONTACT</div>
    <div className='max-w-[800px] bg-white mx-auto p-10 mb-20 rounded-[20px] shadow-lg shadow-black/20'>
         <div className='mb-3'>
            <h1 className='font-semibold text-xl'>Contact Us</h1>
            <p>Leave your message and we'll get back to you shortly.</p>
         </div>
         <div className='grid md:grid-cols-2 gap-5 w-full'>
            <div >
                <label className='block ms-3 text-xl' htmlFor="">Name*</label>
                <input type="text" placeholder='Your Name' className='rounded-[20px] bg-[#D9D9D9] py-3 px-10 w-[300px]' />
            </div>
            <div >
                <label className='block ms-3 text-xl' htmlFor="">Email*</label>
                <input type="email" placeholder='Your Email' className='rounded-[20px] bg-[#D9D9D9] py-3 px-10 w-[300px]' />
            </div>
         </div>
         <div className='mt-5'>
            <h5 className='font-semibold ms-3'><label htmlFor="">Message Us</label></h5>
            <textarea className='rounded-[20px] bg-[#D9D9D9] w-full' name="" id="" cols="30" rows="10"></textarea>
            
         </div>
    </div>
    <Footer />
    </>
  )
}

export default SignInPage