import{_ as y}from"./index.d0452994.js";import{L as k,v as x,I as N,J as R,F as U,D as H,t as I,G as S}from"./element-plus.3267595b.js";import{r as B}from"./index.25da4054.js";import{d as b,$ as q,af as E,o as r,c as G,U as e,L as t,M as F,K as _,a as i,R as L,S as a,T}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.dc901930.js";import"./axios.1b9edf64.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.864c9e8f.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.d2d58e3e.js";import"./color.258a8a7e.js";import"./clone.50f9fc80.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./nprogress.fd5383c2.js";import"./vue-clipboard3.cdc6794b.js";import"./clipboard.63214189.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";function J(p){return B.post({url:"/channel.web_page_setting/setConfig",params:p})}function K(){return B.get({url:"/channel.web_page_setting/getConfig"})}const M=a("\u5F00\u542F"),$=a("\u5173\u95ED"),j=i("div",{class:"form-tips"},"\u72B6\u6001\u4E3A\u5173\u95ED\u65F6\uFF0C\u5C06\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",-1),z=a("\u7A7A\u9875\u9762"),O=a("\u81EA\u5B9A\u4E49\u94FE\u63A5"),P={class:"w-80"},Q={class:"flex-1 min-w-0 break-words"},W=a("\u590D\u5236"),X=a("\u4FDD\u5B58"),Y=b({name:"h5Config"}),Nt=b({...Y,setup(p){const o=q({status:0,page_status:0,page_url:"",url:""}),m=async()=>{const d=await K();for(const u in o)o[u]=d[u]},C=async()=>{await J(o),m()};return m(),(d,u)=>{const D=k,c=x,s=N,f=R,n=U,h=H,g=I,v=S,w=y,V=E("copy"),A=E("perms");return r(),G("div",null,[e(c,{class:"!border-none",shadow:"never"},{default:t(()=>[e(D,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1AH5\u8BBE\u7F6E",closable:!1,"show-icon":""})]),_:1}),e(c,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[e(v,{ref:"formRef",model:o,"label-width":"120px"},{default:t(()=>[e(n,{label:"\u6E20\u9053\u72B6\u6001",required:"",prop:"status"},{default:t(()=>[i("div",null,[e(f,{modelValue:o.status,"onUpdate:modelValue":u[0]||(u[0]=l=>o.status=l)},{default:t(()=>[e(s,{label:1},{default:t(()=>[M]),_:1}),e(s,{label:0},{default:t(()=>[$]),_:1})]),_:1},8,["modelValue"]),j])]),_:1}),e(n,{label:"\u5173\u95ED\u540E\u8BBF\u95EE\u9875\u9762",prop:"page_status"},{default:t(()=>[e(f,{modelValue:o.page_status,"onUpdate:modelValue":u[1]||(u[1]=l=>o.page_status=l)},{default:t(()=>[e(s,{label:0},{default:t(()=>[z]),_:1}),e(s,{label:1},{default:t(()=>[O]),_:1})]),_:1},8,["modelValue"])]),_:1}),o.page_status==1?(r(),_(n,{key:0,label:"",prop:"page_url"},{default:t(()=>[i("div",P,[e(h,{modelValue:o.page_url,"onUpdate:modelValue":u[2]||(u[2]=l=>o.page_url=l),placeholder:"\u8BF7\u8F93\u5165\u5B8C\u6574\u7684url"},null,8,["modelValue"])])]),_:1})):L("",!0),e(n,{label:"\u8BBF\u95EE\u94FE\u63A5"},{default:t(()=>[i("div",Q,[a(T(o.url)+" ",1),F((r(),_(g,null,{default:t(()=>[W]),_:1})),[[V,o.url]])])]),_:1})]),_:1},8,["model"])]),_:1}),F((r(),_(w,null,{default:t(()=>[e(g,{type:"primary",onClick:C},{default:t(()=>[X]),_:1})]),_:1})),[[A,["channel.web_page_setting/setConfig"]]])])}}});export{Nt as default};
