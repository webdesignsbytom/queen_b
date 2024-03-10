import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Images
import Logo1 from '../../assets/wdbt-black.svg';
import Logo2 from '../../assets/logos/queen_b_logo_1.png';

function Navbar() {
  let navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home', { replace: true });
  };

  return (
    <nav className='grid text-white border-b-2 border-purple-900 border-solid'>
      <div className='grid grid-cols-reg p-1'>
        
        {/* Logo */}
        <section className=''>
          <div onClick={navigateToHome}>
            <img src={Logo2} alt='' className='h-24 w-24 cursor-pointer' />
          </div>
        </section>

        {/* Nav */}
        <section className='grid justify-end h-full w-full'>
          <ul className='grid grid-flow-col w-fit gap-4 items-center pr-8'>
            <li>
              <Link to='/'>
                <span>Welcome</span>
              </Link>
            </li>
            <li>
              <Link to='/home'>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/gallery-of-the-queen'>
                <span>Gallery</span>
              </Link>
            </li>
            <li>
              <Link to='/fetish-pleasure'>
                <span>Fetishes</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span>Fin-dom</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span>KinkyBlog</span>
              </Link>
            </li>
            <li>
              <Link to='/tributes-to-the-queen'>
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
