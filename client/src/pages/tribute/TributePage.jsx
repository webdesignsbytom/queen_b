import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';

function TributePage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/tributes-to-the-queen');
  }, []);

  return (
    <div className='h-dvh w-full '>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <article>
          <div>
            <h1>
              For those who know how to treat a <strong>Queen</strong>
            </h1>
          </div>
          <div>
            <h2>
              Lay your offerings at <span className='italic'>your</span> Queens
              feet.
            </h2>
          </div>
          <div>
            <h3>Those who love are invited to know Her Magisty more!</h3>
          </div>
        </article>
        <div>
          <button>
            <span>Amazon Wishlist</span>
          </button>
        </div>
        <div>
          <button>
            <span>PayPal</span>
          </button>
        </div>
        <div>
          <button>
            <span>Other</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TributePage;
