import React, { useState } from 'react';
import './App.css';
import Category from './Components/Category';
import Food from './Components/Food';
import HeadlineCards from './Components/HeadlineCards';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />
    <Category />
    <Footer />
    </>
  );
}

export default App;
