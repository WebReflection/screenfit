/*! (c) Andrea Giammarchi - ISC */
const {
  CustomEvent,
  addEventListener,
  cancelAnimationFrame,
  clearTimeout,
  dispatchEvent,
  document,
  requestAnimationFrame,
  scrollTo,
  setTimeout,
  visualViewport
} = self;
const detail = visualViewport || {
  addEventListener: addEventListener.bind(self),
  get width() { return self.innerWidth; },
  get height() { return self.innerHeight; }
};
const later = () => {
  dispatchEvent(new CustomEvent('screenfit', {detail}));
};
const resize = () => {
  document.body.style.height = detail.height + 'px';
  scrollTo(0, 0);
  // Needed for Windows Phone
  setTimeout(scrollTo, 300, 0, 0);
  if (cancelAnimationFrame) {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(later);
  }
  else {
    clearTimeout(timer);
    timer = setTimeout(later);
  }
};
let timer = 0;
document.head.appendChild(document.createElement('style')).textContent =
'html,body{padding:0;margin:0;overflow:hidden;box-sizing:border-box;\
height:100%;height:100vh;height:-moz-available;height:-webkit-fill-available}';
document.addEventListener('DOMContentLoaded', resize, {once: true});
addEventListener('orientationchange', resize);
detail.addEventListener('resize', resize);
