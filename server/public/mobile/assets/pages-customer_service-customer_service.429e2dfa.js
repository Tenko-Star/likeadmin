import{ao as t,ap as e,aq as s,d as a,u as n,r as c,a as r,o,c as l,w as u,b as i,g as m,l as p,t as f,h as d,a9 as x,k as y,m as _,e as g,f as h,F as b}from"./index.349bca60.js";import{_ as v}from"./u-image.bcf11a8a.js";import{_ as j}from"./u-button.e1da2246.js";import{a as w}from"./shop.4474e943.js";import"./u-icon.3ea69106.js";import"./plugin-vue_export-helper.21dcd24c.js";async function k(a){if(!a)return uni.$u.toast("图片不存在");uni.$u.$toast("长按图片保存");try{const n=await t({url:a,timeout:1e4});await e({filePath:n.tempFilePath}),s({title:"保存成功",icon:"success"})}catch(n){uni.$u.toast(n.errMsg||"保存失败")}}const $=a({__name:"customer-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(t){const{getImageUrl:e}=n();return(s,a)=>{const n=c(r("u-image"),v),_=y,g=c(r("u-button"),j);return o(),l(_,{class:"customer-service bg-white flex flex-col justify-center items-center mx-[36rpx] mt-[20rpx] rounded-lg px-[110rpx] pt-[100rpx] pb-[160rpx]"},{default:u((()=>[i(n,{width:"280",height:"280",src:m(e)(t.content.qrcode)},null,8,["src"]),t.content.title?(o(),l(_,{key:0,class:"text-lg mt-[14rpx] font-medium"},{default:u((()=>[p(f(t.content.title),1)])),_:1})):d("v-if",!0),t.content.time?(o(),l(_,{key:1,class:"text-content mt-[40rpx]"},{default:u((()=>[p("服务时间："+f(t.content.time),1)])),_:1})):d("v-if",!0),t.content.mobile?(o(),l(_,{key:2,class:"text-content mt-[14rpx] flex flex-wrap"},{default:u((()=>[p(" 客服电话："+f(t.content.mobile)+" ",1),x("a",{class:"ml-[10rpx] phone text-muted underline",href:"tel:"+t.content.mobile}," 拨打 ",8,["href"])])),_:1})):d("v-if",!0),i(_,{class:"mt-[100rpx] w-full"},{default:u((()=>[i(g,{type:"primary",shape:"circle",onClick:a[0]||(a[0]=s=>m(k)(m(e)(t.content.qrcode)))},{default:u((()=>[p(" 保存二维码图片 ")])),_:1})])),_:1})])),_:1})}}}),q=a({__name:"customer_service",setup(t){const e=_({pages:[]});return(async()=>{const t=await w({id:3});e.pages=JSON.parse(t.data)})(),(t,s)=>{const a=c(r("w-customer-service"),$),n=y;return o(),l(n,{class:"customer-service"},{default:u((()=>[(o(!0),g(b,null,h(e.pages,((t,e)=>(o(),l(n,{key:e},{default:u((()=>["customer-service"==t.name?(o(),l(a,{key:0,content:t.content,styles:t.styles},null,8,["content","styles"])):d("v-if",!0)])),_:2},1024)))),128))])),_:1})}}});export{q as default};
