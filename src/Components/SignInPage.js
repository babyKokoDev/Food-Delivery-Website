import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const SignInPage = () => {
  return (
    <>
    <Navbar />
    <div className='text-center italic mt-20 mb-5 text-3xl text-purple-700'>SIGN IN</div>
    <div className='max-w-[800px] bg-white mx-auto p-10 mb-20 rounded-[20px] shadow-lg shadow-black/20'>
         <div className='mb-3 ms-3'>
            <h1 className='font-semibold text-xl'>Sign In</h1>
            <p>Resume your activity</p>
         </div>
            <div className='mb-10'>
                <label className='block ms-3 text-xl' htmlFor="">Email*</label>
                <input type="email" placeholder='Your Email' className='rounded-[20px] bg-[#D9D9D9] py-3 px-10 w-full' />
            </div>
            <div >
                <label className='block ms-3 text-xl' htmlFor="">Password*</label>
                <input type="password" placeholder='Your Password' className='rounded-[20px] bg-[#D9D9D9] py-3 px-10 w-full' />
            </div>
         <div>
            <button className='bg-[#D75127] w-[174px] text-center border-none text-white mt-10 rounded-none py-2 ms-3'>Submit</button>
         </div>
         </div>
    <Footer />
    </>
  )
}

export default SignInPage