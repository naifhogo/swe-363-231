let screensaverTimeout;

function startScreensaver() {
  const screensaver = document.getElementById('screensaver');
  screensaver.style.display = 'flex';

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const time = Date.now() * 0.001;
    const x = Math.cos(time) * 100 + canvas.width / 2;
    const y = Math.sin(time) * 100 + canvas.height / 2;
    const size = Math.sin(time) * 50 + 50;

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

   
    requestAnimationFrame(drawFrame);
  }


  drawFrame();


  document.addEventListener('mousemove', resetScreensaver);
  document.addEventListener('keydown', resetScreensaver);
  document.addEventListener('click', resetScreensaver);
}

function resetScreensaver() {
  clearTimeout(screensaverTimeout);
  const screensaver = document.getElementById('screensaver');
  screensaver.style.display = 'none';
  screensaverTimeout = setTimeout(startScreensaver, 9999);
}


screensaverTimeout = setTimeout(startScreensaver, 9999);