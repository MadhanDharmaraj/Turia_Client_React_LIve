(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[83],{1440:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(2),s=a(139),i=a(528),l=a(152),c=a(727),o=a(777),u=a(783),p=a(718),d=a(844),f=a(96),m=a(16),b=function(e){return e.avatar.length?Object(m.jsx)(i.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(m.jsx)(i.a,{initials:!0,className:"me-1",color:e.avatarColor||"light-primary",content:e.fullName||"John Doe"})},g={pending:"light-warning",active:"light-success",inactive:"light-secondary"},v=[{name:"User",sortable:!0,minWidth:"300px",sortField:"fullName",selector:function(e){return e.fullName},cell:function(e){return Object(m.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[b(e),Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsx)(s.b,{to:"/team/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return l.a.dispatch(getUser(e.id))},children:Object(m.jsx)("span",{className:"fw-bolder",children:e.fullName})}),Object(m.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.role},cell:function(e){return function(e){var t={subscriber:{class:"text-primary",icon:c.a},maintainer:{class:"text-success",icon:o.a},editor:{class:"text-info",icon:u.a},author:{class:"text-warning",icon:p.a},admin:{class:"text-danger",icon:d.a}},a=t[e.role]?t[e.role].icon:u.a;return Object(m.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(m.jsx)(a,{size:18,className:"".concat(t[e.role]?t[e.role].class:""," me-50")}),e.role]})}(e)}},{name:"Designation",minWidth:"138px",sortable:!0,sortField:"designation",selector:function(e){return e.designation},cell:function(e){return Object(m.jsx)("span",{className:"text-capitalize",children:e.designation})}},{name:"Department",minWidth:"230px",sortable:!0,sortField:"department",selector:function(e){return e.department},cell:function(e){return Object(m.jsx)("span",{className:"text-capitalize",children:e.department})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(m.jsx)(f.f,{className:"text-capitalize",color:g[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(m.jsx)("div",{className:"column-action d-flex align-items-center",children:e.name||""})}}],h=a(176),j=a(140),x=a(531),O=a.n(x),y=a(547),N=a.n(y),C=a(841),P=a(833),k=a(791),L=a(798),w=a(792),E=a(772),S=a(758),R=(a(535),a(532),function(e){var t=e.store,a=e.handlePerPage,n=e.rowsPerPage,r=e.handleFilter,s=e.searchTerm;function i(e){var a=document.createElement("a"),n=function(e){var a,n=Object.keys(t.data[0]);return a="",a+=n.join(","),a+="\n",e.forEach((function(e){var t=0;n.forEach((function(n){t>0&&(a+=","),a+=e[n],t++})),a+="\n"})),a}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),a.setAttribute("href",encodeURI(n)),a.setAttribute("download","export.csv"),a.click()}}return Object(m.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(m.jsxs)(f.ib,{children:[Object(m.jsx)(f.B,{xl:"6",md:"6",sm:"6",className:"d-flex align-items-center p-0",children:Object(m.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(m.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(m.jsxs)(f.K,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(m.jsx)("option",{value:"10",children:"10"}),Object(m.jsx)("option",{value:"25",children:"25"}),Object(m.jsx)("option",{value:"50",children:"50"})]}),Object(m.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(m.jsxs)(f.B,{md:"6",sm:"6",xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(m.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(m.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(m.jsx)(f.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(m.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:Object(m.jsxs)(f.wb,{className:"me-1",children:[Object(m.jsxs)(f.G,{color:"secondary",caret:!0,outline:!0,children:[Object(m.jsx)(C.a,{className:"font-small-4 me-50"}),Object(m.jsx)("span",{className:"align-middle",children:"Export"})]}),Object(m.jsxs)(f.F,{children:[Object(m.jsxs)(f.E,{className:"w-100",children:[Object(m.jsx)(P.a,{className:"font-small-4 me-50"}),Object(m.jsx)("span",{className:"align-middle",children:"Print"})]}),Object(m.jsxs)(f.E,{className:"w-100",onClick:function(){return i(t.data)},children:[Object(m.jsx)(k.a,{className:"font-small-4 me-50"}),Object(m.jsx)("span",{className:"align-middle",children:"CSV"})]}),Object(m.jsxs)(f.E,{className:"w-100",children:[Object(m.jsx)(L.a,{className:"font-small-4 me-50"}),Object(m.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(m.jsxs)(f.E,{className:"w-100",children:[Object(m.jsx)(w.a,{className:"font-small-4 me-50"}),Object(m.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(m.jsxs)(f.E,{className:"w-100",children:[Object(m.jsx)(E.a,{className:"font-small-4 me-50"}),Object(m.jsx)("span",{className:"align-middle",children:"Copy"})]})]})]})})]})]})})}),_=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.users})),a=Object(r.useState)("desc"),s=Object(n.a)(a,2),i=s[0],l=s[1],c=Object(r.useState)(""),o=Object(n.a)(c,2),u=o[0],p=o[1],d=Object(r.useState)(1),b=Object(n.a)(d,2),g=b[0],x=b[1],y=Object(r.useState)("createdon"),C=Object(n.a)(y,2),P=C[0],k=C[1],L=Object(r.useState)(10),w=Object(n.a)(L,2),E=w[0],_=w[1],D=Object(r.useState)(!1),T=Object(n.a)(D,2),B=T[0],A=T[1],H=Object(r.useState)({value:"",label:"Select Role"}),F=Object(n.a)(H,1)[0],q=Object(r.useState)({value:"",label:"Select Plan"}),I=Object(n.a)(q,1)[0],V=Object(r.useState)({value:"",label:"Select Status",number:0}),G=Object(n.a)(V,1)[0],W=function(){return A(!B)};console.log(W),Object(r.useEffect)((function(){e(Object(h.b)({sort:i,sortColumn:P,q:u,page:g,perPage:E,role:F.value,status:G.value,currentPlan:I.value}))}),[e,t.data.length,i,P,g]);return Object(m.jsx)(r.Fragment,{children:Object(m.jsx)(f.l,{className:"overflow-hidden",children:Object(m.jsx)("div",{className:"react-dataTable",children:Object(m.jsx)(N.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:v,onSort:function(t,a){l(a),k(t.sortField),e(Object(h.b)({sort:i,sortColumn:P,q:u,page:g,perPage:E,role:F.value,status:G.value,currentPlan:I.value}))},sortIcon:Object(m.jsx)(S.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Number(Math.ceil(t.total/E));return Object(m.jsx)(O.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==g?g-1:0,onPageChange:function(t){return function(t){e(Object(h.b)({sort:i,sortColumn:P,q:u,perPage:E,page:t.selected+1,role:F.value,status:G.value,currentPlan:I.value})),x(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={role:F.value,currentPlan:I.value,status:G.value,q:u},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,E)}(),subHeaderComponent:Object(m.jsx)(R,{store:t,searchTerm:u,rowsPerPage:E,handleFilter:function(t){p(t),e(Object(h.b)({sort:i,q:t,sortColumn:P,page:g,perPage:E,role:F.value,status:G.value,currentPlan:I.value}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(h.b)({sort:i,sortColumn:P,q:u,perPage:a,page:g,role:F.value,currentPlan:I.value,status:G.value})),_(a)},toggleSidebar:W})})})})})};a(589),a(544),t.default=function(){return Object(m.jsx)("div",{className:"app-user-list",children:Object(m.jsx)(_,{})})}},531:function(e,t,a){(function(n){var r;e.exports=(r=a(2),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,s,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),s=n.n(r),i=n(0),l=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,i=e.activeClassName,l=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+n+(d?" "+d:""),m=null;return r&&(m="page",f=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==l&&(a=a+" "+l):a=l),s.a.createElement("li",{className:t},s.a.createElement("a",c({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":m,onKeyPress:u},o(u)),n))};o.propTypes={pageSelectedHandler:l.a.func.isRequired,selected:l.a.bool.isRequired,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,extraAriaContext:l.a.string,href:l.a.string,ariaLabel:l.a.string,page:l.a.number.isRequired,getEventListener:l.a.func.isRequired};var u=o;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,l=a||"break";return s.a.createElement("li",{className:l},s.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};d.propTypes={breakLabel:l.a.oneOfType([l.a.string,l.a.node]),breakClassName:l.a.string,breakLinkClassName:l.a.string,breakHandler:l.a.func.isRequired,getEventListener:l.a.func.isRequired};var f=d;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=O(e);if(t){var r=O(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,a,n,r=h(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(x(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(x(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),y(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(x(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),y(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(x(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,l=a.breakLabel,c=a.breakClassName,o=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var d,m,b,g=n/2,v=n-g;u>r-n/2?g=n-(v=r-u):u<n/2&&(v=n-(g=u));var h=function(e){return t.getPageElement(e)};for(d=0;d<r;d++)(m=d+1)<=i||m>r-i||d>=u-g&&d<=u+v?e.push(h(d)):l&&e[e.length-1]!==b&&(b=s.a.createElement(f,{key:d,breakLabel:l,breakClassName:c,breakLinkClassName:o,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(b))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,l=a.activeLinkClassName,c=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:l,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,c=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,m=e.nextRel,g=this.state.selected,v=i+(0===g?" ".concat(t):""),h=p+(g===a-1?" ".concat(t):""),j=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:v},s.a.createElement("a",b({className:l,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":c,rel:o},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:h},s.a.createElement("a",b({className:d,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:m},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),n&&g(t,n),i}(r.Component);y(N,"propTypes",{pageCount:l.a.number.isRequired,pageRangeDisplayed:l.a.number.isRequired,marginPagesDisplayed:l.a.number.isRequired,previousLabel:l.a.node,previousAriaLabel:l.a.string,prevRel:l.a.string,nextLabel:l.a.node,nextAriaLabel:l.a.string,nextRel:l.a.string,breakLabel:l.a.oneOfType([l.a.string,l.a.node]),hrefBuilder:l.a.func,onPageChange:l.a.func,initialPage:l.a.number,forcePage:l.a.number,disableInitialCallback:l.a.bool,containerClassName:l.a.string,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,previousClassName:l.a.string,nextClassName:l.a.string,previousLinkClassName:l.a.string,nextLinkClassName:l.a.string,disabledClassName:l.a.string,breakClassName:l.a.string,breakLinkClassName:l.a.string,extraAriaContext:l.a.string,ariaLabelBuilder:l.a.func,eventListener:l.a.string}),y(N,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=N,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(20))},532:function(e,t,a){},544:function(e,t,a){},589:function(e,t,a){"use strict";var n=a(34),r=a(7),s=a.n(r),i=a(96),l=a(16);t.a=function(e){var t=e.icon,a=e.color,r=e.stats,c=e.renderStats,o=e.statTitle,u=e.className,p=e.statsMargin;return Object(l.jsx)(i.l,{children:Object(l.jsx)(i.m,{className:u,children:Object(l.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(l.jsxs)("div",{children:[c||Object(l.jsx)("h2",{className:s()("fw-bolder",Object(n.a)({"mb-0":!p},p,p)),children:r}),Object(l.jsx)("p",{className:"card-text",children:o})]}),Object(l.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(a?"bg-light-".concat(a):"bg-light-primary"),children:Object(l.jsx)("div",{className:"avatar-content",children:t})})]})})})}}}]);
//# sourceMappingURL=83.c7775dd4.chunk.js.map