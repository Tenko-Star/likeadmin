System.register(["./index-legacy.42d35444.js","./wx_oa-legacy.b11a1702.js","./@vue-legacy.6b85f8d1.js"],(function(e){"use strict";var a,u,t,r,n,l,s;return{setters:[e=>{a=e.f},e=>{u=e.a,t=e.b,r=e.c},e=>{n=e.s,l=e.r,s=e.a1}],execute:function(){const g=n(),i=l([]),c=l(0);e("r",s({name:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]},{min:1,max:12,message:"长度限制12个字符",trigger:["blur","change"]}],menuType:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]}],visitType:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]}],url:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]},{pattern:/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,message:"请输入合法的网址链接",trigger:["blur","change"]}],appId:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]}],pagePath:[{required:!0,message:"必填项不能为空",trigger:["blur","change"]}]})),e("u",(e=>(e&&(g.value=e),{menuList:i,menuIndex:c,handleAddMenu:()=>{i.value.push({name:"菜单名称",has_menu:!1,type:"view",url:"",appid:"",pagepath:"",sub_button:[]})},handleAddSubMenu:e=>{const u=c.value;i.value[u].sub_button.length>=5?a.msgError("已添加上限～"):i.value[u].sub_button.push(e)},handleEditSubMenu:(e,a)=>{const u=c.value;i.value[u].sub_button[a]=e},handleDelMenu:e=>{0!=e&&c.value--,i.value.splice(e,1)},handleDelSubMenu:(e,a)=>{i.value[e].sub_button.splice(a,1)},getOaMenuFunc:async()=>{try{i.value=await u()}catch(e){console.log("获取菜单=>",e)}},handleSave:async()=>{const e=g.value.value;for(let u=0;u<e.length;u++)try{await e[u].menuFormRef.validate()}catch(a){return void(c.value=u)}await t(i.value)},handlePublish:async()=>{const e=g.value.value;for(let u=0;u<e.length;u++)try{await e[u].menuFormRef.validate()}catch(a){return void(c.value=u)}await r(i.value)}})))}}}));
