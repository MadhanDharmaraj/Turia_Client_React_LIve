(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1663:function(e,c,s){"use strict";s.r(c);var a=s(15),t=s(5),r=s(16),n=s(2),i=s.n(n),l=s(492),d=s(9),o=s(131),j=s(132),b=s(489),m=s(514),u=s(515),O=s(147),x=s(14),f=s(3),h=s.n(f),g=s(90),p=(s(502),s(493),s(490),s(495),s(1)),v=s(10),N=function(){var e,c,s=Object(d.f)({}),n=Object(j.b)(),f=Object(p.useState)([]),N=Object(r.a)(f,2),y=N[0],C=N[1],P=Object(p.useState)([]),I=Object(r.a)(P,2),B=I[0],S=I[1],w=m.e().shape({categoryId:m.g().required("Please select a Category"),name:m.g().required("Please Enter Service Name"),taxgroupid:m.g().required("Please Select Tax Rate"),sellingPrice:m.g().required("Please Enter Professional Fee"),sacCode:m.g().required("Please Enter SAC Code")}),z=Object(b.f)({resolver:Object(u.a)(w),defaultValues:{organizationId:1,categoryType:1,categoryId:"",name:"",sellingPrice:"",sacCode:"",taxgroupid:"",description:""}}),q=z.handleSubmit,E=z.control,K=z.formState.errors;Object(p.useEffect)((function(){x.a.post("/taxgroups/dropdown").then((function(e){var c=e.data;S(c.taxgroups)})),x.a.post("/categories/list").then((function(e){var c=e.data;C(c.categories)}))}),[]);var R=function(){var e=Object(t.a)(i.a.mark((function e(c){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(Object(O.a)(c));case 2:a=e.sent,t=a.payload.services.id,s("/service/view/".concat(t));case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:q(R),children:[Object(v.jsx)(g.l,{className:"invoice-preview-card",children:Object(v.jsxs)(g.m,{className:"pb-0",children:[Object(v.jsx)(g.ib,{children:Object(v.jsx)(g.B,{md:"6",className:"mb-1",children:Object(v.jsxs)(g.ib,{className:"mb-1",children:[Object(v.jsx)(g.N,{sm:"3",size:"lg",className:"form-label",for:"categoryId",children:"Category"}),Object(v.jsxs)(g.B,{sm:"9",children:[Object(v.jsx)(b.a,{control:E,name:"categoryId",id:"categoryId",render:function(e){var c=e.field,s=e.value,t=e.ref;return Object(v.jsx)(l.a,Object(a.a)(Object(a.a)(Object(a.a)({},c),{},{inputRef:t,className:h()("react-select",{"is-invalid":K.categoryId})},c),{},{classNamePrefix:"select",options:y,value:y.find((function(e){return e.id===s})),onChange:function(e){return c.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),K.categoryId&&Object(v.jsx)(g.I,{className:"text-danger",children:null===(e=K.categoryId)||void 0===e?void 0:e.message})]})]})})}),Object(v.jsx)(g.ib,{children:Object(v.jsx)(g.B,{md:"6",className:"mb-1",children:Object(v.jsxs)(g.ib,{className:"mb-1",children:[Object(v.jsx)(g.N,{sm:"3",size:"lg",className:"form-label",for:"name",children:"Name"}),Object(v.jsxs)(g.B,{sm:"9",children:[Object(v.jsx)(b.a,{id:"name",name:"name",control:E,render:function(e){var c=e.field;return Object(v.jsx)(g.K,Object(a.a)({invalid:K.name&&!0},c))}}),K.name&&Object(v.jsx)(g.I,{children:K.name.message})]})]})})}),Object(v.jsx)(g.ib,{children:Object(v.jsx)(g.B,{md:"6",className:"mb-1",children:Object(v.jsxs)(g.ib,{className:"mb-1",children:[Object(v.jsx)(g.N,{sm:"3",size:"lg",className:"form-label",for:"sacCode",children:"SAC Code"}),Object(v.jsxs)(g.B,{sm:"9",children:[Object(v.jsx)(b.a,{id:"sacCode",name:"sacCode",control:E,render:function(e){var c=e.field;return Object(v.jsx)(g.K,Object(a.a)({invalid:K.sacCode&&!0},c))}}),K.sacCode&&Object(v.jsx)(g.I,{children:K.sacCode.message})]})]})})}),Object(v.jsx)(g.ib,{children:Object(v.jsx)(g.B,{md:"6",className:"mb-1",children:Object(v.jsxs)(g.ib,{className:"mb-1",children:[Object(v.jsx)(g.N,{sm:"3",size:"lg",className:"form-label",for:"sellingPrice",children:"Professional Fee"}),Object(v.jsxs)(g.B,{sm:"9",children:[Object(v.jsx)(b.a,{id:"sellingPrice",name:"sellingPrice",control:E,render:function(e){var c=e.field;return Object(v.jsx)(g.K,Object(a.a)({invalid:K.sellingPrice&&!0},c))}}),K.sellingPrice&&Object(v.jsx)(g.I,{children:K.sellingPrice.message})]})]})})}),Object(v.jsx)(g.ib,{children:Object(v.jsx)(g.B,{md:"6",className:"mb-1",children:Object(v.jsxs)(g.ib,{className:"mb-1",children:[Object(v.jsx)(g.N,{sm:"3",size:"lg",className:"form-label",for:"taxgroupid",children:"Tax Rate"}),Object(v.jsxs)(g.B,{sm:"9",children:[Object(v.jsx)(b.a,{control:E,name:"taxgroupid",id:"taxgroupid",render:function(e){var c=e.field,s=e.value,t=e.ref;return Object(v.jsx)(l.a,Object(a.a)(Object(a.a)(Object(a.a)({},c),{},{inputRef:t,className:h()("react-select",{"is-invalid":K.taxgroupid})},c),{},{classNamePrefix:"select",options:B,value:B.find((function(e){return e.id===s})),onChange:function(e){return c.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),K.taxgroupid&&Object(v.jsx)(g.I,{className:"text-danger",children:null===(c=K.taxgroupid)||void 0===c?void 0:c.message})]})]})})}),Object(v.jsx)(g.ib,{children:Object(v.jsx)(g.B,{md:"6",className:"mb-1",children:Object(v.jsxs)(g.ib,{className:"mb-1",children:[Object(v.jsx)(g.N,{sm:"3",size:"lg",className:"form-label",for:"description",children:"Description"}),Object(v.jsxs)(g.B,{sm:"9",children:[Object(v.jsx)(b.a,{id:"description",name:"description",control:E,render:function(e){var c=e.field;return Object(v.jsx)(g.K,Object(a.a)({type:"textarea",invalid:K.description&&!0},c))}}),K.description&&Object(v.jsx)(g.I,{children:K.description.message})]})]})})})]})}),Object(v.jsx)(g.l,{children:Object(v.jsx)(g.m,{children:Object(v.jsxs)("div",{className:"modal-footer border-0",children:[Object(v.jsx)(g.i,{color:"warning",outline:!0,tag:o.b,to:"/service/list",children:"Cancel"}),Object(v.jsx)(g.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};c.default=function(){return Object(v.jsx)("div",{className:"invoice-add-wrapper",children:Object(v.jsx)(g.ib,{className:"invoice-add",children:Object(v.jsx)(g.B,{xl:12,md:12,sm:12,children:Object(v.jsx)(N,{})})})})}},490:function(e,c,s){},495:function(e,c,s){},502:function(e,c,s){}}]);
//# sourceMappingURL=65.9bc1169f.chunk.js.map