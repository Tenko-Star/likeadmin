import{D as B,F as g,y as k,x as y,G as R}from"./element-plus.3267595b.js";import{j as h,a as U,b as A}from"./post.d99a86dc.js";import{P as j}from"./index.6e8124f7.js";import{d as q,s as c,r as I,e as N,$ as P,o as S,c as z,U as o,L as t,a as f,u as G}from"./@vue.e8706010.js";const L={class:"edit-popup"},T=f("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),O=q({__name:"edit",emits:["success","close"],setup($,{expose:F,emit:m}){const p=c(),r=c(),n=I("add"),_=N(()=>n.value=="edit"?"\u7F16\u8F91\u5C97\u4F4D":"\u65B0\u589E\u5C97\u4F4D"),u=P({id:"",name:"",code:"",sort:0,remark:"",status:1}),D={code:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",trigger:["blur"]}]},C=async()=>{var l,e;await((l=p.value)==null?void 0:l.validate()),n.value=="edit"?await h(u):await U(u),(e=r.value)==null||e.close(),m("success")},b=(l="add")=>{var e;n.value=l,(e=r.value)==null||e.open()},i=l=>{for(const e in u)l[e]!=null&&l[e]!=null&&(u[e]=l[e])},V=async l=>{const e=await A({id:l.id});i(e)},v=()=>{m("close")};return F({open:b,setFormData:i,getDetail:V}),(l,e)=>{const d=B,s=g,w=k,E=y,x=R;return S(),z("div",L,[o(j,{ref_key:"popupRef",ref:r,title:G(_),async:!0,width:"550px",onConfirm:C,onClose:v},{default:t(()=>[o(x,{ref_key:"formRef",ref:p,model:u,"label-width":"84px",rules:D},{default:t(()=>[o(s,{label:"\u5C97\u4F4D\u540D\u79F0",prop:"name"},{default:t(()=>[o(d,{modelValue:u.name,"onUpdate:modelValue":e[0]||(e[0]=a=>u.name=a),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",clearable:"",maxlength:100},null,8,["modelValue"])]),_:1}),o(s,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"code"},{default:t(()=>[o(d,{modelValue:u.code,"onUpdate:modelValue":e[1]||(e[1]=a=>u.code=a),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801",clearable:""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u6392\u5E8F",prop:"sort"},{default:t(()=>[f("div",null,[o(w,{modelValue:u.sort,"onUpdate:modelValue":e[2]||(e[2]=a=>u.sort=a),min:0,max:9999},null,8,["modelValue"]),T])]),_:1}),o(s,{label:"\u5907\u6CE8",prop:"remark"},{default:t(()=>[o(d,{modelValue:u.remark,"onUpdate:modelValue":e[3]||(e[3]=a=>u.remark=a),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea",autosize:{minRows:4,maxRows:6},maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u5C97\u4F4D\u72B6\u6001",required:"",prop:"status"},{default:t(()=>[o(E,{modelValue:u.status,"onUpdate:modelValue":e[4]||(e[4]=a=>u.status=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{O as _};
