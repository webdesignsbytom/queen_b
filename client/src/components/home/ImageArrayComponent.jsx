import React, { useState } from 'react';
// Images
import Logo1 from '../../assets/images/logos/logo2.png';
import Queen1 from '../../assets/images/queenB/queen1_nb.png';
import Queen2 from '../../assets/images/queenB/queen2_nb.png';
import Queen3 from '../../assets/images/queenB/queen5_nb.png';
import Queen4 from '../../assets/images/queenB/queen4_nb.png';

function ImageArrayComponent({ displayNum }) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const [galleryImageArray, setGalleryImageArray] = useState([
    {
      image: Queen1,
      tag: 'SIN',
    },
    {
      image: Queen2,
      tag: 'LUST',
    },
    {
      image: Queen3,
      tag: 'POWER',
    },
    {
      image: Queen4,
      tag: 'FIRE',
    },
  ]);

  const displayHiddenText = () => {
    setIsTextVisible(true);
  };

  return (
    <section className='grid'>
      <div className='grid grid-flow-col'>
        {/* Image data */}
        {galleryImageArray.slice(0, displayNum).map((image, index) => (
          <div key={index} className='grid justify-center'>
            <div
              onMouseOver={displayHiddenText}
              className='relative outline outline-purple-900 outline-2 rounded-lg p-1 w-[200px] h-[300px] cursor-pointer shadow-[0_20px_50px_rgba(76,_29,_149,_0.7)] transition duration-1000 ease-in-out hover:bg-white overflow-hidden'
            >
              <img
                src={image.image}
                className='object-fill w-[200px] h-[300px]'
                alt='Gallery item'
              />

              {isTextVisible && (
                <div className='grid absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <span className='text-white uppercase text-3xl font-bold'>
                    {image.tag}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageArrayComponent;
