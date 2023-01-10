(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1673:function(e,t,a){"use strict";a.r(t);var r=a(17),n=a(18),s=a(1),c=a(132),i=a(505),l=a(140),o=a(617),u=a(895),p=a(892),d=a(931),f=a(862),b=a(979),m=a(964),g=a(91),v=a(12),j=function(e){return Object(v.jsx)(i.a,{initials:!0,className:"me-1",color:"light-primary",content:e.servicename.charAt(0)||"T"})},h=["light-warning","light-success","light-secondary"],x=["Low","Medium","High"],O=["To Do","In progress","Completed","On Hold","Cancelled","Sent to Review","Request Changes"],y=[{name:"Task ID",sortable:!0,minWidth:"138px",sortField:"uniqueidentity",selector:function(e){return e.uniqueidentity},cell:function(e){return Object(v.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[j(e),Object(v.jsx)("div",{className:"d-flex flex-column",children:Object(v.jsx)(c.b,{to:"/recurring-task/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return l.a.dispatch(Object(o.f)(e.id))},children:Object(v.jsx)("span",{className:"fw-bolder",children:e.uniqueidentity})})})]})}},{name:"Client",sortable:!0,minWidth:"172px",sortField:"clientname",selector:function(e){return e.clientname},cell:function(e){return Object(v.jsx)("span",{className:"text-capitalize",children:e.clientname})}},{name:"Service",minWidth:"172px",sortable:!0,sortField:"servicename",selector:function(e){return e.servicename},cell:function(e){return Object(v.jsx)("span",{className:"text-capitalize",children:e.servicename})}},{name:"Priority",minWidth:"230px",sortable:!0,sortField:"priority",selector:function(e){return e.priority},cell:function(e){return Object(v.jsx)("span",{className:"text-capitalize",children:x[e.priority]})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"taskstatus",selector:function(e){return e.taskstatus},cell:function(e){return Object(v.jsx)(g.f,{className:"text-capitalize",color:h[e.taskstatus],pill:!0,children:O[e.taskstatus]})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(v.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(v.jsx)(g.B,{tag:c.b,lg:4,to:"/recurring-task/view/".concat(e.id),onClick:function(){return l.a.dispatch(Object(o.f)(e.id))},children:Object(v.jsx)(u.a,{className:"cursor-pointer mt-0",size:16})}),Object(v.jsx)(g.B,{tag:c.b,to:"/recurring-task/edit/".concat(e.id),lg:4,onClick:function(){return l.a.dispatch(Object(o.f)(e.id))},children:Object(v.jsx)(p.a,{className:"cursor-pointer ms-1 mt-0",size:16})}),Object(v.jsxs)(g.xb,{children:[Object(v.jsx)(g.G,{tag:"div",className:"btn btn-sm",children:Object(v.jsx)(d.a,{size:14,className:"cursor-pointer"})}),Object(v.jsxs)(g.F,{children:[Object(v.jsxs)(g.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(f.a,{size:14,className:"me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Mark as Active"})]}),Object(v.jsxs)(g.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)(b.a,{size:14,className:"me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Mark as Inactive"})]}),Object(v.jsxs)(g.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){t.preventDefault(),l.a.dispatch(Object(o.c)(e.id))},children:[Object(v.jsx)(m.a,{size:14,className:"me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})]})}}],k=a(133),N=a(508),C=a(516),P=a.n(C),w=a(518),L=a.n(w),E=a(949),S=a(942),T=a(900),R=a(907),D=a(901),_=a(879),B=a(865),F=a(511),q=(a(509),a(510),function(e){var t=e.store,a=e.handlePerPage,r=e.rowsPerPage,n=e.handleFilter,s=e.searchTerm;function i(e){var a=document.createElement("a"),r=function(e){var a,r=Object.keys(t.data[0]);return a="",a+=r.join(","),a+="\n",e.forEach((function(e){var t=0;r.forEach((function(r){t>0&&(a+=","),a+=e[r],t++})),a+="\n"})),a}(e);if(null!==r){r.match(/^data:text\/csv/i)||(r="data:text/csv;charset=utf-8,".concat(r)),a.setAttribute("href",encodeURI(r)),a.setAttribute("download","export.csv"),a.click()}}return Object(v.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(v.jsxs)(g.jb,{children:[Object(v.jsx)(g.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(v.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(v.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(v.jsxs)(g.L,{className:"mx-50",type:"select",id:"rows-per-page",value:r,onChange:a,style:{width:"5rem"},children:[Object(v.jsx)("option",{value:"10",children:"10"}),Object(v.jsx)("option",{value:"25",children:"25"}),Object(v.jsx)("option",{value:"50",children:"50"})]}),Object(v.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(v.jsxs)(g.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(v.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(v.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(v.jsx)(g.L,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return n(e.target.value)}})]}),Object(v.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(v.jsxs)(g.xb,{className:"me-1",children:[Object(v.jsxs)(g.G,{color:"secondary",caret:!0,outline:!0,children:[Object(v.jsx)(E.a,{className:"font-small-4 me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Export"})]}),Object(v.jsxs)(g.F,{children:[Object(v.jsxs)(g.E,{className:"w-100",children:[Object(v.jsx)(S.a,{className:"font-small-4 me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Print"})]}),Object(v.jsxs)(g.E,{className:"w-100",onClick:function(){return i(t.data)},children:[Object(v.jsx)(T.a,{className:"font-small-4 me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"CSV"})]}),Object(v.jsxs)(g.E,{className:"w-100",children:[Object(v.jsx)(R.a,{className:"font-small-4 me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(v.jsxs)(g.E,{className:"w-100",children:[Object(v.jsx)(D.a,{className:"font-small-4 me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(v.jsxs)(g.E,{className:"w-100",children:[Object(v.jsx)(_.a,{className:"font-small-4 me-50"}),Object(v.jsx)("span",{className:"align-middle",children:"Copy"})]})]})]}),Object(v.jsx)(g.i,{className:"add-new-user",color:"primary",tag:c.b,to:"/recurring-task/add",children:"Add Task"})]})]})]})})}),A=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.task})),a=Object(s.useState)("desc"),c=Object(n.a)(a,2),i=c[0],l=c[1],u=Object(s.useState)(""),p=Object(n.a)(u,2),d=p[0],f=p[1],b=Object(s.useState)(1),m=Object(n.a)(b,2),j=m[0],h=m[1],x=Object(s.useState)("id"),O=Object(n.a)(x,2),C=O[0],w=O[1],E=Object(s.useState)(10),S=Object(n.a)(E,2),T=S[0],R=S[1],D=Object(s.useState)({value:"",label:"Select Role"}),_=Object(n.a)(D,2),A=_[0],I=_[1],H=Object(s.useState)({value:"",label:"Select Plan"}),V=Object(n.a)(H,2),z=V[0],G=V[1],M=Object(s.useState)({value:"1",label:"To Do",number:0}),W=Object(n.a)(M,2),J=W[0],K=W[1],U=Object(s.forwardRef)((function(e,t){return Object(v.jsx)("div",{className:"form-check",children:Object(v.jsx)(g.L,Object(r.a)({type:"checkbox",ref:t},e))})}));Object(s.useEffect)((function(){e(Object(o.e)({sort:i,sortColumn:C,q:d,page:j,perPage:T,role:A.value,recurringFlag:!0,status:J.value,currentPlan:z.value}))}),[e,t.data.length,i,C,j]);var Y=[{value:"",label:"Select Plan"},{value:"basic",label:"Basic"},{value:"company",label:"Company"},{value:"enterprise",label:"Enterprise"},{value:"team",label:"Team"}];return Object(v.jsxs)(s.Fragment,{children:[Object(v.jsx)(g.l,{children:Object(v.jsx)(g.m,{children:Object(v.jsxs)(g.jb,{children:[Object(v.jsxs)(g.B,{md:"3",children:[Object(v.jsx)(g.O,{for:"role-select",children:"Client"}),Object(v.jsx)(N.a,{isClearable:!1,value:A,options:Y,className:"react-select",classNamePrefix:"select",theme:F.i,onChange:function(t){I(t),e(Object(o.e)({sort:i,sortColumn:C,q:d,role:t.value,page:j,perPage:T,status:J.value,recurringFlag:!0,currentPlan:z.value}))}})]}),Object(v.jsxs)(g.B,{className:"my-md-0 my-1",md:"3",children:[Object(v.jsx)(g.O,{for:"plan-select",children:"Service"}),Object(v.jsx)(N.a,{theme:F.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:Y,value:z,onChange:function(t){G(t),e(Object(o.e)({sort:i,sortColumn:C,q:d,page:j,perPage:T,role:A.value,currentPlan:t.value,recurringFlag:!0,status:J.value}))}})]}),Object(v.jsxs)(g.B,{md:"3",children:[Object(v.jsx)(g.O,{for:"role-select",children:"Emloyee"}),Object(v.jsx)(N.a,{isClearable:!1,value:A,options:Y,className:"react-select",classNamePrefix:"select",theme:F.i,onChange:function(t){I(t),e(Object(o.e)({sort:i,sortColumn:C,q:d,role:t.value,page:j,perPage:T,status:J.value,recurringFlag:!0,currentPlan:z.value}))}})]}),Object(v.jsxs)(g.B,{md:"3",children:[Object(v.jsx)(g.O,{for:"status-select",children:"Status"}),Object(v.jsx)(N.a,{theme:F.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"1",label:"To Do"},{value:"2",label:"In Progress"},{value:"3",label:"Completed"},{value:"4",label:"On Hold"},{value:"5",label:"Cancelled"},{value:"6",label:"Sent to Review"},{value:"7",label:"Request Changes"}],value:J,onChange:function(t){K(t),e(Object(o.e)({sort:i,sortColumn:C,q:d,page:j,status:t.value,perPage:T,role:A.value,currentPlan:z.value}))}})]})]})})}),Object(v.jsx)(g.l,{className:"overflow-hidden",children:Object(v.jsx)("div",{className:"react-dataTable",children:Object(v.jsx)(L.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:y,onSort:function(t,a){l(a),w(t.sortField),e(Object(o.e)({sort:i,sortColumn:C,q:d,page:j,perPage:T,role:A.value,status:J.value,recurringFlag:!0,currentPlan:z.value}))},sortIcon:Object(v.jsx)(B.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Number(Math.ceil(t.total/T));return Object(v.jsx)(P.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==j?j-1:0,onPageChange:function(t){return function(t){e(Object(o.e)({sort:i,sortColumn:C,q:d,perPage:T,page:t.selected+1,role:A.value,status:J.value,currentPlan:z.value,recurringFlag:!0})),h(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={role:A.value,currentPlan:z.value,status:J.value,recurringFlag:!0,q:d},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),selectableRowsComponent:U,subHeaderComponent:Object(v.jsx)(q,{store:t,searchTerm:d,rowsPerPage:T,handleFilter:function(t){f(t),e(Object(o.e)({sort:i,q:t,sortColumn:C,page:j,perPage:T,role:A.value,status:J.value,currentPlan:z.value,recurringFlag:!0}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(o.e)({sort:i,sortColumn:C,q:d,perPage:a,page:j,role:A.value,currentPlan:z.value,recurringFlag:!0,status:J.value})),R(a)}})})})})]})};a(566),a(523),t.default=function(){return Object(v.jsx)("div",{className:"app-user-list",children:Object(v.jsx)(A,{})})}},510:function(e,t,a){},516:function(e,t,a){(function(r){var n;e.exports=(n=a(1),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var r=a(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,r){"use strict";r.r(a);var n=r(1),s=r.n(n),c=r(0),i=r.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,c=e.activeClassName,i=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+r+(d?" "+d:""),b=null;return n&&(b="page",f=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+c:c,void 0!==a?void 0!==i&&(a=a+" "+i):a=i),s.a.createElement("li",{className:t},s.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},o(u)),r))};o.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired};var u=o;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,c=e.getEventListener,i=a||"break";return s.a.createElement("li",{className:i},s.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},c(n)),t))};d.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=O(e);if(t){var n=O(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return h(this,a)}}function h(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,e);var t,a,r,n=j(c);function c(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),y(x(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(x(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),y(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(x(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),y(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(x(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,c=a.marginPagesDisplayed,i=a.breakLabel,l=a.breakClassName,o=a.breakLinkClassName,u=t.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(t.getPageElement(p));else{var d,b,m,g=r/2,v=r-g;u>n-r/2?g=r-(v=n-u):u<r/2&&(v=r-(g=u));var j=function(e){return t.getPageElement(e)};for(d=0;d<n;d++)(b=d+1)<=c||b>n-c||d>=u-g&&d<=u+v?e.push(j(d)):i&&e[e.length-1]!==m&&(m=s.a.createElement(f,{key:d,breakLabel:i,breakClassName:l,breakLinkClassName:o,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=c,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,c=a.activeClassName,i=a.activeLinkClassName,l=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:n,activeClassName:c,activeLinkClassName:i,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,n=e.previousLabel,c=e.previousClassName,i=e.previousLinkClassName,l=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,v=c+(0===g?" ".concat(t):""),j=p+(g===a-1?" ".concat(t):""),h=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:r},s.a.createElement("li",{className:v},s.a.createElement("a",m({className:i,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":h,"aria-label":l,rel:o},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),s.a.createElement("li",{className:j},s.a.createElement("a",m({className:d,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),r&&g(t,r),c}(n.Component);y(k,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),y(k,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=k,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(21))},523:function(e,t,a){},566:function(e,t,a){"use strict";var r=a(31),n=a(6),s=a.n(n),c=a(91),i=a(12);t.a=function(e){var t=e.icon,a=e.color,n=e.stats,l=e.renderStats,o=e.statTitle,u=e.className,p=e.statsMargin;return Object(i.jsx)(c.l,{children:Object(i.jsx)(c.m,{className:u,children:Object(i.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(i.jsxs)("div",{children:[l||Object(i.jsx)("h2",{className:s()("fw-bolder",Object(r.a)({"mb-0":!p},p,p)),children:n}),Object(i.jsx)("p",{className:"card-text",children:o})]}),Object(i.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(a?"bg-light-".concat(a):"bg-light-primary"),children:Object(i.jsx)("div",{className:"avatar-content",children:t})})]})})})}},617:function(e,t,a){"use strict";a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return d})),a.d(t,"f",(function(){return f})),a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m})),a.d(t,"g",(function(){return g})),a.d(t,"c",(function(){return j}));var r=a(10),n=a(4),s=a(2),c=a.n(s),i=a(3),l=a(5),o=a(13),u=Object(o.d)(),p=Object(i.b)("appTasks/getData",function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/tasks/list",t);case 2:return a=e.sent,e.abrupt("return",{params:t,data:a.data.tasks.tasks,totalPages:a.data.tasks.total});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(i.b)("appTasks/getClient",function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/clients/get",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.clients);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(i.b)("appTasks/getTask",function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/tasks/get",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.task);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(i.b)("appTasks/addTask",function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(r.a)(a),e.next=3,l.a.post("/tasks/create",t);case 3:return n=e.sent,e.abrupt("return",n.data.task);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),m=Object(i.b)("appTasks/addTaskParticipants",function(){var e=Object(n.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(r.a)(a),e.next=3,l.a.post("/recurring-taskparticpants/create",t);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),g=(Object(i.b)("appTasks/addTaskWorkflow",function(){var e=Object(n.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(r.a)(a),e.next=3,l.a.post("/recurring-taskworkflows/create",t);case 3:return e.abrupt("return",[]);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Object(i.b)("appTasks/updateInvocieId",function(){var e=Object(n.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(r.a)(a),e.next=3,l.a.post("/tasks/updateinvocieid",t);case 3:return e.abrupt("return",response.data.task);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),v=Object(i.b)("appTasks/updateTask",function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(r.a)(a),e.next=3,l.a.post("/tasks/create",t);case 3:return n=e.sent,e.abrupt("return",n.data.task);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),j=Object(i.b)("appTasks/deleteTask",function(){var e=Object(n.a)(c.a.mark((function e(t,a){var r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,e.next=3,l.a.post("/tasks/delete",{id:t,updatedBy:u});case 3:return e.next=5,r(p(n().tasks.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());Object(i.c)({name:"appTasks",initialState:{data:[],total:1,params:{},allData:[],selectedTask:null,taskId:null,editflag:!0},reducers:{},extraReducers:function(e){e.addCase(p.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.totalPages})).addCase(f.fulfilled,(function(e,t){e.selectedTask=t.payload})).addCase(b.fulfilled,(function(e,t){e.taskId=t.payload})).addCase(v.fulfilled,(function(e,t){e.taskId=t.payload}))}}).reducer}}]);
//# sourceMappingURL=65.1bd5eceb.chunk.js.map