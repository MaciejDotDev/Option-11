import React, { useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { InertiaLink } from "@inertiajs/inertia-react";
import Login from '@/Pages/Auth/Login'; // Import your Modal component
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavBar from "@/Components/NavBar";

const AnimateModal = ({ auth, children,baskIcon }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
      document.body.style.overflow = 'hidden'
    };
  
    const closeModal = () => {
      document.body.style.overflow = 'visible';
      setModalOpen(false);
    };

    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { openModal });
      }
      return child;
    });
    return (
        <div>
             <NavBar auth={auth} openModal={openModal} baskIcon={baskIcon} />
             {childrenWithProps}
              <AnimatePresence initial={false} mode='wait'>
        {modalOpen && (
          <Login modalOpen={modalOpen} handleClose={closeModal} />
        )}
      </AnimatePresence>

       
        </div>
      

      
      
    );
}

export default AnimateModal;