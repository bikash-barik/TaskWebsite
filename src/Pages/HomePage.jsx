import React from 'react'
import Navbar from '../Components/Navbar';
import HeroPage from '../Components/HeroPage';
import AboutSection from '../Components/AboutSection';
import Festival from '../Components/Festival';
import Contribute from '../Components/Contribute';
import Footer from '../Components/Footer';


const HomePage = () => {
  return (
    <>
      <HeroPage />
      <AboutSection />
      <Festival />
      <Contribute />
    </>
  );
}

export default HomePage
