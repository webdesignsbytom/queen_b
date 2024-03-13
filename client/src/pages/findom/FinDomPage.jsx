import React, { useContext, useEffect } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';

function FinDomPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/kinky-blog');
  }, []);

  return (
    <div className='h-dvh w-full grid'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />
        FinDomPage
      </div>
    </div>
  );
}

export default FinDomPage;
