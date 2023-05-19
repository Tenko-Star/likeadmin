import{_ as N}from"./index.d0452994.js";import{r as F,b as T,d as R}from"./index.25da4054.js";import{I as $,J as z,F as G,G as L,v as M,t as q,D as J,M as K,N as j}from"./element-plus.3267595b.js";import{d as x,$ as H,e as O,af as P,o as i,c as p,U as t,L as e,M as v,K as E,a as s,V as Q,a7 as W,u as X,S as u,T as Y,b7 as Z,b6 as tt}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./lodash.864c9e8f.js";import"./axios.1b9edf64.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.d2d58e3e.js";import"./color.258a8a7e.js";import"./clone.50f9fc80.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./@element-plus.196c7323.js";import"./nprogress.fd5383c2.js";import"./vue-clipboard3.cdc6794b.js";import"./clipboard.63214189.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";import"./lodash-es.29c53eac.js";import"./dayjs.dc901930.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";function et(){return F.get({url:"/setting.hot_search/getConfig"})}function ot(r){return F.post({url:"/setting.hot_search/setConfig",params:r})}const _=r=>(Z("data-v-1f7b34ef"),r=r(),tt(),r),st={class:"hot-search"},at=u("\u5F00\u542F"),nt=u("\u5173\u95ED"),lt=_(()=>s("div",{class:"form-tips"},"\u9ED8\u8BA4\u5F00\u542F\uFF0C\u5173\u95ED\u5219\u524D\u7AEF\u4E0D\u663E\u793A\u8BE5\u529F\u80FD",-1)),rt={class:"lg:flex"},ct={class:"flex-1 min-w-0"},it=u("\u6DFB\u52A0"),ut=u(" \u5220\u9664 "),_t={class:"hot-search-phone mt-4 lg:mt-0 lg:ml-4 flex-none"},dt=_(()=>s("div",{class:"mb-4 text-center"},"- \u70ED\u641C\u9884\u89C8\u56FE -",-1)),mt={class:"hot-search-phone-content"},pt={class:"search-com"},ht={class:"search-con flex items-center px-[15px]"},ft=_(()=>s("span",{class:"ml-[5px]"},"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",-1)),bt=_(()=>s("div",{class:"hot-search-title"},"\u70ED\u95E8\u641C\u7D22",-1)),gt={class:"hot-search-text"},Dt=u("\u4FDD\u5B58"),vt=x({name:"search"}),Et=x({...vt,setup(r){const n=H({status:1,data:[]}),C=O(()=>n.data.filter(o=>o.name).sort((o,l)=>l.sort-o.sort)),h=async()=>{try{const o=await et();for(const l in n)n[l]=o[l]}catch(o){console.log("\u83B7\u53D6=>",o)}},B=()=>{n.data.push({name:"",sort:0})},y=o=>{n.data.splice(o,1)},V=async()=>{try{await ot(n),h()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return h(),(o,l)=>{const f=$,w=z,k=G,S=L,b=M,d=q,g=J,m=K,I=j,U=T,A=N,D=P("perms");return i(),p("div",st,[t(b,{class:"!border-none",shadow:"never"},{default:e(()=>[t(S,{ref:"formRef",model:n,"label-width":"100px"},{default:e(()=>[t(k,{label:"\u529F\u80FD\u72B6\u6001",style:{"margin-bottom":"0"}},{default:e(()=>[s("div",null,[t(w,{modelValue:n.status,"onUpdate:modelValue":l[0]||(l[0]=a=>n.status=a)},{default:e(()=>[t(f,{label:1},{default:e(()=>[at]),_:1}),t(f,{label:0},{default:e(()=>[nt]),_:1})]),_:1},8,["modelValue"]),lt])]),_:1})]),_:1},8,["model"])]),_:1}),t(b,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[s("div",rt,[s("div",ct,[t(d,{type:"primary",class:"mb-4",onClick:B},{default:e(()=>[it]),_:1}),t(I,{size:"large",data:n.data},{default:e(()=>[t(m,{label:"\u5173\u952E\u8BCD",prop:"describe","min-width":"160"},{default:e(({row:a})=>[t(g,{modelValue:a.name,"onUpdate:modelValue":c=>a.name=c,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57","show-word-limit":"",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{label:"\u6392\u5E8F",prop:"describe","min-width":"160"},{default:e(({row:a})=>[t(g,{modelValue:a.sort,"onUpdate:modelValue":c=>a.sort=c,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({$index:a})=>[v((i(),E(d,{type:"danger",link:"",onClick:c=>y(a)},{default:e(()=>[ut]),_:2},1032,["onClick"])),[[D,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),s("div",_t,[dt,s("div",mt,[s("div",pt,[s("div",ht,[t(U,{name:"el-icon-Search",size:17}),ft])]),bt,s("div",gt,[(i(!0),p(Q,null,W(X(C),(a,c)=>(i(),p("span",{key:c},Y(a.name),1))),128))])])])])]),_:1}),v((i(),E(A,null,{default:e(()=>[t(d,{type:"primary",onClick:V},{default:e(()=>[Dt]),_:1})]),_:1})),[[D,["setting.hot_search/setConfig"]]])])}}});const te=R(Et,[["__scopeId","data-v-1f7b34ef"]]);export{te as default};
