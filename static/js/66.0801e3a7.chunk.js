(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[66],{1643:function(e,c,a){"use strict";a.r(c);var s=a(14),t=a(129),n=a(3),i=a.n(n),l=a(1),r=a(88),d=a(10),j=["Client","Service","Sales","Task","Team","Setting","Digital Signature","Attendance","Leave"],m=function(){return Object(d.jsx)(l.Fragment,{children:Object(d.jsx)(r.l,{children:Object(d.jsx)(r.m,{className:"p-0",children:Object(d.jsx)(r.ib,{children:Object(d.jsxs)(r.B,{xs:12,children:[Object(d.jsx)("h4",{className:"mt-2 pt-50",children:"Role Permissions"}),Object(d.jsx)(r.mb,{className:"table-flush-spacing",responsive:!0,children:Object(d.jsx)("tbody",{children:j.map((function(e,c){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-nowrap fw-bolder",children:e}),Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(d.jsx)(r.K,{type:"checkbox",id:"read-".concat(e)}),Object(d.jsx)(r.N,{className:"form-check-label",for:"read-".concat(e),children:"Read"})]}),Object(d.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(d.jsx)(r.K,{type:"checkbox",id:"write-".concat(e)}),Object(d.jsx)(r.N,{className:"form-check-label",for:"write-".concat(e),children:"Write"})]}),Object(d.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(d.jsx)(r.K,{type:"checkbox",id:"delete-".concat(e)}),Object(d.jsx)(r.N,{className:"form-check-label",for:"delete-".concat(e),children:"Delete"})]}),Object(d.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(d.jsx)(r.K,{type:"checkbox",id:"import-".concat(e)}),Object(d.jsx)(r.N,{className:"form-check-label",for:"import-".concat(e),children:"import"})]}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)(r.K,{type:"checkbox",id:"export-".concat(e)}),Object(d.jsx)(r.N,{className:"form-check-label",for:"export-".concat(e),children:"Export"})]})]})})]},c)}))})})]})})})})})},o=a(487),b=a(485),x=a(509),O=a(510),h=(a(500),a(489),a(486),a(491),[{value:"uk",label:"UK"},{value:"usa",label:"USA"},{value:"france",label:"France"},{value:"russia",label:"Russia"},{value:"canada",label:"Canada"}]),f=function(){var e,c,a,n=x.e().shape({first_name:x.g().required("Please Enter a First Name"),last_name:x.g().required("Please Enter a Last Name"),contact_no:x.g().required("Please Enter a Conatct No").max(10).min(10,"Invalid Contact No"),email:x.g().email("Please Enter valid Email").required("Please Enter valid Email"),designation_id:x.g().required("Please Select Designation"),role_id:x.g().required("Please Select Role"),department_id:x.g().required("Please Select Department")}),l=Object(b.f)({resolver:Object(O.a)(n),defaultValues:{first_name:"",last_name:"",contact_no:"",email:"",designation_id:"",role_id:"",department_id:"",permissions:[]}}),j=l.handleSubmit,f=l.control,u=l.formState.errors;return Object(d.jsxs)("form",{onSubmit:j((function(e){return console.log(e)})),children:[Object(d.jsxs)(r.l,{className:"invoice-preview-card",children:[Object(d.jsxs)(r.m,{className:"pb-0",children:[Object(d.jsxs)(r.ib,{children:[Object(d.jsx)(r.B,{md:"6",className:"mb-1",children:Object(d.jsxs)(r.ib,{className:"mb-1",children:[Object(d.jsx)(r.N,{sm:"3",size:"lg",className:"form-label",for:"first_name",children:"First Name"}),Object(d.jsxs)(r.B,{sm:"9",children:[Object(d.jsx)(b.a,{id:"first_name",name:"first_name",control:f,render:function(e){var c=e.field;return Object(d.jsx)(r.K,Object(s.a)({invalid:u.first_name&&!0},c))}}),u.first_name&&Object(d.jsx)(r.I,{children:u.first_name.message})]})]})}),Object(d.jsx)(r.B,{md:"6",className:"mb-1",children:Object(d.jsxs)(r.ib,{className:"mb-1",children:[Object(d.jsx)(r.N,{sm:"3",size:"lg",className:"form-label",for:"last_name",children:"Last Name"}),Object(d.jsxs)(r.B,{sm:"9",children:[Object(d.jsx)(b.a,{control:f,id:"last_name",name:"last_name",render:function(e){var c=e.field;return Object(d.jsx)(r.K,Object(s.a)({type:"text",invalid:u.last_name&&!0},c))}}),u.last_name&&Object(d.jsx)(r.I,{children:u.last_name.message})]})]})})]}),Object(d.jsxs)(r.ib,{children:[Object(d.jsx)(r.B,{md:"6",className:"mb-1",children:Object(d.jsxs)(r.ib,{className:"mb-1",children:[Object(d.jsx)(r.N,{sm:"3",size:"lg",className:"form-label",for:"contact_no",children:"Conatct No"}),Object(d.jsxs)(r.B,{sm:"9",children:[Object(d.jsx)(b.a,{id:"contact_no",name:"contact_no",control:f,render:function(e){var c=e.field;return Object(d.jsx)(r.K,Object(s.a)({invalid:u.contact_no&&!0},c))}}),u.contact_no&&Object(d.jsx)(r.I,{children:u.contact_no.message})]})]})}),Object(d.jsx)(r.B,{md:"6",className:"mb-1",children:Object(d.jsxs)(r.ib,{className:"mb-1",children:[Object(d.jsx)(r.N,{sm:"3",size:"lg",className:"form-label",for:"email",children:"Email"}),Object(d.jsxs)(r.B,{sm:"9",children:[Object(d.jsx)(b.a,{control:f,id:"email",name:"email",render:function(e){var c=e.field;return Object(d.jsx)(r.K,Object(s.a)({type:"email",invalid:u.email&&!0},c))}}),u.email&&Object(d.jsx)(r.I,{children:u.email.message})]})]})})]}),Object(d.jsxs)(r.ib,{children:[Object(d.jsx)(r.B,{md:"6",className:"mb-1",children:Object(d.jsxs)(r.ib,{className:"mb-1",children:[Object(d.jsx)(r.N,{sm:"3",size:"lg",className:"form-label",for:"designation_id",children:"Designation"}),Object(d.jsxs)(r.B,{sm:"9",children:[Object(d.jsx)(b.a,{control:f,name:"designation_id",id:"designation_id",render:function(e){var c=e.field,a=e.value,t=e.ref;return Object(d.jsx)(o.a,Object(s.a)(Object(s.a)(Object(s.a)({},c),{},{inputRef:t,className:i()("react-select",{"is-invalid":u.designation_id})},c),{},{classNamePrefix:"select",options:h,value:h.find((function(e){return e.value===a})),onChange:function(e){return c.onChange(e.value)}}))}}),u.designation_id&&Object(d.jsx)(r.I,{className:"text-danger",children:null===(e=u.designation_id)||void 0===e?void 0:e.message})]})]})}),Object(d.jsx)(r.B,{md:"6",className:"mb-1",children:Object(d.jsxs)(r.ib,{className:"mb-1",children:[Object(d.jsx)(r.N,{sm:"3",size:"lg",className:"form-label",for:"role_id",children:"Role"}),Object(d.jsxs)(r.B,{sm:"9",children:[Object(d.jsx)(b.a,{control:f,name:"role_id",id:"role_id",render:function(e){var c=e.field,a=e.value,t=e.ref;return Object(d.jsx)(o.a,Object(s.a)(Object(s.a)(Object(s.a)({},c),{},{inputRef:t,className:i()("react-select",{"is-invalid":u.role_id})},c),{},{classNamePrefix:"select",options:h,value:h.find((function(e){return e.value===a})),onChange:function(e){return c.onChange(e.value)}}))}}),u.role_id&&Object(d.jsx)(r.I,{className:"text-danger",children:null===(c=u.role_id)||void 0===c?void 0:c.message})]})]})})]}),Object(d.jsx)(r.ib,{children:Object(d.jsx)(r.B,{md:"6",className:"mb-1",children:Object(d.jsxs)(r.ib,{className:"mb-1",children:[Object(d.jsx)(r.N,{sm:"3",size:"lg",className:"form-label",for:"department_id",children:"Department"}),Object(d.jsxs)(r.B,{sm:"9",children:[Object(d.jsx)(b.a,{control:f,name:"department_id",id:"department_id",render:function(e){var c=e.field,a=e.value,t=e.ref;return Object(d.jsx)(o.a,Object(s.a)(Object(s.a)(Object(s.a)({},c),{},{inputRef:t,className:i()("react-select",{"is-invalid":u.department_id})},c),{},{classNamePrefix:"select",options:h,value:h.find((function(e){return e.value===a})),onChange:function(e){return c.onChange(e.value)}}))}}),u.department_id&&Object(d.jsx)(r.I,{className:"text-danger",children:null===(a=u.department_id)||void 0===a?void 0:a.message})]})]})})})]}),Object(d.jsx)(r.m,{className:"invoice-padding",children:Object(d.jsx)(m,{})})]}),Object(d.jsx)(r.l,{children:Object(d.jsx)(r.m,{children:Object(d.jsxs)("div",{className:"modal-footer border-0",children:[Object(d.jsx)(r.i,{color:"warning",outline:!0,tag:t.b,to:"/team/list",children:"Cancel"}),Object(d.jsx)(r.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};c.default=function(){return Object(d.jsx)("div",{className:"invoice-add-wrapper",children:Object(d.jsx)(r.ib,{className:"invoice-add",children:Object(d.jsx)(r.B,{xl:12,md:12,sm:12,children:Object(d.jsx)(f,{})})})})}},486:function(e,c,a){},491:function(e,c,a){},500:function(e,c,a){}}]);
//# sourceMappingURL=66.0801e3a7.chunk.js.map