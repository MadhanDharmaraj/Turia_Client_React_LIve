(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[176],{1598:function(e,c,s){"use strict";s.r(c);var t=s(1),r=s(534),a=s.n(r),l=s(91),n=s(12),i=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"date",children:"Date"}),Object(n.jsx)(a.a,{className:"form-control",placeholder:"2001-01-01",options:{date:!0,delimiter:"-",datePattern:["Y","m","d"]},id:"date"})]})},j=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"time",children:"Time"}),Object(n.jsx)(a.a,{className:"form-control",placeholder:"12:00:00",options:{time:!0,timePattern:["h","m","s"]},id:"time"})]})},d=(s(544),function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"phone-number",children:"Phone Number"}),Object(n.jsxs)(l.M,{className:"input-group-merge",children:[Object(n.jsx)(l.N,{children:"US (+1)"}),Object(n.jsx)(a.a,{className:"form-control",placeholder:"1 234 567 8900",options:{phone:!0,phoneRegionCode:"US"},id:"phone-number"})]})]})}),o=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"blocks",children:"Blocks"}),Object(n.jsx)(a.a,{className:"form-control",placeholder:"Blocks [4, 3, 3]",options:{blocks:[4,3,3],uppercase:!0},id:"blocks"})]})},m=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"prefix",children:"Prefix"}),Object(n.jsx)(a.a,{className:"form-control",options:{prefix:"+63",blocks:[3,3,3,4],uppercase:!0},id:"prefix"})]})},b=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"delimiters",children:"Delimiters"}),Object(n.jsx)(a.a,{className:"form-control",placeholder:"Delimiter: '.'",options:{delimiter:"\xb7",blocks:[3,3,3],uppercase:!0},id:"delimiters"})]})},x=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"credit-card",children:"Credit Card"}),Object(n.jsx)(a.a,{className:"form-control",placeholder:"0000 0000 0000 0000",options:{creditCard:!0},id:"credit-card"})]})},O=s(504),h=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"custom-delimiters",children:"Custom Delimiters"}),Object(n.jsx)(a.a,{className:"form-control",placeholder:"Delimiter: ['.', '.', '-']",options:{delimiters:[".",".","-"],blocks:[3,3,3,2],uppercase:!0},id:"custom-delimiters"})]})},p=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(l.O,{for:"numeral-formatting",children:"Numeral Formatting"}),Object(n.jsx)(a.a,{className:"form-control",placeholder:"10,000",options:{numeral:!0,numeralThousandsGroupStyle:"thousand"},id:"numeral-formatting"})]})};c.default=function(){return Object(n.jsxs)(t.Fragment,{children:[Object(n.jsx)(O.a,{title:"Input Mask",data:[{title:"Form Elements"},{title:"Input Mask"}]}),Object(n.jsx)(l.jb,{children:Object(n.jsx)(l.B,{sm:"12",children:Object(n.jsxs)(l.l,{children:[Object(n.jsx)(l.p,{children:Object(n.jsx)(l.v,{tag:"h4",children:"Input Masks"})}),Object(n.jsx)(l.m,{children:Object(n.jsxs)(l.jb,{children:[Object(n.jsx)(l.B,{className:"mb-2",xl:"4",md:"6",sm:"12",children:Object(n.jsx)(x,{})}),Object(n.jsx)(l.B,{className:"mb-2",xl:"4",md:"6",sm:"12",children:Object(n.jsx)(d,{})}),Object(n.jsx)(l.B,{className:"mb-2",xl:"4",md:"6",sm:"12",children:Object(n.jsx)(i,{})}),Object(n.jsx)(l.B,{className:"mb-2",xl:"4",md:"6",sm:"12",children:Object(n.jsx)(j,{})}),Object(n.jsx)(l.B,{className:"mb-2",xl:"4",md:"6",sm:"12",children:Object(n.jsx)(p,{})}),Object(n.jsx)(l.B,{className:"mb-2",xl:"4",md:"6",sm:"12",children:Object(n.jsx)(o,{})}),Object(n.jsx)(l.B,{xl:"4",md:"6",sm:"12",children:Object(n.jsx)(b,{})}),Object(n.jsx)(l.B,{xl:"4",md:"6",sm:"12",children:Object(n.jsx)(h,{})}),Object(n.jsx)(l.B,{xl:"4",md:"6",sm:"12",children:Object(n.jsx)(m,{})})]})})]})})})]})}},504:function(e,c,s){"use strict";var t=s(17),r=s(1),a=s(132),l=s(6),n=s.n(l),i=s(907),j=s(863),d=s(838),o=s(836),m=s(837),b=s(91),x=s(12);c.a=function(e){var c=e.data,s=e.title;return Object(x.jsxs)("div",{className:"content-header row",children:[Object(x.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(x.jsx)("div",{className:"row breadcrumbs-top",children:Object(x.jsxs)("div",{className:"col-12",children:[s?Object(x.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(x.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(x.jsxs)(b.g,{children:[Object(x.jsx)(b.h,{tag:"li",children:Object(x.jsx)(a.b,{to:"/",children:"Home"})}),c.map((function(e,s){var l=e.link?a.b:r.Fragment,i=c.length-1===s;return Object(x.jsx)(b.h,{tag:"li",active:!i,className:n()({"text-primary":!i}),children:Object(x.jsx)(l,Object(t.a)(Object(t.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},s)}))]})})]})})}),Object(x.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(x.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(x.jsxs)(b.ub,{children:[Object(x.jsx)(b.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(x.jsx)(i.a,{size:14})}),Object(x.jsxs)(b.F,{tag:"ul",end:!0,children:[Object(x.jsxs)(b.E,{tag:a.b,to:"/apps/todo",children:[Object(x.jsx)(j.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(x.jsxs)(b.E,{tag:a.b,to:"/apps/chat",children:[Object(x.jsx)(d.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(x.jsxs)(b.E,{tag:a.b,to:"/apps/email",children:[Object(x.jsx)(o.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(x.jsxs)(b.E,{tag:a.b,to:"/apps/calendar",children:[Object(x.jsx)(m.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}}}]);
//# sourceMappingURL=176.83d142dc.chunk.js.map