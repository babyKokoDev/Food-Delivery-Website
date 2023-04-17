import React, { useState } from 'react';
import Category from './Category';
import Food from './Food';
import HeadlineCards from './HeadlineCards';
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />
    <Category />
    <Footer />
    </>
  )
}

export default Home