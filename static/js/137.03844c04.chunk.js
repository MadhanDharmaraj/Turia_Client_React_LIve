(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[137],{1475:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(4),s=a(22),i=a(2),o=a(140),l=a(527),c=a(16),u=function(e){return Object(c.jsx)(l.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name.charAt(0)||"T"})},p=[{name:"Name",sortable:!0,minWidth:"138px",sortField:"uniqueidentity",selector:function(e){return e.id},cell:function(e){return Object(c.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[u(e),Object(c.jsx)("div",{className:"d-flex flex-column",children:Object(c.jsx)(o.b,{to:"/task/view/".concat(e.id),className:"user_name text-truncate text-body",children:Object(c.jsx)("span",{className:"fw-bolder",children:e.name})})})]})}},{name:"No Of Completed Total",sortable:!0,minWidth:"172px",sortField:"clientname",selector:function(e){return e.completedtasks},cell:function(e){return Object(c.jsx)("span",{className:"text-capitalize",children:e.completedtasks})}},{name:"No Of Tasks Pending",sortable:!0,minWidth:"172px",sortField:"clientname",selector:function(e){return e.todotasks},cell:function(e){return Object(c.jsx)("span",{className:"text-capitalize",children:e.todotasks})}},{name:"No Of Total Tasks",sortable:!0,minWidth:"172px",sortField:"clientname",selector:function(e){return e.totaltasks},cell:function(e){return Object(c.jsx)("span",{className:"text-capitalize",children:e.totaltasks})}}],d=a(205),f=a(141),b=a(530),m=a.n(b),g=a(546),v=a.n(g),h=a(823),x=a(780),j=a(757),y=a(97),O=(a(534),a(531),function(e){var t=e.handlePerPage,a=e.rowsPerPage,r=e.handleFilter,n=e.searchTerm,s=e.exportList;return Object(c.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(c.jsxs)(y.ib,{children:[Object(c.jsx)(y.B,{xl:"6",md:"6",sm:"6",className:"d-flex align-items-center p-0",children:Object(c.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(c.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(c.jsxs)(y.K,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(c.jsx)("option",{value:"10",children:"10"}),Object(c.jsx)("option",{value:"25",children:"25"}),Object(c.jsx)("option",{value:"50",children:"50"})]}),Object(c.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(c.jsxs)(y.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(c.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(c.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(c.jsx)(y.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(c.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:Object(c.jsxs)(y.wb,{className:"ms-1",children:[Object(c.jsx)(y.G,{color:"secondary",caret:!0,outline:!0,children:Object(c.jsx)(h.a,{className:"font-small-4 me-50"})}),Object(c.jsx)(y.F,{children:Object(c.jsxs)(y.E,{onClick:function(){s()},className:"w-100",children:[Object(c.jsx)(x.a,{className:"font-small-4 me-50"}),Object(c.jsx)("span",{className:"align-middle",children:"Export"})]})})]})})]})]})})});t.default=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.taskreport})),a=Object(i.useState)("desc"),o=Object(s.a)(a,2),l=o[0],u=o[1],b=Object(i.useState)(""),g=Object(s.a)(b,2),h=g[0],x=g[1],C=Object(i.useState)(1),N=Object(s.a)(C,2),k=N[0],P=N[1],L=Object(i.useState)("createdon"),w=Object(s.a)(L,2),E=w[0],S=w[1],R=Object(i.useState)(10),_=Object(s.a)(R,2),T=_[0],D=_[1];Object(i.useEffect)((function(){e(Object(d.c)({sort:l,sortColumn:E,q:h,page:k,perPage:T}))}),[e,t.data.length,l,E,k]);var B=function(){var t=Object(n.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(d.b)({sort:l,sortColumn:E,q:h}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsx)(i.Fragment,{children:Object(c.jsx)(y.l,{className:"overflow-hidden",children:Object(c.jsx)("div",{className:"react-dataTable",children:Object(c.jsx)(v.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:p,onSort:function(t,a){u(a),S(t.sortField),e(Object(d.c)({sort:l,sortColumn:E,q:h,page:k,perPage:T}))},sortIcon:Object(c.jsx)(j.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Number(Math.ceil(t.total/T));return Object(c.jsx)(m.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==k?k-1:0,onPageChange:function(t){return function(t){e(Object(d.c)({sort:l,sortColumn:E,q:h,perPage:T,page:t.selected+1})),P(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={q:h},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(c.jsx)(O,{store:t,searchTerm:h,rowsPerPage:T,handleFilter:function(t){x(t),e(Object(d.c)({sort:l,q:t,sortColumn:E,page:k,perPage:T}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(d.c)({sort:l,sortColumn:E,q:h,perPage:a,page:k})),D(a)},exportList:B})})})})})}},530:function(e,t,a){(function(r){var n;e.exports=(n=a(2),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var r=a(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,r){"use strict";r.r(a);var n=r(1),s=r.n(n),i=r(0),o=r.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,i=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+r+(d?" "+d:""),b=null;return n&&(b="page",f=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),s.a.createElement("li",{className:t},s.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,o=a||"break";return s.a.createElement("li",{className:o},s.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},i(n)),t))};d.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y(e);if(t){var n=y(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return x(this,a)}}function x(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,a,r,n=h(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),O(j(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),O(j(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),O(j(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),O(j(t),"getEventListener",(function(e){return O({},t.props.eventListener,e)})),O(j(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),O(j(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),O(j(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,i=a.marginPagesDisplayed,o=a.breakLabel,l=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(t.getPageElement(p));else{var d,b,m,g=r/2,v=r-g;u>n-r/2?g=r-(v=n-u):u<r/2&&(v=r-(g=u));var h=function(e){return t.getPageElement(e)};for(d=0;d<n;d++)(b=d+1)<=i||b>n-i||d>=u-g&&d<=u+v?e.push(h(d)):o&&e[e.length-1]!==m&&(m=s.a.createElement(f,{key:d,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,i=a.activeClassName,o=a.activeLinkClassName,l=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:n,activeClassName:i,activeLinkClassName:o,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,n=e.previousLabel,i=e.previousClassName,o=e.previousLinkClassName,l=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,v=i+(0===g?" ".concat(t):""),h=p+(g===a-1?" ".concat(t):""),x=0===g?"true":"false",j=g===a-1?"true":"false";return s.a.createElement("ul",{className:r},s.a.createElement("li",{className:v},s.a.createElement("a",m({className:o,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":x,"aria-label":l,rel:c},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),s.a.createElement("li",{className:h},s.a.createElement("a",m({className:d,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":j,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),r&&g(t,r),i}(n.Component);O(C,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,prevRel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,nextRel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),O(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(20))},531:function(e,t,a){}}]);
//# sourceMappingURL=137.03844c04.chunk.js.map