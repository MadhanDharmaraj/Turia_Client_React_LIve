(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[61],{1632:function(e,a,t){"use strict";t.r(a);var n=t(15),r=t(16),s=t(1),l=t(131),i=(t(533),t(491)),c=t(492),o=(t(3),t(489),t(90)),u=t(146),d=t(132),p=t(10),b=(t(488),t(141)),m=t(876),f=t(873),j=t(911),g=t(843),v=t(957),h=t(942),x={pending:"light-warning",active:"light-success",inactive:"light-secondary"},O=[{name:"Task ID",sortable:!0,minWidth:"138px",sortField:"task_id",selector:function(e){return e.task_id},cell:function(e){return Object(p.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(p.jsx)("div",{className:"d-flex flex-column",children:Object(p.jsx)(l.b,{to:"/task/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return b.a.dispatch(Object(u.f)(e.id))},children:Object(p.jsx)("span",{className:"fw-bolder",children:e.task_id})})})})}},{name:"Client",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.client},cell:function(e){return Object(p.jsx)("span",{className:"text-capitalize",children:e.client})}},{name:"Service",minWidth:"172px",sortable:!0,sortField:"currentPlan",selector:function(e){return e.task},cell:function(e){return Object(p.jsx)("span",{className:"text-capitalize",children:e.task})}},{name:"Priority",minWidth:"230px",sortable:!0,sortField:"billing",selector:function(e){return e.priority},cell:function(e){return Object(p.jsx)("span",{className:"text-capitalize",children:e.priority})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(p.jsx)(o.f,{className:"text-capitalize",color:x[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(p.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(p.jsx)(o.B,{tag:l.b,lg:4,to:"/task/view/".concat(e.id),onClick:function(){return b.a.dispatch(Object(u.f)(e.id))},children:Object(p.jsx)(m.a,{className:"cursor-pointer mt-0",size:16})}),Object(p.jsx)(o.B,{tag:l.b,to:"/task/edit/".concat(e.id),lg:4,onClick:function(){return b.a.dispatch(Object(u.f)(e.id))},children:Object(p.jsx)(f.a,{className:"cursor-pointer ms-1 mt-0",size:16})}),Object(p.jsxs)(o.wb,{children:[Object(p.jsx)(o.G,{tag:"div",className:"btn btn-sm",children:Object(p.jsx)(j.a,{size:14,className:"cursor-pointer"})}),Object(p.jsxs)(o.F,{children:[Object(p.jsxs)(o.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(p.jsx)(g.a,{size:14,className:"me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Mark as Active"})]}),Object(p.jsxs)(o.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(p.jsx)(v.a,{size:14,className:"me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Mark as Inactive"})]}),Object(p.jsxs)(o.E,{tag:"a",href:"/",className:"w-100",onClick:function(a){a.preventDefault(),b.a.dispatch(Object(u.c)(e.id))},children:[Object(p.jsx)(h.a,{size:14,className:"me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})]})}}],N=t(497),y=t.n(N),C=t(503),P=t.n(C),k=t(928),w=t(921),L=t(881),S=t(888),E=t(882),R=t(860),_=t(846),B=(t(493),t(496),function(e){var a=e.store,t=e.handlePerPage,n=e.rowsPerPage,r=e.handleFilter,s=e.searchTerm;function i(e){var t=document.createElement("a"),n=function(e){var t,n=Object.keys(a.data[0]);return t="",t+=n.join(","),t+="\n",e.forEach((function(e){var a=0;n.forEach((function(n){a>0&&(t+=","),t+=e[n],a++})),t+="\n"})),t}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),t.setAttribute("href",encodeURI(n)),t.setAttribute("download","export.csv"),t.click()}}return Object(p.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(p.jsxs)(o.ib,{children:[Object(p.jsx)(o.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(p.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(p.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(p.jsxs)(o.K,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:t,style:{width:"5rem"},children:[Object(p.jsx)("option",{value:"10",children:"10"}),Object(p.jsx)("option",{value:"25",children:"25"}),Object(p.jsx)("option",{value:"50",children:"50"})]}),Object(p.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(p.jsxs)(o.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(p.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(p.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(p.jsx)(o.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(p.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(p.jsxs)(o.wb,{className:"me-1",children:[Object(p.jsxs)(o.G,{color:"secondary",caret:!0,outline:!0,children:[Object(p.jsx)(k.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Export"})]}),Object(p.jsxs)(o.F,{children:[Object(p.jsxs)(o.E,{className:"w-100",children:[Object(p.jsx)(w.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Print"})]}),Object(p.jsxs)(o.E,{className:"w-100",onClick:function(){return i(a.data)},children:[Object(p.jsx)(L.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"CSV"})]}),Object(p.jsxs)(o.E,{className:"w-100",children:[Object(p.jsx)(S.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(p.jsxs)(o.E,{className:"w-100",children:[Object(p.jsx)(E.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(p.jsxs)(o.E,{className:"w-100",children:[Object(p.jsx)(R.a,{className:"font-small-4 me-50"}),Object(p.jsx)("span",{className:"align-middle",children:"Copy"})]})]})]}),Object(p.jsx)(o.i,{className:"add-new-user",color:"primary",tag:l.b,to:"/task/add",children:"Add Task"})]})]})]})})}),D=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.users})),t=Object(s.useState)("desc"),l=Object(r.a)(t,2),b=l[0],m=l[1],f=Object(s.useState)(""),j=Object(r.a)(f,2),g=j[0],v=j[1],h=Object(s.useState)(1),x=Object(r.a)(h,2),N=x[0],C=x[1],k=Object(s.useState)("id"),w=Object(r.a)(k,2),L=w[0],S=w[1],E=Object(s.useState)(10),R=Object(r.a)(E,2),D=R[0],T=R[1],A=Object(s.useState)({value:"",label:"Select Role"}),q=Object(r.a)(A,2),F=q[0],H=q[1],I=Object(s.useState)({value:"",label:"Select Plan"}),z=Object(r.a)(I,2),V=z[0],G=z[1],M=Object(s.useState)({value:"",label:"Select Status",number:0}),W=Object(r.a)(M,2),K=W[0],J=W[1],U=Object(s.forwardRef)((function(e,a){return Object(p.jsx)("div",{className:"form-check",children:Object(p.jsx)(o.K,Object(n.a)({type:"checkbox",ref:a},e))})}));Object(s.useEffect)((function(){e(Object(u.d)()),e(Object(u.e)({sort:b,sortColumn:L,q:g,page:N,perPage:D,role:F.value,status:K.value,currentPlan:V.value}))}),[e,a.data.length,b,L,N]);var Y=[{value:"",label:"Select Role"},{value:"admin",label:"Admin"},{value:"author",label:"Author"},{value:"editor",label:"Editor"},{value:"maintainer",label:"Maintainer"},{value:"subscriber",label:"Subscriber"}];return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)(o.l,{children:Object(p.jsx)(o.m,{children:Object(p.jsxs)(o.ib,{children:[Object(p.jsxs)(o.B,{md:"3",children:[Object(p.jsx)(o.N,{for:"role-select",children:"Client"}),Object(p.jsx)(c.a,{isClearable:!1,value:F,options:Y,className:"react-select",classNamePrefix:"select",theme:i.i,onChange:function(a){H(a),e(Object(u.e)({sort:b,sortColumn:L,q:g,role:a.value,page:N,perPage:D,status:K.value,currentPlan:V.value}))}})]}),Object(p.jsxs)(o.B,{className:"my-md-0 my-1",md:"3",children:[Object(p.jsx)(o.N,{for:"plan-select",children:"Service"}),Object(p.jsx)(c.a,{theme:i.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Plan"},{value:"basic",label:"Basic"},{value:"company",label:"Company"},{value:"enterprise",label:"Enterprise"},{value:"team",label:"Team"}],value:V,onChange:function(a){G(a),e(Object(u.e)({sort:b,sortColumn:L,q:g,page:N,perPage:D,role:F.value,currentPlan:a.value,status:K.value}))}})]}),Object(p.jsxs)(o.B,{md:"3",children:[Object(p.jsx)(o.N,{for:"role-select",children:"Emloyee"}),Object(p.jsx)(c.a,{isClearable:!1,value:F,options:Y,className:"react-select",classNamePrefix:"select",theme:i.i,onChange:function(a){H(a),e(Object(u.e)({sort:b,sortColumn:L,q:g,role:a.value,page:N,perPage:D,status:K.value,currentPlan:V.value}))}})]}),Object(p.jsxs)(o.B,{md:"3",children:[Object(p.jsx)(o.N,{for:"status-select",children:"Status"}),Object(p.jsx)(c.a,{theme:i.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"",label:"Select Status",number:0},{value:"pending",label:"Pending",number:1},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],value:K,onChange:function(a){J(a),e(Object(u.e)({sort:b,sortColumn:L,q:g,page:N,status:a.value,perPage:D,role:F.value,currentPlan:V.value}))}})]})]})})}),Object(p.jsx)(o.l,{className:"overflow-hidden",children:Object(p.jsx)("div",{className:"react-dataTable",children:Object(p.jsx)(P.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:O,onSort:function(a,t){m(t),S(a.sortField),e(Object(u.e)({sort:b,sortColumn:L,q:g,page:N,perPage:D,role:F.value,status:K.value,currentPlan:V.value}))},sortIcon:Object(p.jsx)(_.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Number(Math.ceil(a.total/D));return Object(p.jsx)(y.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==N?N-1:0,onPageChange:function(a){return function(a){e(Object(u.e)({sort:b,sortColumn:L,q:g,perPage:D,page:a.selected+1,role:F.value,status:K.value,currentPlan:V.value})),C(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={role:F.value,currentPlan:V.value,status:K.value,q:g},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,D)}(),selectableRowsComponent:U,subHeaderComponent:Object(p.jsx)(B,{store:a,searchTerm:g,rowsPerPage:D,handleFilter:function(a){v(a),e(Object(u.e)({sort:b,q:a,sortColumn:L,page:N,perPage:D,role:F.value,status:K.value,currentPlan:V.value}))},handlePerPage:function(a){var t=parseInt(a.currentTarget.value);e(Object(u.e)({sort:b,sortColumn:L,q:g,perPage:t,page:N,role:F.value,currentPlan:V.value,status:K.value})),T(t)}})})})})]})};t(601),t(504),a.default=function(){return Object(p.jsx)("div",{className:"app-user-list",children:Object(p.jsx)(D,{})})}},496:function(e,a,t){},497:function(e,a,t){(function(n){var r;e.exports=(r=t(1),function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=r},function(e,a,t){"use strict";var n=t(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,a,t,r,s,l){if(l!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:r};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),l=n(0),i=n.n(l);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.page,r=e.selected,l=e.activeClassName,i=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,b=e.ariaLabel||"Page "+n+(p?" "+p:""),m=null;return r&&(m="page",b=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+l:l,void 0!==t?void 0!==i&&(t=t+" "+i):t=i),s.a.createElement("li",{className:a},s.a.createElement("a",c({role:"button",className:t,href:d,tabIndex:"0","aria-label":b,"aria-current":m,onKeyPress:u},o(u)),n))};o.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired};var u=o;function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var p=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,l=e.getEventListener,i=t||"break";return s.a.createElement("li",{className:i},s.a.createElement("a",d({className:n,role:"button",tabIndex:"0",onKeyPress:r},l(r)),a))};p.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var b=p;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function j(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,a){return(g=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function v(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=O(e);if(a){var r=O(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return h(this,t)}}function h(e,a){return!a||"object"!==m(a)&&"function"!=typeof a?x(e):a}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var y=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&g(e,a)}(l,e);var a,t,n,r=v(l);function l(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,l),N(x(a=r.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),N(x(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)})),N(x(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),N(x(a),"getEventListener",(function(e){return N({},a.props.eventListener,e)})),N(x(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var n=a.state.selected;a.handlePageSelected(n<e?a.getForwardJump():a.getBackwardJump(),t)})),N(x(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),N(x(a),"pagination",(function(){var e=[],t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,l=t.marginPagesDisplayed,i=t.breakLabel,c=t.breakClassName,o=t.breakLinkClassName,u=a.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(a.getPageElement(d));else{var p,m,f,j=n/2,g=n-j;u>r-n/2?j=n-(g=r-u):u<n/2&&(g=n-(j=u));var v=function(e){return a.getPageElement(e)};for(p=0;p<r;p++)(m=p+1)<=l||m>r-l||p>=u-j&&p<=u+g?e.push(v(p)):i&&e[e.length-1]!==f&&(f=s.a.createElement(b,{key:p,breakLabel:i,breakClassName:c,breakLinkClassName:o,breakHandler:a.handleBreakClick.bind(null,p),getEventListener:a.getEventListener}),e.push(f))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=l,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,r=t.pageLinkClassName,l=t.activeClassName,i=t.activeLinkClassName,c=t.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:r,activeClassName:l,activeLinkClassName:i,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,n=e.containerClassName,r=e.previousLabel,l=e.previousClassName,i=e.previousLinkClassName,c=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,d=e.nextClassName,p=e.nextLinkClassName,b=e.nextAriaLabel,m=e.nextRel,j=this.state.selected,g=l+(0===j?" ".concat(a):""),v=d+(j===t-1?" ".concat(a):""),h=0===j?"true":"false",x=j===t-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:g},s.a.createElement("a",f({className:i,href:this.hrefBuilder(j-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":h,"aria-label":c,rel:o},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:v},s.a.createElement("a",f({className:p,href:this.hrefBuilder(j+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":b,rel:m},this.getEventListener(this.handleNextPage)),u)))}}])&&j(a.prototype,t),n&&j(a,n),l}(r.Component);N(y,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),N(y,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=y,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(19))},504:function(e,a,t){},533:function(e,a,t){"use strict";var n=t(15),r=t(29),s=t(133),l=t(805),i=t(3),c=t.n(i),o=t(520),u=t.n(o),d=t(90),p=t(10),b=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"];a.a=function(e){var a,t=e.open,i=e.size,o=e.title,m=e.width,f=e.children,j=e.closeBtn,g=e.className,v=e.toggleSidebar,h=e.bodyClassName,x=e.contentClassName,O=e.wrapperClassName,N=e.headerClassName,y=Object(s.a)(e,b),C=j||Object(p.jsx)(l.a,{className:"cursor-pointer",size:15,onClick:v});return Object(p.jsxs)(d.Q,Object(n.a)(Object(n.a)(Object(n.a)({isOpen:t,toggle:v,contentClassName:c()("overflow-hidden",Object(r.a)({},x,x)),modalClassName:c()("modal-slide-in",Object(r.a)({},O,O)),className:c()((a={},Object(r.a)(a,g,g),Object(r.a)(a,"sidebar-lg","lg"===i),Object(r.a)(a,"sidebar-sm","sm"===i),a))},void 0!==m?{style:{width:String(m)+"px"}}:{}),y),{},{children:[Object(p.jsx)(d.T,{className:c()(Object(r.a)({},N,N)),toggle:v,close:C,tag:"div",children:Object(p.jsx)("h5",{className:"modal-title",children:Object(p.jsx)("span",{className:"align-middle",children:o})})}),Object(p.jsx)(u.a,{options:{wheelPropagation:!1},children:Object(p.jsx)(d.R,{className:c()("flex-grow-1",Object(r.a)({},h,h)),children:f})})]}))}},601:function(e,a,t){"use strict";var n=t(29),r=t(3),s=t.n(r),l=t(90),i=t(10);a.a=function(e){var a=e.icon,t=e.color,r=e.stats,c=e.renderStats,o=e.statTitle,u=e.className,d=e.statsMargin;return Object(i.jsx)(l.l,{children:Object(i.jsx)(l.m,{className:u,children:Object(i.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(i.jsxs)("div",{children:[c||Object(i.jsx)("h2",{className:s()("fw-bolder",Object(n.a)({"mb-0":!d},d,d)),children:r}),Object(i.jsx)("p",{className:"card-text",children:o})]}),Object(i.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(t?"bg-light-".concat(t):"bg-light-primary"),children:Object(i.jsx)("div",{className:"avatar-content",children:a})})]})})})}}}]);
//# sourceMappingURL=61.87056c04.chunk.js.map