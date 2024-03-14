import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import Logo from '../../assets/images/logos/logo2.png';
import Queen1 from '../../assets/images/queenB/queen1_nb.png';
import Queen2 from '../../assets/images/queenB/queen6_nb.png';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function IndexPage() {
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  const [isHovering, setIsHovering] = useState(false)
  let navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate('/explore', { replace: true });
  };

  const hoverOver = () => {
    setIsHovering(true)
  }
  const hoverLeave = () => {
    setIsHovering(false)
  }

  useEffect(() => {
    setActiveNav('/');
    closeNavBar();
  }, []);

  return (
    <div className='grid h-dvh w-full overflow-hidden'>
      <div className='grid bg-black overflow-hidden'>
        {/* Main Content */}
        <main className='grid relative h-full w-full justify-center items-center'>
          {/* Background images */}
          <div className='absolute top-5 md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 slow_fade_in_animation md:blur-sm'>
            <img
              src={Logo}
              alt='Goddess logo'
              className='object-contain w-2/3 h-2/3 my-auto mx-auto'
            />
          </div>

          <div className='absolute -left-24 slow_fade_in_animation h-full blur-miss'>
            <img
              src={Queen1}
              alt='Goddess herself'
              className='object-fill h-full'
            />
          </div>

          <div className='hidden md:grid absolute top-1/2 -right-24 transform -translate-y-1/2 slow_fade_in_animation blur-miss'>
            <img
              src={Queen2}
              alt='Goddess herself'
              className='object-contain h-full'
            />
          </div>


          {/* Header - introduction */}
          <header className='grid overflow-hidden fade_in_animation'>
            <article className='grid text-center mt-2 md:mt-0 pb-6 text-white'>
              <section>
                <div>
                  <h1 className='gothic_font_1 text-[122px] text-purple-900 text__stroke'>
                    <strong>QUEEN B</strong>
                  </h1>
                </div>
                <div>
                  <h2 className='text-xl'>
                    The beautiful and divine Queen B welcomes
                    <span className='italic'> you!</span>
                  </h2>
                </div>
              </section>

              <section className='text-xl grid gap-2'>
                <div>
                  <h3>
                    A lustful and sensuously kinky <strong className='text-red-700'>Goddess</strong> who's very presence
                    commands your devotion!
                  </h3>
                </div>
                <div>
                  <h4>
                    Kneel, worship and <span className='italic'>delight</span> in sinful pleasure with <strong className='text-yellow-600'>Queen B</strong>,
                    remember her rules and remember your manours.
                  </h4>
                </div>
                <div>
                  <h5>
                    Offering the strictest service with the <span className='italic'>highest</span> pleasure.
                  </h5>
                </div>
              </section>
            </article>

            <section className='grid pt-4'>
              {/* Same font at Queen B */}
              <div className='grid justify-center py-2'>
                <button
                  onClick={navigateToHomePage}
                  onMouseEnter={hoverOver}
                  onMouseLeave={hoverLeave}
                  className='metal_btn metal_btn_style w-[300px] text-white'
                >
                  {isHovering ? (
                    <span>SUBMIT</span>
                  ) : (
                    <span>ENTER NOW</span>
                  )}
                </button>
              </div>
            </section>
          </header>w
        </main>
      </div>
    </div>
  );
}

export default IndexPage;
