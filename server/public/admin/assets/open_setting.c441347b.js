import{_ as v}from"./index.3579cd88.js";import{K as w,I as C,B as b,C as V,D as y,w as S}from"./element-plus.317dd699.js";import{r as d}from"./index.acad0f4e.js";import{d as F,$ as k,s as x,af as I,o as _,c as R,U as e,L as u,M as q,K as N,a as n,S as U}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.f7363e4f.js";import"./axios.3af9fe4b.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.873faf2b.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.1a2c9cae.js";import"./color.3050aad5.js";import"./clone.3b081931.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.21f7a9fd.js";import"./ms.a9ae1d6d.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";function K(a){return d.post({url:"/channel.open_setting/setConfig",params:a})}function O(){return d.get({url:"/channel.open_setting/getConfig"})}const L=n("div",{class:"font-medium mb-7"},"\u7F51\u7AD9\u5E94\u7528",-1),M={class:"w-80"},T={class:"w-80"},$=U("\u4FDD\u5B58"),j=F({name:"wxDevConfig"}),Ce=F({...j,setup(a){const t=k({app_id:"",app_secret:""}),s=x(),f={app_id:[{required:!0,message:"\u8BF7\u8F93\u5165AppID",trigger:["blur","change"]}],app_secret:[{required:!0,message:"\u8BF7\u8F93\u5165AppSecret",trigger:["blur","change"]}]},i=async()=>{const r=await O();for(const o in t)t[o]=r[o]},E=async()=>{var r;await((r=s.value)==null?void 0:r.validate()),await K(t),i()};return i(),(r,o)=>{const g=w,l=C,m=b,c=V,B=y,D=S,A=v,h=I("perms");return _(),R("div",null,[e(l,{class:"!border-none",shadow:"never"},{default:u(()=>[e(g,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u586B\u5199\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u5F00\u53D1\u914D\u7F6E\uFF0C\u8BF7\u524D\u5F80\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u521B\u5EFA\u5E94\u7528\u5E76\u5B8C\u6210\u8BA4\u8BC1\uFF1B\u7F51\u7AD9\u5E94\u7528\u914D\u7F6E\u4E3B\u8981\u7528\u4E8E\u7F51\u7AD9\u5FAE\u4FE1\u767B\u5F55\u548C\u5FAE\u4FE1\u652F\u4ED8",closable:!1,"show-icon":""})]),_:1}),e(B,{ref_key:"formRef",ref:s,model:t,rules:f,"label-width":"160px"},{default:u(()=>[e(l,{class:"!border-none mt-4",shadow:"never"},{default:u(()=>[L,e(c,{label:"AppID",prop:"app_id"},{default:u(()=>[n("div",M,[e(m,{modelValue:t.app_id,"onUpdate:modelValue":o[0]||(o[0]=p=>t.app_id=p),placeholder:"\u8BF7\u8F93\u5165AppID"},null,8,["modelValue"])])]),_:1}),e(c,{label:"AppSecret",prop:"app_secret"},{default:u(()=>[n("div",null,[n("div",T,[e(m,{modelValue:t.app_secret,"onUpdate:modelValue":o[1]||(o[1]=p=>t.app_secret=p),placeholder:"\u8BF7\u8F93\u5165AppSecret"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1},8,["model"]),q((_(),N(A,null,{default:u(()=>[e(D,{type:"primary",onClick:E},{default:u(()=>[$]),_:1})]),_:1})),[[h,["channel.open_setting/setConfig"]]])])}}});export{Ce as default};