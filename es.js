!function(){"use strict";
/*! (c) Andrea Giammarchi - ISC */const{CustomEvent:e,addEventListener:t,cancelAnimationFrame:i,clearTimeout:n,dispatchEvent:a,document:d,requestAnimationFrame:o,scrollTo:r,setTimeout:h,visualViewport:l}=self,s=l||{addEventListener:t.bind(self),get width(){return self.innerWidth},get height(){return self.innerHeight}},g=()=>{a(new e("screenfit",{detail:s}))},c=()=>{d.body.style.height=s.height+"px",r(0,0),h(r,300,0,0),i?(i(m),m=o(g)):(n(m),m=h(g))};let m=0;d.head.appendChild(d.createElement("style")).textContent="html,body{padding:0;margin:0;overflow:hidden;box-sizing:border-box;height:100%;height:100vh;height:-moz-available;height:-webkit-fill-available}",d.addEventListener("DOMContentLoaded",c,{once:!0}),t("orientationchange",c),s.addEventListener("resize",c)}();
