import React, { useState } from 'react';
// Images
import Logo1 from '../../assets/logos/queen_b_logo_2.jpg';

function KinkyObjectComponent() {
  const [kinkyObjectImageArray, setKinkyObjectImageArray] = useState([
    Logo1,
    Logo1,
    Logo1,
  ]);
  
  return (
    <section className='grid'>
      <div className='grid grid-cols-3 justify-center'>
        {/* Image data */}
        {kinkyObjectImageArray.map((image, index) => {
          return (
            <div className='grid justify-center'>
              <div
                key={index}
                className='outline outline-purple-900 outline-2 rounded-lg p-1 w-fit'
              >
                <img src={image} className='w-[150px]' alt='sexy' />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default KinkyObjectComponent;
