(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[80],{1656:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(17),s=a(18),i=a(1),c=a.n(i),l=a(2),o=a(132),u=a(507),d=a(141),p=a(143),b=a(884),f=a(881),m=a(920),g=a(953),h=a(91),v=a(516),j=a.n(v),x=a(517),O=a.n(x),y=a(514),C=a.n(y),N=a(13),k=O()(j.a),P=function(e){return Object(N.jsx)(u.a,{initials:!0,className:"me-1",color:"light-primary",content:e.servicename.charAt(0)||"T"})},L=["light-warning","light-success","light-secondary"],w=["Low","Medium","High"],S=["To Do","In progress","Completed","On Hold","Cancelled","Sent to Review","Request Changes"],E=[{name:"Task ID",sortable:!0,minWidth:"138px",sortField:"uniqueidentity",selector:function(e){return e.uniqueidentity},cell:function(e){return Object(N.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[P(e),Object(N.jsx)("div",{className:"d-flex flex-column",children:Object(N.jsx)(o.b,{to:"/task/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return d.a.dispatch(Object(p.i)(e.id))},children:Object(N.jsx)("span",{className:"fw-bolder",children:e.uniqueidentity})})})]})}},{name:"Client",sortable:!0,minWidth:"172px",sortField:"clientname",selector:function(e){return e.clientname},cell:function(e){return Object(N.jsx)("span",{className:"text-capitalize",children:e.clientname})}},{name:"Service",minWidth:"172px",sortable:!0,sortField:"servicename",selector:function(e){return e.servicename},cell:function(e){return Object(N.jsx)("span",{className:"text-capitalize",children:e.servicename})}},{name:"Priority",minWidth:"230px",sortable:!0,sortField:"priority",selector:function(e){return e.priority},cell:function(e){return Object(N.jsx)("span",{className:"text-capitalize",children:w[e.priority]})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"taskstatus",selector:function(e){return e.taskstatus},cell:function(e){return Object(N.jsx)(h.f,{className:"text-capitalize",color:L[e.taskstatus],pill:!0,children:S[e.taskstatus]})}},{name:"End Date",minWidth:"138px",sortable:!0,sortField:"enddate",cell:function(e){return Object(N.jsx)("span",{children:(t=e.enddate,C.a.unix(t).format("MMM DD, YYYY"))});var t}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(N.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(N.jsx)(h.B,{tag:o.b,lg:4,to:"/task/view/".concat(e.id),onClick:function(){return d.a.dispatch(Object(p.i)(e.id))},children:Object(N.jsx)(b.a,{className:"cursor-pointer mt-0",size:16})}),Object(N.jsx)(h.B,{tag:o.b,to:"/task/edit/".concat(e.id),lg:4,onClick:function(){return d.a.dispatch(Object(p.i)(e.id))},children:Object(N.jsx)(f.a,{className:"cursor-pointer ms-1 mt-0",size:16})}),Object(N.jsxs)(h.xb,{children:[Object(N.jsx)(h.G,{tag:"div",className:"btn btn-sm",children:Object(N.jsx)(m.a,{size:14,className:"cursor-pointer"})}),Object(N.jsx)(h.F,{children:Object(N.jsxs)(h.E,{tag:"a",href:"/",className:"w-100",onClick:function(t){var a;t.preventDefault(),a=e.id,k.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var e=Object(n.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=4;break}return e.next=3,d.a.dispatch(Object(p.e)(a));case 3:k.fire({icon:"success",title:"Deleted!",text:"Task has been deleted.",customClass:{confirmButton:"btn btn-success"}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(N.jsx)(g.a,{size:14,className:"me-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Delete"})]})})]})]})}}],R=a(133),T=a(5),B=a(511),D=a(518),_=a.n(D),F=a(526),q=a.n(F),A=a(938),H=a(896),I=a(854),V=a(515),M=(a(510),a(512),function(e){var t=e.handlePerPage,a=e.rowsPerPage,n=e.handleFilter,r=e.searchTerm;return Object(N.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(N.jsxs)(h.jb,{children:[Object(N.jsx)(h.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(N.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(N.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(N.jsxs)(h.L,{className:"mx-50",type:"select",id:"rows-per-page",value:a,onChange:t,style:{width:"5rem"},children:[Object(N.jsx)("option",{value:"10",children:"10"}),Object(N.jsx)("option",{value:"25",children:"25"}),Object(N.jsx)("option",{value:"50",children:"50"})]}),Object(N.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(N.jsxs)(h.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(N.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(N.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(N.jsx)(h.L,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:r,onChange:function(e){return n(e.target.value)}})]}),Object(N.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(N.jsxs)(h.xb,{className:"me-1",children:[Object(N.jsxs)(h.G,{color:"secondary",caret:!0,outline:!0,children:[Object(N.jsx)(A.a,{className:"font-small-4 me-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Export"})]}),Object(N.jsx)(h.F,{children:Object(N.jsxs)(h.E,{className:"w-100",children:[Object(N.jsx)(H.a,{className:"font-small-4 me-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Excel"})]})})]}),Object(N.jsx)(h.i,{className:"add-new-user",color:"primary",tag:o.b,to:"/task/add",children:"Add Task"})]})]})]})})}),z=function(){var e=Object(R.b)(),t=Object(R.c)((function(e){return e.task})),a=Object(l.useState)("desc"),i=Object(s.a)(a,2),o=i[0],u=i[1],d=Object(l.useState)(""),b=Object(s.a)(d,2),f=b[0],m=b[1],g=Object(l.useState)(1),v=Object(s.a)(g,2),j=v[0],x=v[1],O=Object(l.useState)("id"),y=Object(s.a)(O,2),C=y[0],k=y[1],P=Object(l.useState)(10),L=Object(s.a)(P,2),w=L[0],S=L[1],D=Object(l.useState)({id:"",name:"Select Client"}),F=Object(s.a)(D,2),A=F[0],H=F[1],z=Object(l.useState)({id:"",name:"Select Service"}),G=Object(s.a)(z,2),W=G[0],Y=G[1],J=Object(l.useState)({value:"1",label:"To Do",number:0}),K=Object(s.a)(J,2),U=K[0],Q=K[1],X=Object(l.useState)({id:"",name:"Select Employee"}),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=Object(l.forwardRef)((function(e,t){return Object(N.jsx)("div",{className:"form-check",children:Object(N.jsx)(h.L,Object(r.a)({type:"checkbox",ref:t},e))})}));Object(l.useEffect)((function(){e(Object(p.h)({sort:o,sortColumn:C,q:f,page:j,perPage:w,user:$.id,client:A.id,recurringFlag:!1,status:U.value,service:W.id}))}),[e,t.data.length,o,C,j]);var ae=Object(l.useState)([]),ne=Object(s.a)(ae,2),re=ne[0],se=ne[1],ie=Object(l.useState)([]),ce=Object(s.a)(ie,2),le=ce[0],oe=ce[1],ue=Object(l.useState)([]),de=Object(s.a)(ue,2),pe=de[0],be=de[1],fe=function(){var e=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T.a.post("/organizationusers/dropdown").then((function(e){var t=e.data;be(t.organizationusers)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){fe(),T.a.post("/services/dropdown").then((function(e){var t=e.data;oe(t.services)})),T.a.post("/clients/dropdown").then((function(e){var t=e.data;se(t.clients)}))}),[]);return Object(N.jsxs)(l.Fragment,{children:[Object(N.jsx)(h.l,{children:Object(N.jsx)(h.m,{children:Object(N.jsxs)(h.jb,{children:[Object(N.jsxs)(h.B,{md:"3",children:[Object(N.jsx)(h.O,{for:"role-select",children:"Client"}),Object(N.jsx)(B.a,{label:"name",isClearable:!1,value:A,options:re,className:"react-select",classNamePrefix:"select",theme:V.i,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(t){H(t),e(Object(p.h)({sort:o,sortColumn:C,q:f,client:t.id,page:j,perPage:w,status:U.value,user:$.id,recurringFlag:!1,service:W.id}))}})]}),Object(N.jsxs)(h.B,{className:"my-md-0 my-1",md:"3",children:[Object(N.jsx)(h.O,{for:"plan-select",children:"Service"}),Object(N.jsx)(B.a,{theme:V.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:le,value:W,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(t){Y(t),e(Object(p.h)({sort:o,sortColumn:C,q:f,page:j,perPage:w,client:A.id,user:$.id,service:t.id,recurringFlag:!1,status:U.value}))}})]}),Object(N.jsxs)(h.B,{md:"3",children:[Object(N.jsx)(h.O,{for:"role-select",children:"Emloyee"}),Object(N.jsx)(B.a,{isClearable:!1,value:$,options:pe,className:"react-select",classNamePrefix:"select",theme:V.i,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(t){ee(t),e(Object(p.h)({sort:o,sortColumn:C,q:f,client:A.id,page:j,perPage:w,user:t.id,status:U.value,recurringFlag:!1,service:W.id}))}})]}),Object(N.jsxs)(h.B,{md:"3",children:[Object(N.jsx)(h.O,{for:"status-select",children:"Status"}),Object(N.jsx)(B.a,{theme:V.i,isClearable:!1,className:"react-select",classNamePrefix:"select",options:[{value:"1",label:"To Do"},{value:"2",label:"In Progress"},{value:"3",label:"Completed"},{value:"4",label:"On Hold"},{value:"5",label:"Cancelled"},{value:"6",label:"Sent to Review"},{value:"7",label:"Request Changes"}],value:U,onChange:function(t){Q(t),e(Object(p.h)({sort:o,sortColumn:C,q:f,page:j,status:t.value,perPage:w,client:A.id,service:W.id}))}})]})]})})}),Object(N.jsx)(h.l,{className:"overflow-hidden",children:Object(N.jsx)("div",{className:"react-dataTable",children:Object(N.jsx)(q.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:E,onSort:function(t,a){u(a),k(t.sortField),e(Object(p.h)({sort:o,sortColumn:C,q:f,page:j,perPage:w,client:A.id,status:U.value,user:$.id,recurringFlag:!1,service:W.id}))},sortIcon:Object(N.jsx)(I.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Number(Math.ceil(t.total/w));return Object(N.jsx)(_.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==j?j-1:0,onPageChange:function(t){return function(t){e(Object(p.h)({sort:o,sortColumn:C,q:f,perPage:w,page:t.selected+1,client:A.id,status:U.value,service:W.id,recurringFlag:!1})),x(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={client:A.id,service:W.id,user:$.id,status:U.value,recurringFlag:!1,q:f},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),selectableRowsComponent:te,subHeaderComponent:Object(N.jsx)(M,{store:t,searchTerm:f,rowsPerPage:w,handleFilter:function(t){m(t),e(Object(p.h)({sort:o,q:t,sortColumn:C,page:j,perPage:w,client:A.id,status:U.value,service:W.id,recurringFlag:!1}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(p.h)({sort:o,sortColumn:C,q:f,perPage:a,page:j,client:A.id,service:W.id,user:$.id,recurringFlag:!1,status:U.value})),S(a)}})})})})]})};a(576),a(525),t.default=function(){return Object(N.jsx)("div",{className:"app-user-list",children:Object(N.jsx)(z,{})})}},512:function(e,t,a){},518:function(e,t,a){(function(n){var r;e.exports=(r=a(2),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var n=a(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,s,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,n){"use strict";n.r(a);var r=n(1),s=n.n(r),i=n(0),c=n.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,r=e.selected,i=e.activeClassName,c=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,b=e.ariaLabel||"Page "+n+(p?" "+p:""),f=null;return r&&(f="page",b=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==c&&(a=a+" "+c):a=c),s.a.createElement("li",{className:t},s.a.createElement("a",l({role:"button",className:a,href:d,tabIndex:"0","aria-label":b,"aria-current":f,onKeyPress:u},o(u)),n))};o.propTypes={pageSelectedHandler:c.a.func.isRequired,selected:c.a.bool.isRequired,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,extraAriaContext:c.a.string,href:c.a.string,ariaLabel:c.a.string,page:c.a.number.isRequired,getEventListener:c.a.func.isRequired};var u=o;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var p=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,c=a||"break";return s.a.createElement("li",{className:c},s.a.createElement("a",d({className:n,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};p.propTypes={breakLabel:c.a.oneOfType([c.a.string,c.a.node]),breakClassName:c.a.string,breakLinkClassName:c.a.string,breakHandler:c.a.func.isRequired,getEventListener:c.a.func.isRequired};var b=p;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=O(e);if(t){var r=O(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return j(this,a)}}function j(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,n,r=v(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(x(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(x(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),y(x(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(x(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(x(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),y(x(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(x(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,c=a.breakLabel,l=a.breakClassName,o=a.breakLinkClassName,u=t.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(t.getPageElement(d));else{var p,f,m,g=n/2,h=n-g;u>r-n/2?g=n-(h=r-u):u<n/2&&(h=n-(g=u));var v=function(e){return t.getPageElement(e)};for(p=0;p<r;p++)(f=p+1)<=i||f>r-i||p>=u-g&&p<=u+h?e.push(v(p)):c&&e[e.length-1]!==m&&(m=s.a.createElement(b,{key:p,breakLabel:c,breakClassName:l,breakLinkClassName:o,breakHandler:t.handleBreakClick.bind(null,p),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,c=a.activeLinkClassName,l=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:c,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,r=e.previousLabel,i=e.previousClassName,c=e.previousLinkClassName,l=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,d=e.nextClassName,p=e.nextLinkClassName,b=e.nextAriaLabel,f=e.nextRel,g=this.state.selected,h=i+(0===g?" ".concat(t):""),v=d+(g===a-1?" ".concat(t):""),j=0===g?"true":"false",x=g===a-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:h},s.a.createElement("a",m({className:c,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":l,rel:o},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:v},s.a.createElement("a",m({className:p,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":b,rel:f},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),n&&g(t,n),i}(r.Component);y(C,"propTypes",{pageCount:c.a.number.isRequired,pageRangeDisplayed:c.a.number.isRequired,marginPagesDisplayed:c.a.number.isRequired,previousLabel:c.a.node,previousAriaLabel:c.a.string,prevRel:c.a.string,nextLabel:c.a.node,nextAriaLabel:c.a.string,nextRel:c.a.string,breakLabel:c.a.oneOfType([c.a.string,c.a.node]),hrefBuilder:c.a.func,onPageChange:c.a.func,initialPage:c.a.number,forcePage:c.a.number,disableInitialCallback:c.a.bool,containerClassName:c.a.string,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,previousClassName:c.a.string,nextClassName:c.a.string,previousLinkClassName:c.a.string,nextLinkClassName:c.a.string,disabledClassName:c.a.string,breakClassName:c.a.string,breakLinkClassName:c.a.string,extraAriaContext:c.a.string,ariaLabelBuilder:c.a.func,eventListener:c.a.string}),y(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=C,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==a?a:t;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(21))},525:function(e,t,a){},576:function(e,t,a){"use strict";var n=a(31),r=a(6),s=a.n(r),i=a(91),c=a(13);t.a=function(e){var t=e.icon,a=e.color,r=e.stats,l=e.renderStats,o=e.statTitle,u=e.className,d=e.statsMargin;return Object(c.jsx)(i.l,{children:Object(c.jsx)(i.m,{className:u,children:Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsxs)("div",{children:[l||Object(c.jsx)("h2",{className:s()("fw-bolder",Object(n.a)({"mb-0":!d},d,d)),children:r}),Object(c.jsx)("p",{className:"card-text",children:o})]}),Object(c.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(a?"bg-light-".concat(a):"bg-light-primary"),children:Object(c.jsx)("div",{className:"avatar-content",children:t})})]})})})}}}]);
//# sourceMappingURL=80.3a6b5127.chunk.js.map