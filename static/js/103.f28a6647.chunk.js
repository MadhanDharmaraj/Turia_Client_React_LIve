(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[103],{1671:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(18),s=a(1),i=a(132),c=a(4),o=a(2),l=a.n(o),u=a(505),p=a(513),d=a.n(p),f=a(514),b=a.n(f),m=a(140),g=a(148),h=a(895),v=a(892),j=a(931),x=a(862),y=a(979),O=a(964),C=a(91),N=a(13),k=a(12),P=b()(d.a),L=Object(N.d)(),w=function(e){return Object(k.jsx)(u.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name.charAt(0).toUpperCase()})},S=["","light-primary","light-warning"],E=["","Active","In Active"],R=[{name:"Service",sortable:!0,minWidth:"300px",sortField:"name",selector:function(e){return e.name},cell:function(e){return Object(k.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[w(e),Object(k.jsx)("div",{className:"d-flex flex-column",children:Object(k.jsx)(i.b,{to:"/service/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return m.a.dispatch(Object(g.g)(e.id))},children:Object(k.jsx)("span",{className:"fw-bolder",children:e.name})})})]})}},{name:"Category",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.categoriesname},cell:function(e){return Object(k.jsx)("span",{className:"text-capitalize text-truncate",children:e.categoriesname})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(k.jsx)(C.f,{className:"text-capitalize",color:S[e.status],pill:!0,children:E[e.status]})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(k.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(k.jsx)(C.B,{tag:i.b,lg:4,to:"/service/view/".concat(e.id),onClick:function(){return m.a.dispatch(Object(g.g)(e.id))},children:Object(k.jsx)(h.a,{className:"cursor-pointer mt-0",size:16})}),Object(k.jsx)(C.B,{lg:4,tag:i.b,to:"/service/edit/".concat(e.id),onClick:function(){return m.a.dispatch(Object(g.g)(e.id))},children:Object(k.jsx)(v.a,{className:"cursor-pointer ms-1 mt-0",size:16})}),Object(k.jsxs)(C.xb,{children:[Object(k.jsx)(C.G,{tag:"div",className:"btn btn-sm",children:Object(k.jsx)(j.a,{size:14,className:"cursor-pointer"})}),Object(k.jsxs)(C.F,{children:[2===e.status&&Object(k.jsxs)(C.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){t.preventDefault();var a={id:e.id,status:1,updatedBy:L};m.a.dispatch(Object(g.j)(a))},children:[Object(k.jsx)(x.a,{size:14,className:"me-50"}),Object(k.jsx)("span",{className:"align-middle",children:"Mark as Active"})]}),1===e.status&&Object(k.jsxs)(C.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){t.preventDefault();var a={id:e.id,status:2,updatedBy:L};m.a.dispatch(Object(g.j)(a))},children:[Object(k.jsx)(y.a,{size:14,className:"me-50"}),Object(k.jsx)("span",{className:"align-middle",children:"Mark as Inactive"})]}),Object(k.jsxs)(C.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){var a;t.preventDefault(),a=e.id,P.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=4;break}return e.next=3,m.a.dispatch(Object(g.d)(a));case 3:P.fire({icon:"success",title:"Deleted!",text:"Service has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(k.jsx)(O.a,{size:14,className:"me-50"}),Object(k.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})]})}}],_=a(133),B=a(516),D=a.n(B),T=a(518),A=a.n(T),H=a(965),I=a(865),q=(a(509),a(510),function(e){var t=e.handlePerPage,a=e.rowsPerPage,n=e.handleFilter,r=e.searchTerm,s=e.selectedIds;return Object(k.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(k.jsxs)(C.jb,{children:[Object(k.jsx)(C.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(k.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(k.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(k.jsxs)(C.L,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(k.jsx)("option",{value:"10",children:"10"}),Object(k.jsx)("option",{value:"25",children:"25"}),Object(k.jsx)("option",{value:"50",children:"50"})]}),Object(k.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"}),s.length>0&&Object(k.jsxs)("div",{children:[Object(k.jsx)(C.i.Ripple,{className:"btn-icon rounded-circle ms-1",color:"danger",id:"delete_btn",children:Object(k.jsx)(H.a,{size:16})}),Object(k.jsx)(C.zb,{target:"delete_btn",children:"Delete"})]})]})}),Object(k.jsxs)(C.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(k.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(k.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(k.jsx)(C.L,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:r,onChange:function(e){return n(e.target.value)}})]}),Object(k.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:Object(k.jsx)(C.i,{className:"add-new-user",color:"primary",tag:i.b,to:"/service/add",children:"Add Service"})})]})]})})}),F=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.service})),a=Object(s.useState)("desc"),i=Object(r.a)(a,2),c=i[0],o=i[1],l=Object(s.useState)(""),u=Object(r.a)(l,2),p=u[0],d=u[1],f=Object(s.useState)(1),b=Object(r.a)(f,2),m=b[0],h=b[1],v=Object(s.useState)("id"),j=Object(r.a)(v,2),x=j[0],y=j[1],O=Object(s.useState)(10),N=Object(r.a)(O,2),P=N[0],L=N[1],w=Object(s.forwardRef)((function(e,t){return Object(k.jsx)("div",{className:"form-check",children:Object(k.jsx)(C.L,Object(n.a)({type:"checkbox",ref:t},e))})}));Object(s.useEffect)((function(){e(Object(g.f)({sort:c,sortColumn:x,q:p,page:m,perPage:P}))}),[e,t.data.length,c,x,m]);var S=Object(s.useState)([]),E=Object(r.a)(S,2),B=E[0],T=E[1];return Object(k.jsx)(s.Fragment,{children:Object(k.jsx)(C.l,{className:"overflow-hidden",children:Object(k.jsx)("div",{className:"react-dataTable",children:Object(k.jsx)(A.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:R,onSort:function(t,a){o(a),y(t.sortField),e(Object(g.f)({sort:c,sortColumn:x,q:p,page:m,perPage:P}))},sortIcon:Object(k.jsx)(I.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Number(Math.ceil(t.total/P));return Object(k.jsx)(D.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==m?m-1:0,onPageChange:function(t){return function(t){e(Object(g.f)({sort:c,sortColumn:x,q:p,perPage:P,page:t.selected+1})),h(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={q:p},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,P)}(),selectableRowsComponent:w,onSelectedRowsChange:function(e){var t=[];e.selectedRows.forEach((function(e){t.push(e.id)})),T(t)},subHeaderComponent:Object(k.jsx)(q,{selectedIds:B,store:t,searchTerm:p,rowsPerPage:P,handleFilter:function(t){d(t),e(Object(g.f)({sort:c,q:t,sortColumn:x,page:m,perPage:P}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(g.f)({sort:c,sortColumn:x,q:p,perPage:a,page:m})),L(a)}})})})})})};a(523),t.default=function(){return Object(k.jsx)("div",{className:"app-user-list",children:Object(k.jsx)(F,{})})}},510:function(e,t,a){},516:function(e,t,a){(function(n){var r;e.exports=(r=a(1),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,s,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),s=n.n(r),i=n(0),c=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,i=e.activeClassName,c=e.activeLinkClassName,l=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+n+(d?" "+d:""),b=null;return r&&(b="page",f=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==c&&(a=a+" "+c):a=c),s.a.createElement("li",{className:t},s.a.createElement("a",o({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},l(u)),n))};l.propTypes={pageSelectedHandler:c.a.func.isRequired,selected:c.a.bool.isRequired,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,extraAriaContext:c.a.string,href:c.a.string,ariaLabel:c.a.string,page:c.a.number.isRequired,getEventListener:c.a.func.isRequired};var u=l;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,c=a||"break";return s.a.createElement("li",{className:c},s.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};d.propTypes={breakLabel:c.a.oneOfType([c.a.string,c.a.node]),breakClassName:c.a.string,breakLinkClassName:c.a.string,breakHandler:c.a.func.isRequired,getEventListener:c.a.func.isRequired};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y(e);if(t){var r=y(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,n,r=v(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),O(x(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),O(x(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),O(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),O(x(t),"getEventListener",(function(e){return O({},t.props.eventListener,e)})),O(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),O(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),O(x(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,c=a.breakLabel,o=a.breakClassName,l=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var d,b,m,g=n/2,h=n-g;u>r-n/2?g=n-(h=r-u):u<n/2&&(h=n-(g=u));var v=function(e){return t.getPageElement(e)};for(d=0;d<r;d++)(b=d+1)<=i||b>r-i||d>=u-g&&d<=u+h?e.push(v(d)):c&&e[e.length-1]!==m&&(m=s.a.createElement(f,{key:d,breakLabel:c,breakClassName:o,breakLinkClassName:l,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,c=a.activeLinkClassName,o=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:c,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,i=e.previousClassName,c=e.previousLinkClassName,o=e.previousAriaLabel,l=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,h=i+(0===g?" ".concat(t):""),v=p+(g===a-1?" ".concat(t):""),j=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:h},s.a.createElement("a",m({className:c,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":o,rel:l},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:v},s.a.createElement("a",m({className:d,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),n&&g(t,n),i}(r.Component);O(C,"propTypes",{pageCount:c.a.number.isRequired,pageRangeDisplayed:c.a.number.isRequired,marginPagesDisplayed:c.a.number.isRequired,previousLabel:c.a.node,previousAriaLabel:c.a.string,prevRel:c.a.string,nextLabel:c.a.node,nextAriaLabel:c.a.string,nextRel:c.a.string,breakLabel:c.a.oneOfType([c.a.string,c.a.node]),hrefBuilder:c.a.func,onPageChange:c.a.func,initialPage:c.a.number,forcePage:c.a.number,disableInitialCallback:c.a.bool,containerClassName:c.a.string,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,previousClassName:c.a.string,nextClassName:c.a.string,previousLinkClassName:c.a.string,nextLinkClassName:c.a.string,disabledClassName:c.a.string,breakClassName:c.a.string,breakLinkClassName:c.a.string,extraAriaContext:c.a.string,ariaLabelBuilder:c.a.func,eventListener:c.a.string}),O(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(21))},523:function(e,t,a){}}]);
//# sourceMappingURL=103.f28a6647.chunk.js.map