import React, { useEffect } from 'react';

function HomePage() {
  
  useEffect(() => {
    let canvas, gl, ratio, cw, ch, colorLoc, drawType, numLines = 100000;
    let target = [];
    let id;
    let isScroll = false;

    const imageURLArr = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/facebook.png",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/google.png",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/instgram.png",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/pinterest.png",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/twitter.png",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13842/github.png"];

    const snsNameArr = ["Facebook", "Google+", "Instagram", "Pinterest", "Twitter", "GitHub"];
    const myLinkAccount = ['https://www.facebook.com/kenjiSpecial', 'https://plus.google.com/u/1/109436453854978092848/about', 'https://instagram.com/kenji_special/', 'https://www.pinterest.com/kenjispecial/', 'https://twitter.com/kenji_special', 'https://github.com/kenjiSpecial'];

    let perspectiveMatrix;
    let randomTargetXArr = [], randomTargetYArr = [];
    drawType = 0;
    let count = 0;

    let footerDom = document.getElementById("main-footer");
    let footerContainer = document.getElementById('footer-container');
    let boxTopDom = document.getElementById('box_top_text');
    let boxFrontDom = document.getElementById('box_front_text');
    let boxBottomDom = document.getElementById('box_bottom_text');

    function init() {
      canvas = document.createElement("canvas");
      let ctx = canvas.getContext('2d');

      for (let ii = 0; ii < imageURLArr.length; ii++) {
        let image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = imageURLArr[ii];

        image.onload = onLoadImageHandler.bind(this, image, canvas, ctx, ii);
      }
    }

    function onLoadImageHandler(image, canvas, ctx, number) {
      let size = image.width;
      canvas.width = size;
      canvas.height = size;

      ctx.drawImage(image, 0, 0)
      let imageData = ctx.getImageData(0, 0, size, size);

      let data = imageData.data;
      target[number] = [];

      for (let ii = 0; ii < data.length; ii += 4) {
        if (data[ii] === 0) {
          let pixNumber = ii / 4;
          let xPos = pixNumber % size;
          let yPos = parseInt(pixNumber / size);
          let pos = { x: xPos / size - .5, y: -yPos / size + 0.5 };
          target[number].push(pos);
        }
      }

      count++;

      if (count === imageURLArr.length) {
        setText();
        footerDom.style.display = "block";

        loadScene();
      }
    }

    function setText() {
      let topDrawType = drawType - 1 < 0 ? snsNameArr.length - 1 : drawType - 1;
      let botDrawType = drawType + 1 > snsNameArr.length - 1 ? 0 : drawType + 1;

      boxTopDom.innerHTML = snsNameArr[topDrawType];
      boxTopDom.href = myLinkAccount[topDrawType];

      boxFrontDom.innerHTML = snsNameArr[drawType];
      boxFrontDom.href = myLinkAccount[drawType];

      boxBottomDom.innerHTML = snsNameArr[botDrawType];
      boxBottomDom.href = myLinkAccount[botDrawType];
    }

    function loadScene() {
      canvas = document.getElementById("c");
      gl = canvas.getContext("experimental-webgl");

      if (!gl) {
        alert("There's no WebGL context available.");
        return;
      }

      cw = window.innerWidth;
      ch = window.innerHeight;
      canvas.width = cw;
      canvas.height = ch;
      gl.viewport(0, 0, canvas.width, canvas.height);

      // Rest of your WebGL initialization code here...
    }

    init();

    return () => {
      // Cleanup code if necessary
    };
  }, []); // Empty dependency array means this useEffect runs only once after the initial render

  return (
    <div className='h-dvh w-full overflow-hidden'>
      <div className='grid h-full w-full items-center justify-center'>
        <canvas id='c'></canvas>
      </div>
    </div>
  );
}

export default HomePage;
