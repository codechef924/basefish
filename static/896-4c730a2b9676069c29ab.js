"use strict";(self.webpackChunkgodlfish_static_landing_page=self.webpackChunkgodlfish_static_landing_page||[]).push([[896],{7896:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(978),a=n(6540),i=n(5848);n(2729);let r;const c=new WeakMap,l=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function d(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function u(e,t,n,o,a,i){const r=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=n.has(t);function s(e){this.removeEventListener("load",s);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{d(this,c),null==a||a({wasCached:l})})).catch((e=>{d(this,c),null==i||i(e)})):(d(this,c),null==a||a({wasCached:l}))}return r.addEventListener("load",s),null==o||o({wasCached:l}),Array.from(r.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),r.complete&&s.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",s)}}function g(e,t,a,i,s,d,g){if(!(0,o.h)()){let o;const f=(m=()=>{o=u(e,t,a,s,d,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==l?void 0:l.effectiveType)||null!=l&&l.saveData?"2500px":"1250px"})),function(e){return c.set(e,m),r.observe(e),function(){r&&e&&(c.delete(e),r.unobserve(e))}}):function(){return m(),function(){}}),v=f(e);var b,h;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=i.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(h=i.objectPosition)?h:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(452).then(n.t.bind(n,1452,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),v()}}var m;return u(e,t,a,s,d,g)}function b(e){let{image:t,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:l,imgStyle:d={},objectPosition:u,backgroundColor:g,objectFit:b="cover"}=e,h=(0,o._)(e,s);const{width:m,height:f,layout:v,images:w,placeholder:y,backgroundColor:p}=t;return d=(0,o.a)({objectFit:b,objectPosition:u,backgroundColor:g},d),(0,i.qV)(a.createElement(o.L,{layout:v,width:m,height:f},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,v,m,f,p,b,u))),a.createElement(o.M,(0,o.a)({},h,{width:m,height:f,className:l},(0,o.b)(r,c,w,n,d)))))}}}]);
//# sourceMappingURL=896-4c730a2b9676069c29ab.js.map