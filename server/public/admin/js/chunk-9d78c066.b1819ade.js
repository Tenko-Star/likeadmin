(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d78c066"],{"1f07":function(e,t,o){"use strict";o.r(t);o("b0c0");var n=o("7a23"),c={class:"website-information"},r={class:"flex"},a=Object(n["createElementVNode"])("div",{class:"muted xs m-r-16"},"建议尺寸：100*100像素，支持jpg，jpeg，png格式",-1),i=Object(n["createTextVNode"])("查看示例"),l={class:"flex"},u=Object(n["createElementVNode"])("div",{class:"muted xs m-r-16"},"建议尺寸：100*100像素，支持jpg，jpeg，png格式",-1),b=Object(n["createTextVNode"])("查看示例"),d={class:"flex"},m=Object(n["createElementVNode"])("div",{class:"muted xs m-r-16"},"建议尺寸：100*100像素，支持jpg，jpeg，png格式",-1),s=Object(n["createTextVNode"])("查看示例"),f=Object(n["createTextVNode"])("保存");function g(e,t,o,g,j,p){var O=Object(n["resolveComponent"])("el-input"),w=Object(n["resolveComponent"])("el-form-item"),V=Object(n["resolveComponent"])("material-select"),_=Object(n["resolveComponent"])("el-image"),h=Object(n["resolveComponent"])("el-button"),v=Object(n["resolveComponent"])("el-popover"),N=Object(n["resolveComponent"])("el-form"),x=Object(n["resolveComponent"])("el-card"),C=Object(n["resolveComponent"])("footer-btns");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createVNode"])(x,{shadow:"never",class:"m-t-15"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{rules:e.rules,ref:"form",class:"ls-form",model:e.formData,"label-width":"150px",size:"small"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{label:"网站名称",prop:"name",required:""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{modelValue:e.formData.name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formData.name=t}),placeholder:"请输入网站名称",maxlength:"12","show-word-limit":""},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(w,{label:"网站图标",prop:"web_favicon"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{limit:1,modelValue:e.formData.web_favicon,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.formData.web_favicon=t})},null,8,["modelValue"]),Object(n["createElementVNode"])("div",r,[a,Object(n["createVNode"])(v,{placement:"right",width:"200",trigger:"hover"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(_,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),Object(n["createVNode"])(h,{slot:"reference",type:"text"},{default:Object(n["withCtx"])((function(){return[i]})),_:1})]})),_:1})])]})),_:1}),Object(n["createVNode"])(w,{label:"网站LOGO",prop:"web_logo"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{limit:1,modelValue:e.formData.web_logo,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.formData.web_logo=t})},null,8,["modelValue"]),Object(n["createElementVNode"])("div",l,[u,Object(n["createVNode"])(v,{placement:"right",width:"200",trigger:"hover"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(_,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),Object(n["createVNode"])(h,{slot:"reference",type:"text"},{default:Object(n["withCtx"])((function(){return[b]})),_:1})]})),_:1})])]})),_:1}),Object(n["createVNode"])(w,{label:"登录页广告图",prop:"login_image"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{limit:1,modelValue:e.formData.login_image,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.formData.login_image=t})},null,8,["modelValue"]),Object(n["createElementVNode"])("div",d,[m,Object(n["createVNode"])(v,{placement:"right",width:"200",trigger:"hover"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(_,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),Object(n["createVNode"])(h,{slot:"reference",type:"text"},{default:Object(n["withCtx"])((function(){return[s]})),_:1})]})),_:1})])]})),_:1})]})),_:1},8,["rules","model"])]})),_:1}),Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(h,{type:"primary",size:"small",onClick:e.setWebsite},{default:Object(n["withCtx"])((function(){return[f]})),_:1},8,["onClick"])]})),_:1})])}var j=o("b3ad"),p=o("54c0"),O=o("5ce7"),w=Object(n["defineComponent"])({components:{MaterialSelect:j["a"],FooterBtns:p["a"]},setup:function(){var e=Object(n["reactive"])({name:"",web_favicon:"",web_logo:"",login_image:""}),t={name:[{required:!0,message:"请输入网站名称",trigger:["blur"]}]},o=function(){Object(O["b"])().then((function(t){console.log("res",t),e.name=t.name,e.web_favicon=t.web_favicon,e.web_logo=t.web_logo,e.login_image=t.login_image}))},c=function(){Object(O["d"])({name:e.name,web_favicon:e.web_favicon,web_logo:e.web_logo,login_image:e.login_image}).then((function(e){console.log("res",e),o()})).catch((function(e){console.log("err",e)}))};return Object(n["onMounted"])((function(){o()})),{formData:e,rules:t,getWebsite:o,setWebsite:c}}}),V=o("6b0d"),_=o.n(V);const h=_()(w,[["render",g]]);t["default"]=h},"5ce7":function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return i})),o.d(t,"d",(function(){return l})),o.d(t,"e",(function(){return u}));var n=o("5530"),c=o("b32d");function r(){return c["a"].get("/setting.web.web_setting/getCopyright")}function a(e){return c["a"].post("/setting.web.web_setting/setCopyright",Object(n["a"])({},e))}function i(){return c["a"].get("/setting.web.web_setting/getWebsite")}function l(e){return c["a"].post("/setting.web.web_setting/setWebsite",Object(n["a"])({},e))}function u(){return c["a"].get("/setting.system.system/info")}}}]);
//# sourceMappingURL=chunk-9d78c066.b1819ade.js.map