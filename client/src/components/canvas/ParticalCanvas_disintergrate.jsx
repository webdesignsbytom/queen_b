import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Import SVG directly
import Logo from '../../assets/wdbt-black.svg';

function ParticalCanvas() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 300; // Set canvas size
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    const svg = new Image();
    svg.src = Logo; // Use imported SVG

    svg.onload = () => {
      // Draw the SVG onto the canvas
      ctx.drawImage(svg, 0, 0, 300, 300); // Scale SVG to fit the canvas size

      // Convert canvas drawing to imageData for particle effect
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'black';

      for (let y = 0; y < data.height; y++) {
        for (let x = 0; x < data.width; x++) {
          if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
            const particle = {
              x0: x,
              y0: y,
              x1: x, // Adjusted to spread from original position
              y1: y, // Adjusted to spread from original position
              speed: Math.random() * 4 + 2,
            };
            gsap.to(particle, {
              duration: particle.speed,
              x1: x + (Math.random() - 0.5) * 50, // Random spread
              y1: y + (Math.random() - 0.5) * 50, // Random spread
              delay: y / 300, // Adjusted delay for effect
              ease: 'elastic.out',
            });
            particles.current.push(particle);
          }
        }
      }

      const render = () => {
        requestAnimationFrame(render);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.current.forEach(particle => {
          ctx.fillRect(particle.x1, particle.y1, 2, 2); // Adjusted particle size
        });
      };

      requestAnimationFrame(render);
    };

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('click', drawScene);
    };
  }, []);

  // Function to trigger redraw (Not defined in original code snippet)
  const drawScene = () => {
    // Implementation for redrawing or re-initializing particles
  };

  return <canvas ref={canvasRef} id="scene" />;
}

export default ParticalCanvas;
