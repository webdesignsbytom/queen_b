import React from 'react';
// Images
import Logo from '../../assets/images/logos/logo2.png';
import BackgroundImage1 from '../../assets/images/general/bg1.jpg';
import Queen1 from '../../assets/images/queenB/queen1_nb.png';

function HomePageHeader() {
  return (
    <header className='grid 2xl:mt-6 relative h-[600px] md:h-full'>
      <section className='hidden md:grid w-full md:w-3/4 mx-auto'>
        <div>
          <img
            src={BackgroundImage1}
            className='w-full h-fit md:h-full md:blur-sm'
            alt='Background'
          />
        </div>
      </section>

      <section className='absolute top-1/4 md:top-1/2 transform left-1/2 md:left-24 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 z-20 md:z-0'>
        <div>
          <img src={Logo} className='md:w-[300px] 2xl:w-[500px]' alt='Logo' />
        </div>
      </section>

      <section className='absolute top-1/2 transform -right-10 2xl:right-10 -translate-x-1/2 -translate-y-1/2 h-full'>
        <div className='grid h-full'>
          <img
            src={Queen1}
            className='object-cover w-full h-full'
            alt='The Queen'
          />
        </div>
      </section>

      <section className='absolute w-full md:w-fit px-6 top-[65%] lg:top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <div className='grid md:px-4 py-2 text-center gothic_font_1'>
          <div>
            <h1 className='text-yellow-600 text-4xl md:text-7xl font-bold bg-red-800/30 lg:bg-black/50 px-2 md:px-4 rounded-lg py-2 text-center gothic_font_1'>
              Call me Queen B <em>or</em> Goddess
            </h1>
          </div>
          <div className='mt-2'>
            <h2 className='text-yellow-600 text-3xl font-bold bg-red-800/30 lg:bg-black/50 px-2 md:px-4 rounded-lg py-2 text-center gothic_font_1'>
              Welcome to my{' '}
              <span className='text-white font-bold italic'>sinful</span>{' '}
              pleasure palace!
            </h2>
          </div>
        </div>
        <section className='md:hidden w-full'>
          <div className='grid bg-red-800/30 px-2 md:px-4 rounded-lg py-2 text-center gothic_font_1'>
            <h3 className='text-yellow-600 text-3xl font-semibold italic'>
              Scroll to see more
            </h3>
          </div>
        </section>
      </section>
    </header>
  );
}

export default HomePageHeader;
