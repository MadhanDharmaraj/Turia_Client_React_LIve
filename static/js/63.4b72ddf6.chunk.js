(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[63],{1445:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(4),s=a(22),i=a(2),c=a(139),l=a(144),o=a(528),u=a(542),p=a.n(u),d=a(543),f=a.n(d),b=a(152),m=a(160),g=a(824),v=a(741),h=a(853),j=a(96),x=a(39),O=a.n(x),y=a(16),N=function(e){return Object(y.jsx)(o.a,{initials:!0,className:"me-1",color:e.avatarColor||"light-primary",content:e.name||"John Doe"})},C=f()(p.a),k=["","One time","Monthly","Quaterly","Annually"],P=function(e){var t=O()().format("y");return e?13===e.length?O()(e,"x").year(t).format("MMM DD, YYYY"):O.a.unix(e).year(t).format("MMM DD, YYYY"):""},w=[{name:"Filing Name",sortable:!0,minWidth:"300px",sortField:"name",selector:function(e){return e.name},cell:function(e){return Object(y.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[N(e),Object(y.jsx)("div",{className:"d-flex flex-column",children:Object(y.jsx)(c.b,{to:"/compliance/view/".concat(e.id),className:"user_name text-truncate text-body",children:Object(y.jsx)("span",{className:"fw-bolder",children:e.name})})})]})}},{name:"No of Clients",sortable:!0,minWidth:"172px",cell:function(e){return Object(y.jsxs)("span",{children:[e.noofclients," Client's"]})}},{name:"Upcoming Due Date",minWidth:"138px",sortable:!0,cell:function(e){return Object(y.jsx)("span",{className:"text-capitalize",children:P(e.duedate)})}},{name:"Filing Period",minWidth:"230px",sortable:!0,sortField:"billing",selector:function(e){return e.billing},cell:function(e){return Object(y.jsx)("span",{className:"text-capitalize",children:k[e.frequency]})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(y.jsx)("div",{className:"column-action",children:Object(y.jsxs)(j.wb,{children:[Object(y.jsx)(j.G,{tag:"div",className:"btn btn-sm",children:Object(y.jsx)(g.a,{size:14,className:"cursor-pointer"})}),Object(y.jsxs)(j.F,{children:[Object(y.jsx)(l.b,{I:"write",a:"filing-alert",children:Object(y.jsxs)(j.E,{tag:c.b,to:"/compliance/edit/".concat(e.id),className:"w-100",children:[Object(y.jsx)(v.a,{size:14,className:"me-50"}),Object(y.jsx)("span",{className:"align-middle",children:"Edit"})]})}),Object(y.jsx)(l.b,{I:"delete",a:"filing-alert",children:Object(y.jsxs)(j.E,{className:"w-100",onClick:function(t){var a;t.preventDefault(),a=e.id,C.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=4;break}return e.next=3,b.a.dispatch(Object(m.c)(a));case 3:C.fire({icon:"success",title:"Deleted!",text:"Compliance has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(y.jsx)(h.a,{size:14,className:"me-50"}),Object(y.jsx)("span",{className:"align-middle",children:"Delete"})]})})]})]})})}}],L=a(140),S=a(526),E=a(527),D=a(531),R=a.n(D),_=a(547),B=a.n(_),T=a(758),A=(a(535),a(532),function(e){var t=e.handlePerPage,a=e.rowsPerPage,n=e.handleFilter,r=e.searchTerm;return Object(y.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(y.jsxs)(j.ib,{children:[Object(y.jsx)(j.B,{xl:"6",md:"6",sm:"6",className:"d-flex align-items-center p-0",children:Object(y.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(y.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(y.jsxs)(j.K,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(y.jsx)("option",{value:"10",children:"10"}),Object(y.jsx)("option",{value:"25",children:"25"}),Object(y.jsx)("option",{value:"50",children:"50"})]}),Object(y.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(y.jsxs)(j.B,{md:"6",sm:"6",xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(y.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(y.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(y.jsx)(j.K,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:r,onChange:function(e){return n(e.target.value)}})]}),Object(y.jsx)(l.b,{I:"delete",a:"filing-alert",children:Object(y.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:Object(y.jsx)(j.i,{color:"primary",tag:c.b,to:"/compliance/add",children:"Add Compliance"})})})]})]})})}),H=function(){var e=Object(L.b)(),t=Object(L.c)((function(e){return e.users})),a=Object(i.useState)(!1),c=Object(s.a)(a,2),l=c[0],o=c[1],u=function(){return Object(y.jsx)(i.Fragment,{children:Object(y.jsx)(E.a,{})})},p=Object(i.useState)("desc"),d=Object(s.a)(p,2),f=d[0],b=d[1],g=Object(i.useState)(""),v=Object(s.a)(g,2),h=v[0],x=v[1],O=Object(i.useState)(1),N=Object(s.a)(O,2),C=N[0],k=N[1],P=Object(i.useState)("createdon"),D=Object(s.a)(P,2),_=D[0],H=D[1],q=Object(i.useState)(10),F=Object(s.a)(q,2),I=F[0],M=F[1],Y=Object(i.useState)({value:"",label:"Select Status",number:0}),V=Object(s.a)(Y,1)[0];Object(i.useEffect)(Object(r.a)(Object(n.a)().mark((function t(){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,e(Object(m.e)({sort:f,sortColumn:_,q:h,page:C,perPage:I,status:V.value}));case 3:o(!1);case 4:case"end":return t.stop()}}),t)}))),[e]);var G=function(){var t=Object(r.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,e(Object(m.e)({sort:f,sortColumn:_,q:h,perPage:I,page:a.selected+1,status:V.value}));case 3:k(a.selected+1),o(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(r.a)(Object(n.a)().mark((function t(a){var r;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),r=parseInt(a.currentTarget.value),t.next=4,e(Object(m.e)({sort:f,sortColumn:_,q:h,perPage:r,page:C,status:V.value}));case 4:M(r),o(!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),J=function(){var t=Object(r.a)(Object(n.a)().mark((function t(a){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),x(a),t.next=4,e(Object(m.e)({sort:f,q:a,sortColumn:_,page:C,perPage:I,status:V.value}));case 4:o(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(){var t=Object(r.a)(Object(n.a)().mark((function t(a,r){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(r),o(!0),H(a.sortField),t.next=5,e(Object(m.e)({sort:f,sortColumn:_,q:h,page:C,perPage:I,status:V.value}));case 5:o(!1);case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return Object(y.jsx)(i.Fragment,{children:Object(y.jsx)(S.a,{blocking:l,loader:Object(y.jsx)(u,{}),children:Object(y.jsx)(j.l,{className:"overflow-hidden",children:Object(y.jsx)("div",{className:"react-dataTable",children:Object(y.jsx)(B.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,highlightOnHover:!0,columns:w,onSort:K,sortIcon:Object(y.jsx)(T.a,{}),className:"react-dataTable",paginationComponent:function(){var e=Number(Math.ceil(t.total/I));return Object(y.jsx)(R.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==C?C-1:0,onPageChange:function(e){return G(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={status:V.value,q:h},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,I)}(),subHeaderComponent:Object(y.jsx)(A,{store:t,searchTerm:h,rowsPerPage:I,handleFilter:J,handlePerPage:W})})})})})})};a(589),a(544),t.default=function(){return Object(y.jsx)("div",{className:"app-user-list",children:Object(y.jsx)(H,{})})}},526:function(e,t,a){"use strict";var n=a(14),r=a(34),s=a(2),i=a(7),c=a.n(i),l=a(96),o=(a(529),a(16)),u=function(e){var t,a=e.children,i=e.blocking,l=e.loader,u=e.className,p=e.tag,d=e.overlayColor,f=p;return Object(o.jsxs)(f,{className:c()("ui-loader",(t={},Object(r.a)(t,u,u),Object(r.a)(t,"show",i),t)),children:[a,i?Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("div",Object(n.a)({className:"overlay"},i&&d?{style:{backgroundColor:d}}:{})),Object(o.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(l.jb,{color:"primary"})}},527:function(e,t,a){"use strict";var n=a(16);t.a=function(){return Object(n.jsx)("div",{className:"fallback-spinner",children:Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{className:"effect-1 effects"}),Object(n.jsx)("div",{className:"effect-2 effects"}),Object(n.jsx)("div",{className:"effect-3 effects"})]})})}},529:function(e,t,a){},531:function(e,t,a){(function(n){var r;e.exports=(r=a(2),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,s,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),s=n.n(r),i=n(0),c=n.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,i=e.activeClassName,c=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.ariaLabel||"Page "+n+(d?" "+d:""),b=null;return r&&(b="page",f=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==c&&(a=a+" "+c):a=c),s.a.createElement("li",{className:t},s.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},o(u)),n))};o.propTypes={pageSelectedHandler:c.a.func.isRequired,selected:c.a.bool.isRequired,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,extraAriaContext:c.a.string,href:c.a.string,ariaLabel:c.a.string,page:c.a.number.isRequired,getEventListener:c.a.func.isRequired};var u=o;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,c=a||"break";return s.a.createElement("li",{className:c},s.a.createElement("a",p({className:n,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};d.propTypes={breakLabel:c.a.oneOfType([c.a.string,c.a.node]),breakClassName:c.a.string,breakLinkClassName:c.a.string,breakHandler:c.a.func.isRequired,getEventListener:c.a.func.isRequired};var f=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=O(e);if(t){var r=O(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,a,n,r=h(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(x(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(x(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),y(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(x(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),y(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(x(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,c=a.breakLabel,l=a.breakClassName,o=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var d,b,m,g=n/2,v=n-g;u>r-n/2?g=n-(v=r-u):u<n/2&&(v=n-(g=u));var h=function(e){return t.getPageElement(e)};for(d=0;d<r;d++)(b=d+1)<=i||b>r-i||d>=u-g&&d<=u+v?e.push(h(d)):c&&e[e.length-1]!==m&&(m=s.a.createElement(f,{key:d,breakLabel:c,breakClassName:l,breakLinkClassName:o,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,c=a.activeLinkClassName,l=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:c,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,i=e.previousClassName,c=e.previousLinkClassName,l=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,f=e.nextAriaLabel,b=e.nextRel,g=this.state.selected,v=i+(0===g?" ".concat(t):""),h=p+(g===a-1?" ".concat(t):""),j=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:v},s.a.createElement("a",m({className:c,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":l,rel:o},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:h},s.a.createElement("a",m({className:d,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":f,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),n&&g(t,n),i}(r.Component);y(N,"propTypes",{pageCount:c.a.number.isRequired,pageRangeDisplayed:c.a.number.isRequired,marginPagesDisplayed:c.a.number.isRequired,previousLabel:c.a.node,previousAriaLabel:c.a.string,prevRel:c.a.string,nextLabel:c.a.node,nextAriaLabel:c.a.string,nextRel:c.a.string,breakLabel:c.a.oneOfType([c.a.string,c.a.node]),hrefBuilder:c.a.func,onPageChange:c.a.func,initialPage:c.a.number,forcePage:c.a.number,disableInitialCallback:c.a.bool,containerClassName:c.a.string,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,previousClassName:c.a.string,nextClassName:c.a.string,previousLinkClassName:c.a.string,nextLinkClassName:c.a.string,disabledClassName:c.a.string,breakClassName:c.a.string,breakLinkClassName:c.a.string,extraAriaContext:c.a.string,ariaLabelBuilder:c.a.func,eventListener:c.a.string}),y(N,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=N,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(20))},532:function(e,t,a){},544:function(e,t,a){},589:function(e,t,a){"use strict";var n=a(34),r=a(7),s=a.n(r),i=a(96),c=a(16);t.a=function(e){var t=e.icon,a=e.color,r=e.stats,l=e.renderStats,o=e.statTitle,u=e.className,p=e.statsMargin;return Object(c.jsx)(i.l,{children:Object(c.jsx)(i.m,{className:u,children:Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsxs)("div",{children:[l||Object(c.jsx)("h2",{className:s()("fw-bolder",Object(n.a)({"mb-0":!p},p,p)),children:r}),Object(c.jsx)("p",{className:"card-text",children:o})]}),Object(c.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(a?"bg-light-".concat(a):"bg-light-primary"),children:Object(c.jsx)("div",{className:"avatar-content",children:t})})]})})})}}}]);
//# sourceMappingURL=63.4b72ddf6.chunk.js.map