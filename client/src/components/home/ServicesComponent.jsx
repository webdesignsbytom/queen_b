import React from 'react';
// Images
import ServiceImage from '../../assets/images/queenB/queen2.png';
// Data
import { servicesDataArray } from '../../utils/data/ServicesData';

function ServicesComponent() {
  return (
    <section className='grid justify-center mt-16 md:mt-32 px-4'>
      <div>
        <h6 className='gothic_font_1 text-center text-4xl text-white'>
          ❖ SERVICES ❖
        </h6>
      </div>
      <section className='grid lg:grid-cols-rev gap-4 lg:gap-8'>
        <article className='my-8'>
          <ul className='text-white grid gap-4 px-4 md:px-0 mb-4'>
            {servicesDataArray.map((service, index) => (
              <li key={index}>
                <span className='font-semibold italic text-red-800'>
                  {service.name} -
                </span>{' '}
                {service.description}
              </li>
            ))}
          </ul>
        </article>
        <section className='px-4'>
          <img src={ServiceImage} alt='Services' className='max-h-[60vh] mx-auto shadow-lg shadow-white/40 rounded-lg' />
        </section>
      </section>
    </section>
  );
}

export default ServicesComponent;
