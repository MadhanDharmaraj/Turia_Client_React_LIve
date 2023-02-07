(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[87],{1670:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(18),i=a(132),s=a(1),c=a(4),o=a(2),l=a.n(o),u=a(506),p=a(139),d=a(617),f=a(91),b=a(516),v=a.n(b),m=a(517),g=a.n(m),h=a(934),j=a(850),x=a(933),y=a(837),O=a(901),k=a(925),C=a(954),N=a(880),P=a(883),w=a(919),L=a(877),I=a(953),D=a(867),E=a(514),S=a.n(E),R=a(13),B=g()(v.a),_={Sent:{color:"light-secondary",icon:h.a},Paid:{color:"light-success",icon:j.a},Draft:{color:"light-primary",icon:x.a},Downloaded:{color:"light-info",icon:y.a},"Past Due":{color:"light-danger",icon:O.a},"Partial Payment":{color:"light-warning",icon:k.a}},T=function(e){var t=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(R.jsx)(u.a,{color:t,className:"me-50",content:null!==e.contactname?e.contactname.charAt(0):""})},A=function(e){return S()(e,"x").format("MMM DD, YYYY")},F=[{name:"#",sortable:!0,sortField:"id",minWidth:"107px",cell:function(e){return Object(R.jsx)(i.b,{to:"/proposal/view/".concat(e.id),children:"".concat(e.uniqueno)})}},{sortable:!0,minWidth:"102px",sortField:"paymentstatus",name:Object(R.jsx)(C.a,{size:14}),cell:function(e){var t=_[e.paymentstatus]?_[e.paymentstatus].color:"primary",a=_[e.paymentstatus]?_[e.paymentstatus].icon:N.a;return Object(R.jsxs)(s.Fragment,{children:[Object(R.jsx)(u.a,{color:t,icon:Object(R.jsx)(a,{size:14}),id:"av-tooltip-".concat(e.id)}),Object(R.jsxs)(f.zb,{placement:"top",target:"av-tooltip-".concat(e.id),children:[Object(R.jsx)("span",{className:"fw-bold",children:e.paymentstatus}),Object(R.jsx)("br",{}),Object(R.jsx)("span",{className:"fw-bold",children:"Balance:"})," ",e.dueamount,Object(R.jsx)("br",{}),Object(R.jsx)("span",{className:"fw-bold",children:"Due Date:"})," ",A(e.paymentdue)]})]})}},{name:"Client",sortable:!0,minWidth:"350px",sortField:"client.name",cell:function(e){var t=e.contactname,a=e.contactemail;return Object(R.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[T(e),Object(R.jsxs)("div",{className:"d-flex flex-column",children:[Object(R.jsx)("h6",{className:"user-name text-truncate mb-0",children:t}),Object(R.jsx)("small",{className:"text-truncate text-muted mb-0",children:a})]})]})}},{name:"Total",sortable:!0,minWidth:"150px",sortField:"total",cell:function(e){return Object(R.jsx)("span",{children:e.totalamount||0})}},{sortable:!0,minWidth:"200px",name:"Due Date",sortField:"paymentdue",cell:function(e){return A(e.paymentdue)}},{sortable:!0,name:"Balance",minWidth:"164px",sortField:"dueamount",cell:function(e){return 0!==e.dueamount?Object(R.jsx)("span",{children:e.dueamount}):Object(R.jsx)(f.f,{color:"light-success",pill:!0,children:"Paid"})}},{name:"Action",minWidth:"110px",cell:function(e){return Object(R.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(R.jsx)(h.a,{className:"cursor-pointer",size:17,id:"send-tooltip-".concat(e.id)}),Object(R.jsx)(f.zb,{placement:"top",target:"send-tooltip-".concat(e.id),children:"Send Mail"}),Object(R.jsx)(i.b,{to:"/invoice/view/".concat(e.id),id:"pw-tooltip-".concat(e.id),children:Object(R.jsx)(P.a,{size:17,className:"mx-1"})}),Object(R.jsx)(f.zb,{placement:"top",target:"pw-tooltip-".concat(e.id),children:"Preview Invoice"}),Object(R.jsxs)(f.xb,{children:[Object(R.jsx)(f.G,{tag:"span",children:Object(R.jsx)(w.a,{size:17,className:"cursor-pointer"})}),Object(R.jsxs)(f.F,{end:!0,children:[Object(R.jsxs)(f.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(R.jsx)(L.a,{size:14,className:"me-50"}),Object(R.jsx)("span",{className:"align-middle",children:"Download"})]}),Object(R.jsxs)(f.E,{tag:i.b,to:"/invoice/edit/".concat(e.id),className:"w-100",children:[Object(R.jsx)(N.a,{size:14,className:"me-50"}),Object(R.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(R.jsxs)(f.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){var a;t.preventDefault(),a=e.id,B.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=4;break}return e.next=3,p.a.dispatch(Object(d.c)(a));case 3:B.fire({icon:"success",title:"Deleted!",text:"Invoice has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(R.jsx)(I.a,{size:14,className:"me-50"}),Object(R.jsx)("span",{className:"align-middle",children:"Delete"})]}),Object(R.jsxs)(f.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(R.jsx)(D.a,{size:14,className:"me-50"}),Object(R.jsx)("span",{className:"align-middle",children:"Duplicate"})]})]})]})]})}}],q=a(518),H=a.n(q),V=a(853),W=a(524),z=a.n(W),M=a(133),G=(a(543),a(511),function(e){var t=e.handleFilter,a=e.value,n=e.handlePerPage,r=e.rowsPerPage;return Object(R.jsx)("div",{className:"invoice-list-table-header w-100 py-2",children:Object(R.jsxs)(f.jb,{children:[Object(R.jsxs)(f.B,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:[Object(R.jsxs)("div",{className:"d-flex align-items-center me-2",children:[Object(R.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(R.jsxs)(f.L,{type:"select",id:"rows-per-page",value:r,onChange:n,className:"form-control ms-50 pe-3",children:[Object(R.jsx)("option",{value:"10",children:"10"}),Object(R.jsx)("option",{value:"25",children:"25"}),Object(R.jsx)("option",{value:"50",children:"50"})]})]}),Object(R.jsx)(f.i,{tag:i.b,to:"/proposal/add",color:"primary",children:"Add Proposal"})]}),Object(R.jsx)(f.B,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0",children:Object(R.jsxs)("div",{className:"d-flex align-items-center",children:[Object(R.jsx)("label",{htmlFor:"search-invoice",children:"Search"}),Object(R.jsx)(f.L,{id:"search-invoice",className:"ms-50 me-2 w-100",type:"text",value:a,onChange:function(e){return t(e.target.value)},placeholder:"Search Proposal"})]})})]})})});t.default=function(){var e=Object(M.b)(),t=Object(M.c)((function(e){return e.invoice})),a=Object(s.useState)(""),i=Object(r.a)(a,2),c=i[0],o=i[1],l=Object(s.useState)("desc"),u=Object(r.a)(l,2),p=u[0],b=u[1],v=Object(s.useState)("id"),m=Object(r.a)(v,2),g=m[0],h=m[1],j=Object(s.useState)(1),x=Object(r.a)(j,2),y=x[0],O=x[1],k=Object(s.useState)(10),C=Object(r.a)(k,2),N=C[0],P=C[1],w=Object(s.useState)({id:4,name:"Draft"}),L=Object(r.a)(w,2),I=L[0],D=L[1],E=Object(s.forwardRef)((function(e,t){return Object(R.jsx)("div",{className:"form-check",children:Object(R.jsx)(f.L,Object(n.a)({type:"checkbox",ref:t},e))})}));Object(s.useEffect)((function(){e(Object(d.f)({sort:p,q:c,sortColumn:g,page:y,perPage:N,status:I.id}))}),[e,t.data.length]);return Object(R.jsx)("div",{className:"invoice-list-wrapper",children:Object(R.jsx)(f.l,{children:Object(R.jsx)("div",{className:"invoice-list-dataTable react-dataTable",children:Object(R.jsx)(z.a,{noHeader:!0,pagination:!0,sortServer:!0,paginationServer:!0,subHeader:!0,columns:F,responsive:!0,selectableRows:!0,onSort:function(t,a){b(a),h(t.sortField),e(Object(d.f)({q:c,page:y,sort:a,status:I.id,perPage:N,sortColumn:t.sortField}))},data:function(){var e={q:c,status:I.id},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),sortIcon:Object(R.jsx)(V.a,{}),className:"react-dataTable",defaultSortField:"invoiceId",paginationDefaultPage:y,selectableRowsComponent:E,paginationComponent:function(){var a=Number((t.total/N).toFixed(0));return Object(R.jsx)(H.a,{nextLabel:"",breakLabel:"...",previousLabel:"",pageCount:a||1,activeClassName:"active",breakClassName:"page-item",pageClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",pageLinkClassName:"page-link",nextClassName:"page-item next",previousLinkClassName:"page-link",previousClassName:"page-item prev",onPageChange:function(t){return function(t){e(Object(d.f)({sort:p,q:c,sortColumn:g,status:I.id,perPage:N,page:t.selected+1})),O(t.selected+1)}(t)},forcePage:0!==y?y-1:0,containerClassName:"pagination react-paginate justify-content-end p-1"})},subHeaderComponent:Object(R.jsx)(G,{value:c,currentStatus:I,rowsPerPage:N,handleFilter:function(t){o(t),e(Object(d.f)({sort:p,q:t,sortColumn:g,page:y,perPage:N,status:I.id}))},handlePerPage:function(t){e(Object(d.f)({sort:p,q:c,sortColumn:g,page:y,status:I.id,perPage:parseInt(t.target.value)})),P(parseInt(t.target.value))},handleStatusValue:function(t){D(t.target.value),e(Object(d.f)({sort:p,q:c,sortColumn:g,page:y,perPage:N,status:t.target.value}))}})})})})})}},511:function(e,t,a){},518:function(e,t,a){(function(n){var r;e.exports=(r=a(1),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),i=n.n(r),s=n(0),c=n.n(s);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,s=e.activeClassName,c=e.activeLinkClassName,l=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+n+(d?" "+d:""),b=null;return r&&(b="page",f=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+s:s,void 0!==a?void 0!==c&&(a=a+" "+c):a=c),i.a.createElement("li",{className:t},i.a.createElement("a",o({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},l(u)),n))};l.propTypes={pageSelectedHandler:c.a.func.isRequired,selected:c.a.bool.isRequired,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,extraAriaContext:c.a.string,href:c.a.string,ariaLabel:c.a.string,page:c.a.number.isRequired,getEventListener:c.a.func.isRequired};var u=l;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,s=e.getEventListener,c=a||"break";return i.a.createElement("li",{className:c},i.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},s(r)),t))};d.propTypes={breakLabel:c.a.oneOfType([c.a.string,c.a.node]),breakClassName:c.a.string,breakLinkClassName:c.a.string,breakHandler:c.a.func.isRequired,getEventListener:c.a.func.isRequired};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y(e);if(t){var r=y(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,a,n,r=h(s);function s(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),O(x(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),O(x(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),O(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),O(x(t),"getEventListener",(function(e){return O({},t.props.eventListener,e)})),O(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),O(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),O(x(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,s=a.marginPagesDisplayed,c=a.breakLabel,o=a.breakClassName,l=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var d,b,v,m=n/2,g=n-m;u>r-n/2?m=n-(g=r-u):u<n/2&&(g=n-(m=u));var h=function(e){return t.getPageElement(e)};for(d=0;d<r;d++)(b=d+1)<=s||b>r-s||d>=u-m&&d<=u+g?e.push(h(d)):c&&e[e.length-1]!==v&&(v=i.a.createElement(f,{key:d,breakLabel:c,breakClassName:o,breakLinkClassName:l,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(v))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=s,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,s=a.activeClassName,c=a.activeLinkClassName,o=a.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:s,activeLinkClassName:c,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,s=e.previousClassName,c=e.previousLinkClassName,o=e.previousAriaLabel,l=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,m=this.state.selected,g=s+(0===m?" ".concat(t):""),h=p+(m===a-1?" ".concat(t):""),j=0===m?"true":"false",x=m===a-1?"true":"false";return i.a.createElement("ul",{className:n},i.a.createElement("li",{className:g},i.a.createElement("a",v({className:c,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":o,rel:l},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),i.a.createElement("li",{className:h},i.a.createElement("a",v({className:d,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&m(t.prototype,a),n&&m(t,n),s}(r.Component);O(k,"propTypes",{pageCount:c.a.number.isRequired,pageRangeDisplayed:c.a.number.isRequired,marginPagesDisplayed:c.a.number.isRequired,previousLabel:c.a.node,previousAriaLabel:c.a.string,prevRel:c.a.string,nextLabel:c.a.node,nextAriaLabel:c.a.string,nextRel:c.a.string,breakLabel:c.a.oneOfType([c.a.string,c.a.node]),hrefBuilder:c.a.func,onPageChange:c.a.func,initialPage:c.a.number,forcePage:c.a.number,disableInitialCallback:c.a.bool,containerClassName:c.a.string,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,previousClassName:c.a.string,nextClassName:c.a.string,previousLinkClassName:c.a.string,nextLinkClassName:c.a.string,disabledClassName:c.a.string,breakClassName:c.a.string,breakLinkClassName:c.a.string,extraAriaContext:c.a.string,ariaLabelBuilder:c.a.func,eventListener:c.a.string}),O(k,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=k,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(21))},543:function(e,t,a){},617:function(e,t,a){"use strict";a.d(t,"f",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f})),a.d(t,"g",(function(){return v})),a.d(t,"h",(function(){return m})),a.d(t,"i",(function(){return g})),a.d(t,"e",(function(){return h})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return x}));var n=a(10),r=a(4),i=a(2),s=a.n(i),c=a(3),o=a(5),l=a(12),u=Object(l.d)(),p=Object(c.b)("appInvoice/getData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/taskinvoices/list",t);case 2:return a=e.sent,e.abrupt("return",{params:t,data:a.data.taskinvoices.taskinvoices,totalPages:a.data.taskinvoices.total});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(c.b)("appInvoice/addInvoice",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,o.a.post("/taskinvoices/create",t);case 4:return r=e.sent,e.abrupt("return",{invoices:r.data.taskinvoices});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),f=Object(c.b)("appInvoice/addInvoiceItems",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,o.a.post("/taskinvoiceitems/create",{rows:t});case 4:return r=e.sent,e.abrupt("return",{invoiceItems:r.data.taskinvoiceitems});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),b=Object(c.b)("appInvoice/getInvoice",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/taskinvoices/get",{id:t});case 2:return a=e.sent,e.abrupt("return",{invoice:a.data.taskinvoices});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(c.b)("appInvoice/getInvoiceItem",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/taskinvoiceitems/list",{invoiceId:t});case 2:return a=e.sent,e.abrupt("return",a.data.taskinvoiceitems);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=(Object(c.b)("appInvoice/getInvoiceTax",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/invoicetaxes/list",{invoiceId:t});case 2:return a=e.sent,e.abrupt("return",a.data.invoicetaxes);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(c.b)("appInvoice/getInvoiceItemTax",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/invoiceitemtaxes/list",{invoiceId:t});case 2:return a=e.sent,e.abrupt("return",a.data.invoiceitemtaxes);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(c.b)("appInvoice/updateInvoice",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,o.a.post("/taskinvoices/update",t);case 4:return r=e.sent,e.abrupt("return",{invoices:r.data.taskinvoices});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}())),g=Object(c.b)("appInvoice/updateInvoiceItems",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,o.a.post("/taskinvoiceitems/update",{rows:t});case 4:return r=e.sent,e.abrupt("return",{invoiceItems:r.data.taskinvoiceitems});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(getExceptionPayload(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),h=Object(c.b)("appInvoice/getClient",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/clients/get",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.clients);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(c.b)("appInvoice/deleteInvoice",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,e.next=3,o.a.post("/taskinvoices/delete",{id:t,updatedBy:u});case 3:return e.next=5,n(p(r().invoice.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),x=Object(c.b)("appInvoice/deleteInvoiceItem",function(){var e=Object(r.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(n.a)(a),e.next=3,o.a.post("/taskinvoiceitems/delete",{id:t,updatedBy:u});case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());Object(c.c)({name:"appInvoice",initialState:{data:[],total:1,params:{},allData:[],invoiceId:null,invoiceItems:[],selectedInvoice:null},reducers:{},extraReducers:function(e){e.addCase(p.fulfilled,(function(e,t){e.data=t.payload.data,e.allData=t.payload.allData,e.total=t.payload.totalPages,e.params=t.payload.params})),e.addCase(d.fulfilled,(function(e,t){e.invoiceId=t.payload.invoices.id})),e.addCase(m.fulfilled,(function(e,t){e.invoiceId=t.payload.invoices.id})),e.addCase(f.fulfilled,(function(e,t){e.invoiceItems=t.payload.invoiceItems})),e.addCase(g.fulfilled,(function(e,t){e.invoiceItems=t.payload.invoiceItems})),e.addCase(b.fulfilled,(function(e,t){e.selectedInvoice=t.payload.invoice}))}}).reducer}}]);
//# sourceMappingURL=87.9b2327cc.chunk.js.map