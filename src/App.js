import React, { useState } from 'react';
import './App.css';
import Food from './Components/Food';
import HeadlineCards from './Components/HeadlineCards';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />
    </>
  );
}

export default App;
