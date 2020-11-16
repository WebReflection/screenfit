/*! (c) Andrea Giammarchi - ISC */
const {addEventListener, document, visualViewport} = self;
const detail = visualViewport || {
  addEventListener: addEventListener.bind(self),
  get width() { return self.innerWidth; },
  get height() { return self.innerHeight; }
};
document.head.appendChild(document.createElement('style')).textContent =
'html,body{padding:0;margin:0;overflow:hidden;box-sizing:border-box;\
height:100%;height:100vh;height:-moz-available;height:-webkit-fill-available}';
document.addEventListener('DOMContentLoaded', resize, {once: true});
addEventListener('orientationchange', setTimeout.bind(null, resize, 0));
detail.addEventListener('resize', resize);
function resize() {
  document.body.style.height = detail.height + 'px';
  scrollTo(0, 0);
  // Needed for Windows Phone
  setTimeout(scrollTo, 300, 0, 0);
  dispatchEvent(new CustomEvent('screenfit', {detail}));
}
