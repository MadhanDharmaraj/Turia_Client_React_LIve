(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[79],{1473:function(e,t,s){"use strict";s.r(t);var c=s(14),n=s(1),a=s(4),r=s(22),i=s(8),l=s(2),d=s(527),o=s(538),j=s(155),u=s(532),b=s(539),m=s(535),O=s(769),f=s(718),x=s(727),h=s(756),g=s(7),p=s.n(g),v=s(5),N=s(540),y=s(525),w=s(526),E=s(178),S=s(142),B=s(97),I=s(141),C=s(13),k=s(140),z=s(10),P=s(16),q=function(e){var t=e.t,s=e.name;return Object(P.jsxs)("div",{className:"d-flex",children:[Object(P.jsx)("div",{className:"me-1",children:Object(P.jsx)(d.a,{size:"sm",color:"success",icon:Object(P.jsx)(O.a,{size:12})})}),Object(P.jsxs)("div",{className:"d-flex flex-column",children:[Object(P.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(P.jsx)("h6",{children:s}),Object(P.jsx)(f.a,{size:12,className:"cursor-pointer",onClick:function(){return S.b.dismiss(t.id)}})]}),Object(P.jsx)("span",{children:"You have successfully logged in as an user to Turia. Now you can start to explore. Enjoy!"})]})]})},T=Object(z.c)(),L=function(e){Object(i.a)(e);var t=Object(I.b)(),s=Object(C.f)({}),O=Object(l.useState)([]),f=Object(r.a)(O,2),g=f[0],z=f[1],L=Object(l.useState)([]),G=Object(r.a)(L,2),A=G[0],F=G[1],R=Object(l.useState)([]),V=Object(r.a)(R,2),J=V[0],D=V[1],K=Object(l.useState)([]),Y=Object(r.a)(K,2),Z=Y[0],$=Y[1],W=Object(l.useState)(!1),H=Object(r.a)(W,2),M=H[0],Q=H[1],U=function(){return Object(P.jsx)(l.Fragment,{children:Object(P.jsx)(w.a,{})})},X=o.d().shape({userId:o.f().default(T.id),name:o.f().required("Please Enter Business Name"),businessEmail:o.f().email().required("Please Enter Business Email"),contactNo:o.f().required("Please Enter Contact Number").matches(/^[0-9\- ]{10,10}$/,{message:"Phone number is not valid",excludeEmptyString:!0}),businessEntityId:o.f().required("Please Select Business Entity"),businessTypeId:o.f().required("Please Select Business Type"),isGstRegistered:o.b(),gstin:o.f().required("Please Enter GSTIN"),addressLine1:o.f().required("Please Enter Address Line 1"),addressLine2:o.f().required("Please Enter Area, Street, Sector, Village"),countryId:o.f().required("Please Select CountryId"),stateId:o.f().required("Please Select State"),pinZipCode:o.f().required("Please Enter Postal Code").matches(/^[0-9\- ]{6,6}$/,{message:"Postal Code is not valid",excludeEmptyString:!0}),city:o.f().required("Please Enter City")}),_=Object(u.f)({defaultValues:X.cast(),resolver:Object(b.a)(X)}),ee=_.control,te=_.handleSubmit,se=_.formState.errors,ce=_.setError,ne=Object(I.c)((function(e){return e.organizationmain})),ae=function(){var e=Object(a.a)(Object(n.a)().mark((function e(s){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.userId=T.id,e.next=3,t(Object(E.b)(s));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(a.a)(Object(n.a)().mark((function e(s,c){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={userId:s.id,name:s.name,organizationId:c,email:s.email,userTypeId:s.usertypeid},Q(!0),e.next=4,t(Object(E.c)(a));case 4:Q(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();Object(l.useEffect)(Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.a.post("/businessentities/list").then((function(e){var t=e.data;z(t.businessentities)})),v.a.post("/businesstypes/dropdown").then((function(e){var t=e.data;F(t.businesstypes)})),v.a.post("/countries/list").then((function(e){var t=e.data;$(t.countries)})),v.a.post("/states/list").then((function(e){var t=e.data;D(t.states)})),console.log(T.id);case 5:case"end":return e.stop()}}),e)}))),[]),Object(l.useEffect)(Object(a.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne.registerSuccess&&(Q(!0),t=ne.activeOrganization,localStorage.setItem("activeOrganization",JSON.stringify(t)),s(Object(N.c)("admin")));case 1:case"end":return e.stop()}}),e)}))),[ne.registerSuccess]),Object(l.useEffect)((function(){if(null!==ne.activeOrganizationId){var e=T,t=ne.activeOrganizationId;re(e,t),Object(S.b)((function(t){return Object(P.jsx)(q,{t:t,name:e.name})}))}}),[ne.activeOrganizationId]),Object(l.useEffect)(Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==ne.organizationCreateError&&Object.keys(ne.organizationCreateError).map((function(e){ce(e,{type:"custom",message:ne.organizationCreateError[e][0]})}));case 1:case"end":return e.stop()}}),e)}))),[ne.organizationCreateError]);var ie=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(P.jsxs)(B.ib,{className:"mb-1",children:[Object(P.jsx)(B.N,{sm:"12",size:"lg",className:p()("form-label ".concat(s?"required":"")),for:t,children:e}),Object(P.jsxs)(B.B,{sm:"12",children:[Object(P.jsx)(u.a,{id:t,name:t,control:ee,render:function(e){var s=e.field;return Object(P.jsx)(B.K,Object(c.a)({invalid:se[t]&&!0},s))}}),se[t]&&Object(P.jsx)(B.I,{children:se[t].message})]})]})},le=function(e,t,s){var n,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(P.jsxs)(B.ib,{className:"mb-1",children:[Object(P.jsx)(B.N,{sm:"12",size:"lg",className:p()("form-label ".concat(a?"required":"")),for:t,children:e}),Object(P.jsxs)(B.B,{sm:"12",children:[Object(P.jsx)(u.a,{control:ee,name:t,id:t,render:function(e){var n=e.field,a=e.ref;return Object(P.jsx)(m.a,Object(c.a)(Object(c.a)({inputRef:a,className:p()("react-select",{"is-invalid":se[t]})},n),{},{classNamePrefix:"select",options:s,value:s.find((function(e){return e.id===n.value})),onChange:function(e){return n.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),se[t]&&Object(P.jsx)(B.I,{className:"text-danger",children:null===(n=se[t])||void 0===n?void 0:n.message})]})]})};return Object(P.jsx)(l.Fragment,{children:Object(P.jsxs)(y.a,{blocking:M,loader:Object(P.jsx)(U,{}),children:[Object(P.jsxs)("div",{className:"content-header mb-2 d-flex",children:[Object(P.jsxs)(B.B,{children:[Object(P.jsx)("h2",{className:"fw-bolder mb-75",children:"Organization Information"}),Object(P.jsx)("span",{children:"Enter Your Organization Details."})]}),Object(P.jsx)(B.B,{children:Object(P.jsxs)(B.wb,{tag:"li",className:"dropdown-user nav-item",children:[Object(P.jsx)(B.G,{href:"/",tag:"a",className:"nav-link dropdown-user-link",onClick:function(e){return e.preventDefault()},children:Object(P.jsx)(d.a,{content:T.name.charAt(0),className:"me-50",color:"light-primary"})}),Object(P.jsx)(B.F,{end:!0,style:{minWidth:"26rem"},children:Object(P.jsxs)(B.E,{tag:k.b,to:"/login",onClick:function(){return t(Object(j.c)())},children:[Object(P.jsx)(x.a,{size:14,className:"me-75"}),Object(P.jsx)("span",{className:"align-middle",children:"Logout"})]})})]})})]}),Object(P.jsxs)("form",{onSubmit:te(ae),children:[Object(P.jsxs)(B.ib,{children:[Object(P.jsx)(B.B,{md:"6",children:ie("Business Name","name",!0)}),Object(P.jsx)(B.B,{md:"6",children:ie("Business E-mail","businessEmail",!0)}),Object(P.jsx)(B.B,{md:"6",children:ie("Conatct No","contactNo",!0)}),Object(P.jsx)(B.B,{md:"6",children:le("Business Type","businessTypeId",g,!0)}),Object(P.jsx)(B.B,{md:"6",children:le("Business Entity","businessEntityId",A,!0)}),Object(P.jsxs)(B.B,{md:"6",children:[Object(P.jsx)(B.N,{className:"form-label",for:"pincode",children:"Is GST Registered?"}),Object(P.jsx)("div",{className:"form-switch form-check-success",children:Object(P.jsx)(B.K,{type:"switch",id:"switch-success",name:"isGstRegistered",defaultChecked:!0})})]}),Object(P.jsx)(B.B,{md:"6",children:ie("GSTIN","gstin",!0)}),Object(P.jsx)(B.B,{sm:"12",children:ie("Address","addressLine1",!0)}),Object(P.jsx)(B.B,{sm:12,children:ie("Area, Street, Sector, Village","addressLine2",!0)}),Object(P.jsx)(B.B,{md:"6",children:le("State","stateId",J,!0)}),Object(P.jsx)(B.B,{md:"6",children:ie("Postal Code","pinZipCode",!0)}),Object(P.jsx)(B.B,{md:"6",children:ie("Town/City","city",!0)}),Object(P.jsx)(B.B,{md:"6",children:le("Country","countryId",Z,!0)})]}),Object(P.jsx)("div",{className:"d-flex justify-content-between mt-2",children:Object(P.jsxs)(B.i,{type:"submit",color:"success",className:"btn-next",children:[Object(P.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:"Submit"}),Object(P.jsx)(h.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})})]})]})})},G=s(27);s(548),t.default=function(){var e=s(617).default;return Object(P.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(P.jsxs)(B.ib,{className:"auth-inner m-0",children:[Object(P.jsxs)(k.b,{className:"brand-logo",to:"/",children:[Object(P.jsx)("img",{src:G.a.app.appLogoImage,alt:"Turia Logo",width:45,height:35}),Object(P.jsx)("h1",{className:"brand-text text-primary",children:"Turia"})]}),Object(P.jsx)(B.B,{lg:"3",className:"d-none d-lg-flex align-items-center p-0",children:Object(P.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center",children:Object(P.jsx)("img",{className:"img-fluid w-100",src:e,alt:"Login Cover"})})}),Object(P.jsx)(B.B,{lg:"9",className:"d-flex align-items-center auth-bg px-2 px-sm-3 px-lg-5 pt-3",children:Object(P.jsx)("div",{className:"width-700 mx-auto",children:Object(P.jsx)(L,{})})})]})})}},525:function(e,t,s){"use strict";var c=s(14),n=s(34),a=s(2),r=s(7),i=s.n(r),l=s(97),d=(s(528),s(16)),o=function(e){var t,s=e.children,r=e.blocking,l=e.loader,o=e.className,j=e.tag,u=e.overlayColor,b=j;return Object(d.jsxs)(b,{className:i()("ui-loader",(t={},Object(n.a)(t,o,o),Object(n.a)(t,"show",r),t)),children:[s,r?Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)("div",Object(c.a)({className:"overlay"},r&&u?{style:{backgroundColor:u}}:{})),Object(d.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=o,o.defaultProps={tag:"div",blocking:!1,loader:Object(d.jsx)(l.jb,{color:"primary"})}},526:function(e,t,s){"use strict";var c=s(16);t.a=function(){return Object(c.jsx)("div",{className:"fallback-spinner",children:Object(c.jsxs)("div",{className:"loading",children:[Object(c.jsx)("div",{className:"effect-1 effects"}),Object(c.jsx)("div",{className:"effect-2 effects"}),Object(c.jsx)("div",{className:"effect-3 effects"})]})})}},528:function(e,t,s){},548:function(e,t,s){},617:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/create-account.9a7744ba.svg"}}]);
//# sourceMappingURL=79.cb277117.chunk.js.map