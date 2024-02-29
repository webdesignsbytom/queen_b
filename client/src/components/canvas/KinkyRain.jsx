import React, { useEffect, useRef } from 'react';
import CuffsImage from '../../assets/cuffs.png';

function KinkyRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 352;

    let particlesArray = [];
    const numberOfParticles = 12000;
    const detail = 1;

    // Define the calculateBrightness function here
    function calculateBrightness(red, green, blue) {
      return Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      );
    }

    // Define the Particle class here
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.5;
        this.size = Math.random() * 1.25;
      }
      update(grid) {
        // Ensure x and y are within the bounds of the grid
        const gridY = Math.floor(this.y / detail);
        const gridX = Math.floor(this.x / detail);

        // Check if gridY and gridX are within bounds
        if (
          gridY >= 0 &&
          gridY < grid.length &&
          gridX >= 0 &&
          gridX < grid[gridY].length
        ) {
          this.speed = grid[gridY][gridX];
        } else {
          this.speed = 0; // Default speed if out of bounds, adjust as needed
        }

        let movement = 2.5 - this.speed + this.velocity;
        this.y += movement;

        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        // Optionally, add similar logic for x if it can go out of bounds
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Load image and create particles
    const image = new Image();
    image.src = CuffsImage; // Updated to use the imported PNG image
    
    image.onload = function () {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let grid = [];
      for (let y = 0; y < canvas.height; y += detail) {
        let row = [];
        for (let x = 0; x < canvas.width; x += detail) {
          const red = pixels.data[y * 4 * pixels.width + x * 4];
          const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
          const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
          const brightness = calculateBrightness(red, green, blue) / 100;
          row.push(brightness);
        }
        grid.push(row);
      }

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }

      function animate() {
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update(grid);
          ctx.globalAlpha = particlesArray[i].speed * 0.5;
          particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
      }
      animate();
    };

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      const id = window.requestAnimationFrame(() => {});
      window.cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div className='h-dvh w-full overflow-hidden'>
      <div className='grid h-full w-full items-center justify-center'>
        <canvas id='canvas1' className='index_canvas' ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default KinkyRain;
