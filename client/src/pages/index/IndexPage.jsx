import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import KinkyRain from '../../components/canvas/KinkyRain';
// Images
import Logo from '../../assets/images/logos/logo2.png';
import Queen1 from '../../assets/images/queenB/queen1_nb.png';
import Queen2 from '../../assets/images/queenB/queen6_nb.png';

function IndexPage() {
  let navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate('/explore', { replace: true });
  };

  return (
    <div className='grid h-dvh w-full overflow-hidden'>
      <div className='grid bg-black overflow-hidden'>
        {/* Main Content */}
        <main className='grid relative h-full w-full justify-center items-center'>
          {/* Background images */}
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 slow_fade_in_animation blur-sm'>
            <img
              src={Logo}
              alt='Goddess logo'
              className='object-contain w-2/3 h-2/3 my-auto mx-auto'
            />
          </div>

          <div className='absolute -left-24 slow_fade_in_animation h-full blur-sm'>
            <img
              src={Queen1}
              alt='Goddess herself'
              className='object-fill h-full'
            />
          </div>

          <div className='absolute top-1/2 -right-24 transform -translate-y-1/2 slow_fade_in_animation blur-sm'>
            <img
              src={Queen2}
              alt='Goddess herself'
              className='object-contain h-full'
            />
          </div>


          {/* Header - introduction */}
          <header className='grid  overflow-hidden fade_in_animation'>
            <article className='grid text-center pb-6 text-white'>
              <section>
                <div>
                  <h1 className='gothic_font_1 text-[98px]'>
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
                    A lustful and sensuously kinky Goddess who's very presence
                    commands your devotion.
                  </h3>
                </div>
                <div>
                  <h4>
                    Kneel, worship and delight in sinful pleasure with Queen B,
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
                  className='metal_btn metal_btn_style'
                >
                  Enter Now
                </button>
              </div>
            </section>
          </header>

          {/* Animation */}
          {/* <section className='grid grid-rows-reg h-full overflow-hidden'>
            <article className='grid w-fit mx-auto mt-4 overflow-hidden'>
              <div className='text-white'>
                <p>
                  Her pleasure is <span className='italic'>your</span> pleasure!
                  See what Queen B has instore!
                </p>
              </div>
            </article>

            <section className='grid overflow-hidden'>
              <div className='relative overflow-hidden'>
                <KinkyRain />
              </div>
            </section>
          </section> */}
        </main>
      </div>
    </div>
  );
}

export default IndexPage;
