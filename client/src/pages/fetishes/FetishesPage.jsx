import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';

function FetishesPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/fetish-pleasure');
  }, []);

  return (
    <div className='h-dvh w-full '>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />
        FetishesPage
      </div>
    </div>
  );
}

export default FetishesPage;
