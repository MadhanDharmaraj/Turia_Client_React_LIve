(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[46],{1472:function(e,n,a){"use strict";a.r(n);var t=a(1),c=a(4),s=a(14),i=a(8),r=a(22),l=a(2),d=a(13),o=a(139),m=a(7),u=a.n(m),j=a(140),b=a(545),f=a.n(b),O=a(5),x=a(719),v=a(831),g=a(536),h=a(533),p=a(539),N=a(540),y=a(10),_=a(96),I=a(690),C=a(526),F=a(527),B=a(160),k=(a(537),a(535),a(530),a(534),a(16)),w=Object(y.a)(),z=Object(y.d)(),A=function(){var e,n,a,m,b=Object(l.useState)(!1),y=Object(r.a)(b,2),A=y[0],S=y[1],q=function(){return Object(k.jsx)(l.Fragment,{children:Object(k.jsx)(F.a,{})})},J=Object(j.b)(),D=Object(d.f)(),M=Object(l.useState)([]),V=Object(r.a)(M,2),Y=V[0],E=V[1],L=Object(l.useState)(1),P=Object(r.a)(L,2),Q=P[0],K=P[1],R=Object(l.useState)([]),T=Object(r.a)(R,2),U=T[0],G=T[1],H=Object(l.useState)([]),W=Object(r.a)(H,2),X=W[0],Z=W[1],$={multiValue:function(e,n){return Object(i.a)(n),Object(s.a)(Object(s.a)({},e),{},{backgroundColor:"#7367f0"})}},ee=[{id:1,name:"One time"},{id:2,name:"Monthly"},{id:3,name:"Quaterly"},{id:4,name:"Annually"}],ne=[{name:"1 day before",id:1,value:1},{name:"2 day's before",id:2,value:2},{name:"3 day's before",id:3,value:3},{name:"4 day's before",id:4,value:4},{name:"5 day's before",id:5,value:5},{name:"7 day's before",id:6,value:7},{name:"10 day's before",id:7,value:10},{name:"15 day's before",id:8,value:15},{name:"21 day's before",id:9,value:21},{name:"30 day's before",id:10,value:30},{name:"2 month's before",id:11,value:60},{name:"3 months's before",id:12,value:90},{name:"4 months's before",id:13,value:120}],ae=Object(j.c)((function(e){return e.compliance})),te=p.d().shape({createdBy:p.f().default(z),organization:p.f().default(w.id),serviceId:p.f().required("Test"),name:p.f().required(""),dueDate:p.a().min(1),description:p.f().default(""),importCode:p.f().required(""),reminderOnActual:p.a().min(1),recurringId:p.c().default(1).required("Test"),forms:p.a().of(p.d().shape({name:p.f().nullable(),filling_fees:p.f().nullable(),late_fees_duration:p.f().nullable(),penalty:p.f().nullable()}))}),ce=Object(h.f)({resolver:Object(N.a)(te),defaultValues:te.cast()}),se=ce.handleSubmit,ie=ce.control,re=ce.formState.errors,le=ce.setError,de=ce.setValue,oe=Object(h.e)({name:"forms",control:ie}),me=oe.fields,ue=oe.append,je=oe.remove;Object(l.useEffect)((function(){null!==ae.errors&&(S(!1),Object.keys(ae.errors).map((function(e){le(e,{type:"custom",message:ae.errors[e][0]})})))}),[ae.errors]);var be=function(){var e=Object(c.a)(Object(t.a)().mark((function e(n){return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(Object(B.a)(n));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();Object(l.useEffect)(Object(c.a)(Object(t.a)().mark((function e(){return Object(t.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==ae.complianceId&&D("/compliance/view/".concat(ae.complianceId));case 1:case"end":return e.stop()}}),e)}))),[ae.complianceId]);var fe=function(){ue({name:"",filling_fees:"",late_fees_duration:"",penalty:""})},Oe=function(e){var n=Array.isArray(e)?e.map((function(e){return e.value})):[];de("reminderOnActual",n),G(e)};Object(l.useEffect)((function(){O.a.post("/services/dropdown",{status:1}).then((function(e){var n=e.data;E(n.services)})),fe()}),[]);var xe=function(e,n){var a=X;a[n]=e,Z(a),de("dueDate",a)};return Object(k.jsx)(C.a,{blocking:A,loader:Object(k.jsx)(q,{}),children:Object(k.jsxs)("form",{onSubmit:se(be),children:[Object(k.jsxs)(_.l,{className:"invoice-preview-card",children:[Object(k.jsxs)(_.p,{children:[Object(k.jsx)(_.v,{children:" Add Compliance"}),Object.keys(re).map((function(e,n){var a;return Object(k.jsxs)(_.I,{children:[" ",null===(a=re[e])||void 0===a?void 0:a.message]},n)}))]}),Object(k.jsxs)(_.m,{className:"pb-0",children:[Object(k.jsxs)(_.ib,{children:[Object(k.jsxs)(_.B,{className:"my-lg-0 my-1 d-lg-flex",lg:"6",sm:"12",children:[Object(k.jsx)(_.N,{size:"lg",className:"col-lg-3 col-sm-12",children:"Filing Name"}),Object(k.jsxs)(_.B,{sm:"9",children:[Object(k.jsx)(h.a,{control:ie,name:"serviceId",id:"serviceId",render:function(e){var n=e.field,a=e.ref;return Object(k.jsx)(g.a,Object(s.a)(Object(s.a)(Object(s.a)({},n),{},{inputRef:a,className:u()("react-select",{"is-invalid":re.serviceId})},n),{},{classNamePrefix:"select",options:Y,value:Y.find((function(e){return e.id===n.value})),onChange:function(e){return de("name",e.name),de("importCode",e.name),n.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),re.serviceId&&Object(k.jsx)(_.I,{className:"text-danger",children:null===(e=re.serviceId)||void 0===e?void 0:e.message})]})]}),Object(k.jsxs)(_.B,{className:"my-lg-0 my-1 d-lg-flex",lg:"6",sm:"12",children:[Object(k.jsx)(_.N,{size:"lg",className:"col-lg-3 col-sm-12",children:"Filing Frequency"}),Object(k.jsxs)(_.B,{sm:"9",children:[Object(k.jsx)(h.a,{control:ie,name:"recurringId",id:"recurringId",render:function(e){var n=e.field,a=e.ref;return Object(k.jsx)(g.a,Object(s.a)(Object(s.a)(Object(s.a)({},n),{},{inputRef:a,className:u()("react-select",{"is-invalid":re.recurringId})},n),{},{classNamePrefix:"select",options:ee,value:ee.find((function(e){return e.id===n.value})),onChange:function(e){return K(e.id),Z([]),de("dates_".concat(Q,"_",0),null),n.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),re.recurringId&&Object(k.jsx)(_.I,{className:"text-danger",children:null===(n=re.recurringId)||void 0===n?void 0:n.message})]})]})]}),Object(k.jsxs)(_.ib,{children:[(1===Q||4===Q)&&Object(k.jsxs)(_.B,{className:"my-2 d-lg-flex",lg:"6",sm:"12",children:[Object(k.jsx)(_.N,{size:"lg",className:"col-lg-3 col-sm-12",children:"Date"}),Object(k.jsx)(_.B,{sm:"9",children:Object(k.jsx)(h.a,{name:"dates_".concat(Q,"_0"),control:ie,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var n=e.field;return Object(k.jsx)(f.a,{value:n.value,onChange:function(e,a){n.onChange(a),xe(a,0)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:u()("due-date-picker")})}})})]}),3===Q&&I.a.quarterly.map((function(e,n){return Object(k.jsxs)(_.B,{className:"my-1 d-lg-flex",lg:"6",sm:"6",children:[Object(k.jsx)(_.N,{size:"lg",className:"col-lg-3 col-sm-12",children:e.name}),Object(k.jsx)(_.B,{sm:"9",children:Object(k.jsx)(h.a,{name:"dates_".concat(Q,"_").concat(n),control:ie,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var a=e.field;return Object(k.jsx)(f.a,{value:a.value,onChange:function(e,t){a.onChange(t),xe(t,n)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:u()("due-date-picker")})}})})]},n)})),2===Q&&I.a.monthly.map((function(e,n){return Object(k.jsxs)(_.B,{className:"d-lg-flex my-1",lg:"4",sm:"6",children:[Object(k.jsx)(_.N,{size:"lg",className:"col-lg-3 col-sm-12",children:e.name}),Object(k.jsx)(_.B,{sm:"9",children:Object(k.jsx)(h.a,{name:"dates_".concat(Q,"_").concat(n),control:ie,rules:{required:!0},options:{dateFormat:"d-m-Y"},render:function(e){var a=e.field;return Object(k.jsx)(f.a,{value:a.value,onChange:function(e,t){a.onChange(t),xe(t,n)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"U"},className:u()("due-date-picker")})}})})]},n)}))]}),Object(k.jsx)(_.ib,{children:Object(k.jsxs)(_.B,{className:"d-lg-flex",lg:"6",sm:"12",children:[Object(k.jsx)(_.N,{size:"lg",className:"col-lg-3 col-sm-12",children:"Reminders"}),Object(k.jsxs)(_.B,{sm:"9",children:[Object(k.jsx)(h.a,{control:ie,name:"recurringId",id:"recurringId",render:function(e){var n=e.field,a=e.ref;return Object(k.jsx)(g.a,Object(s.a)(Object(s.a)(Object(s.a)({},n),{},{inputRef:a,className:u()("react-select",{"is-invalid":re.recurringId})},n),{},{classNamePrefix:"select",isMulti:!0,options:ne,value:U,onChange:Oe,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},styles:$,isOptionDisabled:function(){return U.length>=3}}))}}),re.recurringId&&Object(k.jsx)(_.I,{className:"text-danger",children:null===(a=re.recurringId)||void 0===a?void 0:a.message})]})]})})]}),Object(k.jsx)("hr",{className:"invoice-spacing"}),re.forms&&Object(k.jsx)("p",{className:"text-danger ms-2",children:null===(m=re.forms)||void 0===m?void 0:m.message}),Object(k.jsxs)(_.m,{className:"invoice-padding invoice-product-details",children:[me.map((function(e,n){var a,t,c,i,r,l,d,o,m,u,j,b,f,O,v,g;return Object(k.jsx)("div",{className:"repeater-wrapper",children:Object(k.jsx)(_.ib,{children:Object(k.jsxs)(_.B,{className:"d-lg-flex product-details-border position-relative pe-0",sm:"12",children:[Object(k.jsxs)(_.ib,{className:"w-100 pe-lg-0 pe-1 py-2",children:[Object(k.jsxs)(_.B,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-3 col-sm-12",children:[Object(k.jsx)(_.u,{className:"col-title mb-md-50 mb-0",children:"Forms To Be Filed"}),Object(k.jsx)(h.a,{control:ie,id:"forms_firstName",name:"forms[".concat(n,"].name"),render:function(e){var a,t,c=e.field;return Object(k.jsx)(_.K,Object(s.a)({type:"text",onChange:function(e){c.onChange(e)},invalid:(null===(a=re.forms)||void 0===a||null===(t=a[n])||void 0===t?void 0:t.name)&&!0},c))}}),(null===(a=re.forms)||void 0===a||null===(t=a[n])||void 0===t?void 0:t.name)&&Object(k.jsx)(_.I,{children:null===(c=re.forms)||void 0===c||null===(i=c[n])||void 0===i?void 0:i.name.message})]}),Object(k.jsxs)(_.B,{className:"my-lg-0 my-2 col-lg-3 col-sm-12",children:[Object(k.jsx)(_.u,{className:"col-title mb-md-2 mb-0 ",children:"Govt Fee (If Any)"}),Object(k.jsx)(h.a,{control:ie,id:"forms_filling_fees",name:"forms[".concat(n,"].filling_fees"),render:function(e){var a,t,c=e.field;return Object(k.jsx)(_.K,Object(s.a)({type:"text",onChange:function(e){c.onChange(e)},invalid:(null===(a=re.forms)||void 0===a||null===(t=a[n])||void 0===t?void 0:t.filling_fees)&&!0},c))}}),(null===(r=re.forms)||void 0===r||null===(l=r[n])||void 0===l?void 0:l.filling_fees)&&Object(k.jsx)(_.I,{children:null===(d=re.forms)||void 0===d||null===(o=d[n])||void 0===o?void 0:o.filling_fees.message})]}),Object(k.jsxs)(_.B,{className:"my-lg-0 my-2 col-lg-3 col-sm-12",children:[Object(k.jsx)(_.u,{className:"col-title mb-md-2 mb-0",children:"Late Fees"}),Object(k.jsx)(h.a,{control:ie,id:"forms_late_fees_duration",name:"forms[".concat(n,"].late_fees_duration"),render:function(e){var a,t,c=e.field;return Object(k.jsx)(_.K,Object(s.a)({type:"text",onChange:function(e){c.onChange(e)},invalid:(null===(a=re.forms)||void 0===a||null===(t=a[n])||void 0===t?void 0:t.late_fees_duration)&&!0},c))}}),(null===(m=re.forms)||void 0===m||null===(u=m[n])||void 0===u?void 0:u.late_fees_duration)&&Object(k.jsx)(_.I,{children:null===(j=re.forms)||void 0===j||null===(b=j[n])||void 0===b?void 0:b.late_fees_duration.message})]}),Object(k.jsxs)(_.B,{className:"my-lg-0 my-2 col-lg-3 col-sm-12",children:[Object(k.jsx)(_.u,{className:"col-title mb-md-2 mb-0",children:"Penalty"}),Object(k.jsx)(h.a,{control:ie,id:"forms_penalty",name:"forms[".concat(n,"].penalty"),render:function(e){var a,t,c=e.field;return Object(k.jsx)(_.K,Object(s.a)({type:"text",onChange:function(e){c.onChange(e)},invalid:(null===(a=re.forms)||void 0===a||null===(t=a[n])||void 0===t?void 0:t.penalty)&&!0},c))}}),(null===(f=re.forms)||void 0===f||null===(O=f[n])||void 0===O?void 0:O.penalty)&&Object(k.jsx)(_.I,{children:null===(v=re.forms)||void 0===v||null===(g=v[n])||void 0===g?void 0:g.penalty.message})]})]}),Object(k.jsx)("div",{className:"d-lg-flex justify-content-center border-start invoice-product-actions py-50 px-25",children:Object(k.jsx)(x.a,{size:18,className:"cursor-pointer",onClick:function(){je(n)}})})]})})},e.id)})),Object(k.jsx)(_.ib,{className:"mt-1",children:Object(k.jsx)(_.B,{sm:"12",className:"px-0",children:Object(k.jsxs)(_.i,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){return fe()},children:[Object(k.jsx)(v.a,{size:14,className:"me-25"})," ",Object(k.jsx)("span",{className:"align-middle",children:"Add Item"})]})})}),Object(k.jsxs)(_.ib,{className:"mt-1",children:[Object(k.jsx)(_.N,{size:"lg",className:"col-lg-3 col-sm-12",children:"Description"}),Object(k.jsx)("div",{contentEditable:!0,className:"border border-1 rounded-2 maxheight-400",onInput:function(e){return de("description",e.target.outerHTML)}})]})]})]}),Object(k.jsx)(_.l,{children:Object(k.jsx)(_.m,{children:Object(k.jsxs)("div",{className:"modal-footer border-0",children:[Object(k.jsx)(_.i,{color:"warning",outline:!0,tag:o.b,to:"/clients/list",children:"Cancel"}),Object(k.jsx)(_.i,{color:"primary",type:"submit",children:"Save"})]})})})]})})};n.default=function(){return Object(k.jsx)("div",{className:"invoice-add-wrapper",children:Object(k.jsx)(_.ib,{className:"invoice-add",children:Object(k.jsx)(_.B,{xl:12,md:12,sm:12,children:Object(k.jsx)(A,{})})})})}},526:function(e,n,a){"use strict";var t=a(14),c=a(34),s=a(2),i=a(7),r=a.n(i),l=a(96),d=(a(529),a(16)),o=function(e){var n,a=e.children,i=e.blocking,l=e.loader,o=e.className,m=e.tag,u=e.overlayColor,j=m;return Object(d.jsxs)(j,{className:r()("ui-loader",(n={},Object(c.a)(n,o,o),Object(c.a)(n,"show",i),n)),children:[a,i?Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)("div",Object(t.a)({className:"overlay"},i&&u?{style:{backgroundColor:u}}:{})),Object(d.jsx)("div",{className:"loader",children:l})]}):null]})};n.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(l.jb,{color:"primary"})}},527:function(e,n,a){"use strict";var t=a(16);n.a=function(){return Object(t.jsx)("div",{className:"fallback-spinner",children:Object(t.jsxs)("div",{className:"loading",children:[Object(t.jsx)("div",{className:"effect-1 effects"}),Object(t.jsx)("div",{className:"effect-2 effects"}),Object(t.jsx)("div",{className:"effect-3 effects"})]})})}},529:function(e,n,a){},530:function(e,n,a){},534:function(e,n,a){},537:function(e,n,a){},690:function(e,n,a){"use strict";a.d(n,"a",(function(){return t}));var t={singles:{id:"",due_date:"",min:"01-01-2021",max:"12-31-2021"},quarterly:[{id:"",name:"Quarter 1 (Apr-Jun)",due_date:"",min:"07-01-2021",max:"09-30-2021"},{id:"",name:"Quarter 2 (Jul-Sept)",due_date:"",min:"10-01-2021",max:"12-31-2021"},{id:"",name:"Quarter 3 (Oct-Dec)",due_date:"",min:"01-01-2021",max:"03-31-2021"},{id:"",name:"Quarter 4 (Jan-Mar)",due_date:"",min:"04-01-2021",max:"06-30-2021"}],monthly:[{id:"",name:"April",due_date:"",min:"05-01-2021",max:"05-31-2021"},{id:"",name:"May",due_date:"",min:"06-01-2021",max:"06-30-2021"},{id:"",name:"June",due_date:"",min:"07-01-2021",max:"07-31-2021"},{id:"",name:"July",due_date:"",min:"08-01-2021",max:"08-31-2021"},{id:"",name:"August",due_date:"",min:"09-01-2021",max:"09-30-2021"},{id:"",name:"September",due_date:"",min:"10-01-2021",max:"10-31-2021"},{id:"",name:"October",due_date:"",min:"11-01-2021",max:"11-30-2021"},{id:"",name:"November",due_date:"",min:"12-01-2021",max:"12-31-2021"},{id:"",name:"December",due_date:"",min:"01-01-2021",max:"01-31-2021"},{id:"",name:"January",due_date:"",min:"02-01-2021",max:"02-29-2021"},{id:"",name:"February",due_date:"",min:"03-01-2021",max:"03-31-2021"},{id:"",name:"March",due_date:"",min:"04-03-2021",max:"04-30-2021"}]}}}]);
//# sourceMappingURL=46.81a00c01.chunk.js.map