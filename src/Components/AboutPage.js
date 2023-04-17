import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import imgOne from '../assets/Rectangle 18.jpg'
import imgTwo from '../assets/Rectangle 19.jpg'

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <p className='text-sky-800 font-bold text-3xl text-center mb-5 '>ABOUT US</p>
        <div className='grid grid-cols-1 md:grid-cols-4 items-center g-10'>
            <div className='col-span-3 text-center'>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, tempore. Saepe pariatur, quasi, rerum accusantium voluptatem cupiditate fugit praesentium est soluta facere exercitationem architecto molestiae. Aliquid delectus repellat facere aperiam quibusdam amet nostrum fuga voluptas nisi dolorem ipsam reprehenderit temporibus tempora inventore recusandae at error expedita, aliquam nobis modi? Ad aspernatur exercitationem perspiciatis iste non adipisci eos dolorem nostrum praesentium, possimus tenetur ratione eveniet sit vel. Facilis animi consectetur libero, itaque impedit magnam aut voluptates temporibus? Ducimus, laborum dolor optio quia iure, harum autem, ratione suscipit ipsa sed dignissimos et doloremque aliquam eos illo. Quos hic nulla quia impedit excepturi.
            </div>
            <div className='flex flex-col'>
                <img src={imgOne} className='w-full' alt="" />
                <img src={imgTwo} className='w-full' alt="" />
            </div>
        </div>
    </div>

    <Footer />
    
    
    </>
  )
}

export default AboutPage