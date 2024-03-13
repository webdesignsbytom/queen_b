import React, { useContext, useEffect } from 'react'
import { ToggleContext } from '../../context/ToggleContext';

function AdminPage() {
  const { setActiveNav, closeNavBar } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/admin');
    closeNavBar();
  }, []);
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage