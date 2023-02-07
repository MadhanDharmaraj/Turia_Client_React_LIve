(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[58],{1637:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(1),s=t(132),l=t(17),c=t(616),i=t(513),o=t(509),u=t(6),d=t.n(u),p=t(507),b=t(91),m=t(685),f=t(133),j=t(13),h={email:"",contact:"",company:"",fullName:"",username:"",country:null},v=[{label:"Australia",value:"Australia"},{label:"Bangladesh",value:"Bangladesh"},{label:"Belarus",value:"Belarus"},{label:"Brazil",value:"Brazil"},{label:"Canada",value:"Canada"},{label:"China",value:"China"},{label:"France",value:"France"},{label:"Germany",value:"Germany"},{label:"India",value:"India"},{label:"Indonesia",value:"Indonesia"},{label:"Israel",value:"Israel"},{label:"Italy",value:"Italy"},{label:"Japan",value:"Japan"},{label:"Korea",value:"Korea"},{label:"Mexico",value:"Mexico"},{label:"Philippines",value:"Philippines"},{label:"Russia",value:"Russia"},{label:"South",value:"South"},{label:"Thailand",value:"Thailand"},{label:"Turkey",value:"Turkey"},{label:"Ukraine",value:"Ukraine"},{label:"United Arab Emirates",value:"United Arab Emirates"},{label:"United Kingdom",value:"United Kingdom"},{label:"United States",value:"United States"}],g=function(e){var a=e.open,t=e.toggleSidebar,s=Object(r.useState)(null),u=Object(n.a)(s,2),g=u[0],x=u[1],O=Object(r.useState)("basic"),N=Object(n.a)(O,2),y=N[0],C=N[1],P=Object(r.useState)("subscriber"),k=Object(n.a)(P,2),w=k[0],L=k[1],S=Object(f.b)(),E=Object(p.f)({defaultValues:h}),R=E.control,D=E.setValue,B=E.setError,T=E.handleSubmit,_=E.formState.errors;return Object(j.jsx)(c.a,{size:"lg",open:a,title:"New User",headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:t,onClosed:function(){for(var e in h)D(e,"");L("subscriber"),C("basic")},children:Object(j.jsxs)(b.H,{onSubmit:T((function(e){if(x(e),function(e){return Object.values(e).every((function(e){return"object"===typeof e?null!==e:e.length>0}))}(e))t(),S(Object(m.a)({role:w,avatar:"",status:"active",email:e.email,currentPlan:y,billing:"auto debit",company:e.company,contact:e.contact,fullName:e.fullName,username:e.username,country:e.country.value}));else for(var a in e)null===e[a]&&B("country",{type:"manual"}),null!==e[a]&&0===e[a].length&&B(a,{type:"manual"})})),children:[Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.O,{className:"form-label",for:"fullName",children:["Full Name ",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(p.a,{name:"fullName",control:R,render:function(e){var a=e.field;return Object(j.jsx)(b.L,Object(l.a)({id:"fullName",placeholder:"John Doe",invalid:_.fullName&&!0},a))}})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.O,{className:"form-label",for:"username",children:["Username ",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(p.a,{name:"username",control:R,render:function(e){var a=e.field;return Object(j.jsx)(b.L,Object(l.a)({id:"username",placeholder:"johnDoe99",invalid:_.username&&!0},a))}})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.O,{className:"form-label",for:"userEmail",children:["Email ",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(p.a,{name:"email",control:R,render:function(e){var a=e.field;return Object(j.jsx)(b.L,Object(l.a)({type:"email",id:"userEmail",placeholder:"john.doe@example.com",invalid:_.email&&!0},a))}}),Object(j.jsx)(b.K,{color:"muted",children:"You can use letters, numbers & periods"})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.O,{className:"form-label",for:"contact",children:["Contact ",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(p.a,{name:"contact",control:R,render:function(e){var a=e.field;return Object(j.jsx)(b.L,Object(l.a)({id:"contact",placeholder:"(397) 294-5153",invalid:_.contact&&!0},a))}})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.O,{className:"form-label",for:"company",children:["Company ",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(p.a,{name:"company",control:R,render:function(e){var a=e.field;return Object(j.jsx)(b.L,Object(l.a)({id:"company",placeholder:"Company Pvt Ltd",invalid:_.company&&!0},a))}})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsxs)(b.O,{className:"form-label",for:"country",children:["Country ",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)(p.a,{name:"country",control:R,render:function(e){var a=e.field;return Object(j.jsx)(o.a,Object(l.a)({isClearable:!1,classNamePrefix:"select",options:v,theme:i.i,className:d()("react-select",{"is-invalid":null!==g&&null===g.country})},a))}})]}),Object(j.jsxs)("div",{className:"mb-1",children:[Object(j.jsx)(b.O,{className:"form-label",for:"user-role",children:"User Role"}),Object(j.jsxs)(b.L,{type:"select",id:"user-role",name:"user-role",value:w,onChange:function(e){return L(e.target.value)},children:[Object(j.jsx)("option",{value:"subscriber",children:"Subscriber"}),Object(j.jsx)("option",{value:"editor",children:"Editor"}),Object(j.jsx)("option",{value:"maintainer",children:"Maintainer"}),Object(j.jsx)("option",{value:"author",children:"Author"}),Object(j.jsx)("option",{value:"admin",children:"Admin"})]})]}),Object(j.jsxs)("div",{className:"mb-1",value:y,onChange:function(e){return C(e.target.value)},children:[Object(j.jsx)(b.O,{className:"form-label",for:"select-plan",children:"Select Plan"}),Object(j.jsxs)(b.L,{type:"select",id:"select-plan",name:"select-plan",children:[Object(j.jsx)("option",{value:"basic",children:"Basic"}),Object(j.jsx)("option",{value:"enterprise",children:"Enterprise"}),Object(j.jsx)("option",{value:"company",children:"Company"}),Object(j.jsx)("option",{value:"team",children:"Team"})]})]}),Object(j.jsx)(b.i,{type:"submit",className:"me-1",color:"primary",children:"Submit"}),Object(j.jsx)(b.i,{type:"reset",color:"secondary",outline:!0,onClick:t,children:"Cancel"})]})})},x=t(506),O=t(139),N=t(824),y=t(872),C=t(879),P=t(816),k=t(941),w=t(919),L=t(888),S=t(836),E=t(952),R=function(e){return e.avatar.length?Object(j.jsx)(x.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(j.jsx)(x.a,{initials:!0,className:"me-1",color:e.avatarColor||"light-primary",content:e.fullName||"John Doe"})},D={pending:"light-warning",active:"light-success",inactive:"light-secondary"},B=[{name:"User",sortable:!0,minWidth:"300px",sortField:"fullName",selector:function(e){return e.fullName},cell:function(e){return Object(j.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[R(e),Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)(s.b,{to:"/compliance/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return O.a.dispatch(Object(m.e)(e.id))},children:Object(j.jsx)("span",{className:"fw-bolder",children:e.fullName})}),Object(j.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.role},cell:function(e){return function(e){var a={subscriber:{class:"text-primary",icon:N.a},maintainer:{class:"text-success",icon:y.a},editor:{class:"text-info",icon:C.a},author:{class:"text-warning",icon:P.a},admin:{class:"text-danger",icon:k.a}},t=a[e.role]?a[e.role].icon:C.a;return Object(j.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(j.jsx)(t,{size:18,className:"".concat(a[e.role]?a[e.role].class:""," me-50")}),e.role]})}(e)}},{name:"Plan",minWidth:"138px",sortable:!0,sortField:"currentPlan",selector:function(e){return e.currentPlan},cell:function(e){return Object(j.jsx)("span",{className:"text-capitalize",children:e.currentPlan})}},{name:"Billing",minWidth:"230px",sortable:!0,sortField:"billing",selector:function(e){return e.billing},cell:function(e){return Object(j.jsx)("span",{className:"text-capitalize",children:e.billing})}},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(j.jsx)(b.f,{className:"text-capitalize",color:D[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(j.jsx)("div",{className:"column-action",children:Object(j.jsxs)(b.xb,{children:[Object(j.jsx)(b.G,{tag:"div",className:"btn btn-sm",children:Object(j.jsx)(w.a,{size:14,className:"cursor-pointer"})}),Object(j.jsxs)(b.F,{children:[Object(j.jsxs)(b.E,{tag:s.b,className:"w-100",to:"/compliance/view/".concat(e.id),onClick:function(){return O.a.dispatch(Object(m.e)(e.id))},children:[Object(j.jsx)(L.a,{size:14,className:"me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"Details"})]}),Object(j.jsxs)(b.E,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(j.jsx)(S.a,{size:14,className:"me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(j.jsxs)(b.E,{tag:"a",href:"/",className:"w-100",onClick:function(a){a.preventDefault(),O.a.dispatch(Object(m.b)(e.id))},children:[Object(j.jsx)(E.a,{size:14,className:"me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})}}],T=t(518),_=t.n(T),A=t(524),U=t.n(A),I=t(937),F=t(930),H=t(895),q=t(889),z=t(867),V=t(853),G=(t(510),t(511),function(e){var a=e.store,t=e.handlePerPage,n=e.rowsPerPage,r=e.handleFilter,l=e.searchTerm;function c(e){var t=document.createElement("a"),n=function(e){var t,n=Object.keys(a.data[0]);return t="",t+=n.join(","),t+="\n",e.forEach((function(e){var a=0;n.forEach((function(n){a>0&&(t+=","),t+=e[n],a++})),t+="\n"})),t}(e);if(null!==n){n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),t.setAttribute("href",encodeURI(n)),t.setAttribute("download","export.csv"),t.click()}}return Object(j.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(j.jsxs)(b.jb,{children:[Object(j.jsx)(b.B,{xl:"6",className:"d-flex align-items-center p-0",children:Object(j.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(j.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(j.jsxs)(b.L,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:t,style:{width:"5rem"},children:[Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"25",children:"25"}),Object(j.jsx)("option",{value:"50",children:"50"})]}),Object(j.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(j.jsxs)(b.B,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(j.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(j.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(j.jsx)(b.L,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:l,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(j.jsxs)(b.xb,{className:"me-1",children:[Object(j.jsxs)(b.G,{color:"secondary",caret:!0,outline:!0,children:[Object(j.jsx)(I.a,{className:"font-small-4 me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"Export"})]}),Object(j.jsxs)(b.F,{children:[Object(j.jsxs)(b.E,{className:"w-100",children:[Object(j.jsx)(F.a,{className:"font-small-4 me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"Print"})]}),Object(j.jsxs)(b.E,{className:"w-100",onClick:function(){return c(a.data)},children:[Object(j.jsx)(L.a,{className:"font-small-4 me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"CSV"})]}),Object(j.jsxs)(b.E,{className:"w-100",children:[Object(j.jsx)(H.a,{className:"font-small-4 me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(j.jsxs)(b.E,{className:"w-100",children:[Object(j.jsx)(q.a,{className:"font-small-4 me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(j.jsxs)(b.E,{className:"w-100",children:[Object(j.jsx)(z.a,{className:"font-small-4 me-50"}),Object(j.jsx)("span",{className:"align-middle",children:"Copy"})]})]})]}),Object(j.jsx)(b.i,{color:"primary",tag:s.b,to:"/compliance/add",children:"Add Compliance"})]})]})]})})}),J=function(){var e=Object(f.b)(),a=Object(f.c)((function(e){return e.users})),t=Object(r.useState)("desc"),s=Object(n.a)(t,2),l=s[0],c=s[1],i=Object(r.useState)(""),o=Object(n.a)(i,2),u=o[0],d=o[1],p=Object(r.useState)(1),h=Object(n.a)(p,2),v=h[0],x=h[1],O=Object(r.useState)("id"),N=Object(n.a)(O,2),y=N[0],C=N[1],P=Object(r.useState)(10),k=Object(n.a)(P,2),w=k[0],L=k[1],S=Object(r.useState)(!1),E=Object(n.a)(S,2),R=E[0],D=E[1],T=Object(r.useState)({value:"",label:"Select Role"}),A=Object(n.a)(T,1)[0],I=Object(r.useState)({value:"",label:"Select Plan"}),F=Object(n.a)(I,1)[0],H=Object(r.useState)({value:"",label:"Select Status",number:0}),q=Object(n.a)(H,1)[0],z=function(){return D(!R)};console.log(z),Object(r.useEffect)((function(){e(Object(m.c)()),e(Object(m.d)({sort:l,sortColumn:y,q:u,page:v,perPage:w,role:A.value,status:q.value,currentPlan:F.value}))}),[e,a.data.length,l,y,v]);return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(b.l,{className:"overflow-hidden",children:Object(j.jsx)("div",{className:"react-dataTable",children:Object(j.jsx)(U.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:B,onSort:function(a,t){c(t),C(a.sortField),e(Object(m.d)({sort:l,sortColumn:y,q:u,page:v,perPage:w,role:A.value,status:q.value,currentPlan:F.value}))},sortIcon:Object(j.jsx)(V.a,{}),className:"react-dataTable",paginationComponent:function(){var t=Number(Math.ceil(a.total/w));return Object(j.jsx)(_.a,{previousLabel:"",nextLabel:"",pageCount:t||1,activeClassName:"active",forcePage:0!==v?v-1:0,onPageChange:function(a){return function(a){e(Object(m.d)({sort:l,sortColumn:y,q:u,perPage:w,page:a.selected+1,role:A.value,status:q.value,currentPlan:F.value})),x(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={role:A.value,currentPlan:F.value,status:q.value,q:u},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,w)}(),subHeaderComponent:Object(j.jsx)(G,{store:a,searchTerm:u,rowsPerPage:w,handleFilter:function(a){d(a),e(Object(m.d)({sort:l,q:a,sortColumn:y,page:v,perPage:w,role:A.value,status:q.value,currentPlan:F.value}))},handlePerPage:function(a){var t=parseInt(a.currentTarget.value);e(Object(m.d)({sort:l,sortColumn:y,q:u,perPage:t,page:v,role:A.value,currentPlan:F.value,status:q.value})),L(t)},toggleSidebar:z})})})}),Object(j.jsx)(g,{open:R,toggleSidebar:z})]})};t(567),t(525),a.default=function(){return Object(j.jsx)("div",{className:"app-user-list",children:Object(j.jsx)(J,{})})}},511:function(e,a,t){},518:function(e,a,t){(function(n){var r;e.exports=(r=t(1),function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=r},function(e,a,t){"use strict";var n=t(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,a,t,r,s,l){if(l!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:r};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),l=n(0),c=n.n(l);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.page,r=e.selected,l=e.activeClassName,c=e.activeLinkClassName,o=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,b=e.ariaLabel||"Page "+n+(p?" "+p:""),m=null;return r&&(m="page",b=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+l:l,void 0!==t?void 0!==c&&(t=t+" "+c):t=c),s.a.createElement("li",{className:a},s.a.createElement("a",i({role:"button",className:t,href:d,tabIndex:"0","aria-label":b,"aria-current":m,onKeyPress:u},o(u)),n))};o.propTypes={pageSelectedHandler:c.a.func.isRequired,selected:c.a.bool.isRequired,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,extraAriaContext:c.a.string,href:c.a.string,ariaLabel:c.a.string,page:c.a.number.isRequired,getEventListener:c.a.func.isRequired};var u=o;function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var p=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,l=e.getEventListener,c=t||"break";return s.a.createElement("li",{className:c},s.a.createElement("a",d({className:n,role:"button",tabIndex:"0",onKeyPress:r},l(r)),a))};p.propTypes={breakLabel:c.a.oneOfType([c.a.string,c.a.node]),breakClassName:c.a.string,breakLinkClassName:c.a.string,breakHandler:c.a.func.isRequired,getEventListener:c.a.func.isRequired};var b=p;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function j(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,a){return(h=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function v(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=O(e);if(a){var r=O(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return g(this,t)}}function g(e,a){return!a||"object"!==m(a)&&"function"!=typeof a?x(e):a}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var y=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&h(e,a)}(l,e);var a,t,n,r=v(l);function l(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,l),N(x(a=r.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),N(x(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)})),N(x(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),N(x(a),"getEventListener",(function(e){return N({},a.props.eventListener,e)})),N(x(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var n=a.state.selected;a.handlePageSelected(n<e?a.getForwardJump():a.getBackwardJump(),t)})),N(x(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),N(x(a),"pagination",(function(){var e=[],t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,l=t.marginPagesDisplayed,c=t.breakLabel,i=t.breakClassName,o=t.breakLinkClassName,u=a.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(a.getPageElement(d));else{var p,m,f,j=n/2,h=n-j;u>r-n/2?j=n-(h=r-u):u<n/2&&(h=n-(j=u));var v=function(e){return a.getPageElement(e)};for(p=0;p<r;p++)(m=p+1)<=l||m>r-l||p>=u-j&&p<=u+h?e.push(v(p)):c&&e[e.length-1]!==f&&(f=s.a.createElement(b,{key:p,breakLabel:c,breakClassName:i,breakLinkClassName:o,breakHandler:a.handleBreakClick.bind(null,p),getEventListener:a.getEventListener}),e.push(f))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=l,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,r=t.pageLinkClassName,l=t.activeClassName,c=t.activeLinkClassName,i=t.extraAriaContext;return s.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:r,activeClassName:l,activeLinkClassName:c,extraAriaContext:i,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,n=e.containerClassName,r=e.previousLabel,l=e.previousClassName,c=e.previousLinkClassName,i=e.previousAriaLabel,o=e.prevRel,u=e.nextLabel,d=e.nextClassName,p=e.nextLinkClassName,b=e.nextAriaLabel,m=e.nextRel,j=this.state.selected,h=l+(0===j?" ".concat(a):""),v=d+(j===t-1?" ".concat(a):""),g=0===j?"true":"false",x=j===t-1?"true":"false";return s.a.createElement("ul",{className:n},s.a.createElement("li",{className:h},s.a.createElement("a",f({className:c,href:this.hrefBuilder(j-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":g,"aria-label":i,rel:o},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),s.a.createElement("li",{className:v},s.a.createElement("a",f({className:p,href:this.hrefBuilder(j+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":b,rel:m},this.getEventListener(this.handleNextPage)),u)))}}])&&j(a.prototype,t),n&&j(a,n),l}(r.Component);N(y,"propTypes",{pageCount:c.a.number.isRequired,pageRangeDisplayed:c.a.number.isRequired,marginPagesDisplayed:c.a.number.isRequired,previousLabel:c.a.node,previousAriaLabel:c.a.string,prevRel:c.a.string,nextLabel:c.a.node,nextAriaLabel:c.a.string,nextRel:c.a.string,breakLabel:c.a.oneOfType([c.a.string,c.a.node]),hrefBuilder:c.a.func,onPageChange:c.a.func,initialPage:c.a.number,forcePage:c.a.number,disableInitialCallback:c.a.bool,containerClassName:c.a.string,pageClassName:c.a.string,pageLinkClassName:c.a.string,activeClassName:c.a.string,activeLinkClassName:c.a.string,previousClassName:c.a.string,nextClassName:c.a.string,previousLinkClassName:c.a.string,nextLinkClassName:c.a.string,disabledClassName:c.a.string,breakClassName:c.a.string,breakLinkClassName:c.a.string,extraAriaContext:c.a.string,ariaLabelBuilder:c.a.func,eventListener:c.a.string}),N(y,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=y,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var s=void 0;try{s=n[r]}catch(e){continue}e.register(s,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(21))},525:function(e,a,t){},567:function(e,a,t){"use strict";var n=t(31),r=t(6),s=t.n(r),l=t(91),c=t(13);a.a=function(e){var a=e.icon,t=e.color,r=e.stats,i=e.renderStats,o=e.statTitle,u=e.className,d=e.statsMargin;return Object(c.jsx)(l.l,{children:Object(c.jsx)(l.m,{className:u,children:Object(c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(c.jsxs)("div",{children:[i||Object(c.jsx)("h2",{className:s()("fw-bolder",Object(n.a)({"mb-0":!d},d,d)),children:r}),Object(c.jsx)("p",{className:"card-text",children:o})]}),Object(c.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(t?"bg-light-".concat(t):"bg-light-primary"),children:Object(c.jsx)("div",{className:"avatar-content",children:a})})]})})})}},616:function(e,a,t){"use strict";var n=t(17),r=t(31),s=t(134),l=t(817),c=t(6),i=t.n(c),o=t(552),u=t.n(o),d=t(91),p=t(13),b=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"];a.a=function(e){var a,t=e.open,c=e.size,o=e.title,m=e.width,f=e.children,j=e.closeBtn,h=e.className,v=e.toggleSidebar,g=e.bodyClassName,x=e.contentClassName,O=e.wrapperClassName,N=e.headerClassName,y=Object(s.a)(e,b),C=j||Object(p.jsx)(l.a,{className:"cursor-pointer",size:15,onClick:v});return Object(p.jsxs)(d.R,Object(n.a)(Object(n.a)(Object(n.a)({isOpen:t,toggle:v,contentClassName:i()("overflow-hidden",Object(r.a)({},x,x)),modalClassName:i()("modal-slide-in",Object(r.a)({},O,O)),className:i()((a={},Object(r.a)(a,h,h),Object(r.a)(a,"sidebar-lg","lg"===c),Object(r.a)(a,"sidebar-sm","sm"===c),a))},void 0!==m?{style:{width:String(m)+"px"}}:{}),y),{},{children:[Object(p.jsx)(d.U,{className:i()(Object(r.a)({},N,N)),toggle:v,close:C,tag:"div",children:Object(p.jsx)("h5",{className:"modal-title",children:Object(p.jsx)("span",{className:"align-middle",children:o})})}),Object(p.jsx)(u.a,{options:{wheelPropagation:!1},children:Object(p.jsx)(d.S,{className:i()("flex-grow-1",Object(r.a)({},g,g)),children:f})})]}))}},685:function(e,a,t){"use strict";t.d(a,"c",(function(){return o})),t.d(a,"d",(function(){return u})),t.d(a,"e",(function(){return d})),t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return b}));var n=t(4),r=t(2),s=t.n(r),l=t(3),c=t(7),i=t.n(c),o=Object(l.b)("appUsers/getAllData",Object(n.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/users/list/all-data");case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))),u=Object(l.b)("appUsers/getData",function(){var e=Object(n.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/users/list/data",a);case 2:return t=e.sent,e.abrupt("return",{params:a,data:t.data.users,totalPages:t.data.total});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),d=Object(l.b)("appUsers/getUser",function(){var e=Object(n.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/users/user",{id:a});case 2:return t=e.sent,e.abrupt("return",t.data.user);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),p=Object(l.b)("appUsers/addUser",function(){var e=Object(n.a)(s.a.mark((function e(a,t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,r=t.getState,e.next=3,i.a.post("/apps/users/add-user",a);case 3:return e.next=5,n(u(r().users.params));case 5:return e.next=7,n(o());case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()),b=Object(l.b)("appUsers/deleteUser",function(){var e=Object(n.a)(s.a.mark((function e(a,t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.dispatch,r=t.getState,e.next=3,i.a.delete("/apps/users/delete",{id:a});case 3:return e.next=5,n(u(r().users.params));case 5:return e.next=7,n(o());case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}());Object(l.c)({name:"appUsers",initialState:{data:[],total:1,params:{},allData:[],selectedUser:null},reducers:{},extraReducers:function(e){e.addCase(o.fulfilled,(function(e,a){e.allData=a.payload})).addCase(u.fulfilled,(function(e,a){e.data=a.payload.data,e.params=a.payload.params,e.total=a.payload.totalPages})).addCase(d.fulfilled,(function(e,a){e.selectedUser=a.payload}))}}).reducer}}]);
//# sourceMappingURL=58.b120b337.chunk.js.map