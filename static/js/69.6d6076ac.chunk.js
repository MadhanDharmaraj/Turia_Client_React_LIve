(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[69],{1680:function(e,t,a){"use strict";a.r(t);a(134);var n=a(17),r=a(4),s=a(18),c=a(1),i=a.n(c),u=a(2),o=a(11),l=a(132),d=a(6),j=a.n(d),f=a(5),b=a(523),p=a.n(b),O=a(929),m=(a(597),a(511)),v=a(509),x=a(521),h=a(522),g=a(621),k=a(91),w=(a(524),a(510),a(508),a(513),a(12)),N=a(133),y=a(13),I=Object(w.b)(),T=Object(w.e)(),C=function(){var e,t,a,c,d,b,w,C=Object(u.useRef)(null),S=Object(o.f)(),D=Object(u.useState)(!1),P=(Object(s.a)(D,1)[0],Object(u.useState)("")),z=Object(s.a)(P,2),B=z[0],F=z[1],A=Object(o.g)().id,E=x.d().shape({updatedBy:x.f().default(T),clientId:x.c().required("Please select a Client"),serviceId:x.c().required("Please select a Service"),assignee:x.a().min(1,"Please select Assignee"),reviewer:x.a(),clientAccessFlag:x.b().default(!1),organizationId:x.c().default(I),taskStatus:x.c().default(1),invoiceId:x.c().default(0),startDate:x.f().required("Please Select Start Date"),endDate:x.f().required("Please Select End Date"),priority:x.f().required("Please select a Priority"),invoiceFlag:x.b().default(!1)}),q=Object(N.c)((function(e){return e.task})),L=Object(v.f)({resolver:Object(h.a)(E),defaultValues:E.cast()}),R=L.handleSubmit,V=L.formState.errors,Y=L.control,M=L.reset,J=L.setValue,U=[{id:1,name:"Low"},{id:2,name:"Medium"},{id:3,name:"High"}],_=Object(u.useState)([]),H=Object(s.a)(_,2),W=H[0],G=H[1],K=Object(u.useState)([]),Q=Object(s.a)(K,2),X=Q[0],Z=Q[1],$=Object(N.b)(),ee=Object(u.useState)([]),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],re=Object(u.useState)([]),se=Object(s.a)(re,2),ce=se[0],ie=se[1],ue=Object(u.useState)([]),oe=Object(s.a)(ue,2),le=oe[0],de=oe[1],je=Object(u.useState)(!1),fe=Object(s.a)(je,2),be=fe[0],pe=fe[1],Oe=Object(u.useState)([]),me=Object(s.a)(Oe,2),ve=me[0],xe=me[1];Object(u.useEffect)(Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===q.taskId){e.next=6;break}return t=ve.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{taskId:q.taskId})})),e.next=4,$(Object(g.b)({rows:t}));case 4:a=q.taskId,S("/recurring-task/view/".concat(a));case 6:case"end":return e.stop()}}),e)}))),[q.taskId]);var he=function(e,t){return{organizationId:I,userId:e,type:t,createdBy:T}},ge=function(){var e=Object(r.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.assignee.forEach((function(e){a.push(he(e,1))})),t.reviewer.forEach((function(e){a.push(he(e,2))})),xe(a),delete t.assignee,delete t.reviewer,e.next=8,$(updateTask(t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.post("/organizationusers/dropdown").then((function(e){var t=e.data;Z(t.organizationusers),G(t.organizationusers),de(t.organizationusers)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){f.a.post("/clients/dropdown").then((function(e){var t=e.data;ne(t.clients)})),f.a.post("/services/dropdown").then((function(e){var t=e.data;ie(t.services)})),ke()}),[]);var we=function(e){var t,a=Array.isArray(e)?e.map((function(e){return e.id})):[];t=a.length>0?le.filter((function(e){var t=e.id;return!a.some((function(e){return e===t}))})):le,Z(t),J("assignee",a)},Ne=function(e){var t,a=Array.isArray(e)?e.map((function(e){return e.id})):[];t=a.length>0?le.filter((function(e){var t=e.id;return!a.some((function(e){return e===t}))})):le,G(t),J("reviewer",a)};Object(u.useEffect)(Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==q.selectedTask&&M({updatedBy:T,clientId:q.selectedTask.clientid,serviceId:q.selectedTask.serviceid,assignee:[],reviewer:[],clientAccessFlag:!1,organizationId:I,taskStatus:q.selectedTask.taskstatus,invoiceId:q.selectedTask.invoiceid||0,startDate:q.selectedTask.startdate,endDate:q.selectedTask.enddate,priority:parseInt(q.selectedTask.priority),invoiceFlag:q.selectedTask.invoiceflag});case 1:case"end":return e.stop()}}),e)}))),[q.selectedTask]),Object(u.useEffect)(Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===A){e.next=3;break}return e.next=3,$(Object(g.f)(A));case 3:case"end":return e.stop()}}),e)}))),[A]);return Object(y.jsxs)("form",{onSubmit:R(ge),children:[Object(y.jsxs)(k.l,{className:"invoice-preview-card",children:[Object.keys(V).map((function(e,t){var a;return Object(y.jsxs)(k.I,{children:[" ",null===(a=V[e])||void 0===a?void 0:a.message]},t)})),Object(y.jsx)(k.p,{children:"Edit Task"}),Object(y.jsx)(k.m,{className:"pb-2 px-2",children:Object(y.jsxs)(k.jb,{children:[Object(y.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"clientId",children:"Client"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:Y,name:"clientId",id:"clientId",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(m.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:j()("react-select",{"is-invalid":V.clientId})},t),{},{classNamePrefix:"select",options:ae,value:ae.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),getClientData(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.clientId&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(e=V.clientId)||void 0===e?void 0:e.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"serviceId",children:"Service"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:Y,name:"serviceId",id:"serviceId",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(m.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:j()("react-select",{"is-invalid":V.serviceId})},t),{},{classNamePrefix:"select",options:ce,value:ce.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.serviceId&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(t=V.serviceId)||void 0===t?void 0:t.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"description",children:"Description"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{id:"description",name:"description",control:Y,render:function(e){var t=e.field;return Object(y.jsx)(k.L,Object(n.a)({type:"textarea",invalid:V.description&&!0},t))}}),V.description&&Object(y.jsx)(k.I,{children:V.description.message})]})]}),Object(y.jsx)(k.jb,{className:"my-2",children:Object(y.jsx)(k.B,{children:Object(y.jsxs)("div",{className:"d-lg-flex",children:[Object(y.jsx)("input",{type:"file",className:"hidden",multiple:!0,onChange:function(e){console.log(e.target.files)},ref:C}),Object(y.jsxs)(k.i,{type:"button",outline:!0,color:"primary",onClick:function(){return C.current.click()},children:[Object(y.jsx)(O.a,{size:14,className:"me-25"})," Add Attachment"]})]})})})]}),Object(y.jsxs)("div",{className:"col-lg-6 col-sm-12",children:[Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"assignee",children:"Assignee"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:Y,name:"assignee",id:"assignee",render:function(e){var t=e.field,a=e.value,r=e.ref;return Object(y.jsx)(m.a,Object(n.a)(Object(n.a)({inputRef:r,className:j()("react-select",{"is-invalid":V.assignee})},t),{},{classNamePrefix:"select",options:W,isMulti:!0,value:a,onChange:we,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.assignee&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(a=V.assignee)||void 0===a?void 0:a.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"reviewer",children:"Reviewer"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:Y,name:"reviewer",id:"reviewer",render:function(e){var t=e.field,a=e.value,r=e.ref;return Object(y.jsx)(m.a,Object(n.a)(Object(n.a)({inputRef:r,className:j()("react-select",{"is-invalid":V.reviewer})},t),{},{classNamePrefix:"select",options:X,isMulti:!0,value:a,onChange:Ne,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.reviewer&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(c=V.reviewer)||void 0===c?void 0:c.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"startDate",children:"Start Date"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{value:B,name:"startDate",control:Y,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var t=e.field;return Object(y.jsx)(p.a,{value:t.value,onChange:function(e,a){t.onChange(a)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:j()("due-date-picker",{"flatpickr-input is-invalid":V.startDate})})}}),V.startDate&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(d=V.startDate)||void 0===d?void 0:d.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"endDate",children:"End Date"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{value:B,onChange:function(e){return F(e)},name:"endDate",control:Y,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var t=e.field;return Object(y.jsx)(p.a,{value:t.value,onChange:function(e,a){t.onChange(a)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:j()("due-date-picker",{"flatpickr-input is-invalid":V.endDate})})}}),V.endDate&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(b=V.endDate)||void 0===b?void 0:b.message})]})]}),Object(y.jsxs)(k.jb,{className:"mb-1",children:[Object(y.jsx)(k.O,{sm:"3",size:"lg",className:"form-label",for:"priority",children:"Priority"}),Object(y.jsxs)(k.B,{sm:"9",children:[Object(y.jsx)(v.a,{control:Y,name:"priority",id:"priority",render:function(e){var t=e.field,a=e.ref;return Object(y.jsx)(m.a,Object(n.a)(Object(n.a)(Object(n.a)({},t),{},{inputRef:a,className:j()("react-select",{"is-invalid":V.priority})},t),{},{classNamePrefix:"select",options:U,value:U.find((function(e){return e.id===t.value})),onChange:function(e){return t.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),V.priority&&Object(y.jsx)(k.I,{className:"text-danger",children:null===(w=V.priority)||void 0===w?void 0:w.message})]})]})]})]})}),Object(y.jsx)("hr",{className:"invoice-spacing"}),Object(y.jsx)(k.jb,{className:"px-1 pb-2",children:Object(y.jsxs)("div",{className:"form-check form-check-primary mx-2",children:[Object(y.jsx)(v.a,{control:Y,name:"invoiceFlag",rules:{required:!0},render:function(e){var t=e.field;return Object(y.jsx)(k.L,Object(n.a)(Object(n.a)({className:"form-check-input",type:"checkbox",id:"invoice_flag",value:t.value},t),{},{onChange:function(e){t.onChange(e),pe(!be)}}))}}),Object(y.jsx)(k.O,{className:"form-check-label",for:"invoice_flag",children:"Create Proposal for this Task"})]})})]}),Object(y.jsx)(k.l,{children:Object(y.jsx)(k.m,{children:Object(y.jsxs)("div",{className:"modal-footer border-0",children:[Object(y.jsx)(k.i,{className:"add-new-user",outline:!0,color:"warning",tag:l.b,to:"/recurring-task/list",children:"Cancel"}),Object(y.jsx)(k.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};t.default=function(){return Object(y.jsx)("div",{className:"invoice-add-wrapper",children:Object(y.jsx)(k.jb,{className:"invoice-add",children:Object(y.jsx)(k.B,{xl:12,md:12,sm:12,children:Object(y.jsx)(C,{})})})})}},508:function(e,t,a){},513:function(e,t,a){},524:function(e,t,a){},621:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return j})),a.d(t,"f",(function(){return f})),a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return O})),a.d(t,"c",(function(){return v}));var n=a(10),r=a(4),s=a(1),c=a.n(s),i=a(3),u=a(5),o=a(12),l=Object(o.e)(),d=Object(i.b)("appTasks/getData",function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/tasks/list",t);case 2:return a=e.sent,e.abrupt("return",{params:t,data:a.data.tasks.tasks,totalPages:a.data.tasks.total});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(i.b)("appTasks/getClient",function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/clients/get",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.clients);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(i.b)("appTasks/getTask",function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/tasks/get",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.task);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(i.b)("appTasks/addTask",function(){var e=Object(r.a)(c.a.mark((function e(t,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,u.a.post("/tasks/create",t);case 3:return r=e.sent,e.abrupt("return",r.data.task);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(i.b)("appTasks/addTaskParticipants",function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,u.a.post("/recurring-taskparticpants/create",t);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),O=(Object(i.b)("appTasks/addTaskWorkflow",function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,u.a.post("/recurring-taskworkflows/create",t);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Object(i.b)("appTasks/updateInvocieId",function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,u.a.post("/tasks/updateinvocieid",t);case 3:return e.abrupt("return",response.data.task);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),m=Object(i.b)("appTasks/updateTask",function(){var e=Object(r.a)(c.a.mark((function e(t,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,u.a.post("/tasks/create",t);case 3:return r=e.sent,e.abrupt("return",r.data.task);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),v=Object(i.b)("appTasks/deleteTask",function(){var e=Object(r.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,e.next=3,u.a.post("/tasks/delete",{id:t,updatedBy:l});case 3:return e.next=5,n(d(r().tasks.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());Object(i.c)({name:"appTasks",initialState:{data:[],total:1,params:{},allData:[],selectedTask:null,taskId:null,editflag:!0},reducers:{},extraReducers:function(e){e.addCase(d.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.totalPages})).addCase(f.fulfilled,(function(e,t){e.selectedTask=t.payload})).addCase(b.fulfilled,(function(e,t){e.taskId=t.payload})).addCase(m.fulfilled,(function(e,t){e.taskId=t.payload}))}}).reducer}}]);
//# sourceMappingURL=69.6d6076ac.chunk.js.map