(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[69],{1693:function(e,t,a){"use strict";a.r(t);a(134);var n=a(17),r=a(4),s=a(18),c=a(2),i=a.n(c),l=a(1),u=a(10),o=a(132),d=a(6),j=a.n(d),b=a(5),f=a(519),p=a.n(f),m=a(937),O=(a(593),a(506)),v=a(504),x=a(517),h=a(518),g=a(617),k=a(91),w=(a(520),a(507),a(505),a(510),a(15)),N=a(133),y=a(12),I=Object(w.b)(),T=Object(w.d)(),C=function(){var e,t,a,c,d,f,w,C=Object(l.useRef)(null),D=Object(u.f)(),S=Object(l.useState)(!1),P=(Object(s.a)(S,1)[0],Object(l.useState)("")),B=Object(s.a)(P,2),A=B[0],F=B[1],z=Object(u.g)().id,E=x.d().shape({updatedBy:x.f().default(T),clientId:x.c().required("Please select a Client"),serviceId:x.c().required("Please select a Service"),assignee:x.a().min(1,"Please select Assignee"),reviewer:x.a(),clientAccessFlag:x.b().default(!1),organizationId:x.c().default(I),taskStatus:x.c().default(1),invoiceId:x.c().default(0),startDate:x.f().required("Please Select Start Date"),endDate:x.f().required("Please Select End Date"),priority:x.f().required("Please select a Priority"),invoiceFlag:x.b().default(!1)}),q=Object(N.c)((function(e){return e.task})),L=Object(v.f)({resolver:Object(h.a)(E),defaultValues:E.cast()}),R=L.handleSubmit,V=L.formState.errors,M=L.control,Y=L.reset,K=L.setValue,J=[{id:1,name:"Low"},{id:2,name:"Medium"},{id:3,name:"High"}],U=Object(l.useState)([{id:1,name:"Madhan"},{id:2,name:"Kavin"},{id:3,name:"Akhalya"}]),_=Object(s.a)(U,2),H=_[0],W=_[1],G=Object(l.useState)([{id:1,name:"Madhan"},{id:2,name:"Kavin"},{id:3,name:"Akhalya"}]),Q=Object(s.a)(G,2),X=Q[0],Z=Q[1],$=[{id:1,name:"Madhan"},{id:2,name:"Kavin"},{id:3,name:"Akhalya"}],ee=Object(N.b)(),te=Object(l.useState)([]),ae=Object(s.a)(te,2),ne=ae[0],re=ae[1],se=Object(l.useState)([]),ce=Object(s.a)(se,2),ie=ce[0],le=ce[1],ue=Object(l.useState)(!1),oe=Object(s.a)(ue,2),de=oe[0],je=oe[1],be=Object(l.useState)([]),fe=Object(s.a)(be,2),pe=fe[0],me=fe[1];Object(l.useEffect)(Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===q.taskId){e.next=6;break}return t=pe.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{taskId:q.taskId})})),e.next=4,ee(Object(g.b)({rows:t}));case 4:a=q.taskId,D("/recurring-task/view/".concat(a));case 6:case"end":return e.stop()}}),e)}))),[q.taskId]);var Oe=function(e,t){return{organizationId:I,userId:e,type:t,createdBy:T}},ve=function(){var e=Object(r.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.assignee.forEach((function(e){a.push(Oe(e,2))})),t.reviewer.forEach((function(e){a.push(Oe(e,2))})),me(a),delete t.assignee,delete t.reviewer,e.next=8,ee(updateTask(t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){b.a.post("/clients/dropdown").then((function(e){var t=e.data;re(t.clients)})),b.a.post("/services/dropdown").then((function(e){var t=e.data;le(t.services)}))}),[]);var xe=function(e){var t,a=Array.isArray(e)?e.map((function(e){return e.id})):[];t=a.length>0?$.filter((function(e){var t=e.id;return!a.some((function(e){return e===t}))})):$,Z(t),K("assignee",a)},he=function(e){var t,a=Array.isArray(e)?e.map((function(e){return e.id})):[];t=a.length>0?$.filter((function(e){var t=e.id;return!a.some((function(e){return e===t}))})):$,W(t),K("reviewer",a)};Object(l.useEffect)(Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==q.selectedTask&&Y({updatedBy:T,clientId:q.selectedTask.clientid,serviceId:q.selectedTask.serviceid,assignee:[],reviewer:[],clientAccessFlag:!1,organizationId:I,taskStatus:q.selectedTask.taskstatus,invoiceId:q.selectedTask.invoiceid||0,startDate:q.selectedTask.startdate,endDate:q.selectedTask.enddate,priority:parseInt(q.selectedTask.priority),invoiceFlag:q.selectedTask.invoiceflag});case 1:case"end":return e.stop()}}),e)}))),[q.selectedTask]),Object(l.useEffect)(Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===z){e.next=3;break}return e.next=3,ee(Object(g.f)(z));case 3:case"end":return e.stop()}}),e)}))),[z]);return Object(y.jsxs)("form",{onSubmit:R(ve),children:[Object(y.jsxs)(k.l,{className:"invoice-preview-card",children:[Object.keys(V).map((function(e,t){var a;return Object(y.jsxs)(k.I,{children:[" ",null===(a=V[e])||void 0===a?void 0:a.message]},t)})),Object(y.jsx)(k.p,{children:"Edit Task"}),Object(y.jsx)(k.m,{className:"pb-2 px-2",children:Object(y.jsxs)(k.jb,{children:[Object(y.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"clientId",children:"Client"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:M,name:"clientId",id:"clientId",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(O.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:j()("react-select",{"is-invalid":V.clientId})},t),{},{classNamePrefix:"select",options:ne,value:ne.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),getClientData(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.clientId&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(e=V.clientId)||void 0===e?void 0:e.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"serviceId",children:"Service"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:M,name:"serviceId",id:"serviceId",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(O.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:j()("react-select",{"is-invalid":V.serviceId})},t),{},{classNamePrefix:"select",options:ie,value:ie.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.serviceId&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(t=V.serviceId)||void 0===t?void 0:t.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"description",children:"Description"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{id:"description",name:"description",control:M,render:function(e){var t=e.field;return Object(y.jsx)(k.L,Object(n.a)({type:"textarea",invalid:V.description&&!0},t))}}),V.description&&Object(y.jsx)(k.I,{children:V.description.message})]})]}),Object(y.jsx)(k.jb,{className:"my-2",children:Object(y.jsx)(k.B,{children:Object(y.jsxs)("div",{className:"d-lg-flex",children:[Object(y.jsx)("input",{type:"file",className:"hidden",multiple:!0,onChange:function(e){console.log(e.target.files)},ref:C}),Object(y.jsxs)(k.i,{type:"button",outline:!0,color:"primary",onClick:function(){return C.current.click()},children:[Object(y.jsx)(m.a,{size:14,className:"me-25"})," Add Attachment"]})]})})})]}),Object(y.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"assignee",children:"Assignee"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:M,name:"assignee",id:"assignee",render:function(e){var t=e.field,a=e.value,r=e.ref;return Object(y.jsx)(O.a,Object(n.a)(Object(n.a)({inputRef:r,className:j()("react-select",{"is-invalid":V.assignee})},t),{},{classNamePrefix:"select",options:H,isMulti:!0,value:a,onChange:xe,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.assignee&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(a=V.assignee)||void 0===a?void 0:a.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"reviewer",children:"Reviewer"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:M,name:"reviewer",id:"reviewer",render:function(e){var t=e.field,a=e.value,r=e.ref;return Object(y.jsx)(O.a,Object(n.a)(Object(n.a)({inputRef:r,className:j()("react-select",{"is-invalid":V.reviewer})},t),{},{classNamePrefix:"select",options:X,isMulti:!0,value:a,onChange:he,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.reviewer&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(c=V.reviewer)||void 0===c?void 0:c.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"startDate",children:"Start Date"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{value:A,name:"startDate",control:M,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var t=e.field;return Object(y.jsx)(p.a,{value:t.value,onChange:function(e,a){t.onChange(a)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:j()("due-date-picker",{"flatpickr-input is-invalid":V.startDate})})}}),V.startDate&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(d=V.startDate)||void 0===d?void 0:d.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"endDate",children:"End Date"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{value:A,onChange:function(e){return F(e)},name:"endDate",control:M,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var t=e.field;return Object(y.jsx)(p.a,{value:t.value,onChange:function(e,a){t.onChange(a)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:j()("due-date-picker",{"flatpickr-input is-invalid":V.endDate})})}}),V.endDate&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(f=V.endDate)||void 0===f?void 0:f.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"priority",children:"Priority"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:M,name:"priority",id:"priority",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(O.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:j()("react-select",{"is-invalid":V.priority})},t),{},{classNamePrefix:"select",options:J,value:J.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.priority&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(w=V.priority)||void 0===w?void 0:w.message})]})]})]})]})}),Object(y.jsx)("hr",{className:"invoice-spacing"}),Object(y.jsx)(k.jb,{className:"px-1 pb-2",children:Object(y.jsxs)("div",{className:"form-check form-check-primary mx-2",children:[Object(y.jsx)(v.a,{control:M,name:"invoiceFlag",rules:{required:!0},render:function(e){var t=e.field;return Object(y.jsx)(k.L,Object(n.a)(Object(n.a)({className:"form-check-input",type:"checkbox",id:"invoice_flag",value:t.value},t),{},{onChange:function(e){t.onChange(e),je(!de)}}))}}),Object(y.jsx)(k.O,{className:"form-check-label",for:"invoice_flag",children:"Create Proposal for this Task"})]})})]}),Object(y.jsx)(k.l,{children:Object(y.jsx)(k.m,{children:Object(y.jsxs)("div",{className:"modal-footer border-0",children:[Object(y.jsx)(k.i,{className:"add-new-user",outline:!0,color:"warning",tag:o.b,to:"/recurring-task/list",children:"Cancel"}),Object(y.jsx)(k.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};t.default=function(){return Object(y.jsx)("div",{className:"invoice-add-wrapper",children:Object(y.jsx)(k.jb,{className:"invoice-add",children:Object(y.jsx)(k.B,{xl:12,md:12,sm:12,children:Object(y.jsx)(C,{})})})})}},505:function(e,t,a){},510:function(e,t,a){},520:function(e,t,a){},617:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return j})),a.d(t,"f",(function(){return b})),a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return m})),a.d(t,"c",(function(){return v}));var n=a(11),r=a(4),s=a(2),c=a.n(s),i=a(3),l=a(5),u=a(15),o=Object(u.d)(),d=Object(i.b)("appTasks/getData",function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/tasks/list",t);case 2:return a=e.sent,e.abrupt("return",{params:t,data:a.data.tasks.tasks,totalPages:a.data.tasks.total});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(i.b)("appTasks/getClient",function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/clients/get",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.clients);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(i.b)("appTasks/getTask",function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/tasks/get",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.task);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(i.b)("appTasks/addTask",function(){var e=Object(r.a)(c.a.mark((function e(t,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,l.a.post("/tasks/create",t);case 3:return r=e.sent,e.abrupt("return",r.data.task);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(i.b)("appTasks/addTaskParticipants",function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,l.a.post("/recurring-taskparticpants/create",t);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),m=(Object(i.b)("appTasks/addTaskWorkflow",function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,l.a.post("/recurring-taskworkflows/create",t);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Object(i.b)("appTasks/updateInvocieId",function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,l.a.post("/tasks/updateinvocieid",t);case 3:return e.abrupt("return",response.data.task);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),O=Object(i.b)("appTasks/updateTask",function(){var e=Object(r.a)(c.a.mark((function e(t,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,l.a.post("/tasks/create",t);case 3:return r=e.sent,e.abrupt("return",r.data.task);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),v=Object(i.b)("appTasks/deleteTask",function(){var e=Object(r.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,e.next=3,l.a.post("/tasks/delete",{id:t,updatedBy:o});case 3:return e.next=5,n(d(r().tasks.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());Object(i.c)({name:"appTasks",initialState:{data:[],total:1,params:{},allData:[],selectedTask:null,taskId:null,editflag:!0},reducers:{},extraReducers:function(e){e.addCase(d.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.totalPages})).addCase(b.fulfilled,(function(e,t){e.selectedTask=t.payload})).addCase(f.fulfilled,(function(e,t){e.taskId=t.payload})).addCase(O.fulfilled,(function(e,t){e.taskId=t.payload}))}}).reducer}}]);
//# sourceMappingURL=69.0b628cff.chunk.js.map