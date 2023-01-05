(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{1613:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(91),i=s(509),r=s(143),n=s(794),l=s(18),o=s(7),j=s.n(o),d=s(833),b=s(17),h=s(134),x=s(503),u=s(523),O=s.n(u),m=s(719),p=s(12),f=["icon","color","stats","statTitle","series","options","type","height"],g=function(e){var t=e.icon,s=e.color,a=e.stats,i=e.statTitle,r=e.series,n=e.options,l=e.type,o=e.height,j=Object(h.a)(e,f);return Object(p.jsxs)(c.l,Object(b.a)(Object(b.a)({},j),{},{children:[Object(p.jsxs)(c.p,{className:"align-items-start pb-0",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"fw-bolder",children:a}),Object(p.jsx)(c.u,{children:i})]}),Object(p.jsx)(x.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:t})]}),Object(p.jsx)(O.a,{options:n,series:r,type:l,height:o||100})]}))},w=g;g.defaultProps={options:m.b,color:"primary"};var y=function(e){var t=e.warning,s=Object(a.useState)(null),c=Object(l.a)(s,2),i=c[0],r=c[1];Object(a.useEffect)((function(){j.a.get("/card/card-statistics/newsletter").then((function(e){return r(e.data)}))}),[]);var n={chart:{id:"newsletter",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#ffc085"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return null!==i?Object(p.jsx)(w,{icon:Object(p.jsx)(d.a,{size:21}),color:"warning",stats:"28.7k",statTitle:"Newsletter",series:i.series,type:"line",options:n}):null},v=s(925),k=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){j.a.get("/card/card-statistics/site-traffic").then((function(e){return c(e.data)}))}),[]),null!==s?Object(p.jsx)(w,{icon:Object(p.jsx)(v.a,{size:21}),color:"primary",stats:"78.9k",statTitle:"Site Traffic",series:s.series,type:"line"}):null},N=s(967),T=function(e){var t=e.success,s=Object(a.useState)(null),c=Object(l.a)(s,2),i=c[0],r=c[1];Object(a.useEffect)((function(){j.a.get("/card/card-statistics/active-users").then((function(e){return r(e.data)}))}),[]);var n={chart:{id:"activeUsers",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#55DD92"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return null!==i?Object(p.jsx)(w,{icon:Object(p.jsx)(N.a,{size:21}),color:"success",stats:"659.8k",statTitle:"Active Users",series:i.series,options:n,type:"line"}):null},B=s(949),z=s(649),F=function(e){var t=e.danger,s=Object(a.useState)(null),c=Object(l.a)(s,2),i=c[0],r=c[1],n={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){j.a.get("/card/card-statistics/sales").then((function(e){return r(e.data)}))}),[]),null!==i?Object(p.jsx)(z.a,{icon:Object(p.jsx)(B.a,{size:21}),color:"danger",stats:i.analyticsData.sales,statTitle:"Quarterly Sales",options:n,series:i.series,type:"area"}):null},S=s(788),C=s(797),E=s(799),I=s(880),D=function(e){var t=e.kFormatter,s=e.success,c=Object(a.useState)(null),i=Object(l.a)(c,2),r=i[0],n=i[1],o={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){j.a.get("/card/card-statistics/revenue").then((function(e){return n(e.data)}))}),[]),null!==r?Object(p.jsx)(z.a,{icon:Object(p.jsx)(I.a,{size:21}),color:"success",stats:t(r.analyticsData.revenue),statTitle:"Revenue Generated",options:o,series:r.series,type:"area"}):null},R=s(502),L=s(789),A=function(e){var t=e.icon,s=e.color,a=e.stats,i=e.statTitle,r=e.className;return Object(p.jsx)(c.l,{className:"text-center",children:Object(p.jsxs)(c.m,{className:r,children:[Object(p.jsx)("div",{className:"avatar p-50 m-0 mb-1 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(p.jsx)("div",{className:"avatar-content",children:t})}),Object(p.jsx)("h2",{className:"fw-bolder",children:a}),Object(p.jsx)("p",{className:"card-text line-ellipsis",children:i})]})})},P=s(565),U=s(892),G=s(835),J=s(948),M=s(906),W=s(850),q=s(965),H=s(879),Q=s(944),V=s(840),K=s(841);t.default=function(){var e=Object(a.useContext)(r.a);return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(R.a,{title:"Statistics Cards",data:[{title:"Cards"},{title:"Statistics Cards"}]}),Object(p.jsxs)(c.jb,{children:[Object(p.jsx)(c.B,{lg:"2",xs:"6",children:Object(p.jsx)(C.a,{warning:e.colors.warning.main})}),Object(p.jsx)(c.B,{lg:"2",xs:"6",children:Object(p.jsx)(E.a,{info:e.colors.info.main})}),Object(p.jsx)(c.B,{lg:"8",sm:"12",children:Object(p.jsx)(n.a,{cols:{md:"3",sm:"6",xs:"12"}})})]}),Object(p.jsxs)(c.jb,{children:[Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(A,{icon:Object(p.jsx)(U.a,{size:21}),color:"info",stats:"36.9k",statTitle:"Views"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(A,{icon:Object(p.jsx)(G.a,{size:21}),color:"warning",stats:"12k",statTitle:"Comments"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(A,{icon:Object(p.jsx)(J.a,{size:21}),color:"danger",stats:"97.8k",statTitle:"Orders"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(A,{icon:Object(p.jsx)(M.a,{size:21}),color:"primary",stats:"26.8",statTitle:"Bookmarks"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(A,{icon:Object(p.jsx)(W.a,{size:21}),color:"success",stats:"689",statTitle:"Reviews"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(A,{icon:Object(p.jsx)(q.a,{size:21}),color:"danger",stats:"2.1k",statTitle:"Returns"})})]}),Object(p.jsxs)(c.jb,{children:[Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(P.a,{icon:Object(p.jsx)(H.a,{size:21}),color:"primary",stats:"86%",statTitle:"CPU Usage"})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(P.a,{icon:Object(p.jsx)(Q.a,{size:21}),color:"success",stats:"1.2gb",statTitle:"Memory Usage"})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(P.a,{icon:Object(p.jsx)(V.a,{size:21}),color:"danger",stats:"0.1%",statTitle:"Downtime Ratio"})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(P.a,{icon:Object(p.jsx)(K.a,{size:21}),color:"warning",stats:"13",statTitle:"Issues Found"})})]}),Object(p.jsxs)(c.jb,{children:[Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(L.a,{kFormatter:i.h})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(D,{kFormatter:i.h,success:e.colors.success.main})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(F,{danger:e.colors.danger.main})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(S.a,{kFormatter:i.h,warning:e.colors.warning.main})})]}),Object(p.jsxs)(c.jb,{children:[Object(p.jsx)(c.B,{lg:"4",sm:"6",children:Object(p.jsx)(k,{})}),Object(p.jsx)(c.B,{lg:"4",sm:"6",children:Object(p.jsx)(T,{success:e.colors.success.main})}),Object(p.jsx)(c.B,{lg:"4",sm:"6",children:Object(p.jsx)(y,{warning:e.colors.warning.main})})]})]})}},502:function(e,t,s){"use strict";var a=s(17),c=s(1),i=s(132),r=s(6),n=s.n(r),l=s(904),o=s(860),j=s(835),d=s(833),b=s(834),h=s(91),x=s(12);t.a=function(e){var t=e.data,s=e.title;return Object(x.jsxs)("div",{className:"content-header row",children:[Object(x.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(x.jsx)("div",{className:"row breadcrumbs-top",children:Object(x.jsxs)("div",{className:"col-12",children:[s?Object(x.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(x.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(x.jsxs)(h.g,{children:[Object(x.jsx)(h.h,{tag:"li",children:Object(x.jsx)(i.b,{to:"/",children:"Home"})}),t.map((function(e,s){var r=e.link?i.b:c.Fragment,l=t.length-1===s;return Object(x.jsx)(h.h,{tag:"li",active:!l,className:n()({"text-primary":!l}),children:Object(x.jsx)(r,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},s)}))]})})]})})}),Object(x.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(x.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(x.jsxs)(h.ub,{children:[Object(x.jsx)(h.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(x.jsx)(l.a,{size:14})}),Object(x.jsxs)(h.F,{tag:"ul",end:!0,children:[Object(x.jsxs)(h.E,{tag:i.b,to:"/apps/todo",children:[Object(x.jsx)(o.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(x.jsxs)(h.E,{tag:i.b,to:"/apps/chat",children:[Object(x.jsx)(j.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(x.jsxs)(h.E,{tag:i.b,to:"/apps/email",children:[Object(x.jsx)(d.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(x.jsxs)(h.E,{tag:i.b,to:"/apps/calendar",children:[Object(x.jsx)(b.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},565:function(e,t,s){"use strict";var a=s(31),c=s(6),i=s.n(c),r=s(91),n=s(12);t.a=function(e){var t=e.icon,s=e.color,c=e.stats,l=e.renderStats,o=e.statTitle,j=e.className,d=e.statsMargin;return Object(n.jsx)(r.l,{children:Object(n.jsx)(r.m,{className:j,children:Object(n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(n.jsxs)("div",{children:[l||Object(n.jsx)("h2",{className:i()("fw-bolder",Object(a.a)({"mb-0":!d},d,d)),children:c}),Object(n.jsx)("p",{className:"card-text",children:o})]}),Object(n.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(n.jsx)("div",{className:"avatar-content",children:t})})]})})})}},649:function(e,t,s){"use strict";var a=s(17),c=s(31),i=s(134),r=s(503),n=s(6),l=s.n(n),o=s(523),j=s.n(o),d=s(91),b=s(719),h=s(12),x=["icon","color","stats","statTitle","series","options","type","height","className"],u=function(e){var t=e.icon,s=e.color,n=e.stats,o=e.statTitle,b=e.series,u=e.options,O=e.type,m=e.height,p=e.className,f=Object(i.a)(e,x);return Object(h.jsxs)(d.l,Object(a.a)(Object(a.a)({},f),{},{children:[Object(h.jsxs)(d.m,{className:l()("pb-0",Object(c.a)({},p,p)),children:[Object(h.jsx)(r.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:t}),Object(h.jsx)("h2",{className:"fw-bolder mt-1",children:n}),Object(h.jsx)("p",{className:"card-text",children:o})]}),Object(h.jsx)(j.a,{options:u,series:b,type:O,height:m||100})]}))};t.a=u,u.defaultProps={color:"primary",options:b.a}},684:function(e,t,s){"use strict";var a=s(523),c=s.n(a),i=s(91),r=s(12),n=function(e){var t=e.title,s=e.stats,a=e.options,n=e.series,l=e.type,o=e.height;return Object(r.jsx)(i.l,{className:"card-tiny-line-stats",children:Object(r.jsxs)(i.m,{className:"pb-50",children:[Object(r.jsx)("h6",{children:t}),Object(r.jsx)("h2",{className:"fw-bolder mb-1",children:s}),Object(r.jsx)(c.a,{options:a,series:n,type:l,height:o})]})})};t.a=n,n.defaultProps={height:100}},719:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return c}));var a={chart:{toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},c={chart:{toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#A9A2F6"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}}},788:function(e,t,s){"use strict";var a=s(18),c=s(1),i=s(7),r=s.n(i),n=s(929),l=s(649),o=s(12);t.a=function(e){var t=e.kFormatter,s=e.warning,i=Object(c.useState)(null),j=Object(a.a)(i,2),d=j[0],b=j[1],h={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(c.useEffect)((function(){return r.a.get("/card/card-statistics/orders").then((function(e){return b(e.data)})),function(){return b(null)}}),[]),null!==d?Object(o.jsx)(l.a,{icon:Object(o.jsx)(n.a,{size:21}),color:"warning",stats:t(d.analyticsData.orders),statTitle:"Orders Received",options:h,series:d.series,type:"area"}):null}},789:function(e,t,s){"use strict";var a=s(18),c=s(1),i=s(7),r=s.n(i),n=s(969),l=s(649),o=s(12);t.a=function(e){var t=e.kFormatter,s=Object(c.useState)(null),i=Object(a.a)(s,2),j=i[0],d=i[1];return Object(c.useEffect)((function(){return r.a.get("/card/card-statistics/subscribers").then((function(e){return d(e.data)})),function(){return d(null)}}),[]),null!==j?Object(o.jsx)(l.a,{icon:Object(o.jsx)(n.a,{size:21}),color:"primary",stats:t(j.analyticsData.subscribers),statTitle:"Subscribers Gained",series:j.series,type:"area"}):null}},794:function(e,t,s){"use strict";var a=s(17),c=s(31),i=s(6),r=s.n(i),n=s(964),l=s(832),o=s(856),j=s(503),d=s(91),b=s(12);t.a=function(e){var t=e.cols,s=[{title:"230k",subtitle:"Assigned",color:"light-primary",icon:Object(b.jsx)(n.a,{size:24})},{title:"230k",subtitle:"Inprogress",color:"light-primary",icon:Object(b.jsx)(n.a,{size:24})},{title:"230k",subtitle:"Pending Review",color:"light-primary",icon:Object(b.jsx)(n.a,{size:24})},{title:"230k",subtitle:"Request Changes",color:"light-primary",icon:Object(b.jsx)(n.a,{size:24})},{title:"8.549k",subtitle:"Overdue  ",color:"light-info",icon:Object(b.jsx)(l.a,{size:24})},{title:"1.423k",subtitle:"Completed",color:"light-danger",icon:Object(b.jsx)(o.a,{size:24})}];return Object(b.jsxs)(d.l,{className:"card-statistics",children:[Object(b.jsx)(d.p,{children:Object(b.jsx)(d.v,{tag:"h4",children:"Statistics"})}),Object(b.jsx)(d.m,{className:"statistics-body",children:Object(b.jsx)(d.jb,{children:s.map((function(e,i){var n=Object.keys(t),l=2===i?"sm":n[0];return Object(b.jsx)(d.B,Object(a.a)(Object(a.a)({},t),{},{className:r()(Object(c.a)({},"mb-2 mb-".concat(l,"-0"),i!==s.length-1)),children:Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)(j.a,{color:e.color,icon:e.icon,className:"me-2"}),Object(b.jsxs)("div",{className:"my-auto",children:[Object(b.jsx)("h6",{className:"fw-bolder mb-0",children:e.title}),Object(b.jsx)(d.u,{className:"font-small-3 mb-0",children:e.subtitle})]})]})}),i)}))})})]})}},797:function(e,t,s){"use strict";var a=s(18),c=s(1),i=s(7),r=s.n(i),n=s(684),l=s(12);t.a=function(e){var t=e.warning,s=Object(c.useState)(null),i=Object(a.a)(s,2),o=i[0],j=i[1];Object(c.useEffect)((function(){return r.a.get("/card/card-statistics/orders-bar-chart").then((function(e){return j(e.data)})),function(){return j(null)}}),[]);var d={chart:{stacked:!0,toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0,top:-15,bottom:-15}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%",borderRadius:[0,5],colors:{backgroundBarColors:["#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3"],backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},colors:[t],xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}};return null!==o?Object(l.jsx)(n.a,{height:70,type:"bar",options:d,title:o.title,stats:o.statistics,series:o.series}):null}},799:function(e,t,s){"use strict";var a=s(18),c=s(1),i=s(7),r=s.n(i),n=s(684),l=s(12);t.a=function(e){var t=e.info,s=Object(c.useState)(null),i=Object(a.a)(s,2),o=i[0],j=i[1];Object(c.useEffect)((function(){return r.a.get("/card/card-statistics/profit-line-chart").then((function(e){return j(e.data)})),function(){return j(null)}}),[]);var d={chart:{toolbar:{show:!1},zoom:{enabled:!1}},grid:{borderColor:"#EBEBEB",strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-30,bottom:-10}},stroke:{width:3},colors:[t],series:[{data:[0,20,5,30,15,45]}],markers:{size:2,colors:t,strokeColors:t,strokeWidth:2,strokeOpacity:1,strokeDashArray:0,fillOpacity:1,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:"#ffffff",strokeColor:t,size:5}],shape:"circle",radius:2,hover:{size:3}},xaxis:{labels:{show:!0,style:{fontSize:"0px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}};return null!==o?Object(l.jsx)(n.a,{height:70,type:"line",options:d,title:o.title,stats:o.statistics,series:o.series}):null}}}]);
//# sourceMappingURL=48.6ac737a8.chunk.js.map