import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';

function GalleryPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/gallery-of-the-queen');
  }, []);

  return (
    <div className='h-dvh w-full '>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />
      </div>
    </div>
  );
}

export default GalleryPage;
