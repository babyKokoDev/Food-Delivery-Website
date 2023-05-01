import React, { useState } from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { data } from '../data/data'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { PaystackButton } from 'react-paystack';
import Swal from 'sweetalert2'



const FoodOrder = () => {

  const { pathname }  = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const [num, setNum] = useState(1)
  const [showModal, setShowModal] = React.useState(false);
  const increase = () => {
    setNum(num + 1)
  }
  const decrease = () => {
    num > 1 ? setNum(num - 1) : setNum(1)
  }
  const params = useParams()
  const userIndex = `${params.foodId}`
  const userData = data[userIndex - 1]


  // Payment Method
  const publicKey = process.env.REACT_APP_PAYSTACK_KEY
  const amount = userData.price * num * 100 * 750
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      Swal.fire(
        'Transaction Successful',
        '🧶🧶🧶🧶🧶🧶🧶',
        'success'
      )
      setShowModal(false)
    }
    ,
    onClose: () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
      setShowModal(false)
    },
  }

  return (
    <>
      <Navbar />

      <div className='max-w-[1320px] mx-auto p-3 md:p-10 my-10'>
        <h1 className='mb-5 text-center font-bold text-blue-700 text-4xl'>ORDER NOW</h1>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <img src={userData.image} className='w-full h-[400px] object-cover shadow-lg' alt="" />
          </div>
          <div className='text-center px-2'>
            <p className='text-slate-700 text-3xl mb-3'>{userData.name}</p>
            <div className='flex justify-center items-center'>
              <span onClick={decrease} className='cursor-pointer hover:bg-slate-500 p-2'><AiOutlineMinus size={30} /></span>
              <span className='mx-4 border-slate-700 border px-5 text-2xl'>{num}</span>
              <span onClick={increase} className='cursor-pointer hover:bg-slate-500 p-2'><AiOutlinePlus size={30} /></span>
            </div>
            <div className='mt-4 w-full  md:w-[50%] mx-auto bg-slate-400 shadow-lg py-2 text-white text-2xl'>${userData.price * num}</div>
            <button onClick={() => setShowModal(true)} className='mt-4 w-full  md:w-[50%] mx-auto bg-[#D75127] shadow-lg py-2 text-white border-none rounded-none hover:scale-105 text-2xl'>Buy it now</button>
            <div className='mt-4 text-orange-600 text-xl'>{userData.description}</div>
          </div>
        </div>
      </div>





      {/* Modal Page */}


      {showModal ?
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className=" mx-auto text-xl md:text-3xl font-semibold text-orange-700">
                    Provide Your Details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-[300px] md:w-[700px]">
                  <form>
                    <input type="email" placeholder='Email Address' className='w-full border border-slate-200 p-2 rounded-xl mb-4' id="email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="text" placeholder='Full Name' className='w-full border border-slate-200 p-2 rounded-xl mb-3' id="name" onChange={(e) => setName(e.target.value)} required />
                    <input type="number" placeholder='Phone Number' className='w-full border border-slate-200 p-2 rounded-xl mb-3' id="phone" onChange={(e) => setPhone(e.target.value)} required />
                  </form>


                  <div className='mx-auto text-center mb-4 mt-4 text-xl text-green-600'>Amount : ${userData.price * num}</div>

                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <PaystackButton className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-none" {...componentProps} />

                  </div>

                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        : null}


      <Footer />
    </>
  )
}

export default FoodOrder