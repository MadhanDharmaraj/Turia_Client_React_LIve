(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[125],{1590:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(91),n=a(18),r=a(523),l=a.n(r),i=a(13),j=function(){var e=Object(c.useState)(new Date),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.O,{className:"form-label",id:"timepicker",children:"Basic 24hrs"}),Object(i.jsx)(l.a,{className:"form-control",value:a,id:"timepicker",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0},onChange:function(e){return r(e)}})]})},m=function(){var e=Object(c.useState)(new Date),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.O,{className:"form-label",for:"range-picker",children:"Range"}),Object(i.jsx)(l.a,{value:a,id:"range-picker",className:"form-control",onChange:function(e){return r(e)},options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]}})]})},d=function(){var e=Object(c.useState)(new Date),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.O,{className:"form-label",for:"inline-picker",children:"Inline"}),Object(i.jsx)(l.a,{className:"form-control",value:a,options:{inline:!0},onChange:function(e){return r(e)}})]})},b=function(){var e=Object(c.useState)(new Date),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.O,{className:"form-label",for:"default-picker",children:"Default"}),Object(i.jsx)(l.a,{className:"form-control",value:a,onChange:function(e){return r(e)},id:"default-picker"})]})},o=function(){var e=Object(c.useState)(new Date),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.O,{className:"form-label",for:"date-time-picker",children:"Date & Time"}),Object(i.jsx)(l.a,{value:a,"data-enable-time":!0,id:"date-time-picker",className:"form-control",onChange:function(e){return r(e)}})]})},O=function(){var e=Object(c.useState)(new Date),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.O,{className:"form-label",for:"multi-dates-picker",children:"Multiple Dates"}),Object(i.jsx)(l.a,{value:a,id:"multi-dates-picker",className:"form-control",options:{mode:"multiple"},onChange:function(e){return r(e)}})]})},h=function(){var e=Object(c.useState)(new Date),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.O,{className:"form-label",for:"hf-picker",children:"Human Friendly"}),Object(i.jsx)(l.a,{value:a,id:"hf-picker",className:"form-control",onChange:function(e){return r(e)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})]})},u=function(){var e=Object(c.useState)(new Date),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.O,{className:"form-label",for:"disabled-picker",children:"Disabled Range"}),Object(i.jsx)(l.a,{value:a,id:"disabled-picker",className:"form-control",onChange:function(e){return r(e)},options:{dateFormat:"Y-m-d",disable:[{from:new Date,to:new Date((new Date).getTime()+432e6)}]}})]})},x=a(506);a(508),t.default=function(){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(x.a,{title:"Date & Time Picker",data:[{title:"Form Elements"},{title:"Date & Time Picker"}]}),Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Flatpickr"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)(s.jb,{children:[Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(b,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(j,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(o,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(O,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(m,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(h,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(u,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(d,{})})]})})]})]})}},506:function(e,t,a){"use strict";var c=a(17),s=a(2),n=a(132),r=a(6),l=a.n(r),i=a(893),j=a(849),m=a(914),d=a(909),b=a(846),o=a(91),O=a(13);t.a=function(e){var t=e.data,a=e.title;return Object(O.jsxs)("div",{className:"content-header row",children:[Object(O.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(O.jsx)("div",{className:"row breadcrumbs-top",children:Object(O.jsxs)("div",{className:"col-12",children:[a?Object(O.jsx)("h2",{className:"content-header-title float-start mb-0",children:a}):"",Object(O.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(O.jsxs)(o.g,{children:[Object(O.jsx)(o.h,{tag:"li",children:Object(O.jsx)(n.b,{to:"/",children:"Home"})}),t.map((function(e,a){var r=e.link?n.b:s.Fragment,i=t.length-1===a;return Object(O.jsx)(o.h,{tag:"li",active:!i,className:l()({"text-primary":!i}),children:Object(O.jsx)(r,Object(c.a)(Object(c.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},a)}))]})})]})})}),Object(O.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(O.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(O.jsxs)(o.ub,{children:[Object(O.jsx)(o.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(O.jsx)(i.a,{size:14})}),Object(O.jsxs)(o.F,{tag:"ul",end:!0,children:[Object(O.jsxs)(o.E,{tag:n.b,to:"/apps/todo",children:[Object(O.jsx)(j.a,{className:"me-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(O.jsxs)(o.E,{tag:n.b,to:"/apps/chat",children:[Object(O.jsx)(m.a,{className:"me-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(O.jsxs)(o.E,{tag:n.b,to:"/apps/email",children:[Object(O.jsx)(d.a,{className:"me-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(O.jsxs)(o.E,{tag:n.b,to:"/apps/calendar",children:[Object(O.jsx)(b.a,{className:"me-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},508:function(e,t,a){}}]);
//# sourceMappingURL=125.f35edb40.chunk.js.map