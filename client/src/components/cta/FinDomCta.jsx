import React from 'react';
import { useNavigate } from 'react-router-dom';

function FinDomCta() {
  let navigate = useNavigate();

  const navigateToFinDomPage = () => {
    navigate('/fin-dom-control', { replace: true });
  };

  return (
    <div className='grid'>
      <div className='grid justify-center h-fit'>
        <button
          onClick={navigateToFinDomPage}
          className='metal_btn metal_btn_style'
        >
          See more of financial domination!
        </button>
      </div>
    </div>
  );
}

export default FinDomCta;
