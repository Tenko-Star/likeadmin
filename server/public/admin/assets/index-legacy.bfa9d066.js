System.register(["./element-plus-legacy.9a978554.js","./edit.vue_vue_type_script_setup_true_lang-legacy.01efc224.js","./@vue-legacy.6b85f8d1.js","./@vueuse-legacy.157488cf.js","./@element-plus-legacy.d952503a.js","./lodash-es-legacy.55fbc42a.js","./dayjs-legacy.79633238.js","./axios-legacy.770d9bb0.js","./async-validator-legacy.36fe4908.js","./@ctrl-legacy.c91dabf1.js","./@popperjs-legacy.e05acee0.js","./escape-html-legacy.ff6604b3.js","./normalize-wheel-es-legacy.b0eca4cb.js","./index-legacy.42d35444.js","./lodash-legacy.ed0945d2.js","./vue-router-legacy.4ee22123.js","./pinia-legacy.98b0b201.js","./vue-demi-legacy.ade83891.js","./css-color-function-legacy.b6dd1ba0.js","./color-legacy.b068fdf4.js","./clone-legacy.2819e742.js","./color-convert-legacy.24fd1954.js","./color-string-legacy.f1460f94.js","./color-name-legacy.592a2748.js","./nprogress-legacy.124f3b37.js","./vue-clipboard3-legacy.c012a06d.js","./clipboard-legacy.4032b320.js","./echarts-legacy.4a09bb08.js","./zrender-legacy.f9b1c945.js","./highlight.js-legacy.1a13e67a.js","./@highlightjs-legacy.5de22af8.js","./index-legacy.2816f21b.js"],(function(e){"use strict";var a,s,l,c,t,r,n,d,o,g,i,y,u,j,f,b,p,h,_,m;return{setters:[e=>{a=e.H,s=e._,l=e.I,c=e.J,t=e.w,r=e.K,n=e.L},e=>{d=e._,o=e.s},e=>{g=e.d,i=e.s,y=e.a1,u=e.ah,j=e.o,f=e.c,b=e.W,p=e.O,h=e.P,_=e.M,m=e.U},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const v={class:"storage"},w=m("开启"),k=m("关闭"),x=m(" 设置 "),z=g({name:"storage"});e("default",g({...z,setup(e){const g=i(),m=y({loading:!1,lists:[]}),z=async()=>{try{m.loading=!0,m.lists=await o(),m.loading=!1}catch(e){m.loading=!1}};return z(),(e,o)=>{const i=a,y=l,C=c,S=s,H=t,I=r,J=u("perms"),K=n;return j(),f("div",v,[b(y,{class:"!border-none",shadow:"never"},{default:p((()=>[b(i,{type:"warning",title:"温馨提示：1.切换存储方式后，需要将资源文件传输至新的存储端；2.请勿随意切换存储方式，可能导致图片无法查看",closable:!1,"show-icon":""})])),_:1}),h((j(),_(y,{class:"!border-none mt-4",shadow:"never"},{default:p((()=>[b(I,{size:"large",data:m.lists},{default:p((()=>[b(C,{label:"储存方式",prop:"name","min-width":"120"}),b(C,{label:"储存位置",prop:"path","min-width":"160"}),b(C,{label:"状态","min-width":"80"},{default:p((({row:e})=>[1==e.status?(j(),_(S,{key:0},{default:p((()=>[w])),_:1})):(j(),_(S,{key:1,type:"danger"},{default:p((()=>[k])),_:1}))])),_:1}),b(C,{label:"操作","min-width":"80",fixed:"right"},{default:p((({row:e})=>[h((j(),_(H,{type:"primary",link:"",onClick:a=>{return s=e.engine,void g.value?.open(s);var s}},{default:p((()=>[x])),_:2},1032,["onClick"])),[[J,["setting.storage/setup"]]])])),_:1})])),_:1},8,["data"])])),_:1})),[[K,m.loading]]),b(d,{ref_key:"editRef",ref:g,onSuccess:z},null,512)])}}}))}}}));
