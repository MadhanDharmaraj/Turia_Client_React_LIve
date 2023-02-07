(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[73],{1650:function(e,t,c){"use strict";c.r(t);var a=c(17),s=c(4),n=c(18),r=c(2),i=c.n(r),l=c(11),d=c(132),o=c(6),j=c.n(o),m=c(1),b=c(5),O=c(91),f=c(13),u=function(){var e=Object(m.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(m.useEffect)((function(){b.a.post("/modules/list").then((function(e){a(e.data.modules)})).catch((function(){}))}),[]),Object(f.jsx)(m.Fragment,{children:Object(f.jsx)(O.l,{children:Object(f.jsx)(O.m,{className:"p-0",children:Object(f.jsx)(O.jb,{children:Object(f.jsxs)(O.B,{xs:12,children:[Object(f.jsx)("h4",{className:"mt-2 pt-50",children:"Role Permissions"}),Object(f.jsx)(O.nb,{className:"table-flush-spacing",responsive:!0,children:Object(f.jsx)("tbody",{children:c.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"text-nowrap fw-bolder",children:e.name}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(f.jsx)(O.L,{type:"checkbox",id:"read-".concat(e)}),Object(f.jsx)(O.O,{className:"form-check-label",for:"read-".concat(e),children:"Read"})]}),Object(f.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(f.jsx)(O.L,{type:"checkbox",id:"write-".concat(e)}),Object(f.jsx)(O.O,{className:"form-check-label",for:"write-".concat(e),children:"Write"})]}),Object(f.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(f.jsx)(O.L,{type:"checkbox",id:"delete-".concat(e)}),Object(f.jsx)(O.O,{className:"form-check-label",for:"delete-".concat(e),children:"Delete"})]}),Object(f.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(f.jsx)(O.L,{type:"checkbox",id:"import-".concat(e)}),Object(f.jsx)(O.O,{className:"form-check-label",for:"import-".concat(e),children:"import"})]}),Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)(O.L,{type:"checkbox",id:"export-".concat(e)}),Object(f.jsx)(O.O,{className:"form-check-label",for:"export-".concat(e),children:"Export"})]})]})})]},t)}))})})]})})})})})},x=c(509),h=c(507),N=c(521),p=c(522),v=c(146),g=(c(523),c(510),c(508),c(512),c(12)),I=c(514),y=c.n(I),k=c(133),B=Object(g.b)(),w=Object(g.d)(),L=function(){var e,t,c,r=Object(k.b)(),o=Object(l.f)(),g=N.d().shape({createdBy:N.f().default(w),organizationId:N.f().default(B),firstName:N.f().required("Please Enter a First Name"),lastName:N.f().required("Please Enter a Last Name"),name:N.f(),contactNo:N.f().required("Please Enter a Conatct No").max(10).min(10,"Invalid Contact No"),userTypeId:N.f().default(4),email:N.f().email("Please Enter valid Email").required("Please Enter valid Email"),designationId:N.f().required("Please Select Designation"),roleId:N.f().required("Please Select Role"),invitedAt:N.f().default(y()().unix()),recurringFlag:N.b().default(!0),expiryDate:N.f().default(y()().add(5,"days").unix()),departmentId:N.f().required("Please Select Department"),isRegistered:N.b().default(!1),invitedBy:N.f().default(w)}),I=Object(h.f)({resolver:Object(p.a)(g),defaultValues:g.cast()}),L=I.handleSubmit,S=I.control,E=I.formState.errors,P=Object(m.useState)([]),C=Object(n.a)(P,2),z=C[0],R=C[1],q=Object(m.useState)([]),D=Object(n.a)(q,2),V=D[0],F=D[1],J=Object(m.useState)([]),_=Object(n.a)(J,2),A=_[0],T=_[1],W=Object(m.useState)([]),G=Object(n.a)(W,2),H=G[0],K=G[1],M=Object(m.useState)(""),Q=Object(n.a)(M,2),U=Q[0],X=Q[1];console.log(H);Object(m.useEffect)((function(){b.a.post("/designations/dropdown").then((function(e){F(e.data.designations)})).catch((function(){})),b.a.post("/departments/dropdown").then((function(e){R(e.data.departments)})).catch((function(){})),b.a.post("/roles/dropdown").then((function(e){T(e.data.roles)})).catch((function(){}))}),[]),Object(m.useEffect)((function(){""!==U&&b.a.post("/rolepermissions/list",{roleId:U}).then((function(e){K(e.data.rolepermissions[0].permissions.split(","))})).catch((function(){}))}),[U]);var Y=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(v.g)(t));case 2:o("/team/view/".concat(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.name="".concat(S._formValues.firstName," ").concat(S._formValues.lastName),e.next=3,r(Object(v.a)(t));case 3:c=e.sent,Y(c.payload.id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("form",{onSubmit:L(Z),children:[Object(f.jsxs)(O.l,{className:"invoice-preview-card",children:[Object(f.jsxs)(O.m,{className:"pb-0",children:[Object(f.jsxs)(O.jb,{children:[Object(f.jsx)(O.B,{md:"6",className:"mb-1",children:Object(f.jsxs)(O.jb,{className:"mb-1",children:[Object(f.jsx)(O.O,{sm:"3",size:"lg",className:"form-label",for:"firstName",children:"First Name"}),Object(f.jsxs)(O.B,{sm:"9",children:[Object(f.jsx)(h.a,{id:"firstName",name:"firstName",control:S,render:function(e){var t=e.field;return Object(f.jsx)(O.L,Object(a.a)({invalid:E.firstName&&!0},t))}}),E.firstName&&Object(f.jsx)(O.I,{children:E.firstName.message})]})]})}),Object(f.jsx)(O.B,{md:"6",className:"mb-1",children:Object(f.jsxs)(O.jb,{className:"mb-1",children:[Object(f.jsx)(O.O,{sm:"3",size:"lg",className:"form-label",for:"lastName",children:"Last Name"}),Object(f.jsxs)(O.B,{sm:"9",children:[Object(f.jsx)(h.a,{control:S,id:"lastName",name:"lastName",render:function(e){var t=e.field;return Object(f.jsx)(O.L,Object(a.a)({type:"text",invalid:E.lastName&&!0},t))}}),E.lastName&&Object(f.jsx)(O.I,{children:E.lastName.message})]})]})})]}),Object(f.jsxs)(O.jb,{children:[Object(f.jsx)(O.B,{md:"6",className:"mb-1",children:Object(f.jsxs)(O.jb,{className:"mb-1",children:[Object(f.jsx)(O.O,{sm:"3",size:"lg",className:"form-label",for:"contactNo",children:"Conatct No"}),Object(f.jsxs)(O.B,{sm:"9",children:[Object(f.jsx)(h.a,{id:"contactNo",name:"contactNo",control:S,render:function(e){var t=e.field;return Object(f.jsx)(O.L,Object(a.a)({invalid:E.contactNo&&!0},t))}}),E.contactNo&&Object(f.jsx)(O.I,{children:E.contactNo.message})]})]})}),Object(f.jsx)(O.B,{md:"6",className:"mb-1",children:Object(f.jsxs)(O.jb,{className:"mb-1",children:[Object(f.jsx)(O.O,{sm:"3",size:"lg",className:"form-label",for:"email",children:"Email"}),Object(f.jsxs)(O.B,{sm:"9",children:[Object(f.jsx)(h.a,{control:S,id:"email",name:"email",render:function(e){var t=e.field;return Object(f.jsx)(O.L,Object(a.a)({type:"email",invalid:E.email&&!0},t))}}),E.email&&Object(f.jsx)(O.I,{children:E.email.message})]})]})})]}),Object(f.jsxs)(O.jb,{children:[Object(f.jsx)(O.B,{md:"6",className:"mb-1",children:Object(f.jsxs)(O.jb,{className:"mb-1",children:[Object(f.jsx)(O.O,{sm:"3",size:"lg",className:"form-label",for:"designationId",children:"Designation"}),Object(f.jsxs)(O.B,{sm:"9",children:[Object(f.jsx)(h.a,{control:S,name:"designationId",id:"designationId",render:function(e){var t=e.field,c=e.value,s=e.ref;return Object(f.jsx)(x.a,Object(a.a)(Object(a.a)(Object(a.a)({},t),{},{inputRef:s,className:j()("react-select",{"is-invalid":E.designationId})},t),{},{classNamePrefix:"select",options:V,value:V.find((function(e){return e.id===c})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),E.designationId&&Object(f.jsx)(O.I,{className:"text-danger",children:null===(e=E.designationId)||void 0===e?void 0:e.message})]})]})}),Object(f.jsx)(O.B,{md:"6",className:"mb-1",children:Object(f.jsxs)(O.jb,{className:"mb-1",children:[Object(f.jsx)(O.O,{sm:"3",size:"lg",className:"form-label",for:"roleId",children:"Role"}),Object(f.jsxs)(O.B,{sm:"9",children:[Object(f.jsx)(h.a,{control:S,name:"roleId",id:"roleId",render:function(e){var t=e.field,c=e.value,s=e.ref;return Object(f.jsx)(x.a,Object(a.a)(Object(a.a)(Object(a.a)({},t),{},{inputRef:s,className:j()("react-select",{"is-invalid":E.roleId})},t),{},{classNamePrefix:"select",options:A,value:A.find((function(e){return e.id===c})),onChange:function(e){t.onChange(e.id),X(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),E.roleId&&Object(f.jsx)(O.I,{className:"text-danger",children:null===(t=E.roleId)||void 0===t?void 0:t.message})]})]})})]}),Object(f.jsx)(O.jb,{children:Object(f.jsx)(O.B,{md:"6",className:"mb-1",children:Object(f.jsxs)(O.jb,{className:"mb-1",children:[Object(f.jsx)(O.O,{sm:"3",size:"lg",className:"form-label",for:"departmentId",children:"Department"}),Object(f.jsxs)(O.B,{sm:"9",children:[Object(f.jsx)(h.a,{control:S,name:"departmentId",id:"departmentId",render:function(e){var t=e.field,c=e.value,s=e.ref;return Object(f.jsx)(x.a,Object(a.a)(Object(a.a)(Object(a.a)({},t),{},{inputRef:s,className:j()("react-select",{"is-invalid":E.departmentId})},t),{},{classNamePrefix:"select",options:z,value:z.find((function(e){return e.id===c})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),E.departmentId&&Object(f.jsx)(O.I,{className:"text-danger",children:null===(c=E.departmentId)||void 0===c?void 0:c.message})]})]})})})]}),Object(f.jsx)(O.m,{className:"invoice-padding",children:Object(f.jsx)(u,{})})]}),Object(f.jsx)(O.l,{children:Object(f.jsx)(O.m,{children:Object(f.jsxs)("div",{className:"modal-footer border-0",children:[Object(f.jsx)(O.i,{color:"warning",outline:!0,tag:d.b,to:"/team/list",children:"Cancel"}),Object(f.jsx)(O.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};t.default=function(){return Object(f.jsx)("div",{className:"invoice-add-wrapper",children:Object(f.jsx)(O.jb,{className:"invoice-add",children:Object(f.jsx)(O.B,{xl:12,md:12,sm:12,children:Object(f.jsx)(L,{})})})})}},508:function(e,t,c){},512:function(e,t,c){},523:function(e,t,c){}}]);
//# sourceMappingURL=73.756dc42a.chunk.js.map