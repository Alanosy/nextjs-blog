"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{4898:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var u=n(5893),c=n(7294),r=n(305),i=n.n(r);function o(){var e=(0,c.useState)(document.documentElement.clientHeight),t=e[0],n=e[1],r=(0,c.useState)(document.documentElement.scrollHeight),o=r[0],a=r[1],f=(0,c.useState)(0),l=f[0],d=f[1],v=(0,c.useState)(0),m=v[0],E=v[1],h=(0,c.useState)(0),g=h[0],k=h[1],p=(0,c.useCallback)((function(){var e=o-t;if(e<=0)E(0),k(t);else{var n=t+.5*e;E(.5*e*(l/e)),k(n)}}),[t,o,l]),S=function(){var e=document.documentElement,t=e.clientHeight,u=e.scrollHeight,c=e.scrollTop;n(t),a(u),d(c)};return(0,c.useEffect)((function(){p()})),s("scroll",S),s("resize",S),(0,u.jsx)("div",{id:"LayoutBG",className:i().layoutBG,style:{height:g,top:-m}})}function s(e,t,n){var u=void 0===n?window:n,r=(0,c.useRef)(t);(0,c.useEffect)((function(){r.current=t}),[t]),(0,c.useEffect)((function(){if(u&&u.addEventListener){var t=function(e){return r.current(e)};return u.addEventListener(e,t),function(){u.removeEventListener(e,t)}}}),[e,u])}}}]);