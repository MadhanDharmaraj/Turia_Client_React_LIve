(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[120],{1541:function(e,s,t){"use strict";t.r(s);var a=t(14),r=t(1),c=t(9),l=t(129),i=t(518),n=t(154),o=t(130),j=t(147),d=t(485),b=t(874),m=t(944),u=t(813),x=t(882),O=t(146),h=t(498),f=t(88),p=(t(504),t(10)),v={email:"",terms:!1,username:"",password:""};s.default=function(){var e=Object(r.useContext)(O.a),s=Object(i.a)().skin,g=Object(c.f)(),N=Object(o.b)(),y=Object(d.f)({defaultValues:v}),k=y.control,w=y.setError,C=y.handleSubmit,F=y.formState.errors,L="dark"===s?"register-v2-dark.svg":"register-v2.svg",P=t(539)("./".concat(L)).default;return Object(p.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(p.jsxs)(f.ib,{className:"auth-inner m-0",children:[Object(p.jsxs)(l.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(p.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(p.jsxs)("defs",{children:[Object(p.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(p.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(p.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(p.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(p.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(p.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(p.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(p.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(p.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(p.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(p.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(p.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(p.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(p.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(p.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Vuexy"})]}),Object(p.jsx)(f.B,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(p.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(p.jsx)("img",{className:"img-fluid",src:P,alt:"Login Cover"})})}),Object(p.jsx)(f.B,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(p.jsxs)(f.B,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(p.jsx)(f.v,{tag:"h2",className:"fw-bold mb-1",children:"Adventure starts here \ud83d\ude80"}),Object(p.jsx)(f.u,{className:"mb-2",children:"Make your app management easy and fun!"}),Object(p.jsxs)(f.H,{action:"/",className:"auth-register-form mt-2",onSubmit:C((function(s){var t=Object(a.a)({},s);if(delete t.terms,Object.values(t).every((function(e){return e.length>0}))&&!0===s.terms){var r=s.username,c=s.email,l=s.password;n.a.register({username:r,email:c,password:l}).then((function(s){if(s.data.error)for(var t in s.data.error)null!==s.data.error[t]&&w(t,{type:"manual",message:s.data.error[t]});else{var r=Object(a.a)(Object(a.a)({},s.data.user),{},{accessToken:s.data.accessToken});e.update(s.data.user.ability),N(Object(j.b)(r)),g("/")}})).catch((function(e){return console.log(e)}))}else for(var i in s)0===s[i].length&&w(i,{type:"manual",message:"Please enter a valid ".concat(i)}),"terms"===i&&!1===s.terms&&w("terms",{type:"manual"})})),children:[Object(p.jsxs)("div",{className:"mb-1",children:[Object(p.jsx)(f.N,{className:"form-label",for:"register-username",children:"Username"}),Object(p.jsx)(d.a,{id:"username",name:"username",control:k,render:function(e){var s=e.field;return Object(p.jsx)(f.K,Object(a.a)({autoFocus:!0,placeholder:"johndoe",invalid:F.username&&!0},s))}}),F.username?Object(p.jsx)(f.I,{children:F.username.message}):null]}),Object(p.jsxs)("div",{className:"mb-1",children:[Object(p.jsx)(f.N,{className:"form-label",for:"register-email",children:"Email"}),Object(p.jsx)(d.a,{id:"email",name:"email",control:k,render:function(e){var s=e.field;return Object(p.jsx)(f.K,Object(a.a)({type:"email",placeholder:"john@example.com",invalid:F.email&&!0},s))}}),F.email?Object(p.jsx)(f.I,{children:F.email.message}):null]}),Object(p.jsxs)("div",{className:"mb-1",children:[Object(p.jsx)(f.N,{className:"form-label",for:"register-password",children:"Password"}),Object(p.jsx)(d.a,{id:"password",name:"password",control:k,render:function(e){var s=e.field;return Object(p.jsx)(h.a,Object(a.a)({className:"input-group-merge",invalid:F.password&&!0},s))}})]}),Object(p.jsxs)("div",{className:"form-check mb-1",children:[Object(p.jsx)(d.a,{name:"terms",control:k,render:function(e){var s=e.field;return Object(p.jsx)(f.K,Object(a.a)(Object(a.a)({},s),{},{id:"terms",type:"checkbox",checked:s.value,invalid:F.terms&&!0}))}}),Object(p.jsxs)(f.N,{className:"form-check-label",for:"terms",children:["I agree to",Object(p.jsx)("a",{className:"ms-25",href:"/",onClick:function(e){return e.preventDefault()},children:"privacy policy & terms"})]})]}),Object(p.jsx)(f.i,{type:"submit",block:!0,color:"primary",children:"Sign up"})]}),Object(p.jsxs)("p",{className:"text-center mt-2",children:[Object(p.jsx)("span",{className:"me-25",children:"Already have an account?"}),Object(p.jsx)(l.b,{to:"/login",children:Object(p.jsx)("span",{children:"Sign in instead"})})]}),Object(p.jsx)("div",{className:"divider my-2",children:Object(p.jsx)("div",{className:"divider-text",children:"or"})}),Object(p.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(p.jsx)(f.i,{color:"facebook",children:Object(p.jsx)(b.a,{size:14})}),Object(p.jsx)(f.i,{color:"twitter",children:Object(p.jsx)(m.a,{size:14})}),Object(p.jsx)(f.i,{color:"google",children:Object(p.jsx)(u.a,{size:14})}),Object(p.jsx)(f.i,{className:"me-0",color:"github",children:Object(p.jsx)(x.a,{size:14})})]})]})})]})})}},498:function(e,s,t){"use strict";var a=t(14),r=t(28),c=t(15),l=t(131),i=t(1),n=t(3),o=t.n(n),j=t(873),d=t(872),b=t(88),m=t(10),u=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],x=Object(i.forwardRef)((function(e,s){var t,n=e.label,x=e.hideIcon,O=e.showIcon,h=e.visible,f=e.className,p=e.htmlFor,v=e.placeholder,g=e.iconSize,N=e.inputClassName,y=e.invalid,k=Object(l.a)(e,u),w=Object(i.useState)(h),C=Object(c.a)(w,2),F=C[0],L=C[1];return Object(m.jsxs)(i.Fragment,{children:[n?Object(m.jsx)(b.N,{className:"form-label",for:p,children:n}):null,Object(m.jsxs)(b.L,{className:o()((t={},Object(r.a)(t,f,f),Object(r.a)(t,"is-invalid",y),t)),children:[Object(m.jsx)(b.K,Object(a.a)(Object(a.a)({ref:s,invalid:y,type:!1===F?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:o()(Object(r.a)({},N,N))},n&&p?{id:p}:{}),k)),Object(m.jsx)(b.M,{className:"cursor-pointer",onClick:function(){return L(!F)},children:function(){var e=g||14;return!1===F?x||Object(m.jsx)(j.a,{size:e}):O||Object(m.jsx)(d.a,{size:e})}()})]})]})}));s.a=x,x.defaultProps={visible:!1}},504:function(e,s,t){}}]);
//# sourceMappingURL=120.1b4ca67d.chunk.js.map