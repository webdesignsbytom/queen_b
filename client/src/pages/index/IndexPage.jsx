import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import KinkyRain from '../../components/canvas/KinkyRain';

function IndexPage() {
  let navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate('/home', { replace: true });
  };

  return (
    <div className='grid h-dvh w-full overflow-hidden'>
      <div className='grid bg-black overflow-hidden'>
        {/* Main Content */}
        <main className='grid grid-rows-2 h-full w-full overflow-hidden'>
          {/* Header - introduction */}
          <header className='text-white grid overflow-hidden'>
            <div className='grid mx-auto my-auto'>
              <section className='grid h-fit w-fit text-center pb-6'>
                <div>
                  <h1 className='gothic_font_1 text-[98px]'>
                    <strong>QUEEN B</strong>
                  </h1>
                </div>
                <section className='text-xl grid gap-2'>
                  <div>
                    <h2>
                      The beautiful and divine Queen B welcomes
                      <span className='italic'> you!</span>
                    </h2>
                  </div>
                  <div>
                    <h3>
                      A lustful and sensuously kinky Mistress who's very
                      presence commands your devotion.
                    </h3>
                  </div>
                  <div>
                    Kneel, worship and delight in sinful pleasure with Queen B,
                    remember her rules and remember your manors.
                  </div>
                  <div>
                    Offering the strictest service with the highest pleasure.
                  </div>
                </section>
              </section>

              <section className='grid pt-4'>
                {/* Same font at Queen B */}
                <div className='grid justify-center py-2'>
                  <button onClick={navigateToHomePage} className='px-10 py-2 shadow shadow-white rounded-md bg-purple-900 active:scale-95 hover:brightness-95 text-white text-xl font-semibold uppercase '>
                    Enter
                  </button>
                </div>
              </section>
            </div>
          </header>

          {/* Animation */}
          <section className='grid grid-rows-reg h-full overflow-hidden'>
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
          </section>
        </main>
      </div>
    </div>
  );
}

export default IndexPage;
