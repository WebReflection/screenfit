(function () {
  'use strict';

  /*! (c) Andrea Giammarchi - ISC */
  var _self = self,
      CustomEvent = _self.CustomEvent,
      addEventListener = _self.addEventListener,
      clearTimeout = _self.clearTimeout,
      dispatchEvent = _self.dispatchEvent,
      document = _self.document,
      scrollTo = _self.scrollTo,
      setTimeout = _self.setTimeout,
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
  var OC = 'orientationchange';

  var later = function later() {
    dispatchEvent(new CustomEvent('screenfit', {
      detail: detail
    }));
    return 0;
  };

  var resize = function resize(_ref) {
    var type = _ref.type;
    document.body.style.height = detail.height + 'px';
    scrollTo(0, 0); // Needed for Windows Phone

    setTimeout(scrollTo, 300, 0, 0);
    clearTimeout(timer);
    timer = type === OC ? setTimeout(later, 50) : later();
  };

  var timer = 0;
  document.head.appendChild(document.createElement('style')).textContent = 'html,body{padding:0;margin:0;overflow:hidden;box-sizing:border-box;\
height:100%;height:100vh;height:-moz-available;height:-webkit-fill-available}';
  document.addEventListener('DOMContentLoaded', resize, {
    once: true
  });
  addEventListener(OC, resize);
  detail.addEventListener('resize', resize);

}());
