import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Images
import Logo2 from '../../assets/images/logos/logo1.png';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function Navbar() {
  const { toggleNavbarOpenClosed, toggleNavigation, activeNav, setActiveNav } =
    useContext(ToggleContext);

  let navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/explore', { replace: true });
  };

  return (
    <nav className='grid relative text-yellow-600 border-b-2 border-purple-900 border-solid w-full'>
      {/* Mobile Dropdown */}
      {toggleNavigation && (
        <section className='absolute z-40 bg-black top-[100%] grid md:hidden border-2 border-purple-900 border-solid w-full'>
          <ul className='grid w-full gap-4 items-center p-4'>
            <li>
              <Link className='hover:text-yellow-800' to='/'>
                <span>Welcome</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/explore'>
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-yellow-800'
                to='/gallery-of-the-queen'
              >
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/fetish-pleasure'>
                <span>Fetishes</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/fin-dom-control'>
                <span>Fin-dom</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/kinky-blog'>
                <span>KinkyBlog</span>
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-yellow-800'
                to='/tributes-to-the-queen'
              >
                <span>Tribute</span>
              </Link>
            </li>
          </ul>
        </section>
      )}

      <div className='grid grid-cols-2 md:grid-cols-reg pl-2 2xl:p-1 w-full'>
        {/* Logo */}
        <section className=''>
          <div onClick={navigateToHome}>
            <img
              src={Logo2}
              alt=''
              className='h-16 2xl:h-24 w-16 2xl:w-24 cursor-pointer'
            />
          </div>
        </section>

        {/* Phone Nav button */}
        <section
          onClick={() => {
            toggleNavbarOpenClosed();
          }}
          className='grid items-center justify-end lg:hidden no__highlights pr-4'
        >
          <span className='cursor-pointer text-white hover:text-hover-grey'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-10 h-10 transition no__highlights duration-200 ease-in-out select-none focus:scale-125 active:scale-125'
              data-te-animation-init
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </span>
        </section>

        {/* Nav */}
        <section className='hidden md:grid justify-end h-full w-full'>
          <ul className='grid grid-flow-col w-fit gap-4 items-center pr-8'>
            <li>
              <Link className='hover:text-yellow-800' to='/'>
                <span>Welcome</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/explore'>
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-yellow-800'
                to='/gallery-of-the-queen'
              >
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/fetish-pleasure'>
                <span>Fetishes</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/fin-dom-control'>
                <span>Fin-dom</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/kinky-blog'>
                <span>KinkyBlog</span>
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-yellow-800'
                to='/tributes-to-the-queen'
              >
                <span>Tribute</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
