(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[69],{1667:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(17),i=c(4),s=c(18),r=c(2),l=c.n(r),o=c(1),d=c(5),u=c(520),j=c.n(u),b=c(896),m=c(817),p=c(928),f=c(509),x=c(507),O=c(521),v=c(522),h=c(91),g=c(6),N=c.n(g),y=c(140),I=c(506),w=(c(523),c(510),c(508),c(512),c(12)),A=c(667),C=c(11),S=c(132),k=c(133),F=c(13),z=Object(w.b)(),B=Object(w.a)(),P=Object(w.d)(),T=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],u=Object(o.useState)([]),g=Object(s.a)(u,2),w=g[0],T=g[1],L=Object(o.useState)([]),V=Object(s.a)(L,2),_=V[0],R=V[1],G=Object(o.useState)([]),q=Object(s.a)(G,2),E=q[0],D=q[1],H=Object(o.useState)([]),M=Object(s.a)(H,2),J=M[0],U=M[1],Y=Object(o.useState)(0),Z=Object(s.a)(Y,2),W=Z[0],$=Z[1],K=Object(o.useState)(0),Q=Object(s.a)(K,2),X=Q[0],ee=Q[1],te=Object(o.useState)([]),ce=Object(s.a)(te,2),ne=ce[0],ae=ce[1],ie=Object(o.useState)({}),se=Object(s.a)(ie,2),re=se[0],le=se[1],oe=Object(o.useState)([]),de=Object(s.a)(oe,2),ue=de[0],je=de[1],be=Object(o.useState)([]),me=Object(s.a)(be,2),pe=me[0],fe=me[1],xe=Object(o.useState)([]),Oe=Object(s.a)(xe,2),ve=Oe[0],he=Oe[1],ge=Object(o.useState)([]),Ne=Object(s.a)(ge,2),ye=Ne[0],Ie=Ne[1],we=Object(C.f)(),Ae=Object(k.b)(),Ce=Object(k.c)((function(e){return e.invoice}));Object(o.useEffect)((function(){d.a.post("/clients/dropdown").then((function(e){var t=e.data;r(t.clients)})),d.a.post("/services/dropdown").then((function(e){var t=e.data;T(t.services)})),d.a.post("/taxgroups/dropdown").then((function(e){var t=e.data;R(t.taxgroups)})),d.a.post("/exemptionreasons/dropdown").then((function(e){var t=e.data;Ie(t.exemptionreasons)})),d.a.post("/transactionaccounts/dropdown").then((function(e){var t=e.data;U(t.transactionaccounts)})),d.a.post("/states/list").then((function(e){var t=e.data;D(t.states)}))}),[]);var Se=function(){var e=Object(i.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(Object(y.f)(t));case 2:c=e.sent,le(c.payload);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=O.d().shape({createdBy:O.f().default(P),contactId:O.c().required("Please select a Client"),uniqueIdentity:O.f(),contactEmail:O.f(),contactName:O.f(),invoiceDate:O.c(),paymentDue:O.c(),placeOfSupplyId:O.c().required("Please select a Place Of Supply"),subTotalAmount:O.f(),totalAmount:O.f(),totalTaxAmount:O.f(),organizationId:O.c().default(z),isRcmApplicable:O.b().default(!1),dueAmount:O.f(),billingAddressLine1:O.f(),billingAddressLine2:O.f(),billingAddressState:O.f(),billingAddressCity:O.f(),billingAddressZipCode:O.f(),billingCurrencyId:O.c(),bankAccountBankName:O.f(),bankAccountBranchName:O.f(),bankAccountHolderName:O.f(),bankAccountId:O.f().required("Please Select Account"),bankAccountIfscCode:O.f(),bankAccountNumber:O.f(),organizationAddressLine1:O.f().default(B.addressline1),organizationAddressLine2:O.f().default(B.addressline2),organizationCity:O.f().default(B.organizationcity),organizationState:O.f().default(B.statename),organizationZipCode:O.f().default(B.pinzipcode),organizationName:O.f().default(B.name),organizationImageUrl:O.f().default(""),organizationStateCode:O.f().default(B.stateshortname),organizationGstin:O.f().default(B.gstin),gstin:O.f(),note:O.f().default("It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"),status:O.c().default(11),calculateTaxes:O.f(),paymentStatus:O.c().default(5),rows:O.a().of(O.d().shape({serviceId:O.c().required("Please Select Service Item"),invoiceId:O.c(),sacCode:O.f(),price:O.f(),organizationId:O.c().default(z),exemptionReasonId:O.c().nullable(),isTaxApplicable:O.b().default(!0),actualPrice:O.f().required(),taxGroupId:O.c().required("Pleace Select Tax"),subTotalAmount:O.f().required(1),taxes:O.f()}))}),Fe=Object(x.f)({resolver:Object(v.a)(ke),defaultValues:ke.cast()}),ze=Fe.handleSubmit,Be=Fe.formState.errors,Pe=Fe.control,Te=Fe.setValue,Le=Object(x.e)({control:Pe,name:"rows"}),Ve=Le.fields,_e=Le.append,Re=Le.remove,Ge=Le.update,qe=function(){var e=Object(i.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.rows,ae(c),delete t.rows,e.next=5,Ae(Object(y.a)(t));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne.forEach((function(e,c){ne[c].invoiceId=t})),e.next=3,Ae(Object(y.b)(ne));case 3:we("/invoice/view/".concat(Ce.invoiceId));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){_e({invoiceId:0,organizationId:z,serviceId:"",exemptionReasonId:0,isTaxApplicable:!0,sacCode:"",actualPrice:0,taxGroupId:"",subTotalAmount:0,taxPrice:0,description:""})};Object(o.useEffect)((function(){De()}),[]),Object(o.useEffect)(Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!==Ce.invoiceId&&ne.length>0)){e.next=3;break}return e.next=3,Ee(Ce.invoiceId);case 3:case"end":return e.stop()}}),e)}))),[Ce.invoiceId]);var He=function(){var e=Pe._formValues.rows,t=0,c=0,n=0;e.forEach((function(e){t=parseFloat(e.subTotalAmount)+parseFloat(t),c=parseFloat(e.price)+parseFloat(c),n=parseFloat(n)+parseFloat(e.taxPrice)})),Pe._formValues.subTotalAmount=c,Pe._formValues.totalAmount=t,Pe._formValues.dueAmount=t,Pe._formValues.totalTaxAmount=n,$(t),ee(c),function(){var e;e=Pe._formValues.rows.map((function(e){return Object(A.b)(e.taxes)})).flat().reduce((function(e,t){if(void 0!==t){var c=e.find((function(e){return t.taxName===e.taxName}));c?c.taxAmount=parseFloat(c.taxAmount)+parseFloat(t.taxAmount):e.push(Object.assign({},t))}return e}),[]),he(e),Te("calculateTaxes",JSON.stringify(e))}()},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=Pe._formValues.rows[e];if(void 0===s.serviceId||""===s.serviceId)return!1;var r=w.find((function(e){return e.id===s.serviceId}));i?(s.sacCode=r.saccode,s.actualPrice=0|r.sellingprice,s.price=0|String(r.sellingprice),s.taxGroupId=r.taxgroupid,s.description=r.description,s.exemptionReasonId=r.exemptionreasonid):(s.sacCode=n?s.sacCode:r.saccode,s.price=c?s.price:0|r.sellingprice,s.actualPrice=0|String(r.sellingprice),s.taxGroupId=a?s.taxGroupId:r.taxgroupid,s.description=t?s.description:r.description,s.exemptionReasonId=r.exemptionreasonid);var l=0,o=[],d=_.find((function(e){return e.id===s.taxGroupId}));s.isTaxApplicable=void 0!==d?!d.nontaxableflag:r.istaxapplicable,s.isTaxApplicable&&void 0!==d&&ue.forEach((function(e){if(e.taxid===s.taxGroupId){var t;t=Object(A.a)(s.price,e.percentage,2),l=parseFloat(l)+parseFloat(t);var c={};c.taxName="".concat(e.name," (").concat(e.percentage,"%)"),c.taxId=parseInt(e.id),c.taxNameValue=e.name,c.taxPercentage=String(e.percentage),c.taxAmount=String(t),o.push(c)}})),s.subTotalAmount=String(parseFloat(parseFloat(0|l)+parseFloat(0|s.price)).toFixed(2)),s.taxPrice=parseFloat(l).toFixed(2),s.taxes=JSON.stringify(o),s.createdBy=P,Ge(e,s),He()},Je=function(){var e=1;B.stateid===Pe._formValues.placeOfSupplyId&&(e=2),function(e){var t={type:e};d.a.post("/taxvalues/list",t).then((function(e){var t=e.data;je(t.taxvalues)}))}(e)};Object(o.useEffect)((function(){ue.length>0&&Pe._formValues.rows.forEach((function(e,t){Me(t,!1,!1,!1,!1,!1)}))}),[ue]);Object(o.useEffect)((function(){Object.keys(re).length>0&&(Te("billingAddressCity",re.billingaddresscity),Te("billingAddressLine1",re.billingaddressline1),Te("billingAddressLine2",re.billingaddressline1),Te("billingAddressState",re.billingaddressstatesname),Te("billingAddressZipCode",re.billingaddresszip),Te("billingCurrencyId",parseInt(re.currencyid)),Te("billingCurrencySymbol",re.currenciessymbol),Te("billingCurrencyShortName",re.currenciescode),Te("billingCurrencyName",re.currenciesname),Te("contactEmail",re.email),Te("gstin",re.gstin),Te("contactName",re.name),Te("placeOfSupplyId",re.placeofsupplyid),Je())}),[re]);return Object(F.jsx)("form",{onSubmit:ze(qe),children:Object(F.jsx)(h.jb,{className:"invoice-add",children:Object(F.jsxs)(o.Fragment,{children:[Object(F.jsx)(h.B,{xl:10,md:8,sm:12,children:Object(F.jsxs)(h.l,{className:"invoice-preview-card",children:[Object(F.jsxs)(h.m,{className:"invoice-padding pb-0",children:[function(){var e=Object.keys(Be),t=[];return Array.isArray(e)&&e.forEach((function(e){var c;"rows"!==e&&t.push(Object(F.jsxs)(h.I,{children:["$",null===(c=Be[e])||void 0===c?void 0:c.message]},e))})),t}(),Object(F.jsxs)("div",{className:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:"logo-wrapper",children:function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(F.jsx)(I.a,{color:t,className:"me-50",content:null!==e?e.charAt(0):""})}(B.name)}),Object(F.jsx)("h3",{className:"text-primary invoice-logo",children:B.name}),Object(F.jsx)("p",{className:"card-text mb-25",children:B.addressline1}),Object(F.jsx)("p",{className:"card-text mb-25",children:B.addressline2}),Object(F.jsxs)("p",{className:"card-text mb-0",children:[B.organizationcity," - ",B.pinzipcode]}),Object(F.jsx)("p",{className:"card-text mb-0",children:B.statename})]}),Object(F.jsxs)("div",{className:"invoice-number-date mt-md-0 mt-2",children:[Object(F.jsxs)("div",{className:"d-flex align-items-center justify-content-md-end mb-1",children:[Object(F.jsx)("h4",{className:"invoice-title",children:"Invoice"}),Object(F.jsxs)(h.M,{className:"input-group-merge invoice-edit-input-group disabled",children:[Object(F.jsx)(h.N,{children:Object(F.jsx)(b.a,{size:15})}),Object(F.jsx)(h.L,{type:"number",className:"invoice-edit-input",value:3171,placeholder:"53634",disabled:!0})]})]}),Object(F.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(F.jsx)("span",{className:"title",children:"Invoice Date:"}),Object(F.jsx)(x.a,{control:Pe,name:"invoiceDate",id:"invoiceDate",render:function(e){var t=e.field;return Object(F.jsx)(j.a,{value:t.value,onChange:function(e,c){t.onChange(c)},options:{altInput:!0,altFormat:"M j, Y",dateFormat:"U"},className:"form-control invoice-edit-input date-picker"})}})]}),Object(F.jsxs)("div",{className:"d-flex align-items-center",children:[Object(F.jsx)("span",{className:"title",children:"Due Date:"}),Object(F.jsx)(x.a,{control:Pe,name:"paymentDue",id:"paymentDue",render:function(e){var t=e.field;return Object(F.jsx)(j.a,{value:t.value,onChange:function(e,c){t.onChange(c)},options:{altInput:!0,altFormat:"M j, Y",dateFormat:"U"},className:"form-control invoice-edit-input due-date-picker"})}})]})]})]})]}),Object(F.jsx)("hr",{className:"invoice-spacing"}),Object(F.jsxs)(h.m,{className:"invoice-padding pt-0",children:[Object(F.jsxs)(h.jb,{className:"row-bill-to invoice-spacing",children:[Object(F.jsxs)(h.B,{className:"col-bill-to ps-0",xl:"6",children:[Object(F.jsx)("h6",{className:"invoice-to-title",children:"Invoice To:"}),Object(F.jsx)("div",{className:"invoice-customer",children:Object(F.jsx)(x.a,{control:Pe,name:"contactId",id:"contactId",render:function(e){var t=e.field,n=e.ref;return Object(F.jsx)(f.a,Object(a.a)(Object(a.a)({inputRef:n,className:N()("react-select",{"is-invalid":Be.contactId})},t),{},{classNamePrefix:"select",options:c,value:c.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Se(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})}),Object(F.jsx)(h.B,{className:"pe-0 mt-xl-2",xl:"4",children:Object(F.jsx)("table",{children:Object(F.jsxs)("tbody",{children:[Object(F.jsx)("tr",{children:Object(F.jsx)("td",{children:re.billingaddressline1})}),Object(F.jsx)("tr",{children:Object(F.jsx)("td",{children:re.billingaddressline2})}),Object(F.jsx)("tr",{children:Object(F.jsxs)("td",{children:[re.billingaddresscity," ",re.billingaddresszip&&"-","  ",re.billingaddresszip]})}),Object(F.jsx)("tr",{children:Object(F.jsx)("td",{children:re.billingaddressstatesname})})]})})})]}),Object(F.jsx)(h.B,{className:"col-bill-to ps-0",xl:"2"}),Object(F.jsxs)(h.B,{className:"pe-0 mt-xl-0 mt-2",xl:"4",children:[Object(F.jsx)("h6",{className:"mb-2",children:"Payment Details:"}),Object(F.jsx)("table",{children:Object(F.jsxs)("tbody",{children:[Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"pe-1",children:"Bank Name:"}),Object(F.jsx)("td",{children:pe.bankName&&Object(F.jsx)("span",{className:"fw-bolder",children:pe.bankName})})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"pe-1",children:"Account name:"}),Object(F.jsx)("td",{children:pe.accountHolderName&&Object(F.jsx)("span",{className:"fw-bolder",children:pe.accountHolderName})})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"pe-1",children:"Branch Name:"}),Object(F.jsxs)("td",{children:[" ",pe.branchAddress&&Object(F.jsx)("span",{className:"fw-bolder",children:pe.branchAddress})]})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"pe-1",children:"IFSC Code:"}),Object(F.jsx)("td",{children:pe.ifscCode&&Object(F.jsxs)("span",{className:"fw-bolder",children:[pe.ifscCode," "]})})]}),re.currenciescode&&Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"pe-1",children:"Currency code:"}),Object(F.jsx)("td",{children:re.currenciescode})]})]})})]})]}),Object(F.jsxs)(h.jb,{className:"row-bill-to invoice-spacing",children:[Object(F.jsxs)(h.B,{className:"col-bill-to ps-0",xl:"6",children:[Object(F.jsx)("h6",{className:"invoice-to-title mt-2",children:"Place Of Supply:"}),Object(F.jsx)("div",{className:"invoice-customer",children:Object(F.jsx)(x.a,{control:Pe,name:"placeOfSupplyId",id:"placeOfSupplyId",render:function(e){var t=e.field,c=e.ref;return Object(F.jsx)(f.a,Object(a.a)(Object(a.a)({inputRef:c,className:N()("react-select",{"is-invalid":Be.placeOfSupplyId})},t),{},{classNamePrefix:"select",options:E,value:E.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),Je()},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})}),""!==re.gstin&&void 0!==re.gstin&&Object(F.jsxs)("div",{className:"mt-1",children:[" GSTIN : ",re.gstin]})]}),Object(F.jsx)(h.B,{className:"col-bill-to ps-0",xl:"2"}),Object(F.jsx)(h.B,{className:"pe-0 mt-xl-0 mt-2",xl:"4",children:Object(F.jsx)("table",{children:Object(F.jsx)("tbody",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"pe-1",children:"RCM Applicable:"}),Object(F.jsx)("td",{children:Object(F.jsx)("div",{className:"form-switch form-check-success",children:Object(F.jsx)(x.a,{control:Pe,name:"isRcmApplicable",id:"isRcmApplicable",render:function(e){return Object(n.a)(e),Object(F.jsx)(h.L,{type:"switch",id:"switch-success"})}})})})]})})})})]})]}),Object(F.jsxs)(h.m,{className:"invoice-padding invoice-product-details",children:[Ve.map((function(e,t){var c,n,i,s,r,l,o,d,u,j,b,p,O,v,g,y;return Object(F.jsx)("div",{className:"repeater-wrapper",children:Object(F.jsx)(h.jb,{children:Object(F.jsxs)(h.B,{className:"d-lg-flex product-details-border position-relative pe-0",sm:"12",children:[Object(F.jsxs)(h.jb,{className:"w-100 pe-lg-0 pe-1 py-2",children:[Object(F.jsxs)(h.B,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-4 col-sm-12",children:[Object(F.jsx)(h.u,{className:"col-title mb-md-50 mb-0",children:"Item"}),Object(F.jsx)(x.a,{control:Pe,name:"rows[".concat(t,"].serviceId"),rules:{required:!0},render:function(e){var c,n,i=e.field,s=e.ref;return Object(F.jsx)(f.a,Object(a.a)(Object(a.a)({},i),{},{inputRef:s,className:N()("react-select",{"is-invalid":null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.serviceId}),classNamePrefix:"select",options:w,value:w.find((function(e){return e.id===i.value})),onChange:function(e){i.onChange(e.id),Me(t,!1,!1,!1,!1,!0)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.serviceId)&&Object(F.jsx)(h.I,{children:null===(i=Be.rows)||void 0===i||null===(s=i[t])||void 0===s?void 0:s.serviceId.message}),Object(F.jsx)(x.a,{id:"rows_".concat(t,"_description"),name:"rows[".concat(t,"].description"),control:Pe,render:function(e){var c,n,i=e.field;return Object(F.jsx)(h.L,Object(a.a)({className:"mt-1",invalid:(null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.description)&&!0,onInput:function(e){i.onChange(e),Me(t,!0,!1,!1,!1,!1)}},i))}})]}),Object(F.jsxs)(h.B,{className:"my-lg-0 my-2 col-lg-2 col-sm-12",children:[Object(F.jsx)(h.u,{className:"col-title mb-md-2 mb-0",children:"SAC Code"}),Object(F.jsx)(x.a,{id:"rows_".concat(t,"_sacCode"),name:"rows[".concat(t,"].sacCode"),control:Pe,render:function(e){var c,n,i=e.field;return Object(F.jsx)(h.L,Object(a.a)({type:"text",invalid:(null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.sacCode)&&!0,onInput:function(e){i.onChange(e),Me(t,!1,!0,!0,!1,!1)}},i))}}),(null===(r=Be.rows)||void 0===r||null===(l=r[t])||void 0===l?void 0:l.sacCode)&&Object(F.jsx)(h.I,{children:null===(o=Be.rows)||void 0===o||null===(d=o[t])||void 0===d?void 0:d.sacCode.message})]}),Object(F.jsxs)(h.B,{className:"my-lg-0 my-2",lg:"2",sm:"12",children:[Object(F.jsx)(h.u,{className:"col-title mb-md-2 mb-0",children:"Price"}),Object(F.jsx)(x.a,{id:"rows_".concat(t,"_price"),name:"rows[".concat(t,"].price"),control:Pe,render:function(e){var c,n,i=e.field;return Object(F.jsx)(h.L,Object(a.a)(Object(a.a)({type:"number",id:"input_rows_".concat(t,"_price"),onInput:function(e){i.onChange(e),console.log(e),Me(t,!1,!0,!1,!1,!1)}},i),{},{invalid:(null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.price)&&!0}))}}),(null===(u=Be.rows)||void 0===u||null===(j=u[t])||void 0===j?void 0:j.price)&&Object(F.jsx)(h.I,{children:null===(b=Be.rows)||void 0===b||null===(p=b[t])||void 0===p?void 0:p.price.message})]}),Object(F.jsxs)(h.B,{className:"my-lg-0 mt-2",lg:"2",sm:"12",children:[Object(F.jsx)(h.u,{className:"col-title mb-md-50 mb-0",children:"Tax Rate"}),Object(F.jsx)(x.a,{control:Pe,name:"rows[".concat(t,"].taxGroupId"),rules:{required:!0},render:function(e){var c,n,i=e.field,s=e.ref;return Object(F.jsx)(f.a,Object(a.a)(Object(a.a)({},i),{},{inputRef:s,className:N()("react-select",{"is-invalid":null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.taxGroupId}),classNamePrefix:"select",options:_,value:_.find((function(e){return e.id===i.value})),onChange:function(e){i.onChange(e.id),Me(t,!1,!0,!1,!0,!1)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),(null===(O=Be.rows)||void 0===O||null===(v=O[t])||void 0===v?void 0:v.taxGroupId)&&Object(F.jsx)(h.I,{children:null===(g=Be.rows)||void 0===g||null===(y=g[t])||void 0===y?void 0:y.taxGroupId.message}),!e.isTaxApplicable&&Object(F.jsx)(x.a,{control:Pe,name:"rows[".concat(t,"].exemptionReasonId"),rules:{required:!0},render:function(e){var c,n,i=e.field,s=e.ref;return Object(F.jsx)(f.a,Object(a.a)(Object(a.a)({},i),{},{inputRef:s,className:N()("react-select mt-1",{"is-invalid":null===(c=Be.rows)||void 0===c||null===(n=c[t])||void 0===n?void 0:n.taxGroupId}),classNamePrefix:"select",options:ye,value:ye.find((function(e){return e.id===i.value})),onChange:function(e){i.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}})]}),Object(F.jsxs)(h.B,{className:"my-lg-0 mt-2",lg:"1",sm:"12",children:[Object(F.jsx)(h.u,{className:"col-title mb-md-50 mb-0",children:"Amount"}),e.subTotalAmount]})]}),Object(F.jsx)("div",{className:"d-lg-flex justify-content-center border-start invoice-product-actions py-50 px-25",children:Object(F.jsx)(m.a,{size:18,className:"cursor-pointer",onClick:function(){Re(t),He()}})})]})})},e.id)})),Object(F.jsx)(h.jb,{className:"mt-1",children:Object(F.jsx)(h.B,{sm:"12",className:"px-0",children:Object(F.jsxs)(h.i,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){return De()},children:[Object(F.jsx)(p.a,{size:14,className:"me-25"})," ",Object(F.jsx)("span",{className:"align-middle",children:"Add Item"})]})})})]}),Object(F.jsx)(h.m,{className:"invoice-padding",children:Object(F.jsxs)(h.jb,{className:"invoice-sales-total-wrapper",children:[Object(F.jsx)(h.B,{className:"mt-md-0 mt-3",md:{size:"6",order:1},xs:{size:12,order:2}}),Object(F.jsx)(h.B,{className:"d-flex justify-content-end",md:{size:"6",order:2},xs:{size:12,order:1},children:Object(F.jsxs)("div",{className:"invoice-total-wrapper",children:[Object(F.jsxs)("div",{className:"invoice-total-item",children:[Object(F.jsx)("p",{className:"invoice-total-title",children:"Pre Tax Amount:"}),Object(F.jsx)("p",{className:"invoice-total-amount",children:X})]}),ve.map((function(e,t){return Object(F.jsxs)("div",{className:"invoice-total-item",children:[Object(F.jsx)("p",{className:"invoice-total-title",children:null===e||void 0===e?void 0:e.taxName}),Object(F.jsx)("p",{className:"invoice-total-amount",children:null===e||void 0===e?void 0:e.taxAmount})]},t)})),Object(F.jsx)("hr",{className:"my-50"}),Object(F.jsxs)("div",{className:"invoice-total-item",children:[Object(F.jsx)("p",{className:"invoice-total-title",children:"Total Payable:"}),Object(F.jsx)("p",{className:"invoice-total-amount",children:W})]})]})})]})}),Object(F.jsx)("hr",{className:"invoice-spacing mt-0"}),Object(F.jsx)(h.m,{className:"invoice-padding py-0",children:Object(F.jsx)(h.jb,{children:Object(F.jsx)(h.B,{children:Object(F.jsxs)("div",{className:"mb-2",children:[Object(F.jsx)(h.O,{for:"note",className:"form-label fw-bold",children:"Note:"}),Object(F.jsx)(x.a,{id:"note",name:"note",control:Pe,render:function(e){var t=e.field;return Object(F.jsx)(h.L,Object(a.a)({type:"textarea",value:t.value,invalid:Be.note&&!0},t))}})]})})})})]})}),Object(F.jsxs)(h.B,{xl:2,md:4,sm:12,children:[Object(F.jsx)(h.l,{className:"invoice-action-wrapper",children:Object(F.jsxs)(h.m,{children:[Object(F.jsx)(h.i,{color:"primary",type:"submit",block:!0,outline:!0,className:"mb-75",children:"Save"}),Object(F.jsx)(h.i,{color:"warning",block:!0,outline:!0,tag:S.b,to:"/invoice/list",children:"Cancel"})]})}),Object(F.jsx)("div",{className:"mt-2",children:Object(F.jsxs)("div",{className:"invoice-payment-option",children:[Object(F.jsx)("p",{className:"mb-50",children:"Accept payments via"}),Object(F.jsx)(x.a,{control:Pe,name:"bankAccountId",rules:{required:!0},render:function(e){var t=e.field,c=e.ref;return Object(F.jsx)(f.a,Object(a.a)(Object(a.a)({},t),{},{inputRef:c,className:N()("react-select mt-1",{"is-invalid":Be.bankAccountId}),classNamePrefix:"select",options:J,value:J.find((function(e){return e.id===t.value})),onChange:function(e){t.onChange(e.id),function(e){var t=J.find((function(t){return t.id===e}));fe(t),Te("bankAccountBankName",t.bankName),Te("bankAccountBranchName",t.branchAddress),Te("bankAccountHolderName",t.accountHolderName),Te("bankAccountId",t.id),Te("bankAccountIfscCode",t.ifscCode),Te("bankAccountNumber",t.accountNumber)}(e.id)},getOptionLabel:function(e){return e.accountHolderName},getOptionValue:function(e){return e.id}}))}})]})})]})]})})})};t.default=function(){return Object(F.jsx)("div",{className:"invoice-add-wrapper",children:Object(F.jsx)(T,{})})}},508:function(e,t,c){},512:function(e,t,c){},523:function(e,t,c){},667:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}));var n=function(e,t,c){var n=0;return 1===c?n=parseFloat(e)-parseFloat(e)*(100/(100+parseFloat(t))):2===c&&(n=parseFloat(e)*parseFloat(t)/100),parseFloat(n)},a=function(e){return JSON.parse(e.replace(/\\/g,""))}}}]);
//# sourceMappingURL=69.485e7583.chunk.js.map