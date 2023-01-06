(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[86],{1656:function(e,t,a){"use strict";a.r(t);var r,n=a(1),s=a(18),i=a(17),l=a(31),c=a(132),o=a(505),u=a(140),d=a(157),m=a(835),p=a(884),b=a(891),f=a(827),j=a(953),g=a(895),h=a(91),x=a(12),v=function(e){return e.avatar.length?Object(x.jsx)(o.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(x.jsx)(o.a,{initials:!0,className:"me-1",content:e.fullName||"John Doe",color:e.avatarColor||"light-primary"})},O={pending:"light-warning",active:"light-success",inactive:"light-secondary"},y=[{name:"Name",sortable:!0,minWidth:"297px",sortField:"fullName",selector:function(e){return e.fullName},cell:function(e){return Object(x.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[v(e),Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)(c.b,{to:"/apps/user/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return u.a.dispatch(Object(d.d)(e.id))},children:Object(x.jsx)("span",{className:"fw-bold",children:e.fullName})}),Object(x.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.role},cell:function(e){return function(e){var t={subscriber:{class:"text-primary",icon:m.a},maintainer:{class:"text-success",icon:p.a},editor:{class:"text-info",icon:b.a},author:{class:"text-warning",icon:f.a},admin:{class:"text-danger",icon:j.a}},a=t[e.role]?t[e.role].icon:b.a;return Object(x.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(x.jsx)(a,{size:18,className:"".concat(t[e.role]?t[e.role].class:""," me-50")}),e.role]})}(e)}},{name:"Plan",sortable:!0,minWidth:"138px",sortField:"currentPlan",selector:function(e){return e.currentPlan},cell:function(e){return Object(x.jsx)("span",{className:"text-capitalize",children:e.currentPlan})}},(r={name:"Billing",sortable:!0,minWidth:"230px",sortField:"billing",selector:function(e){return e.billing}},Object(l.a)(r,"sortField","billing"),Object(l.a)(r,"selector",(function(e){return e.billing})),Object(l.a)(r,"cell",(function(e){return Object(x.jsx)("span",{className:"text-capitalize",children:e.billing})})),r),{name:"Status",sortable:!0,minWidth:"138px",sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(x.jsx)(h.f,{className:"text-capitalize",color:O[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(x.jsx)(c.b,{to:"/apps/user/view/".concat(e.id),children:Object(x.jsx)(g.a,{className:"font-medium-3 text-body"})})}}],N=a(133),C=a(514),P=a.n(C),k=a(865),w=a(517),L=a.n(w),R=(a(510),Object(n.forwardRef)((function(e,t){return Object(x.jsx)("div",{className:"form-check",children:Object(x.jsx)(h.L,Object(i.a)({type:"checkbox",ref:t},e))})}))),S=function(e){var t=e.plan,a=e.handlePlanChange,r=e.handlePerPage,n=e.rowsPerPage,s=e.handleFilter,i=e.searchTerm;return Object(x.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(x.jsxs)(h.jb,{children:[Object(x.jsx)(h.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(x.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(x.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(x.jsxs)(h.L,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:r,style:{width:"5rem"},children:[Object(x.jsx)("option",{value:"10",children:"10"}),Object(x.jsx)("option",{value:"25",children:"25"}),Object(x.jsx)("option",{value:"50",children:"50"})]}),Object(x.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(x.jsxs)(h.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pe-lg-1 p-0 mt-lg-0 mt-1",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(x.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(x.jsx)(h.L,{type:"text",value:i,id:"search-invoice",className:"ms-50 w-100",onChange:function(e){return s(e.target.value)}})]}),Object(x.jsxs)(h.L,{value:t,type:"select",style:{width:"10rem"},onChange:function(e){return a(e.target.value)},children:[Object(x.jsx)("option",{value:"",children:"Select Role"}),Object(x.jsx)("option",{value:"basic",children:"Basic"}),Object(x.jsx)("option",{value:"company",children:"Company"}),Object(x.jsx)("option",{value:"enterprise",children:"Enterprise"}),Object(x.jsx)("option",{value:"team",children:"Team"})]})]})]})})},E=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.users})),a=Object(n.useState)(""),r=Object(s.a)(a,2),i=r[0],l=r[1],c=Object(n.useState)("desc"),o=Object(s.a)(c,2),u=o[0],m=o[1],p=Object(n.useState)(""),b=Object(s.a)(p,2),f=b[0],j=b[1],g=Object(n.useState)(1),v=Object(s.a)(g,2),O=v[0],C=v[1],w=Object(n.useState)(10),E=Object(s.a)(w,2),D=E[0],z=E[1],A=Object(n.useState)("id"),B=Object(s.a)(A,2),T=B[0],_=B[1];Object(n.useEffect)((function(){e(Object(d.b)()),e(Object(d.c)({sort:u,role:"",sortColumn:T,status:"",q:f,currentPlan:i,page:O,perPage:D}))}),[e,t.data.length]);return Object(x.jsx)(h.l,{children:Object(x.jsx)("div",{className:"react-dataTable roles-table",children:Object(x.jsx)(L.a,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:y,onSort:function(t,a){m(a),_(t.sortField),e(Object(d.c)({sort:u,role:"",sortColumn:T,status:"",q:f,currentPlan:i,page:O,perPage:D}))},data:function(){var e={q:f},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,D)}(),sortIcon:Object(x.jsx)(k.a,{}),className:"react-dataTable",paginationComponent:function(){var a=Number(Math.ceil(t.total/D));return Object(x.jsx)(P.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==O?O-1:0,onPageChange:function(t){return function(t){e(Object(d.c)({sort:u,role:"",status:"",sortColumn:T,q:f,currentPlan:i,perPage:D,page:t.selected+1})),C(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRowsComponent:R,subHeaderComponent:Object(x.jsx)(S,{plan:i,searchTerm:f,rowsPerPage:D,handleFilter:function(t){j(t),e(Object(d.c)({q:t,sort:u,role:"",sortColumn:T,status:"",currentPlan:i,page:O,perPage:D}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(d.c)({sort:u,role:"",sortColumn:T,status:"",q:f,perPage:a,currentPlan:i,page:O})),z(a)},handlePlanChange:function(t){l(t),e(Object(d.c)({sort:u,role:t,sortColumn:T,status:"",q:f,currentPlan:i,page:O,perPage:D}))}})})})})},D=a(879),z=a(913),A=a(506),B=a(541),T=a(682),_=[{totalUsers:4,title:"Administrator",users:[{size:"sm",title:"Vinnie Mostowy",img:a(47).default},{size:"sm",title:"Allen Rieske",img:a(271).default},{size:"sm",title:"Julee Rossignol",img:a(71).default},{size:"sm",title:"Kaith Dsouza",img:a(96).default}]},{totalUsers:7,title:"Manager",users:[{size:"sm",title:"Jimmy Ressula",img:a(102).default},{size:"sm",title:"John Doe",img:a(39).default},{size:"sm",title:"Kristi Lawker",img:a(47).default},{size:"sm",title:"Kaith D",img:a(101).default},{size:"sm",title:"Danny Paul",img:a(76).default}]},{totalUsers:5,title:"Users",users:[{size:"sm",title:"Andrew Tye",img:a(71).default},{size:"sm",title:"Rishi Swaat",img:a(33).default},{size:"sm",title:"Rossie Kim",img:a(47).default},{size:"sm",title:"Kim Merchent",img:a(95).default},{size:"sm",title:"Sam Dsouza",img:a(97).default}]},{totalUsers:3,title:"Support",users:[{size:"sm",title:"Kim Karlos",img:a(73).default},{size:"sm",title:"Katy Turner",img:a(33).default},{size:"sm",title:"Peter Adward",img:a(271).default},{size:"sm",title:"Kaith Dsouza",img:a(95).default},{size:"sm",title:"John Parker",img:a(96).default}]},{totalUsers:2,title:"Restricted User",users:[{size:"sm",title:"Kim Merchent",img:a(95).default},{size:"sm",title:"Sam Dsouza",img:a(71).default},{size:"sm",title:"Nurvi Karlos",img:a(73).default},{size:"sm",title:"Andrew Tye",img:a(97).default},{size:"sm",title:"Rossie Kim",img:a(33).default}]}],F=["User Management","Content Management","Disputes Management","Database Management","Financial Management","Reporting","API Control","Repository Management","Payroll"],q=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("Add New"),o=Object(s.a)(l,2),u=o[0],d=o[1],m=Object(A.f)({defaultValues:{roleName:""}}),p=m.reset,b=m.control,f=m.setError,j=m.setValue,g=m.handleSubmit,v=m.formState.errors;return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsxs)(h.jb,{children:[_.map((function(e,t){return Object(x.jsx)(h.B,{xl:4,md:6,children:Object(x.jsx)(h.l,{children:Object(x.jsxs)(h.m,{children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("span",{children:"Total ".concat(e.totalUsers," users")}),Object(x.jsx)(B.a,{data:e.users})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between align-items-end mt-1 pt-25",children:[Object(x.jsxs)("div",{className:"role-heading",children:[Object(x.jsx)("h4",{className:"fw-bolder",children:e.title}),Object(x.jsx)(c.b,{to:"/",className:"role-edit-modal",onClick:function(e){e.preventDefault(),d("Edit"),r(!0)},children:Object(x.jsx)("small",{className:"fw-bolder",children:"Edit Role"})})]}),Object(x.jsx)(c.b,{to:"",className:"text-body",onClick:function(e){return e.preventDefault()},children:Object(x.jsx)(D.a,{className:"font-medium-5"})})]})]})})},t)})),Object(x.jsx)(h.B,{xl:4,md:6,children:Object(x.jsx)(h.l,{children:Object(x.jsxs)(h.jb,{children:[Object(x.jsx)(h.B,{sm:5,children:Object(x.jsx)("div",{className:"d-flex align-items-end justify-content-center h-100",children:Object(x.jsx)("img",{className:"img-fluid mt-2",src:T.a,alt:"Image",width:85})})}),Object(x.jsx)(h.B,{sm:7,children:Object(x.jsxs)(h.m,{className:"text-sm-end text-center ps-sm-0",children:[Object(x.jsx)(h.i,{color:"primary",className:"text-nowrap mb-1",onClick:function(){d("Add New"),r(!0)},children:"Add New Role"}),Object(x.jsx)("p",{className:"mb-0",children:"Add a new role, if it does not exist"})]})})]})})})]}),Object(x.jsxs)(h.R,{isOpen:a,onClosed:function(){d("Add New"),j("roleName")},toggle:function(){return r(!a)},className:"modal-dialog-centered modal-lg",children:[Object(x.jsx)(h.U,{className:"bg-transparent",toggle:function(){return r(!a)}}),Object(x.jsxs)(h.S,{className:"px-5 pb-5",children:[Object(x.jsxs)("div",{className:"text-center mb-4",children:[Object(x.jsxs)("h1",{children:[u," Role"]}),Object(x.jsx)("p",{children:"Set role permissions"})]}),Object(x.jsxs)(h.jb,{tag:"form",onSubmit:g((function(e){e.roleName.length?r(!1):f("roleName",{type:"manual"})})),children:[Object(x.jsxs)(h.B,{xs:12,children:[Object(x.jsx)(h.O,{className:"form-label",for:"roleName",children:"Role Name"}),Object(x.jsx)(A.a,{name:"roleName",control:b,render:function(e){var t=e.field;return Object(x.jsx)(h.L,Object(i.a)(Object(i.a)({},t),{},{id:"roleName",placeholder:"Enter role name",invalid:v.roleName&&!0}))}}),v.roleName&&Object(x.jsx)(h.I,{children:"Please enter a valid role name"})]}),Object(x.jsxs)(h.B,{xs:12,children:[Object(x.jsx)("h4",{className:"mt-2 pt-50",children:"Role Permissions"}),Object(x.jsx)(h.nb,{className:"table-flush-spacing",responsive:!0,children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{className:"text-nowrap fw-bolder",children:[Object(x.jsx)("span",{className:"me-50",children:" Administrator Access"}),Object(x.jsx)(z.a,{size:14,id:"info-tooltip"}),Object(x.jsx)(h.zb,{placement:"top",target:"info-tooltip",children:"Allows a full access to the system"})]}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{className:"form-check",children:[Object(x.jsx)(h.L,{type:"checkbox",id:"select-all"}),Object(x.jsx)(h.O,{className:"form-check-label",for:"select-all",children:"Select All"})]})})]}),F.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"text-nowrap fw-bolder",children:e}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(x.jsx)(h.L,{type:"checkbox",id:"read-".concat(e)}),Object(x.jsx)(h.O,{className:"form-check-label",for:"read-".concat(e),children:"Read"})]}),Object(x.jsxs)("div",{className:"form-check me-3 me-lg-5",children:[Object(x.jsx)(h.L,{type:"checkbox",id:"write-".concat(e)}),Object(x.jsx)(h.O,{className:"form-check-label",for:"write-".concat(e),children:"Write"})]}),Object(x.jsxs)("div",{className:"form-check",children:[Object(x.jsx)(h.L,{type:"checkbox",id:"create-".concat(e)}),Object(x.jsx)(h.O,{className:"form-check-label",for:"create-".concat(e),children:"Create"})]})]})})]},t)}))]})})]}),Object(x.jsxs)(h.B,{className:"text-center mt-2",xs:12,children:[Object(x.jsx)(h.i,{type:"submit",color:"primary",className:"me-1",children:"Submit"}),Object(x.jsx)(h.i,{type:"reset",outline:!0,onClick:function(){r(!1),p({roleName:""})},children:"Discard"})]})]})]})]})]})};t.default=function(){return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)("h3",{children:"Roles List"}),Object(x.jsx)("p",{className:"mb-2",children:"A role provides access to predefined menus and features depending on the assigned role to an administrator that can have access to what he needs."}),Object(x.jsx)(q,{}),Object(x.jsx)("h3",{className:"mt-50",children:"Total users with their roles"}),Object(x.jsx)("p",{className:"mb-2",children:"Find all of your company\u2019s administrator accounts and their associate roles."}),Object(x.jsx)("div",{className:"app-user-list",children:Object(x.jsx)(E,{})})]})}},510:function(e,t,a){},514:function(e,t,a){(function(r){var n;e.exports=(n=a(1),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var r=a(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,r){"use strict";r.r(a);var n=r(1),s=r.n(n),i=r(0),l=r.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,i=e.activeClassName,l=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,d=e.href,m=e.extraAriaContext,p=e.ariaLabel||"Page "+r+(m?" "+m:""),b=null;return n&&(b="page",p=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==l&&(a=a+" "+l):a=l),s.a.createElement("li",{className:t},s.a.createElement("a",c({role:"button",className:a,href:d,tabIndex:"0","aria-label":p,"aria-current":b,onKeyPress:u},o(u)),r))};o.propTypes={pageSelectedHandler:l.a.func.isRequired,selected:l.a.bool.isRequired,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,extraAriaContext:l.a.string,href:l.a.string,ariaLabel:l.a.string,page:l.a.number.isRequired,getEventListener:l.a.func.isRequired};var u=o;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var m=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,l=a||"break";return s.a.createElement("li",{className:l},s.a.createElement("a",d({className:r,role:"button",tabIndex:"0",onKeyPress:n},i(n)),t))};m.propTypes={breakLabel:l.a.oneOfType([l.a.string,l.a.node]),breakClassName:l.a.string,breakLinkClassName:l.a.string,breakHandler:l.a.func.isRequired,getEventListener:l.a.func.isRequired};var p=m;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function j(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=O(e);if(t){var n=O(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return x(this,a)}}function x(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,a,r,n=h(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(v(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(v(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),y(v(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),y(v(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(v(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),y(v(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(v(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,i=a.marginPagesDisplayed,l=a.breakLabel,c=a.breakClassName,o=a.breakLinkClassName,u=t.state.selected;if(n<=r)for(var d=0;d<n;d++)e.push(t.getPageElement(d));else{var m,b,f,j=r/2,g=r-j;u>n-r/2?j=r-(g=n-u):u<r/2&&(g=r-(j=u));var h=function(e){return t.getPageElement(e)};for(m=0;m<n;m++)(b=m+1)<=i||b>n-i||m>=u-j&&m<=u+g?e.push(h(m)):l&&e[e.length-1]!==f&&(f=s.a.createElement(p,{key:m,breakLabel:l,breakClassName:c,breakLinkClassName:o,breakHandler:t.handleBreakClick.bind(null,m),getEventListener:t.getEventListener}),e.push(f))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,i=a.activeClassName,l=a.activeLinkClassName,c=a.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:n,activeClassName:i,activeLinkClassName:l,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,n=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,c=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,d=e.nextClassName,m=e.nextLinkClassName,p=e.nextAriaLabel,b=e.nextRel,j=this.state.selected,g=i+(0===j?" ".concat(t):""),h=d+(j===a-1?" ".concat(t):""),x=0===j?"true":"false",v=j===a-1?"true":"false";return s.a.createElement("ul",{className:r},s.a.createElement("li",{className:g},s.a.createElement("a",f({className:l,href:this.hrefBuilder(j-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":x,"aria-label":c,rel:o},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),s.a.createElement("li",{className:h},s.a.createElement("a",f({className:m,href:this.hrefBuilder(j+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":v,"aria-label":p,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&j(t.prototype,a),r&&j(t,r),i}(n.Component);y(N,"propTypes",{pageCount:l.a.number.isRequired,pageRangeDisplayed:l.a.number.isRequired,marginPagesDisplayed:l.a.number.isRequired,previousLabel:l.a.node,previousAriaLabel:l.a.string,prevRel:l.a.string,nextLabel:l.a.node,nextAriaLabel:l.a.string,nextRel:l.a.string,breakLabel:l.a.oneOfType([l.a.string,l.a.node]),hrefBuilder:l.a.func,onPageChange:l.a.func,initialPage:l.a.number,forcePage:l.a.number,disableInitialCallback:l.a.bool,containerClassName:l.a.string,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,previousClassName:l.a.string,nextClassName:l.a.string,previousLinkClassName:l.a.string,nextLinkClassName:l.a.string,disabledClassName:l.a.string,breakClassName:l.a.string,breakLinkClassName:l.a.string,extraAriaContext:l.a.string,ariaLabelBuilder:l.a.func,eventListener:l.a.string}),y(N,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=N,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var s=void 0;try{s=r[n]}catch(e){continue}e.register(s,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(21))},541:function(e,t,a){"use strict";var r=a(17),n=a(31),s=a(1),i=a(6),l=a.n(i),c=a(91),o=a(505),u=a(12);t.a=function(e){var t=e.data,a=e.tag,i=e.className,d=a||"div";return Object(u.jsx)(d,{className:l()("avatar-group",Object(n.a)({},i,i)),children:t.map((function(e,t){var a=e.tag?e.tag:"div";return Object(u.jsxs)(s.Fragment,{children:[e.title?Object(u.jsx)(c.zb,{placement:e.placement,target:e.title.split(" ").join("-"),children:e.title}):null,e.meta?null:Object(u.jsx)(o.a,Object(r.a)(Object(r.a)(Object(r.a)({tag:a,className:l()("pull-up",Object(n.a)({},e.className,e.className))},e.title?{id:e.title.split(" ").join("-")}:{}),e),{},{title:void 0,meta:void 0})),e.meta?Object(u.jsx)(a,{className:"d-flex align-items-center ps-1",children:e.meta}):null]},t)}))})}},682:function(e,t,a){"use strict";t.a=a.p+"static/media/faq-illustrations.3abcf165.svg"}}]);
//# sourceMappingURL=86.271385d6.chunk.js.map