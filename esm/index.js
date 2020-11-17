/*! (c) Andrea Giammarchi - ISC */
const {
  CustomEvent,
  addEventListener,
  dispatchEvent,
  document,
  scrollTo,
  setTimeout,
  visualViewport
} = self;
const rescroll = /Windows Phone/.test(navigator.userAgent);
const detail = visualViewport || {
  addEventListener: addEventListener.bind(self),
  get width() { return self.innerWidth; },
  get height() { return self.innerHeight; }
};
const resize = () => {
  document.body.style.height = detail.height + 'px';
  scrollTo(0, 0);
  if (rescroll)
    setTimeout(scrollTo, 300, 0, 0);
  dispatchEvent(new CustomEvent('screenfit', {detail}));
};
document.head.appendChild(document.createElement('style')).textContent =
'html,body{padding:0;margin:0;overflow:hidden;box-sizing:border-box;\
height:100%;height:100vh;height:-moz-available;height:-webkit-fill-available}';
document.addEventListener('DOMContentLoaded', resize, {once: true});
detail.addEventListener('resize', resize);
