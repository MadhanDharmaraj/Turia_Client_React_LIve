(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[60],{1670:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(17),i=n(4),r=n(18),s=n(1),o=n.n(s),l=n(2),d=n(5),u=n(521),p=n.n(u),j=n(897),b=n(818),m=n(929),f=n(511),v=n(509),x=n(522),O=n(523),h=n(91),g=n(6),N=n.n(g),I=n(617),y=n(507),w=(n(524),n(510),n(508),n(513),n(12)),k=n(603),A=n(11),C=n(132),S=n(133),P=n(13),B=Object(w.b)(),F=Object(w.a)(),z=Object(w.e)(),T=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],u=Object(l.useState)([]),g=Object(r.a)(u,2),w=g[0],T=g[1],V=Object(l.useState)([]),L=Object(r.a)(V,2),_=L[0],R=L[1],E=Object(l.useState)([]),D=Object(r.a)(E,2),G=D[0],q=D[1],H=Object(l.useState)([]),M=Object(r.a)(H,2),J=M[0],W=M[1],U=Object(l.useState)(0),Y=Object(r.a)(U,2),Z=Y[0],$=Y[1],K=Object(l.useState)(0),Q=Object(r.a)(K,2),X=Q[0],ee=Q[1],te=Object(l.useState)([]),ne=Object(r.a)(te,2),ae=ne[0],ce=ne[1],ie=Object(l.useState)({}),re=Object(r.a)(ie,2),se=re[0],oe=re[1],le=Object(l.useState)([]),de=Object(r.a)(le,2),ue=de[0],pe=de[1],je=Object(l.useState)([]),be=Object(r.a)(je,2),me=be[0],fe=be[1],ve=Object(l.useState)([]),xe=Object(r.a)(ve,2),Oe=xe[0],he=xe[1],ge=Object(l.useState)([]),Ne=Object(r.a)(ge,2),Ie=Ne[0],ye=Ne[1],we=Object(A.f)(),ke=Object(S.b)(),Ae=Object(S.c)((function(e){return e.invoice}));Object(l.useEffect)((function(){d.a.post("/clients/dropdown").then((function(e){var t=e.data;s(t.clients)})),d.a.post("/services/dropdown").then((function(e){var t=e.data;T(t.services)})),d.a.post("/taxgroups/dropdown").then((function(e){var t=e.data;R(t.taxgroups)})),d.a.post("/exemptionreasons/dropdown").then((function(e){var t=e.data;ye(t.exemptionreasons)})),d.a.post("/transactionaccounts/dropdown").then((function(e){var t=e.data;W(t.transactionaccounts)})),d.a.post("/states/list").then((function(e){var t=e.data;q(t.states)}))}),[]);var Ce=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(Object(I.e)(t));case 2:n=e.sent,oe(n.payload);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=x.d().shape({createdBy:x.f().default(z),contactId:x.c().required("Please select a Client"),uniqueIdentity:x.f(),contactEmail:x.f(),contactName:x.f(),invoiceDate:x.c(),paymentDue:x.c(),placeOfSupplyId:x.c().required("Please select a Place Of Supply"),subTotalAmount:x.f(),totalAmount:x.f(),totalTaxAmount:x.f(),organizationId:x.c().default(B),isRcmApplicable:x.b().default(!1),dueAmount:x.f(),billingAddressLine1:x.f(),billingAddressLine2:x.f(),billingAddressState:x.f(),billingAddressCity:x.f(),billingAddressZipCode:x.f(),billingCurrencyId:x.c(),bankAccountBankName:x.f(),bankAccountBranchName:x.f(),bankAccountHolderName:x.f(),bankAccountId:x.f().required("Please Select Account"),bankAccountIfscCode:x.f(),bankAccountNumber:x.f(),organizationAddressLine1:x.f().default(F.addressline1),organizationAddressLine2:x.f().default(F.addressline2),organizationCity:x.f().default(F.organizationcity),organizationState:x.f().default(F.statename),organizationZipCode:x.f().default(F.pinzipcode),organizationName:x.f().default(F.name),organizationImageUrl:x.f().default(""),organizationStateCode:x.f().default(F.stateshortname),organizationGstin:x.f().default(F.gstin),gstin:x.f(),note:x.f().default("It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"),status:x.c().default(4),calculateTaxes:x.f(),paymentStatus:x.c().default(5),rows:x.a().of(x.d().shape({serviceId:x.c().required("Please Select Service Item"),invoiceId:x.c(),sacCode:x.f(),price:x.f(),organizationId:x.c().default(B),exemptionReasonId:x.c().nullable(),isTaxApplicable:x.b().default(!0),actualPrice:x.f().required(),taxGroupId:x.c().required("Pleace Select Tax"),subTotalAmount:x.f().required(1),taxes:x.f()}))}),Pe=Object(v.f)({resolver:Object(O.a)(Se),defaultValues:Se.cast()}),Be=Pe.handleSubmit,Fe=Pe.formState.errors,ze=Pe.control,Te=Pe.setValue,Ve=Object(v.e)({control:ze,name:"rows"}),Le=Ve.fields,_e=Ve.append,Re=Ve.remove,Ee=Ve.update,De=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rows,ce(n),delete t.rows,e.next=5,ke(Object(I.a)(t));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae.forEach((function(e,n){ae[n].invoiceId=t})),e.next=3,ke(Object(I.b)(ae));case 3:we("/proposal/view/".concat(Ae.invoiceId));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),qe=function(){_e({invoiceId:0,organizationId:B,serviceId:"",exemptionReasonId:0,isTaxApplicable:!0,sacCode:"",actualPrice:0,taxGroupId:"",subTotalAmount:0,taxPrice:0,description:""})};Object(l.useEffect)((function(){qe()}),[]),Object(l.useEffect)(Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!==Ae.invoiceId&&ae.length>0)){e.next=3;break}return e.next=3,Ge(Ae.invoiceId);case 3:case"end":return e.stop()}}),e)}))),[Ae.invoiceId]);var He=function(){var e=ze._formValues.rows,t=0,n=0,a=0;e.forEach((function(e){t=parseFloat(e.subTotalAmount)+parseFloat(t),n=parseFloat(e.price)+parseFloat(n),a=parseFloat(a)+parseFloat(e.taxPrice)})),ze._formValues.subTotalAmount=n,ze._formValues.totalAmount=t,ze._formValues.dueAmount=t,ze._formValues.totalTaxAmount=a,$(t),ee(n),function(){var e;e=ze._formValues.rows.map((function(e){return Object(k.b)(e.taxes)})).flat().reduce((function(e,t){if(void 0!==t){var n=e.find((function(e){return t.taxName===e.taxName}));n?n.taxAmount=parseFloat(n.taxAmount)+parseFloat(t.taxAmount):e.push(Object.assign({},t))}return e}),[]),he(e),Te("calculateTaxes",JSON.stringify(e))}()},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],r=ze._formValues.rows[e];if(void 0===r.serviceId||""===r.serviceId)return!1;var s=w.find((function(e){return e.id===r.serviceId}));i?(r.sacCode=s.saccode,r.actualPrice=0|s.sellingprice,r.price=0|String(s.sellingprice),r.taxGroupId=s.taxgroupid,r.description=s.description,r.exemptionReasonId=s.exemptionreasonid):(r.sacCode=a?r.sacCode:s.saccode,r.price=n?r.price:0|s.sellingprice,r.actualPrice=0|String(s.sellingprice),r.taxGroupId=c?r.taxGroupId:s.taxgroupid,r.description=t?r.description:s.description,r.exemptionReasonId=s.exemptionreasonid);var o=0,l=[],d=_.find((function(e){return e.id===r.taxGroupId}));r.isTaxApplicable=void 0!==d?!d.nontaxableflag:s.istaxapplicable,r.isTaxApplicable&&void 0!==d&&ue.forEach((function(e){if(e.taxid===r.taxGroupId){var t;t=Object(k.a)(r.price,e.percentage,2),o=parseFloat(o)+parseFloat(t);var n={};n.taxName="".concat(e.name," (").concat(e.percentage,"%)"),n.taxId=parseInt(e.id),n.taxNameValue=e.name,n.taxPercentage=String(e.percentage),n.taxAmount=String(t),l.push(n)}})),r.subTotalAmount=String(parseFloat(parseFloat(0|o)+parseFloat(0|r.price)).toFixed(2)),r.taxPrice=parseFloat(o).toFixed(2),r.taxes=JSON.stringify(l),r.createdBy=z,Ee(e,r),He()},Je=function(){var e=1;F.stateid===ze._formValues.placeOfSupplyId&&(e=2),function(e){var t={type:e};d.a.post("/taxvalues/list",t).then((function(e){var t=e.data;pe(t.taxvalues)}))}(e)};Object(l.useEffect)((function(){ue.length>0&&ze._formValues.rows.forEach((function(e,t){Me(t,!1,!1,!1,!1,!1)}))}),[ue]);Object(l.useEffect)((function(){Object.keys(se).length>0&&(Te("billingAddressCity",se.billingaddresscity),Te("billingAddressLine1",se.billingaddressline1),Te("billingAddressLine2",se.billingaddressline1),Te("billingAddressState",se.billingaddressstatesname),Te("billingAddressZipCode",se.billingaddresszip),Te("billingCurrencyId",parseInt(se.currencyid)),Te("billingCurrencySymbol",se.currenciessymbol),Te("billingCurrencyShortName",se.currenciescode),Te("billingCurrencyName",se.currenciesname),Te("contactEmail",se.email),Te("gstin",se.gstin),Te("contactName",se.name),Te("placeOfSupplyId",se.placeofsupplyid),Je())}),[se]);return Object(P.jsx)("form",{onSubmit:Be(De),children:Object(P.jsx)(h.jb,{className:"invoice-add",children:Object(P.jsxs)(l.Fragment,{children:[Object(P.jsx)(h.B,{xl:10,md:8,sm:12,children:Object(P.jsxs)(h.l,{className:"invoice-preview-card",children:[Object(P.jsxs)(h.m,{className:"invoice-padding pb-0",children:[function(){var e=Object.keys(Fe),t=[];return Array.isArray(e)&&e.forEach((function(e){var n;"rows"!==e&&t.push(Object(P.jsxs)(h.I,{children:["$",null===(n=Fe[e])||void 0===n?void 0:n.message]},e))})),t}(),Object(P.jsxs)("div",{className:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"logo-wrapper",children:function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(P.jsx)(y.a,{color:t,className:"me-50",content:null!==e?e.charAt(0):""})}(F.name)}),Object(P.jsx)("h3",{className:"text-primary invoice-logo",children:F.name}),Object(P.jsx)("p",{className:"card-text mb-25",children:F.addressline1}),Object(P.jsx)("p",{className:"card-text mb-25",children:F.addressline2}),Object(P.jsxs)("p",{className:"card-text mb-0",children:[F.organizationcity," - ",F.pinzipcode]}),Object(P.jsx)("p",{className:"card-text mb-0",children:F.statename})]}),Object(P.jsxs)("div",{className:"invoice-number-date mt-md-0 mt-2",children:[Object(P.jsxs)("div",{className:"d-flex align-items-center justify-content-md-end mb-1",children:[Object(P.jsx)("span",{className:"title",children:"Proposal:"}),Object(P.jsxs)(h.M,{className:"input-group-merge invoice-edit-input-group disabled",children:[Object(P.jsx)(h.N,{children:Object(P.jsx)(j.a,{size:15})}),Object(P.jsx)(h.L,{type:"number",className:"invoice-edit-input",value:3171,placeholder:"53634",disabled:!0})]})]}),Object(P.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(P.jsx)("span",{className:"title",children:"Proposal Date:"}),Object(P.jsx)(v.a,{control:ze,name:"invoiceDate",id:"invoiceDate",render:function(e){var t=e.field;return Object(P.jsx)(p.a,{value:t.value,onChange:function(e,n){t.onChange(n)},options:{altInput:!0,altFormat:"M j, Y",dateFormat:"U"},className:"form-control invoice-edit-input date-picker"})}})]}),Object(P.jsxs)("div",{className:"d-flex align-items-center",children:[Object(P.jsx)("span",{className:"title",children:"Due Date:"}),Object(P.jsx)(v.a,{control:ze,name:"paymentDue",id:"paymentDue",render:function(e){var t=e.field;return Object(P.jsx)(p.a,{value:t.value,onChange:function(e,n){t.onChange(n)},options:{altInput:!0,altFormat:"M j, Y",dateFormat:"U"},className:"form-control invoice-edit-input due-date-picker"})}})]})]})]})]}),Object(P.jsx)("hr",{className:"invoice-spacing"}),Object(P.jsxs)(h.m,{className:"invoice-padding pt-0",children:[Object(P.jsxs)(h.jb,{className:"row-bill-to invoice-spacing",children:[Object(P.jsxs)(h.B,{className:"col-bill-to ps-0",xl:"6",children:[Object(P.jsx)("h6",{className:"invoice-to-title",children:"Proposal To:"}),Object(P.jsx)("div",{className:"invoice-customer",children:Object(P.jsx)(v.a,{control:ze,name:"contactId",id:"contactId",render:function(e){var t=e.field,a=e.ref;return Object(P.jsx)(f.a,Object(c.a)(Object(c.a)({inputRef:a,className:N()("react-select",{"is-invalid":Fe.contactId})},t),{},{classNamePrefix:"select",options:n,value:n.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Ce(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})}),Object(P.jsx)(h.B,{className:"pe-0 mt-xl-2",xl:"4",children:Object(P.jsx)("table",{children:Object(P.jsxs)("tbody",{children:[Object(P.jsx)("tr",{children:Object(P.jsx)("td",{children:se.billingaddressline1})}),Object(P.jsx)("tr",{children:Object(P.jsx)("td",{children:se.billingaddressline2})}),Object(P.jsx)("tr",{children:Object(P.jsxs)("td",{children:[se.billingaddresscity," ",se.billingaddresszip&&"-","  ",se.billingaddresszip]})}),Object(P.jsx)("tr",{children:Object(P.jsx)("td",{children:se.billingaddressstatesname})})]})})})]}),Object(P.jsx)(h.B,{className:"col-bill-to ps-0",xl:"2"}),Object(P.jsxs)(h.B,{className:"pe-0 mt-xl-0 mt-2",xl:"4",children:[Object(P.jsx)("h6",{className:"mb-2",children:"Payment Details:"}),Object(P.jsx)("table",{children:Object(P.jsxs)("tbody",{children:[Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"pe-1",children:"Bank Name:"}),Object(P.jsx)("td",{children:me.bankName&&Object(P.jsx)("span",{className:"fw-bolder",children:me.bankName})})]}),Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"pe-1",children:"Account name:"}),Object(P.jsx)("td",{children:me.accountHolderName&&Object(P.jsx)("span",{className:"fw-bolder",children:me.accountHolderName})})]}),Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"pe-1",children:"Branch Name:"}),Object(P.jsxs)("td",{children:[" ",me.branchAddress&&Object(P.jsx)("span",{className:"fw-bolder",children:me.branchAddress})]})]}),Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"pe-1",children:"IFSC Code:"}),Object(P.jsx)("td",{children:me.ifscCode&&Object(P.jsxs)("span",{className:"fw-bolder",children:[me.ifscCode," "]})})]}),se.currenciescode&&Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"pe-1",children:"Currency code:"}),Object(P.jsx)("td",{children:se.currenciescode})]})]})})]})]}),Object(P.jsxs)(h.jb,{className:"row-bill-to invoice-spacing",children:[Object(P.jsxs)(h.B,{className:"col-bill-to ps-0",xl:"6",children:[Object(P.jsx)("h6",{className:"invoice-to-title mt-2",children:"Place Of Supply:"}),Object(P.jsx)("div",{className:"invoice-customer",children:Object(P.jsx)(v.a,{control:ze,name:"placeOfSupplyId",id:"placeOfSupplyId",render:function(e){var t=e.field,n=e.ref;return Object(P.jsx)(f.a,Object(c.a)(Object(c.a)({inputRef:n,className:N()("react-select",{"is-invalid":Fe.placeOfSupplyId})},t),{},{classNamePrefix:"select",options:G,value:G.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Je()},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})}),""!==se.gstin&&void 0!==se.gstin&&Object(P.jsxs)("div",{className:"mt-1",children:[" GSTIN : ",se.gstin]})]}),Object(P.jsx)(h.B,{className:"col-bill-to ps-0",xl:"2"}),Object(P.jsx)(h.B,{className:"pe-0 mt-xl-0 mt-2",xl:"4",children:Object(P.jsx)("table",{children:Object(P.jsx)("tbody",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"pe-1",children:"RCM Applicable:"}),Object(P.jsx)("td",{children:Object(P.jsx)("div",{className:"form-switch form-check-success",children:Object(P.jsx)(v.a,{control:ze,name:"isRcmApplicable",id:"isRcmApplicable",render:function(e){return Object(a.a)(e),Object(P.jsx)(h.L,{type:"switch",id:"switch-success"})}})})})]})})})})]})]}),Object(P.jsxs)(h.m,{className:"invoice-padding invoice-product-details",children:[Le.map((function(e,t){var n,a,i,r,s,o,l,d,u,p,j,m,x,O,g,I;return Object(P.jsx)("div",{className:"repeater-wrapper",children:Object(P.jsx)(h.jb,{children:Object(P.jsxs)(h.B,{className:"d-lg-flex product-details-border position-relative pe-0",sm:"12",children:[Object(P.jsxs)(h.jb,{className:"w-100 pe-lg-0 pe-1 py-2",children:[Object(P.jsxs)(h.B,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-4 col-sm-12",children:[Object(P.jsx)(h.u,{className:"col-title mb-md-50 mb-0",children:"Item"}),Object(P.jsx)(v.a,{control:ze,name:"rows[".concat(t,"].serviceId"),rules:{required:!0},render:function(e){var n,a,i=e.field,r=e.ref;return Object(P.jsx)(f.a,Object(c.a)(Object(c.a)({},i),{},{inputRef:r,className:N()("react-select",{"is-invalid":null===(n=Fe.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.serviceId}),classNamePrefix:"select",options:w,value:w.find((function(e){return e.id===i.value})),onChange:function(e){i.onChange(e.id),Me(t,!1,!1,!1,!1,!0)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===(n=Fe.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.serviceId)&&Object(P.jsx)(h.I,{children:null===(i=Fe.rows)||void 0===i||null===(r=i[t])||void 0===r?void 0:r.serviceId.message}),Object(P.jsx)(v.a,{id:"rows_".concat(t,"_description"),name:"rows[".concat(t,"].description"),control:ze,render:function(e){var n,a,i=e.field;return Object(P.jsx)(h.L,Object(c.a)({className:"mt-1",invalid:(null===(n=Fe.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.description)&&!0,onInput:function(e){i.onChange(e),Me(t,!0,!1,!1,!1,!1)}},i))}})]}),Object(P.jsxs)(h.B,{className:"my-lg-0 my-2 col-lg-2 col-sm-12",children:[Object(P.jsx)(h.u,{className:"col-title mb-md-2 mb-0",children:"SAC Code"}),Object(P.jsx)(v.a,{id:"rows_".concat(t,"_sacCode"),name:"rows[".concat(t,"].sacCode"),control:ze,render:function(e){var n,a,i=e.field;return Object(P.jsx)(h.L,Object(c.a)({type:"text",invalid:(null===(n=Fe.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.sacCode)&&!0,onInput:function(e){i.onChange(e),Me(t,!1,!0,!0,!1,!1)}},i))}}),(null===(s=Fe.rows)||void 0===s||null===(o=s[t])||void 0===o?void 0:o.sacCode)&&Object(P.jsx)(h.I,{children:null===(l=Fe.rows)||void 0===l||null===(d=l[t])||void 0===d?void 0:d.sacCode.message})]}),Object(P.jsxs)(h.B,{className:"my-lg-0 my-2",lg:"2",sm:"12",children:[Object(P.jsx)(h.u,{className:"col-title mb-md-2 mb-0",children:"Price"}),Object(P.jsx)(v.a,{id:"rows_".concat(t,"_price"),name:"rows[".concat(t,"].price"),control:ze,render:function(e){var n,a,i=e.field;return Object(P.jsx)(h.L,Object(c.a)(Object(c.a)({type:"number",id:"input_rows_".concat(t,"_price"),onInput:function(e){i.onChange(e),console.log(e),Me(t,!1,!0,!1,!1,!1)}},i),{},{invalid:(null===(n=Fe.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.price)&&!0}))}}),(null===(u=Fe.rows)||void 0===u||null===(p=u[t])||void 0===p?void 0:p.price)&&Object(P.jsx)(h.I,{children:null===(j=Fe.rows)||void 0===j||null===(m=j[t])||void 0===m?void 0:m.price.message})]}),Object(P.jsxs)(h.B,{className:"my-lg-0 mt-2",lg:"2",sm:"12",children:[Object(P.jsx)(h.u,{className:"col-title mb-md-50 mb-0",children:"Tax Rate"}),Object(P.jsx)(v.a,{control:ze,name:"rows[".concat(t,"].taxGroupId"),rules:{required:!0},render:function(e){var n,a,i=e.field,r=e.ref;return Object(P.jsx)(f.a,Object(c.a)(Object(c.a)({},i),{},{inputRef:r,className:N()("react-select",{"is-invalid":null===(n=Fe.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.taxGroupId}),classNamePrefix:"select",options:_,value:_.find((function(e){return e.id===i.value})),onChange:function(e){i.onChange(e.id),Me(t,!1,!0,!1,!0,!1)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===(x=Fe.rows)||void 0===x||null===(O=x[t])||void 0===O?void 0:O.taxGroupId)&&Object(P.jsx)(h.I,{children:null===(g=Fe.rows)||void 0===g||null===(I=g[t])||void 0===I?void 0:I.taxGroupId.message}),!e.isTaxApplicable&&Object(P.jsx)(v.a,{control:ze,name:"rows[".concat(t,"].exemptionReasonId"),rules:{required:!0},render:function(e){var n,a,i=e.field,r=e.ref;return Object(P.jsx)(f.a,Object(c.a)(Object(c.a)({},i),{},{inputRef:r,className:N()("react-select mt-1",{"is-invalid":null===(n=Fe.rows)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.taxGroupId}),classNamePrefix:"select",options:Ie,value:Ie.find((function(e){return e.id===i.value})),onChange:function(e){i.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})]}),Object(P.jsxs)(h.B,{className:"my-lg-0 mt-2",lg:"1",sm:"12",children:[Object(P.jsx)(h.u,{className:"col-title mb-md-50 mb-0",children:"Amount"}),e.subTotalAmount]})]}),Object(P.jsx)("div",{className:"d-lg-flex justify-content-center border-start invoice-product-actions py-50 px-25",children:Object(P.jsx)(b.a,{size:18,className:"cursor-pointer",onClick:function(){Re(t),He()}})})]})})},e.id)})),Object(P.jsx)(h.jb,{className:"mt-1",children:Object(P.jsx)(h.B,{sm:"12",className:"px-0",children:Object(P.jsxs)(h.i,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){return qe()},children:[Object(P.jsx)(m.a,{size:14,className:"me-25"})," ",Object(P.jsx)("span",{className:"align-middle",children:"Add Item"})]})})})]}),Object(P.jsx)(h.m,{className:"invoice-padding",children:Object(P.jsxs)(h.jb,{className:"invoice-sales-total-wrapper",children:[Object(P.jsx)(h.B,{className:"mt-md-0 mt-3",md:{size:"6",order:1},xs:{size:12,order:2}}),Object(P.jsx)(h.B,{className:"d-flex justify-content-end",md:{size:"6",order:2},xs:{size:12,order:1},children:Object(P.jsxs)("div",{className:"invoice-total-wrapper",children:[Object(P.jsxs)("div",{className:"invoice-total-item",children:[Object(P.jsx)("p",{className:"invoice-total-title",children:"Pre Tax Amount:"}),Object(P.jsx)("p",{className:"invoice-total-amount",children:X})]}),Oe.map((function(e,t){return Object(P.jsxs)("div",{className:"invoice-total-item",children:[Object(P.jsx)("p",{className:"invoice-total-title",children:null===e||void 0===e?void 0:e.taxName}),Object(P.jsx)("p",{className:"invoice-total-amount",children:null===e||void 0===e?void 0:e.taxAmount})]},t)})),Object(P.jsx)("hr",{className:"my-50"}),Object(P.jsxs)("div",{className:"invoice-total-item",children:[Object(P.jsx)("p",{className:"invoice-total-title",children:"Total Payable:"}),Object(P.jsx)("p",{className:"invoice-total-amount",children:Z})]})]})})]})}),Object(P.jsx)("hr",{className:"invoice-spacing mt-0"}),Object(P.jsx)(h.m,{className:"invoice-padding py-0",children:Object(P.jsx)(h.jb,{children:Object(P.jsx)(h.B,{children:Object(P.jsxs)("div",{className:"mb-2",children:[Object(P.jsx)(h.O,{for:"note",className:"form-label fw-bold",children:"Note:"}),Object(P.jsx)(v.a,{id:"note",name:"note",control:ze,render:function(e){var t=e.field;return Object(P.jsx)(h.L,Object(c.a)({type:"textarea",value:t.value,invalid:Fe.note&&!0},t))}})]})})})})]})}),Object(P.jsxs)(h.B,{xl:2,md:4,sm:12,children:[Object(P.jsx)(h.l,{className:"invoice-action-wrapper",children:Object(P.jsxs)(h.m,{children:[Object(P.jsx)(h.i,{color:"primary",type:"submit",block:!0,outline:!0,className:"mb-75",children:"Save"}),Object(P.jsx)(h.i,{color:"warning",block:!0,outline:!0,tag:C.b,to:"/invoice/list",children:"Cancel"})]})}),Object(P.jsx)("div",{className:"mt-2",children:Object(P.jsxs)("div",{className:"invoice-payment-option",children:[Object(P.jsx)("p",{className:"mb-50",children:"Accept payments via"}),Object(P.jsx)(v.a,{control:ze,name:"bankAccountId",rules:{required:!0},render:function(e){var t=e.field,n=e.ref;return Object(P.jsx)(f.a,Object(c.a)(Object(c.a)({},t),{},{inputRef:n,className:N()("react-select mt-1",{"is-invalid":Fe.bankAccountId}),classNamePrefix:"select",options:J,value:J.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),function(e){var t=J.find((function(t){return t.id===e}));fe(t),Te("bankAccountBankName",t.bankName),Te("bankAccountBranchName",t.branchAddress),Te("bankAccountHolderName",t.accountHolderName),Te("bankAccountId",t.id),Te("bankAccountIfscCode",t.ifscCode),Te("bankAccountNumber",t.accountNumber)}(e.id)},getOptionLabel:function(e){return e.accountHolderName},getOptionValue:function(e){return e.id}}))}})]})})]})]})})})};t.default=function(){return Object(P.jsx)("div",{className:"invoice-add-wrapper",children:Object(P.jsx)(T,{})})}},508:function(e,t,n){},513:function(e,t,n){},524:function(e,t,n){},603:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a=function(e,t,n){var a=0;return 1===n?a=parseFloat(e)-parseFloat(e)*(100/(100+parseFloat(t))):2===n&&(a=parseFloat(e)*parseFloat(t)/100),parseFloat(a)},c=function(e){return JSON.parse(e.replace(/\\/g,""))}},617:function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return h}));var a=n(10),c=n(4),i=n(1),r=n.n(i),s=n(3),o=n(5),l=n(12),d=Object(l.e)(),u=Object(s.b)("appInvoice/getData",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/taskinvoices/list",t);case 2:return n=e.sent,e.abrupt("return",{params:t,data:n.data.taskinvoices.taskinvoices,totalPages:n.data.taskinvoices.total});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(s.b)("appInvoice/addInvoice",function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/taskinvoices/create",t);case 4:return c=e.sent,e.abrupt("return",{invoices:c.data.taskinvoices});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",a(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),j=Object(s.b)("appInvoice/addInvoiceItems",function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/taskinvoiceitems/create",{rows:t});case 4:return c=e.sent,e.abrupt("return",{invoiceItems:c.data.taskinvoiceitems});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",a(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(s.b)("appInvoice/getInvoice",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/taskinvoices/get",{id:t});case 2:return n=e.sent,e.abrupt("return",{invoice:n.data.taskinvoices});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(s.b)("appInvoice/getInvoiceItem",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/taskinvoiceitems/list",{invoiceId:t});case 2:return n=e.sent,e.abrupt("return",n.data.taskinvoiceitems);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=(Object(s.b)("appInvoice/getInvoiceTax",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/invoicetaxes/list",{invoiceId:t});case 2:return n=e.sent,e.abrupt("return",n.data.invoicetaxes);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(s.b)("appInvoice/getInvoiceItemTax",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/invoiceitemtaxes/list",{invoiceId:t});case 2:return n=e.sent,e.abrupt("return",n.data.invoiceitemtaxes);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(s.b)("appInvoice/updateInvoice",function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/taskinvoices/update",t);case 4:return c=e.sent,e.abrupt("return",{invoices:c.data.taskinvoices});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",a(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}())),v=Object(s.b)("appInvoice/updateInvoiceItems",function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/taskinvoiceitems/update",{rows:t});case 4:return c=e.sent,e.abrupt("return",{invoiceItems:c.data.taskinvoiceitems});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",a(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),x=Object(s.b)("appInvoice/getClient",function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/clients/get",{id:t});case 2:return n=e.sent,e.abrupt("return",n.data.clients);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(s.b)("appInvoice/deleteInvoice",function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.dispatch,c=n.getState,e.next=3,o.a.post("/taskinvoices/delete",{id:t,updatedBy:d});case 3:return e.next=5,a(u(c().invoice.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(s.b)("appInvoice/deleteInvoiceItem",function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(a.a)(n),e.next=3,o.a.post("/taskinvoiceitems/delete",{id:t,updatedBy:d});case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());Object(s.c)({name:"appInvoice",initialState:{data:[],total:1,params:{},allData:[],invoiceId:null,invoiceItems:[],selectedInvoice:null},reducers:{},extraReducers:function(e){e.addCase(u.fulfilled,(function(e,t){e.data=t.payload.data,e.allData=t.payload.allData,e.total=t.payload.totalPages,e.params=t.payload.params})),e.addCase(p.fulfilled,(function(e,t){e.invoiceId=t.payload.invoices.id})),e.addCase(f.fulfilled,(function(e,t){e.invoiceId=t.payload.invoices.id})),e.addCase(j.fulfilled,(function(e,t){e.invoiceItems=t.payload.invoiceItems})),e.addCase(v.fulfilled,(function(e,t){e.invoiceItems=t.payload.invoiceItems})),e.addCase(b.fulfilled,(function(e,t){e.selectedInvoice=t.payload.invoice}))}}).reducer}}]);
//# sourceMappingURL=60.058bdd8a.chunk.js.map