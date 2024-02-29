import React, { useEffect, useRef, useState } from 'react';

function WebGLCanvas() {
  const canvasRef = useRef(null);
  const [gl, setGl] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const glCtx = canvas.getContext('webgl');

    if (!glCtx) {
      console.error(
        'Unable to initialize WebGL. Your browser may not support it.'
      );
      return;
    }

    setGl(glCtx);
    loadScene(glCtx);

    return () => {
      cancelAnimationFrame(animate); // Ensure animation loop is stopped on unmount
    };
  }, []); // Runs once on component mount

  const loadScene = (gl) => {
    // Implement your loadScene function here (use gl parameter instead of global gl)
  };

  const animate = () => {
    // Implement your animation loop here
    requestAnimationFrame(animate);
  };

  return <canvas ref={canvasRef} className='bg-red-400' />;
}

export default WebGLCanvas;
