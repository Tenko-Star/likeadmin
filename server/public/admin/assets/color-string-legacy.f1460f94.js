System.register(["./color-name-legacy.592a2748.js"],(function(r){"use strict";var t;return{setters:[r=>{t=r.c}],execute:function(){var n=t;function e(r){if(r){var t=[0,0,0],e=1,a=r.match(/^#([a-fA-F0-9]{3})$/);if(a){a=a[1];for(var s=0;s<t.length;s++)t[s]=parseInt(a[s]+a[s],16)}else if(a=r.match(/^#([a-fA-F0-9]{6})$/))for(a=a[1],s=0;s<t.length;s++)t[s]=parseInt(a.slice(2*s,2*s+2),16);else if(a=r.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(s=0;s<t.length;s++)t[s]=parseInt(a[s+1]);e=parseFloat(a[4])}else if(a=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(s=0;s<t.length;s++)t[s]=Math.round(2.55*parseFloat(a[s+1]));e=parseFloat(a[4])}else if(a=r.match(/(\D+)/)){if("transparent"==a[1])return[0,0,0,0];if(!(t=n[a[1]]))return}for(s=0;s<t.length;s++)t[s]=f(t[s],0,255);return e=e||0==e?f(e,0,1):1,t[3]=e,t}}function a(r){if(r){var t=r.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(t){var n=parseFloat(t[4]);return[f(parseInt(t[1]),0,360),f(parseFloat(t[2]),0,100),f(parseFloat(t[3]),0,100),f(isNaN(n)?1:n,0,1)]}}}function s(r){if(r){var t=r.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(t){var n=parseFloat(t[4]);return[f(parseInt(t[1]),0,360),f(parseFloat(t[2]),0,100),f(parseFloat(t[3]),0,100),f(isNaN(n)?1:n,0,1)]}}}function i(r,t){return void 0===t&&(t=void 0!==r[3]?r[3]:1),"rgba("+r[0]+", "+r[1]+", "+r[2]+", "+t+")"}function o(r,t){return"rgba("+Math.round(r[0]/255*100)+"%, "+Math.round(r[1]/255*100)+"%, "+Math.round(r[2]/255*100)+"%, "+(t||r[3]||1)+")"}function u(r,t){return void 0===t&&(t=void 0!==r[3]?r[3]:1),"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+t+")"}function f(r,t,n){return Math.min(Math.max(t,r),n)}function c(r){var t=r.toString(16).toUpperCase();return t.length<2?"0"+t:t}r("c",{getRgba:e,getHsla:a,getRgb:function(r){var t=e(r);return t&&t.slice(0,3)},getHsl:function(r){var t=a(r);return t&&t.slice(0,3)},getHwb:s,getAlpha:function(r){var t=e(r);return t||(t=a(r))||(t=s(r))?t[3]:void 0},hexString:function(r){return"#"+c(r[0])+c(r[1])+c(r[2])},rgbString:function(r,t){return t<1||r[3]&&r[3]<1?i(r,t):"rgb("+r[0]+", "+r[1]+", "+r[2]+")"},rgbaString:i,percentString:function(r,t){if(t<1||r[3]&&r[3]<1)return o(r,t);var n=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),a=Math.round(r[2]/255*100);return"rgb("+n+"%, "+e+"%, "+a+"%)"},percentaString:o,hslString:function(r,t){return t<1||r[3]&&r[3]<1?u(r,t):"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)"},hslaString:u,hwbString:function(r,t){return void 0===t&&(t=void 0!==r[3]?r[3]:1),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+(void 0!==t&&1!==t?", "+t:"")+")"},keyword:function(r){return g[r.slice(0,3)]}});var g={};for(var d in n)g[n[d]]=d}}}));
