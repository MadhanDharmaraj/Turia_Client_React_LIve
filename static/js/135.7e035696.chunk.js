(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[135],{1545:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(4),i=a(18),s=a(1),c=a.n(s),o=a(11),l=a(132),d=a(5),u=a(538),j=a(521),b=a(522),m=a(91),f=a(164),p=a(154),O=a(150),h=a(152),x=(a(534),a(2)),v=a(509),g=a(133),y=a(515),w=a(13),N=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;t.default=function(){var e,t=Object(o.g)().uniquekey,a=Object(x.useState)({}),s=Object(i.a)(a,2),C=s[0],k=s[1],I=Object(g.b)(),L=Object(o.f)({}),F=Object(x.useContext)(O.a),E=Object(g.c)((function(e){return e.register})),z=j.d().shape({uniquekey:j.f().default(t),name:j.f(),email:j.f().email().required(),password:j.f().required().matches(N,"Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")}),S=Object(v.f)({defaultValues:z.cast(),resolver:Object(b.a)(z)}),P=S.control,q=S.handleSubmit,G=S.formState.errors,T=S.setValue,M=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(Object(p.b)(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(Object(p.e)(t));case 2:f.a.login({email:t.email,password:t.password}).then(function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data,n=t.data.users,a.role="admin",a.ability=[{action:"manage",subject:"all"}],e.next=6,I(Object(h.b)(a));case 6:F.update(a.ability),r={},i="".concat(C.firstname," ").concat(C.lastname),r.name=i,r.email=C.email,r.createBy=n.id,r.userId=n.id,r.email=C.email,r.departmentId=C.designationid,r.designationId=C.departmentid,r.userTypeId=C.usertypeid,r.organizationId=C.organizationid,r.roleId=C.roleid,M(r),toast((function(e){return Object(w.jsx)(ToastContent,{t:e,name:a.name})}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.useEffect)(Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.registerSuccess&&(t=E.loginUser,localStorage.setItem("activeOrganization",JSON.stringify(E.activeOrganization[0])),L(Object(y.c)(t.role)));case 1:case"end":return e.stop()}}),e)}))),[E.registerSuccess,E.activeOrganization]),Object(x.useEffect)(Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==E.loginUser&&(t={},a="".concat(C.firstname," ").concat(C.lastname),t.name=a,t.email=C.email,t.departmentId=C.designationid,t.designationId=C.departmentid,t.userTypeId=C.usertypeid,t.organizationId=C.organizationid,t.roleId=C.roleid),null!==E.loginError&&(G.email=E.loginError.email);case 2:case"end":return e.stop()}}),e)}))),[I,E.loginUser,E.loginError]),Object(x.useEffect)((function(){t&&d.a.post("/invitations/getinvitation",{uniquekey:t}).then((function(e){k(e.data.invitation),T("email",e.data.invitation.email),T("name","".concat(e.data.invitation.firstname," ").concat(e.data.invitation.lastname))})).catch((function(e){console.log(e)}))}),[t]),Object(w.jsx)("div",{className:"auth-wrapper auth-basic px-2",children:Object(w.jsx)("div",{className:"auth-inner my-2",children:Object(w.jsx)(m.l,{className:"mb-0",children:Object(w.jsxs)(m.m,{children:[Object(w.jsxs)(l.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(w.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(w.jsxs)("defs",{children:[Object(w.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(w.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(w.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(w.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(w.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(w.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(w.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(w.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(w.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(w.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(w.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(w.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(w.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(w.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(w.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Turia"})]}),Object(w.jsx)(m.v,{tag:"h4",className:"mb-1",children:"Welcome to Turia! \ud83d\udc4b"}),Object(w.jsx)(m.u,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(w.jsxs)(m.H,{className:"auth-login-form mt-2",onSubmit:q(U),children:[Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)(m.O,{className:"form-label required",for:"login-email",children:"Email"}),Object(w.jsx)(v.a,{id:"loginEmail",name:"email",control:P,render:function(e){var t=e.field;return Object(w.jsx)(m.L,Object(n.a)({autoFocus:!0,type:"email",disabled:!0,placeholder:"john@example.com",invalid:G.loginEmail&&!0},t))}})]}),Object(w.jsxs)("div",{className:"mb-1",children:[Object(w.jsx)("div",{className:"d-flex justify-content-between",children:Object(w.jsx)(m.O,{className:"form-label required",for:"login-password",children:"Password"})}),Object(w.jsx)(v.a,{id:"password",name:"password",control:P,render:function(e){var t=e.field;return Object(w.jsx)(u.a,Object(n.a)({className:"input-group-merge",invalid:G.password&&!0},t))}}),G.password&&Object(w.jsx)(m.I,{children:null===(e=G.password)||void 0===e?void 0:e.message})]}),Object(w.jsxs)("div",{className:"form-check mb-1",children:[Object(w.jsx)(m.L,{type:"checkbox",id:"remember-me"}),Object(w.jsx)(m.O,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),Object(w.jsx)(m.i,{color:"primary",block:!0,children:"Sign in"})]})]})})})})}},534:function(e,t,a){},538:function(e,t,a){"use strict";var n=a(17),r=a(31),i=a(18),s=a(134),c=a(2),o=a(6),l=a.n(o),d=a(881),u=a(880),j=a(91),b=a(13),m=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],f=Object(c.forwardRef)((function(e,t){var a,o=e.label,f=e.hideIcon,p=e.showIcon,O=e.visible,h=e.className,x=e.htmlFor,v=e.placeholder,g=e.iconSize,y=e.inputClassName,w=e.invalid,N=Object(s.a)(e,m),C=Object(c.useState)(O),k=Object(i.a)(C,2),I=k[0],L=k[1];return Object(b.jsxs)(c.Fragment,{children:[o?Object(b.jsx)(j.O,{className:"form-label",for:x,children:o}):null,Object(b.jsxs)(j.M,{className:l()((a={},Object(r.a)(a,h,h),Object(r.a)(a,"is-invalid",w),a)),children:[Object(b.jsx)(j.L,Object(n.a)(Object(n.a)({ref:t,invalid:w,type:!1===I?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(r.a)({},y,y))},o&&x?{id:x}:{}),N)),Object(b.jsx)(j.N,{className:"cursor-pointer",onClick:function(){return L(!I)},children:function(){var e=g||14;return!1===I?f||Object(b.jsx)(d.a,{size:e}):p||Object(b.jsx)(u.a,{size:e})}()})]})]})}));t.a=f,f.defaultProps={visible:!1}}}]);
//# sourceMappingURL=135.7e035696.chunk.js.map