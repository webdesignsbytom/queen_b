import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ImageArrayComponent from '../../components/home/ImageArrayComponent';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import Logo from '../../assets/images/logos/logo2.png';
import BackgroundImage1 from '../../assets/images/general/bg1.jpg';
import Queen1 from '../../assets/images/queenB/queen1_nb.png';
import Queen2 from '../../assets/images/queenB/queen4_nb.png';
import InternalLinkCta from '../../components/cta/InternalLinkCta';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/explore');
  }, []);

  return (
    <div className='h-dvh w-full '>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        {/* Header */}
        <header className='grid mt-4 2xl:mt-6 relative'>
          <section className='grid w-3/4 mx-auto'>
            <div>
              <img src={BackgroundImage1} className='w-full h-full blur-sm' alt="Background" />
            </div>
          </section>

          <section className='absolute top-1/2 transform left-24 -translate-y-1/2'>
            <div>
              <img src={Logo} className='md:w-[300px] 2xl:w-[500px]' alt='Logo' />
            </div>
          </section>

          <section className='absolute top-1/2 transform -right-10 2xl:right-10 -translate-x-1/2 -translate-y-1/2 h-full'>
            <div className='grid h-full'>
              <img src={Queen1} className='object-cover w-full h-full' alt='The Queen' />
            </div>
          </section>

          <section className='absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2'>
            <div className='grid bg-[#00000070] px-4 rounded-lg py-2 text-center gothic_font_1'>
              <div>
                <h1 className='text-yellow-600 text-6xl font-bold'>
                  Call me Queen B <span className='italic'>or</span> Goddess
                </h1>
              </div>
              <div className='mt-1'>
                <h2 className='text-yellow-600 text-3xl font-bold'>
                  Welcome to my{' '}
                  <span className='text-white font-bold italic'>sinful</span>{' '}
                  pleasure palace!
                </h2>
              </div>
            </div>
          </section>
        </header>

        {/* Main */}
        <main className='grid bg-black'>
          <div className='mt-32 mb-10'>
            {/* Content */}
            <div className='grid w-[80%] mx-auto h-full'>
              
              {/* Main desciption */}
              <section className='grid grid-cols-eight20 w-full h-full ml-10'>

                {/* Text */}
                <article className='text-white grid grid-rows-reg z-10'>
                  <div className='text-5xl gothic_font_1'>
                    <h3>Humble yourself before me!</h3>
                  </div>

                  <section className='w-3/4'>
                    <div className='pt-2 md:text-xl 2xl:text-2xl'>
                      <p>
                        <span className='italic text-3xl'>
                          I do not need you.
                        </span>{' '}
                        You need me. I choose to want you, for you to serve me,
                        for you to provide for me, to make my life easier, and
                        to train you in a way that fits in with my hierarchical
                        goals. You will be a part of a pecking order, and that
                        starts with you under my heel.
                      </p>
                    </div>

                    <div className='grid text-3xl my-8 justify-center'>
                      <div className='grid grid-flow-col mx-auto w-full gap-10'>
                        <div>WHORES</div>
                        <div>&#10070; </div>
                        <div className='text-pink-400'>SISSIES</div>
                        <div>&#10070; </div>
                        <div>SADISM</div>
                      </div>
                    </div>

                    <div className='pt-2 md:text-xl 2xl:text-2xl'>
                      <p>
                        You can try and get my attention, a Queen loves to be
                        entertained by her servants after all. Consider yourself
                        my experiments, my toys, my play things. I desire to be
                        served. I expect to be served, in what ever way suits me
                        best to what I believe you can offer me. This includes
                        anything from shopping trips, days out, and eventually
                        to real time sessions. I'm not looking for role players,
                        people who just want to scene and fantasize. I am
                        looking for submissives who are genuine and want more
                        out of submission to a Dominant woman, rather than just
                        a quick fix. Remember, I am a lifestyle Domme. I live
                        this life as much as I can, so it is not a game to me.
                      </p>
                    </div>

                    <div className='grid text-3xl my-8 justify-center'>
                      <div className='grid grid-flow-col mx-auto w-full gap-10'>
                        <div>PLEASURE</div>
                        <div>&#10070; </div>
                        <div className='text-red-600'>PAIN</div>
                        <div>&#10070; </div>
                        <div>SUBMIT</div>
                      </div>
                    </div>

                    <div className='pt-2 md:text-xl 2xl:text-2xl'>
                      <p>
                        I have found that contentment and inner peace comes from
                        knowing who you are, accepting who you are and being
                        proud of that. I hold the rainbow flag high and proud
                        every day, and being a poly, pansexual person, I can
                        explore that so much more here. I started out exploring
                        ENM, and that has developed over the last couple of
                        years. In that time, I have come to know myself in a way
                        that is intimidating to others, but it has brought me to
                        this point, and given me so much more confidence that I
                        hold my head high every day now.
                      </p>
                    </div>
                  </section>
                </article>

                {/* Image */}
                <section className='grid  h-full md:-ml-[20rem] 2xl:-ml-20'>
                  <div className='grid h-full '>
                    <img src={Queen2} className='object-fill w-[80%] h-full' alt='The Queen' />
                  </div>
                </section>

              </section>

              {/* Links CTA */}
              <InternalLinkCta />

              <section className='mt-20'>
                <ImageArrayComponent displayNum={4} />
              </section>
              {/* Secondary article - images */}
            </div>
          </div>
          {/* <div className='grid bg-red-400 w-2/3 mx-auto'>
              main
              <ImageArrayComponent />
            </div> */}
        </main>
      </div>
    </div>
  );
}

export default HomePage;
