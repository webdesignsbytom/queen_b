import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function AdminPage() {
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/admin');
    closeNavBar();
  }, []);

  return (
    <div className='grid h-dvh w-full overflow-hidden'>
      <div className='grid bg-black overflow-hidden'>
        {/* Main Content */}
        <main className='grid relative h-full w-full justify-center items-center'>
          <p className='text-white'>ADMIIN</p>
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
