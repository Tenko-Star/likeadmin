import{w as l}from"./element-plus.317dd699.js";import{a as u}from"./vue-router.12d45bc3.js";import{d,r as _,G as v,o as a,c as f,a as r,H as B,T as i,K as x,L as y,S as g,u as E,R as h}from"./@vue.e8706010.js";import{d as k}from"./index.ffa405f0.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.f7363e4f.js";import"./axios.3af9fe4b.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.873faf2b.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.1a2c9cae.js";import"./color.3050aad5.js";import"./clone.3b081931.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.21f7a9fd.js";import"./ms.a9ae1d6d.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";const w={class:"error"},S={class:"error-code"},C={class:"text-lg text-tx-secondary mt-7 mb-7"},D=d({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const n=t;let o=null;const e=_(5),s=u();return n.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),s.go(-1)):e.value--},1e3)),v(()=>{o&&clearInterval(o)}),(p,m)=>{const c=l;return a(),f("div",w,[r("div",null,[B(p.$slots,"content",{},()=>[r("div",S,i(t.code),1)],!0),r("div",C,i(t.title),1),t.showBtn?(a(),x(c,{key:0,type:"primary",onClick:m[0]||(m[0]=I=>E(s).go(-1))},{default:y(()=>[g(i(e.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):h("",!0)])])}}});const pt=k(D,[["__scopeId","data-v-a47523cc"]]);export{pt as default};