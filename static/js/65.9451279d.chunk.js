(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1664:function(e,c,t){"use strict";t.r(c);var r=t(15),s=t(5),a=t(16),n=t(2),i=t.n(n),l=t(493),d=t(9),o=t(131),j=t(132),b=t(490),m=t(515),u=t(516),O=t(147),x=t(10),h=t(4),f=t.n(h),p=t(90),g=(t(503),t(494),t(491),t(496),t(1)),v=t(11),N=function(){var e=Object(d.f)({}),c=Object(j.b)(),t=Object(g.useState)([]),n=Object(a.a)(t,2),h=n[0],N=n[1],y=Object(g.useState)([]),C=Object(a.a)(y,2),P=C[0],B=C[1],S=m.e().shape({categoryId:m.g().required("Please select a Category"),name:m.g().required("Please Enter Service Name"),taxgroupid:m.g().required("Please Select Tax Rate"),sellingPrice:m.g().required("Please Enter Professional Fee"),sacCode:m.g().required("Please Enter SAC Code")}),w=Object(b.f)({resolver:Object(u.a)(S),defaultValues:{organizationId:1,categoryType:1,categoryId:"",name:"",sellingPrice:"",sacCode:"",taxgroupid:"",description:""}}),q=w.handleSubmit,I=w.control,z=w.formState.errors;Object(g.useEffect)((function(){x.a.post("/taxgroups/dropdown").then((function(e){var c=e.data;B(c.taxgroups)})),x.a.post("/categories/list").then((function(e){var c=e.data;N(c.categories)}))}),[]);var E=function(){var t=Object(s.a)(i.a.mark((function t(r){var s,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(Object(O.a)(r));case 2:s=t.sent,a=s.payload.services.id,e("/service/view/".concat(a));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(e,c){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(v.jsxs)(p.ib,{className:"mb-1",children:[Object(v.jsx)(p.N,{sm:"3",size:"lg",className:f()("form-label ".concat(t?"required":"")),for:c,children:e}),Object(v.jsxs)(p.B,{sm:"9",children:[Object(v.jsx)(b.a,{id:c,name:c,control:I,render:function(e){var t=e.field;return Object(v.jsx)(p.K,Object(r.a)({invalid:z[c]&&!0},t))}}),z[c]&&Object(v.jsx)(p.I,{children:z[c].message})]})]})},R=function(e,c,t){var s,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(v.jsxs)(p.ib,{className:"mb-1",children:[Object(v.jsx)(p.N,{sm:"3",size:"lg",className:f()("form-label ".concat(a?"required":"")),for:c,children:e}),Object(v.jsxs)(p.B,{sm:"9",children:[Object(v.jsx)(b.a,{control:I,name:c,id:c,render:function(e){var s=e.field,a=e.ref;return Object(v.jsx)(l.a,Object(r.a)(Object(r.a)({inputRef:a,className:f()("react-select",{"is-invalid":z[c]})},s),{},{classNamePrefix:"select",options:t,value:t.find((function(e){return e.id===s.value})),onChange:function(e){return s.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),z[c]&&Object(v.jsx)(p.I,{className:"text-danger",children:null===(s=z[c])||void 0===s?void 0:s.message})]})]})};return Object(v.jsxs)("form",{onSubmit:q(E),children:[Object(v.jsx)(p.l,{className:"invoice-preview-card",children:Object(v.jsxs)(p.m,{className:"pb-0",children:[Object(v.jsx)(p.ib,{children:Object(v.jsx)(p.B,{md:"6",className:"mb-1",children:R("Category","categoryId",h,!0)})}),Object(v.jsx)(p.ib,{children:Object(v.jsx)(p.B,{md:"6",className:"mb-1",children:k("Name","name",!0)})}),Object(v.jsx)(p.ib,{children:Object(v.jsx)(p.B,{md:"6",className:"mb-1",children:k("SAC Code","sacCode",!0)})}),Object(v.jsx)(p.ib,{children:Object(v.jsx)(p.B,{md:"6",className:"mb-1",children:k("Professional Fee","sellingPrice",!0)})}),Object(v.jsx)(p.ib,{children:Object(v.jsx)(p.B,{md:"6",className:"mb-1",children:R("Tax Rate","taxgroupid",P,!0)})}),Object(v.jsx)(p.ib,{children:Object(v.jsx)(p.B,{md:"6",className:"mb-1",children:Object(v.jsxs)(p.ib,{className:"mb-1",children:[Object(v.jsx)(p.N,{sm:"3",size:"lg",className:"form-label required",for:"description",children:"Description"}),Object(v.jsxs)(p.B,{sm:"9",children:[Object(v.jsx)(b.a,{id:"description",name:"description",control:I,render:function(e){var c=e.field;return Object(v.jsx)(p.K,Object(r.a)({type:"textarea",invalid:z.description&&!0},c))}}),z.description&&Object(v.jsx)(p.I,{children:z.description.message})]})]})})})]})}),Object(v.jsx)(p.l,{children:Object(v.jsx)(p.m,{children:Object(v.jsxs)("div",{className:"modal-footer border-0",children:[Object(v.jsx)(p.i,{color:"warning",outline:!0,tag:o.b,to:"/service/list",children:"Cancel"}),Object(v.jsx)(p.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};c.default=function(){return Object(v.jsx)("div",{className:"invoice-add-wrapper",children:Object(v.jsx)(p.ib,{className:"invoice-add",children:Object(v.jsx)(p.B,{xl:12,md:12,sm:12,children:Object(v.jsx)(N,{})})})})}},491:function(e,c,t){},496:function(e,c,t){},503:function(e,c,t){}}]);
//# sourceMappingURL=65.9451279d.chunk.js.map