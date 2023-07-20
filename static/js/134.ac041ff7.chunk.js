(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[134],{1480:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(4),i=a(22),s=a(2),o=a(139),c=a(527),l=a(16),u=function(e){return Object(l.jsx)(c.a,{initials:!0,className:"me-1",color:"light-primary",content:e.contactname?e.contactname.charAt(0):"T"})},p=[{name:"Invoice No",sortable:!0,minWidth:"108px",selector:function(e){return e.uniqueno},cell:function(e){return Object(l.jsx)("span",{className:"text-capitalize",children:e.uniqueno})}},{name:"Client",sortable:!0,minWidth:"370px",sortField:"uniqueidentity",selector:function(e){return e.id},cell:function(e){return Object(l.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[u(e),Object(l.jsx)("div",{className:"d-flex flex-column",children:Object(l.jsx)(o.b,{to:"/client/view/".concat(e.id),className:"user_name text-truncate text-body",children:Object(l.jsx)("span",{className:"fw-bolder",children:e.contactname})})})]})}},{name:"Sub Total",sortable:!0,minWidth:"108px",selector:function(e){return e.subtotalamount},cell:function(e){return Object(l.jsx)("span",{className:"text-capitalize",children:e.subtotalamount||0})}},{name:"Tax Amount",sortable:!0,minWidth:"108px",selector:function(e){return e.totaltaxamount},cell:function(e){return Object(l.jsx)("span",{className:"text-capitalize",children:e.totaltaxamount||0})}},{name:"Total Amount",sortable:!0,minWidth:"108px",selector:function(e){return e.totalamount},cell:function(e){return Object(l.jsx)("span",{className:"text-capitalize",children:e.totalamount||0})}},{name:"Balance",sortable:!0,minWidth:"108px",selector:function(e){return e.dueamount},cell:function(e){return Object(l.jsx)("span",{className:"text-capitalize",children:e.dueamount||0})}}],f=a(165),d=a(140),b=a(530),m=a.n(b),g=a(546),v=a.n(g),h=a(757),x=(a(534),a(531),a(96)),y=function(e){var t=e.handlePerPage,a=e.rowsPerPage,n=e.handleFilter,r=e.searchTerm;return Object(l.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(l.jsxs)(x.ib,{children:[Object(l.jsx)(x.B,{xl:"6",md:"6",sm:"6",className:"d-flex align-items-center p-0",children:Object(l.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(l.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(l.jsxs)(x.K,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(l.jsx)("option",{value:"10",children:"10"}),Object(l.jsx)("option",{value:"25",children:"25"}),Object(l.jsx)("option",{value:"50",children:"50"})]}),Object(l.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(l.jsx)(x.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:Object(l.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(l.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(l.jsx)(x.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:r,onChange:function(e){return n(e.target.value)}})]})})]})})};t.default=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.salesreport})),a=Object(s.useState)("desc"),o=Object(i.a)(a,2),c=o[0],u=o[1],b=Object(s.useState)(""),g=Object(i.a)(b,2),j=g[0],O=g[1],C=Object(s.useState)(1),N=Object(i.a)(C,2),k=N[0],P=N[1],L=Object(s.useState)("createdon"),w=Object(i.a)(L,2),E=w[0],S=w[1],R=Object(s.useState)(10),_=Object(i.a)(R,2),T=_[0],B=_[1];Object(s.useEffect)(Object(r.a)(Object(n.a)().mark((function t(){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(f.c)({sort:c,sortColumn:E,q:j,page:k,perPage:T}));case 2:case"end":return t.stop()}}),t)}))),[e,t.data.length,c,E,k]);var D=function(){var t=Object(r.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(f.c)({sort:c,sortColumn:E,q:j,perPage:T,page:a.selected+1}));case 2:P(a.selected+1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(r.a)(Object(n.a)().mark((function t(a){var r;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=parseInt(a.currentTarget.value),t.next=3,e(Object(f.c)({sort:c,sortColumn:E,q:j,perPage:r,page:k}));case 3:B(r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){var t=Object(r.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(a),t.next=3,e(Object(f.c)({sort:c,q:a,sortColumn:E,page:k,perPage:T}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(r.a)(Object(n.a)().mark((function t(a,r){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(r),S(a.sortField),t.next=4,e(Object(f.c)({sort:c,sortColumn:E,q:j,page:k,perPage:T}));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return Object(l.jsx)(s.Fragment,{children:Object(l.jsx)(x.l,{className:"overflow-hidden",children:Object(l.jsx)("div",{className:"react-dataTable",children:Object(l.jsx)(v.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:p,onSort:H,sortIcon:Object(l.jsx)(h.a,{}),className:"react-dataTable",paginationComponent:function(){var e=Number(Math.ceil(t.total/T));return Object(l.jsx)(m.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==k?k-1:0,onPageChange:function(e){return D(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={q:j},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(l.jsx)(y,{store:t,searchTerm:j,rowsPerPage:T,handleFilter:q,handlePerPage:A})})})})})}},530:function(e,t,a){(function(n){var r;e.exports=(r=a(2),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),i=n.n(r),s=n(0),o=n.n(s);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,s=e.activeClassName,o=e.activeLinkClassName,l=e.getEventListener,u=e.pageSelectedHandler,p=e.href,f=e.extraAriaContext,d=e.ariaLabel||"Page "+n+(f?" "+f:""),b=null;return r&&(b="page",d=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+s:s,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),i.a.createElement("li",{className:t},i.a.createElement("a",c({role:"button",className:a,href:p,tabIndex:"0","aria-label":d,"aria-current":b,onKeyPress:u},l(u)),n))};l.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var u=l;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var f=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,s=e.getEventListener,o=a||"break";return i.a.createElement("li",{className:o},i.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},s(r)),t))};f.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var d=f;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=j(e);if(t){var r=j(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x(this,a)}}function x(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(s,e);var t,a,n,r=h(s);function s(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),O(y(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),O(y(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),O(y(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),O(y(t),"getEventListener",(function(e){return O({},t.props.eventListener,e)})),O(y(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),O(y(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),O(y(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,s=a.marginPagesDisplayed,o=a.breakLabel,c=a.breakClassName,l=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var f,b,m,g=n/2,v=n-g;u>r-n/2?g=n-(v=r-u):u<n/2&&(v=n-(g=u));var h=function(e){return t.getPageElement(e)};for(f=0;f<r;f++)(b=f+1)<=s||b>r-s||f>=u-g&&f<=u+v?e.push(h(f)):o&&e[e.length-1]!==m&&(m=i.a.createElement(d,{key:f,breakLabel:o,breakClassName:c,breakLinkClassName:l,breakHandler:t.handleBreakClick.bind(null,f),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=s,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,s=a.activeClassName,o=a.activeLinkClassName,c=a.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,s=e.previousClassName,o=e.previousLinkClassName,c=e.previousAriaLabel,l=e.prevRel,u=e.nextLabel,p=e.nextClassName,f=e.nextLinkClassName,d=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,v=s+(0===g?" ".concat(t):""),h=p+(g===a-1?" ".concat(t):""),x=0===g?"true":"false",y=g===a-1?"true":"false";return i.a.createElement("ul",{className:n},i.a.createElement("li",{className:v},i.a.createElement("a",m({className:o,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":x,"aria-label":c,rel:l},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),i.a.createElement("li",{className:h},i.a.createElement("a",m({className:f,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":y,"aria-label":d,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),n&&g(t,n),s}(r.Component);O(C,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,prevRel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,nextRel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),O(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=void 0;try{i=n[r]}catch(e){continue}e.register(i,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(20))},531:function(e,t,a){}}]);
//# sourceMappingURL=134.ac041ff7.chunk.js.map