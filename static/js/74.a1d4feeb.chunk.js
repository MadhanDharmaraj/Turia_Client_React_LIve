(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[74],{1403:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),a=c(22),i=c(2),r=c(13),l=c(139),o=c(145),j=c(140),d=c(96),b=c(14),u=c(142),m=c(571),O=c(144),h=c(141),x=c(5),f=(c(565),c(718)),p=c(825),v=c(527),g=c(177),k=c(541),N=c.n(k),y=c(542),w=c.n(y),S=c(10),I=c(39),z=c.n(I),C=c(525),T=c(526),M=c(16),Y=Object(S.b)(),B=Object(S.d)(),D=w()(N.a),F=function(e){var t=e.tabId,c=Object(i.useState)(!1),l=Object(a.a)(c,2),o=l[0],O=l[1],k=function(){return Object(M.jsx)(i.Fragment,{children:Object(M.jsx)(T.a,{})})},N=Object(j.b)(),y=Object(r.g)().id,w=Object(i.useState)([]),S=Object(a.a)(w,2),I=S[0],F=S[1],E=Object(i.useState)([]),P=Object(a.a)(E,2),R=P[0],A=P[1],L=Object(i.useState)([]),H=Object(a.a)(L,2),_=H[0],K=H[1],U=Object(i.useState)([]),q=Object(a.a)(U,2),J=q[0],W=q[1],V=Object(i.useState)(""),G=Object(a.a)(V,2),Q=G[0],X=G[1],Z=Object(i.useState)(""),$=Object(a.a)(Z,2),ee=$[0],te=$[1],ce=Object(i.useState)(0),se=Object(a.a)(ce,2),ne=se[0],ae=se[1],ie=Object(j.c)((function(e){return e.taskconversation})),re=function(e){var t=_.map((function(t,c){return c===e?(te(t.comment),Object(b.a)(Object(b.a)({},t),{},{editFlag:!0})):Object(b.a)(Object(b.a)({},t),{},{editFlag:!1})}));K(t)},le={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){ae(Math.round(100*e.loaded/e.total))}},oe=Object(m.a)({multiple:!0,onDrop:function(e,t){t.length?h.b.error("You can only upload image Files!."):(A(e),F([].concat(Object(u.a)(I),Object(u.a)(e))))}}),je=oe.getRootProps,de=oe.getInputProps;Object(i.useEffect)((function(){R.length>0&&function(){O(!0);var e=new FormData;R.forEach((function(t,c){e.append("files[".concat(c,"]"),t)})),e.append("id",y),e.append("organizationId",Y),e.append("createdBy",B),x.a.post("/google/taskfolders",e,le).then((function(e){W([].concat(Object(u.a)(J),Object(u.a)(e.data.attachment_ids))),A([]),O(!1)})).catch((function(){h.b.error("Upload Failed",{position:"bottom-right"}),O(!1)}))}()}),[R]);var be=function(){var e=Object(n.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.comment=ee,""===t.comment){e.next=6;break}return t.updatedBy=B,e.next=5,N(Object(g.e)(t));case 5:h.b.success("Comment Updated Successfully",{position:"bottom-right"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("tasknotes"!==t){e.next=3;break}return e.next=3,N(Object(g.d)(y));case 3:case"end":return e.stop()}}),e)}))),[t]),Object(i.useEffect)((function(){K(ie.data||[])}),[ie.data]);var ue=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(""!==Q||J.length>0)){e.next=11;break}return t={organizationId:Y,createdBy:B,updatedBy:B,comment:Q,attachmentIds:J,taskId:y},O(!0),e.next=5,N(Object(g.a)(t));case 5:h.b.success("Comment Added Successfully",{position:"bottom-right"}),X(""),A([]),F([]),ae(0),O(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=R.map((function(e,t){return Object(M.jsxs)(d.P,{className:"d-flex align-items-center justify-content-between",children:[Object(M.jsxs)("div",{className:"file-details d-flex align-items-center",children:[Object(M.jsx)("div",{className:"file-preview me-1",children:Object(M.jsx)(v.a,{})}),Object(M.jsxs)("div",{children:[Object(M.jsx)("p",{className:"file-name mb-0",children:e.name}),Object(M.jsx)("p",{className:"file-size mb-0",children:(c=e.size,Math.round(c/100)/10>1e3?"".concat((Math.round(c/100)/1e4).toFixed(1)," mb"):"".concat((Math.round(c/100)/10).toFixed(1)," kb"))})]})]}),Object(M.jsx)(d.i,{color:"danger",outline:!0,size:"sm",className:"btn-icon",onClick:function(){return function(e){var t=R.filter((function(t){return t.name!==e.name}));A(Object(u.a)(t))}(e)},children:Object(M.jsx)(f.a,{size:14})})]},"".concat(e.name,"-").concat(t));var c}));return Object(M.jsx)(i.Fragment,{children:Object(M.jsx)(C.a,{blocking:o,loader:Object(M.jsx)(k,{}),children:Object(M.jsx)(d.l,{children:Object(M.jsxs)(d.m,{children:[Object(M.jsxs)("fieldset",{className:"form-label-group mb-50",children:[Object(M.jsx)(d.N,{className:"form-check-label",for:"add-comment-",children:"Add Comment"}),Object(M.jsx)(d.K,{id:"add-comment-",type:"textarea",rows:"3",placeholder:"Add Comment",value:Q,onInput:function(e){return X(e.target.value)}})]}),Object(M.jsx)("input",Object(b.a)({},de())),Object(M.jsx)(d.i,Object(b.a)(Object(b.a)({type:"button",color:"primary",size:"sm"},je({className:"dropzone"})),{},{children:Object(M.jsx)(p.a,{size:14,className:""})})),Object(M.jsx)(d.i,{color:"primary",className:"ms-1",size:"sm",onClick:function(){return ue()},children:"Post Comment"}),ne>0&&Object(M.jsx)(d.hb,{className:"mt-md-50",color:ne<100?"primary":"success",value:ne}),Object(M.jsx)(d.O,{children:me}),_.map((function(e,t){return Object(M.jsxs)("div",{className:"d-flex align-items-start my-1",children:[(a=e,Object(M.jsx)(v.a,{initials:!0,className:"me-1",color:"light-primary",content:a.username.charAt(0)||"T"})),Object(M.jsxs)("div",{className:"profile-user-info w-100",children:[Object(M.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:Object(M.jsx)("h6",{className:"mb-0",children:e.username})}),!e.editFlag&&Object(M.jsxs)(d.ib,{className:"mt-1",children:[Object(M.jsxs)("div",{className:"white-space-wrap",children:[e.comment.replace(/(\\n)/g,"\n"),Object(M.jsx)(d.ib,{children:null!==e.files[0]&&e.files.map((function(e,t){return Object(M.jsx)(d.B,{md:"3",className:"file-details d-flex align-items-center cursor-pointer",children:Object(M.jsxs)(d.P,{className:"col-12 d-flex mb-1 align-items-center",children:[Object(M.jsx)("div",{className:"file-preview me-1",children:Object(M.jsx)("img",{width:25,height:25,src:"https://drive.google.com/thumbnail?id=".concat(e.driveid),alt:"image"})}),Object(M.jsx)("a",{target:"_blank",className:"file-name mb- text-overflow-ellipsis",href:"http://docs.google.com/fileview?id=".concat(e.driveid,"&hl=en&pid=explorer&efh=false&a=v&chrome=false&embedded=true"),children:e.originalfilename.split(".")[0].length>15?"".concat(e.originalfilename.split(".")[0].substr(0,15),".").concat(e.extension):e.originalfilename})]})},t)}))})]}),Object(M.jsxs)("div",{className:"d-flex mt-1",children:[Object(M.jsx)("span",{className:"text-sm",children:(c=e.createdon,z()(c,"x").format("YYYY, MMM-D h:m A"))}),"\xa0\xa0",!e.editFlag&&Object(M.jsxs)(d.B,{className:"d-flex",md:1,children:[Object(M.jsx)("span",{className:"text-primary cursor-pointer",onClick:function(){return re(t)},children:".Edit"})," \xa0\xa0",Object(M.jsx)("span",{className:"text-danger cursor-pointer",onClick:function(){return function(e){return D.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(n.a)(Object(s.a)().mark((function t(c){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.value){t.next=4;break}return t.next=3,N(Object(g.c)(e));case 3:D.fire({icon:"success",title:"Deleted!",text:"Comments has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}(e.id)},children:".Delete"})]})]})]}),e.editFlag&&Object(M.jsxs)(d.ib,{className:"mt-2",children:[Object(M.jsx)(d.K,{type:"textarea",roes:"3",value:ee.replace(/(\\n)/g,"\n"),onInput:function(e){te(e.target.value)}}),Object(M.jsxs)(d.B,{className:"d-flex justify-content-end mt-1",children:[Object(M.jsx)(d.i,{size:"sm",color:"warning",outline:!0,onClick:function(){return re(-1)},children:"Cancel"}),Object(M.jsx)(d.i,{size:"sm",color:"primary",className:"ms-1",onClick:function(){return be(e)},children:"Save"})]})]})]})]},t);var c,a}))]})})})})},E=c(823),P=c(729),R=c(833),A=Object(S.d)(),L=Object(S.b)(),H=function(e){var t=e.tabId,c=Object(i.useState)(!1),l=Object(a.a)(c,2),b=l[0],u=l[1],m=function(){return Object(M.jsx)(i.Fragment,{children:Object(M.jsx)(T.a,{})})},O=Object(r.g)().id,h=Object(j.b)(),f=Object(i.useState)([]),p=Object(a.a)(f,2),v=p[0],g=p[1],k=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,h(Object(o.d)({taskId:O}));case 3:return t=e.sent,e.next=6,g(t.payload);case 6:u(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N={position:"absolute",left:"-49px",top:"-8px"};Object(i.useEffect)((function(){"checklist"===t&&k()}),[t]);var y=function(e,t){u(!0),x.a.post("/taskworkflows/updatestatus",{status:e,id:t,updatedBy:A}).then((function(){k()})).catch((function(e){console.log(e),u(!1)}))},w=function(e){e&&k()},S=function(e){var t=e.taskId,c=e.workflowId,s=e.handlchecklist,n=Object(i.useRef)(null),r=Object(i.useState)(""),l=Object(a.a)(r,2),o=l[0],j=l[1];return Object(M.jsxs)(d.ib,{className:"px-1",children:[Object(M.jsx)("div",{contentEditable:!0,className:"border border-1 p-50 rounded-2",ref:n,onInput:function(e){var t;t=e.currentTarget.textContent,j(t)}}),Object(M.jsx)(d.B,{className:"mt-md-50 px-0",children:Object(M.jsx)(d.i,{size:"sm",color:"primary",onClick:function(){!function(){if(""===o)return!1;var e={workflowId:c,taskId:t,description:o,createdBy:A,organizationId:L};u(!0),x.a.post("/taskcomments/add",e).then((function(){s(!0),null===n.current&&(n.current.innerText="")})).catch((function(e){console.log(e),u(!1)}))}()},children:"Submit"})})]})};return Object(M.jsxs)(d.l,{children:[Object(M.jsx)(d.p,{children:Object(M.jsx)(d.v,{tag:"h4",children:"CheckList Trail"})}),Object(M.jsx)(C.a,{blocking:b,loader:Object(M.jsx)(m,{}),children:Object(M.jsx)(d.m,{className:"pt-1",children:Object(M.jsx)("ul",{className:"timeline",children:v&&v.map((function(e,t){return Object(M.jsxs)("li",{className:"timeline-item",children:[void 0!==e.progressstatus&&Object(M.jsxs)(d.wb,{style:N,children:[Object(M.jsx)(d.G,{tag:"div",className:"btn btn-sm",children:Object(M.jsx)(E.a,{size:14,className:"cursor-pointer"})}),Object(M.jsxs)(d.F,{children:["1"===e.progressstatus&&Object(M.jsxs)(d.E,{onClick:function(){return y(3,e.id)},children:[Object(M.jsx)(P.a,{size:14})," Mark as Complete"]}),"3"===e.progressstatus&&Object(M.jsxs)(d.E,{onClick:function(){return y(1,e.id)},children:[Object(M.jsx)(R.a,{size:14})," Reopen"]})]})]}),Object(M.jsx)("span",{className:"timeline-point timeline-point-indicator ".concat("3"===e.progressstatus||void 0===e.progressstatus?"timeline-point-success":"")}),Object(M.jsxs)("div",{className:"timeline-event",children:[Object(M.jsx)("div",{className:"d-flex justify-content-between flex-sm-row flex-column",children:Object(M.jsx)("h6",{children:e.title})}),""!==e.comments&&Object(M.jsxs)("div",{className:"p-md-50 rounded-2 bg-light-".concat("3"===e.progressstatus||void 0===e.progressstatus?"success":"primary"),children:[void 0===e.progressstatus&&Object(M.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(M.jsx)("h6",{children:e.name}),Object(M.jsx)("h6",{children:(c=e.createdon,13===c.length?z()(c,"x").format("MMM DD, YYYY"):z.a.unix(c).format("MMM DD, YYYY"))})]}),Object(M.jsx)("p",{className:"white-space-wrap",dangerouslySetInnerHTML:{__html:e.comments.replace(/(\\n)/g,"")}})]}),"1"===e.progressstatus&&Object(M.jsx)(S,{taskId:O,workflowId:e.id,handlchecklist:w}),void 0!==e.progressstatus&&void 0!==e.taskcomments&&e.taskcomments.map((function(e){return function(e){if(null!==e)return Object(M.jsxs)("div",{className:"p-md-50 rounded-2 bg-light-primary mt-md-50",children:[Object(M.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(M.jsx)("h6",{children:e.name}),Object(M.jsx)("h6",{children:(t=e.createdon,z()(t,"x").format("MMM DD, YYYY"))})]}),Object(M.jsx)("p",{className:"white-space-wrap",dangerouslySetInnerHTML:{__html:e.comments.replace(/(\\n)/g,"")}})]},e.id);var t}(e)}))]})]},t);var c}))})})})]})},_=c(757),K=c(830),U=c(546),q=c.n(U),J=(c(531),Object(S.d)()),W=[{code:"5",name:"Pending",color:"light-danger"},{code:"6",name:"Partially Paid",color:"light-warning"},{code:"7",name:"Paid",color:"light-success"},{code:"11",name:"Sent",color:"light-secondary"}],V=function(e){return W.find((function(t){return parseInt(t.code)===parseInt(e)}))},G=function(e){return 13===e.length?z()(e,"x").format("MMM DD, YYYY h:m a"):z.a.unix(e).format("MMM DD, YYYY h:m a")},Q=function(e){return 13===e.length?z()(e,"x").format("MMM DD, YYYY"):z.a.unix(e).format("MMM DD, YYYY")},X=[{name:"Start Time",cell:function(e){return G(e.starttime)}},{name:"End Time",cell:function(e){return null!==e.endtime?G(e.endtime):"-"}},{name:"Total Hours",cell:function(e){return function(e){var t,c,s,n=e.totalhours;return null===e.totalhoursmin?(t=60*parseFloat(n)*60*1e3,t-=60*(c=Math.floor(t/3600))*60,t-=60*(s=Math.floor(t/60))):(c=(t=e.totalhours).split(".")[0],s=t.split(".")[1]),c<10&&(c="0".concat(c)),s<10&&(s="0".concat(s)),"".concat(isNaN(c)?c:0," Hrs: ").concat(isNaN(s)?s:0," Mins")}(e||"0")}},{name:"Amount",selector:function(e){return e.amount||"0"}}],Z=function(e){var t=e.tabId,c=e.selectedTask,b=Object(j.b)(),u=Object(r.g)().id,m=Object(i.useState)([]),O=Object(a.a)(m,2),f=O[0],p=O[1],v=Object(i.useState)(!1),g=Object(a.a)(v,2),k=g[0],N=g[1],y=Object(i.useState)([]),w=Object(a.a)(y,2),S=w[0],I=w[1],z=Object(i.useState)(null),C=Object(a.a)(z,2),T=C[0],Y=C[1],B=Object(i.useState)(null),D=Object(a.a)(B,2),F=D[0],E=D[1],P=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(Object(o.n)({taskId:u}));case 2:t=e.sent,p(t.payload);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){x.a.post("/taskinvoices/get",{id:e}).then((function(e){void 0!==e.data.taskinvoices&&Y(e.data.taskinvoices)})).catch((function(e){console.log(e)}))};return Object(i.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"timesheets"===t&&(P(),null!==c.invoiceid&&R(c.invoiceid));case 1:case"end":return e.stop()}}),e)}))),[t]),Object(M.jsxs)(d.l,{children:[Object(M.jsx)(d.p,{tag:"h4",children:"Time Sheet List"}),Object(M.jsx)("div",{className:"react-dataTable user-view-account-projects",children:Object(M.jsx)(q.a,{noHeader:!0,responsive:!0,columns:X,data:f,className:"react-dataTable",sortIcon:Object(M.jsx)(_.a,{size:10})})}),Object(M.jsxs)(d.ib,{className:"d-flex justify-content-between mt-1",children:[Object(M.jsx)("h5",{children:"Invoice Details"}),null===T&&Object(M.jsxs)(d.B,{className:"d-flex justify-content-between",children:[Object(M.jsx)("div",{}),Object(M.jsxs)(d.i,{color:"primary",size:"sm",onClick:function(){x.a.post("/taskinvoices/invoicelist",{clientid:c.clientid,serviceid:c.serviceid}).then((function(e){N(!0),I(e.data.taskinvoices)})).catch((function(e){console.log(e)}))},children:[" ",Object(M.jsx)(K.a,{size:12})," Link Invoice"]})]})]}),Object(M.jsx)(d.ib,{children:null!==T&&Object(M.jsxs)(d.mb,{children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Invoice No"}),Object(M.jsx)("td",{children:"Invoice Date"}),Object(M.jsx)("td",{children:"Status"}),Object(M.jsx)("td",{children:"Amount"})]})}),Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:Object(M.jsx)(l.b,{to:"/invoices/view/".concat(T.id),children:Object(M.jsx)("span",{children:T.uniqueno})})}),Object(M.jsx)("td",{children:Q(T.invoicedate)}),Object(M.jsx)("td",{children:Object(M.jsxs)(d.f,{color:V(T.paymentstatus).color,children:[" ",V(T.paymentstatus).name]})}),Object(M.jsx)("td",{children:T.totalamount})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{colSpan:2}),Object(M.jsx)("td",{children:"Profit"}),Object(M.jsx)("td",{children:c.profit})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{colSpan:2}),Object(M.jsx)("td",{children:"Percentage"}),Object(M.jsx)("td",{})]})]})]})}),Object(M.jsx)(d.Q,{fullscreen:!0,isOpen:k,toggle:function(){return N(!k)},className:"modal-dialog-centered",children:Object(M.jsxs)(d.R,{children:[Object(M.jsxs)(d.ib,{className:"d-flex justify-content-between",children:[Object(M.jsx)("h6",{children:"Leave Details"}),Object(M.jsxs)(d.B,{className:"d-flex justify-content-between",children:[Object(M.jsx)("div",{}),Object(M.jsxs)("div",{children:[Object(M.jsx)(d.i,{color:"warning",size:"sm",onClick:function(){N(!1)},children:" Cancel"}),Object(M.jsx)(d.i,{color:"primary",size:"sm",className:"ms-1",tag:l.b,to:"/invoice/add",children:" Add Invoice"}),Object(M.jsx)(d.i,{color:"success",size:"sm",className:"ms-1",onClick:function(){x.a.post("/tasks/linkinvoice",{id:u,invoiceId:F,updatedBy:J}).then((function(){N(!1),h.b.success("Invoice Linked Successfully",{position:"bottom-right"}),R(F)})).catch((function(e){console.log(e)}))},children:" Link Invoice"})]})]})]}),Object(M.jsxs)(d.mb,{children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Select"}),Object(M.jsx)("td",{children:"Invoice No"}),Object(M.jsx)("td",{children:"Invoice Date"}),Object(M.jsx)("td",{children:"Customer"}),Object(M.jsx)("td",{children:"Invoice Items"}),Object(M.jsx)("td",{children:"Amount"}),Object(M.jsx)("td",{children:"Balance"}),Object(M.jsx)("td",{children:"Status"})]})}),Object(M.jsx)("tbody",{children:S.map((function(e,t){return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:Object(M.jsx)(d.K,{type:"radio",value:e.id,onChange:function(e){return E(e.target.value)}})}),Object(M.jsx)("td",{children:e.uniqueno}),Object(M.jsx)("td",{children:Q(e.invoicedate)}),Object(M.jsxs)("td",{children:[Object(M.jsx)("span",{children:e.contactname}),Object(M.jsx)("p",{children:e.contactemail})]}),Object(M.jsx)("td",{children:e.taskinvoiceitemsservicename}),Object(M.jsx)("td",{children:e.totalamount}),Object(M.jsx)("td",{children:e.dueamount}),Object(M.jsx)("td",{children:Object(M.jsxs)(d.f,{color:V(e.paymentstatus).color,children:[" ",V(e.paymentstatus).name]})})]},t)}))})]})]})})]})},$=c(175),ee=function(e){var t=e.tabId,c=e.selectedTask,r=Object(j.b)(),l=Object(i.useState)([]),o=Object(a.a)(l,2),b=o[0],u=o[1],m=Object(j.c)((function(e){return e.templates}));return Object(i.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("taskservicetemplate"!==t){e.next=3;break}return e.next=3,r(Object($.d)(c.serviceid));case 3:case"end":return e.stop()}}),e)}))),[t]),Object(i.useEffect)((function(){u(m.data||[])}),[m.data]),Object(M.jsx)(i.Fragment,{children:Object(M.jsx)(d.l,{children:Object(M.jsx)(d.m,{children:b.map((function(e,t){return Object(M.jsxs)("div",{className:"d-flex align-items-start my-1",children:[(s=e,Object(M.jsx)(v.a,{initials:!0,className:"me-1",color:"light-primary",content:s.username.charAt(0)||"T"})),Object(M.jsxs)("div",{className:"profile-user-info w-100",children:[Object(M.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:Object(M.jsx)("h6",{className:"mb-0",children:e.username})}),Object(M.jsxs)(d.ib,{className:"mt-1",children:[Object(M.jsx)("div",{className:"white-space-wrap",children:e.description.replace(/(\\n)/g,"\n")}),Object(M.jsx)("div",{className:"d-flex mt-1",children:Object(M.jsx)("span",{className:"text-sm",children:(c=e.createdon,z()(c,"x").format("YYYY, MMM-D h:m A"))})}),Object(M.jsx)(d.ib,{children:null!==e.files[0]&&e.files.map((function(e,t){return Object(M.jsx)(d.B,{md:"3",className:"file-details d-flex align-items-center cursor-pointer",children:Object(M.jsxs)(d.P,{className:"col-12 d-flex mb-1 align-items-center",children:[Object(M.jsx)("div",{className:"file-preview me-1",children:Object(M.jsx)("img",{width:25,height:25,src:"https://drive.google.com/thumbnail?id=".concat(e.driveid),alt:"image"})}),Object(M.jsx)("a",{target:"_blank",className:"file-name mb- text-overflow-ellipsis",href:"http://docs.google.com/fileview?id=".concat(e.driveid,"&hl=en&pid=explorer&efh=false&a=v&chrome=false&embedded=true"),children:e.originalfilename.split(".")[0].length>15?"".concat(e.originalfilename.split(".")[0].substr(0,15),".").concat(e.extension):e.originalfilename})]})},t)}))})]})]})]},t);var c,s}))})})})},te=c(763),ce=c(783),se=c(726),ne=c(753),ae=c(817),ie=c(790),re=c(748),le=(c(534),Object(S.d)()),oe=Object(S.a)(),je=Object(S.b)(),de=["","light-success","light-warning","light-danger"],be=["","Low","Medium","High"],ue=function(e){var t=e.selectedTask,c=Object(i.useState)(!1),k=Object(a.a)(c,2),N=k[0],y=k[1],w=function(){return Object(M.jsx)(i.Fragment,{children:Object(M.jsx)(T.a,{})})},S=Object(r.g)().id,I=Object(j.b)(),Y=Object(i.useState)("tasknotes"),B=Object(a.a)(Y,2),D=B[0],P=B[1],A=Object(i.useState)(!1),L=Object(a.a)(A,2),_=L[0],K=L[1],U=Object(i.useState)(!1),q=Object(a.a)(U,2),J=q[0],W=q[1],V=Object(i.useState)(0),G=Object(a.a)(V,2),Q=G[0],X=G[1],$=Object(i.useState)(""),ue=Object(a.a)($,2),me=ue[0],Oe=ue[1],he=Object(i.useState)(""),xe=Object(a.a)(he,2),fe=xe[0],pe=xe[1],ve=Object(i.useState)(""),ge=Object(a.a)(ve,2),ke=ge[0],Ne=ge[1],ye=Object(i.useState)(!1),we=Object(a.a)(ye,2),Se=we[0],Ie=we[1],ze=Object(i.useState)(!1),Ce=Object(a.a)(ze,2),Te=Ce[0],Me=Ce[1],Ye=Object(i.useState)([]),Be=Object(a.a)(Ye,2),De=Be[0],Fe=Be[1],Ee=Object(i.useState)(0),Pe=Object(a.a)(Ee,2),Re=Pe[0],Ae=Pe[1],Le=Object(i.useState)([]),He=Object(a.a)(Le,2),_e=He[0],Ke=He[1],Ue=Object(i.useState)([]),qe=Object(a.a)(Ue,2),Je=qe[0],We=qe[1],Ve=Object(j.c)((function(e){return e.task})),Ge=function(e){D!==e&&P(e)},Qe=function(e){return 13===e.length?z()(e,"x").format("MMM DD, YYYY"):z.a.unix(e).format("MMM DD, YYYY")},Xe=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),t={organizationId:je,createdBy:le,updatedBy:le,comment:ke,attachmentIds:De,taskId:S},e.next=4,I(Object(g.a)(t));case 4:h.b.success("Task Status Changed Successfully",{position:"bottom-right"}),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var c,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={createdBy:le,taskId:S,userId:le,hourlyRate:Q,organizationId:je,startTime:z()().unix(),existStatus:t.taskstatus},e.next=3,I(Object(o.m)(c));case 3:n=e.sent,localStorage.setItem("currentTask",JSON.stringify(n.payload)),W(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$e=function(){var e=Object(n.a)(Object(s.a)().mark((function e(){var t,c,n,a,i,r,l,j;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=JSON.parse(localStorage.getItem("currentTask")||null))){e.next=15;break}return c=z()(),n=z.a.unix(t.starttime).toDate(),a=z()().unix(),i=z.a.duration(c.diff(n)),r=i.asHours(),l=Q*r,j={updatedBy:le,id:t.id,taskId:S,totalhours:r,amount:l,hourlyRate:Q,userId:le,endTime:a},e.next=11,I(Object(o.h)(j));case 11:return e.next=13,localStorage.removeItem("currentTask");case 13:return e.next=15,W(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),et=function(){var e=Object(n.a)(Object(s.a)().mark((function e(c){var a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={updatedBy:le,taskId:S,status:c,existStatus:t.taskstatus},y(!0),x.a.post("/tasks/updatestatus",a).then(Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.b.success("Task Status Updated SuccesFully",{position:"bottom-right"}),e.next=3,I(Object(o.r)(a));case 3:if(y(!1),!(""!==ke||De.length>0)){e.next=7;break}return e.next=7,Xe();case 7:case"end":return e.stop()}}),e)})))).catch((function(){h.b.error("Please Finish All Checklist before Sent to Review or Complete",{position:"bottom-right"}),y(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){null!==t&&(x.a.post("/organizationusers/getjobinfo",{id:le}).then((function(e){X(e.data.organizationusers.hourlyrate||0)})).catch((function(e){console.log(e)})),x.a.post("/taskconversations/description",{taskId:S}).then((function(e){Oe(void 0===e.data.taskconversation?"":e.data.taskconversation.comment)})).catch((function(e){console.log(e)})),function(){var e=t.reviewer.findIndex((function(e){return e.id===le}));Me(e>-1||"1"===oe.organizationusersusertypeid||0===t.reviewer.length)}(),function(){var e=t.assignee.findIndex((function(e){return e.id===le}));Ie(e>-1||"1"===oe.organizationusersusertypeid||0===t.reviewer.length)}(),6===parseInt(t.taskstatus)&&pe("3"))}),[t]),Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("currentTask"));null!==Ve.selectedTaskTimer?W(!0):W(null!==e)}),[Ve.selectedTaskTimer]);var tt={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){Ae(Math.round(100*e.loaded/e.total))}},ct=Object(m.a)({multiple:!0,onDrop:function(e,t){t.length?h.b.error("You can only upload image Files!."):(We(e),Ke([].concat(Object(u.a)(_e),Object(u.a)(e))))}}),st=ct.getRootProps,nt=ct.getInputProps;Object(i.useEffect)((function(){Je.length>0&&function(){y(!0);var e=new FormData;Je.forEach((function(t,c){e.append("files[".concat(c,"]"),t)})),e.append("id",S),e.append("organizationId",je),e.append("createdBy",le),x.a.post("/google/taskfolders",e,tt).then((function(e){Fe([].concat(Object(u.a)(De),Object(u.a)(e.data.attachment_ids))),We([]),y(!1)})).catch((function(e){console.log(e),y(!1)}))}()}),[Je]);var at=Je.map((function(e,t){return Object(M.jsxs)(d.P,{className:"d-flex align-items-center justify-content-between",children:[Object(M.jsxs)("div",{className:"file-details d-flex align-items-center",children:[Object(M.jsx)("div",{className:"file-preview me-1",children:Object(M.jsx)(v.a,{})}),Object(M.jsxs)("div",{children:[Object(M.jsx)("p",{className:"file-name mb-0",children:e.name}),Object(M.jsx)("p",{className:"file-size mb-0",children:(c=e.size,Math.round(c/100)/10>1e3?"".concat((Math.round(c/100)/1e4).toFixed(1)," mb"):"".concat((Math.round(c/100)/10).toFixed(1)," kb"))})]})]}),Object(M.jsx)(d.i,{color:"danger",outline:!0,size:"sm",className:"btn-icon",onClick:function(){return function(e){var t=Je.filter((function(t){return t.name!==e.name}));We(Object(u.a)(t))}(e)},children:Object(M.jsx)(f.a,{size:14})})]},"".concat(e.name,"-").concat(t));var c})),it=function(){return Te&&"6"===t.taskstatus},rt=function(){return Se&&("1"===t.taskstatus||"2"===t.taskstatus||"7"===t.taskstatus)};return Object(M.jsx)(i.Fragment,{children:Object(M.jsx)(C.a,{blocking:N,loader:Object(M.jsx)(w,{}),children:Object(M.jsx)(d.l,{children:Object(M.jsxs)(d.m,{children:[Object(M.jsxs)(d.mb,{responsive:!0,bordered:!0,children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsxs)("th",{colSpan:"3",children:[Object(M.jsxs)(d.B,{tag:l.b,to:"/clients/view/".concat(t.clientid),children:[t.clientname," - "]}),Object(M.jsx)(d.B,{tag:l.b,to:"/services/view/".concat(t.serviceid),children:t.servicename})]}),Object(M.jsx)("th",{children:Object(M.jsxs)(d.ib,{className:"justify-content-end",children:[Object(M.jsxs)(d.B,{md:4,children:[!t.timesheetFlag&&Object(M.jsxs)(d.i,{size:"sm",disabled:J,outline:!0,color:"success",onClick:function(){Ze()},children:[Object(M.jsx)(te.a,{size:14})," Start Timer"]}),t.timesheetFlag&&Object(M.jsxs)(d.i,{size:"sm",outline:!0,color:"danger",onClick:function(){$e()},children:[Object(M.jsx)(te.a,{size:14})," Stop Timer"]})]}),Object(M.jsx)(d.B,{className:"p-0",md:5,children:!t.timesheetFlag&&Object(M.jsx)(d.B,{children:Object(M.jsxs)(i.Fragment,{children:[Object(M.jsxs)(d.B,{children:[rt()&&Object(M.jsx)(d.i.Ripple,{size:"sm",outline:!0,color:"primary",id:"taskcompetedpopover",children:" Send for Review"}),rt()&&document.getElementById("taskcompetedpopover")&&Object(M.jsxs)(d.eb,{placement:"bottom",target:"taskcompetedpopover",isOpen:_,toggle:function(){return K(!_)},children:[Object(M.jsx)(d.gb,{children:Object(M.jsxs)(d.ib,{className:"d-flex justify-content-between",children:[Object(M.jsx)(d.B,{children:"Task Send for Review"}),Object(M.jsxs)(d.B,{className:"d-flex justify-content-between",children:[Object(M.jsx)("div",{}),Object(M.jsx)(f.a,{className:"cursor-pointer",size:14,onClick:function(){return K(!_)}})]})]})}),Object(M.jsxs)(d.fb,{children:[Object(M.jsx)(d.K,{type:"textarea",className:"mb-1",cols:"100",rows:"4",onInput:function(e){return Ne(e.target.value)}}),Object(M.jsx)("p",{className:"text-danger",children:"Please Write your comment about changes."}),Object(M.jsx)("input",Object(b.a)({},nt())),Object(M.jsx)(d.i,Object(b.a)(Object(b.a)({type:"button",color:"primary",size:"sm"},st({className:"dropzone me-1"})),{},{children:Object(M.jsx)(p.a,{size:12,className:""})})),Object(M.jsx)(d.i,{size:"sm",color:"primary",onClick:function(){return et("6")},children:"Send for Review"}),Re>0&&Object(M.jsx)(d.hb,{className:"mt-md-50",color:Re<100?"primary":"success",value:Re}),Object(M.jsx)(d.O,{children:at})]})]})]}),Object(M.jsxs)(d.B,{children:[it()&&Object(M.jsx)(d.i.Ripple,{size:"sm",outline:!0,color:"success",id:"taskcompletedpopover2",children:" Mark as Complete"}),it()&&document.getElementById("taskcompletedpopover2")&&Object(M.jsxs)(d.eb,{placement:"bottom",target:"taskcompletedpopover2",isOpen:_,toggle:function(){return K(!_)},children:[Object(M.jsx)(d.gb,{children:Object(M.jsxs)(d.ib,{className:"d-flex justify-content-between",children:[Object(M.jsx)(d.B,{children:"Task Submit"}),Object(M.jsxs)(d.B,{className:"d-flex justify-content-between",children:[Object(M.jsx)("div",{}),Object(M.jsx)(f.a,{className:"cursor-pointer",size:14,onClick:function(){return K(!_)}})]})]})}),Object(M.jsxs)(d.fb,{children:[Object(M.jsx)(d.K,{type:"textarea",className:"mb-1",cols:"100",rows:"4",onInput:function(e){return Ne(e.target.value)}}),Object(M.jsx)("p",{className:"text-danger",children:"Please Select Any one option."}),Object(M.jsxs)("div",{children:[Object(M.jsxs)(d.B,{children:[Object(M.jsx)(d.K,{type:"radio",name:"sts",value:3,defaultChecked:it(),onChange:function(){return pe(3)}})," Approved"]}),Object(M.jsx)("p",{className:"text-sm mt-md-50",children:"Submit feedback and Mark as Complete."})]}),Object(M.jsxs)("div",{children:[Object(M.jsxs)(d.B,{children:[Object(M.jsx)(d.K,{type:"radio",name:"sts",value:7,onChange:function(){return pe(7)}})," Request changes"]}),Object(M.jsx)("p",{className:"text-sm mt-md-50",children:"Submit feedback that must be addressed before Approval."})]}),Object(M.jsx)("input",Object(b.a)({},nt())),Object(M.jsx)(d.i,Object(b.a)(Object(b.a)({type:"button",color:"primary",size:"sm"},st({className:"dropzone me-1"})),{},{children:Object(M.jsx)(p.a,{size:12,className:""})})),Object(M.jsx)(d.i,{size:"sm",color:"success",onClick:function(){return et(fe)},children:"Submit"}),Re>0&&Object(M.jsx)(d.hb,{className:"mt-md-50",color:Re<100?"primary":"success",value:Re}),Object(M.jsx)(d.O,{children:at})]})]})]})]})})}),Object(M.jsxs)(d.B,{md:3,className:"d-flex",children:[Object(M.jsx)(O.b,{I:"write",a:"task",children:Object(M.jsxs)(d.B,{tag:l.b,to:"/task/edit/".concat(S),children:[Object(M.jsx)(d.yb,{placement:"top",target:"edittooltip",children:"Edit"}),Object(M.jsx)(ce.a,{size:16,className:"ms-1 cursor-pointer",id:"edittooltip"})]})}),("3"===t.taskstatus||"4"===t.taskstatus||"5"===t.taskstatus)&&Object(M.jsxs)(d.B,{children:[Object(M.jsx)(d.yb,{placement:"top",target:"reopen",children:"Reopen"}),Object(M.jsx)(R.a,{size:16,id:"reopen",className:"text-primary ms-1 cursor-pointer",onClick:function(){return et(2)}})]}),Object(M.jsx)(d.B,{children:Object(M.jsxs)(d.wb,{children:[Object(M.jsx)(d.G,{tag:"div",className:"btn btn-sm p-0 ps-75",children:Object(M.jsx)(E.a,{size:16,className:"cursor-pointer text-primary"})}),Object(M.jsxs)(d.F,{children:["4"!==t.taskstatus&&Object(M.jsx)(d.E,{onClick:function(){return et(4)},children:Object(M.jsx)(d.N,{children:"OnHold"})}),"5"!==t.taskstatus&&Object(M.jsx)(d.E,{onClick:function(){return et(5)},children:Object(M.jsx)(d.N,{children:"Cancel"})})]})]})}),Object(M.jsx)(d.B,{tag:l.b,to:"/task/list",children:Object(M.jsx)(f.a,{size:16,className:"ms-1 cursor-pointer",id:"deletetooltip"})})]})]})})]})}),Object(M.jsxs)("tbody",{children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Task ID"}),Object(M.jsx)("td",{children:t.uniqueidentity}),Object(M.jsx)("td",{children:"Priority"}),Object(M.jsxs)("td",{children:[" ",Object(M.jsx)(d.f,{className:"text-capitalize",color:de[t.priority],children:be[t.priority]})]})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Assignee"}),Object(M.jsx)("td",{children:t.userlists.map((function(e,t){return"1"===e.type&&Object(M.jsxs)(d.f,{color:"light-primary",pill:!0,href:"#",children:[Object(M.jsx)(se.a,{size:14}),Object(M.jsx)("span",{className:"align-middle ms-50",children:e.name})]},t)}))}),Object(M.jsx)("td",{children:"Status"}),Object(M.jsxs)("td",{children:[" ",Object(M.jsx)(d.f,{className:"text-capitalize",color:["light-warning","light-success","light-secondary"][t.taskstatus],children:["","To Do","In progress","Completed","On Hold","Cancelled","Sent to Review","Request Changes"][t.taskstatus]})]})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Reviewer"}),Object(M.jsx)("td",{children:t.userlists.map((function(e,t){return"2"===e.type&&Object(M.jsxs)(d.f,{color:"light-primary",pill:!0,href:"#",children:[Object(M.jsx)(se.a,{size:14}),Object(M.jsx)("span",{className:"align-middle ms-50",children:e.name})]},t)}))}),Object(M.jsx)("td",{colSpan:"1",rowSpan:"4",children:"Description"}),Object(M.jsx)("td",{rowSpan:"4",width:500,children:Object(M.jsx)("div",{className:"white-space-wrap",children:void 0!==me?me.replace(/(\\n)/g,"\n"):""})})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Start Date"}),Object(M.jsx)("td",{children:Object(M.jsxs)("div",{className:"d-flex justify-content-between",children:[Qe(t.startdate),Object(M.jsx)(ne.a,{size:16})]})})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"End Date"}),Object(M.jsx)("td",{children:Object(M.jsxs)("div",{className:"d-flex justify-content-between",children:[Qe(t.enddate),Object(M.jsx)(ne.a,{size:16})]})})]}),Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:"Invoice Details"}),Object(M.jsx)("td",{children:!t.invoiceflag&&Object(M.jsx)(d.i,{size:"sm",color:"primary",children:"Link Invoice"})})]})]})]}),Object(M.jsx)(d.ib,{className:"mt-1 ps-1",children:Object(M.jsxs)(i.Fragment,{children:[Object(M.jsxs)(d.U,{pills:!0,className:"mb-2",children:[Object(M.jsx)(d.V,{children:Object(M.jsxs)(d.W,{active:"tasknotes"===D,onClick:function(){return Ge("tasknotes")},children:[Object(M.jsx)(ae.a,{className:"font-medium-3 me-50"}),Object(M.jsx)("span",{className:"fw-bold",children:"Comments"})]})}),Object(M.jsx)(d.V,{children:Object(M.jsxs)(d.W,{active:"taskservicetemplate"===D,onClick:function(){return Ge("taskservicetemplate")},children:[Object(M.jsx)(ie.a,{className:"font-medium-3 me-50"}),Object(M.jsx)("span",{className:"fw-bold",children:"Templates"})]})}),Object(M.jsx)(d.V,{children:Object(M.jsxs)(d.W,{active:"checklist"===D,onClick:function(){return Ge("checklist")},children:[Object(M.jsx)(re.a,{className:"font-medium-3 me-50"}),Object(M.jsx)("span",{className:"fw-bold",children:"Checklist Trail"})]})}),Object(M.jsx)(d.V,{children:Object(M.jsxs)(d.W,{active:"timesheets"===D,onClick:function(){return Ge("timesheets")},children:[Object(M.jsx)(te.a,{className:"font-medium-3 me-50"}),Object(M.jsx)("span",{className:"fw-bold",children:"Timesheet"})]})})]}),Object(M.jsxs)(d.kb,{activeTab:D,children:[Object(M.jsx)(d.lb,{tabId:"tasknotes",children:Object(M.jsx)(F,{tabId:D})}),Object(M.jsx)(d.lb,{tabId:"taskservicetemplate",children:Object(M.jsx)(ee,{tabId:D,selectedTask:t})}),Object(M.jsx)(d.lb,{tabId:"checklist",children:Object(M.jsx)(H,{tabId:D})}),Object(M.jsx)(d.lb,{tabId:"timesheets",children:Object(M.jsx)(Z,{tabId:D,selectedTask:t})})]})]})})]})})})})};c(543),t.default=function(){var e=Object(j.c)((function(e){return e.task})),t=Object(j.b)(),c=Object(i.useState)(!1),b=Object(a.a)(c,2),u=b[0],m=b[1],O=function(){return Object(M.jsx)(i.Fragment,{children:Object(M.jsx)(T.a,{})})},h=Object(r.g)().id;return Object(i.useEffect)(Object(n.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===h){e.next=4;break}return m(!0),e.next=4,t(Object(o.l)(h));case 4:m(!1);case 5:case"end":return e.stop()}}),e)}))),[t,h]),null!==e.selectedTask&&void 0!==e.selectedTask?Object(M.jsx)(C.a,{blocking:u,loader:Object(M.jsx)(O,{}),children:Object(M.jsx)("div",{className:"app-user-view",children:Object(M.jsx)(d.ib,{children:Object(M.jsx)(d.B,{xl:"12",lg:"12",children:Object(M.jsx)(ue,{selectedTask:e.selectedTask})})})})}):Object(M.jsx)(C.a,{blocking:u,loader:Object(M.jsx)(O,{}),children:Object(M.jsxs)(d.e,{color:"danger",children:[Object(M.jsx)("h4",{className:"alert-heading",children:"Task not found"}),Object(M.jsxs)("div",{className:"alert-body",children:["Task with id: ",h," doesn't exist. Check list of all Tasks: ",Object(M.jsx)(l.b,{to:"/task/list",children:"Tasks List"})]})]})})}},525:function(e,t,c){"use strict";var s=c(14),n=c(34),a=c(2),i=c(7),r=c.n(i),l=c(96),o=(c(528),c(16)),j=function(e){var t,c=e.children,i=e.blocking,l=e.loader,j=e.className,d=e.tag,b=e.overlayColor,u=d;return Object(o.jsxs)(u,{className:r()("ui-loader",(t={},Object(n.a)(t,j,j),Object(n.a)(t,"show",i),t)),children:[c,i?Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("div",Object(s.a)({className:"overlay"},i&&b?{style:{backgroundColor:b}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=j,j.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},526:function(e,t,c){"use strict";var s=c(16);t.a=function(){return Object(s.jsx)("div",{className:"fallback-spinner",children:Object(s.jsxs)("div",{className:"loading",children:[Object(s.jsx)("div",{className:"effect-1 effects"}),Object(s.jsx)("div",{className:"effect-2 effects"}),Object(s.jsx)("div",{className:"effect-3 effects"})]})})}},528:function(e,t,c){},531:function(e,t,c){},543:function(e,t,c){}}]);
//# sourceMappingURL=74.a1d4feeb.chunk.js.map