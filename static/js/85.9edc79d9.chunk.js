(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[85],{1369:function(e,t,a){},1639:function(e,t,a){"use strict";a.r(t);var c=a(16),s=a(1),n=a(6),l=a.n(n),r=a(487),i=a(895),j=a(90),d=a(745),b=a(11),m=function(e){var t=e.data,a=[],n=Object(s.useState)("Payment"),l=Object(c.a)(n,2),m=l[0],h=l[1];Object.entries(t).forEach((function(e){var t=Object(c.a)(e,2),s=(t[0],t[1]);a.push(s)}));return Object(b.jsx)("div",{id:"faq-tabs",children:Object(b.jsxs)(j.ib,{children:[Object(b.jsx)(j.B,{lg:"3",md:"4",sm:"12",children:Object(b.jsxs)("div",{className:"faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0",children:[Object(b.jsx)(j.U,{tag:"ul",className:"nav-left",pills:!0,vertical:!0,children:a.map((function(e){var t=r[e.icon];return Object(b.jsx)(j.V,{tag:"li",children:Object(b.jsxs)(j.W,{active:m===e.title,onClick:function(){return t=e.title,h(t);var t},children:[Object(b.jsx)(t,{size:18,className:"me-1"}),Object(b.jsx)("span",{className:"fw-bold",children:e.title})]})},e.title)}))}),Object(b.jsx)("img",{alt:"illustration",src:d.a,style:{transform:"scaleX(1)"},className:"img-fluid d-none d-md-block"})]})}),Object(b.jsx)(j.B,{lg:"9",md:"8",sm:"12",children:Object(b.jsx)(j.kb,{activeTab:m,children:a.map((function(e){var t=r[e.icon];return Object(b.jsxs)(j.lb,{tabId:e.title,children:[Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)("div",{className:"avatar avatar-tag bg-light-primary me-1",children:Object(b.jsx)(t,{size:20})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"mb-0",children:e.title}),Object(b.jsx)("span",{children:e.subtitle})]})]}),e.qandA.length?Object(b.jsx)(j.rb,{className:"accordion-margin mt-2",children:e.qandA.map((function(e,t){return Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.c,{tag:"h2",targetId:String(t+1),children:e.question}),Object(b.jsx)(j.b,{accordionId:String(t+1),children:e.ans})]},t+1)}))}):Object(b.jsx)("div",{className:"text-center p-5",children:Object(b.jsxs)("h5",{className:"p-1",children:[Object(b.jsx)(i.a,{size:"19",className:"me-25"})," No Results Found"]})})]},e.title)}))})})]})})},h=a(823),o=function(e){var t=e.searchTerm,c=e.setSearchTerm,s=e.getFAQData;return Object(b.jsx)("div",{id:"faq-search-filter",children:Object(b.jsx)(j.l,{className:"faq-search",style:{backgroundImage:"url(".concat(a(664).default,")")},children:Object(b.jsxs)(j.m,{className:"text-center",children:[Object(b.jsx)("h2",{className:"text-primary",children:"Let's answer some questions"}),Object(b.jsx)(j.u,{className:"mb-2",children:"or choose a category to quickly find the help you need"}),Object(b.jsx)(j.H,{className:"faq-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(b.jsxs)(j.L,{className:"input-group-merge",children:[Object(b.jsx)(j.M,{children:Object(b.jsx)(h.a,{size:14})}),Object(b.jsx)(j.K,{value:t,onChange:function(e){return function(e){c(e.target.value),s(e.target.value)}(e)},placeholder:"search faq..."})]})})]})})})},x=a(916),O=a(817),u=function(){return Object(b.jsx)("div",{className:"faq-contact",children:Object(b.jsxs)(j.ib,{className:"mt-5 pt-75",children:[Object(b.jsxs)(j.B,{className:"text-center",sm:"12",children:[Object(b.jsx)("h2",{children:"You still have a question?"}),Object(b.jsx)("p",{className:"mb-3",children:"If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"})]}),Object(b.jsx)(j.B,{sm:"6",children:Object(b.jsx)(j.l,{className:"text-center faq-contact-card shadow-none py-1",children:Object(b.jsxs)(j.m,{children:[Object(b.jsx)("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:Object(b.jsx)(x.a,{size:18})}),Object(b.jsx)("h4",{children:"+ (810) 2548 2568"}),Object(b.jsx)("span",{className:"text-body",children:"We are always happy to help!"})]})})}),Object(b.jsx)(j.B,{sm:"6",children:Object(b.jsx)(j.l,{className:"text-center faq-contact-card shadow-none py-1",children:Object(b.jsxs)(j.m,{children:[Object(b.jsx)("div",{className:"avatar avatar-tag bg-light-primary mb-2 mx-auto",children:Object(b.jsx)(O.a,{size:18})}),Object(b.jsx)("h4",{children:"hello@help.com"}),Object(b.jsx)("span",{className:"text-body",children:"Best way to get answer faster!"})]})})})]})})},p=a(488);a(1369),t.default=function(){var e=Object(s.useState)(null),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),i=Object(c.a)(r,2),j=i[0],d=i[1],h=function(e){return l.a.get("/faq/data",{params:{q:e}}).then((function(e){n(e.data)}))};return Object(s.useEffect)((function(){h(j)}),[]),Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(p.a,{title:"FAQ",data:[{title:"Pages"},{title:"FAQ"}]}),Object(b.jsx)(o,{searchTerm:j,setSearchTerm:d,getFAQData:h}),null!==a?Object(b.jsx)(m,{data:a,searchTerm:j,setSearchTerm:d}):null,Object(b.jsx)(u,{})]})}},488:function(e,t,a){"use strict";var c=a(15),s=a(1),n=a(131),l=a(4),r=a.n(l),i=a(889),j=a(845),d=a(819),b=a(817),m=a(818),h=a(90),o=a(11);t.a=function(e){var t=e.data,a=e.title;return Object(o.jsxs)("div",{className:"content-header row",children:[Object(o.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(o.jsx)("div",{className:"row breadcrumbs-top",children:Object(o.jsxs)("div",{className:"col-12",children:[a?Object(o.jsx)("h2",{className:"content-header-title float-start mb-0",children:a}):"",Object(o.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(o.jsxs)(h.g,{children:[Object(o.jsx)(h.h,{tag:"li",children:Object(o.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,a){var l=e.link?n.b:s.Fragment,i=t.length-1===a;return Object(o.jsx)(h.h,{tag:"li",active:!i,className:r()({"text-primary":!i}),children:Object(o.jsx)(l,Object(c.a)(Object(c.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},a)}))]})})]})})}),Object(o.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(o.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(o.jsxs)(h.tb,{children:[Object(o.jsx)(h.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(o.jsx)(i.a,{size:14})}),Object(o.jsxs)(h.F,{tag:"ul",end:!0,children:[Object(o.jsxs)(h.E,{tag:n.b,to:"/apps/todo",children:[Object(o.jsx)(j.a,{className:"me-1",size:14}),Object(o.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(o.jsxs)(h.E,{tag:n.b,to:"/apps/chat",children:[Object(o.jsx)(d.a,{className:"me-1",size:14}),Object(o.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(o.jsxs)(h.E,{tag:n.b,to:"/apps/email",children:[Object(o.jsx)(b.a,{className:"me-1",size:14}),Object(o.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(o.jsxs)(h.E,{tag:n.b,to:"/apps/calendar",children:[Object(o.jsx)(m.a,{className:"me-1",size:14}),Object(o.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},664:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/banner.06ea9907.png"},745:function(e,t,a){"use strict";t.a=a.p+"static/media/faq-illustrations.3abcf165.svg"}}]);
//# sourceMappingURL=85.9edc79d9.chunk.js.map