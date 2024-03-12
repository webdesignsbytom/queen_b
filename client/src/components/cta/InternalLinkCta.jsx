import React from 'react';
import { Link } from 'react-router-dom';

function InternalLinkCta() {
  return (
    <section className='grid w-full mt-24'>
      <div className='grid grid-cols-3 gothic_font_1 text-4xl w-1/2 mx-auto'>
        <div className='grid justify-center'>
          <Link to='/gallery-of-the-queen'>
            <div className='grid bg-yellow-600 outline outline-yellow-800 outline-2 px-6 py-4 w-fit hover:bg-purple-900 hover:text-white'>
              <span>Gallery</span>
            </div>
          </Link>
        </div>
        <div className='grid justify-center'>
          <Link to='/fetish-pleasure'>
            <div className='grid bg-yellow-600 outline outline-yellow-800 outline-2 px-6 py-4 w-fit hover:bg-purple-900 hover:text-white'>
              <span>Fetishes</span>
            </div>
          </Link>
        </div>
        <div className='grid justify-center'>
          <Link to='/tributes-to-the-queen'>
            <div className='grid bg-yellow-600 outline outline-yellow-800 outline-2 px-6 py-4 w-fit hover:bg-purple-900 hover:text-white'>
              <span>Tribute</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InternalLinkCta;
