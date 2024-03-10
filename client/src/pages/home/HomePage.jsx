import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Images
import Logo1 from '../../assets/logos/queen_b_logo_2.jpg';
import ImageArrayComponent from '../../components/home/ImageArrayComponent';

function HomePage() {
  return (
    <div className='h-dvh w-full overflow-hidden'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className=''>
          {/* Header */}
          <header>
            <div>
              <img src={Logo1} className='w-[400px]' />
            </div>
          </header>

          {/* Main */}
          <main className='grid'>
            main
            <ImageArrayComponent />
          </main>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
