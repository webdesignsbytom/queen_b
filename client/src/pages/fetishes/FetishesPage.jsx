import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
import KinkyRain from '../../components/canvas/KinkyRain';

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

        <main>
          <section className='grid mt-6 justify-center'>
            <div className='grid border-solid border-[12px] uppercase bg-slate-200 border-purple-900 border_inset_style px-6 py-4 w-fit'>
              <h1 className='text-2xl text-yellow-600 font-bold'>Fetishes For Goddesses pleasure</h1>
            </div>
          </section>

          <KinkyRain />
        </main>
      </div>
    </div>
  );
}

export default FetishesPage;
