(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[164],{1346:function(e,s,t){"use strict";t.r(s);var a=t(22),c=t(13),n=t(140),l=t(27),o=t(97),r=t(540),i=t(557),d=t(758),m=t(5),j=(t(548),t(2)),u=t(142),b=t(16);s.default=function(){var e=Object(i.a)().skin,s=Object(j.useState)(null),h=Object(a.a)(s,2),g=h[0],x=h[1],p=Object(c.f)(),f="dark"===e?"forgot-password-v2-dark.svg":"forgot-password-v2.svg",O=t(567)("./".concat(f)).default,N=function(){m.a.post("/passwordresets/create",{email:g}).then((function(){m.a.post("/passwordresets/forgotpassword",{email:g}).then((function(){u.b.success("Password Reset mail Sent Successfully... Please Check ".concat(g," Inbox"),{position:"bottom-right"}),p("/login")})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))};return Object(r.g)()?Object(b.jsx)(c.a,{to:"/"}):Object(b.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(b.jsxs)(o.ib,{className:"auth-inner m-0",children:[Object(b.jsxs)(n.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(b.jsx)("img",{src:l.a.app.appLogoImage,alt:"Turia Logo",width:45,height:35}),Object(b.jsx)("h1",{className:"brand-text text-primary ms-1",children:"Turia"})]}),Object(b.jsx)(o.B,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(b.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(b.jsx)("img",{className:"img-fluid",src:O,alt:"Login Cover"})})}),Object(b.jsx)(o.B,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(b.jsxs)(o.B,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(b.jsx)(o.v,{tag:"h2",className:"fw-bold mb-1",children:"Forgot Password? \ud83d\udd12"}),Object(b.jsx)(o.u,{className:"mb-2",children:"Enter your email and we'll send you instructions to reset your password"}),Object(b.jsxs)(o.H,{className:"auth-forgot-password-form mt-2",onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(o.N,{className:"form-label",for:"login-email",children:"Email"}),Object(b.jsx)(o.K,{type:"email",id:"login-email",placeholder:"john@example.com",autoFocus:!0,onInput:function(e){return x(e.target.value)}})]}),Object(b.jsx)(o.i,{color:"primary",block:!0,disabled:null===g,onClick:function(){N()},children:"Send reset link"})]}),Object(b.jsx)("p",{className:"text-center mt-2",children:Object(b.jsxs)(n.b,{to:"/login",children:[Object(b.jsx)(d.a,{className:"rotate-rtl me-25",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Back to login"})]})})]})})]})})}},548:function(e,s,t){}}]);
//# sourceMappingURL=164.af86d283.chunk.js.map