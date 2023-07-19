(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[123],{1341:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(1),s=a(4),c=a(22),i=a(13),o=a(139),l=a(5),d=a(553),j=a(538),u=a(539),b=a(96),m=a(172),f=a(161),O=a(155),p=(a(548),a(2)),h=a(532),x=a(140),v=a(540),g=a(141),w=a(16),N=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;t.default=function(){var e,t=Object(i.g)().uniquekey,a=Object(p.useState)({}),y=Object(c.a)(a,2),C=y[0],P=y[1],k=Object(x.b)(),F=Object(i.f)({}),E=Object(x.c)((function(e){return e.register})),L=j.d().shape({uniquekey:j.f().default(t),name:j.f(),email:j.f().email().required(),password:j.f().required("Password").matches(N,"Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),confirmPassword:j.f().required("Confirm Password is Required").oneOf([j.e("password"),null],"Passwords must match")}),I=Object(h.f)({defaultValues:L.cast(),resolver:Object(u.a)(L)}),z=I.control,S=I.handleSubmit,q=I.formState.errors,G=I.setValue,M=function(){var e=Object(s.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(Object(f.b)(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(Object(f.e)(t));case 2:m.a.login({email:t.email,password:t.password,roleid:C.roleid}).then(function(){var e=Object(s.a)(Object(n.a)().mark((function e(t){var a,r,s;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data,e.next=3,k(Object(O.b)(a));case 3:return r={},s="".concat(C.firstname," ").concat(C.lastname),r.name=s,r.email=C.email,r.contact=C.contactno,r.createBy=a.users.id,r.userId=a.users.id,r.email=C.email,r.departmentId=C.designationid,r.designationId=C.departmentid,r.userTypeId=C.usertypeid,r.organizationId=C.organizationid,r.roleId=C.roleid,e.next=18,M(r);case 18:Object(g.b)((function(e){return Object(w.jsx)(ToastContent,{t:e,name:a.name})}));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.useEffect)(Object(s.a)(Object(n.a)().mark((function e(){var t,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.registerSuccess&&(t=E.loginUser,a=E.activeOrganization.find((function(e){return!0===e.isdefault})),localStorage.setItem("activeOrganization",JSON.stringify(a||E.activeOrganization[0])),F(Object(v.c)(t.role)));case 1:case"end":return e.stop()}}),e)}))),[E.registerSuccess,E.activeOrganization]),Object(p.useEffect)(Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==E.loginError&&(q.email=E.loginError.email);case 1:case"end":return e.stop()}}),e)}))),[k,E.loginUser,E.loginError]),Object(p.useEffect)((function(){t&&l.a.post("/invitations/getinvitation",{uniquekey:t}).then((function(e){P(e.data.invitation),G("email",e.data.invitation.email),G("name","".concat(e.data.invitation.firstname," ").concat(e.data.invitation.lastname))})).catch((function(e){console.log(e)}))}),[t]),Object(w.jsx)("div",{className:"auth-wrapper auth-basic px-2",children:Object(w.jsx)("div",{className:"auth-inner my-2",children:Object(w.jsx)(b.l,{className:"mb-0",children:Object(w.jsxs)(b.m,{children:[Object(w.jsxs)(o.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(w.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(w.jsxs)("defs",{children:[Object(w.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(w.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(w.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(w.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(w.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(w.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(w.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(w.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(w.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(w.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(w.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(w.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(w.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(w.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(w.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Turia"})]}),Object(w.jsx)(b.v,{tag:"h4",className:"mb-1",children:"Welcome to Turia! \ud83d\udc4b"}),Object(w.jsx)(b.u,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(w.jsxs)(b.H,{className:"auth-login-form mt-2",onSubmit:S(R),children:[Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)(b.N,{className:"form-label required",for:"login-email",children:"Email"}),Object(w.jsx)(h.a,{id:"loginEmail",name:"email",control:z,render:function(e){var t=e.field;return Object(w.jsx)(b.K,Object(r.a)({autoFocus:!0,type:"email",disabled:!0,placeholder:"john@example.com",invalid:q.loginEmail&&!0},t))}})]}),Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)("div",{className:"d-flex justify-content-between",children:Object(w.jsx)(b.N,{className:"form-label required",for:"login-password",children:"Password"})}),Object(w.jsx)(h.a,{id:"password",name:"password",control:z,render:function(e){var t=e.field;return Object(w.jsx)(d.a,Object(r.a)({className:"input-group-merge",invalid:q.password&&!0},t))}}),q.password&&Object(w.jsx)(b.I,{children:null===(e=q.password)||void 0===e?void 0:e.message})]}),Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)("div",{className:"d-flex justify-content-between",children:Object(w.jsx)(b.N,{className:"form-label required",for:"login-password",children:"Confirm Password"})}),Object(w.jsx)(h.a,{control:z,id:"confirmPassword",name:"confirmPassword",render:function(e){var t=e.field;return Object(w.jsx)(d.a,Object(r.a)({htmlFor:"confirmPassword",className:"input-group-merge",invalid:q.confirmPassword&&!0},t))}}),q.confirmPassword&&Object(w.jsx)(b.I,{children:q.confirmPassword.message})]}),Object(w.jsxs)("div",{className:"form-check mb-1",children:[Object(w.jsx)(b.K,{type:"checkbox",id:"remember-me"}),Object(w.jsx)(b.N,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),Object(w.jsx)(b.i,{color:"primary",block:!0,children:"Sign in"})]})]})})})})}},548:function(e,t,a){},553:function(e,t,a){"use strict";var r=a(14),n=a(34),s=a(22),c=a(143),i=a(2),o=a(7),l=a.n(o),d=a(786),j=a(785),u=a(96),b=a(16),m=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],f=Object(i.forwardRef)((function(e,t){var a,o=e.label,f=e.hideIcon,O=e.showIcon,p=e.visible,h=e.className,x=e.htmlFor,v=e.placeholder,g=e.iconSize,w=e.inputClassName,N=e.invalid,y=Object(c.a)(e,m),C=Object(i.useState)(p),P=Object(s.a)(C,2),k=P[0],F=P[1];return Object(b.jsxs)(i.Fragment,{children:[o?Object(b.jsx)(u.N,{className:"form-label",for:x,children:o}):null,Object(b.jsxs)(u.L,{className:l()((a={},Object(n.a)(a,h,h),Object(n.a)(a,"is-invalid",N),a)),children:[Object(b.jsx)(u.K,Object(r.a)(Object(r.a)({ref:t,invalid:N,type:!1===k?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(n.a)({},w,w))},o&&x?{id:x}:{}),y)),Object(b.jsx)(u.M,{className:"cursor-pointer",onClick:function(){return F(!k)},children:function(){var e=g||14;return!1===k?f||Object(b.jsx)(d.a,{size:e}):O||Object(b.jsx)(j.a,{size:e})}()})]})]})}));t.a=f,f.defaultProps={visible:!1}}}]);
//# sourceMappingURL=123.682cf4cc.chunk.js.map