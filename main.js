'use strict'

const cursor = document.getElementById('cursor');

const moveCursor = (e)=> {
  const mouseY = e.clientY - 40;
  const mouseX = e.clientX - 40;
   
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor);


