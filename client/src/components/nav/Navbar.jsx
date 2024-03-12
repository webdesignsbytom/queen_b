import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Images
import Logo2 from '../../assets/images/logos/logo1.png';

function Navbar() {
  let navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/explore', { replace: true });
  };

  return (
    <nav className='grid text-yellow-600 border-b-2 border-purple-900 border-solid'>
      <div className='grid grid-cols-reg pl-2 2xl:p-1'>
        
        {/* Logo */}
        <section className=''>
          <div onClick={navigateToHome}>
            <img src={Logo2} alt='' className='h-16 2xl:h-24 w-16 2xl:w-24 cursor-pointer' />
          </div>
        </section>

        {/* Nav */}
        <section className='grid justify-end h-full w-full'>
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
              <Link className='hover:text-yellow-800' to='/gallery-of-the-queen'>
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/fetish-pleasure'>
                <span>Fetishes</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/'>
                <span>Fin-dom</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/kinky-blog'>
                <span>KinkyBlog</span>
              </Link>
            </li>
            <li>
              <Link className='hover:text-yellow-800' to='/tributes-to-the-queen'>
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
