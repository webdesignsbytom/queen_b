import React, { useEffect, useRef } from 'react';
import LogoImage from '../../assets/trees.jpeg'

const ParticleEffectCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const totalWidth = window.innerWidth;
    const totalHeight = window.innerHeight;
    const canvas = canvasRef.current;
    canvas.width = totalWidth;
    canvas.height = totalHeight;
    const context = canvas.getContext('2d');

    const nyuImg = new Image();
    nyuImg.src = LogoImage; // Make sure this path is correct and accessible
    nyuImg.onload = function() {
      canvasApp();
    };

    const canvasApp = () => {
      context.drawImage(nyuImg, totalWidth * 0.5 - 100, totalHeight * 0.5 - 100, 200, 200);

      // Assuming imgdata is obtained here somehow, after drawing the image
      // For the demo, let's assume we have imgdata ready to use
      // In a real-world scenario, you'd need to handle cross-origin issues or use images hosted on the same domain

      // Example code, replace with actual image data handling
      const imgdata = context.getImageData(0, 0, canvas.width, canvas.height);
      const particles = [];
      const cols = 200;
      const rows = 200;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const pos = [(j - 1) * imgdata.width + (i - 1)] * 4;
          if (imgdata.data[pos] > 50) {
            const particle = {
              x: totalWidth * 0.5 - 100 + i + (Math.random() - 0.5) * 20,
              y: totalHeight * 0.5 - 100 + j + (Math.random() - 0.5) * 20,
              fillStyle: `rgb(${imgdata.data[pos]},${imgdata.data[pos + 1]},${imgdata.data[pos + 2]})`,
            };
            particles.push(particle);
          }
        }
      }

      context.clearRect(0, 0, totalWidth, totalHeight);
      particles.forEach(particle => {
        context.fillStyle = particle.fillStyle;
        context.fillRect(particle.x, particle.y, 1, 1);
      });
    };

    // Cleanup function to potentially stop or clear the canvas if component unmounts
    return () => {
      // Clean up actions if necessary
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default ParticleEffectCanvas;
