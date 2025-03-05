import React, { useContext, useEffect } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
import { payLinksArray } from '../../utils/data/PaylinkData';
// Images
import FinDomImage from '../../assets/images/queenB/queen6.png';
import PsychImage from '../../assets/images/queenB/queen7.png';
import KeyImage from '../../assets/images/queenB/key.webp';

function FinDomPage() {
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/kinky-blog');
    closeNavBar();
  }, []);

  return (
    <div className='h-dvh w-full grid'>
      <div className='grid grid-rows-reg bg-black h-full w-full'>
        {/* Navigation */}
        <Navbar />
        <header className='mt-10 lg:mt-16 mb-8 px-6'>
          <h1 className='text-center text-yellow-600 text-4xl gothic_font_1'>
            Financial Domination <br /> With Queen B{' '}
          </h1>
        </header>
        {/* FinDom Section */}
        <main className='px-6 grid gap-20 lg:w-[60%] lg:mx-auto lg:mt-12'>
          <section className='grid lg:grid-cols-rev gap-6'>
            <section className='lg:order-last'>
              <img
                src={FinDomImage}
                alt='Queen B'
                className='lg:max-h-[60vh] rounded-md shadow-lg shadow-white/40'
              />
            </section>
            <section className='px-4 mt-8'>
              <h2 className='text-2xl gothic_font_1 text-yellow-600 text-center lg:text-left mb-2'>
                What is FinDom?
              </h2>
              <p className='text-white'>
                Financial Domination (FinDom) is a kink or fetish where one
                individual, typically the submissive, gives money, gifts, or
                services to the dominant person as a form of submission. This
                can involve cash, gift cards, or even paying bills as a way of
                showing obedience and respect. The submissive gains pleasure
                from the act of giving, often accompanied by feelings of
                humiliation, guilt, or worship. The dominant individual, known
                as the "FinDom" or "Mistress," receives the financial tribute,
                enjoying the power dynamic it creates.
              </p>
              <p className='text-white mt-2'>
                FinDom plays on the psychology of control, trust, and
                submission. For some, it’s an intimate form of service to a
                powerful figure, while for others, it may involve complex,
                transactional relationships that are deeply fulfilling.
              </p>
            </section>
          </section>

          {/* Key Holding Section */}
          <section className='grid lg:grid-cols-reg gap-6'>
            <section className='grid'>
              <img
                src={KeyImage}
                alt='Queen B'
                className='h-full w-full min-h-12 lg:max-h-[60vh] rounded-md shadow-lg shadow-white/40'
              />
            </section>
            <section className='p-4'>
              <h2 className='text-2xl gothic_font_1 text-yellow-600 text-center lg:text-left mb-2'>
                Key Holding
              </h2>
              <p className='text-white'>
                Key holding involves the dominant individual taking control of
                the submissive’s chastity device key. The submissive is not
                allowed to unlock it without the dominant’s permission, which
                adds an additional layer of control and power exchange. This
                power dynamic heightens the submissive's sense of vulnerability
                and surrender.
              </p>
              <p className='text-white mt-2'>
                Chastity play is often used to intensify the feelings of
                dependence, desire, and frustration for the submissive, as they
                are left in a state of heightened arousal while being denied
                release. The dominant holds the key to this power and is in
                complete control, deciding when or if the submissive may achieve
                their release.
              </p>
            </section>
          </section>

          {/* Additional Section Example: */}
          <section className='grid lg:grid-cols-rev gap-6'>
            <section className='grid lg:order-last'>
              <img
                src={PsychImage}
                alt='Queen B'
                className='h-full lg:max-h-[60vh] rounded-md shadow-lg shadow-white/40'
              />
            </section>
            <section className='p-4'>
              <h2 className='text-2xl gothic_font_1 text-yellow-600 text-center lg:text-left mb-2'>
                The Psychological Impact
              </h2>
              <p className='text-white'>
                Engaging in FinDom and key holding often involves complex
                psychological play. The submissive may feel a range of emotions,
                from deep devotion to frustration, while the dominant enjoys the
                psychological control and influence over their submissive's
                emotions and actions. These forms of power exchange can foster
                intense emotional bonds.
              </p>
            </section>
          </section>

          {/* Payment Links Section */}
          <section className='p-4'>
            <h2 className='text-2xl text-yellow-600 mb-2 gothic_font_1'>Support My Journey</h2>
            <p className='text-white mb-4'>
              If you'd like to show your appreciation, you can support me
              through the following links. Your contributions help me continue
              creating content and offering a personalized experience.
            </p>

            <ul className=''>
              {payLinksArray.map((link, index) => (
                <li key={index} className='mb-4'>
                  <a
                    href={link.link}
                    className='text-yellow-600 underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {link.title}
                  </a>
                  <p className='text-white mt-1'>{link.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default FinDomPage;
