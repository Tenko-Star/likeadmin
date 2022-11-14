System.register([],(function(e){"use strict";return{execute:function(){var t="top",n="bottom",r="right",o="left",i="auto",a=[t,n,r,o],s="start",f="end",c="viewport",u="popper",p=a.reduce((function(e,t){return e.concat([t+"-"+s,t+"-"+f])}),[]),l=e("E",[].concat(a,[i]).reduce((function(e,t){return e.concat([t,t+"-"+s,t+"-"+f])}),[])),d=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function h(e){return e?(e.nodeName||"").toLowerCase():null}function m(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof m(e).Element||e instanceof Element}function g(e){return e instanceof m(e).HTMLElement||e instanceof HTMLElement}function y(e){return"undefined"!=typeof ShadowRoot&&(e instanceof m(e).ShadowRoot||e instanceof ShadowRoot)}var b={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];!g(o)||!h(o)||(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!g(r)||!h(r)||(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function x(e){return e.split("-")[0]}var w=Math.max,O=Math.min,j=Math.round;function E(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(g(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=j(n.width)/a||1),i>0&&(o=j(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function D(e){var t=E(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function A(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&y(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function L(e){return m(e).getComputedStyle(e)}function k(e){return["table","td","th"].indexOf(h(e))>=0}function M(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function P(e){return"html"===h(e)?e:e.assignedSlot||e.parentNode||(y(e)?e.host:null)||M(e)}function W(e){return g(e)&&"fixed"!==L(e).position?e.offsetParent:null}function B(e){for(var t=m(e),n=W(e);n&&k(n)&&"static"===L(n).position;)n=W(n);return n&&("html"===h(n)||"body"===h(n)&&"static"===L(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&g(e)&&"fixed"===L(e).position)return null;var n=P(e);for(y(n)&&(n=n.host);g(n)&&["html","body"].indexOf(h(n))<0;){var r=L(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function H(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function R(e,t,n){return w(e,O(t,n))}function T(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function S(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var C={name:"arrow",enabled:!0,phase:"main",fn:function(e){var i,s=e.state,f=e.name,c=e.options,u=s.elements.arrow,p=s.modifiersData.popperOffsets,l=x(s.placement),d=H(l),h=[o,r].indexOf(l)>=0?"height":"width";if(u&&p){var m=function(e,t){return T("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:S(e,a))}(c.padding,s),v=D(u),g="y"===d?t:o,y="y"===d?n:r,b=s.rects.reference[h]+s.rects.reference[d]-p[d]-s.rects.popper[h],w=p[d]-s.rects.reference[d],O=B(u),j=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,E=b/2-w/2,A=m[g],L=j-v[h]-m[y],k=j/2-v[h]/2+E,M=R(A,k,L),P=d;s.modifiersData[f]=((i={})[P]=M,i.centerOffset=M-k,i)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"==typeof r&&!(r=t.elements.popper.querySelector(r))||!A(t.elements.popper,r)||(t.elements.arrow=r))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function q(e){return e.split("-")[1]}var V={top:"auto",right:"auto",bottom:"auto",left:"auto"};function N(e){var i,a=e.popper,s=e.popperRect,c=e.placement,u=e.variation,p=e.offsets,l=e.position,d=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,g=e.isFixed,y=p.x,b=void 0===y?0:y,x=p.y,w=void 0===x?0:x,O="function"==typeof v?v({x:b,y:w}):{x:b,y:w};b=O.x,w=O.y;var E=p.hasOwnProperty("x"),D=p.hasOwnProperty("y"),A=o,k=t,P=window;if(h){var W=B(a),H="clientHeight",R="clientWidth";W===m(a)&&"static"!==L(W=M(a)).position&&"absolute"===l&&(H="scrollHeight",R="scrollWidth"),(c===t||(c===o||c===r)&&u===f)&&(k=n,w-=(g&&W===P&&P.visualViewport?P.visualViewport.height:W[H])-s.height,w*=d?1:-1),c!==o&&(c!==t&&c!==n||u!==f)||(A=r,b-=(g&&W===P&&P.visualViewport?P.visualViewport.width:W[R])-s.width,b*=d?1:-1)}var T,S=Object.assign({position:l},h&&V),C=!0===v?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:j(t*r)/r||0,y:j(n*r)/r||0}}({x:b,y:w}):{x:b,y:w};return b=C.x,w=C.y,d?Object.assign({},S,((T={})[k]=D?"0":"",T[A]=E?"0":"",T.transform=(P.devicePixelRatio||1)<=1?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",T)):Object.assign({},S,((i={})[k]=D?w+"px":"",i[A]=E?b+"px":"",i.transform="",i))}var I={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:x(t.placement),variation:q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,N(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,N(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},F={passive:!0},U={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=m(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,F)})),s&&f.addEventListener("resize",n.update,F),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,F)})),s&&f.removeEventListener("resize",n.update,F)}},data:{}},z={left:"right",right:"left",bottom:"top",top:"bottom"};function _(e){return e.replace(/left|right|bottom|top/g,(function(e){return z[e]}))}var X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,(function(e){return X[e]}))}function G(e){var t=m(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(e){return E(M(e)).left+G(e).scrollLeft}function K(e){var t=L(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Q(e){return["html","body","#document"].indexOf(h(e))>=0?e.ownerDocument.body:g(e)&&K(e)?e:Q(P(e))}function Z(e,t){var n;void 0===t&&(t=[]);var r=Q(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=m(r),a=o?[i].concat(i.visualViewport||[],K(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Z(P(a)))}function $(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ee(e,t){return t===c?$(function(e){var t=m(e),n=M(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+J(e),y:s}}(e)):v(t)?function(e){var t=E(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):$(function(e){var t,n=M(e),r=G(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=w(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=w(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+J(e),f=-r.scrollTop;return"rtl"===L(o||n).direction&&(s+=w(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(M(e)))}function te(e,t,n){var r="clippingParents"===t?function(e){var t=Z(P(e)),n=["absolute","fixed"].indexOf(L(e).position)>=0&&g(e)?B(e):e;return v(n)?t.filter((function(e){return v(e)&&A(e,n)&&"body"!==h(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ee(e,n);return t.top=w(r.top,t.top),t.right=O(r.right,t.right),t.bottom=O(r.bottom,t.bottom),t.left=w(r.left,t.left),t}),ee(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ne(e){var i,a=e.reference,c=e.element,u=e.placement,p=u?x(u):null,l=u?q(u):null,d=a.x+a.width/2-c.width/2,h=a.y+a.height/2-c.height/2;switch(p){case t:i={x:d,y:a.y-c.height};break;case n:i={x:d,y:a.y+a.height};break;case r:i={x:a.x+a.width,y:h};break;case o:i={x:a.x-c.width,y:h};break;default:i={x:a.x,y:a.y}}var m=p?H(p):null;if(null!=m){var v="y"===m?"height":"width";switch(l){case s:i[m]=i[m]-(a[v]/2-c[v]/2);break;case f:i[m]=i[m]+(a[v]/2-c[v]/2)}}return i}function re(e,o){void 0===o&&(o={});var i=o,s=i.placement,f=void 0===s?e.placement:s,p=i.boundary,l=void 0===p?"clippingParents":p,d=i.rootBoundary,h=void 0===d?c:d,m=i.elementContext,g=void 0===m?u:m,y=i.altBoundary,b=void 0!==y&&y,x=i.padding,w=void 0===x?0:x,O=T("number"!=typeof w?w:S(w,a)),j=g===u?"reference":u,D=e.rects.popper,A=e.elements[b?j:g],L=te(v(A)?A:A.contextElement||M(e.elements.popper),l,h),k=E(e.elements.reference),P=ne({reference:k,element:D,strategy:"absolute",placement:f}),W=$(Object.assign({},D,P)),B=g===u?W:k,H={top:L.top-B.top+O.top,bottom:B.bottom-L.bottom+O.bottom,left:L.left-B.left+O.left,right:B.right-L.right+O.right},R=e.modifiersData.offset;if(g===u&&R){var C=R[f];Object.keys(H).forEach((function(e){var o=[r,n].indexOf(e)>=0?1:-1,i=[t,n].indexOf(e)>=0?"y":"x";H[e]+=C[i]*o}))}return H}var oe={name:"flip",enabled:!0,phase:"main",fn:function(e){var f=e.state,c=e.options,u=e.name;if(!f.modifiersData[u]._skip){for(var d=c.mainAxis,h=void 0===d||d,m=c.altAxis,v=void 0===m||m,g=c.fallbackPlacements,y=c.padding,b=c.boundary,w=c.rootBoundary,O=c.altBoundary,j=c.flipVariations,E=void 0===j||j,D=c.allowedAutoPlacements,A=f.options.placement,L=x(A),k=g||(L!==A&&E?function(e){if(x(e)===i)return[];var t=_(e);return[Y(e),t,Y(t)]}(A):[_(A)]),M=[A].concat(k).reduce((function(e,t){return e.concat(x(t)===i?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,s=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?l:c,d=q(r),h=d?f?p:p.filter((function(e){return q(e)===d})):a,m=h.filter((function(e){return u.indexOf(e)>=0}));0===m.length&&(m=h);var v=m.reduce((function(t,n){return t[n]=re(e,{placement:n,boundary:o,rootBoundary:i,padding:s})[x(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(f,{placement:t,boundary:b,rootBoundary:w,padding:y,flipVariations:E,allowedAutoPlacements:D}):t)}),[]),P=f.rects.reference,W=f.rects.popper,B=new Map,H=!0,R=M[0],T=0;T<M.length;T++){var S=M[T],C=x(S),V=q(S)===s,N=[t,n].indexOf(C)>=0,I=N?"width":"height",F=re(f,{placement:S,boundary:b,rootBoundary:w,altBoundary:O,padding:y}),U=N?V?r:o:V?n:t;P[I]>W[I]&&(U=_(U));var z=_(U),X=[];if(h&&X.push(F[C]<=0),v&&X.push(F[U]<=0,F[z]<=0),X.every((function(e){return e}))){R=S,H=!1;break}B.set(S,X)}if(H)for(var G=function(e){var t=M.find((function(t){var n=B.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},J=E?3:1;J>0&&"break"!==G(J);J--);f.placement!==R&&(f.modifiersData[u]._skip=!0,f.placement=R,f.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ie(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[t,r,n,o].some((function(t){return e[t]>=0}))}var se={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=re(t,{elementContext:"reference"}),s=re(t,{altBoundary:!0}),f=ie(a,r),c=ie(s,o,i),u=ae(f),p=ae(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}},fe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var n=e.state,i=e.options,a=e.name,s=i.offset,f=void 0===s?[0,0]:s,c=l.reduce((function(e,i){return e[i]=function(e,n,i){var a=x(e),s=[o,t].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},n,{placement:e})):i,c=f[0],u=f[1];return c=c||0,u=(u||0)*s,[o,r].indexOf(a)>=0?{x:u,y:c}:{x:c,y:u}}(i,n.rects,f),e}),{}),u=c[n.placement],p=u.x,d=u.y;null!=n.modifiersData.popperOffsets&&(n.modifiersData.popperOffsets.x+=p,n.modifiersData.popperOffsets.y+=d),n.modifiersData[a]=c}},ce={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ue={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var i=e.state,a=e.options,f=e.name,c=a.mainAxis,u=void 0===c||c,p=a.altAxis,l=void 0!==p&&p,d=a.boundary,h=a.rootBoundary,m=a.altBoundary,v=a.padding,g=a.tether,y=void 0===g||g,b=a.tetherOffset,j=void 0===b?0:b,E=re(i,{boundary:d,rootBoundary:h,padding:v,altBoundary:m}),A=x(i.placement),L=q(i.placement),k=!L,M=H(A),P=function(e){return"x"===e?"y":"x"}(M),W=i.modifiersData.popperOffsets,T=i.rects.reference,S=i.rects.popper,C="function"==typeof j?j(Object.assign({},i.rects,{placement:i.placement})):j,V="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),N=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,I={x:0,y:0};if(W){if(u){var F,U="y"===M?t:o,z="y"===M?n:r,_="y"===M?"height":"width",X=W[M],Y=X+E[U],G=X-E[z],J=y?-S[_]/2:0,K=L===s?T[_]:S[_],Q=L===s?-S[_]:-T[_],Z=i.elements.arrow,$=y&&Z?D(Z):{width:0,height:0},ee=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[U],ne=ee[z],oe=R(0,T[_],$[_]),ie=k?T[_]/2-J-oe-te-V.mainAxis:K-oe-te-V.mainAxis,ae=k?-T[_]/2+J+oe+ne+V.mainAxis:Q+oe+ne+V.mainAxis,se=i.elements.arrow&&B(i.elements.arrow),fe=se?"y"===M?se.clientTop||0:se.clientLeft||0:0,ce=null!=(F=null==N?void 0:N[M])?F:0,ue=X+ae-ce,pe=R(y?O(Y,X+ie-ce-fe):Y,X,y?w(G,ue):G);W[M]=pe,I[M]=pe-X}if(l){var le,de="x"===M?t:o,he="x"===M?n:r,me=W[P],ve="y"===P?"height":"width",ge=me+E[de],ye=me-E[he],be=-1!==[t,o].indexOf(A),xe=null!=(le=null==N?void 0:N[P])?le:0,we=be?ge:me-T[ve]-S[ve]-xe+V.altAxis,Oe=be?me+T[ve]+S[ve]-xe-V.altAxis:ye,je=y&&be?function(e,t,n){var r=R(e,t,n);return r>n?n:r}(we,me,Oe):R(y?we:ge,me,y?Oe:ye);W[P]=je,I[P]=je-me}i.modifiersData[f]=I}},requiresIfExists:["offset"]};function pe(e,t,n){void 0===n&&(n=!1);var r=g(t),o=g(t)&&function(e){var t=e.getBoundingClientRect(),n=j(t.width)/e.offsetWidth||1,r=j(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=M(t),a=E(e,o),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==h(t)||K(i))&&(s=function(e){return e!==m(e)&&g(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):G(e)}(t)),g(t)?((f=E(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=J(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function le(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function de(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var he={placement:"bottom",modifiers:[],strategy:"absolute"};function me(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ve(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?he:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},he,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"==typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:v(e)?Z(e):e.contextElement?Z(e.contextElement):[],popper:Z(t)};var u=function(e){var t=le(e);return d.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(me(t,n)){o.rects={reference:pe(t,B(n),"fixed"===o.options.strategy),popper:D(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,u=void 0===c?{}:c,p=i.name;"function"==typeof a&&(o=a({state:o,options:u,name:p,instance:f})||o)}else o.reset=!1,r=-1}}},update:de((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!me(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}ve(),ve({defaultModifiers:[U,ce,I,b]}),e("y",ve({defaultModifiers:[U,ce,I,b,fe,oe,ue,C,se]}))}}}));
