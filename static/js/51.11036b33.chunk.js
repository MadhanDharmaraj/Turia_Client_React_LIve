(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[51],{1633:function(e,a,t){"use strict";t.r(a);var r=t(15),n=t(16),s=t(1),l=t(131),c=(t(533),t(491)),i=t(492),o=(t(3),t(489),t(90)),u=t(661),d=t(132),p=t(10),b=(t(488),t(141)),m=t(911),f=t(881),j=t(828),v=t(942),g={pending:"light-warning",active:"light-success",inactive:"light-secondary"},h=[{name:"Task ID",sortable:!0,minWidth:"138px",sortField:"task_id",selector:function(e){return e.task_id},cell:function(e){return Object(p.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(p.jsx)("div",{className:"d-flex flex-column",children:Object(p.jsx)(l.b,{to:"/task/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return b.a.dispatch(Object(u.e)(e.id))},children:Object(p.jsx)("span",{className:"fw-bolder",children:e.task_id})})})})}},{name:"Client",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.client},cell:function(e){return Object(p.jsx)("span",{className:"text-capitalize",children:e.client})}},{name:"Service",minWidth:"172px",sortable:!0,sortField:"currentPlan",selector:function(e){return e.task},cell:function(e){return Object(p.jsx)("span",{className:"text-capitalize",children:e.task})}},{name:"Priority",minWidth:"230px",sortable:!0,sortField:"billing",selector:function(e){return e.priority},cell:function(e){return Object(p.jsx)("span",{className:"text-capitalize",children:e.priority})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(p.jsx)(o.f,{className:"text-capitalize",color:g[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(p.jsx)("div",{className:"column-action",children:Object(p.jsxs)(o.wb,{children:[Object(p.jsx)(o.G,{tag:"div",className:"btn btn-sm",children:Object(p.jsx)(m.a,{size:14,className:"cursor-pointer"})}),Object(p.jsxs)(o.F,{children:[Object(p.jsxs)(o.E,{tag:l.b,className:"w-100",to:"/task/view/".concat(e.id),onClick:function(){return b.a.dispatch(Object(u.e)(e.id))},children:[Object(p.jsx)(f.a,{size:14,className:"me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(p.jsxs)(o.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(p.jsx)(j.a,{size:14,className:"me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(p.jsxs)(o.E,{tag:"a",href:"/",className:"w-100",onClick:function(a){a.preventDefault(),b.a.dispatch(Object(u.b)(e.id))},children:[Object(p.jsx)(v.a,{size:14,className:"me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})}}],x=t(497),O=t.n(x),N=t(503),y=t.n(N),C=t(928),P=t(921),k=t(888),w=t(882),L=t(860),S=t(846),E=(t(493),t(496),function(e){var a=e.store,t=e.handlePerPage,r=e.rowsPerPage,n=e.handleFilter,s=e.searchTerm;function c(e){var t=document.createElement("a"),r=function(e){var t,r=Object.keys(a.data[0]);return t="",t+=r.join(","),t+="\n",e.forEach((function(e){var a=0;r.forEach((function(r){a>0&&(t+=","),t+=e[r],a++})),t+="\n"})),t}(e);if(null!==r){r.match(/^data:text\/csv/i)||(r="data:text/csv;charset=utf-8,".concat(r)),t.setAttribute("href",encodeURI(r)),t.setAttribute("download","export.csv"),t.click()}}return Object(p.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(p.jsxs)(o.ib,{children:[Object(p.jsx)(o.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(p.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(p.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(p.jsxs)(o.K,{className:"mx-50",type:"select",id:"rows-per-page",value:r,onChange:t,style:{width:"5rem"},children:[Object(p.jsx)("option",{value:"10",children:"10"}),Object(p.jsx)("option",{value:"25",children:"25"}),Object(p.jsx)("option",{value:"50",children:"50"})]}),Object(p.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(p.jsxs)(o.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(p.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(p.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(p.jsx)(o.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return n(e.target.value)}})]}),Object(p.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(p.jsxs)(o.wb,{className:"me-1",children:[Object(p.jsxs)(o.G,{color:"secondary",caret:!0,outline:!0,children:[Object(p.jsx)(C.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Export"})]}),Object(p.jsxs)(o.F,{children:[Object(p.jsxs)(o.E,{className:"w-100",children:[Object(p.jsx)(P.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Print"})]}),Object(p.jsxs)(o.E,{className:"w-100",onClick:function(){return c(a.data)},children:[Object(p.jsx)(f.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"CSV"})]}),Object(p.jsxs)(o.E,{className:"w-100",children:[Object(p.jsx)(k.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(p.jsxs)(o.E,{className:"w-100",children:[Object(p.jsx)(w.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(p.jsxs)(o.E,{className:"w-100",children:[Object(p.jsx)(L.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Copy"})]})]})]}),Object(p.jsx)(o.i,{className:"add-new-user",color:"primary",tag:l.b,to:"/task/add",children:"Add Task"})]})]})]})})}),R=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.users})),t=Object(s.useState)("desc"),l=Object(n.a)(t,2),b=l[0],m=l[1],f=Object(s.useState)(""),j=Object(n.a)(f,2),v=j[0],g=j[1],x=Object(s.useState)(1),N=Object(n.a)(x,2),C=N[0],P=N[1],k=Object(s.useState)("id"),w=Object(n.a)(k,2),L=w[0],R=w[1],D=Object(s.useState)(10),_=Object(n.a)(D,2),T=_[0],B=_[1],A=Object(s.useState)({value:"",label:"Select Role"}),q=Object(n.a)(A,2),F=q[0],H=q[1],I=Object(s.useState)({value:"",label:"Select Plan"}),U=Object(n.a)(I,2),V=U[0],z=U[1],G=Object(s.useState)({value:"",label:"Select Status",number:0}),W=Object(n.a)(G,2),M=W[0],K=W[1];Object(s.useEffect)((function(){e(Object(u.c)()),e(Object(u.d)({sort:b,sortColumn:L,q:v,page:C,perPage:T,role:F.value,status:M.value,currentPlan:V.value}))}),[e,a.data.length,b,L,C]);var J=[{value:"",label:"Select Role"},{value:"admin",label:"Admin"},{value:"author",label:"Author"},{value:"editor",label:"Editor"},{value:"maintainer",label:"Maintainer"},{value:"subscriber",label:"Subscriber"}],Y=Object(s.forwardRef)((function(e,a){return Object(p.jsx)("div",{className:"form-check",children:Object(p.jsx)(o.K,Object(r.a)({type:"checkbox",ref:a},e))})}));return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)(o.l,{children:Object(p.jsx)(o.m,{children:Object(p.jsxs)(o.ib,{children:[Object(p.jsxs)(o.B,{md:"3",children:[Object(p.jsx)(o.N,{for:"role-select",children:"Client"}),Object(p.jsx)(i.a,{isClearable:!1,value:F,options:J,className:"react-select",classNamePrefix:"select",theme:c.i,onChange:function(a){H(a),e(Object(u.d)({sort:b,sortColumn:L,q:v,role:a.value,page:C,perPage:T,status:M.value,currentPlan:V.value}))}})]}),Object(p.jsxs)(o.B,{className:"my-md-0 my-1",md:"3",children:[Object(p.jsx)(o.N,{for:"plan-select",children:"Service"}),Object(p.jsx)(i.a,{theme:c.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Plan"},{value:"basic",label:"Basic"},{value:"company",label:"Company"},{value:"enterprise",label:"Enterprise"},{value:"team",label:"Team"}],value:V,onChange:function(a){z(a),e(Object(u.d)({sort:b,sortColumn:L,q:v,page:C,perPage:T,role:F.value,currentPlan:a.value,status:M.value}))}})]}),Object(p.jsxs)(o.B,{md:"3",children:[Object(p.jsx)(o.N,{for:"role-select",children:"Emloyee"}),Object(p.jsx)(i.a,{isClearable:!1,value:F,options:J,className:"react-select",classNamePrefix:"select",theme:c.i,onChange:function(a){H(a),e(Object(u.d)({sort:b,sortColumn:L,q:v,role:a.value,page:C,perPage:T,status:M.value,currentPlan:V.value}))}})]}),Object(p.jsxs)(o.B,{md:"3",children:[Object(p.jsx)(o.N,{for:"status-select",children:"Status"}),Object(p.jsx)(i.a,{theme:c.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Status",number:0},{value:"pending",label:"Pending",number:1},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],value:M,onChange:function(a){K(a),e(Object(u.d)({sort:b,sortColumn:L,q:v,page:C,status:a.value,perPage:T,role:F.value,currentPlan:V.value}))}})]})]})})}),Object(p.jsx)(o.l,{className:"overflow-hidden",children:Object(p.jsx)("div",{className:"react-dataTable",children:Object(p.jsx)(y.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:h,onSort:function(a,t){m(t),R(a.sortField),e(Object(u.d)({sort:b,sortColumn:L,q:v,page:C,perPage:T,role:F.value,status:M.value,currentPlan:V.value}))},sortIcon:Object(p.jsx)(S.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Number(Math.ceil(a.total/T));return Object(p.jsx)(O.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==C?C-1:0,onPageChange:function(a){return function(a){e(Object(u.d)({sort:b,sortColumn:L,q:v,perPage:T,page:a.selected+1,role:F.value,status:M.value,currentPlan:V.value})),P(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={role:F.value,currentPlan:V.value,status:M.value,q:v},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,T)}(),selectableRowsComponent:Y,subHeaderComponent:Object(p.jsx)(E,{store:a,searchTerm:v,rowsPerPage:T,handleFilter:function(a){g(a),e(Object(u.d)({sort:b,q:a,sortColumn:L,page:C,perPage:T,role:F.value,status:M.value,currentPlan:V.value}))},handlePerPage:function(a){var t=parseInt(a.currentTarget.value);e(Object(u.d)({sort:b,sortColumn:L,q:v,perPage:t,page:C,role:F.value,currentPlan:V.value,status:M.value})),B(t)}})})})})]})};t(601),t(504),a.default=function(){return Object(p.jsx)("div",{className:"app-user-list",children:Object(p.jsx)(R,{})})}},496:function(e,a,t){},497:function(e,a,t){(function(r){var n;e.exports=(n=t(1),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var r=t(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,s,l){if(l!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),l=r(0),c=r.n(l);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,n=e.selected,l=e.activeClassName,c=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,b=e.ariaLabel||"Page "+r+(p?" "+p:""),m=null;return n&&(m="page",b=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+l:l,void 0!==t?void 0!==c&&(t=t+" "+c):t=c),s.a.createElement("li",{className:a},s.a.createElement("a",i({role:"button",className:t,href:d,tabIndex:"0","aria-label":b,"aria-current":m,onKeyPress:u},o(u)),r))};o.propTypes={pageSelectedHandler:c.a.func.isRequired,selected:c.a.bool.isRequired,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,extraAriaContext:c.a.string,href:c.a.string,ariaLabel:c.a.string,page:c.a.number.isRequired,getEventListener:c.a.func.isRequired};var u=o;function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var p=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,l=e.getEventListener,c=t||"break";return s.a.createElement("li",{className:c},s.a.createElement("a",d({className:r,role:"button",tabIndex:"0",onKeyPress:n},l(n)),a))};p.propTypes={breakLabel:c.a.oneOfType([c.a.string,c.a.node]),breakClassName:c.a.string,breakLinkClassName:c.a.string,breakHandler:c.a.func.isRequired,getEventListener:c.a.func.isRequired};var b=p;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function j(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,a){return(v=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function g(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=O(e);if(a){var n=O(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return h(this,t)}}function h(e,a){return!a||"object"!==m(a)&&"function"!=typeof a?x(e):a}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var y=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&v(e,a)}(l,e);var a,t,r,n=g(l);function l(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,l),N(x(a=n.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),N(x(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),N(x(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),N(x(a),"getEventListener",(function(e){return N({},a.props.eventListener,e)})),N(x(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),N(x(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),N(x(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,n=t.pageCount,l=t.marginPagesDisplayed,c=t.breakLabel,i=t.breakClassName,o=t.breakLinkClassName,u=a.state.selected;if(n<=r)for(var d=0;d<n;d++)e.push(a.getPageElement(d));else{var p,m,f,j=r/2,v=r-j;u>n-r/2?j=r-(v=n-u):u<r/2&&(v=r-(j=u));var g=function(e){return a.getPageElement(e)};for(p=0;p<n;p++)(m=p+1)<=l||m>n-l||p>=u-j&&p<=u+v?e.push(g(p)):c&&e[e.length-1]!==f&&(f=s.a.createElement(b,{key:p,breakLabel:c,breakClassName:i,breakLinkClassName:o,breakHandler:a.handleBreakClick.bind(null,p),getEventListener:a.getEventListener}),e.push(f))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=l,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,l=t.activeClassName,c=t.activeLinkClassName,i=t.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:l,activeLinkClassName:c,extraAriaContext:i,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,r=e.containerClassName,n=e.previousLabel,l=e.previousClassName,c=e.previousLinkClassName,i=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,d=e.nextClassName,p=e.nextLinkClassName,b=e.nextAriaLabel,m=e.nextRel,j=this.state.selected,v=l+(0===j?" ".concat(a):""),g=d+(j===t-1?" ".concat(a):""),h=0===j?"true":"false",x=j===t-1?"true":"false";return s.a.createElement("ul",{className:r},s.a.createElement("li",{className:v},s.a.createElement("a",f({className:c,href:this.hrefBuilder(j-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":h,"aria-label":i,rel:o},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),s.a.createElement("li",{className:g},s.a.createElement("a",f({className:p,href:this.hrefBuilder(j+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":b,rel:m},this.getEventListener(this.handleNextPage)),u)))}}])&&j(a.prototype,t),r&&j(a,r),l}(n.Component);N(y,"propTypes",{pageCount:c.a.number.isRequired,pageRangeDisplayed:c.a.number.isRequired,marginPagesDisplayed:c.a.number.isRequired,previousLabel:c.a.node,previousAriaLabel:c.a.string,prevRel:c.a.string,nextLabel:c.a.node,nextAriaLabel:c.a.string,nextRel:c.a.string,breakLabel:c.a.oneOfType([c.a.string,c.a.node]),hrefBuilder:c.a.func,onPageChange:c.a.func,initialPage:c.a.number,forcePage:c.a.number,disableInitialCallback:c.a.bool,containerClassName:c.a.string,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,previousClassName:c.a.string,nextClassName:c.a.string,previousLinkClassName:c.a.string,nextLinkClassName:c.a.string,disabledClassName:c.a.string,breakClassName:c.a.string,breakLinkClassName:c.a.string,extraAriaContext:c.a.string,ariaLabelBuilder:c.a.func,eventListener:c.a.string}),N(y,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=y,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(19))},504:function(e,a,t){},533:function(e,a,t){"use strict";var r=t(15),n=t(29),s=t(133),l=t(805),c=t(3),i=t.n(c),o=t(520),u=t.n(o),d=t(90),p=t(10),b=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"];a.a=function(e){var a,t=e.open,c=e.size,o=e.title,m=e.width,f=e.children,j=e.closeBtn,v=e.className,g=e.toggleSidebar,h=e.bodyClassName,x=e.contentClassName,O=e.wrapperClassName,N=e.headerClassName,y=Object(s.a)(e,b),C=j||Object(p.jsx)(l.a,{className:"cursor-pointer",size:15,onClick:g});return Object(p.jsxs)(d.Q,Object(r.a)(Object(r.a)(Object(r.a)({isOpen:t,toggle:g,contentClassName:i()("overflow-hidden",Object(n.a)({},x,x)),modalClassName:i()("modal-slide-in",Object(n.a)({},O,O)),className:i()((a={},Object(n.a)(a,v,v),Object(n.a)(a,"sidebar-lg","lg"===c),Object(n.a)(a,"sidebar-sm","sm"===c),a))},void 0!==m?{style:{width:String(m)+"px"}}:{}),y),{},{children:[Object(p.jsx)(d.T,{className:i()(Object(n.a)({},N,N)),toggle:g,close:C,tag:"div",children:Object(p.jsx)("h5",{className:"modal-title",children:Object(p.jsx)("span",{className:"align-middle",children:o})})}),Object(p.jsx)(u.a,{options:{wheelPropagation:!1},children:Object(p.jsx)(d.R,{className:i()("flex-grow-1",Object(n.a)({},h,h)),children:f})})]}))}},601:function(e,a,t){"use strict";var r=t(29),n=t(3),s=t.n(n),l=t(90),c=t(10);a.a=function(e){var a=e.icon,t=e.color,n=e.stats,i=e.renderStats,o=e.statTitle,u=e.className,d=e.statsMargin;return Object(c.jsx)(l.l,{children:Object(c.jsx)(l.m,{className:u,children:Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsxs)("div",{children:[i||Object(c.jsx)("h2",{className:s()("fw-bolder",Object(r.a)({"mb-0":!d},d,d)),children:n}),Object(c.jsx)("p",{className:"card-text",children:o})]}),Object(c.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(t?"bg-light-".concat(t):"bg-light-primary"),children:Object(c.jsx)("div",{className:"avatar-content",children:a})})]})})})}},661:function(e,a,t){"use strict";t.d(a,"c",(function(){return o})),t.d(a,"d",(function(){return u})),t.d(a,"e",(function(){return d})),t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return b}));var r=t(5),n=t(2),s=t.n(n),l=t(4),c=t(6),i=t.n(c),o=Object(l.b)("appUsers/getAllData",Object(r.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/task/list/all-data");case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))),u=Object(l.b)("appUsers/getData",function(){var e=Object(r.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/task/list/data",a);case 2:return t=e.sent,e.abrupt("return",{params:a,data:t.data.users,totalPages:t.data.total});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),d=Object(l.b)("appUsers/getUser",function(){var e=Object(r.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/task",{id:a});case 2:return t=e.sent,e.abrupt("return",t.data.user);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),p=Object(l.b)("appUsers/addUser",function(){var e=Object(r.a)(s.a.mark((function e(a,t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,n=t.getState,e.next=3,i.a.post("/apps/users/add-user",a);case 3:return e.next=5,r(u(n().users.params));case 5:return e.next=7,r(o());case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),b=Object(l.b)("appUsers/deleteUser",function(){var e=Object(r.a)(s.a.mark((function e(a,t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,n=t.getState,e.next=3,i.a.delete("/apps/users/delete",{id:a});case 3:return e.next=5,r(u(n().users.params));case 5:return e.next=7,r(o());case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}());Object(l.c)({name:"appUsers",initialState:{data:[],total:1,params:{},allData:[],selectedUser:null},reducers:{},extraReducers:function(e){e.addCase(o.fulfilled,(function(e,a){e.allData=a.payload})).addCase(u.fulfilled,(function(e,a){e.data=a.payload.data,e.params=a.payload.params,e.total=a.payload.totalPages})).addCase(getUser.fulfilled,(function(e,a){e.selectedUser=a.payload}))}}).reducer}}]);
//# sourceMappingURL=51.11036b33.chunk.js.map