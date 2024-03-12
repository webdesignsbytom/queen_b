import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function GalleryPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/gallery-of-the-queen');
  }, []);

  return <div>GalleryPage</div>;
}

export default GalleryPage;
