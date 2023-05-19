import{v as y,w as h,_ as B}from"./index.f05614bb.js";import{t as b,v as E}from"./element-plus.3267595b.js";import{C}from"./vue-echarts.5be4544b.js";import{d as f,$ as A,j as k,a4 as D,o as r,c as u,a as t,U as a,L as o,u as c,T as e,V as v,a7 as x,S as F,P as O}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./lodash.864c9e8f.js";import"./axios.1b9edf64.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.d2d58e3e.js";import"./color.258a8a7e.js";import"./clone.50f9fc80.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./@element-plus.196c7323.js";import"./nprogress.fd5383c2.js";import"./vue-clipboard3.cdc6794b.js";import"./clipboard.63214189.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";import"./lodash-es.29c53eac.js";import"./dayjs.dc901930.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./resize-detector.4e96b72b.js";const z={class:"workbench"},V={class:"lg:flex"},N={class:"flex leading-9"},S=t("div",{class:"w-20"},"\u5F53\u524D\u7248\u672C",-1),L={class:"flex leading-9"},T=t("div",{class:"w-20"},"\u57FA\u4E8E\u6846\u67B6",-1),j={class:"flex leading-9"},G=t("div",{class:"w-20"},"\u83B7\u53D6\u6E20\u9053",-1),M=["href"],P=F("\u5B98\u7F51"),U=["href"],W=F("Gitee"),$=t("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1),q={class:"text-tx-secondary text-xs ml-4"},H={class:"flex flex-wrap"},I={class:"w-1/2 md:w-1/4"},J=t("div",{class:"leading-10"},"\u8BBF\u95EE\u91CF(\u4EBA)",-1),K={class:"text-6xl"},Q={class:"text-tx-secondary text-xs"},R={class:"w-1/2 md:w-1/4"},X=t("div",{class:"leading-10"},"\u9500\u552E\u989D(\u5143)",-1),Y={class:"text-6xl"},Z={class:"text-tx-secondary text-xs"},tt={class:"w-1/2 md:w-1/4"},st=t("div",{class:"leading-10"},"\u8BA2\u5355\u91CF(\u7B14)",-1),et={class:"text-6xl"},ot={class:"text-tx-secondary text-xs"},it={class:"w-1/2 md:w-1/4"},at=t("div",{class:"leading-10"},"\u65B0\u589E\u7528\u6237",-1),nt={class:"text-6xl"},dt={class:"text-tx-secondary text-xs"},lt={class:"function mb-4"},rt=t("span",null,"\u5E38\u7528\u529F\u80FD",-1),ut={class:"flex flex-wrap"},ct={class:"mt-2"},_t={class:"md:flex"},pt=t("span",null,"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1),mt=t("span",null,"\u670D\u52A1\u652F\u6301",-1),ht={class:"ml-2"},vt={class:"text-tx-regular text-xs mt-4"},xt=f({name:"workbench"}),Yt=f({...xt,setup(ft){const s=A({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line",smooth:!0}]}}),g=()=>{y().then(n=>{s.version=n.version,s.today=n.today,s.menu=n.menu,s.visitor=n.visitor,s.support=n.support,s.visitorOption.xAxis.data=[],s.visitorOption.series[0].data=[],n.visitor.date.reverse().forEach(d=>{s.visitorOption.xAxis.data.push(d)}),n.visitor.list[0].data.forEach(d=>{s.visitorOption.series[0].data.push(d)})}).catch(n=>{console.log("err",n)})};return k(()=>{g()}),(n,d)=>{const _=b,l=E,p=B,w=D("router-link");return r(),u("div",z,[t("div",V,[a(l,{class:"!border-none mb-4 lg:mr-4 lg:w-[350px]",shadow:"never"},{header:o(()=>[t("span",{class:"card-title",onClick:d[0]||(d[0]=(...i)=>c(h)&&c(h)(...i))},"\u7248\u672C\u4FE1\u606F")]),default:o(()=>[t("div",null,[t("div",N,[S,t("span",null,e(s.version.version),1)]),t("div",L,[T,t("span",null,e(s.version.based),1)]),t("div",j,[G,t("div",null,[t("a",{href:s.version.channel.website,target:"_blank"},[a(_,{type:"success",size:"small"},{default:o(()=>[P]),_:1})],8,M),t("a",{class:"ml-3",href:s.version.channel.gitee,target:"_blank"},[a(_,{type:"danger",size:"small"},{default:o(()=>[W]),_:1})],8,U)])])])]),_:1}),a(l,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:o(()=>[t("div",null,[$,t("span",q," \u66F4\u65B0\u65F6\u95F4\uFF1A"+e(s.today.time),1)])]),default:o(()=>[t("div",H,[t("div",I,[J,t("div",K,e(s.today.today_visitor),1),t("div",Q," \u603B\u8BBF\u95EE\u91CF\uFF1A"+e(s.today.total_visitor),1)]),t("div",R,[X,t("div",Y,e(s.today.today_sales),1),t("div",Z," \u603B\u9500\u552E\u989D\uFF1A"+e(s.today.total_sales),1)]),t("div",tt,[st,t("div",et,e(s.today.order_num),1),t("div",ot," \u603B\u8BA2\u5355\u91CF\uFF1A"+e(s.today.order_sum),1)]),t("div",it,[at,t("div",nt,e(s.today.today_new_user),1),t("div",dt," \u603B\u8BBF\u7528\u6237\uFF1A"+e(s.today.total_new_user),1)])])]),_:1})]),t("div",lt,[a(l,{class:"flex-1 !border-none",shadow:"never"},{header:o(()=>[rt]),default:o(()=>[t("div",ut,[(r(!0),u(v,null,x(s.menu,i=>(r(),u("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:i},[a(w,{to:i.url,class:"mb-3 flex flex-col items-center"},{default:o(()=>[a(p,{width:"40px",height:"40px",src:i==null?void 0:i.image},null,8,["src"]),t("div",ct,e(i.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",_t,[a(l,{class:"flex-1 !border-none md:mr-4 mb-4",shadow:"never"},{header:o(()=>[pt]),default:o(()=>[t("div",null,[a(c(C),{style:{height:"350px"},option:s.visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),a(l,{class:"!border-none mb-4",shadow:"never"},{header:o(()=>[mt]),default:o(()=>[t("div",null,[(r(!0),u(v,null,x(s.support,(i,m)=>(r(),u("div",{key:m},[t("div",{class:O(["flex items-center pb-10 pt-10",{"border-b border-br":m==0}])},[a(p,{width:120,height:120,class:"flex-none",src:i.image},null,8,["src"]),t("div",ht,[t("div",null,e(i.title),1),t("div",vt,e(i.desc),1)])],2)]))),128))])]),_:1})])])}}});export{Yt as default};
