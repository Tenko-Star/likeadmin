import{_ as b}from"./index.d0452994.js";import{v as B,t as E}from"./element-plus.3267595b.js";import V from"./menu.93a42585.js";import h from"./preview.ae42f979.js";import{_ as C}from"./attr-setting.vue_vue_type_script_setup_true_lang.112e554b.js";import{e as N}from"./index.bb3462d5.js";import{s as P,a as S}from"./decoration.504718c7.js";import{m as k,d as F}from"./index.25da4054.js";import{d as v,$ as I,r as d,e as _,w as A,af as M,o as f,c as U,U as r,L as n,M as W,K as J,a as O,u as g,S as $}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.dc901930.js";import"./axios.1b9edf64.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.864c9e8f.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.d2d58e3e.js";import"./color.258a8a7e.js";import"./clone.50f9fc80.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./nprogress.fd5383c2.js";import"./vue-clipboard3.cdc6794b.js";import"./clipboard.63214189.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";import"./attr.vue_vue_type_script_setup_true_lang.1765d069.js";import"./index.61d988b3.js";import"./picker.53806d71.js";import"./index.6e8124f7.js";import"./picker.92b7e949.js";import"./index.bd49f5d1.js";import"./index.vue_vue_type_script_setup_true_lang.18bc2f8b.js";import"./index.40ff21bf.js";import"./index.vue_vue_type_script_setup_true_lang.b3adad80.js";import"./usePaging.160b82b8.js";import"./vue3-video-play.4851e3ad.js";import"./vuedraggable.926e4ed5.js";import"./vue.930dddcc.js";import"./sortablejs.68559910.js";import"./content.vue_vue_type_script_setup_true_lang.f7e5202e.js";import"./decoration-img.5ecce7ad.js";import"./attr.vue_vue_type_script_setup_true_lang.f72a79bc.js";import"./content.2bb3f9ea.js";import"./attr.vue_vue_type_script_setup_true_lang.411d86ba.js";import"./add-nav.vue_vue_type_script_setup_true_lang.d0f079c8.js";import"./content.5181174d.js";import"./attr.vue_vue_type_script_setup_true_lang.7ad6f0f3.js";import"./content.vue_vue_type_script_setup_true_lang.def7389b.js";import"./attr.vue_vue_type_script_setup_true_lang.bc88ba14.js";import"./content.3f0df39b.js";import"./attr.vue_vue_type_script_setup_true_lang.775b5e18.js";import"./content.97d95ac6.js";import"./attr.vue_vue_type_script_setup_true_lang.4615dcb4.js";import"./content.vue_vue_type_script_setup_true_lang.2a99615d.js";import"./attr.vue_vue_type_script_setup_true_lang.d0ae40ff.js";import"./content.9285b0e7.js";const K={class:"decoration-pages min-w-[1100px]"},L={class:"flex h-full items-start"},T=$("\u4FDD\u5B58"),j=v({name:"decorationPages"}),q=v({...j,setup(z){const m=t=>t.map(e=>{var p;return{id:k(),...((p=N[e])==null?void 0:p.options())||{}}}),a=I({[1]:{id:1,type:1,name:"\u9996\u9875\u88C5\u4FEE",pageData:m(["search","banner","nav","news"])},[2]:{id:2,type:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageData:m(["user-info","my-service","user-banner"])},[3]:{id:3,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageData:m(["customer-service"])}}),o=d("1"),i=d(-1),l=_(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData)!=null?e:[]}),D=_(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData[i.value])!=null?e:""}),u=async()=>{const t=await S({id:o.value});a[String(t.id)].pageData=JSON.parse(t.data)},x=async()=>{await P({...a[o.value],data:JSON.stringify(a[o.value].pageData)}),u()};return A(o,()=>{i.value=l.value.findIndex(t=>!t.disabled),u()},{immediate:!0}),(t,e)=>{const c=B,p=E,y=b,w=M("perms");return f(),U("div",K,[r(c,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:n(()=>[O("div",L,[r(V,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),menus:a},null,8,["modelValue","menus"]),r(h,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=s=>i.value=s),pageData:g(l)},null,8,["modelValue","pageData"]),r(C,{class:"flex-1",widget:g(D)},null,8,["widget"])])]),_:1}),W((f(),J(y,{class:"mt-4",fixed:!1},{default:n(()=>[r(p,{type:"primary",onClick:x},{default:n(()=>[T]),_:1})]),_:1})),[[w,["decorate:pages:save"]]])])}}});const me=F(q,[["__scopeId","data-v-678364bb"]]);export{me as default};
