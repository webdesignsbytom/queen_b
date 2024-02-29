import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Images
import Logo from '../../assets/wdbt-black.svg';

function ParticalCanvas() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const png = new Image();
    png.src = Logo;

    const canvasSize = { width: 300, height: 300 };
    let scaleFactor;

    const drawScene = () => {
      particles.current = [];
      canvas.width = canvasSize.width;
      canvas.height = canvasSize.height;

      // Adjust scale factor based on the image size and desired canvas size
      scaleFactor = Math.min(canvasSize.width / png.width, canvasSize.height / png.height);

      ctx.drawImage(png, 0, 0, png.width * scaleFactor, png.height * scaleFactor);

      const data = ctx.getImageData(0, 0, png.width * scaleFactor, png.height * scaleFactor);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0, y2 = data.height; y < y2; y++) {
        for (let x = 0, x2 = data.width; x < x2; x++) {
          if (data.data[y * 4 * data.width + x * 2 + 3] > 128) {
            const particle = {
              x0: x,
              y0: y,
              x1: (png.width * scaleFactor) / 2,
              y1: (png.height * scaleFactor) / 2,
              speed: 1,
            };
            gsap.to(particle, {
              duration: particle.speed,
              x1: particle.x0,
              y1: particle.y0,
              delay: y / 20,
              ease: 'elastic.out',
            });
            particles.current.push(particle);
          }
        }
      }

      requestAnimationFrame(render);
    };

    const render = () => {
      requestAnimationFrame(render);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0, j = particles.current.length; i < j; i++) {
        const particle = particles.current[i];
        ctx.fillRect(particle.x1 * scaleFactor, particle.y1 * scaleFactor, 1, 1); // Adjust position based on scale factor
      }
    };

    png.onload = () => {
      drawScene();
      window.addEventListener('click', drawScene);
    };

    return () => window.removeEventListener('click', drawScene);
  }, []);

  return <canvas ref={canvasRef} id='scene' />;
}

export default ParticalCanvas;
