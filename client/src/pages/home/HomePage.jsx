import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ImageArrayComponent from '../../components/home/ImageArrayComponent';
import KinkyRain from '../../components/canvas/KinkyRain';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import Queen2 from '../../assets/images/queenB/queen4_nb.png';
// Components
import InternalLinkCta from '../../components/cta/InternalLinkCta';
import ContactCta from '../../components/cta/ContactCta';
import HomePageHeader from '../../components/home/HomePageHeader';
import ServicesComponent from '../../components/home/ServicesComponent';

function HomePage() {
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/explore');
    closeNavBar();
  }, []);

  return (
    <div className='h-dvh w-full overflow-x-hidden'>
      <div className='grid grid-rows-homefull md:grid-rows-reg bg-black h-full w-full overflow-x-hidden'>
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        {/* Header */}
        <HomePageHeader />

        {/* Main */}
        <main className='grid bg-black'>
          <div className='md:hidden h-[200px]'>
            <KinkyRain />
          </div>

          <div className='mt-6 md:mt-32 mb-10'>
            {/* Mobile only kinky banner */}
            {/* Content */}
            <div className='grid w-full md:w-[80%] mx-auto h-full'>
              {/* Main desciption */}
              <section className='grid md:grid-cols-eight20 w-full h-full md:ml-10 justify-center'>
                {/* Text */}
                <article className='text-white grid grid-rows-reg z-10'>
                  <div className='text-5xl gothic_font_1 text-center bg-red-800 lg:bg-transparent py-2 mb-4'>
                    <h3>Humble yourself before me!</h3>
                  </div>

                  <section className='w-3/4 mx-auto'>
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

                    <div className='grid md:text-3xl my-8 justify-center'>
                      <div className='grid grid-flow-col mx-auto w-full gap-2 md:gap-10'>
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

                    <div className='grid md:text-3xl my-8 justify-center'>
                      <div className='grid grid-flow-col mx-auto w-full gap-2 md:gap-10'>
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
                <section className='hidden md:grid h-full md:-ml-[20rem] 2xl:-ml-20'>
                  <div className='grid h-full '>
                    <img
                      src={Queen2}
                      className='object-fill w-[80%] h-full'
                      alt='The Queen'
                    />
                  </div>
                </section>
              </section>

              {/* Links CTA */}
              <InternalLinkCta />

              <section className='mt-20'>
                <ImageArrayComponent displayNum={4} />
              </section>

              {/* Services */}
              <ServicesComponent />

              {/* Cta */}
              <ContactCta />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
