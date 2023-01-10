(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[84],{1694:function(e,t,a){"use strict";a.r(t);a(134);var n=a(17),s=a(4),c=a(18),i=a(2),r=a.n(i),l=a(1),d=a(11),o=a(132),j=a(6),u=a.n(j),b=a(5),m=a(521),f=a.n(m),O=a(940),v=(a(596),a(508)),h=a(506),x=a(519),p=a(520),g=a(145),N=a(91),k=(a(522),a(509),a(507),a(512),a(13)),I=a(133),y=a(12),w=Object(k.b)(),C=Object(k.d)(),D=function(){var e,t,a,i,j,m,k,D=Object(l.useRef)(null),S=Object(d.f)(),P=Object(l.useState)(!1),A=(Object(c.a)(P,1)[0],Object(l.useState)("")),B=Object(c.a)(A,2),F=B[0],T=B[1],z=Object(d.g)().id,E=x.d().shape({updatedBy:x.f().default(C),clientId:x.c().required("Please select a Client"),serviceId:x.c().required("Please select a Service"),assignee:x.a().min(1,"Please select Assignee"),reviewer:x.a(),clientAccessFlag:x.b().default(!1),organizationId:x.c().default(w),taskStatus:x.c().default(1),invoiceId:x.c().default(0),startDate:x.f().required("Please Select Start Date"),endDate:x.f().required("Please Select End Date"),priority:x.f().required("Please select a Priority"),invoiceFlag:x.b().default(!1)}),q=Object(I.c)((function(e){return e.task})),L=Object(h.f)({resolver:Object(p.a)(E),defaultValues:E.cast()}),R=L.handleSubmit,V=L.formState.errors,M=L.control,Y=L.reset,K=L.setValue,J=[{id:1,name:"Low"},{id:2,name:"Medium"},{id:3,name:"High"}],U=Object(l.useState)([{id:1,name:"Madhan"},{id:2,name:"Kavin"},{id:3,name:"Akhalya"}]),_=Object(c.a)(U,2),H=_[0],G=_[1],Q=Object(l.useState)([{id:1,name:"Madhan"},{id:2,name:"Kavin"},{id:3,name:"Akhalya"}]),W=Object(c.a)(Q,2),X=W[0],Z=W[1],$=[{id:1,name:"Madhan"},{id:2,name:"Kavin"},{id:3,name:"Akhalya"}],ee=Object(I.b)(),te=Object(l.useState)([]),ae=Object(c.a)(te,2),ne=ae[0],se=ae[1],ce=Object(l.useState)([]),ie=Object(c.a)(ce,2),re=ie[0],le=ie[1],de=Object(l.useState)(!1),oe=Object(c.a)(de,2),je=oe[0],ue=oe[1],be=Object(l.useState)([]),me=Object(c.a)(be,2),fe=me[0],Oe=me[1];Object(l.useEffect)(Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===q.taskId){e.next=6;break}return t=fe.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{taskId:q.taskId})})),e.next=4,ee(Object(g.c)({rows:t}));case 4:a=q.taskId,S("/task/view/".concat(a));case 6:case"end":return e.stop()}}),e)}))),[q.taskId]);var ve=function(e,t){return{organizationId:w,userId:e,type:t,createdBy:C}},he=function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.assignee.forEach((function(e){a.push(ve(e,2))})),t.reviewer.forEach((function(e){a.push(ve(e,2))})),Oe(a),delete t.assignee,delete t.reviewer,e.next=8,ee(updateTask(t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){b.a.post("/clients/dropdown").then((function(e){var t=e.data;se(t.clients)})),b.a.post("/services/dropdown").then((function(e){var t=e.data;le(t.services)}))}),[]);var xe=function(e){var t,a=Array.isArray(e)?e.map((function(e){return e.id})):[];t=a.length>0?$.filter((function(e){var t=e.id;return!a.some((function(e){return e===t}))})):$,Z(t),K("assignee",a)},pe=function(e){var t,a=Array.isArray(e)?e.map((function(e){return e.id})):[];t=a.length>0?$.filter((function(e){var t=e.id;return!a.some((function(e){return e===t}))})):$,G(t),K("reviewer",a)};Object(l.useEffect)(Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==q.selectedTask&&Y({updatedBy:C,clientId:q.selectedTask.clientid,serviceId:q.selectedTask.serviceid,assignee:[],reviewer:[],clientAccessFlag:!1,organizationId:w,taskStatus:q.selectedTask.taskstatus,invoiceId:q.selectedTask.invoiceid||0,startDate:q.selectedTask.startdate,endDate:q.selectedTask.enddate,priority:parseInt(q.selectedTask.priority),invoiceFlag:q.selectedTask.invoiceflag});case 1:case"end":return e.stop()}}),e)}))),[q.selectedTask]),Object(l.useEffect)(Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===z){e.next=3;break}return e.next=3,ee(Object(g.i)(z));case 3:case"end":return e.stop()}}),e)}))),[z]);return Object(y.jsxs)("form",{onSubmit:R(he),children:[Object(y.jsxs)(N.l,{className:"invoice-preview-card",children:[Object.keys(V).map((function(e,t){var a;return Object(y.jsxs)(N.I,{children:[" ",null===(a=V[e])||void 0===a?void 0:a.message]},t)})),Object(y.jsx)(N.p,{children:"Edit Task"}),Object(y.jsx)(N.m,{className:"pb-2 px-2",children:Object(y.jsxs)(N.jb,{children:[Object(y.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[Object(y.jsxs)(N.jb,{className:"mb-1",children:[Object(y.jsx)(N.O,{sm:"3",size:"lg",className:"form-label",for:"clientId",children:"Client"}),Object(y.jsxs)(N.B,{sm:"9",children:[Object(y.jsx)(h.a,{control:M,name:"clientId",id:"clientId",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(v.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:u()("react-select",{"is-invalid":V.clientId})},t),{},{classNamePrefix:"select",options:ne,value:ne.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),getClientData(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.clientId&&Object(y.jsx)(N.I,{className:"text-danger",children:null===(e=V.clientId)||void 0===e?void 0:e.message})]})]}),Object(y.jsxs)(N.jb,{className:"mb-1",children:[Object(y.jsx)(N.O,{sm:"3",size:"lg",className:"form-label",for:"serviceId",children:"Service"}),Object(y.jsxs)(N.B,{sm:"9",children:[Object(y.jsx)(h.a,{control:M,name:"serviceId",id:"serviceId",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(v.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:u()("react-select",{"is-invalid":V.serviceId})},t),{},{classNamePrefix:"select",options:re,value:re.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.serviceId&&Object(y.jsx)(N.I,{className:"text-danger",children:null===(t=V.serviceId)||void 0===t?void 0:t.message})]})]}),Object(y.jsxs)(N.jb,{className:"mb-1",children:[Object(y.jsx)(N.O,{sm:"3",size:"lg",className:"form-label",for:"description",children:"Description"}),Object(y.jsxs)(N.B,{sm:"9",children:[Object(y.jsx)(h.a,{id:"description",name:"description",control:M,render:function(e){var t=e.field;return Object(y.jsx)(N.L,Object(n.a)({type:"textarea",invalid:V.description&&!0},t))}}),V.description&&Object(y.jsx)(N.I,{children:V.description.message})]})]}),Object(y.jsx)(N.jb,{className:"my-2",children:Object(y.jsx)(N.B,{children:Object(y.jsxs)("div",{className:"d-lg-flex",children:[Object(y.jsx)("input",{type:"file",className:"hidden",multiple:!0,onChange:function(e){console.log(e.target.files)},ref:D}),Object(y.jsxs)(N.i,{type:"button",outline:!0,color:"primary",onClick:function(){return D.current.click()},children:[Object(y.jsx)(O.a,{size:14,className:"me-25"})," Add Attachment"]})]})})})]}),Object(y.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[Object(y.jsxs)(N.jb,{className:"mb-1",children:[Object(y.jsx)(N.O,{sm:"3",size:"lg",className:"form-label",for:"assignee",children:"Assignee"}),Object(y.jsxs)(N.B,{sm:"9",children:[Object(y.jsx)(h.a,{control:M,name:"assignee",id:"assignee",render:function(e){var t=e.field,a=e.value,s=e.ref;return Object(y.jsx)(v.a,Object(n.a)(Object(n.a)({inputRef:s,className:u()("react-select",{"is-invalid":V.assignee})},t),{},{classNamePrefix:"select",options:H,isMulti:!0,value:a,onChange:xe,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.assignee&&Object(y.jsx)(N.I,{className:"text-danger",children:null===(a=V.assignee)||void 0===a?void 0:a.message})]})]}),Object(y.jsxs)(N.jb,{className:"mb-1",children:[Object(y.jsx)(N.O,{sm:"3",size:"lg",className:"form-label",for:"reviewer",children:"Reviewer"}),Object(y.jsxs)(N.B,{sm:"9",children:[Object(y.jsx)(h.a,{control:M,name:"reviewer",id:"reviewer",render:function(e){var t=e.field,a=e.value,s=e.ref;return Object(y.jsx)(v.a,Object(n.a)(Object(n.a)({inputRef:s,className:u()("react-select",{"is-invalid":V.reviewer})},t),{},{classNamePrefix:"select",options:X,isMulti:!0,value:a,onChange:pe,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.reviewer&&Object(y.jsx)(N.I,{className:"text-danger",children:null===(i=V.reviewer)||void 0===i?void 0:i.message})]})]}),Object(y.jsxs)(N.jb,{className:"mb-1",children:[Object(y.jsx)(N.O,{sm:"3",size:"lg",className:"form-label",for:"startDate",children:"Start Date"}),Object(y.jsxs)(N.B,{sm:"9",children:[Object(y.jsx)(h.a,{value:F,name:"startDate",control:M,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var t=e.field;return Object(y.jsx)(f.a,{value:t.value,onChange:function(e,a){t.onChange(a)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:u()("due-date-picker",{"flatpickr-input is-invalid":V.startDate})})}}),V.startDate&&Object(y.jsx)(N.I,{className:"text-danger",children:null===(j=V.startDate)||void 0===j?void 0:j.message})]})]}),Object(y.jsxs)(N.jb,{className:"mb-1",children:[Object(y.jsx)(N.O,{sm:"3",size:"lg",className:"form-label",for:"endDate",children:"End Date"}),Object(y.jsxs)(N.B,{sm:"9",children:[Object(y.jsx)(h.a,{value:F,onChange:function(e){return T(e)},name:"endDate",control:M,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var t=e.field;return Object(y.jsx)(f.a,{value:t.value,onChange:function(e,a){t.onChange(a)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:u()("due-date-picker",{"flatpickr-input is-invalid":V.endDate})})}}),V.endDate&&Object(y.jsx)(N.I,{className:"text-danger",children:null===(m=V.endDate)||void 0===m?void 0:m.message})]})]}),Object(y.jsxs)(N.jb,{className:"mb-1",children:[Object(y.jsx)(N.O,{sm:"3",size:"lg",className:"form-label",for:"priority",children:"Priority"}),Object(y.jsxs)(N.B,{sm:"9",children:[Object(y.jsx)(h.a,{control:M,name:"priority",id:"priority",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(v.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:u()("react-select",{"is-invalid":V.priority})},t),{},{classNamePrefix:"select",options:J,value:J.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.priority&&Object(y.jsx)(N.I,{className:"text-danger",children:null===(k=V.priority)||void 0===k?void 0:k.message})]})]})]})]})}),Object(y.jsx)("hr",{className:"invoice-spacing"}),Object(y.jsx)(N.jb,{className:"px-1 pb-2",children:Object(y.jsxs)("div",{className:"form-check form-check-primary mx-2",children:[Object(y.jsx)(h.a,{control:M,name:"invoiceFlag",rules:{required:!0},render:function(e){var t=e.field;return Object(y.jsx)(N.L,Object(n.a)(Object(n.a)({className:"form-check-input",type:"checkbox",id:"invoice_flag",value:t.value},t),{},{onChange:function(e){t.onChange(e),ue(!je)}}))}}),Object(y.jsx)(N.O,{className:"form-check-label",for:"invoice_flag",children:"Create Proposal for this Task"})]})})]}),Object(y.jsx)(N.l,{children:Object(y.jsx)(N.m,{children:Object(y.jsxs)("div",{className:"modal-footer border-0",children:[Object(y.jsx)(N.i,{className:"add-new-user",outline:!0,color:"warning",tag:o.b,to:"/task/list",children:"Cancel"}),Object(y.jsx)(N.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};t.default=function(){return Object(y.jsx)("div",{className:"invoice-add-wrapper",children:Object(y.jsx)(N.jb,{className:"invoice-add",children:Object(y.jsx)(N.B,{xl:12,md:12,sm:12,children:Object(y.jsx)(D,{})})})})}},507:function(e,t,a){},512:function(e,t,a){},522:function(e,t,a){}}]);
//# sourceMappingURL=84.bdf42528.chunk.js.map