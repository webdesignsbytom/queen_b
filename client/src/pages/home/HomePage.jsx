import React from 'react';
import Navbar from '../../components/nav/Navbar';

function HomePage() {
  return (
    <div className='h-dvh w-full overflow-hidden'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className=''></main>
      </div>
    </div>
  );
}

export default HomePage;
