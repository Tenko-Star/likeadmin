System.register(["./element-plus-legacy.9a978554.js","./useMenuOa-legacy.ee72adfd.js","./@vue-legacy.6b85f8d1.js"],(function(e){"use strict";var a,l,u,t,d,p,m,o,r,n,s,v,f,i,y,T,V,_,b,g,c;return{setters:[e=>{a=e.O,l=e.P,u=e.C,t=e.D,d=e.F},e=>{p=e.r},e=>{m=e.d,o=e.s,r=e.r,n=e.w,s=e.l,v=e.o,f=e.M,i=e.O,y=e.W,T=e.T,V=e.J,_=e.c,b=e.X,g=e.u,c=e.U}],execute:function(){const h=c("不配置子菜单"),I=c("配置子菜单"),P=c("网页"),U=c("小程序");e("_",m({__name:"oa-menu-form",props:{modular:{default:"master"},name:{default:""},menuType:{type:Boolean,default:!1},visitType:{default:"view"},url:{default:""},appId:{default:""},pagePath:{default:""}},emits:["update:name","update:menuType","update:visitType","update:url","update:appId","update:pagePath"],setup(e,{expose:m,emit:c}){const k=e,w=o(),j=r({...k});return n((()=>k),(e=>{j.value=e}),{immediate:!0}),s((()=>{"master"===k.modular&&c("update:menuType",j.value.menuType),c("update:name",j.value.name),c("update:visitType",j.value.visitType),c("update:url",j.value.url),c("update:appId",j.value.appId),c("update:pagePath",j.value.pagePath)})),m({menuFormRef:w}),(m,o)=>{const r=u,n=t,s=a,c=l,k=d;return v(),f(k,{ref_key:"menuFormRef",ref:w,rules:g(p),model:j.value,"label-width":"100px"},{default:i((()=>[y(n,{label:"master"===e.modular?"主菜单名称":"子菜单名称",prop:"name"},{default:i((()=>[y(r,{modelValue:j.value.name,"onUpdate:modelValue":o[0]||(o[0]=e=>j.value.name=e)},null,8,["modelValue"])])),_:1},8,["label"]),"master"===e.modular?(v(),f(n,{key:0,label:"主菜单类型",prop:"menuType"},{default:i((()=>[y(c,{modelValue:j.value.menuType,"onUpdate:modelValue":o[1]||(o[1]=e=>j.value.menuType=e)},{default:i((()=>[y(s,{label:!1},{default:i((()=>[h])),_:1}),y(s,{label:!0},{default:i((()=>[I])),_:1})])),_:1},8,["modelValue"])])),_:1})):T("",!0),j.value.menuType&&"master"===e.modular?(v(),f(n,{key:1,label:""},{default:i((()=>[V(m.$slots,"default")])),_:3})):T("",!0),j.value.menuType?T("",!0):(v(),_(b,{key:2},[y(n,{label:"跳转链接",prop:"visitType"},{default:i((()=>[y(c,{modelValue:j.value.visitType,"onUpdate:modelValue":o[2]||(o[2]=e=>j.value.visitType=e)},{default:i((()=>[y(s,{label:"view"},{default:i((()=>[P])),_:1}),y(s,{label:"miniprogram"},{default:i((()=>[U])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(n,{label:"网址",prop:"url"},{default:i((()=>[y(r,{modelValue:j.value.url,"onUpdate:modelValue":o[3]||(o[3]=e=>j.value.url=e)},null,8,["modelValue"])])),_:1}),"miniprogram"==j.value.visitType?(v(),_(b,{key:0},[y(n,{label:"AppId",prop:"appId"},{default:i((()=>[y(r,{modelValue:j.value.appId,"onUpdate:modelValue":o[4]||(o[4]=e=>j.value.appId=e)},null,8,["modelValue"])])),_:1}),y(n,{label:"路径",prop:"pagePath"},{default:i((()=>[y(r,{modelValue:j.value.pagePath,"onUpdate:modelValue":o[5]||(o[5]=e=>j.value.pagePath=e)},null,8,["modelValue"])])),_:1})],64)):T("",!0)],64))])),_:3},8,["rules","model"])}}}))}}}));
