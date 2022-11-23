(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[15],{1496:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),i=a(131),s=a(1),l=a(489),o=a(141),c=a(142),u=a(90),p=a(926),d=a(844),b=a(925),f=a(830),g=a(895),m=a(918),h=a(946),v=a(874),j=a(877),x=a(912),O=a(871),y=a(944),C=a(861),N=a(11),P={Sent:{color:"light-secondary",icon:p.a},Paid:{color:"light-success",icon:d.a},Draft:{color:"light-primary",icon:b.a},Downloaded:{color:"light-info",icon:f.a},"Past Due":{color:"light-danger",icon:g.a},"Partial Payment":{color:"light-warning",icon:m.a}},k=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(N.jsx)(l.a,{className:"me-50",img:e.avatar,width:"32",height:"32"}):Object(N.jsx)(l.a,{color:t,className:"me-50",content:e.client?e.client.name:"John Doe",initials:!0})},L=[{name:"#",sortable:!0,sortField:"id",minWidth:"107px",cell:function(e){return Object(N.jsx)(i.b,{to:"/invoice/preview/".concat(e.id),children:"#".concat(e.id)})}},{sortable:!0,minWidth:"102px",sortField:"invoiceStatus",name:Object(N.jsx)(h.a,{size:14}),cell:function(e){var t=P[e.invoiceStatus]?P[e.invoiceStatus].color:"primary",a=P[e.invoiceStatus]?P[e.invoiceStatus].icon:v.a;return Object(N.jsxs)(s.Fragment,{children:[Object(N.jsx)(l.a,{color:t,icon:Object(N.jsx)(a,{size:14}),id:"av-tooltip-".concat(e.id)}),Object(N.jsxs)(u.yb,{placement:"top",target:"av-tooltip-".concat(e.id),children:[Object(N.jsx)("span",{className:"fw-bold",children:e.invoiceStatus}),Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"fw-bold",children:"Balance:"})," ",e.balance,Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"fw-bold",children:"Due Date:"})," ",e.dueDate]})]})}},{name:"Client",sortable:!0,minWidth:"350px",sortField:"client.name",cell:function(e){var t=e.client?e.client.name:"John Doe",a=e.client?e.client.companyEmail:"johnDoe@email.com";return Object(N.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[k(e),Object(N.jsxs)("div",{className:"d-flex flex-column",children:[Object(N.jsx)("h6",{className:"user-name text-truncate mb-0",children:t}),Object(N.jsx)("small",{className:"text-truncate text-muted mb-0",children:a})]})]})}},{name:"Total",sortable:!0,minWidth:"150px",sortField:"total",cell:function(e){return Object(N.jsxs)("span",{children:["$",e.total||0]})}},{sortable:!0,minWidth:"200px",name:"Issued Date",sortField:"dueDate",cell:function(e){return e.dueDate}},{sortable:!0,name:"Balance",minWidth:"164px",sortField:"balance",cell:function(e){return 0!==e.balance?Object(N.jsx)("span",{children:e.balance}):Object(N.jsx)(u.f,{color:"light-success",pill:!0,children:"Paid"})}},{name:"Action",minWidth:"110px",cell:function(e){return Object(N.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(N.jsx)(p.a,{className:"cursor-pointer",size:17,id:"send-tooltip-".concat(e.id)}),Object(N.jsx)(u.yb,{placement:"top",target:"send-tooltip-".concat(e.id),children:"Send Mail"}),Object(N.jsx)(i.b,{to:"/invoice/preview/".concat(e.id),id:"pw-tooltip-".concat(e.id),children:Object(N.jsx)(j.a,{size:17,className:"mx-1"})}),Object(N.jsx)(u.yb,{placement:"top",target:"pw-tooltip-".concat(e.id),children:"Preview Invoice"}),Object(N.jsxs)(u.wb,{children:[Object(N.jsx)(u.G,{tag:"span",children:Object(N.jsx)(x.a,{size:17,className:"cursor-pointer"})}),Object(N.jsxs)(u.F,{end:!0,children:[Object(N.jsxs)(u.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(N.jsx)(O.a,{size:14,className:"me-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Download"})]}),Object(N.jsxs)(u.E,{tag:i.b,to:"/invoice/edit/".concat(e.id),className:"w-100",children:[Object(N.jsx)(v.a,{size:14,className:"me-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(N.jsxs)(u.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){t.preventDefault(),o.a.dispatch(Object(c.b)(e.id))},children:[Object(N.jsx)(y.a,{size:14,className:"me-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Delete"})]}),Object(N.jsxs)(u.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(N.jsx)(C.a,{size:14,className:"me-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Duplicate"})]})]})]})]})}}],w=a(498),S=a.n(w),D=a(847),E=a(504),R=a.n(E),_=a(132),B=(a(525),a(497),function(e){var t=e.handleFilter,a=e.value,n=e.handleStatusValue,r=e.statusValue,s=e.handlePerPage,l=e.rowsPerPage;return Object(N.jsx)("div",{className:"invoice-list-table-header w-100 py-2",children:Object(N.jsxs)(u.ib,{children:[Object(N.jsxs)(u.B,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center me-2",children:[Object(N.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(N.jsxs)(u.K,{type:"select",id:"rows-per-page",value:l,onChange:s,className:"form-control ms-50 pe-3",children:[Object(N.jsx)("option",{value:"10",children:"10"}),Object(N.jsx)("option",{value:"25",children:"25"}),Object(N.jsx)("option",{value:"50",children:"50"})]})]}),Object(N.jsx)(u.i,{tag:i.b,to:"/invoice/add",color:"primary",children:"Add Record"})]}),Object(N.jsxs)(u.B,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)("label",{htmlFor:"search-invoice",children:"Search"}),Object(N.jsx)(u.K,{id:"search-invoice",className:"ms-50 me-2 w-100",type:"text",value:a,onChange:function(e){return t(e.target.value)},placeholder:"Search Invoice"})]}),Object(N.jsxs)(u.K,{className:"w-auto ",type:"select",value:r,onChange:n,children:[Object(N.jsx)("option",{value:"",children:"Select Status"}),Object(N.jsx)("option",{value:"downloaded",children:"Downloaded"}),Object(N.jsx)("option",{value:"draft",children:"Draft"}),Object(N.jsx)("option",{value:"paid",children:"Paid"}),Object(N.jsx)("option",{value:"partial payment",children:"Partial Payment"}),Object(N.jsx)("option",{value:"past due",children:"Past Due"}),Object(N.jsx)("option",{value:"sent",children:"Sent"})]})]})]})})});t.default=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.invoice})),a=Object(s.useState)(""),i=Object(r.a)(a,2),l=i[0],o=i[1],p=Object(s.useState)("desc"),d=Object(r.a)(p,2),b=d[0],f=d[1],g=Object(s.useState)("id"),m=Object(r.a)(g,2),h=m[0],v=m[1],j=Object(s.useState)(1),x=Object(r.a)(j,2),O=x[0],y=x[1],C=Object(s.useState)(""),P=Object(r.a)(C,2),k=P[0],w=P[1],E=Object(s.useState)(10),T=Object(r.a)(E,2),A=T[0],F=T[1],H=Object(s.forwardRef)((function(e,t){return Object(N.jsx)("div",{className:"form-check",children:Object(N.jsx)(u.K,Object(n.a)({type:"checkbox",ref:t},e))})}));Object(s.useEffect)((function(){e(Object(c.c)({sort:b,q:l,sortColumn:h,page:O,perPage:A,status:k}))}),[e,t.data.length]);return Object(N.jsx)("div",{className:"invoice-list-wrapper",children:Object(N.jsx)(u.l,{children:Object(N.jsx)("div",{className:"invoice-list-dataTable react-dataTable",children:Object(N.jsx)(R.a,{noHeader:!0,pagination:!0,sortServer:!0,paginationServer:!0,subHeader:!0,columns:L,responsive:!0,selectableRows:!0,onSort:function(t,a){f(a),v(t.sortField),e(Object(c.c)({q:l,page:O,sort:a,status:k,perPage:A,sortColumn:t.sortField}))},data:function(){var e={q:l,status:k},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,A)}(),sortIcon:Object(N.jsx)(D.a,{}),className:"react-dataTable",defaultSortField:"invoiceId",paginationDefaultPage:O,selectableRowsComponent:H,paginationComponent:function(){var a=Number((t.total/A).toFixed(0));return Object(N.jsx)(S.a,{nextLabel:"",breakLabel:"...",previousLabel:"",pageCount:a||1,activeClassName:"active",breakClassName:"page-item",pageClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",pageLinkClassName:"page-link",nextClassName:"page-item next",previousLinkClassName:"page-link",previousClassName:"page-item prev",onPageChange:function(t){return function(t){e(Object(c.c)({sort:b,q:l,sortColumn:h,status:k,perPage:A,page:t.selected+1})),y(t.selected+1)}(t)},forcePage:0!==O?O-1:0,containerClassName:"pagination react-paginate justify-content-end p-1"})},subHeaderComponent:Object(N.jsx)(B,{value:l,statusValue:k,rowsPerPage:A,handleFilter:function(t){o(t),e(Object(c.c)({sort:b,q:t,sortColumn:h,page:O,perPage:A,status:k}))},handlePerPage:function(t){e(Object(c.c)({sort:b,q:l,sortColumn:h,page:O,status:k,perPage:parseInt(t.target.value)})),F(parseInt(t.target.value))},handleStatusValue:function(t){w(t.target.value),e(Object(c.c)({sort:b,q:l,sortColumn:h,page:O,perPage:A,status:t.target.value}))}})})})})})}},497:function(e,t,a){},498:function(e,t,a){(function(n){var r;e.exports=(r=a(1),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),i=n.n(r),s=n(0),l=n.n(s);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,b=e.ariaLabel||"Page "+n+(d?" "+d:""),f=null;return r&&(f="page",b=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+s:s,void 0!==a?void 0!==l&&(a=a+" "+l):a=l),i.a.createElement("li",{className:t},i.a.createElement("a",o({role:"button",className:a,href:p,tabIndex:"0","aria-label":b,"aria-current":f,onKeyPress:u},c(u)),n))};c.propTypes={pageSelectedHandler:l.a.func.isRequired,selected:l.a.bool.isRequired,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,extraAriaContext:l.a.string,href:l.a.string,ariaLabel:l.a.string,page:l.a.number.isRequired,getEventListener:l.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,s=e.getEventListener,l=a||"break";return i.a.createElement("li",{className:l},i.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},s(r)),t))};d.propTypes={breakLabel:l.a.oneOfType([l.a.string,l.a.node]),breakClassName:l.a.string,breakLinkClassName:l.a.string,breakHandler:l.a.func.isRequired,getEventListener:l.a.func.isRequired};var b=d;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=O(e);if(t){var r=O(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(s,e);var t,a,n,r=v(s);function s(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),y(x(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(x(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),y(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(x(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),y(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(x(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,s=a.marginPagesDisplayed,l=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var d,f,g,m=n/2,h=n-m;u>r-n/2?m=n-(h=r-u):u<n/2&&(h=n-(m=u));var v=function(e){return t.getPageElement(e)};for(d=0;d<r;d++)(f=d+1)<=s||f>r-s||d>=u-m&&d<=u+h?e.push(v(d)):l&&e[e.length-1]!==g&&(g=i.a.createElement(b,{key:d,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(g))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=s,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,s=a.activeClassName,l=a.activeLinkClassName,o=a.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:s,activeLinkClassName:l,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,s=e.previousClassName,l=e.previousLinkClassName,o=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,b=e.nextAriaLabel,f=e.nextRel,m=this.state.selected,h=s+(0===m?" ".concat(t):""),v=p+(m===a-1?" ".concat(t):""),j=0===m?"true":"false",x=m===a-1?"true":"false";return i.a.createElement("ul",{className:n},i.a.createElement("li",{className:h},i.a.createElement("a",g({className:l,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":o,rel:c},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),i.a.createElement("li",{className:v},i.a.createElement("a",g({className:d,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":b,rel:f},this.getEventListener(this.handleNextPage)),u)))}}])&&m(t.prototype,a),n&&m(t,n),s}(r.Component);y(C,"propTypes",{pageCount:l.a.number.isRequired,pageRangeDisplayed:l.a.number.isRequired,marginPagesDisplayed:l.a.number.isRequired,previousLabel:l.a.node,previousAriaLabel:l.a.string,prevRel:l.a.string,nextLabel:l.a.node,nextAriaLabel:l.a.string,nextRel:l.a.string,breakLabel:l.a.oneOfType([l.a.string,l.a.node]),hrefBuilder:l.a.func,onPageChange:l.a.func,initialPage:l.a.number,forcePage:l.a.number,disableInitialCallback:l.a.bool,containerClassName:l.a.string,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,previousClassName:l.a.string,nextClassName:l.a.string,previousLinkClassName:l.a.string,nextLinkClassName:l.a.string,disabledClassName:l.a.string,breakClassName:l.a.string,breakLinkClassName:l.a.string,extraAriaContext:l.a.string,ariaLabelBuilder:l.a.func,eventListener:l.a.string}),y(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(19))},525:function(e,t,a){}}]);
//# sourceMappingURL=15.ad1f15e3.chunk.js.map