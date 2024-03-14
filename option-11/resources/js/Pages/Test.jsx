import { InertiaLink } from '@inertiajs/inertia-react';

import Bike from '../components/Bike';

import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import NavBar from "@/Components/NavBar";
import Login from '@/Pages/Auth/Login';
import AnimateModal from '@/Components/AnimateModal';
import ReviewProducts from '@/Components/ReviewProducts';


const Test = ({ auth, reviews,starsAvg,commentsCount }) => {

  return (
    <div>
       <AnimateModal auth={auth} >

        <ReviewProducts reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} auth={auth} ></ReviewProducts>




      </AnimateModal>
    </div>
  );
};

export default Test;
