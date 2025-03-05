import React, { useContext, useEffect, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
import KinkyRain from '../../components/canvas/KinkyRain';
// Fetish array
import { fetishOptionsArray } from '../../utils/FetishOptions';
import InternalLinkCta from '../../components/cta/InternalLinkCta';
// Images
import Logo from '../../assets/images/logos/logo2.png';

function FetishesPage() {
  const [fetishArray] = useState(fetishOptionsArray);
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/fetish-pleasure');
    closeNavBar();
  }, []);

  return (
    <div className='h-dvh w-full overflow-x-hidden'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        <main className='grid'>
          <section className='grid mt-6 justify-center'>
            <div className='grid uppercase text-white px-6 py-4 w-fit'>
              <h1 className='text-4xl gothic_font_1'>
                Fetishes For Goddesses pleasure
              </h1>
            </div>
          </section>

          <section className='grid'>
            <KinkyRain />
          </section>

          <section className='grid mt-4 mb-10'>
            <div className='grid gap-2 px-4 md:px-0 md:w-1/2 mx-auto'>
              {fetishArray.map((fetish, index) => {
                return (
                  <article key={index} className='text-white bg-'>
                    <div>
                      <h4 className='text-yellow-600'>{fetish.title}</h4>
                    </div>
                    <div>
                      <p>{fetish.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <div className='mb-10 -mt-10 relative'>
            <InternalLinkCta />

            <div className='hidden md:grid absolute -bottom-10 -right-6'>
              <img
                src={Logo}
                className='md:w-[300px] 2xl:w-[500px] pr-2 '
                alt='Logo'
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default FetishesPage;
