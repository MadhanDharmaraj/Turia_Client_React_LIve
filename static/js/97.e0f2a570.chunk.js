(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[97],{1652:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a(18),s=a(2),i=a.n(s),r=a(1),l=a(10),o=a(132),d=a(5),j=a(91),b=a(528),u=a.n(b),p=a(133),m=a(618),h=a(603),x=a(505),O=a(12),v=function(e){var t=e.data,a=Object(l.g)().id,s=Object(p.b)(),o=Object(r.useState)([]),d=Object(n.a)(o,2),b=d[0],v=d[1],f=Object(r.useState)([]),N=Object(n.a)(f,2),g=N[0],y=N[1],w=function(e){return u.a.unix(e).format("MMM DD, YYYY")};return Object(r.useEffect)(Object(c.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(Object(h.b)(t.calculatetaxes)),e.next=3,s(Object(m.g)(a));case 3:c=e.sent,v(c.payload);case 5:case"end":return e.stop()}}),e)}))),[t]),null!==t?Object(O.jsxs)(j.l,{className:"invoice-preview-card",children:[Object(O.jsx)(j.m,{className:"invoice-padding pb-0",children:Object(O.jsxs)("div",{className:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",children:[Object(O.jsxs)("div",{lg:6,children:[Object(O.jsxs)("div",{className:"logo-wrapper",children:[function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(O.jsx)(x.a,{color:t,className:"me-50",content:null!==e?e.charAt(0):""})}(t.organizationname),Object(O.jsx)("h3",{className:"text-primary invoice-logo",children:t.organizationname})]}),Object(O.jsx)(j.u,{className:"mb-25",children:t.organizationaddressline1}),Object(O.jsx)(j.u,{className:"mb-25",children:t.organizationaddressline2}),Object(O.jsxs)(j.u,{className:"mb-0",children:[t.organizationcity," - ",t.organizationzipcode]}),Object(O.jsx)(j.u,{className:"mb-0",children:t.organizationstate}),Object(O.jsxs)(j.u,{className:"mb-0",children:["GSTIN - ",t.organizationgstin," \xa0\xa0 State Code : ",t.organizationgstin.substr(0,2)]})]}),Object(O.jsxs)("div",{lg:6,className:"mt-md-0 mt-2",children:[Object(O.jsxs)("h4",{className:"invoice-title",children:["Proposal ",Object(O.jsx)("span",{className:"invoice-number",children:t.uniqueno})]}),Object(O.jsxs)("div",{className:"invoice-date-wrapper",children:[Object(O.jsx)("p",{className:"invoice-date-title",children:"Date Issued:"}),Object(O.jsx)("p",{className:"invoice-date",children:w(t.invoicedate)})]}),Object(O.jsxs)("div",{className:"invoice-date-wrapper",children:[Object(O.jsx)("p",{className:"invoice-date-title",children:"Due Date:"}),Object(O.jsx)("p",{className:"invoice-date",children:w(t.paymentdue)})]})]})]})}),Object(O.jsx)("hr",{className:"invoice-spacing"}),Object(O.jsxs)(j.m,{className:"invoice-padding pt-0",children:[Object(O.jsxs)(j.jb,{className:"invoice-spacing",children:[Object(O.jsxs)(j.B,{className:"p-0",xl:"8",children:[Object(O.jsx)("h6",{className:"mb-2",children:"Invoice To:"}),Object(O.jsx)("h6",{className:"mb-25",children:t.contactname}),Object(O.jsx)(j.u,{className:"mb-25",children:t.billingaddressline1}),Object(O.jsx)(j.u,{className:"mb-25",children:t.billingaddressline2}),Object(O.jsxs)(j.u,{className:"mb-25",children:[t.billingaddresscity," - ",t.billingaddresszipcode]}),Object(O.jsx)(j.u,{className:"mb-25",children:t.billingaddressstate}),Object(O.jsxs)(j.u,{className:"mb-25",children:["GSTIN - ",t.gstin]})]}),Object(O.jsxs)(j.B,{className:"p-0 mt-xl-0 mt-2",xl:"4",children:[Object(O.jsx)("h6",{className:"mb-2",children:"Payment Details:"}),Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"pe-1",children:"Total Due:"}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"fw-bold",children:t.dueamount})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"pe-1",children:"Bank name:"}),Object(O.jsx)("td",{children:t.bankaccountbankname})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"pe-1",children:"Account Name:"}),Object(O.jsx)("td",{children:t.bankaccountholdername})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"pe-1",children:"Branch Name:"}),Object(O.jsx)("td",{children:t.bankaccountbranchname})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"pe-1",children:"IFSC code:"}),Object(O.jsx)("td",{children:t.bankaccountifsccode})]})]})})]})]}),Object(O.jsxs)(j.jb,{className:"invoice-spacing",children:[Object(O.jsxs)(j.B,{className:"p-0",xl:"8",children:[Object(O.jsxs)(j.u,{className:"mb-25",children:["Place Of Supply: ",t.billingaddressstate]}),Object(O.jsxs)(j.u,{className:"mb-25",children:["State: ",t.billingaddressstate," \xa0\xa0State Code: 29 "]})]}),Object(O.jsx)(j.B,{className:"p-0 mt-xl-0 mt-2",xl:"4",children:Object(O.jsx)("table",{children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"pe-1",children:"Currency code: "}),Object(O.jsx)("td",{children:t.billingcurrencyshortname})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"pe-1",children:"RCM Applicable:"}),Object(O.jsx)("td",{children:t.isrcmapplicable?"Yes":"No"})]})]})})})]})]}),Object(O.jsxs)(j.nb,{responsive:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"py-1",children:"Item"}),Object(O.jsx)("th",{className:"py-1",children:"SAC Code"}),Object(O.jsx)("th",{className:"py-1",children:"Price"}),Object(O.jsx)("th",{className:"py-1",children:"Tax"}),Object(O.jsx)("th",{className:"py-1",children:"Total"})]})}),Object(O.jsx)("tbody",{children:b.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:"py-1",children:[Object(O.jsx)("p",{className:"card-text fw-bold mb-25",children:e.servicesName}),Object(O.jsx)("p",{className:"card-text text-nowrap",children:e.description})]}),Object(O.jsx)("td",{className:"py-1",children:Object(O.jsx)("span",{className:"fw-bold",children:e.sacCode})}),Object(O.jsx)("td",{className:"py-1",children:Object(O.jsx)("span",{className:"fw-bold",children:e.price})}),Object(O.jsx)("td",{className:"py-1",children:Object(O.jsxs)("span",{className:"fw-bold",children:["true"===e.isTaxApplicable&&Object(h.b)(e.taxes).map((function(e,t){return Object(O.jsx)(j.jb,{children:Object(O.jsxs)("span",{children:[e.taxName," - ",e.taxAmount]})},t)})),"false"===e.isTaxApplicable&&Object(O.jsxs)(j.jb,{children:[Object(O.jsx)("span",{children:e.taxGroupName}),Object(O.jsx)("span",{children:e.exemptionReasonName})]})]})}),Object(O.jsx)("td",{className:"py-1",children:Object(O.jsx)("span",{className:"fw-bold",children:e.subTotalAmount})})]},t)}))})]}),Object(O.jsx)(j.m,{className:"invoice-padding pb-0",children:Object(O.jsxs)(j.jb,{className:"invoice-sales-total-wrapper",children:[Object(O.jsx)(j.B,{className:"mt-md-0 mt-3",md:"6",order:{md:1,lg:2}}),Object(O.jsx)(j.B,{className:"d-flex justify-content-end",md:"6",order:{md:2,lg:1},children:Object(O.jsxs)("div",{className:"invoice-total-wrapper",children:[Object(O.jsxs)("div",{className:"invoice-total-item",children:[Object(O.jsx)("p",{className:"invoice-total-title",children:"Total Payable:"}),Object(O.jsx)("p",{className:"invoice-total-amount",children:t.totalamount})]}),Object(O.jsxs)("div",{className:"invoice-total-item",children:[Object(O.jsx)("p",{className:"invoice-total-title",children:"Pre Tax Amount:"}),Object(O.jsx)("p",{className:"invoice-total-amount",children:t.subtotalamount})]}),g.length>0&&g.map((function(e,t){return Object(O.jsxs)("div",{className:"invoice-total-item",children:[Object(O.jsx)("p",{className:"invoice-total-title",children:e.taxName}),Object(O.jsx)("p",{className:"invoice-total-amount",children:e.taxAmount})]},t)})),Object(O.jsx)("hr",{className:"my-50"}),Object(O.jsxs)("div",{className:"invoice-total-item",children:[Object(O.jsx)("p",{className:"invoice-total-title",children:"Balance Due:"}),Object(O.jsx)("p",{className:"invoice-total-amount",children:t.dueamount})]})]})})]})}),Object(O.jsx)("hr",{className:"invoice-spacing"}),Object(O.jsx)(j.m,{className:"invoice-padding pt-0",children:Object(O.jsx)(j.jb,{children:Object(O.jsxs)(j.B,{sm:"12",children:[Object(O.jsx)("span",{className:"fw-bold",children:"Note: "}),Object(O.jsx)("span",{children:t.note})]})})})]}):null},f=function(e){var t=e.id,a=e.setSendSidebarOpen;return Object(O.jsx)(j.l,{className:"invoice-action-wrapper",children:Object(O.jsxs)(j.m,{children:[Object(O.jsx)(j.i,{color:"primary",block:!0,className:"mb-75",onClick:function(){return a(!0)},children:"Send Proposal"}),Object(O.jsx)(j.i,{color:"secondary",block:!0,outline:!0,className:"mb-75",children:"Download"}),Object(O.jsx)(j.i,{color:"secondary",tag:o.b,to:"/prposal/print",target:"_blank",block:!0,outline:!0,className:"mb-75",children:"Print"}),Object(O.jsx)(j.i,{tag:o.b,to:"/proposal/edit/".concat(t),color:"secondary",block:!0,outline:!0,className:"mb-75",children:"Edit"})]})})},N=a(617),g=a(916),y=function(e){var t=e.open,a=e.toggleSidebar;return Object(O.jsx)(N.a,{size:"lg",open:t,title:"Send Invoice",headerClassName:"mb-1",contentClassName:"p-0",bodyClassName:"pb-sm-0 pb-3",toggleSidebar:a,children:Object(O.jsxs)(j.H,{children:[Object(O.jsxs)("div",{className:"mb-1",children:[Object(O.jsx)(j.O,{for:"invoice-from",className:"form-label",children:"From"}),Object(O.jsx)(j.L,{id:"invoice-from",defaultValue:"shelbyComapny@email.com",placeholder:"company@email.com"})]}),Object(O.jsxs)("div",{className:"mb-1",children:[Object(O.jsx)(j.O,{for:"invoice-to",className:"form-label",children:"To"}),Object(O.jsx)(j.L,{id:"invoice-to",defaultValue:"qConsolidated@email.com",placeholder:"company@email.com"})]}),Object(O.jsxs)("div",{className:"mb-1",children:[Object(O.jsx)(j.O,{for:"invoice-subject",className:"form-label",children:"Subject"}),Object(O.jsx)(j.L,{id:"invoice-subject",defaultValue:"Invoice of purchased Admin Templates",placeholder:"Invoice regarding goods"})]}),Object(O.jsxs)("div",{className:"mb-1",children:[Object(O.jsx)(j.O,{for:"invoice-message",className:"form-label",children:"Message"}),Object(O.jsx)(j.L,{type:"textarea",cols:"3",rows:"11",id:"invoice-message",defaultValue:"Dear Queen Consolidated,\n\nThank you for your business, always a pleasure to work with you!\n\nWe have generated a new invoice in the amount of $95.59\n\nWe would appreciate payment of this invoice by 05/11/2019"})]}),Object(O.jsx)("div",{className:"mb-1",children:Object(O.jsxs)(j.f,{color:"light-primary",children:[Object(O.jsx)(g.a,{className:"me-50",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Invoice Attached"})]})}),Object(O.jsxs)("div",{className:"d-flex flex-wrap mt-2",children:[Object(O.jsx)(j.i,{className:"me-1",color:"primary",onClick:a,children:"Send"}),Object(O.jsx)(j.i,{color:"secondary",outline:!0,onClick:a,children:"Cancel"})]})]})})},w=(a(512),a(835));t.default=function(){var e=Object(l.g)().id,t=Object(r.useState)(!1),a=Object(n.a)(t,2),s=a[0],b=a[1],u=Object(r.useState)(null),p=Object(n.a)(u,2),m=p[0],h=p[1],x=Object(r.useState)("1"),N=Object(n.a)(x,2),g=N[0],k=N[1],I=function(){var t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.a.post("/taskinvoices/get",{id:e}).then((function(e){h(e.data.taskinvoices)})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){I()}),[]);return null!==m&&void 0!==m?Object(O.jsxs)("div",{className:"invoice-preview-wrapper",children:[Object(O.jsxs)(j.jb,{className:"invoice-preview",children:[Object(O.jsxs)(j.B,{xl:10,md:8,sm:12,children:[Object(O.jsx)(j.V,{pills:!0,className:"mb-2",children:Object(O.jsx)(j.W,{children:Object(O.jsxs)(j.X,{active:"1"===g,onClick:function(){var e;g!==(e="1")&&k(e)},children:[Object(O.jsx)(w.a,{className:"font-medium-3 me-50"}),Object(O.jsx)("span",{className:"fw-bold",children:"Proposal"})]})})}),Object(O.jsx)(j.lb,{activeTab:g,children:Object(O.jsx)(j.mb,{tabId:"1",children:Object(O.jsx)(v,{data:m,tabId:g})})})]}),Object(O.jsx)(j.B,{xl:2,md:4,sm:12,children:Object(O.jsx)(f,{id:e,setSendSidebarOpen:b})})]}),Object(O.jsx)(y,{toggleSidebar:function(){return b(!s)},open:s})]}):Object(O.jsxs)(j.e,{color:"danger",children:[Object(O.jsx)("h4",{className:"alert-heading",children:"Proposal not found"}),Object(O.jsxs)("div",{className:"alert-body",children:["Proposal with id: ",e," doesn't exist. Check list of all Proposal:"," ",Object(O.jsx)(o.b,{to:"/Proposal/list",children:"Proposal List"})]})]})}},512:function(e,t,a){},603:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return n}));var c=function(e,t,a){var c=0;return 1===a?c=parseFloat(e)-parseFloat(e)*(100/(100+parseFloat(t))):2===a&&(c=parseFloat(e)*parseFloat(t)/100),parseFloat(c)},n=function(e){return JSON.parse(e.replace(/\\/g,""))}},617:function(e,t,a){"use strict";var c=a(17),n=a(31),s=a(134),i=a(828),r=a(6),l=a.n(r),o=a(547),d=a.n(o),j=a(91),b=a(12),u=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"];t.a=function(e){var t,a=e.open,r=e.size,o=e.title,p=e.width,m=e.children,h=e.closeBtn,x=e.className,O=e.toggleSidebar,v=e.bodyClassName,f=e.contentClassName,N=e.wrapperClassName,g=e.headerClassName,y=Object(s.a)(e,u),w=h||Object(b.jsx)(i.a,{className:"cursor-pointer",size:15,onClick:O});return Object(b.jsxs)(j.R,Object(c.a)(Object(c.a)(Object(c.a)({isOpen:a,toggle:O,contentClassName:l()("overflow-hidden",Object(n.a)({},f,f)),modalClassName:l()("modal-slide-in",Object(n.a)({},N,N)),className:l()((t={},Object(n.a)(t,x,x),Object(n.a)(t,"sidebar-lg","lg"===r),Object(n.a)(t,"sidebar-sm","sm"===r),t))},void 0!==p?{style:{width:String(p)+"px"}}:{}),y),{},{children:[Object(b.jsx)(j.U,{className:l()(Object(n.a)({},g,g)),toggle:O,close:w,tag:"div",children:Object(b.jsx)("h5",{className:"modal-title",children:Object(b.jsx)("span",{className:"align-middle",children:o})})}),Object(b.jsx)(d.a,{options:{wheelPropagation:!1},children:Object(b.jsx)(j.S,{className:l()("flex-grow-1",Object(n.a)({},v,v)),children:m})})]}))}},618:function(e,t,a){"use strict";a.d(t,"f",(function(){return j})),a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u})),a.d(t,"g",(function(){return m})),a.d(t,"h",(function(){return h})),a.d(t,"i",(function(){return x})),a.d(t,"e",(function(){return O})),a.d(t,"c",(function(){return v})),a.d(t,"d",(function(){return f}));var c=a(11),n=a(4),s=a(2),i=a.n(s),r=a(3),l=a(5),o=a(15),d=Object(o.d)(),j=Object(r.b)("appInvoice/getData",function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/taskinvoices/list",t);case 2:return a=e.sent,e.abrupt("return",{params:t,data:a.data.taskinvoices.taskinvoices,totalPages:a.data.taskinvoices.total});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(r.b)("appInvoice/addInvoice",function(){var e=Object(n.a)(i.a.mark((function e(t,a){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.rejectWithValue,e.prev=1,e.next=4,l.a.post("/taskinvoices/create",t);case 4:return n=e.sent,e.abrupt("return",{invoices:n.data.taskinvoices});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",c(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),u=Object(r.b)("appInvoice/addInvoiceItems",function(){var e=Object(n.a)(i.a.mark((function e(t,a){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.rejectWithValue,e.prev=1,e.next=4,l.a.post("/taskinvoiceitems/create",{rows:t});case 4:return n=e.sent,e.abrupt("return",{invoiceItems:n.data.taskinvoiceitems});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",c(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(r.b)("appInvoice/getInvoice",function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/taskinvoices/get",{id:t});case 2:return a=e.sent,e.abrupt("return",{invoice:a.data.taskinvoices});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(r.b)("appInvoice/getInvoiceItem",function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/taskinvoiceitems/list",{invoiceId:t});case 2:return a=e.sent,e.abrupt("return",a.data.taskinvoiceitems);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=(Object(r.b)("appInvoice/getInvoiceTax",function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/invoicetaxes/list",{invoiceId:t});case 2:return a=e.sent,e.abrupt("return",a.data.invoicetaxes);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(r.b)("appInvoice/getInvoiceItemTax",function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/invoiceitemtaxes/list",{invoiceId:t});case 2:return a=e.sent,e.abrupt("return",a.data.invoiceitemtaxes);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(r.b)("appInvoice/updateInvoice",function(){var e=Object(n.a)(i.a.mark((function e(t,a){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.rejectWithValue,e.prev=1,e.next=4,l.a.post("/taskinvoices/update",t);case 4:return n=e.sent,e.abrupt("return",{invoices:n.data.taskinvoices});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",c(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}())),x=Object(r.b)("appInvoice/updateInvoiceItems",function(){var e=Object(n.a)(i.a.mark((function e(t,a){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.rejectWithValue,e.prev=1,e.next=4,l.a.post("/taskinvoiceitems/update",{rows:t});case 4:return n=e.sent,e.abrupt("return",{invoiceItems:n.data.taskinvoiceitems});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",c(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),O=Object(r.b)("appInvoice/getClient",function(){var e=Object(n.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/clients/get",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.clients);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(r.b)("appInvoice/deleteInvoice",function(){var e=Object(n.a)(i.a.mark((function e(t,a){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.dispatch,n=a.getState,e.next=3,l.a.post("/taskinvoices/delete",{id:t,updatedBy:d});case 3:return e.next=5,c(j(n().invoice.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),f=Object(r.b)("appInvoice/deleteInvoiceItem",function(){var e=Object(n.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.a)(a),e.next=3,l.a.post("/taskinvoiceitems/delete",{id:t,updatedBy:d});case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());Object(r.c)({name:"appInvoice",initialState:{data:[],total:1,params:{},allData:[],invoiceId:null,invoiceItems:[],selectedInvoice:null},reducers:{},extraReducers:function(e){e.addCase(j.fulfilled,(function(e,t){e.data=t.payload.data,e.allData=t.payload.allData,e.total=t.payload.totalPages,e.params=t.payload.params})),e.addCase(b.fulfilled,(function(e,t){e.invoiceId=t.payload.invoices.id})),e.addCase(h.fulfilled,(function(e,t){e.invoiceId=t.payload.invoices.id})),e.addCase(u.fulfilled,(function(e,t){e.invoiceItems=t.payload.invoiceItems})),e.addCase(x.fulfilled,(function(e,t){e.invoiceItems=t.payload.invoiceItems})),e.addCase(p.fulfilled,(function(e,t){e.selectedInvoice=t.payload.invoice}))}}).reducer}}]);
//# sourceMappingURL=97.e0f2a570.chunk.js.map