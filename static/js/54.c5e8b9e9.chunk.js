(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[54,89],{1544:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(91),n=c(506),i=c(655),l=c(13);t.default=function(){return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)(n.a,{title:"Layout collapsed menu",data:[{title:"Layouts"},{title:"Collapsed menu"}]}),Object(l.jsx)(a.e,{color:"primary",children:Object(l.jsxs)("div",{className:"alert-body",children:[Object(l.jsx)("span",{className:"fw-bold",children:"Info: "}),Object(l.jsxs)("span",{children:["Use this layout to set menu (navigation) default collapsed. Please check"," ",Object(l.jsx)("a",{href:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/docs/development/page-layouts",target:"_blank",children:"the Layout collapsed menu documentation"})," ","for more details."]})]})}),Object(l.jsx)(i.default,{})]})}},506:function(e,t,c){"use strict";var s=c(17),a=c(2),n=c(132),i=c(6),l=c.n(i),r=c(896),j=c(852),d=c(828),o=c(826),b=c(827),u=c(91),m=c(13);t.a=function(e){var t=e.data,c=e.title;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[c?Object(m.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(u.g,{children:[Object(m.jsx)(u.h,{tag:"li",children:Object(m.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,c){var i=e.link?n.b:a.Fragment,r=t.length-1===c;return Object(m.jsx)(u.h,{tag:"li",active:!r,className:l()({"text-primary":!r}),children:Object(m.jsx)(i,Object(s.a)(Object(s.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(m.jsxs)(u.ub,{children:[Object(m.jsx)(u.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(r.a,{size:14})}),Object(m.jsxs)(u.F,{tag:"ul",end:!0,children:[Object(m.jsxs)(u.E,{tag:n.b,to:"/apps/todo",children:[Object(m.jsx)(j.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(u.E,{tag:n.b,to:"/apps/chat",children:[Object(m.jsx)(d.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(u.E,{tag:n.b,to:"/apps/email",children:[Object(m.jsx)(o.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(u.E,{tag:n.b,to:"/apps/calendar",children:[Object(m.jsx)(b.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},568:function(e,t,c){},609:function(e,t,c){"use strict";var s=c(4),a=c(18),n=c(1),i=c.n(n),l=c(91),r=c(909),j=c(910),d=c(12),o=c(507),b=c(153),u=c(2),m=c(133),h=c(514),O=c.n(h),x=c(13),f=Object(d.b)(),p=Object(d.e)(),v=Object(d.d)();t.a=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.dashboard})),c=Object(u.useState)(!1),n=Object(a.a)(c,2),d=n[0],h=n[1],g=Object(u.useState)(null),N=Object(a.a)(g,2),y=N[0],Y=N[1],k=Object(u.useState)(null),M=Object(a.a)(k,2),I=M[0],z=M[1],D=Object(u.useState)(null),w=Object(a.a)(D,2),S=w[0],E=w[1],H=Object(u.useState)(null),B=Object(a.a)(H,2),C=B[0],P=B[1],T=Object(u.useState)(null),J=Object(a.a)(T,2),F=J[0],L=J[1],R={color:"light-success",icon:Object(x.jsx)(r.a,{size:24})},q={color:"light-danger",icon:Object(x.jsx)(j.a,{size:24})},A=function(){var t=Object(s.a)(i.a.mark((function t(){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={organizationId:f,punchIn:O()().unix(),userId:p,createdBy:p},t.next=3,e(Object(b.c)(c));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(e){var t=e/1e3,c=parseInt(t/3600);t%=3600;var s=parseInt(t/60);return t%=60,"".concat(c," Hrs : ").concat(s," Mins")},U=function(){var t=Object(s.a)(i.a.mark((function t(){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={organizationId:f,punchOut:O()().unix(),userId:p,id:y.id,updatedBy:p},t.next=3,e(Object(b.d)(c));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){if(void 0!==S&&null!==S){var e=O()(),t=O()(e,"DD/MM/YYYY HH:mm:ss").diff(O()(S,"DD/MM/YYYY HH:mm:ss"));P(G(t))}}),[S]),Object(u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("loggedIn"));if(null===e)h(!1);else{h(!0),L(e.punchout),Y(e),z(O.a.unix(e.punchin).format("h:m a"));var t=O.a.unix(e.punchin).format("DD/MM/YYYY HH:mm:ss");E(t),e.punchout&&(h(!1),L(O.a.unix(e.punchout).format("h:m a")))}}),[]),Object(u.useEffect)((function(){if(t&&t.data&&Object.keys(t.data).length>0){h(!0);var e=t.data;Y(e),localStorage.setItem("loggedIn",JSON.stringify(e)),z(O.a.unix(e.punchin).format("h:m a")),E(O.a.unix(e.punchin).format("DD/MM/YYYY HH:mm:ss")),e.punchout&&(h(!1),L(O.a.unix(e.punchout).format("h:m a"))),null===e.punchout&&setInterval((function(){!function(){if(void 0!==S&&null!==S){var e=O()(),t=O()(e,"DD/MM/YYYY HH:mm:ss").diff(O()(S,"DD/MM/YYYY HH:mm:ss"));P(G(t))}}()}),1e3)}else localStorage.removeItem("loggedIn"),Y(null),h(!1),L(null),z(null),E(null)}),[t.data]),Object(u.useEffect)(Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(b.b)({userId:p}));case 2:case"end":return t.stop()}}),t)}))),[]),Object(x.jsx)(l.l,{className:"card-congratulations-medal",children:Object(x.jsxs)(l.m,{className:"flex",children:[Object(x.jsxs)("h5",{children:["Welcome \ud83c\udf89 ",v.name,"!"]}),d?Object(x.jsx)(l.i,{color:"danger",onClick:function(){return U()},children:"Punch Out"}):Object(x.jsx)(l.i,{color:"success",onClick:function(){return A()},children:"Punch In"}),Object(x.jsxs)(l.jb,{className:"mt-2",children:[Object(x.jsxs)(l.B,{className:"d-flex align-items-center",sm:12,lg:6,children:[Object(x.jsx)(o.a,{color:R.color,icon:R.icon,className:"me-2 p-1"}),Object(x.jsxs)(l.B,{children:[Object(x.jsx)("h6",{className:"fw-bolder mb-0",children:"Punch In"}),Object(x.jsx)(l.u,{className:"font-small-3 mb-0",children:null===I?"00:00:00":I})]})]}),Object(x.jsxs)(l.B,{className:"d-flex align-items-center",sm:12,lg:6,children:[Object(x.jsx)(o.a,{color:q.color,icon:q.icon,className:"me-2 p-1"}),Object(x.jsxs)(l.B,{children:[Object(x.jsx)("h6",{className:"fw-bolder mb-0",children:"Punch Out"}),Object(x.jsx)(l.u,{className:"font-small-3 mb-0",children:null===F?C:F})]})]})]})]})})}},610:function(e,t,c){"use strict";var s=c(17),a=c(31),n=c(18),i=c(6),l=c.n(i),r=c(955),j=c(507),d=c(5),o=c(91),b=c(2),u=c(13),m=[{status:1,title:"0",subtitle:"Assigned",color:"light-primary",icon:Object(u.jsx)(r.a,{size:24})},{status:2,title:"0",subtitle:"Inprogress",color:"light-primary",icon:Object(u.jsx)(r.a,{size:24})},{status:3,title:"0",subtitle:"Completed",color:"light-primary",icon:Object(u.jsx)(r.a,{size:24})},{status:6,title:"0",subtitle:"Pending Review",color:"light-primary",icon:Object(u.jsx)(r.a,{size:24})},{status:7,title:"0",subtitle:"Request Changes",color:"light-primary",icon:Object(u.jsx)(r.a,{size:24})}];t.a=function(e){var t=e.cols,c=Object(b.useState)([]),i=Object(n.a)(c,2),r=i[0],h=i[1];Object(b.useEffect)((function(){d.a.post("tasks/taskcountbystatus").then((function(e){m.forEach((function(t,c){var s=e.data.tasks.findIndex((function(e){return parseInt(e.taskstatus)===t.status}));s>-1&&(m[c].title=e.data.tasks[s].count)})),h(m)})).catch((function(e){console.log(e)}))}),[]);return Object(u.jsxs)(o.l,{className:"card-statistics",children:[Object(u.jsx)(o.p,{children:Object(u.jsx)(o.v,{tag:"h4",children:"Statistics"})}),Object(u.jsx)(o.m,{className:"statistics-body",children:Object(u.jsx)(o.jb,{children:r.map((function(e,c){var n=Object.keys(t),i=5===c?"sm":n[0];return Object(u.jsx)(o.B,Object(s.a)(Object(s.a)({},t),{},{className:l()(Object(a.a)({},"mb-2 mb-".concat(i,"-0"),c!==m.length-1)),children:Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)(j.a,{color:e.color,icon:e.icon,className:"me-2"}),Object(u.jsxs)("div",{className:"my-auto",children:[Object(u.jsx)("h6",{className:"fw-bolder mb-0",children:e.title}),Object(u.jsx)(o.u,{className:"font-small-3 mb-0",children:e.subtitle})]})]})}),c)}))})})]})}},640:function(e,t,c){},655:function(e,t,c){"use strict";c.r(t);var s=c(91),a=c(609),n=c(610),i=c(18),l=c(507),r=c(853),j=c(920),d=c(2),o=c(5),b=c(12),u=c(514),m=c.n(u),h=c(13),O=Object(b.e)(),x=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=m()().startOf("day").unix();Object(d.useEffect)((function(){o.a.post("/tasks/dashboardmytasklist",{userId:O,endDate:n}).then((function(e){a(e.data.tasks)})).catch((function(e){console.log(e)}))}),[]);return Object(h.jsxs)(s.l,{className:"card-transaction",children:[Object(h.jsx)(s.p,{children:Object(h.jsxs)(s.v,{tag:"h4",children:[Object(h.jsx)(j.a,{size:18}),"My Tasks"]})}),Object(h.jsx)(s.m,{children:c.map((function(e){return Object(h.jsxs)("div",{className:"transaction-item",children:[Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)(l.a,{className:"rounded",size:12,color:"priamry",icon:Object(h.jsx)(r.a,{size:12})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h6",{className:"transaction-title",children:e.servicename}),Object(h.jsx)("small",{children:e.clientname})]})]}),Object(h.jsx)("div",{className:"fw-bolder text-danger",children:(t=e.enddate,m.a.unix(t).format("MMM DD, YYYY"))})]},e.servicename);var t}))})]})},f=Object(b.e)(),p=function(){var e=m()().startOf("day").unix(),t=Object(d.useState)([]),c=Object(i.a)(t,2),a=c[0],n=c[1];Object(d.useEffect)((function(){o.a.post("/tasks/dashboardmytasklisttoday",{userId:f,endDate:e}).then((function(e){n(e.data.tasks)})).catch((function(e){console.log(e)}))}),[]);return Object(h.jsxs)(s.l,{className:"card-transaction",children:[Object(h.jsx)(s.p,{children:Object(h.jsxs)(s.v,{tag:"h4",children:[Object(h.jsx)(j.a,{size:18}),"My Task Dues Today "]})}),Object(h.jsx)(s.m,{children:a.map((function(e){return Object(h.jsxs)("div",{className:"transaction-item",children:[Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)(l.a,{className:"rounded",size:12,color:"priamry",icon:Object(h.jsx)(r.a,{size:12})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h6",{className:"transaction-title",children:e.servicename}),Object(h.jsx)("small",{children:e.clientname})]})]}),Object(h.jsx)("div",{className:"fw-bolder text-danger",children:(t=e.enddate,m.a.unix(t).format("MMM DD, YYYY"))})]},e.servicename);var t}))})]})},v=Object(b.e)(),g=function(){var e=m()().startOf("day").unix(),t=Object(d.useState)([]),c=Object(i.a)(t,2),a=c[0],n=c[1];Object(d.useEffect)((function(){o.a.post("/tasks/dashboardmytaskoverdues",{userId:v,endDate:e}).then((function(e){n(e.data.tasks)})).catch((function(e){console.log(e)}))}),[]);return Object(h.jsxs)(s.l,{className:"card-transaction",children:[Object(h.jsx)(s.p,{children:Object(h.jsxs)(s.v,{tag:"h4",children:[Object(h.jsx)(j.a,{size:18}),"My OverDue Tasks"]})}),Object(h.jsx)(s.m,{children:a.map((function(e){return Object(h.jsxs)("div",{className:"transaction-item",children:[Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)(l.a,{className:"rounded",size:12,color:"priamry",icon:Object(h.jsx)(r.a,{size:12})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h6",{className:"transaction-title",children:e.servicename}),Object(h.jsx)("small",{children:e.clientname})]})]}),Object(h.jsx)("div",{className:"fw-bolder text-danger",children:(t=e.enddate,m.a.unix(t).format("MMM DD, YYYY"))})]},e.servicename);var t}))})]})};c(568),c(640),t.default=function(){return Object(h.jsxs)("div",{id:"dashboard-ecommerce",children:[Object(h.jsxs)(s.jb,{className:"match-height",children:[Object(h.jsx)(s.B,{xl:"4",md:"6",xs:"12",children:Object(h.jsx)(a.a,{})}),Object(h.jsx)(s.B,{xl:"8",md:"6",xs:"12",children:Object(h.jsx)(n.a,{cols:{xl:"3",sm:"6"}})})]}),Object(h.jsxs)(s.jb,{className:"match-height",children:[Object(h.jsx)(s.B,{xl:"4",md:"6",xs:"12",children:Object(h.jsx)(x,{})}),Object(h.jsx)(s.B,{xl:"4",md:"6",xs:"12",children:Object(h.jsx)(p,{cols:{xl:"2",sm:"6"}})}),Object(h.jsx)(s.B,{xl:"4",md:"6",xs:"12",children:Object(h.jsx)(g,{cols:{xl:"2",sm:"6"}})})]})]})}}}]);
//# sourceMappingURL=54.c5e8b9e9.chunk.js.map