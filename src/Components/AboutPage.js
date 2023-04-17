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
            <div className='col-span-3 text-center text-gray-600 bg-purple-300 p-10 border-4 rounded-3xl font-semibold mb-5'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam quae rerum asperiores architecto ducimus magnam cupiditate aut doloribus commodi iure error vero officia assumenda voluptatem blanditiis, earum necessitatibus cum quis non labore? A eveniet placeat dolorem libero cumque distinctio fugiat nesciunt quaerat, alias nobis quibusdam repellendus pariatur inventore hic explicabo incidunt deleniti velit maxime eaque numquam dolor molestias facere. Voluptate amet deserunt nulla blanditiis, rem magnam! Blanditiis praesentium, saepe debitis dolor fuga recusandae deleniti odio ut cum illum minus commodi tenetur ullam iste suscipit veritatis vero labore numquam eaque voluptatum perspiciatis laudantium libero provident? Labore itaque iste rem deleniti, veritatis explicabo consectetur nam molestias excepturi quam, nostrum commodi accusamus voluptates magnam quasi odit doloremque expedita nulla corrupti placeat? Obcaecati aliquid eius repudiandae non perspiciatis incidunt minima natus necessitatibus quos id explicabo tempora ad, unde atque, voluptatibus nostrum. Ea itaque alias, quis possimus distinctio laboriosam ipsum ullam voluptatum et nisi! Ipsam accusamus quisquam numquam perferendis, culpa reiciendis asperiores libero blanditiis saepe, impedit obcaecati placeat ratione ea. Maxime consectetur velit quibusdam asperiores dignissimos! Tenetur maiores quibusdam recusandae, voluptas eum, suscipit laborum repellat fugit excepturi qui aperiam officia odit accusantium atque, facilis architecto iusto! Maxime voluptatibus voluptates eius qui? Modi maiores velit ut placeat sit quos rerum provident reiciendis. Temporibus atque libero dolor quaerat fugit saepe amet iusto excepturi architecto accusamus at, fugiat ut, aliquam aut suscipit soluta obcaecati! Odit modi maxime omnis reiciendis placeat quasi totam ipsam autem! Adipisci repellat cumque amet vel minus quod eligendi laboriosam quibusdam sapiente, dolorem earum temporibus iste suscipit quisquam aliquam et libero natus voluptates labore. Nesciunt ducimus dolorem consectetur perspiciatis esse, asperiores cum facilis sapiente facere iusto incidunt aspernatur commodi perferendis amet unde. Eum sapiente suscipit, tempora beatae dolores incidunt nisi. Labore quam rerum laborum nihil, veritatis sequi magnam et officiis. Ipsa, corrupti molestiae. Delectus.
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