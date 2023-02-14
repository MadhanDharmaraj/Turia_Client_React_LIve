(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[71],{1676:function(e,t,c){"use strict";c.r(t);var a=c(17),n=c(4),s=c(18),i=c(1),r=c.n(i),l=c(511),o=c(11),d=c(132),j=c(133),b=c(509),u=c(521),m=c(522),x=c(149),O=c(5),p=c(6),f=c.n(p),h=c(91),v=(c(524),c(510),c(508),c(513),c(2)),g=c(12),N=c(13),y=Object(g.b)(),I=Object(g.e)(),S=function(){var e=Object(o.g)().id,t=Object(o.f)({}),c=Object(j.b)(),i=Object(v.useState)([]),p=Object(s.a)(i,2),g=p[0],S=p[1],w=Object(v.useState)([]),B=Object(s.a)(w,2),C=B[0],P=B[1],R=Object(v.useState)([]),z=Object(s.a)(R,2),T=z[0],k=z[1],A=Object(v.useState)([]),E=Object(s.a)(A,2),q=E[0],G=E[1],L=Object(v.useState)(!0),V=Object(s.a)(L,2),J=V[0],D=V[1],F=u.d().shape({updatedBy:u.f().default(I),id:u.f().default(e),categoryId:u.f().required("Please select a Category"),categoryType:u.c().default(1),name:u.f().required("Please Enter Service Name"),organizationId:u.c().default(y),taxGroupId:u.f().nullable(),sellingPrice:u.f().nullable(),isTaxApplicable:u.b().default(!1),exemptionReasonId:u.c().nullable(),sacCode:u.f().nullable(),description:u.f().nullable()}),H=Object(b.f)({resolver:Object(m.a)(F),defaultValues:F.cast()}),K=H.handleSubmit,M=H.control,Q=H.reset,U=H.formState.errors,W=H.setValue,X=function(){var t=Object(n.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(Object(x.g)(e));case 2:a=t.sent,k(a.payload);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Y=function(e){e.nontaxableflag?(D(!1),W("isTaxApplicable",!1)):(D(!0),W("isTaxApplicable",!0),W("exemptionReasonId",null))};Object(v.useEffect)((function(){Object.keys(T).length>0&&(Q({categoryId:T.categoryid,name:T.name,organizationId:T.organizationid,sellingPrice:T.sellingprice,sacCode:T.saccode,taxGroupId:T.taxgroupid,description:T.description,isTaxApplicable:T.istaxapplicable,exemptionReasonId:T.exemptionreasonid}),D(T.istaxapplicable))}),[T]),Object(v.useEffect)((function(){O.a.post("/taxgroups/dropdown").then((function(e){var t=e.data;P(t.taxgroups)})),O.a.post("/categories/list").then((function(e){var t=e.data;S(t.categories)})),O.a.post("/exemptionreasons/dropdown").then((function(e){var t=e.data;G(t.exemptionreasons)})),void 0!==e&&X()}),[]);var Z=function(){var a=Object(n.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c(Object(x.i)(n));case 2:t("/service/view/".concat(e));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),$=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(N.jsxs)(h.jb,{className:"mb-1",children:[Object(N.jsx)(h.O,{sm:"3",size:"lg",className:f()("form-label ".concat(c?"required":"")),for:t,children:e}),Object(N.jsxs)(h.B,{sm:"9",children:[Object(N.jsx)(b.a,{id:t,name:t,control:M,render:function(e){var c=e.field;return Object(N.jsx)(h.L,Object(a.a)({invalid:U[t]&&!0},c))}}),U[t]&&Object(N.jsx)(h.I,{children:U[t].message})]})]})},_=function(e,t,c){var n,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(N.jsxs)(h.jb,{className:"mb-1",children:[Object(N.jsx)(h.O,{sm:"3",size:"lg",className:f()("form-label ".concat(s?"required":"")),for:t,children:e}),Object(N.jsxs)(h.B,{sm:"9",children:[Object(N.jsx)(b.a,{control:M,name:t,id:t,render:function(e){var n=e.field,s=e.ref;return Object(N.jsx)(l.a,Object(a.a)(Object(a.a)({inputRef:s,className:f()("react-select",{"is-invalid":U[t]})},n),{},{classNamePrefix:"select",options:c,value:c.find((function(e){return e.id===n.value})),onChange:function(e){n.onChange(e.id),"taxGroupId"===t&&Y(e)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),U[t]&&Object(N.jsx)(h.I,{className:"text-danger",children:null===(n=U[t])||void 0===n?void 0:n.message})]})]})};return Object(N.jsxs)("form",{onSubmit:K(Z),children:[Object(N.jsxs)(h.l,{className:"invoice-preview-card",children:[Object(N.jsx)(h.p,{children:Object(N.jsx)(h.v,{children:"Edit Service"})}),Object(N.jsxs)(h.m,{className:"pb-0",children:[Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:$("Service Name","name",!0)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:_("Category","categoryId",g,!0)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:$("SAC Code","sacCode",!1)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:$("Professional Fee","sellingPrice",!1)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:_("Tax Rate","taxGroupId",C,!1)})}),!J&&Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:_("Exemption Reason","exemptionReasonId",q,!1)})}),Object(N.jsx)(h.jb,{children:Object(N.jsx)(h.B,{md:"6",className:"mb-1",children:Object(N.jsxs)(h.jb,{className:"mb-1",children:[Object(N.jsx)(h.O,{sm:"3",size:"lg",className:"form-label",for:"description",children:"Description"}),Object(N.jsxs)(h.B,{sm:"9",children:[Object(N.jsx)(b.a,{id:"description",name:"description",control:M,render:function(e){var t=e.field;return Object(N.jsx)(h.L,Object(a.a)({type:"textarea",invalid:U.description&&!0},t))}}),U.description&&Object(N.jsx)(h.I,{children:U.description.message})]})]})})})]})]}),Object(N.jsx)(h.l,{children:Object(N.jsx)(h.m,{children:Object(N.jsxs)("div",{className:"modal-footer border-0",children:[Object(N.jsx)(h.i,{color:"warning",outline:!0,tag:d.b,to:"/service/list",children:"Cancel"}),Object(N.jsx)(h.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};t.default=function(){return Object(N.jsx)("div",{className:"invoice-add-wrapper",children:Object(N.jsx)(h.jb,{className:"invoice-add",children:Object(N.jsx)(h.B,{xl:12,md:12,sm:12,children:Object(N.jsx)(S,{})})})})}},508:function(e,t,c){},513:function(e,t,c){},524:function(e,t,c){}}]);
//# sourceMappingURL=71.92d0458a.chunk.js.map