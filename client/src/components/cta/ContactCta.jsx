import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactCta() {
  let navigate = useNavigate();

  const navigateToContactPage = () => {
    navigate('/contact', { replace: true });
  };

  return (
    <div className='grid justify-center py-6'>
      <button
        onClick={navigateToContactPage}
        className='metal_btn metal_btn_style'
      >
        Contact your Queen now
      </button>
    </div>
  );
}

export default ContactCta;
