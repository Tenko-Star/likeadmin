import{L as C,v as b,M as w,$ as A,t as k,N as y,O as D}from"./element-plus.3267595b.js";import{s as x,_ as L}from"./edit.vue_vue_type_script_setup_true_lang.f6d50538.js";import{d as F,s as T,$,af as N,o as a,c as R,U as t,L as e,M as d,K as u,S as l}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.dc901930.js";import"./axios.1b9edf64.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.25da4054.js";import"./lodash.864c9e8f.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.d2d58e3e.js";import"./color.258a8a7e.js";import"./clone.50f9fc80.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./nprogress.fd5383c2.js";import"./vue-clipboard3.cdc6794b.js";import"./clipboard.63214189.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";import"./index.6e8124f7.js";const S={class:"storage"},M=l("\u5F00\u542F"),V=l("\u5173\u95ED"),z=l(" \u8BBE\u7F6E "),K=F({name:"storage"}),vt=F({...K,setup(O){const m=T(),o=$({loading:!1,lists:[]}),p=async()=>{try{o.loading=!0,o.lists=await x(),o.loading=!1}catch{o.loading=!1}},f=i=>{var r;(r=m.value)==null||r.open(i)};return p(),(i,r)=>{const g=C,c=b,s=w,_=A,B=k,E=y,h=N("perms"),v=D;return a(),R("div",S,[t(c,{class:"!border-none",shadow:"never"},{default:e(()=>[t(g,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),d((a(),u(c,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(E,{size:"large",data:o.lists},{default:e(()=>[t(s,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),t(s,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"path","min-width":"160"}),t(s,{label:"\u72B6\u6001","min-width":"80"},{default:e(({row:n})=>[n.status==1?(a(),u(_,{key:0},{default:e(()=>[M]),_:1})):(a(),u(_,{key:1,type:"danger"},{default:e(()=>[V]),_:1}))]),_:1}),t(s,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({row:n})=>[d((a(),u(B,{type:"primary",link:"",onClick:U=>f(n.engine)},{default:e(()=>[z]),_:2},1032,["onClick"])),[[h,["setting.storage/setup"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[v,o.loading]]),t(L,{ref_key:"editRef",ref:m,onSuccess:p},null,512)])}}});export{vt as default};
