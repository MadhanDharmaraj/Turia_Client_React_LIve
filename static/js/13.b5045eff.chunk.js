(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[13],{1247:function(e,t,a){"use strict";a.r(t);var n=a(143),r=(a(14),a(22)),c=a(1),i=a(4),s=a(140),o=a(2),l=a(527),u=a(535),d=a(145),b=a(530),p=a.n(b),f=a(852),j=a(823),m=a(780),h=a(837),g=a(786),O=a(783),v=a(853),x=a(771),y=a(681),N=a(541),C=a.n(N),k=a(542),w=a.n(k),P=a(5),L=a(97),S=a(525),E=a(526),D=a(153),_=a(141),I=(a(554),a(531),a(540)),B=a(39),R=a.n(B),A=a(16),T=w()(C.a),M=function(e){var t=e.handleFilter,a=e.value,n=e.handlePerPage,r=e.rowsPerPage,o=e.exportList,l=e.selectedIds,u=e.returnupdateFlg,b=Object(_.b)();return Object(A.jsx)("div",{className:"invoice-list-table-header w-100 py-2 px-1",children:Object(A.jsxs)(L.ib,{children:[Object(A.jsxs)(L.B,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:[Object(A.jsxs)("div",{className:"d-flex align-items-center me-2",children:[Object(A.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(A.jsxs)(L.K,{type:"select",id:"rows-per-page",value:r,onChange:n,className:"form-control ms-50 pe-3",children:[Object(A.jsx)("option",{value:"10",children:"10"}),Object(A.jsx)("option",{value:"25",children:"25"}),Object(A.jsx)("option",{value:"50",children:"50"})]})]}),Object(A.jsx)("div",{children:l.length>0&&Object(A.jsx)(d.b,{I:"delete",a:"invoice",children:Object(A.jsxs)("div",{children:[Object(A.jsx)(L.yb,{target:"deleteIcon",children:" Delete"}),Object(A.jsx)(f.a,{className:"text-danger cursor-pointer",id:"deleteIcon",onClick:function(){var e;e=-1,T.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(i.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.value){t.next=5;break}return t.next=3,b(Object(D.k)({status:e,selectedIds:l}));case 3:u(!0),T.fire({icon:"success",title:"".concat(-1===e?"Deleted":statusArr[e]),text:"Client has been ".concat(-1===e?"Deleted":statusArr[e]),customClass:{confirmButton:"btn btn-success"}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}})]})})})]}),Object(A.jsxs)(L.B,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0",children:[Object(A.jsxs)("div",{className:"d-flex align-items-center",children:[Object(A.jsx)("label",{htmlFor:"search-invoice",children:"Search"}),Object(A.jsx)(L.K,{id:"search-invoice",className:"ms-50 me-2 w-100",type:"text",value:a,onChange:function(e){return t(e.target.value)},placeholder:"Search Invoice"})]}),Object(A.jsx)(d.b,{I:"write",a:"invoice",children:Object(A.jsx)(L.i,{tag:s.b,to:"/invoice/add",color:"primary",children:"Add Invoice"})}),Object(A.jsxs)(L.wb,{className:"ms-1",children:[Object(A.jsx)(L.G,{color:"secondary",caret:!0,outline:!0,children:Object(A.jsx)(j.a,{className:"font-small-4 me-50"})}),Object(A.jsx)(L.F,{children:Object(A.jsx)(d.b,{I:"export",a:"invoice",children:Object(A.jsxs)(L.E,{onClick:function(){o()},children:[Object(A.jsx)(m.a,{className:"font-small-4 me-50"}),Object(A.jsx)("span",{className:"align-middle",children:"Export"})]})})})]})]})]})})};t.default=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.invoice})),a=Object(o.useState)(!1),b=Object(r.a)(a,2),f=b[0],N=b[1],C=function(){return Object(A.jsx)(o.Fragment,{children:Object(A.jsx)(E.a,{})})},k=Object(o.useState)(""),w=Object(r.a)(k,2),B=w[0],V=w[1],Y=Object(o.useState)(!1),q=Object(r.a)(Y,2),H=q[0],F=q[1],z=Object(o.useState)("desc"),G=Object(r.a)(z,2),K=G[0],J=G[1],W=Object(o.useState)("createdon"),U=Object(r.a)(W,2),Q=U[0],X=U[1],Z=Object(o.useState)({}),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ae=Object(o.useState)(1),ne=Object(r.a)(ae,2),re=ne[0],ce=ne[1],ie=Object(o.useState)(10),se=Object(r.a)(ie,2),oe=se[0],le=se[1],ue=Object(o.useState)({id:11,name:"Sent"}),de=Object(r.a)(ue,2),be=de[0],pe=de[1],fe=function(){return F(!H)},je=[{id:"",name:"Select All"},{id:"5",name:"Pending",color:"light-danger"},{id:"6",name:"Partially Paid",color:"light-warning"},{id:"7",name:"Paid",color:"light-success"},{id:"11",name:"Sent",color:"light-secondary"}],me=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(A.jsx)(l.a,{color:t,className:"me-50",content:null!==e.contactname?e.contactname.charAt(0):""})},he=function(e){return 13===e.length?R()(e,"x").format("MMM DD, YYYY"):R.a.unix(e).format("MMM DD, YYYY")},ge=function(e){return je.find((function(t){return parseInt(t.id)===parseInt(e)}))};Object(o.useEffect)(Object(i.a)(Object(c.a)().mark((function t(){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,e(Object(D.i)({sort:K,q:B,sortColumn:Q,page:re,perPage:oe,status:be.id}));case 3:N(!1);case 4:case"end":return t.stop()}}),t)}))),[e]);var Oe=function(){var t=Object(i.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return V(a),N(!0),t.next=4,e(Object(D.i)({sort:K,q:a,sortColumn:Q,page:re,perPage:oe,status:be.id}));case 4:N(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ve=function(){var t=Object(i.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,e(Object(D.i)({sort:K,q:B,sortColumn:Q,page:re,status:be.id,perPage:parseInt(a.target.value)}));case 3:le(parseInt(a.target.value)),N(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),xe=function(){var t=Object(i.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,e(Object(D.i)({sort:K,q:B,sortColumn:Q,status:be.id,perPage:oe,page:a.selected+1}));case 3:ce(a.selected+1),N(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ye=function(){var t=Object(i.a)(Object(c.a)().mark((function t(){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,e(Object(D.g)({sort:K,sortColumn:Q,q:B,status:be.id}));case 3:N(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ne=function(){var e=Number((t.total/oe).toFixed(0));return Object(A.jsx)(p.a,{nextLabel:"",breakLabel:"...",previousLabel:"",pageCount:e||1,activeClassName:"active",breakClassName:"page-item",pageClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",pageLinkClassName:"page-link",nextClassName:"page-item next",previousLinkClassName:"page-link",previousClassName:"page-item prev",onPageChange:function(e){return xe(e)},forcePage:0!==re?re-1:0,containerClassName:"pagination react-paginate justify-content-end p-1"})},Ce=function(){var e={q:B,status:be.id};Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:(t.data.length,[])};Object(o.useEffect)((function(){J("desc"),le(10),X("createdon"),Ce()}),[t.data]);var ke=function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!0),P.a.post("/pdfmaker/pdf",{id:t.id}).then((function(e){var a=document.createElement("a"),n="".concat(t.uniqueno,".pdf");a.href=e.data.pdf,a.download=n,a.click(),document.removeChild(a),N(!1)})).catch((function(e){console.log(e),N(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=Object(o.useState)([]),Pe=Object(r.a)(we,2),Le=Pe[0],Se=Pe[1],Ee=function(e){if(-1===Le.indexOf(e))Se([].concat(Object(n.a)(Le),[e]));else{var t=Le,a=t.indexOf(e);t.splice(a,1),Se(t)}Ce()};return Object(A.jsxs)("div",{className:"invoice-list-wrapper",children:[Object(A.jsx)(L.l,{children:Object(A.jsx)(L.m,{children:Object(A.jsx)(L.ib,{children:Object(A.jsxs)(L.B,{md:"4",children:[Object(A.jsx)(L.N,{for:"status-select",children:"Status"}),Object(A.jsx)(u.a,{theme:I.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:je,value:be,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(){var t=Object(i.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return pe(a),N(!0),t.next=4,e(Object(D.i)({sort:K,sortColumn:Q,q:B,page:re,perPage:oe,status:a.id}));case 4:N(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})]})})})}),Object(A.jsx)(S.a,{blocking:f,loader:Object(A.jsx)(C,{}),children:Object(A.jsxs)(L.l,{children:[Object(A.jsxs)("div",{className:"invoice-list-dataTable react-dataTable",children:[Object(A.jsx)(M,{handlePerPage:ve,exportList:ye,handleFilter:Oe,selectedIds:Le,returnupdateFlg:function(e){e&&(Se([]),Ce())}}),Object(A.jsxs)(L.mb,{className:"table-hover",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{}),Object(A.jsx)("th",{children:"Invocie ID"}),Object(A.jsx)("th",{children:"Customer"}),Object(A.jsx)("th",{children:"Invoice Items"}),Object(A.jsx)("th",{children:"Due Date"}),Object(A.jsx)("th",{children:"Total"}),Object(A.jsx)("th",{children:"Balance"}),Object(A.jsx)("th",{children:"Payment Status"}),Object(A.jsx)("th",{children:"Action"})]})}),Object(A.jsx)("tbody",{children:Ce().map((function(t,a){return Object(A.jsxs)("tr",{children:[Object(A.jsxs)("td",{children:[Le.indexOf(t.id)>-1&&Object(A.jsx)(L.K,{type:"checkbox",onClick:function(){Ee(t.id)},defaultChecked:!0}),-1===Le.indexOf(t.id)&&Object(A.jsx)(L.K,{type:"checkbox",onClick:function(){Ee(t.id)}})]}),Object(A.jsx)("td",{children:Object(A.jsx)(s.b,{to:"/invoice/view/".concat(t.id),children:Object(A.jsx)("span",{className:"text-body",children:"".concat(t.uniqueno)})})}),Object(A.jsx)("td",{children:Object(A.jsx)(s.b,{to:"/invoice/view/".concat(t.id),children:Object(A.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[me(t),Object(A.jsxs)("div",{className:"d-flex flex-column",children:[Object(A.jsx)("h6",{className:"user-name text-truncate mb-0",children:t.contactname}),Object(A.jsx)("small",{className:"text-truncate text-muted mb-0",children:t.contactemail})]})]})})}),Object(A.jsx)("td",{children:Object(A.jsx)(s.b,{to:"/invoice/view/".concat(t.id),children:Object(A.jsx)("span",{className:"text-body",children:t.taskinvoiceitemsservicename})})}),Object(A.jsx)("td",{children:Object(A.jsx)(s.b,{to:"/invoice/view/".concat(t.id),children:Object(A.jsx)("span",{className:"text-body",children:he(t.paymentdue)})})}),Object(A.jsx)("td",{children:Object(A.jsx)(s.b,{to:"/invoice/view/".concat(t.id),children:Object(A.jsx)("span",{className:"text-body",children:t.totalamount||0})})}),Object(A.jsx)("td",{children:"0"!==t.dueamount?Object(A.jsx)("span",{children:t.dueamount}):Object(A.jsx)(L.f,{color:"light-success",pill:!0,children:"Paid"})}),Object(A.jsx)("td",{children:Object(A.jsx)(L.f,{color:ge(t.paymentstatus).color||"light-primary",children:ge(t.paymentstatus).name||t.paymentstatus})}),Object(A.jsx)("td",{children:Object(A.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(A.jsx)(d.b,{I:"read",a:"invoice",children:Object(A.jsx)(h.a,{size:17,onClick:function(){fe(),te(t)}})}),Object(A.jsxs)(d.b,{I:"read",a:"invoice",children:[" ",Object(A.jsx)(s.b,{to:"/invoice/view/".concat(t.id),id:"pw-tooltip-".concat(t.id),children:Object(A.jsx)(g.a,{size:17,className:"mx-1"})})]}),Object(A.jsx)(L.yb,{placement:"top",target:"pw-tooltip-".concat(t.id),children:"Preview Invoice"}),Object(A.jsxs)(L.wb,{children:[Object(A.jsx)(L.G,{tag:"span",children:Object(A.jsx)(j.a,{size:17,className:"cursor-pointer"})}),Object(A.jsxs)(L.F,{end:!0,children:[Object(A.jsx)(d.b,{I:"export",a:"invoice",children:Object(A.jsxs)(L.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){e.preventDefault(),ke(t)},children:[Object(A.jsx)(m.a,{size:14,className:"me-50"}),Object(A.jsx)("span",{className:"align-middle",children:"Download"})]})}),Object(A.jsx)(d.b,{I:"write",a:"invoice",children:Object(A.jsxs)(L.E,{tag:s.b,to:"/invoice/edit/".concat(t.id),className:"w-100",children:[Object(A.jsx)(O.a,{size:14,className:"me-50"}),Object(A.jsx)("span",{className:"align-middle",children:"Edit"})]})}),Object(A.jsx)(d.b,{I:"delete",a:"invoice",children:Object(A.jsxs)(L.E,{tag:"a",href:"/",className:"w-100",onClick:function(a){var n;a.preventDefault(),n=t.id,T.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(i.a)(Object(c.a)().mark((function t(a){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.value){t.next=4;break}return t.next=3,e(Object(D.e)(n));case 3:T.fire({icon:"success",title:"Deleted!",text:"Invoice has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:[Object(A.jsx)(v.a,{size:14,className:"me-50"}),Object(A.jsx)("span",{className:"align-middle",children:"Delete"})]})}),Object(A.jsx)(d.b,{I:"write",a:"invoice",children:Object(A.jsxs)(L.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(A.jsx)(x.a,{size:14,className:"me-50"}),Object(A.jsx)("span",{className:"align-middle",children:"Duplicate"})]})})]})]})]})})]},a)}))})]}),Object(A.jsx)(Ne,{})]}),Object(A.jsx)(y.a,{toggleSidebar:fe,open:H,invoice:ee})]})})]})}},525:function(e,t,a){"use strict";var n=a(14),r=a(34),c=a(2),i=a(7),s=a.n(i),o=a(97),l=(a(528),a(16)),u=function(e){var t,a=e.children,i=e.blocking,o=e.loader,u=e.className,d=e.tag,b=e.overlayColor,p=d;return Object(l.jsxs)(p,{className:s()("ui-loader",(t={},Object(r.a)(t,u,u),Object(r.a)(t,"show",i),t)),children:[a,i?Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("div",Object(n.a)({className:"overlay"},i&&b?{style:{backgroundColor:b}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.jb,{color:"primary"})}},526:function(e,t,a){"use strict";var n=a(16);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},528:function(e,t,a){},530:function(e,t,a){(function(n){var r;e.exports=(r=a(2),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,c,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),c=n.n(r),i=n(0),s=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,i=e.activeClassName,s=e.activeLinkClassName,l=e.getEventListener,u=e.pageSelectedHandler,d=e.href,b=e.extraAriaContext,p=e.ariaLabel||"Page "+n+(b?" "+b:""),f=null;return r&&(f="page",p=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==s&&(a=a+" "+s):a=s),c.a.createElement("li",{className:t},c.a.createElement("a",o({role:"button",className:a,href:d,tabIndex:"0","aria-label":p,"aria-current":f,onKeyPress:u},l(u)),n))};l.propTypes={pageSelectedHandler:s.a.func.isRequired,selected:s.a.bool.isRequired,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,extraAriaContext:s.a.string,href:s.a.string,ariaLabel:s.a.string,page:s.a.number.isRequired,getEventListener:s.a.func.isRequired};var u=l;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var c=void 0;try{c=n[r]}catch(e){continue}e.register(c,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var b=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,s=a||"break";return c.a.createElement("li",{className:s},c.a.createElement("a",d({className:n,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};b.propTypes={breakLabel:s.a.oneOfType([s.a.string,s.a.node]),breakClassName:s.a.string,breakLinkClassName:s.a.string,breakHandler:s.a.func.isRequired,getEventListener:s.a.func.isRequired};var p=b;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x(e);if(t){var r=x(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return O(this,a)}}function O(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var c=void 0;try{c=n[r]}catch(e){continue}e.register(c,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,n,r=g(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(v(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(v(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),y(v(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(v(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(v(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),y(v(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(v(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,s=a.breakLabel,o=a.breakClassName,l=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(t.getPageElement(d));else{var b,f,j,m=n/2,h=n-m;u>r-n/2?m=n-(h=r-u):u<n/2&&(h=n-(m=u));var g=function(e){return t.getPageElement(e)};for(b=0;b<r;b++)(f=b+1)<=i||f>r-i||b>=u-m&&b<=u+h?e.push(g(b)):s&&e[e.length-1]!==j&&(j=c.a.createElement(p,{key:b,breakLabel:s,breakClassName:o,breakLinkClassName:l,breakHandler:t.handleBreakClick.bind(null,b),getEventListener:t.getEventListener}),e.push(j))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,s=a.activeLinkClassName,o=a.extraAriaContext;return c.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:s,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,i=e.previousClassName,s=e.previousLinkClassName,o=e.previousAriaLabel,l=e.prevRel,u=e.nextLabel,d=e.nextClassName,b=e.nextLinkClassName,p=e.nextAriaLabel,f=e.nextRel,m=this.state.selected,h=i+(0===m?" ".concat(t):""),g=d+(m===a-1?" ".concat(t):""),O=0===m?"true":"false",v=m===a-1?"true":"false";return c.a.createElement("ul",{className:n},c.a.createElement("li",{className:h},c.a.createElement("a",j({className:s,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":O,"aria-label":o,rel:l},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),c.a.createElement("li",{className:g},c.a.createElement("a",j({className:b,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":v,"aria-label":p,rel:f},this.getEventListener(this.handleNextPage)),u)))}}])&&m(t.prototype,a),n&&m(t,n),i}(r.Component);y(N,"propTypes",{pageCount:s.a.number.isRequired,pageRangeDisplayed:s.a.number.isRequired,marginPagesDisplayed:s.a.number.isRequired,previousLabel:s.a.node,previousAriaLabel:s.a.string,prevRel:s.a.string,nextLabel:s.a.node,nextAriaLabel:s.a.string,nextRel:s.a.string,breakLabel:s.a.oneOfType([s.a.string,s.a.node]),hrefBuilder:s.a.func,onPageChange:s.a.func,initialPage:s.a.number,forcePage:s.a.number,disableInitialCallback:s.a.bool,containerClassName:s.a.string,pageClassName:s.a.string,pageLinkClassName:s.a.string,activeClassName:s.a.string,activeLinkClassName:s.a.string,previousClassName:s.a.string,nextClassName:s.a.string,previousLinkClassName:s.a.string,nextLinkClassName:s.a.string,disabledClassName:s.a.string,breakClassName:s.a.string,breakLinkClassName:s.a.string,extraAriaContext:s.a.string,ariaLabelBuilder:s.a.func,eventListener:s.a.string}),y(N,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var c=void 0;try{c=n[r]}catch(e){continue}e.register(c,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=N,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var c=void 0;try{c=n[r]}catch(e){continue}e.register(c,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(20))},531:function(e,t,a){},554:function(e,t,a){},573:function(e,t,a){"use strict";var n=a(14),r=a(34),c=a(144),i=a(718),s=a(7),o=a.n(s),l=a(558),u=a.n(l),d=a(97),b=a(16),p=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"];t.a=function(e){var t,a=e.open,s=e.size,l=e.title,f=e.width,j=e.children,m=e.closeBtn,h=e.className,g=e.toggleSidebar,O=e.bodyClassName,v=e.contentClassName,x=e.wrapperClassName,y=e.headerClassName,N=Object(c.a)(e,p),C=m||Object(b.jsx)(i.a,{className:"cursor-pointer",size:15,onClick:g});return Object(b.jsxs)(d.Q,Object(n.a)(Object(n.a)(Object(n.a)({isOpen:a,toggle:g,contentClassName:o()("overflow-hidden",Object(r.a)({},v,v)),modalClassName:o()("modal-slide-in",Object(r.a)({},x,x)),className:o()((t={},Object(r.a)(t,h,h),Object(r.a)(t,"sidebar-lg","lg"===s),Object(r.a)(t,"sidebar-sm","sm"===s),t))},void 0!==f?{style:{width:String(f)+"px"}}:{}),N),{},{children:[Object(b.jsx)(d.T,{className:o()(Object(r.a)({},y,y)),toggle:g,close:C,tag:"div",children:Object(b.jsx)("h5",{className:"modal-title",children:Object(b.jsx)("span",{className:"align-middle",children:l})})}),Object(b.jsx)(u.a,{options:{wheelPropagation:!1},children:Object(b.jsx)(d.R,{className:o()("flex-grow-1",Object(r.a)({},O,O)),children:j})})]}))}},589:function(e,t,a){"use strict";var n=a(19),r=a(2),c=a.n(r),i=a(559),s=a(597),o=a(555),l=a(143),u=a(144),d=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],b=function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,a=String(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase(),n=String(t.getOptionValue(e)).toLowerCase(),r=String(t.getOptionLabel(e)).toLowerCase();return n===a||r===a},p={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,t,a,n){return!(!e||t.some((function(t){return b(e,t,n)}))||a.some((function(t){return b(e,t,n)})))},getNewOptionData:function(e,t){return{label:t,value:e,__isNew__:!0}}};a(582),a(596),a(99),a(150),a(151),a(587),a(148),a(25),a(590),a(575);var f=c.a.forwardRef((function(e,t){var a=function(e){var t=e.allowCreateWhileLoading,a=void 0!==t&&t,n=e.createOptionPosition,c=void 0===n?"last":n,s=e.formatCreateLabel,b=void 0===s?p.formatCreateLabel:s,f=e.isValidNewOption,j=void 0===f?p.isValidNewOption:f,m=e.getNewOptionData,h=void 0===m?p.getNewOptionData:m,g=e.onCreateOption,O=e.options,v=void 0===O?[]:O,x=e.onChange,y=Object(u.a)(e,d),N=y.getOptionValue,C=void 0===N?i.c:N,k=y.getOptionLabel,w=void 0===k?i.b:k,P=y.inputValue,L=y.isLoading,S=y.isMulti,E=y.value,D=y.name,_=Object(r.useMemo)((function(){return j(P,Object(o.i)(E),v,{getOptionValue:C,getOptionLabel:w})?h(P,b(P)):void 0}),[b,h,w,C,P,j,v,E]),I=Object(r.useMemo)((function(){return!a&&L||!_?v:"first"===c?[_].concat(Object(l.a)(v)):[].concat(Object(l.a)(v),[_])}),[a,c,L,_,v]),B=Object(r.useCallback)((function(e,t){if("select-option"!==t.action)return x(e,t);var a=Array.isArray(e)?e:[e];if(a[a.length-1]!==_)x(e,t);else if(g)g(P);else{var n=h(P,P),r={action:"create-option",name:D,option:n};x(Object(o.d)(S,[].concat(Object(l.a)(Object(o.i)(E)),[n]),n),r)}}),[h,P,S,D,_,g,x,E]);return Object(o.o)(Object(o.o)({},y),{},{options:I,onChange:B})}(Object(s.a)(e));return c.a.createElement(i.a,Object(n.a)({ref:t},a))}));t.a=f},681:function(e,t,a){"use strict";var n=a(22),r=a(14),c=a(8),i=a(573),s=a(535),o=a(589),l=a(807),u=a(7),d=a.n(u),b=a(97),p=a(5),f=a(2),j=a(10),m=a(39),h=a.n(m),g=a(525),O=a(526),v=a(16),x=Object(j.c)(),y=Object(j.a)();t.a=function(e){var t={multiValue:function(e,t){return Object(c.a)(t),Object(r.a)(Object(r.a)({},e),{},{backgroundColor:"#7367f0"})}},a=Object(f.useState)(!1),u=Object(n.a)(a,2),j=u[0],m=u[1],N=function(){return Object(v.jsx)(f.Fragment,{children:Object(v.jsx)(O.a,{})})},C=e.open,k=e.toggleSidebar,w=e.invoice,P=Object(f.useState)(""),L=Object(n.a)(P,2),S=L[0],E=L[1],D=Object(f.useState)([]),_=Object(n.a)(D,2),I=_[0],B=_[1],R=Object(f.useState)([]),A=Object(n.a)(R,2),T=A[0],M=A[1],V=Object(f.useState)([]),Y=Object(n.a)(V,2),q=Y[0],H=Y[1],F=Object(f.useState)([]),z=Object(n.a)(F,2),G=z[0],K=z[1],J=function(e){p.a.post("contactinformations/list",{contactid:e}).then((function(e){M(e.data.contactinformations)})).catch((function(){}))},W=function(){p.a.post("/emailtemplates/get",{slug:"invoice-send-mail"}).then((function(e){var t,a=e.data.emailtemplates.description.replace("{invoice_date}",(t=w.paymentdue,13===t.length?h()(t,"x").format("MMM DD, YYYY"):h.a.unix(t).format("MMM DD, YYYY"))).replace("{service}",w.taskinvoiceitemsservicename).replace("recipient_name",w.contactperson).replace("{recipient_name}",w.contactperson).replace("{invoice_no}",w.uniqueno).replace("{amount}",w.totalamount).replace("{invoice_amount}",w.totalamount).replace("{your_name}",x.name).replaceAll("{firm_name}",y.name).replace("{","").replace("}","");E(a)})).catch((function(){}))};Object(f.useEffect)((function(){void 0!==w.clientid&&J(w.clientid),void 0!==w.contactid&&J(w.contactid),Object.keys(w).length>0&&(p.a.post("/organizationusers/dropdown").then((function(e){B(e.data.organizationusers)})).catch((function(){})),W())}),[w]);return Object(v.jsx)(i.a,{size:"lg",open:C,title:"Send Invoice",headerClassName:"mb-1",contentClassName:"p-0",bodyClassName:"pb-sm-0 pb-3",toggleSidebar:k,children:Object(v.jsx)(g.a,{blocking:j,loader:Object(v.jsx)(N,{}),children:Object(v.jsxs)(b.H,{children:[Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(b.N,{for:"invoice-from",className:"form-label",children:"To"}),Object(v.jsx)(o.a,{className:d()("react-select"),classNamePrefix:"select",isMulti:!0,options:T,onChange:function(e){H(e.map((function(e){return e.email})))},getOptionLabel:function(e){return"".concat(e.name," - ").concat(e.email)},styles:t,getOptionValue:function(e){return e.email}})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(b.N,{for:"invoice-to",className:"form-label",children:"CC"}),Object(v.jsx)(s.a,{className:d()("react-select"),classNamePrefix:"select",isMulti:!0,options:I,onChange:function(e){K(e.map((function(e){return e.email})))},getOptionLabel:function(e){return"".concat(e.name," - ").concat(e.email)},getOptionValue:function(e){return e.email},styles:t})]}),Object(v.jsxs)("div",{className:"mb-1",children:[Object(v.jsx)(b.N,{for:"invoice-message",className:"form-label",children:"Message"}),Object(v.jsx)("div",{contentEditable:!0,dangerouslySetInnerHTML:{__html:S},className:"border border-1 rounded-2 maxheight-400"})]}),Object(v.jsx)("div",{className:"mb-1",children:Object(v.jsxs)(b.f,{color:"light-primary",children:[Object(v.jsx)(l.a,{className:"me-50",size:14}),Object(v.jsx)("span",{className:"align-middle",children:"Invoice Attached"})]})}),Object(v.jsxs)("div",{className:"d-flex flex-wrap mt-2",children:[Object(v.jsx)(b.i,{className:"me-1",color:"primary",onClick:function(){!function(){m(!0);var e="".concat(w.uniqueno," Invoices Acknowledgement Mail");p.a.post("/google/sendGmail",{content:S,subject:e,toEmail:q,ccEmail:G,taskinvoiceId:w.id}).then((function(){k(!1),m(!1),toast.success("Email send Successfully",{position:"bottom-right"})})),console.log((function(){}))}()},children:"Send"}),Object(v.jsx)(b.i,{color:"secondary",outline:!0,onClick:k,children:"Cancel"})]})]})})})}}}]);
//# sourceMappingURL=13.b5045eff.chunk.js.map