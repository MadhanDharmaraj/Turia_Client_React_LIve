(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[183],{1601:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t(483),i=t(88),c=t(15),l=t(623),r=t(493),o=t.n(r),j=t(843),d=t(501),m=t.n(d),b=t(10),g=function(){var e=Object(s.useState)(0),a=Object(c.a)(e,2),t=a[0],n=a[1];return Object(b.jsxs)(i.l,{children:[Object(b.jsx)(i.p,{children:Object(b.jsx)(i.v,{tag:"h4",children:"Expandable Row"})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:l.d,expandableRows:!0,columns:l.c,expandOnRowClicked:!0,className:"react-dataTable",sortIcon:Object(b.jsx)(j.a,{size:10}),paginationComponent:function(){return Object(b.jsx)(o.a,{previousLabel:"",nextLabel:"",forcePage:t,onPageChange:function(e){return function(e){n(e.selected)}(e)},pageCount:10,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1"})},paginationDefaultPage:t+1,expandableRowsComponent:l.e,paginationRowsPerPageOptions:[10,25,50,100]})})]})},p=function(){return Object(b.jsxs)(i.l,{className:"overflow-hidden",children:[Object(b.jsx)(i.p,{children:Object(b.jsx)(i.v,{tag:"h4",children:"Zero Configuration"})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:l.d,columns:l.b,className:"react-dataTable",sortIcon:Object(b.jsx)(j.a,{size:10}),paginationRowsPerPageOptions:[10,25,50,100]})})]})},x=t(14),h=t(496),u=t.n(h),O=t(802),C=t(812),N=t(838),f=t(813),L=t(814),w=t(865),v=(t(486),function(e){var a=e.open,t=e.handleModal,n=Object(s.useState)(new Date),l=Object(c.a)(n,2),r=l[0],o=l[1],j=Object(b.jsx)(O.a,{className:"cursor-pointer",size:15,onClick:t});return Object(b.jsxs)(i.Q,{isOpen:a,toggle:t,className:"sidebar-sm",modalClassName:"modal-slide-in",contentClassName:"pt-0",children:[Object(b.jsx)(i.T,{className:"mb-1",toggle:t,close:j,tag:"div",children:Object(b.jsx)("h5",{className:"modal-title",children:"New Record"})}),Object(b.jsxs)(i.R,{className:"flex-grow-1",children:[Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(i.N,{className:"form-label",for:"full-name",children:"Full Name"}),Object(b.jsxs)(i.L,{children:[Object(b.jsx)(i.M,{children:Object(b.jsx)(C.a,{size:15})}),Object(b.jsx)(i.K,{id:"full-name",placeholder:"Bruce Wayne"})]})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(i.N,{className:"form-label",for:"post",children:"Post"}),Object(b.jsxs)(i.L,{children:[Object(b.jsx)(i.M,{children:Object(b.jsx)(N.a,{size:15})}),Object(b.jsx)(i.K,{id:"post",placeholder:"Web Developer"})]})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(i.N,{className:"form-label",for:"email",children:"Email"}),Object(b.jsxs)(i.L,{children:[Object(b.jsx)(i.M,{children:Object(b.jsx)(f.a,{size:15})}),Object(b.jsx)(i.K,{type:"email",id:"email",placeholder:"brucewayne@email.com"})]})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(i.N,{className:"form-label",for:"joining-date",children:"Joining Date"}),Object(b.jsxs)(i.L,{children:[Object(b.jsx)(i.M,{children:Object(b.jsx)(L.a,{size:15})}),Object(b.jsx)(u.a,{className:"form-control",id:"joining-date",value:r,onChange:function(e){return o(e)}})]})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(i.N,{className:"form-label",for:"salary",children:"Salary"}),Object(b.jsxs)(i.L,{children:[Object(b.jsx)(i.M,{children:Object(b.jsx)(w.a,{size:15})}),Object(b.jsx)(i.K,{type:"number",id:"salary"})]})]}),Object(b.jsx)(i.i,{className:"me-1",color:"primary",onClick:t,children:"Submit"}),Object(b.jsx)(i.i,{color:"secondary",onClick:t,outline:!0,children:"Cancel"})]})]})}),k=t(925),y=t(918),P=t(878),R=t(885),z=t(879),D=t(857),S=t(809),W=Object(s.forwardRef)((function(e,a){return Object(b.jsx)("div",{className:"form-check",children:Object(b.jsx)(i.K,Object(x.a)({type:"checkbox",ref:a},e))})})),T=function(){var e=Object(s.useState)(!1),a=Object(c.a)(e,2),t=a[0],n=a[1],r=Object(s.useState)(0),d=Object(c.a)(r,2),g=d[0],p=d[1],x=Object(s.useState)(""),h=Object(c.a)(x,2),u=h[0],O=h[1],C=Object(s.useState)([]),N=Object(c.a)(C,2),f=N[0],L=N[1],w=function(){return n(!t)};function T(e){var a=document.createElement("a"),t=function(e){var a,t=Object.keys(l.d[0]);return a="",a+=t.join(","),a+="\n",e.forEach((function(e){var s=0;t.forEach((function(t){s>0&&(a+=","),a+=e[t],s++})),a+="\n"})),a}(e);if(null!==t){t.match(/^data:text\/csv/i)||(t="data:text/csv;charset=utf-8,".concat(t)),a.setAttribute("href",encodeURI(t)),a.setAttribute("download","export.csv"),a.click()}}return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)(i.l,{children:[Object(b.jsxs)(i.p,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(b.jsx)(i.v,{tag:"h4",children:"DataTable with Buttons"}),Object(b.jsxs)("div",{className:"d-flex mt-md-0 mt-1",children:[Object(b.jsxs)(i.tb,{children:[Object(b.jsxs)(i.G,{color:"secondary",caret:!0,outline:!0,children:[Object(b.jsx)(k.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Export"})]}),Object(b.jsxs)(i.F,{children:[Object(b.jsxs)(i.E,{className:"w-100",children:[Object(b.jsx)(y.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Print"})]}),Object(b.jsxs)(i.E,{className:"w-100",onClick:function(){return T(l.d)},children:[Object(b.jsx)(P.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"CSV"})]}),Object(b.jsxs)(i.E,{className:"w-100",children:[Object(b.jsx)(R.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Excel"})]}),Object(b.jsxs)(i.E,{className:"w-100",children:[Object(b.jsx)(z.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"PDF"})]}),Object(b.jsxs)(i.E,{className:"w-100",children:[Object(b.jsx)(D.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Copy"})]})]})]}),Object(b.jsxs)(i.i,{className:"ms-2",color:"primary",onClick:w,children:[Object(b.jsx)(S.a,{size:15}),Object(b.jsx)("span",{className:"align-middle ms-50",children:"Add Record"})]})]})]}),Object(b.jsx)(i.ib,{className:"justify-content-end mx-0",children:Object(b.jsxs)(i.B,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(b.jsx)(i.N,{className:"me-1",for:"search-input",children:"Search"}),Object(b.jsx)(i.K,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:u,onChange:function(e){var a=e.target.value,t=[];O(a);var s={1:{title:"Current",color:"light-primary"},2:{title:"Professional",color:"light-success"},3:{title:"Rejected",color:"light-danger"},4:{title:"Resigned",color:"light-warning"},5:{title:"Applied",color:"light-info"}};a.length&&(t=l.d.filter((function(e){var t=e.full_name.toLowerCase().startsWith(a.toLowerCase())||e.post.toLowerCase().startsWith(a.toLowerCase())||e.email.toLowerCase().startsWith(a.toLowerCase())||e.age.toLowerCase().startsWith(a.toLowerCase())||e.salary.toLowerCase().startsWith(a.toLowerCase())||e.start_date.toLowerCase().startsWith(a.toLowerCase())||s[e.status].title.toLowerCase().startsWith(a.toLowerCase()),n=e.full_name.toLowerCase().includes(a.toLowerCase())||e.post.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())||e.age.toLowerCase().includes(a.toLowerCase())||e.salary.toLowerCase().includes(a.toLowerCase())||e.start_date.toLowerCase().includes(a.toLowerCase())||s[e.status].title.toLowerCase().includes(a.toLowerCase());return t||(!t&&n?n:null)})),L(t),O(a))}})]})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:l.c,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(b.jsx)(j.a,{size:10}),paginationDefaultPage:g+1,paginationComponent:function(){return Object(b.jsx)(o.a,{previousLabel:"",nextLabel:"",forcePage:g,onPageChange:function(e){return function(e){p(e.selected)}(e)},pageCount:u.length?Math.ceil(f.length/7):Math.ceil(l.d.length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"})},data:u.length?f:l.d,selectableRowsComponent:W})})]}),Object(b.jsx)(v,{open:t,handleModal:w})]})},M=t(1655),E=function(){var e=Object(s.useState)(0),a=Object(c.a)(e,2),t=a[0],n=a[1],r=Object(s.useState)(""),d=Object(c.a)(r,2),g=d[0],p=d[1],x=Object(s.useState)([]),h=Object(c.a)(x,2),u=h[0],O=h[1],C=Object(M.a)().t,N=function(){return Object(b.jsx)(s.Fragment,{children:Object(b.jsx)("span",{className:"align-middle d-none d-md-inline-block",children:C("Prev")})})},f=function(){return Object(b.jsx)(s.Fragment,{children:Object(b.jsx)("span",{className:"align-middle d-none d-md-inline-block",children:C("Next")})})};return Object(b.jsxs)(i.l,{children:[Object(b.jsx)(i.p,{className:"border-bottom",children:Object(b.jsx)(i.v,{tag:"h4",children:"Multilingual"})}),Object(b.jsx)(i.ib,{className:"justify-content-end mx-0",children:Object(b.jsxs)(i.B,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(b.jsx)(i.N,{className:"me-1",for:"search-input-1",children:C("Search")}),Object(b.jsx)(i.K,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input-1",value:g,onChange:function(e){var a=e.target.value,t=[];p(a);var s={1:{title:"Current",color:"light-primary"},2:{title:"Professional",color:"light-success"},3:{title:"Rejected",color:"light-danger"},4:{title:"Resigned",color:"light-warning"},5:{title:"Applied",color:"light-info"}};a.length&&(t=l.d.filter((function(e){var t=e.full_name.toLowerCase().startsWith(a.toLowerCase())||e.post.toLowerCase().startsWith(a.toLowerCase())||e.email.toLowerCase().startsWith(a.toLowerCase())||e.age.toLowerCase().startsWith(a.toLowerCase())||e.salary.toLowerCase().startsWith(a.toLowerCase())||e.start_date.toLowerCase().startsWith(a.toLowerCase())||s[e.status].title.toLowerCase().startsWith(a.toLowerCase()),n=e.full_name.toLowerCase().includes(a.toLowerCase())||e.post.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())||e.age.toLowerCase().includes(a.toLowerCase())||e.salary.toLowerCase().includes(a.toLowerCase())||e.start_date.toLowerCase().includes(a.toLowerCase())||s[e.status].title.toLowerCase().includes(a.toLowerCase());return t||(!t&&n?n:null)})),O(t),p(a))}})]})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,selectableRowsNoSelectAll:!0,columns:l.f,className:"react-dataTable",paginationPerPage:7,sortIcon:Object(b.jsx)(j.a,{size:10}),paginationDefaultPage:t+1,paginationComponent:function(){return Object(b.jsx)(o.a,{previousLabel:Object(b.jsx)(N,{size:15}),nextLabel:Object(b.jsx)(f,{size:15}),forcePage:t,onPageChange:function(e){return function(e){n(e.selected)}(e)},pageCount:g.length?Math.ceil(u.length/7):Math.ceil(l.d.length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate pagination-sm justify-content-end pe-1 mt-1"})},data:g.length?u:l.d})}),Object(b.jsx)(i.n,{children:Object(b.jsxs)(i.u,{className:"mb-0",children:[Object(b.jsx)("span",{className:"fw-bold",children:"Note:"})," ",Object(b.jsx)("span",{children:"Use Intl Dropdown in Navbar to change table language"})]})})]})},B=function(){var e=Object(s.useState)(0),a=Object(c.a)(e,2),t=a[0],n=a[1];return Object(b.jsxs)(i.l,{className:"overflow-hidden",children:[Object(b.jsx)(i.p,{children:Object(b.jsx)(i.v,{tag:"h4",children:"Column ReOrder"})}),Object(b.jsx)("div",{className:"react-dataTable",children:Object(b.jsx)(m.a,{noHeader:!0,pagination:!0,data:l.d,columns:l.g,className:"react-dataTable",sortIcon:Object(b.jsx)(j.a,{size:10}),paginationComponent:function(){return Object(b.jsx)(o.a,{nextLabel:"",breakLabel:"...",previousLabel:"",pageRangeDisplayed:2,forcePage:t,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",pageCount:Math.ceil(l.d.length/7)||1,onPageChange:function(e){return function(e){n(e.selected)}(e)},containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"})},paginationDefaultPage:t+1,paginationRowsPerPageOptions:[10,25,50,100]})})]})};t(492),a.default=function(){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(n.a,{title:"Datatables Basic",data:[{title:"Datatables"},{title:"Datatables Basic"}]}),Object(b.jsxs)(i.ib,{children:[Object(b.jsx)(i.B,{sm:"12",children:Object(b.jsx)(p,{})}),Object(b.jsx)(i.B,{sm:"12",children:Object(b.jsx)(B,{})}),Object(b.jsx)(i.B,{sm:"12",children:Object(b.jsx)(T,{})}),Object(b.jsx)(i.B,{sm:"12",children:Object(b.jsx)(g,{})}),Object(b.jsx)(i.B,{sm:"12",children:Object(b.jsx)(E,{})})]})]})}}}]);
//# sourceMappingURL=183.157afff8.chunk.js.map