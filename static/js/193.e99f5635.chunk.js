(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[193],{1646:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(91),a=c(802),r=c.n(a),j=c(13),l=function(){return Object(j.jsxs)(s.l,{children:[Object(j.jsx)(s.p,{children:Object(j.jsx)(s.v,{tag:"h4",children:"Video"})}),Object(j.jsx)(s.m,{children:Object(j.jsx)(r.a,{width:"100%",controls:!0,className:"react-player-video",url:"http://youtube.com/watch?v=FCPdIvXo2rU"})})]})},i=c(18),o=c(264),d=c.n(o),u=function(e){return"0".concat(e).slice(-2)},b=function(e){var t=new Date(1e3*e),c=t.getUTCHours(),n=t.getUTCMinutes(),s=u(t.getUTCSeconds());return c?"".concat(c,":").concat(u(n),":").concat(s):"".concat(n,":").concat(s)},x=function(){var e=Object(n.useRef)(null),t="https://soundcloud.com/2ghost/we-will-rock-you",c=Object(n.useState)(t),a=Object(i.a)(c,2),l=a[0],o=a[1],u=Object(n.useState)(0),x=Object(i.a)(u,2),O=x[0],h=x[1],m=Object(n.useState)(0),p=Object(i.a)(m,2),f=p[0],y=p[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),N=v[0],k=v[1],C=Object(n.useState)(.75),S=Object(i.a)(C,2),P=S[0],F=S[1],w=Object(n.useState)(0),M=Object(i.a)(w,2),T=M[0],U=M[1],B=Object(n.useState)(null),L=Object(i.a)(B,2),D=L[0],E=L[1],R=Object(n.useState)(!1),V=Object(i.a)(R,2),A=V[0],H=V[1];Object(n.useEffect)((function(){d.a.highlightAll()}));Object(n.useEffect)((function(){null===l&&function(e){o(e),h(0),y(0)}(t)}));var I=function(e){var t=e.className,c=e.seconds;return Object(j.jsx)("time",{dateTime:"P".concat(Math.round(c),"S"),className:t,children:b(c)})},J=Object(j.jsx)(I,{seconds:T}),X=Object(j.jsx)(I,{seconds:T*O}),q=Object(j.jsx)(I,{seconds:T*(1-O)});return Object(j.jsxs)(s.l,{className:"overflow-hidden",children:[Object(j.jsx)(s.p,{children:Object(j.jsx)(s.v,{tag:"h4",children:"Audio"})}),Object(j.jsx)(s.m,{children:Object(j.jsxs)(s.jb,{children:[Object(j.jsx)(s.B,{xs:12,children:Object(j.jsx)(r.a,{ref:e,url:l,className:"react-player-audio",width:"500px",height:"290px",playing:A,volume:P,muted:N,onPlay:function(){return H(!0)},onPause:function(){return H(!1)},onSeek:function(e){return console.log("onSeek",e)},onProgress:function(e){D||(h(e.played),y(e.loaded))},onDuration:function(e){return U(e)}})}),Object(j.jsx)(s.B,{xs:12,children:Object(j.jsx)(s.nb,{borderless:!0,className:"mt-2",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Controls"}),Object(j.jsxs)("td",{children:[Object(j.jsx)(s.i,{variant:"primary",outline:!0,onClick:function(){H(!1),o(null)},className:"my-25 me-50",children:"Stop"}),Object(j.jsx)(s.i,{variant:"primary",outline:!0,onClick:function(){return H(!A)},className:"my-25",children:A?"Pause":"Play"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Seek"}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"range",min:0,max:.999999,step:"any",value:O,onMouseDown:function(){return E(!0)},onChange:function(e){h(parseFloat(e.target.value))},onMouseUp:function(t){E(!1),e.current.seekTo(parseFloat(t.target.value))}})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Volume"}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"range",min:0,max:1,step:"any",value:P,onChange:function(e){return F(parseFloat(e.target.value))}})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Muted"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-check",children:Object(j.jsx)(s.L,{type:"checkbox",id:"audioMuted",checked:N,onChange:function(){return k(!N)}})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Played"}),Object(j.jsx)("td",{children:Object(j.jsx)(s.ib,{value:O,max:1})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Loaded"}),Object(j.jsx)("td",{children:Object(j.jsx)(s.ib,{value:f,max:1})})]})]})})}),Object(j.jsx)(s.B,{xs:12,children:Object(j.jsx)("pre",{className:"language-js",children:Object(j.jsx)("code",{className:"language-js",children:"state={\n  playing: ".concat(A,",\n  volume: ").concat(P.toFixed(2),",\n  played: ").concat(O.toFixed(2),",\n  loaded: ").concat(f.toFixed(2),",\n  duration: ").concat(b(J.props.seconds),",\n  elapsed: ").concat(b(X.props.seconds),",\n  remaining: ").concat(b(q.props.seconds),"\n}\n")})})})]})})]})},O=c(22),h=c(1490),m=c.n(h),p=function(e){return"0".concat(e).slice(-2)},f=function(e){var t=new Date(1e3*e),c=t.getUTCHours(),n=t.getUTCMinutes(),s=p(t.getUTCSeconds());return c?"".concat(c,":").concat(p(n),":").concat(s):"".concat(n,":").concat(s)},y=function(){var e=Object(n.useRef)(null),t="http://youtube.com/watch?v=FCPdIvXo2rU",c=Object(n.useState)(t),a=Object(i.a)(c,2),l=a[0],o=a[1],u=Object(n.useState)(0),b=Object(i.a)(u,2),x=b[0],h=b[1],p=Object(n.useState)(0),y=Object(i.a)(p,2),g=y[0],v=y[1],N=Object(n.useState)(!1),k=Object(i.a)(N,2),C=k[0],S=k[1],P=Object(n.useState)(!1),F=Object(i.a)(P,2),w=F[0],M=F[1],T=Object(n.useState)(.75),U=Object(i.a)(T,2),B=U[0],L=U[1],D=Object(n.useState)(0),E=Object(i.a)(D,2),R=E[0],V=E[1],A=Object(n.useState)(null),H=Object(i.a)(A,2),I=H[0],J=H[1],X=Object(n.useState)(!1),q=Object(i.a)(X,2),_=q[0],z=q[1],G=Object(n.useState)(!1),K=Object(i.a)(G,2),Q=K[0],W=K[1],Y=Object(n.useState)(1),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1];Object(n.useEffect)((function(){d.a.highlightAll()}));Object(n.useEffect)((function(){null===l&&function(e){o(e),h(0),v(0)}(t)}));var te=function(e){return ee(parseFloat(e.target.value))},ce=function(e){var t=e.className,c=e.seconds;return Object(j.jsx)("time",{dateTime:"P".concat(Math.round(c),"S"),className:t,children:f(c)})},ne=Object(j.jsx)(ce,{seconds:R}),se=Object(j.jsx)(ce,{seconds:R*x}),ae=Object(j.jsx)(ce,{seconds:R*(1-x)});return Object(j.jsxs)(s.l,{children:[Object(j.jsx)(s.p,{children:Object(j.jsx)(s.v,{tag:"h4",children:"Controlled Video"})}),Object(j.jsx)(s.m,{children:Object(j.jsx)(s.jb,{children:Object(j.jsx)(s.B,{xs:12,children:Object(j.jsx)(r.a,{ref:e,url:l,className:"react-player-video",width:"100%",playing:_,controls:Q,loop:C,playbackRate:$,volume:B,muted:w,onPlay:function(){return z(!0)},onPause:function(){return z(!1)},onEnded:function(){return z(C)},onProgress:function(e){I||(h(e.played),v(e.loaded))},onDuration:function(e){return V(e)},config:{youtube:{embedOptions:{"allow-same-origin":!0}}}})})})}),Object(j.jsx)(s.nb,{borderless:!0,children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Controls"}),Object(j.jsxs)("td",{children:[Object(j.jsx)(s.i,{color:"primary",outline:!0,onClick:function(){z(!1),o(null)},className:"my-25 me-50",children:"Stop"}),Object(j.jsx)(s.i,{color:"primary",outline:!0,onClick:function(){return z(!_)},className:"my-25 me-50",children:_?"Pause":"Play"}),Object(j.jsx)(s.i,{color:"primary",outline:!0,onClick:function(){m.a.request(Object(O.findDOMNode)(e.current))},className:"my-25",children:"Fullscreen"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Speed"}),Object(j.jsxs)("td",{children:[Object(j.jsx)(s.i,{color:"primary",outline:!0,onClick:te,value:1,className:"my-25 me-50",active:1===$,children:"1x"}),Object(j.jsx)(s.i,{color:"primary",outline:!0,onClick:te,value:1.5,className:"my-25 me-50",active:1.5===$,children:"1.5x"}),Object(j.jsx)(s.i,{color:"primary",outline:!0,onClick:te,value:2,active:2===$,children:"2x"})]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Seek"}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"range",min:0,max:.999999,step:"any",value:x,onMouseDown:function(){return J(!0)},onChange:function(e){h(parseFloat(e.target.value))},onMouseUp:function(t){J(!1),e.current.seekTo(parseFloat(t.target.value))}})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Volume"}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"range",min:0,max:1,step:"any",value:B,onChange:function(e){return L(parseFloat(e.target.value))}})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Controls"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-check",children:Object(j.jsx)(s.L,{type:"checkbox",id:"videoControls",checked:Q,onChange:function(){W(!Q),o(null)}})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Muted"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-check",children:Object(j.jsx)(s.L,{type:"checkbox",id:"videoMuted",checked:w,onChange:function(){return M(!w)}})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Loop"}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"form-check",children:Object(j.jsx)(s.L,{type:"checkbox",id:"videoLoop",checked:C,onChange:function(){return S(!C)}})})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Played"}),Object(j.jsx)("td",{children:Object(j.jsx)(s.ib,{value:x,max:1})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text-end",children:"Loaded"}),Object(j.jsx)("td",{children:Object(j.jsx)(s.ib,{value:g,max:1})})]})]})}),Object(j.jsx)(s.m,{children:Object(j.jsx)(s.jb,{children:Object(j.jsx)(s.B,{xs:12,children:Object(j.jsx)("pre",{className:"language-js",children:Object(j.jsx)("code",{className:"language-js",children:"state={\n  playing: ".concat(_,",\n  volume: ").concat(B.toFixed(2),",\n  played: ").concat(x.toFixed(2),",\n  loaded: ").concat(g.toFixed(2),",\n  duration: ").concat(f(ne.props.seconds),",\n  elapsed: ").concat(f(se.props.seconds),",\n  remaining: ").concat(f(ae.props.seconds),"\n}\n")})})})})})]})},g=c(527);t.default=function(){return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(g.a,{title:"React Player",subTitle:"React Media Player",link:"https://github.com/CookPete/react-player"}),Object(j.jsxs)(s.jb,{children:[Object(j.jsx)(s.B,{sm:"12",children:Object(j.jsx)(l,{})}),Object(j.jsx)(s.B,{sm:"12",children:Object(j.jsx)(y,{})}),Object(j.jsx)(s.B,{sm:"12",children:Object(j.jsx)(x,{})})]})]})}},527:function(e,t,c){"use strict";var n=c(91),s=c(13);t.a=function(e){return Object(s.jsx)(n.jb,{className:"mb-2",children:Object(s.jsxs)(n.B,{sm:"12",className:"ms-50",children:[Object(s.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(s.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}}]);
//# sourceMappingURL=193.e99f5635.chunk.js.map