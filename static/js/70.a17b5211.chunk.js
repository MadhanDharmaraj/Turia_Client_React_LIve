(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[70],{1691:function(e,c,t){"use strict";t.r(c);var a=t(17),n=t(4),s=t(18),r=t(2),i=t.n(r),l=t(508),d=t(11),o=t(132),j=t(133),b=t(506),u=t(519),m=t(520),x=t(148),O=t(5),f=t(6),p=t.n(f),h=t(91),v=(t(522),t(509),t(507),t(512),t(1)),g=t(13),N=t(12),y=Object(g.b)(),B=Object(g.d)(),I=function(){var e=Object(d.f)({}),c=Object(j.b)(),t=Object(v.useState)([]),r=Object(s.a)(t,2),f=r[0],g=r[1],I=Object(v.useState)(!0),S=Object(s.a)(I,2),w=S[0],C=S[1],R=Object(v.useState)([]),A=Object(s.a)(R,2),P=A[0],T=A[1],q=Object(v.useState)([]),z=Object(s.a)(q,2),E=z[0],k=z[1],G=u.d().shape({createdBy:u.f().default(B),categoryId:u.f().nullable(),categoryType:u.c().default(1),name:u.f().required("Please Enter Service Name"),organizationId:u.c().default(y),taxGroupId:u.f().nullable(),sellingPrice:u.f().nullable(),isTaxApplicable:u.b().default(!0),exemptionReasonId:u.c().when(["isTaxApplicable"],{is:function(e){return!e},then:u.c().required("Please Select Exemption Reason")}).nullable(),sacCode:u.f().nullable(),description:u.f().nullable()}),L=Object(b.f)({resolver:Object(m.a)(G),defaultValues:G.cast()}),V=L.handleSubmit,J=L.control,D=L.formState.errors,F=L.setValue;Object(v.useEffect)((function(){O.a.post("/taxgroups/dropdown").then((function(e){var c=e.data;T(c.taxgroups)})),O.a.post("/categories/list").then((function(e){var c=e.data;g(c.categories)})),O.a.post("/exemptionreasons/dropdown").then((function(e){var c=e.data;k(c.exemptionreasons)}))}),[]);var H=function(){var t=Object(n.a)(i.a.mark((function t(a){var n,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(Object(x.a)(a));case 2:n=t.sent,s=n.payload.id,e("/service/view/".concat(s));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(e){e.nontaxableflag?(C(!1),F("isTaxApplicable",!1)):(C(!0),F("exemptionReasonId",null),F("isTaxApplicable",!0))},M=function(e,c){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(N.jsxs)(h.jb,{className:"mb-1",children:[Object(N.jsx)(h.O,{sm:"3",size:"lg",className:p()("form-label ".concat(t?"required":"")),for:c,children:e}),Object(N.jsxs)(h.B,{sm:"9",children:[Object(N.jsx)(b.a,{id:c,name:c,control:J,render:function(e){var t=e.field;return Object(N.jsx)(h.L,Object(a.a)({invalid:D[c]&&!0},t))}}),D[c]&&Object(N.jsx)(h.I,{children:D[c].message})]})]})},Q=function(e,c,t){var n,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(N.jsxs)(h.jb,{className:"mb-1",children:[Object(N.jsx)(h.O,{sm:"3",size:"lg",className:p()("form-label ".concat(s?"required":"")),for:c,children:e}),Object(N.jsxs)(h.B,{sm:"9",children:[Object(N.jsx)(b.a,{control:J,name:c,id:c,render:function(e){var n=e.field,s=e.ref;return Object(N.jsx)(l.a,Object(a.a)(Object(a.a)({inputRef:s,className:p()("react-select",{"is-invalid":D[c]})},n),{},{classNamePrefix:"select",options:t,value:t.find((function(e){return e.id===n.value})),onChange:function(e){n.onChange(e.id),"taxGroupId"===c&&K(e)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),D[c]&&Object(N.jsx)(h.I,{className:"text-danger",children:null===(n=D[c])||void 0===n?void 0:n.message})]})]})};return Object(N.jsxs)("form",{onSubmit:V(H),children:[Object(N.jsxs)(h.l,{className:"invoice-preview-card",children:[Object(N.jsx)(h.p,{children:Object(N.jsx)(h.v,{children:" Add Service"})}),Object(N.jsxs)(h.m,{className:"pb-0",children:[Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:M("Name","name",!0)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:Q("Category","categoryId",f,!1)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:M("SAC Code","sacCode",!1)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:M("Professional Fee","sellingPrice",!1)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:Q("Tax Rate","taxGroupId",P,!1)})}),!w&&Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:Q("Exemption Reason","exemptionReasonId",E,!0)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:Object(N.jsxs)(h.jb,{className:"mb-1",children:[Object(N.jsx)(h.O,{sm:"3",size:"lg",className:"form-label",for:"description",children:"Description"}),Object(N.jsxs)(h.B,{sm:"9",children:[Object(N.jsx)(b.a,{id:"description",name:"description",control:J,render:function(e){var c=e.field;return Object(N.jsx)(h.L,Object(a.a)({type:"textarea",invalid:D.description&&!0},c))}}),D.description&&Object(N.jsx)(h.I,{children:D.description.message})]})]})})})]})]}),Object(N.jsx)(h.l,{children:Object(N.jsx)(h.m,{children:Object(N.jsxs)("div",{className:"modal-footer border-0",children:[Object(N.jsx)(h.i,{color:"warning",outline:!0,tag:o.b,to:"/service/list",children:"Cancel"}),Object(N.jsx)(h.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};c.default=function(){return Object(N.jsx)("div",{className:"invoice-add-wrapper",children:Object(N.jsx)(h.jb,{className:"invoice-add",children:Object(N.jsx)(h.B,{xl:12,md:12,sm:12,children:Object(N.jsx)(I,{})})})})}},507:function(e,c,t){},512:function(e,c,t){},522:function(e,c,t){}}]);
//# sourceMappingURL=70.a17b5211.chunk.js.map