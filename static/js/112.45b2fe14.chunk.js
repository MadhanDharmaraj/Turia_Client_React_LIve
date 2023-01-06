(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[112],{1186:function(e,s,c){},1646:function(e,s,c){"use strict";c.r(s);var a=c(18),t=c(1),l=c(17),n=c(22),i=c.n(n),r=c(503),j=c(156),d=c(133),b=c(6),o=c.n(b),h=c(545),m=c.n(h),u=c(835),O=c(921),x=c(932),N=c(970),f=c(839),g=c(928),p=c(923),v=c(908),k=c(943),w=c(91),y=c(12),C=function(e){var s=e.handleUser,c=e.handleUserSidebarRight,n=e.handleSidebar,b=e.store,h=e.userSidebarLeft,C=b.userProfile,S=b.selectedUser,z=Object(t.useRef)(null),L=Object(d.b)(),M=Object(t.useState)(""),U=Object(a.a)(M,2),D=U[0],E=U[1];Object(t.useEffect)((function(){Object.keys(S).length&&(i.a.findDOMNode(z.current).scrollTop=Number.MAX_SAFE_INTEGER)}),[S]);var I=Object.keys(S).length&&S.chat?m.a:"div";return Object(y.jsxs)("div",{className:"chat-app-window",children:[Object(y.jsxs)("div",{className:o()("start-chat-area",{"d-none":Object.keys(S).length}),children:[Object(y.jsx)("div",{className:"start-chat-icon mb-1",children:Object(y.jsx)(u.a,{})}),Object(y.jsx)("h4",{className:"sidebar-toggle start-chat-text",onClick:function(){!Object.keys(S).length&&!h&&window.innerWidth<992&&n()},children:"Start Conversation"})]}),Object.keys(S).length?Object(y.jsxs)("div",{className:o()("active-chat",{"d-none":null===S}),children:[Object(y.jsx)("div",{className:"chat-navbar",children:Object(y.jsxs)("header",{className:"chat-header",children:[Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)("div",{className:"sidebar-toggle d-block d-lg-none me-1",onClick:n,children:Object(y.jsx)(O.a,{size:21})}),Object(y.jsx)(r.a,{imgHeight:"36",imgWidth:"36",img:S.contact.avatar,status:S.contact.status,className:"avatar-border user-profile-toggle m-0 me-1",onClick:function(){return e=S.contact,c(),void s(e);var e}}),Object(y.jsx)("h6",{className:"mb-0",children:S.contact.fullName})]}),Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)(x.a,{size:18,className:"cursor-pointer d-sm-block d-none me-1"}),Object(y.jsx)(N.a,{size:18,className:"cursor-pointer d-sm-block d-none me-1"}),Object(y.jsx)(f.a,{size:18,className:"cursor-pointer d-sm-block d-none"}),Object(y.jsxs)(w.xb,{className:"more-options-dropdown",children:[Object(y.jsx)(w.G,{className:"btn-icon",color:"transparent",size:"sm",children:Object(y.jsx)(g.a,{size:"18"})}),Object(y.jsxs)(w.F,{end:!0,children:[Object(y.jsx)(w.E,{href:"/",onClick:function(e){return e.preventDefault()},children:"View Contact"}),Object(y.jsx)(w.E,{href:"/",onClick:function(e){return e.preventDefault()},children:"Mute Notifications"}),Object(y.jsx)(w.E,{href:"/",onClick:function(e){return e.preventDefault()},children:"Block Contact"}),Object(y.jsx)(w.E,{href:"/",onClick:function(e){return e.preventDefault()},children:"Clear Chat"}),Object(y.jsx)(w.E,{href:"/",onClick:function(e){return e.preventDefault()},children:"Report"})]})]})]})]})}),Object(y.jsx)(I,{ref:z,className:"user-chats",options:{wheelPropagation:!1},children:S.chat?Object(y.jsx)("div",{className:"chats",children:function(){var e=[];S.chat&&(e=S.chat.chat);var s=[],c=e[0]?e[0].senderId:void 0,a={senderId:c,messages:[]};return e.forEach((function(t,l){c===t.senderId?a.messages.push({msg:t.message,time:t.time}):(c=t.senderId,s.push(a),a={senderId:t.senderId,messages:[{msg:t.message,time:t.time}]}),l===e.length-1&&s.push(a)})),s}().map((function(e,s){return Object(y.jsxs)("div",{className:o()("chat",{"chat-left":11!==e.senderId}),children:[Object(y.jsx)("div",{className:"chat-avatar",children:Object(y.jsx)(r.a,{imgWidth:36,imgHeight:36,className:"box-shadow-1 cursor-pointer",img:11===e.senderId?C.avatar:S.contact.avatar})}),Object(y.jsx)("div",{className:"chat-body",children:e.messages.map((function(e){return Object(y.jsx)("div",{className:"chat-content",children:Object(y.jsx)("p",{children:e.msg})},e.msg)}))})]},s)}))}):null}),Object(y.jsxs)(w.H,{className:"chat-app-form",onSubmit:function(e){return function(e){e.preventDefault(),D.length&&(L(Object(j.e)(Object(l.a)(Object(l.a)({},S),{},{message:D}))),E(""))}(e)},children:[Object(y.jsxs)(w.M,{className:"input-group-merge me-1 form-send-message",children:[Object(y.jsx)(w.N,{children:Object(y.jsx)(p.a,{className:"cursor-pointer",size:14})}),Object(y.jsx)(w.L,{value:D,onChange:function(e){return E(e.target.value)},placeholder:"Type your message or use speech to text"}),Object(y.jsx)(w.N,{children:Object(y.jsxs)(w.O,{className:"attachment-icon mb-0",for:"attach-doc",children:[Object(y.jsx)(v.a,{className:"cursor-pointer text-secondary",size:14}),Object(y.jsx)("input",{type:"file",id:"attach-doc",hidden:!0})]})})]}),Object(y.jsxs)(w.i,{className:"send",color:"primary",children:[Object(y.jsx)(k.a,{size:14,className:"d-lg-none"}),Object(y.jsx)("span",{className:"d-none d-lg-block",children:"Send"})]})]})]}):null]})},S=c(135),z=c(509),L=c(825),M=c(860),U=c(853),D=c(832),E=c(962),I=function(e){var s=e.store,c=e.sidebar,l=e.handleSidebar,n=e.userSidebarLeft,i=e.handleUserSidebarLeft,b=s.chats,h=s.contacts,u=s.userProfile,O=Object(d.b)(),x=Object(t.useState)(""),N=Object(a.a)(x,2),g=N[0],p=N[1],v=Object(t.useState)(""),k=Object(a.a)(v,2),C=k[0],I=k[1],A=Object(t.useState)(0),R=Object(a.a)(A,2),P=R[0],F=R[1],H=Object(t.useState)("online"),W=Object(a.a)(H,2),T=W[0],B=W[1],V=Object(t.useState)([]),G=Object(a.a)(V,2),J=G[0],_=G[1],X=Object(t.useState)([]),q=Object(a.a)(X,2),K=q[0],Q=q[1],Y=function(e){O(Object(j.d)(e)),F(e),!0===c&&l()};Object(t.useEffect)((function(){Object(z.f)(s.selectedUser)||(s.selectedUser.chat?F(s.selectedUser.chat.id):F(s.selectedUser.contact.id))}),[]);return s?Object(y.jsx)("div",{className:"sidebar-left",children:Object(y.jsxs)("div",{className:"sidebar",children:[Object(y.jsxs)("div",{className:o()("chat-profile-sidebar",{show:n}),children:[Object(y.jsxs)("header",{className:"chat-profile-header",children:[Object(y.jsx)("div",{className:"close-icon",onClick:i,children:Object(y.jsx)(L.a,{size:14})}),Object(y.jsxs)("div",{className:"header-profile-sidebar",children:[Object(y.jsx)(r.a,{className:"box-shadow-1 avatar-border",img:u.avatar,status:T,size:"xl"}),Object(y.jsx)("h4",{className:"chat-user-name",children:u.fullName}),Object(y.jsx)("span",{className:"user-post",children:u.role})]})]}),Object(y.jsxs)(m.a,{className:"profile-sidebar-area",options:{wheelPropagation:!1},children:[Object(y.jsx)("h6",{className:"section-label mb-1",children:"About"}),Object(y.jsxs)("div",{className:"about-user",children:[Object(y.jsx)(w.L,{rows:"5",type:"textarea",defaultValue:u.about,onChange:function(e){return I(e.target.value)},className:o()("char-textarea",{"text-danger":C&&C.length>120})}),Object(y.jsxs)("small",{className:"counter-value float-end",children:[Object(y.jsx)("span",{className:"char-count",children:u&&u.about&&u.about.length&&0===C.length?u.about.length:C.length})," / 120"]})]}),Object(y.jsx)("h6",{className:"section-label mb-1 mt-3",children:"Status"}),Object(y.jsxs)("ul",{className:"list-unstyled user-status",children:[Object(y.jsx)("li",{className:"pb-1",children:Object(y.jsxs)("div",{className:"form-check form-check-success",children:[Object(y.jsx)(w.L,{type:"radio",label:"Online",id:"user-online",checked:"online"===T,onChange:function(){return B("online")}}),Object(y.jsx)(w.O,{className:"form-check-label",for:"user-online",children:"Online"})]})}),Object(y.jsx)("li",{className:"pb-1",children:Object(y.jsxs)("div",{className:"form-check form-check-danger",children:[Object(y.jsx)(w.L,{type:"radio",id:"user-busy",label:"Do Not Disturb",checked:"busy"===T,onChange:function(){return B("busy")}}),Object(y.jsx)(w.O,{className:"form-check-label",for:"user-busy",children:"Busy"})]})}),Object(y.jsx)("li",{className:"pb-1",children:Object(y.jsxs)("div",{className:"form-check form-check-warning",children:[Object(y.jsx)(w.L,{type:"radio",label:"Away",id:"user-away",checked:"away"===T,onChange:function(){return B("away")}}),Object(y.jsx)(w.O,{className:"form-check-label",for:"user-away",children:"Away"})]})}),Object(y.jsx)("li",{className:"pb-1",children:Object(y.jsxs)("div",{className:"form-check form-check-secondary",children:[Object(y.jsx)(w.L,{type:"radio",label:"Offline",id:"user-offline",checked:"offline"===T,onChange:function(){return B("offline")}}),Object(y.jsx)(w.O,{className:"form-check-label",for:"user-offline",children:"Offline"})]})})]}),Object(y.jsx)("h6",{className:"section-label mb-1 mt-2",children:"Settings"}),Object(y.jsxs)("ul",{className:"list-unstyled",children:[Object(y.jsxs)("li",{className:"d-flex justify-content-between align-items-center mb-1",children:[Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)(M.a,{className:"me-75",size:"18"}),Object(y.jsx)("span",{className:"align-middle",children:"Two-step Verification"})]}),Object(y.jsx)("div",{className:"form-switch",children:Object(y.jsx)(w.L,{type:"switch",id:"verification",name:"verification",defaultChecked:!0})})]}),Object(y.jsxs)("li",{className:"d-flex justify-content-between align-items-center mb-1",children:[Object(y.jsxs)("div",{className:"d-flex align-items-center",children:[Object(y.jsx)(U.a,{className:"me-75",size:"18"}),Object(y.jsx)("span",{className:"align-middle",children:"Notification"})]}),Object(y.jsx)("div",{className:"form-switch",children:Object(y.jsx)(w.L,{type:"switch",id:"notifications",name:"notifications"})})]}),Object(y.jsxs)("li",{className:"d-flex align-items-center cursor-pointer mb-1",children:[Object(y.jsx)(D.a,{className:"me-75",size:"18"}),Object(y.jsx)("span",{className:"align-middle",children:"Invite Friends"})]}),Object(y.jsxs)("li",{className:"d-flex align-items-center cursor-pointer",children:[Object(y.jsx)(E.a,{className:"me-75",size:"18"}),Object(y.jsx)("span",{className:"align-middle",children:"Delete Account"})]})]}),Object(y.jsx)("div",{className:"mt-3",children:Object(y.jsx)(w.i,{color:"primary",children:"Logout"})})]})]}),Object(y.jsxs)("div",{className:o()("sidebar-content",{show:!0===c}),children:[Object(y.jsx)("div",{className:"sidebar-close-icon",onClick:l,children:Object(y.jsx)(L.a,{size:14})}),Object(y.jsx)("div",{className:"chat-fixed-search",children:Object(y.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(y.jsx)("div",{className:"sidebar-profile-toggle",onClick:i,children:Object.keys(u).length?Object(y.jsx)(r.a,{className:"avatar-border",img:u.avatar,status:T,imgHeight:"42",imgWidth:"42"}):null}),Object(y.jsxs)(w.M,{className:"input-group-merge ms-1 w-100",children:[Object(y.jsx)(w.N,{className:"round",children:Object(y.jsx)(f.a,{className:"text-muted",size:14})}),Object(y.jsx)(w.L,{value:g,className:"round",placeholder:"Search or start a new chat",onChange:function(e){p(e.target.value);var s=function(s){return s.fullName.toLowerCase().includes(e.target.value.toLowerCase())},c=b.filter(s),a=h.filter(s);_(Object(S.a)(c)),Q(Object(S.a)(a))}})]})]})}),Object(y.jsxs)(m.a,{className:"chat-user-list-wrapper list-group",options:{wheelPropagation:!1},children:[Object(y.jsx)("h4",{className:"chat-list-title",children:"Chats"}),Object(y.jsx)("ul",{className:"chat-users-list chat-list media-list",children:b&&b.length?g.length&&!J.length?Object(y.jsx)("li",{className:"no-results show",children:Object(y.jsx)("h6",{className:"mb-0",children:"No Chats Found"})}):(g.length&&J.length?J:b).map((function(e){var s=Object(z.b)(e.chat.lastMessage?e.chat.lastMessage.time:new Date);return Object(y.jsxs)("li",{onClick:function(){return Y(e.id)},className:o()({active:P===e.id}),children:[Object(y.jsx)(r.a,{img:e.avatar,imgHeight:"42",imgWidth:"42",status:e.status}),Object(y.jsxs)("div",{className:"chat-info flex-grow-1",children:[Object(y.jsx)("h5",{className:"mb-0",children:e.fullName}),Object(y.jsx)(w.u,{className:"text-truncate",children:e.chat.lastMessage?e.chat.lastMessage.message:b[b.length-1].message})]}),Object(y.jsxs)("div",{className:"chat-meta text-nowrap",children:[Object(y.jsx)("small",{className:"float-end mb-25 chat-time ms-25",children:s}),e.chat.unseenMsgs>=1?Object(y.jsx)(w.f,{className:"float-end",color:"danger",pill:!0,children:e.chat.unseenMsgs}):null]})]},e.id)})):null}),Object(y.jsx)("h4",{className:"chat-list-title",children:"Contacts"}),Object(y.jsx)("ul",{className:"chat-users-list contact-list media-list",children:h&&h.length?g.length&&!K.length?Object(y.jsx)("li",{className:"no-results show",children:Object(y.jsx)("h6",{className:"mb-0",children:"No Chats Found"})}):(g.length&&K.length?K:h).map((function(e){return Object(y.jsxs)("li",{onClick:function(){return Y(e.id)},children:[Object(y.jsx)(r.a,{img:e.avatar,imgHeight:"42",imgWidth:"42"}),Object(y.jsxs)("div",{className:"chat-info flex-grow-1",children:[Object(y.jsx)("h5",{className:"mb-0",children:e.fullName}),Object(y.jsx)(w.u,{className:"text-truncate",children:e.about})]})]},e.fullName)})):null})]})]})]})}):null},A=c(833),R=c(868),P=c(958),F=c(955),H=c(951),W=function(e){var s=e.user,c=e.handleUserSidebarRight,a=e.userSidebarRight;return Object(y.jsxs)("div",{className:o()("user-profile-sidebar",{show:!0===a}),children:[Object(y.jsxs)("header",{className:"user-profile-header",children:[Object(y.jsx)("span",{className:"close-icon",onClick:c,children:Object(y.jsx)(L.a,{size:14})}),Object(y.jsxs)("div",{className:"header-profile-sidebar",children:[Object(y.jsx)(r.a,{className:"box-shadow-1 avatar-border",size:"xl",status:s.status,img:s.avatar,imgHeight:"70",imgWidth:"70"}),Object(y.jsx)("h4",{className:"chat-user-name",children:s.fullName}),Object(y.jsx)("span",{className:"user-post",children:s.role})]})]}),Object(y.jsxs)(m.a,{className:"user-profile-sidebar-area",options:{wheelPropagation:!1},children:[Object(y.jsx)("h6",{className:"section-label mb-1",children:"About"}),Object(y.jsx)("p",{children:s.about}),Object(y.jsxs)("div",{className:"personal-info",children:[Object(y.jsx)("h6",{className:"section-label mb-1 mt-3",children:"Personal Information"}),Object(y.jsxs)("ul",{className:"list-unstyled",children:[Object(y.jsxs)("li",{className:"mb-1",children:[Object(y.jsx)(A.a,{className:"me-75",size:17}),Object(y.jsx)("span",{className:"align-middle",children:"lucifer@email.com"})]}),Object(y.jsxs)("li",{className:"mb-1",children:[Object(y.jsx)(x.a,{className:"me-50",size:17}),Object(y.jsx)("span",{className:"align-middle",children:" +1(123) 456 - 7890"})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)(R.a,{className:"me-50",size:17}),Object(y.jsx)("span",{className:"align-middle",children:" Mon - Fri 10AM - 8PM"})]})]})]}),Object(y.jsxs)("div",{className:"more-options",children:[Object(y.jsx)("h6",{className:"section-label mb-1 mt-3",children:"Options"}),Object(y.jsxs)("ul",{className:"list-unstyled",children:[Object(y.jsxs)("li",{className:"cursor-pointer mb-1",children:[Object(y.jsx)(P.a,{className:"me-50",size:17}),Object(y.jsx)("span",{className:"align-middle",children:" Add Tag"})]}),Object(y.jsxs)("li",{className:"cursor-pointer mb-1",children:[Object(y.jsx)(F.a,{className:"me-50",size:17}),Object(y.jsx)("span",{className:"align-middle",children:" Important Contact"})]}),Object(y.jsxs)("li",{className:"cursor-pointer mb-1",children:[Object(y.jsx)(v.a,{className:"me-50",size:17}),Object(y.jsx)("span",{className:"align-middle",children:" Shared Media"})]}),Object(y.jsxs)("li",{className:"cursor-pointer mb-1",children:[Object(y.jsx)(E.a,{className:"me-50",size:17}),Object(y.jsx)("span",{className:"align-middle",children:" Delete Contact"})]}),Object(y.jsxs)("li",{className:"cursor-pointer",children:[Object(y.jsx)(H.a,{className:"me-75",size:17}),Object(y.jsx)("span",{className:"align-middle",children:"Block Contact"})]})]})]})]})]})};c(1186),c(729),s.default=function(){var e=Object(d.b)(),s=Object(d.c)((function(e){return e.chat})),c=Object(t.useState)({}),l=Object(a.a)(c,2),n=l[0],i=l[1],r=Object(t.useState)(!1),b=Object(a.a)(r,2),h=b[0],m=b[1],u=Object(t.useState)(!1),O=Object(a.a)(u,2),x=O[0],N=O[1],f=Object(t.useState)(!1),g=Object(a.a)(f,2),p=g[0],v=g[1],k=function(){return m(!h)},w=function(){return N(!x)};return Object(t.useEffect)((function(){e(Object(j.b)()),e(Object(j.c)())}),[e]),Object(y.jsxs)(t.Fragment,{children:[Object(y.jsx)(I,{store:s,sidebar:h,handleSidebar:k,userSidebarLeft:p,handleUserSidebarLeft:function(){return v(!p)}}),Object(y.jsx)("div",{className:"content-right",children:Object(y.jsx)("div",{className:"content-wrapper",children:Object(y.jsxs)("div",{className:"content-body",children:[Object(y.jsx)("div",{className:o()("body-content-overlay",{show:!0===x||!0===h||!0===p}),onClick:function(){m(!1),N(!1),v(!1)}}),Object(y.jsx)(C,{store:s,handleUser:function(e){return i(e)},handleSidebar:k,userSidebarLeft:p,handleUserSidebarRight:w}),Object(y.jsx)(W,{user:n,userSidebarRight:x,handleUserSidebarRight:w})]})})})]})}},729:function(e,s,c){}}]);
//# sourceMappingURL=112.45b2fe14.chunk.js.map