System.register(["./clipboard-legacy.4032b320.js"],(function(e){"use strict";var o;return{setters:[e=>{o=e.C}],execute:function(){e("u",(e=>{const t=void 0===(null==e?void 0:e.appendToBody)||e.appendToBody;return{toClipboard:(e,n)=>new Promise(((d,c)=>{const r=document.createElement("button"),i=new o(r,{text:()=>e,action:()=>"copy",container:void 0!==n?n:document.body});i.on("success",(e=>{i.destroy(),d(e)})),i.on("error",(e=>{i.destroy(),c(e)})),t&&document.body.appendChild(r),r.click(),t&&document.body.removeChild(r)}))}}))}}}));
