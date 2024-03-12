import React, { useContext, useEffect, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
// Images
import { galleryImagesArray } from '../../utils/GalleryImages';
import Logo from '../../assets/images/logos/logo2.png';

function GalleryPage() {
  const { setActiveNav } = useContext(ToggleContext);
  const [galleryArray, setGalleryArray] = useState(galleryImagesArray);

  useEffect(() => {
    setActiveNav('/gallery-of-the-queen');
  }, []);

  return (
    <div className='h-dvh w-full '>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        <main className='grid'>
          <div className='grid w-2/3 mx-auto mt-2 mb-6'>
            <section className='grid grid-cols-3'>
              <div className='grid text-white items-center justify-center text-4xl classy_font_1 mx-auto'>
                <span>BEAUTY</span>
              </div>
              <div className='grid justify-center'>
                <img
                  src={Logo}
                  className='md:w-[300px] 2xl:w-[500px] pr-2'
                  alt='Logo'
                />
              </div>
              <div className='grid text-white items-center justify-center text-4xl classy_font_1'>
                <span>POWER</span>
              </div>
            </section>

            <section className='grid grid-cols-3 -mt-4 gap-y-6 justify-between'>
              {galleryArray.map((image, index) => {
                return (
                  <div
                    key={index}
                    className='grid w-[300px] h-[400px] outline outline-2 outline-purple-900 rounded p-2 overflow-hidden items-center justify-center'
                  >
                    <img src={image} alt='Queen Button' />
                  </div>
                );
              })}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default GalleryPage;
