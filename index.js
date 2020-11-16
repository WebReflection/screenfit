(function () {
  'use strict';

  /*! (c) Andrea Giammarchi - ISC */
  var _self = self,
      addEventListener = _self.addEventListener,
      document = _self.document,
      visualViewport = _self.visualViewport;
  var detail = visualViewport || {
    addEventListener: addEventListener.bind(self),

    get width() {
      return self.innerWidth;
    },

    get height() {
      return self.innerHeight;
    }

  };
  document.head.appendChild(document.createElement('style')).textContent = 'html,body{padding:0;margin:0;overflow:hidden;box-sizing:border-box;\
height:100%;height:100vh;height:-moz-available;height:-webkit-fill-available}';
  document.addEventListener('DOMContentLoaded', resize, {
    once: true
  });
  addEventListener('orientationchange', resize);
  detail.addEventListener('resize', resize);

  function resize() {
    document.body.style.height = detail.height + 'px';
    scrollTo(0, 0); // Needed for Windows Phone

    setTimeout(scrollTo, 300, 0, 0);
    dispatchEvent(new CustomEvent('screenfit', {
      detail: detail
    }));
  }

}());
