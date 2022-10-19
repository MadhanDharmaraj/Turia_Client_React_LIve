(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[61],{1646:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(15),s=a(1),i=a(129),c=a(484),l=a(140),o=a(686),u=a(873),d=a(870),p=a(908),f=a(840),b=a(954),m=a(939),g=a(88),h=a(10),v=function(e){return e.avatar.length?Object(h.jsx)(c.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(h.jsx)(c.a,{initials:!0,className:"me-1",color:e.avatarColor||"light-primary",content:e.client||"John Doe"})},j={pending:"light-warning",active:"light-success",inactive:"light-secondary"},x=[{name:"ID",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.uniqueId},cell:function(e){return Object(h.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(h.jsx)(i.b,{to:"/digital-signature/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return l.a.dispatch(Object(o.d)(e.id))},children:Object(h.jsx)("span",{className:"text-capitalize fw-bolder",children:e.uniqueId})})})}},{name:"Client",sortable:!0,minWidth:"300px",sortField:"client",selector:function(e){return e.client},cell:function(e){return Object(h.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[v(e),Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{className:"fw-bolder",children:e.client}),Object(h.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Issued Date",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.issuedDate},cell:function(e){return Object(h.jsx)("span",{className:"text-capitalize",children:e.issuedDate})}},{name:"Expiry Date",minWidth:"138px",sortable:!0,sortField:"currentPlan",selector:function(e){return e.expiryDate},cell:function(e){return Object(h.jsx)("span",{className:"text-capitalize",children:e.expiryDate})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(h.jsx)(g.f,{className:"text-capitalize",color:j[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(h.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(h.jsx)(g.B,{tag:i.b,lg:4,to:"/digital-signature/view/".concat(e.id),onClick:function(){return l.a.dispatch(getUser(e.id))},children:Object(h.jsx)(u.a,{className:"cursor-pointer mt-0",size:16})}),Object(h.jsx)(g.B,{tag:i.b,lg:4,to:"/digital-signature/edit/".concat(e.id),onClick:function(){return l.a.dispatch(getUser(e.id))},children:Object(h.jsx)(d.a,{className:"cursor-pointer ms-1 mt-0",size:16})}),Object(h.jsxs)(g.wb,{children:[Object(h.jsx)(g.G,{tag:"div",className:"btn btn-sm",children:Object(h.jsx)(p.a,{size:14,className:"cursor-pointer"})}),Object(h.jsxs)(g.F,{children:[Object(h.jsxs)(g.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(h.jsx)(f.a,{size:14,className:"me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Mark as Active"})]}),Object(h.jsxs)(g.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(h.jsx)(b.a,{size:14,className:"me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Mark as Inactive"})]}),Object(h.jsxs)(g.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){t.preventDefault(),l.a.dispatch(Object(o.a)(e.id))},children:[Object(h.jsx)(m.a,{size:14,className:"me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})]})}}],O=a(130),y=a(493),N=a.n(y),C=a(501),k=a.n(C),P=a(925),w=a(918),L=a(878),E=a(885),S=a(879),D=a(857),R=a(843),_=(a(489),a(492),function(e){var t=e.store,a=e.handlePerPage,r=e.rowsPerPage,n=e.handleFilter,s=e.searchTerm;function c(e){var a=document.createElement("a"),r=function(e){var a,r=Object.keys(t.data[0]);return a="",a+=r.join(","),a+="\n",e.forEach((function(e){var t=0;r.forEach((function(r){t>0&&(a+=","),a+=e[r],t++})),a+="\n"})),a}(e);if(null!==r){r.match(/^data:text\/csv/i)||(r="data:text/csv;charset=utf-8,".concat(r)),a.setAttribute("href",encodeURI(r)),a.setAttribute("download","export.csv"),a.click()}}return Object(h.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(h.jsxs)(g.ib,{children:[Object(h.jsx)(g.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(h.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(h.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(h.jsxs)(g.K,{className:"mx-50",type:"select",id:"rows-per-page",value:r,onChange:a,style:{width:"5rem"},children:[Object(h.jsx)("option",{value:"10",children:"10"}),Object(h.jsx)("option",{value:"25",children:"25"}),Object(h.jsx)("option",{value:"50",children:"50"})]}),Object(h.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(h.jsxs)(g.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(h.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(h.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(h.jsx)(g.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return n(e.target.value)}})]}),Object(h.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(h.jsxs)(g.wb,{className:"me-1",children:[Object(h.jsxs)(g.G,{color:"secondary",caret:!0,outline:!0,children:[Object(h.jsx)(P.a,{className:"font-small-4 me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Export"})]}),Object(h.jsxs)(g.F,{children:[Object(h.jsxs)(g.E,{className:"w-100",children:[Object(h.jsx)(w.a,{className:"font-small-4 me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Print"})]}),Object(h.jsxs)(g.E,{className:"w-100",onClick:function(){return c(t.data)},children:[Object(h.jsx)(L.a,{className:"font-small-4 me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"CSV"})]}),Object(h.jsxs)(g.E,{className:"w-100",children:[Object(h.jsx)(E.a,{className:"font-small-4 me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(h.jsxs)(g.E,{className:"w-100",children:[Object(h.jsx)(S.a,{className:"font-small-4 me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(h.jsxs)(g.E,{className:"w-100",children:[Object(h.jsx)(D.a,{className:"font-small-4 me-50"}),Object(h.jsx)("span",{className:"align-middle",children:"Copy"})]})]})]}),Object(h.jsx)(g.i,{className:"add-new-user",color:"primary",tag:i.b,to:"/digital-signature/add",children:"Add"})]})]})]})})}),T=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.users})),a=Object(s.useState)("desc"),i=Object(n.a)(a,2),c=i[0],l=i[1],u=Object(s.useState)(""),d=Object(n.a)(u,2),p=d[0],f=d[1],b=Object(s.useState)(1),m=Object(n.a)(b,2),v=m[0],j=m[1],y=Object(s.useState)("id"),C=Object(n.a)(y,2),P=C[0],w=C[1],L=Object(s.useState)(10),E=Object(n.a)(L,2),S=E[0],D=E[1],T=Object(s.useState)({value:"",label:"Select Role"}),B=Object(n.a)(T,1)[0],A=Object(s.useState)({value:"",label:"Select Plan"}),I=Object(n.a)(A,1)[0],q=Object(s.useState)({value:"",label:"Select Status",number:0}),F=Object(n.a)(q,1)[0],H=Object(s.forwardRef)((function(e,t){return Object(h.jsx)("div",{className:"form-check",children:Object(h.jsx)(g.K,Object(r.a)({type:"checkbox",ref:t},e))})}));Object(s.useEffect)((function(){e(Object(o.b)()),e(Object(o.c)({sort:c,sortColumn:P,q:p,page:v,perPage:S,role:B.value,status:F.value,currentPlan:I.value}))}),[e,t.data.length,c,P,v]);return Object(h.jsx)(s.Fragment,{children:Object(h.jsx)(g.l,{className:"overflow-hidden",children:Object(h.jsx)("div",{className:"react-dataTable",children:Object(h.jsx)(k.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:x,onSort:function(t,a){l(a),w(t.sortField),e(Object(o.c)({sort:c,sortColumn:P,q:p,page:v,perPage:S,role:B.value,status:F.value,currentPlan:I.value}))},sortIcon:Object(h.jsx)(R.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Number(Math.ceil(t.total/S));return Object(h.jsx)(N.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==v?v-1:0,onPageChange:function(t){return function(t){e(Object(o.c)({sort:c,sortColumn:P,q:p,perPage:S,page:t.selected+1,role:B.value,status:F.value,currentPlan:I.value})),j(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={role:B.value,currentPlan:I.value,status:F.value,q:p},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,S)}(),selectableRowsComponent:H,subHeaderComponent:Object(h.jsx)(_,{store:t,searchTerm:p,rowsPerPage:S,handleFilter:function(t){f(t),e(Object(o.c)({sort:c,q:t,sortColumn:P,page:v,perPage:S,role:B.value,status:F.value,currentPlan:I.value}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(o.c)({sort:c,sortColumn:P,q:p,perPage:a,page:v,role:B.value,currentPlan:I.value,status:F.value})),D(a)}})})})})})};a(528),a(505),t.default=function(){return Object(h.jsx)("div",{className:"app-user-list",children:Object(h.jsx)(T,{})})}},492:function(e,t,a){},493:function(e,t,a){(function(r){var n;e.exports=(n=a(1),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var r=a(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,r){"use strict";r.r(a);var n=r(1),s=r.n(n),i=r(0),c=r.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,i=e.activeClassName,c=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,f=e.ariaLabel||"Page "+r+(p?" "+p:""),b=null;return n&&(b="page",f=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==c&&(a=a+" "+c):a=c),s.a.createElement("li",{className:t},s.a.createElement("a",l({role:"button",className:a,href:d,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},o(u)),r))};o.propTypes={pageSelectedHandler:c.a.func.isRequired,selected:c.a.bool.isRequired,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,extraAriaContext:c.a.string,href:c.a.string,ariaLabel:c.a.string,page:c.a.number.isRequired,getEventListener:c.a.func.isRequired};var u=o;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var p=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,c=a||"break";return s.a.createElement("li",{className:c},s.a.createElement("a",d({className:r,role:"button",tabIndex:"0",onKeyPress:n},i(n)),t))};p.propTypes={breakLabel:c.a.oneOfType([c.a.string,c.a.node]),breakClassName:c.a.string,breakLinkClassName:c.a.string,breakHandler:c.a.func.isRequired,getEventListener:c.a.func.isRequired};var f=p;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=O(e);if(t){var n=O(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,r,n=v(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(x(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(x(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),y(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(x(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),y(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(x(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,i=a.marginPagesDisplayed,c=a.breakLabel,l=a.breakClassName,o=a.breakLinkClassName,u=t.state.selected;if(n<=r)for(var d=0;d<n;d++)e.push(t.getPageElement(d));else{var p,b,m,g=r/2,h=r-g;u>n-r/2?g=r-(h=n-u):u<r/2&&(h=r-(g=u));var v=function(e){return t.getPageElement(e)};for(p=0;p<n;p++)(b=p+1)<=i||b>n-i||p>=u-g&&p<=u+h?e.push(v(p)):c&&e[e.length-1]!==m&&(m=s.a.createElement(f,{key:p,breakLabel:c,breakClassName:l,breakLinkClassName:o,breakHandler:t.handleBreakClick.bind(null,p),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,i=a.activeClassName,c=a.activeLinkClassName,l=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:n,activeClassName:i,activeLinkClassName:c,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,n=e.previousLabel,i=e.previousClassName,c=e.previousLinkClassName,l=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,d=e.nextClassName,p=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,h=i+(0===g?" ".concat(t):""),v=d+(g===a-1?" ".concat(t):""),j=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:r},s.a.createElement("li",{className:h},s.a.createElement("a",m({className:c,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":l,rel:o},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),s.a.createElement("li",{className:v},s.a.createElement("a",m({className:p,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),r&&g(t,r),i}(n.Component);y(N,"propTypes",{pageCount:c.a.number.isRequired,pageRangeDisplayed:c.a.number.isRequired,marginPagesDisplayed:c.a.number.isRequired,previousLabel:c.a.node,previousAriaLabel:c.a.string,prevRel:c.a.string,nextLabel:c.a.node,nextAriaLabel:c.a.string,nextRel:c.a.string,breakLabel:c.a.oneOfType([c.a.string,c.a.node]),hrefBuilder:c.a.func,onPageChange:c.a.func,initialPage:c.a.number,forcePage:c.a.number,disableInitialCallback:c.a.bool,containerClassName:c.a.string,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,previousClassName:c.a.string,nextClassName:c.a.string,previousLinkClassName:c.a.string,nextLinkClassName:c.a.string,disabledClassName:c.a.string,breakClassName:c.a.string,breakLinkClassName:c.a.string,extraAriaContext:c.a.string,ariaLabelBuilder:c.a.func,eventListener:c.a.string}),y(N,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=N,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(18))},505:function(e,t,a){},528:function(e,t,a){"use strict";var r=a(28),n=a(3),s=a.n(n),i=a(88),c=a(10);t.a=function(e){var t=e.icon,a=e.color,n=e.stats,l=e.renderStats,o=e.statTitle,u=e.className,d=e.statsMargin;return Object(c.jsx)(i.l,{children:Object(c.jsx)(i.m,{className:u,children:Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsxs)("div",{children:[l||Object(c.jsx)("h2",{className:s()("fw-bolder",Object(r.a)({"mb-0":!d},d,d)),children:n}),Object(c.jsx)("p",{className:"card-text",children:o})]}),Object(c.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(a?"bg-light-".concat(a):"bg-light-primary"),children:Object(c.jsx)("div",{className:"avatar-content",children:t})})]})})})}},686:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return p}));var r=a(6),n=a(2),s=a.n(n),i=a(4),c=a(5),l=a.n(c),o=Object(i.b)("appUsers/getAllData",Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/digital-signature/list/all-data");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),u=Object(i.b)("appUsers/getData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/digital-signature/list/data",t);case 2:return a=e.sent,e.abrupt("return",{params:t,data:a.data.users,totalPages:a.data.total});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(i.b)("appUsers/getUser",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/digital-signature",{id:t});case 2:return a=e.sent,e.abrupt("return",a.data.user);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=(Object(i.b)("appUsers/addUser",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,e.next=3,l.a.post("/apps/digital-signature/add",t);case 3:return e.next=5,r(u(n().users.params));case 5:return e.next=7,r(o());case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Object(i.b)("appUsers/deleteUser",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,e.next=3,l.a.delete("/apps/digital-signature/delete",{id:t});case 3:return e.next=5,r(u(n().users.params));case 5:return e.next=7,r(o());case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));Object(i.c)({name:"appUsers",initialState:{data:[],total:1,params:{},allData:[],selectedUser:null},reducers:{},extraReducers:function(e){e.addCase(o.fulfilled,(function(e,t){e.allData=t.payload})).addCase(u.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.totalPages})).addCase(d.fulfilled,(function(e,t){e.selectedUser=t.payload}))}}).reducer}}]);
//# sourceMappingURL=61.43de64d7.chunk.js.map