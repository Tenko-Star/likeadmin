System.register([],(function(t){"use strict";return{execute:function(){function r(t,r){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var e=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===r?t:Math.min(r,Math.max(0,parseFloat(t))),e&&(t=parseInt(String(t*r),10)/100),Math.abs(t-r)<1e-6?1:t=360===r?(t<0?t%r+r:t%r)/parseFloat(String(r)):t%r/parseFloat(String(r))}function e(t){return Math.min(1,Math.max(0,t))}function a(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function n(t){return t<=1?"".concat(100*Number(t),"%"):t}function o(t){return 1===t.length?"0"+t:String(t)}function i(t,e,a){t=r(t,255),e=r(e,255),a=r(a,255);var n=Math.max(t,e,a),o=Math.min(t,e,a),i=0,h=0,s=(n+o)/2;if(n===o)h=0,i=0;else{var f=n-o;switch(h=s>.5?f/(2-n-o):f/(n+o),n){case t:i=(e-a)/f+(e<a?6:0);break;case e:i=(a-t)/f+2;break;case a:i=(t-e)/f+4}i/=6}return{h:i,s:h,l:s}}function h(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*e*(r-t):e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}function s(t,e,a){t=r(t,255),e=r(e,255),a=r(a,255);var n=Math.max(t,e,a),o=Math.min(t,e,a),i=0,h=n,s=n-o,f=0===n?0:s/n;if(n===o)i=0;else{switch(n){case t:i=(e-a)/s+(e<a?6:0);break;case e:i=(a-t)/s+2;break;case a:i=(t-e)/s+4}i/=6}return{h:i,s:f,v:h}}function f(t,r,e,a){var n=[o(Math.round(t).toString(16)),o(Math.round(r).toString(16)),o(Math.round(e).toString(16))];return a&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function c(t){return u(t)/255}function u(t){return parseInt(t,16)}var g={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function d(t){var e,o,i,s={r:0,g:0,b:0},f=1,d=null,l=null,b=null,p=!1,y=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;var r=!1;if(g[t])t=g[t],r=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var e=m.rgb.exec(t);return e?{r:e[1],g:e[2],b:e[3]}:(e=m.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=m.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=m.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=m.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=m.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=m.hex8.exec(t))?{r:u(e[1]),g:u(e[2]),b:u(e[3]),a:c(e[4]),format:r?"name":"hex8"}:(e=m.hex6.exec(t))?{r:u(e[1]),g:u(e[2]),b:u(e[3]),format:r?"name":"hex"}:(e=m.hex4.exec(t))?{r:u(e[1]+e[1]),g:u(e[2]+e[2]),b:u(e[3]+e[3]),a:c(e[4]+e[4]),format:r?"name":"hex8"}:!!(e=m.hex3.exec(t))&&{r:u(e[1]+e[1]),g:u(e[2]+e[2]),b:u(e[3]+e[3]),format:r?"name":"hex"}}(t)),"object"==typeof t&&(v(t.r)&&v(t.g)&&v(t.b)?(e=t.r,o=t.g,i=t.b,s={r:255*r(e,255),g:255*r(o,255),b:255*r(i,255)},p=!0,y="%"===String(t.r).substr(-1)?"prgb":"rgb"):v(t.h)&&v(t.s)&&v(t.v)?(d=n(t.s),l=n(t.v),s=function(t,e,a){t=6*r(t,360),e=r(e,100),a=r(a,100);var n=Math.floor(t),o=t-n,i=a*(1-e),h=a*(1-o*e),s=a*(1-(1-o)*e),f=n%6;return{r:255*[a,h,i,i,s,a][f],g:255*[s,a,a,h,i,i][f],b:255*[i,i,s,a,a,h][f]}}(t.h,d,l),p=!0,y="hsv"):v(t.h)&&v(t.s)&&v(t.l)&&(d=n(t.s),b=n(t.l),s=function(t,e,a){var n,o,i;if(t=r(t,360),e=r(e,100),a=r(a,100),0===e)o=a,i=a,n=a;else{var s=a<.5?a*(1+e):a+e-a*e,f=2*a-s;n=h(f,s,t+1/3),o=h(f,s,t),i=h(f,s,t-1/3)}return{r:255*n,g:255*o,b:255*i}}(t.h,d,b),p=!0,y="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(f=t.a)),f=a(f),{ok:p,format:t.format||y,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:f}}var l="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),b="[\\s|\\(]+(".concat(l,")[,|\\s]+(").concat(l,")[,|\\s]+(").concat(l,")\\s*\\)?"),p="[\\s|\\(]+(".concat(l,")[,|\\s]+(").concat(l,")[,|\\s]+(").concat(l,")[,|\\s]+(").concat(l,")\\s*\\)?"),m={CSS_UNIT:new RegExp(l),rgb:new RegExp("rgb"+b),rgba:new RegExp("rgba"+p),hsl:new RegExp("hsl"+b),hsla:new RegExp("hsla"+p),hsv:new RegExp("hsv"+b),hsva:new RegExp("hsva"+p),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function v(t){return Boolean(m.CSS_UNIT.exec(String(t)))}t("T",function(){function t(r,e){var a;if(void 0===r&&(r=""),void 0===e&&(e={}),r instanceof t)return r;"number"==typeof r&&(r=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(r)),this.originalInput=r;var n=d(r);this.originalInput=r,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(a=e.format)&&void 0!==a?a:n.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),r=t.r/255,e=t.g/255,a=t.b/255;return.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=a(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=s(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=s(this.r,this.g,this.b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.v);return 1===this.a?"hsv(".concat(r,", ").concat(e,"%, ").concat(a,"%)"):"hsva(".concat(r,", ").concat(e,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=i(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=i(this.r,this.g,this.b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.l);return 1===this.a?"hsl(".concat(r,", ").concat(e,"%, ").concat(a,"%)"):"hsla(".concat(r,", ").concat(e,"%, ").concat(a,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),f(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,r,e,a,n){var i,h=[o(Math.round(t).toString(16)),o(Math.round(r).toString(16)),o(Math.round(e).toString(16)),o((i=a,Math.round(255*parseFloat(i)).toString(16)))];return n&&h[0].startsWith(h[0].charAt(1))&&h[1].startsWith(h[1].charAt(1))&&h[2].startsWith(h[2].charAt(1))&&h[3].startsWith(h[3].charAt(1))?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),e=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(r,", ").concat(e,")"):"rgba(".concat(t,", ").concat(r,", ").concat(e,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*r(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*r(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+f(this.r,this.g,this.b,!1),r=0,e=Object.entries(g);r<e.length;r++){var a=e[r],n=a[0];if(t===a[1])return n}return!1},t.prototype.toString=function(t){var r=Boolean(t);t=null!=t?t:this.format;var e=!1,a=this.a<1&&this.a>=0;return r||!a||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(r){void 0===r&&(r=10);var a=this.toHsl();return a.l+=r/100,a.l=e(a.l),new t(a)},t.prototype.brighten=function(r){void 0===r&&(r=10);var e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-r/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-r/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-r/100*255))),new t(e)},t.prototype.darken=function(r){void 0===r&&(r=10);var a=this.toHsl();return a.l-=r/100,a.l=e(a.l),new t(a)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(r){void 0===r&&(r=10);var a=this.toHsl();return a.s-=r/100,a.s=e(a.s),new t(a)},t.prototype.saturate=function(r){void 0===r&&(r=10);var a=this.toHsl();return a.s+=r/100,a.s=e(a.s),new t(a)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(r){var e=this.toHsl(),a=(e.h+r)%360;return e.h=a<0?360+a:a,new t(e)},t.prototype.mix=function(r,e){void 0===e&&(e=50);var a=this.toRgb(),n=new t(r).toRgb(),o=e/100;return new t({r:(n.r-a.r)*o+a.r,g:(n.g-a.g)*o+a.g,b:(n.b-a.b)*o+a.b,a:(n.a-a.a)*o+a.a})},t.prototype.analogous=function(r,e){void 0===r&&(r=6),void 0===e&&(e=30);var a=this.toHsl(),n=360/e,o=[this];for(a.h=(a.h-(n*r>>1)+720)%360;--r;)a.h=(a.h+n)%360,o.push(new t(a));return o},t.prototype.complement=function(){var r=this.toHsl();return r.h=(r.h+180)%360,new t(r)},t.prototype.monochromatic=function(r){void 0===r&&(r=6);for(var e=this.toHsv(),a=e.h,n=e.s,o=e.v,i=[],h=1/r;r--;)i.push(new t({h:a,s:n,v:o})),o=(o+h)%1;return i},t.prototype.splitcomplement=function(){var r=this.toHsl(),e=r.h;return[this,new t({h:(e+72)%360,s:r.s,l:r.l}),new t({h:(e+216)%360,s:r.s,l:r.l})]},t.prototype.onBackground=function(r){var e=this.toRgb(),a=new t(r).toRgb();return new t({r:a.r+(e.r-a.r)*e.a,g:a.g+(e.g-a.g)*e.a,b:a.b+(e.b-a.b)*e.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(r){for(var e=this.toHsl(),a=e.h,n=[this],o=360/r,i=1;i<r;i++)n.push(new t({h:(a+i*o)%360,s:e.s,l:e.l}));return n},t.prototype.equals=function(r){return this.toRgbString()===new t(r).toRgbString()},t}())}}}));
