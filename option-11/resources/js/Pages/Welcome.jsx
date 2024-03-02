import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from '@/Components/NavBar';
import MainImage from '@/Components/MainImage';
import Categories from '@/Components/Categories';
import MainPgProducts from '@/Components/MainPgProducts';
import AnimateModal from '@/Components/AnimateModal';
import Footer from '@/Components/Footer';
import Login from '@/Pages/Auth/Login'; // Import your Modal component

import mainBike from '../../assets/main-img.png';

const Home = ({ auth,baskIcon }) => {


  return (
    <>
      <main>
      <AnimateModal auth={auth} baskIcon={baskIcon}>
       
        <MainImage
          imageSrc={mainBike}
          altText="bike sign"
          heading="Ride the Extraordinary"
          subheading="Choose Option 11"
        />
        <Categories />
        <MainPgProducts />

        
       
      
       
     
      
        </AnimateModal>
      </main>

   
  
    </>
  );
};

export default Home;
