(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[98],{1671:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(487),n=t(15),r=t(16),l=t(3),i=t.n(l),d=t(576),j=t(846),o=t(805),b=t(922),h=t(90),O=t(10),x=function(e){var c=e.title,t=e.actions,a=e.children,l=e.collapseIcon,x=e.reloadIcon,m=e.removeIcon,u=e.endReload,p=Object(s.useState)(!1),g=Object(r.a)(p,2),v=g[0],N=g[1],f=Object(s.useState)(!0),C=Object(r.a)(f,2),y=C[0],k=C[1],z=Object(s.useState)(!0),w=Object(r.a)(z,2),R=w[0],A=w[1],E={collapse:l||j.a,remove:m||o.a,reload:x||b.a},F=function(e){switch(e){case"collapse":return k(!y);case"remove":return A(!1);case"reload":return N(!0)}},B=function(){N(!1)};Object(s.useEffect)((function(){v&&u(B)}));var I="collapse"===t||t.includes("collapse")?h.C:s.Fragment,T="reload"===t||t.includes("reload")?d.a:s.Fragment;return Object(O.jsx)(T,Object(n.a)(Object(n.a)({},"reload"===t||t.includes("reload")?{blocking:v}:{}),{},{children:Object(O.jsxs)(h.l,{className:i()("card-action",{"d-none":!R}),children:[Object(O.jsxs)(h.p,{children:[Object(O.jsx)(h.v,{tag:"h4",children:c}),Object(O.jsx)("div",{className:"action-icons",children:function(){if(Array.isArray(t))return t.map((function(e,c){var s=E[e];return Object(O.jsx)(s,{className:i()("cursor-pointer",{"me-50":c<t.length-1}),size:15,onClick:function(){return F(e)}},c)}));var e=E[t];return Object(O.jsx)(e,{className:"cursor-pointer",size:15,onClick:function(){return F(t)}})}()})]}),Object(O.jsx)(I,Object(n.a)(Object(n.a)({},"collapse"===t||t.includes("collapse")?{isOpen:y}:{}),{},{children:a}))]})}))};c.default=function(){return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(a.a,{title:"Card Actions",data:[{title:"Cards"},{title:"Card Actions"}]}),Object(O.jsx)(h.ib,{children:Object(O.jsx)(h.B,{sm:"12",children:Object(O.jsx)(x,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(O.jsx)(h.m,{className:"pt-0",children:Object(O.jsxs)(h.mb,{responsive:!0,bordered:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Action"}),Object(O.jsx)("th",{children:"Icon"}),Object(O.jsx)("th",{children:"Details"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Collapse"}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsx)(j.a,{className:"collapse-icon",size:15})}),Object(O.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Refresh Content"}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsx)(b.a,{size:15})}),Object(O.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Remove Card"}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsx)(o.a,{size:15})}),Object(O.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(O.jsxs)(h.ib,{children:[Object(O.jsx)(h.B,{md:"6",sm:"12",children:Object(O.jsx)(x,{title:"Collapse",actions:"collapse",children:Object(O.jsxs)(h.m,{className:"pt-0",children:[Object(O.jsxs)(h.u,{children:["You can create a collapsible content by using our ",Object(O.jsx)("code",{children:"CardAction"})," component and by passing prop"," ",Object(O.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(O.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(O.jsx)(j.a,{size:15})," to see card collapse in action"]})]})})}),Object(O.jsx)(h.B,{md:"6",sm:"12",children:Object(O.jsx)(x,{title:"Reload",actions:"reload",endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(O.jsxs)(h.m,{className:"pt-0",children:[Object(O.jsxs)(h.u,{children:["To create a re-loadable card pass prop ",Object(O.jsx)("code",{children:"actions='reload'"})," and pass prop"," ",Object(O.jsx)("code",{children:"endReload"})," to end the loading."]}),Object(O.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(O.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})}),Object(O.jsx)(h.B,{md:"6",sm:"12",children:Object(O.jsx)(x,{title:"Remove",actions:"remove",children:Object(O.jsxs)(h.m,{className:"pt-0",children:[Object(O.jsxs)(h.u,{children:["You can add refresh content action to card by adding class ",Object(O.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(O.jsxs)(h.u,{className:"mb-0",children:["Click on ",Object(O.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})})]})]})}},487:function(e,c,t){"use strict";var s=t(15),a=t(1),n=t(131),r=t(3),l=t.n(r),i=t(888),d=t(844),j=t(818),o=t(816),b=t(817),h=t(90),O=t(10);c.a=function(e){var c=e.data,t=e.title;return Object(O.jsxs)("div",{className:"content-header row",children:[Object(O.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(O.jsx)("div",{className:"row breadcrumbs-top",children:Object(O.jsxs)("div",{className:"col-12",children:[t?Object(O.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(O.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(O.jsxs)(h.g,{children:[Object(O.jsx)(h.h,{tag:"li",children:Object(O.jsx)(n.b,{to:"/",children:"Home"})}),c.map((function(e,t){var r=e.link?n.b:a.Fragment,i=c.length-1===t;return Object(O.jsx)(h.h,{tag:"li",active:!i,className:l()({"text-primary":!i}),children:Object(O.jsx)(r,Object(s.a)(Object(s.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]})})}),Object(O.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(O.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(O.jsxs)(h.tb,{children:[Object(O.jsx)(h.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(O.jsx)(i.a,{size:14})}),Object(O.jsxs)(h.F,{tag:"ul",end:!0,children:[Object(O.jsxs)(h.E,{tag:n.b,to:"/apps/todo",children:[Object(O.jsx)(d.a,{className:"me-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(O.jsxs)(h.E,{tag:n.b,to:"/apps/chat",children:[Object(O.jsx)(j.a,{className:"me-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(O.jsxs)(h.E,{tag:n.b,to:"/apps/email",children:[Object(O.jsx)(o.a,{className:"me-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(O.jsxs)(h.E,{tag:n.b,to:"/apps/calendar",children:[Object(O.jsx)(b.a,{className:"me-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},576:function(e,c,t){"use strict";var s=t(15),a=t(29),n=t(1),r=t(3),l=t.n(r),i=t(90),d=(t(628),t(10)),j=function(e){var c,t=e.children,r=e.blocking,i=e.loader,j=e.className,o=e.tag,b=e.overlayColor,h=o;return Object(d.jsxs)(h,{className:l()("ui-loader",(c={},Object(a.a)(c,j,j),Object(a.a)(c,"show",r),c)),children:[t,r?Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",Object(s.a)({className:"overlay"},r&&b?{style:{backgroundColor:b}}:{})),Object(d.jsx)("div",{className:"loader",children:i})]}):null]})};c.a=j,j.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(i.jb,{color:"primary"})}},628:function(e,c,t){}}]);
//# sourceMappingURL=98.57aebc7a.chunk.js.map