import{Z as s}from"./element-plus.3267595b.js";import{d as p,e as i,o as c,K as f,u as T,k as F}from"./@vue.e8706010.js";const D=p({__name:"index",props:{startTime:{default:""},endTime:{default:""},valueFormat:{default:"YYYY-MM-DD HH:mm:ss"},dateRange:{default:"datetimerange"}},emits:["update:startTime","update:endTime"],setup(a,{emit:e}){const u=a,n=i({get:()=>[u.startTime,u.endTime],set:t=>{t===null?(e("update:startTime",""),e("update:endTime","")):(e("update:startTime",t[0]),e("update:endTime",t[1]))}});return(t,r)=>{var d,l;const m=s;return c(),f(m,{modelValue:T(n),"onUpdate:modelValue":r[0]||(r[0]=o=>F(n)?n.value=o:null),type:(d=a.dateRange)!=null?d:"datetimerange","range-separator":"-","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4","value-format":(l=a.valueFormat)!=null?l:"YYYY-MM-DD HH:mm:ss",clearable:""},null,8,["modelValue","type","value-format"])}}});export{D as _};
