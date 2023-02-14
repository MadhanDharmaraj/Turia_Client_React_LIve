(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[105],{1658:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(17),s=a(18),i=a(1),l=a.n(i),o=a(2),c=a(132),u=a(507),p=a(141),d=a(148),f=a(881),b=a(878),m=a(920),g=a(953),h=a(91),v=a(514),j=a.n(v),x=a(516),y=a.n(x),O=a(517),C=a.n(O),N=a(13),k=function(e){return Object(N.jsx)(u.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name||""})},P=C()(y.a),L=["","light-primary","light-warning"],w=["","Active","In Active"],S=function(e){return j.a.unix(e).format("MMM DD, YYYY")},E=[{name:"ID",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.id},cell:function(e){return Object(N.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(N.jsx)(c.b,{to:"/digital-signature/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return p.a.dispatch(Object(d.g)(e.id))},children:Object(N.jsx)("span",{className:"text-capitalize fw-bolder",children:e.id})})})}},{name:"Client",sortable:!0,minWidth:"300px",sortField:"client",selector:function(e){return e.name},cell:function(e){return Object(N.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[k(e),Object(N.jsxs)("div",{className:"d-flex flex-column",children:[Object(N.jsx)("span",{className:"fw-bolder",children:e.name}),Object(N.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Issued Date",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.issueddate},cell:function(e){return Object(N.jsx)("span",{className:"text-capitalize",children:S(e.issueddate)})}},{name:"Expiry Date",minWidth:"138px",sortable:!0,sortField:"currentPlan",selector:function(e){return e.expirydate},cell:function(e){return Object(N.jsx)("span",{className:"text-capitalize",children:S(e.expirydate)})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(N.jsx)(h.f,{className:"text-capitalize",color:L[e.status],pill:!0,children:w[e.status]})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(N.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(N.jsx)(h.B,{tag:c.b,lg:4,to:"/digital-signature/view/".concat(e.id),onClick:function(){return p.a.dispatch(Object(d.g)(e.id))},children:Object(N.jsx)(f.a,{className:"cursor-pointer mt-0",size:16})}),Object(N.jsx)(h.B,{tag:c.b,lg:4,to:"/digital-signature/edit/".concat(e.clientid),children:Object(N.jsx)(b.a,{className:"cursor-pointer ms-1 mt-0",size:16})}),Object(N.jsxs)(h.xb,{children:[Object(N.jsx)(h.G,{tag:"div",className:"btn btn-sm",children:Object(N.jsx)(m.a,{size:14,className:"cursor-pointer"})}),Object(N.jsx)(h.F,{children:Object(N.jsxs)(h.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){var a;t.preventDefault(),a=e.id,P.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(n.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=4;break}return e.next=3,p.a.dispatch(Object(d.e)(a));case 3:P.fire({icon:"success",title:"Deleted!",text:"Digital Signature has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(N.jsx)(g.a,{size:14,className:"me-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Delete"})]})})]})]})}}],R=a(133),D=a(518),_=a.n(D),B=a(526),T=a.n(B),A=a(851),H=a(515),q=(a(510),a(512),a(511)),F=function(e){var t=e.handlePerPage,a=e.rowsPerPage,n=e.handleFilter,r=e.searchTerm;return Object(N.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(N.jsxs)(h.jb,{children:[Object(N.jsx)(h.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(N.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(N.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(N.jsxs)(h.L,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(N.jsx)("option",{value:"10",children:"10"}),Object(N.jsx)("option",{value:"25",children:"25"}),Object(N.jsx)("option",{value:"50",children:"50"})]}),Object(N.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(N.jsxs)(h.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(N.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(N.jsx)(h.L,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:r,onChange:function(e){return n(e.target.value)}})]}),Object(N.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:Object(N.jsx)(h.i,{className:"add-new-user",color:"primary",tag:c.b,to:"/digital-signature/add",children:"Add"})})]})]})})},I=function(){var e=Object(R.b)(),t=Object(R.c)((function(e){return e.digitalsignature})),a=Object(o.useState)("desc"),i=Object(s.a)(a,2),c=i[0],u=i[1],p=Object(o.useState)(""),f=Object(s.a)(p,2),b=f[0],m=f[1],g=Object(o.useState)(1),v=Object(s.a)(g,2),j=v[0],x=v[1],y=Object(o.useState)("id"),O=Object(s.a)(y,2),C=O[0],k=O[1],P=Object(o.useState)(10),L=Object(s.a)(P,2),w=L[0],S=L[1],D=Object(o.useState)({id:1,name:"Active"}),B=Object(s.a)(D,2),I=B[0],V=B[1],G=Object(o.forwardRef)((function(e,t){return Object(N.jsx)("div",{className:"form-check",children:Object(N.jsx)(h.L,Object(r.a)({type:"checkbox",ref:t},e))})}));Object(o.useEffect)((function(){e(Object(d.f)({sort:c,sortColumn:C,q:b,page:j,perPage:w,status:I.id}))}),[e,t.data.length,c,C,j]);return Object(N.jsxs)(o.Fragment,{children:[Object(N.jsx)(h.l,{children:Object(N.jsx)(h.m,{children:Object(N.jsx)(h.jb,{children:Object(N.jsxs)(h.B,{md:"4",children:[Object(N.jsx)(h.O,{for:"status-select",children:"Status"}),Object(N.jsx)(q.a,{theme:H.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{id:"",name:"Select Status"},{id:1,name:"Active"},{id:3,name:"Expired"}],value:I,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(){var t=Object(n.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return V(a),t.next=3,e(Object(d.f)({sort:c,sortColumn:C,q:b,page:j,perPage:w,status:a.id}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})]})})})}),Object(N.jsx)(h.l,{className:"overflow-hidden",children:Object(N.jsx)("div",{className:"react-dataTable",children:Object(N.jsx)(T.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:E,onSort:function(t,a){u(a),k(t.sortField),e(Object(d.f)({sort:c,sortColumn:C,q:b,page:j,perPage:w,status:I.id}))},sortIcon:Object(N.jsx)(A.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Number(Math.ceil(t.total/w));return Object(N.jsx)(_.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==j?j-1:0,onPageChange:function(t){return function(t){e(Object(d.f)({sort:c,sortColumn:C,q:b,perPage:w,page:t.selected+1,status:I.id})),x(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={status:I.id,q:b},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,w)}(),selectableRowsComponent:G,subHeaderComponent:Object(N.jsx)(F,{store:t,searchTerm:b,rowsPerPage:w,handleFilter:function(t){m(t),e(Object(d.f)({sort:c,q:t,sortColumn:C,page:j,perPage:w,status:I.id}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(d.f)({sort:c,sortColumn:C,q:b,perPage:a,page:j,status:I.id})),S(a)}})})})})]})};a(525),t.default=function(){return Object(N.jsx)("div",{className:"app-user-list",children:Object(N.jsx)(I,{})})}},512:function(e,t,a){},518:function(e,t,a){(function(n){var r;e.exports=(r=a(2),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,s,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),s=n.n(r),i=n(0),l=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,i=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+n+(d?" "+d:""),b=null;return r&&(b="page",f=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==l&&(a=a+" "+l):a=l),s.a.createElement("li",{className:t},s.a.createElement("a",o({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},c(u)),n))};c.propTypes={pageSelectedHandler:l.a.func.isRequired,selected:l.a.bool.isRequired,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,extraAriaContext:l.a.string,href:l.a.string,ariaLabel:l.a.string,page:l.a.number.isRequired,getEventListener:l.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,l=a||"break";return s.a.createElement("li",{className:l},s.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};d.propTypes={breakLabel:l.a.oneOfType([l.a.string,l.a.node]),breakClassName:l.a.string,breakLinkClassName:l.a.string,breakHandler:l.a.func.isRequired,getEventListener:l.a.func.isRequired};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y(e);if(t){var r=y(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,n,r=v(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),O(x(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),O(x(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),O(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),O(x(t),"getEventListener",(function(e){return O({},t.props.eventListener,e)})),O(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),O(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),O(x(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,l=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var d,b,m,g=n/2,h=n-g;u>r-n/2?g=n-(h=r-u):u<n/2&&(h=n-(g=u));var v=function(e){return t.getPageElement(e)};for(d=0;d<r;d++)(b=d+1)<=i||b>r-i||d>=u-g&&d<=u+h?e.push(v(d)):l&&e[e.length-1]!==m&&(m=s.a.createElement(f,{key:d,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,l=a.activeLinkClassName,o=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:l,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,o=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,h=i+(0===g?" ".concat(t):""),v=p+(g===a-1?" ".concat(t):""),j=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:h},s.a.createElement("a",m({className:l,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":o,rel:c},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:v},s.a.createElement("a",m({className:d,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),n&&g(t,n),i}(r.Component);O(C,"propTypes",{pageCount:l.a.number.isRequired,pageRangeDisplayed:l.a.number.isRequired,marginPagesDisplayed:l.a.number.isRequired,previousLabel:l.a.node,previousAriaLabel:l.a.string,prevRel:l.a.string,nextLabel:l.a.node,nextAriaLabel:l.a.string,nextRel:l.a.string,breakLabel:l.a.oneOfType([l.a.string,l.a.node]),hrefBuilder:l.a.func,onPageChange:l.a.func,initialPage:l.a.number,forcePage:l.a.number,disableInitialCallback:l.a.bool,containerClassName:l.a.string,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,previousClassName:l.a.string,nextClassName:l.a.string,previousLinkClassName:l.a.string,nextLinkClassName:l.a.string,disabledClassName:l.a.string,breakClassName:l.a.string,breakLinkClassName:l.a.string,extraAriaContext:l.a.string,ariaLabelBuilder:l.a.func,eventListener:l.a.string}),O(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(21))},525:function(e,t,a){}}]);
//# sourceMappingURL=105.2f2bceb2.chunk.js.map