/*! (c) Andrea Giammarchi - ISC */
const {
  CustomEvent,
  addEventListener,
  clearTimeout,
  dispatchEvent,
  document,
  scrollTo,
  setTimeout,
  visualViewport
} = self;
const detail = visualViewport || {
  addEventListener: addEventListener.bind(self),
  get width() { return self.innerWidth; },
  get height() { return self.innerHeight; }
};
const OC = 'orientationchange';
const later = () => {
  dispatchEvent(new CustomEvent('screenfit', {detail}));
  return 0;
};
const resize = ({type}) => {
  document.body.style.height = detail.height + 'px';
  scrollTo(0, 0);
  // Needed for Windows Phone
  setTimeout(scrollTo, 300, 0, 0);
  clearTimeout(timer);
  timer = type === OC ? setTimeout(later, 50) : later();
};
let timer = 0;
document.head.appendChild(document.createElement('style')).textContent =
'html,body{padding:0;margin:0;overflow:hidden;box-sizing:border-box;\
height:100%;height:100vh;height:-moz-available;height:-webkit-fill-available}';
document.addEventListener('DOMContentLoaded', resize, {once: true});
addEventListener(OC, resize);
detail.addEventListener('resize', resize);
