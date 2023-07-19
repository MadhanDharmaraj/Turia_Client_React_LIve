(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[38],{1314:function(e,t,a){"use strict";a.r(t);var n=a(142),r=a(22),s=a(1),c=a(4),i=a(139),o=a(2),l=a(5),u=a(144),d=a(530),b=a.n(d),p=a(527),f=a(535),j=a(852),m=a(823),h=a(780),g=a(837),O=a(786),v=a(783),x=a(853),y=a(771),N=a(96),C=a(682),k=a(156),w=a(140),P=(a(554),a(531),a(540)),L=a(39),S=a.n(L),E=a(541),D=a.n(E),_=a(542),I=a.n(_),R=a(525),B=a(526),T=a(16),A=I()(D.a),M=function(e){var t=e.handleFilter,a=e.value,n=e.handlePerPage,r=e.rowsPerPage,o=e.exportList,l=e.selectedIds,d=e.returnupdateFlg,b=Object(w.b)();return Object(T.jsx)("div",{className:"invoice-list-table-header w-100 py-2 px-1",children:Object(T.jsxs)(N.ib,{children:[Object(T.jsxs)(N.B,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:[Object(T.jsxs)("div",{className:"d-flex align-items-center me-2",children:[Object(T.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(T.jsxs)(N.K,{type:"select",id:"rows-per-page",value:r,onChange:n,className:"form-control ms-50 pe-3",children:[Object(T.jsx)("option",{value:"10",children:"10"}),Object(T.jsx)("option",{value:"25",children:"25"}),Object(T.jsx)("option",{value:"50",children:"50"})]})]}),Object(T.jsx)("div",{children:l.length>0&&Object(T.jsx)(u.b,{I:"delete",a:"invoice",children:Object(T.jsxs)("div",{children:[Object(T.jsx)(N.yb,{target:"deleteIcon",children:" Delete"}),Object(T.jsx)(j.a,{className:"text-danger cursor-pointer",id:"deleteIcon",onClick:function(){var e;e=-1,A.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var t=Object(c.a)(Object(s.a)().mark((function t(a){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.value){t.next=5;break}return t.next=3,b(Object(k.m)({status:e,selectedIds:l}));case 3:d(!0),A.fire({icon:"success",title:"".concat(-1===e?"Deleted":statusArr[e]),text:"Client has been ".concat(-1===e?"Deleted":statusArr[e]),customClass:{confirmButton:"btn btn-success"}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}})]})})})]}),Object(T.jsxs)(N.B,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0",children:[Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)("label",{htmlFor:"search-invoice",children:"Search"}),Object(T.jsx)(N.K,{id:"search-invoice",className:"ms-50 me-2 w-100",type:"text",value:a,onChange:function(e){return t(e.target.value)},placeholder:"Search Proposal"})]}),Object(T.jsx)(u.b,{I:"write",a:"invoice",children:Object(T.jsx)(N.i,{tag:i.b,to:"/proposal/add",color:"primary",children:"Add Proposal"})}),Object(T.jsxs)(N.wb,{className:"ms-1",children:[Object(T.jsx)(N.G,{color:"secondary",caret:!0,outline:!0,children:Object(T.jsx)(m.a,{className:"font-small-4 me-50"})}),Object(T.jsx)(N.F,{children:Object(T.jsx)(u.b,{I:"export",a:"invoice",children:Object(T.jsxs)(N.E,{onClick:function(){o()},children:[Object(T.jsx)(h.a,{className:"font-small-4 me-50"}),Object(T.jsx)("span",{className:"align-middle",children:"Export"})]})})})]})]})]})})};t.default=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),a=t[0],d=t[1],j=function(){return Object(T.jsx)(o.Fragment,{children:Object(T.jsx)(B.a,{})})},L=Object(w.b)(),E=Object(w.c)((function(e){return e.invoice})),D=Object(o.useState)(""),_=Object(r.a)(D,2),I=_[0],q=_[1],V=Object(o.useState)({}),Y=Object(r.a)(V,2),H=Y[0],F=Y[1],z=Object(o.useState)(!1),G=Object(r.a)(z,2),K=G[0],J=G[1],W=Object(o.useState)("desc"),U=Object(r.a)(W,2),Q=U[0],X=U[1],Z=Object(o.useState)("createdon"),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ae=Object(o.useState)(1),ne=Object(r.a)(ae,2),re=ne[0],se=ne[1],ce=Object(o.useState)(10),ie=Object(r.a)(ce,2),oe=ie[0],le=ie[1],ue=4,de=Object(o.useState)({id:"",name:"SelectAll"}),be=Object(r.a)(de,2),pe=be[0],fe=be[1],je=["","To Do","In progress","Completed","On Hold","Cancelled","Sent to Review","Request Changes"],me=["","light-primary","light-secondary","light-success","light-danger","light-warning","light-info","light-success"],he=function(){return J(!K)},ge=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(T.jsx)(p.a,{color:t,className:"me-50",content:null!==e.contactname?e.contactname.charAt(0):""})};Object(o.useEffect)(Object(c.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,L(Object(k.i)({sort:Q,q:I,sortColumn:ee,page:re,perPage:oe,status:ue,taskstatus:pe.id}));case 3:d(!1);case 4:case"end":return e.stop()}}),e)}))),[L]);var Oe=function(){var e=Object(c.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(t),d(!0),e.next=4,L(Object(k.i)({sort:Q,q:t,sortColumn:ee,page:re,perPage:oe,status:ue,taskstatus:pe.id}));case 4:d(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(c.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,L(Object(k.i)({sort:Q,q:I,sortColumn:ee,page:re,status:ue,taskstatus:pe.id,perPage:parseInt(t.target.value)}));case 3:d(!0),le(parseInt(t.target.value));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,L(Object(k.g)({sort:Q,sortColumn:ee,q:I,status:ue,taskstatus:pe.id}));case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(c.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,L(Object(k.i)({sort:Q,q:I,sortColumn:ee,status:ue,taskstatus:pe.id,perPage:oe,page:t.selected+1}));case 3:se(t.selected+1),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var e=Number((E.total/oe).toFixed(0));return Object(T.jsx)(b.a,{nextLabel:"",breakLabel:"...",previousLabel:"",pageCount:e||1,activeClassName:"active",breakClassName:"page-item",pageClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",pageLinkClassName:"page-link",nextClassName:"page-item next",previousLinkClassName:"page-link",previousClassName:"page-item prev",onPageChange:function(e){return ye(e)},forcePage:0!==re?re-1:0,containerClassName:"pagination react-paginate justify-content-end p-1"})},Ce=function(){var e={q:I,status:ue,taskstatus:pe.id};Object.keys(e).some((function(t){return e[t].length>0}));return E.data.length>0?E.data:(E.data.length,[])};Object(o.useEffect)((function(){X("desc"),le(10),te("createdon"),Ce()}),[E.data]);var ke=function(e){return 13===e.length?S()(e,"x").format("MMM DD, YYYY"):S.a.unix(e).format("MMM DD, YYYY")},we=Object(o.useState)([]),Pe=Object(r.a)(we,2),Le=Pe[0],Se=Pe[1],Ee=function(e){if(-1===Le.indexOf(e))Se([].concat(Object(n.a)(Le),[e]));else{var t=Le,a=t.indexOf(e);t.splice(a,1),Se(t)}};return Object(T.jsxs)("div",{className:"invoice-list-wrapper",children:[Object(T.jsx)(N.l,{children:Object(T.jsx)(N.m,{children:Object(T.jsx)(N.ib,{children:Object(T.jsxs)(N.B,{md:"4",children:[Object(T.jsx)(N.N,{for:"status-select",children:"Task Status"}),Object(T.jsx)(f.a,{theme:P.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{name:"Select All",id:""},{name:"To Do",id:1},{name:"In progress",id:2},{name:"Completed",id:3},{name:"Sent to Review",id:6},{name:"Request Changes",id:7}],value:pe,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(){var e=Object(c.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fe(t),d(!0),e.next=4,L(Object(k.i)({sort:Q,sortColumn:ee,q:I,page:re,perPage:oe,status:ue,taskstatus:t.id}));case 4:d(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]})})})}),Object(T.jsxs)(N.l,{children:[Object(T.jsxs)("div",{className:"invoice-list-dataTable react-dataTable",children:[Object(T.jsx)(M,{handlePerPage:ve,exportList:xe,handleFilter:Oe,selectedIds:Le,returnupdateFlg:function(e){e&&(Se([]),Ce())}}),Object(T.jsx)(R.a,{blocking:a,loader:Object(T.jsx)(j,{}),children:Object(T.jsxs)(N.mb,{className:"table-hover",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{}),Object(T.jsx)("th",{children:"Proposal ID"}),Object(T.jsx)("th",{children:"Customer"}),Object(T.jsx)("th",{children:"Proposal Items"}),Object(T.jsx)("th",{children:"Proposal Date"}),Object(T.jsx)("th",{children:"Total"}),Object(T.jsx)("th",{children:"Task Status"}),Object(T.jsx)("th",{children:"Action"})]})}),Object(T.jsx)("tbody",{children:Ce().map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsxs)("td",{children:[Le.indexOf(e.id)>-1&&Object(T.jsx)(N.K,{type:"checkbox",onClick:function(){Ee(e.id)},defaultChecked:!0}),-1===Le.indexOf(e.id)&&Object(T.jsx)(N.K,{type:"checkbox",onClick:function(){Ee(e.id)}})]}),Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/proposal/view/".concat(e.id),children:Object(T.jsx)("span",{className:"text-body",children:"".concat(e.uniqueno)})})}),Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/proposal/view/".concat(e.id),children:Object(T.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[ge(e),Object(T.jsxs)("div",{className:"d-flex flex-column",children:[Object(T.jsx)("h6",{className:"user-name text-truncate mb-0",children:e.contactname}),Object(T.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.contactemail})]})]})})}),Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/proposal/view/".concat(e.id),children:Object(T.jsx)("span",{className:"text-body",children:e.taskinvoiceitemsservicename})})}),Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/proposal/view/".concat(e.id),children:Object(T.jsx)("span",{className:"text-body",children:ke(e.invoicedate)})})}),Object(T.jsx)("td",{children:Object(T.jsx)(i.b,{to:"/proposal/view/".concat(e.id),children:Object(T.jsx)("span",{className:"text-body",children:e.totalamount||0})})}),Object(T.jsx)("td",{children:Object(T.jsx)(N.f,{color:me[e.taskstatus],children:je[e.taskstatus]})}),Object(T.jsx)("td",{children:Object(T.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(T.jsx)(u.b,{I:"read",a:"invoice",children:Object(T.jsx)(g.a,{size:17,onClick:function(){he(),F(e)}})}),Object(T.jsx)(u.b,{I:"read",a:"invoice",children:Object(T.jsx)(i.b,{to:"/proposal/view/".concat(e.id),id:"pw-tooltip-".concat(e.id),children:Object(T.jsx)(O.a,{size:17,className:"mx-1"})})}),Object(T.jsx)(N.yb,{placement:"top",target:"pw-tooltip-".concat(e.id),children:"Preview Invoice"}),Object(T.jsxs)(N.wb,{children:[Object(T.jsx)(N.G,{tag:"span",children:Object(T.jsx)(m.a,{size:17,className:"cursor-pointer"})}),Object(T.jsxs)(N.F,{end:!0,children:[Object(T.jsx)(u.b,{I:"export",a:"invoice",children:Object(T.jsxs)(N.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){t.preventDefault(),function(e){d(!0),l.a.post("/pdfmaker/pdf",{id:e.id}).then((function(t){var a=document.createElement("a"),n="".concat(e.uniqueno,".pdf");a.href=t.data.pdf,a.download=n,a.click(),document.removeChild(a),d(!1)})).catch((function(e){console.log(e),d(!1)}))}(e)},children:[Object(T.jsx)(h.a,{size:14,className:"me-50"}),Object(T.jsx)("span",{className:"align-middle",children:"Download"})]})}),Object(T.jsx)(u.b,{I:"write",a:"invoice",children:Object(T.jsxs)(N.E,{tag:i.b,to:"/proposal/edit/".concat(e.id),className:"w-100",children:[Object(T.jsx)(v.a,{size:14,className:"me-50"}),Object(T.jsx)("span",{className:"align-middle",children:"Edit"})]})}),Object(T.jsx)(u.b,{I:"delete",a:"invoice",children:Object(T.jsxs)(N.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){var a;t.preventDefault(),a=e.id,A.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(c.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=4;break}return e.next=3,L(Object(k.e)(a));case 3:A.fire({icon:"success",title:"Deleted!",text:"Invoice has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(T.jsx)(x.a,{size:14,className:"me-50"}),Object(T.jsx)("span",{className:"align-middle",children:"Delete"})]})}),Object(T.jsx)(u.b,{I:"write",a:"invoice",children:Object(T.jsxs)(N.E,{tag:i.b,className:"w-100",to:"/proposal/clone/".concat(e.id),children:[Object(T.jsx)(y.a,{size:14,className:"me-50"}),Object(T.jsx)("span",{className:"align-middle",children:"Duplicate"})]})})]})]})]})})]},t)}))})]})}),Object(T.jsx)(Ne,{})]}),Object(T.jsx)(C.a,{toggleSidebar:he,open:K,invoice:H})]})]})}},525:function(e,t,a){"use strict";var n=a(14),r=a(34),s=a(2),c=a(7),i=a.n(c),o=a(96),l=(a(528),a(16)),u=function(e){var t,a=e.children,c=e.blocking,o=e.loader,u=e.className,d=e.tag,b=e.overlayColor,p=d;return Object(l.jsxs)(p,{className:i()("ui-loader",(t={},Object(r.a)(t,u,u),Object(r.a)(t,"show",c),t)),children:[a,c?Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("div",Object(n.a)({className:"overlay"},c&&b?{style:{backgroundColor:b}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.jb,{color:"primary"})}},526:function(e,t,a){"use strict";var n=a(16);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},528:function(e,t,a){},530:function(e,t,a){(function(n){var r;e.exports=(r=a(2),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,s,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),s=n.n(r),c=n(0),i=n.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,c=e.activeClassName,i=e.activeLinkClassName,l=e.getEventListener,u=e.pageSelectedHandler,d=e.href,b=e.extraAriaContext,p=e.ariaLabel||"Page "+n+(b?" "+b:""),f=null;return r&&(f="page",p=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+c:c,void 0!==a?void 0!==i&&(a=a+" "+i):a=i),s.a.createElement("li",{className:t},s.a.createElement("a",o({role:"button",className:a,href:d,tabIndex:"0","aria-label":p,"aria-current":f,onKeyPress:u},l(u)),n))};l.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired};var u=l;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var b=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,c=e.getEventListener,i=a||"break";return s.a.createElement("li",{className:i},s.a.createElement("a",d({className:n,role:"button",tabIndex:"0",onKeyPress:r},c(r)),t))};b.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var p=b;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x(e);if(t){var r=x(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return O(this,a)}}function O(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,a,n,r=g(c);function c(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),y(v(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(v(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),y(v(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(v(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(v(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),y(v(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(v(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,c=a.marginPagesDisplayed,i=a.breakLabel,o=a.breakClassName,l=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(t.getPageElement(d));else{var b,f,j,m=n/2,h=n-m;u>r-n/2?m=n-(h=r-u):u<n/2&&(h=n-(m=u));var g=function(e){return t.getPageElement(e)};for(b=0;b<r;b++)(f=b+1)<=c||f>r-c||b>=u-m&&b<=u+h?e.push(g(b)):i&&e[e.length-1]!==j&&(j=s.a.createElement(p,{key:b,breakLabel:i,breakClassName:o,breakLinkClassName:l,breakHandler:t.handleBreakClick.bind(null,b),getEventListener:t.getEventListener}),e.push(j))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=c,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,c=a.activeClassName,i=a.activeLinkClassName,o=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:c,activeLinkClassName:i,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,c=e.previousClassName,i=e.previousLinkClassName,o=e.previousAriaLabel,l=e.prevRel,u=e.nextLabel,d=e.nextClassName,b=e.nextLinkClassName,p=e.nextAriaLabel,f=e.nextRel,m=this.state.selected,h=c+(0===m?" ".concat(t):""),g=d+(m===a-1?" ".concat(t):""),O=0===m?"true":"false",v=m===a-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:h},s.a.createElement("a",j({className:i,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":O,"aria-label":o,rel:l},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:g},s.a.createElement("a",j({className:b,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":v,"aria-label":p,rel:f},this.getEventListener(this.handleNextPage)),u)))}}])&&m(t.prototype,a),n&&m(t,n),c}(r.Component);y(N,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),y(N,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=N,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(20))},531:function(e,t,a){},554:function(e,t,a){},573:function(e,t,a){"use strict";var n=a(14),r=a(34),s=a(143),c=a(718),i=a(7),o=a.n(i),l=a(558),u=a.n(l),d=a(96),b=a(16),p=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"];t.a=function(e){var t,a=e.open,i=e.size,l=e.title,f=e.width,j=e.children,m=e.closeBtn,h=e.className,g=e.toggleSidebar,O=e.bodyClassName,v=e.contentClassName,x=e.wrapperClassName,y=e.headerClassName,N=Object(s.a)(e,p),C=m||Object(b.jsx)(c.a,{className:"cursor-pointer",size:15,onClick:g});return Object(b.jsxs)(d.Q,Object(n.a)(Object(n.a)(Object(n.a)({isOpen:a,toggle:g,contentClassName:o()("overflow-hidden",Object(r.a)({},v,v)),modalClassName:o()("modal-slide-in",Object(r.a)({},x,x)),className:o()((t={},Object(r.a)(t,h,h),Object(r.a)(t,"sidebar-lg","lg"===i),Object(r.a)(t,"sidebar-sm","sm"===i),t))},void 0!==f?{style:{width:String(f)+"px"}}:{}),N),{},{children:[Object(b.jsx)(d.T,{className:o()(Object(r.a)({},y,y)),toggle:g,close:C,tag:"div",children:Object(b.jsx)("h5",{className:"modal-title",children:Object(b.jsx)("span",{className:"align-middle",children:l})})}),Object(b.jsx)(u.a,{options:{wheelPropagation:!1},children:Object(b.jsx)(d.R,{className:o()("flex-grow-1",Object(r.a)({},O,O)),children:j})})]}))}},589:function(e,t,a){"use strict";var n=a(19),r=a(2),s=a.n(r),c=a(559),i=a(597),o=a(555),l=a(142),u=a(143),d=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],b=function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,a=String(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase(),n=String(t.getOptionValue(e)).toLowerCase(),r=String(t.getOptionLabel(e)).toLowerCase();return n===a||r===a},p={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,t,a,n){return!(!e||t.some((function(t){return b(e,t,n)}))||a.some((function(t){return b(e,t,n)})))},getNewOptionData:function(e,t){return{label:t,value:e,__isNew__:!0}}};a(582),a(596),a(98),a(149),a(150),a(587),a(147),a(25),a(590),a(575);var f=s.a.forwardRef((function(e,t){var a=function(e){var t=e.allowCreateWhileLoading,a=void 0!==t&&t,n=e.createOptionPosition,s=void 0===n?"last":n,i=e.formatCreateLabel,b=void 0===i?p.formatCreateLabel:i,f=e.isValidNewOption,j=void 0===f?p.isValidNewOption:f,m=e.getNewOptionData,h=void 0===m?p.getNewOptionData:m,g=e.onCreateOption,O=e.options,v=void 0===O?[]:O,x=e.onChange,y=Object(u.a)(e,d),N=y.getOptionValue,C=void 0===N?c.c:N,k=y.getOptionLabel,w=void 0===k?c.b:k,P=y.inputValue,L=y.isLoading,S=y.isMulti,E=y.value,D=y.name,_=Object(r.useMemo)((function(){return j(P,Object(o.i)(E),v,{getOptionValue:C,getOptionLabel:w})?h(P,b(P)):void 0}),[b,h,w,C,P,j,v,E]),I=Object(r.useMemo)((function(){return!a&&L||!_?v:"first"===s?[_].concat(Object(l.a)(v)):[].concat(Object(l.a)(v),[_])}),[a,s,L,_,v]),R=Object(r.useCallback)((function(e,t){if("select-option"!==t.action)return x(e,t);var a=Array.isArray(e)?e:[e];if(a[a.length-1]!==_)x(e,t);else if(g)g(P);else{var n=h(P,P),r={action:"create-option",name:D,option:n};x(Object(o.d)(S,[].concat(Object(l.a)(Object(o.i)(E)),[n]),n),r)}}),[h,P,S,D,_,g,x,E]);return Object(o.o)(Object(o.o)({},y),{},{options:I,onChange:R})}(Object(i.a)(e));return s.a.createElement(c.a,Object(n.a)({ref:t},a))}));t.a=f},682:function(e,t,a){"use strict";var n=a(22),r=a(14),s=a(8),c=a(573),i=a(535),o=a(589),l=a(807),u=a(7),d=a.n(u),b=a(96),p=a(5),f=a(2),j=a(10),m=a(39),h=a.n(m),g=a(525),O=a(526),v=a(141),x=a(16),y=Object(j.c)(),N=Object(j.a)();t.a=function(e){var t={multiValue:function(e,t){return Object(s.a)(t),Object(r.a)(Object(r.a)({},e),{},{backgroundColor:"#7367f0"})}},a=Object(f.useState)(!1),u=Object(n.a)(a,2),j=u[0],m=u[1],C=function(){return Object(x.jsx)(f.Fragment,{children:Object(x.jsx)(O.a,{})})},k=e.open,w=e.toggleSidebar,P=e.invoice,L=Object(f.useState)(""),S=Object(n.a)(L,2),E=S[0],D=S[1],_=Object(f.useState)([]),I=Object(n.a)(_,2),R=I[0],B=I[1],T=Object(f.useState)([]),A=Object(n.a)(T,2),M=A[0],q=A[1],V=Object(f.useState)([]),Y=Object(n.a)(V,2),H=Y[0],F=Y[1],z=Object(f.useState)([]),G=Object(n.a)(z,2),K=G[0],J=G[1],W=function(e){p.a.post("contactinformations/list",{contactid:e}).then((function(e){q(e.data.contactinformations)})).catch((function(){}))},U=function(){p.a.post("/emailtemplates/get",{slug:"invoice-send-mail"}).then((function(e){var t,a=e.data.emailtemplates.description.replace("{invoice_date}",(t=P.paymentdue,13===t.length?h()(t,"x").format("MMM DD, YYYY"):h.a.unix(t).format("MMM DD, YYYY"))).replace("{service}",P.taskinvoiceitemsservicename).replace("recipient_name",P.contactperson).replace("{recipient_name}",P.contactperson).replace("{invoice_no}",P.uniqueno).replace("{amount}",P.totalamount).replace("{invoice_amount}",P.totalamount).replace("{your_name}",y.name).replaceAll("{firm_name}",N.name).replace("{","").replace("}","");D(a)})).catch((function(){}))};Object(f.useEffect)((function(){void 0!==P.clientid&&W(P.clientid),void 0!==P.contactid&&W(P.contactid),Object.keys(P).length>0&&(p.a.post("/organizationusers/dropdown").then((function(e){B(e.data.organizationusers)})).catch((function(){})),U())}),[P]);return Object(x.jsx)(c.a,{size:"lg",open:k,title:"Send Invoice",headerClassName:"mb-1",contentClassName:"p-0",bodyClassName:"pb-sm-0 pb-3",toggleSidebar:w,children:Object(x.jsx)(g.a,{blocking:j,loader:Object(x.jsx)(C,{}),children:Object(x.jsxs)(b.H,{children:[Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsx)(b.N,{for:"invoice-from",className:"form-label",children:"To"}),Object(x.jsx)(o.a,{className:d()("react-select"),classNamePrefix:"select",isMulti:!0,options:M,onChange:function(e){F(e.map((function(e){return e.email})))},getOptionLabel:function(e){return"".concat(e.name," - ").concat(e.email)},getOptionValue:function(e){return e.email},styles:t})]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsx)(b.N,{for:"invoice-to",className:"form-label",children:"CC"}),Object(x.jsx)(i.a,{className:d()("react-select"),classNamePrefix:"select",isMulti:!0,onChange:function(e){J(e.map((function(e){return e.email})))},options:R,getOptionLabel:function(e){return"".concat(e.name," - ").concat(e.email)},getOptionValue:function(e){return e.email},styles:t})]}),Object(x.jsxs)("div",{className:"mb-1",children:[Object(x.jsx)(b.N,{for:"invoice-message",className:"form-label",children:"Message"}),Object(x.jsx)("div",{contentEditable:!0,dangerouslySetInnerHTML:{__html:E},className:"border border-1 rounded-2 maxheight-400"})]}),Object(x.jsx)("div",{className:"mb-1",children:Object(x.jsxs)(b.f,{color:"light-primary",children:[Object(x.jsx)(l.a,{className:"me-50",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Invoice Attached"})]})}),Object(x.jsxs)("div",{className:"d-flex flex-wrap mt-2",children:[Object(x.jsx)(b.i,{className:"me-1",color:"primary",onClick:function(){!function(){m(!0);var e="".concat(P.uniqueno," Invoices Acknowledgement Mail");p.a.post("/google/sendGmail",{content:E,subject:e,toEmail:H,ccEmail:K,taskinvoiceId:P.id}).then((function(){w(!1),m(!1),v.b.success("Email send Successfully",{position:"bottom-right"})})),console.log((function(){}))}()},children:"Send"}),Object(x.jsx)(b.i,{color:"secondary",outline:!0,onClick:w,children:"Cancel"})]})]})})})}}}]);
//# sourceMappingURL=38.82e04030.chunk.js.map