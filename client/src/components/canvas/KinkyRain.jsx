import React, { useEffect, useRef } from 'react';
// Images
import CuffsImage from '../../assets/images/animation/cuffs.png';
import WhipImage from '../../assets/images/animation/whip.png';
import CageImage from '../../assets/images/animation/cage.png';
import StraponImage from '../../assets/images/animation/strapon.png';

function KinkyRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 200;

    let particlesArray = [];
    const numberOfParticles = 7000;
    const detail = 1;

    function calculateBrightness(red, green, blue) {
      return Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      );
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.5;
        this.size = Math.random() * 1.25;
      }

      update(grid) {
        const gridY = Math.floor(this.y / detail);
        const gridX = Math.floor(this.x / detail);
        if (gridY >= 0 && gridY < grid.length && gridX >= 0 && gridX < grid[gridY].length) {
          this.speed = grid[gridY][gridX];
        } else {
          this.speed = 0;
        }

        let movement = 2.5 - this.speed + this.velocity;
        this.y += movement;

        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const images = [CuffsImage, WhipImage, CageImage, StraponImage];
    let loadedImages = 0;
    let grid = [];

    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = function () {
        // Adjust the size and position to make images half size and centered
        const quarterWidth = canvas.width / 4;
        const imgWidth = quarterWidth / 2; // Half of the quarter width
        const imgHeight = canvas.height / 2; // Half of the canvas height
        const xOffset = index * quarterWidth + (quarterWidth - imgWidth) / 2; // Center horizontally
        const yOffset = (canvas.height - imgHeight) / 2; // Center vertically

        ctx.drawImage(img, xOffset, yOffset, imgWidth, imgHeight);
        loadedImages++;
        if (loadedImages === images.length) {
          const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
          ctx.clearRect(0, 0, canvas.width, canvas.height);

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

          animate();
        }
      };
    });

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

    return () => {
      const id = window.requestAnimationFrame(() => {});
      window.cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div className='grid h-full w-full overflow-hidden'>
      <div className='grid h-full w-full items-center justify-center'>
        <canvas id='canvas1' className='index_canvas' ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default KinkyRain;
