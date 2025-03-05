import React, { useContext, useEffect, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
// Images
import { galleryImagesArray } from '../../utils/GalleryImages';
import Logo from '../../assets/images/logos/logo2.png';
import InternalLinkCta from '../../components/cta/InternalLinkCta';
import GalleryItem from '../../components/gallery/GalleryItem';

function GalleryPage() {
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);
  const [galleryArray] = useState(galleryImagesArray);

  useEffect(() => {
    setActiveNav('/gallery-of-the-queen');
    closeNavBar();
  }, []);

  return (
    <div className='h-dvh w-full overflow-x-hidden'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        <main className='grid'>
          <div className='grid md:w-2/3 mx-auto mt-2 mb-6'>
            <section className='grid grid-cols-3 px-2 md:px-0'>
              <div className='grid text-white items-center justify-center text-lg md:text-4xl classy_font_1 mx-auto'>
                <span>BEAUTY</span>
              </div>
              <div className='grid justify-center'>
                <img
                  src={Logo}
                  className='w-[150px] md:w-[300px] 2xl:w-[500px] pl-2 md:pl-0 md:pr-2'
                  alt='Logo'
                />
              </div>
              <div className='grid text-white items-center justify-center text-lg md:text-4xl classy_font_1'>
                <span>POWER</span>
              </div>
            </section>

            <section className='grid md:grid-cols-3 mt-4 md:-mt-4 lg:mt-10 gap-y-6 lg:gap-y-10 justify-center md:justify-between px-2'>
              {galleryArray.map((image, index) => {
                return <GalleryItem key={index} item={image} />;
              })}
            </section>
          </div>

          <div className='mb-8 relative'>
            <InternalLinkCta />
            <div className='absolute -bottom-10 -right-10 -z-10 '>
              <img
                src={Logo}
                className='md:w-[500px] 2xl:w-[700px] pr-2 '
                alt='Logo'
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default GalleryPage;
