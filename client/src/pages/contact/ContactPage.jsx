import React, { useContext, useEffect } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';

function ContactPage() {
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/contact');
    closeNavBar();
  }, []);

  return (
    <div className="h-dvh w-full grid">
      <div className="grid grid-rows-reg bg-black h-full w-full text-white">
        {/* Navigation */}
        <Navbar />

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center">Contact Queen B</h1>
          <p className="text-center">
            To book a session or inquire about services, please use one of the contact methods below.
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p>
                <a href="mailto:queenb@example.com" className="text-red-500 hover:underline">
                  queenb@example.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Twitter</h2>
              <p>
                <a href="https://twitter.com/queenb" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                  @QueenB
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">OnlyFans</h2>
              <p>
                <a href="https://onlyfans.com/queenb" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                  onlyfans.com/queenb
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Tributes & Gifts</h2>
              <p>
                Show your devotion by sending a tribute through{' '}
                <a href="https://cashapp.com/$QueenB" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                  CashApp ($QueenB)
                </a>{' '}
                or{' '}
                <a href="https://www.amazon.com/hz/wishlist/ls/QUEENB" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                  Amazon Wishlist
                </a>.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400">
            All inquiries must be respectful and serious. Any unsolicited messages or disrespect will result in an immediate block.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
