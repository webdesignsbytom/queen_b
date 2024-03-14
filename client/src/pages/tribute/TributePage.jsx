import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
import TributeCta from '../../components/cta/TributeCta';
import FinDomCta from '../../components/cta/FinDomCta';

function TributePage() {
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/tributes-to-the-queen');
    closeNavBar();
  }, []);

  return (
    <div className='h-dvh w-full'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className='grid'>
          <div className='grid w-2/3 mx-auto justify-center'>
            <article className='text-white mt-8 text-center'>
              <div>
                <h1 className='text-5xl gothic_font_1 text-purple-900 text__stroke__sm'>
                  For those who know how to treat a <strong>Queen</strong>
                </h1>
              </div>
              <div className='mt-2'>
                <div className='text-center'>
                  <h2>
                    Lay your offerings at <span className='italic'>your</span>{' '}
                    Queens feet.
                  </h2>
                </div>
                <div className='text-center'>
                  <h3>
                    Those who show their devotion are invited to know Her
                    Magisty more!
                  </h3>
                </div>
                <div className='text-center'>
                  <h4>
                    You can earn the chance to beg me for old panties, socks,
                    toe nails and more!
                  </h4>
                </div>
              </div>
            </article>

            <TributeCta />

            <FinDomCta />
          </div>
        </main>
      </div>
    </div>
  );
}

export default TributePage;
