(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[113],{1512:function(e,s,c){"use strict";c.r(s);var t=c(18),a=c(1),l=c(7),i=c.n(l),n=c(6),r=c.n(n),j=c(868),d=c(827),b=c(847),m=c(936),o=c(892),h=c(893),x=c(884),O=c(956),g=c(905),u=c(513),N=c(772),p=c(506),f=c(505),v=c(91),y=(c(689),c(92)),k=c(13);s.default=function(){var e=Object(a.useState)(null),s=Object(t.a)(e,2),c=s[0],l=s[1];Object(a.useEffect)((function(){i.a.get("/blog/list/data/detail").then((function(e){return l(e.data)}))}),[]);var n={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(k.jsxs)(a.Fragment,{children:[Object(k.jsx)(f.a,{title:"Blog Details",data:[{title:"Pages"},{title:"Blog"},{title:"Details"}]}),Object(k.jsxs)("div",{className:"blog-wrapper",children:[Object(k.jsx)("div",{className:"content-detached content-left",children:Object(k.jsx)("div",{className:"content-body",children:null!==c?Object(k.jsxs)(v.jb,{children:[Object(k.jsx)(v.B,{sm:"12",children:Object(k.jsxs)(v.l,{className:"mb-3",children:[Object(k.jsx)(v.q,{src:c.blog.img,className:"img-fluid",top:!0}),Object(k.jsxs)(v.m,{children:[Object(k.jsx)(v.v,{tag:"h4",children:c.blog.title}),Object(k.jsxs)("div",{className:"d-flex",children:[Object(k.jsx)(p.a,{className:"me-50",img:c.blog.avatar,imgHeight:"24",imgWidth:"24"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("small",{className:"text-muted me-25",children:"by"}),Object(k.jsx)("small",{children:Object(k.jsx)("a",{className:"text-body",href:"/",onClick:function(e){return e.preventDefault()},children:c.blog.userFullName})}),Object(k.jsx)("span",{className:"text-muted ms-50 me-25",children:"|"}),Object(k.jsx)("small",{className:"text-muted",children:c.blog.createdTime})]})]}),Object(k.jsx)("div",{className:"my-1 py-25",children:c.blog.tags.map((function(e,s){return Object(k.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(k.jsx)(v.f,{className:r()({"me-50":s!==c.blog.tags.length-1}),color:n[e],pill:!0,children:e})},s)}))}),Object(k.jsx)("div",{dangerouslySetInnerHTML:{__html:c.blog.content}}),Object(k.jsxs)("div",{className:"d-flex",children:[Object(k.jsx)("div",{children:Object(k.jsx)(p.a,{img:y.default,className:"me-2",imgHeight:"60",imgWidth:"60"})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h6",{className:"fw-bolder",children:"Willie Clark"}),Object(k.jsx)(v.u,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),Object(k.jsx)("hr",{className:"my-2"}),Object(k.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(k.jsxs)("div",{className:"d-flex align-items-center",children:[Object(k.jsxs)("div",{className:"d-flex align-items-center me-1",children:[Object(k.jsx)("a",{className:"me-50",href:"/",onClick:function(e){return e.preventDefault()},children:Object(k.jsx)(d.a,{size:21,className:"text-body align-middle"})}),Object(k.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(k.jsx)("div",{className:"text-body align-middle",children:Object(u.h)(c.blog.comments)})})]}),Object(k.jsxs)("div",{className:"d-flex align-items-cente",children:[Object(k.jsx)("a",{className:"me-50",href:"/",onClick:function(e){return e.preventDefault()},children:Object(k.jsx)(b.a,{size:21,className:"text-body align-middle"})}),Object(k.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(k.jsx)("div",{className:"text-body align-middle",children:c.blog.bookmarked})})]})]}),Object(k.jsxs)(v.xb,{className:"dropdown-icon-wrapper",children:[Object(k.jsx)(v.G,{tag:"span",children:Object(k.jsx)(m.a,{size:21,className:"text-body cursor-pointer"})}),Object(k.jsxs)(v.F,{end:!0,children:[Object(k.jsx)(v.E,{className:"py-50 px-1",children:Object(k.jsx)(o.a,{size:18})}),Object(k.jsx)(v.E,{className:"py-50 px-1",children:Object(k.jsx)(h.a,{size:18})}),Object(k.jsx)(v.E,{className:"py-50 px-1",children:Object(k.jsx)(x.a,{size:18})}),Object(k.jsx)(v.E,{className:"py-50 px-1",children:Object(k.jsx)(O.a,{size:18})}),Object(k.jsx)(v.E,{className:"py-50 px-1",children:Object(k.jsx)(g.a,{size:18})})]})]})]})]})]})}),Object(k.jsxs)(v.B,{sm:"12",id:"blogComment",children:[Object(k.jsx)("h6",{className:"section-label",children:"Comment"}),c.comments.map((function(e){return Object(k.jsx)(v.l,{className:"mb-3",children:Object(k.jsx)(v.m,{children:Object(k.jsxs)("div",{className:"d-flex",children:[Object(k.jsx)("div",{children:Object(k.jsx)(p.a,{className:"me-75",img:e.avatar,imgHeight:"38",imgWidth:"38"})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h6",{className:"fw-bolder mb-25",children:e.userFullName}),Object(k.jsx)(v.u,{children:e.commentedAt}),Object(k.jsx)(v.u,{children:e.commentText}),Object(k.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(k.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(k.jsx)(j.a,{size:18,className:"me-50"}),Object(k.jsx)("span",{children:"Reply"})]})})]})]})})},e.userFullName)}))]}),Object(k.jsxs)(v.B,{sm:"12",children:[Object(k.jsx)("h6",{className:"section-label",children:"Leave a Comment"}),Object(k.jsx)(v.l,{children:Object(k.jsx)(v.m,{children:Object(k.jsx)(v.H,{className:"form",onSubmit:function(e){return e.preventDefault()},children:Object(k.jsxs)(v.jb,{children:[Object(k.jsx)(v.B,{sm:"6",children:Object(k.jsx)("div",{className:"mb-2",children:Object(k.jsx)(v.L,{placeholder:"Name"})})}),Object(k.jsx)(v.B,{sm:"6",children:Object(k.jsx)("div",{className:"mb-2",children:Object(k.jsx)(v.L,{type:"email",placeholder:"Email"})})}),Object(k.jsx)(v.B,{sm:"6",children:Object(k.jsx)("div",{className:"mb-2",children:Object(k.jsx)(v.L,{type:"url",placeholder:"Website"})})}),Object(k.jsx)(v.B,{sm:"12",children:Object(k.jsx)("div",{className:"mb-2",children:Object(k.jsx)(v.L,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),Object(k.jsx)(v.B,{sm:"12",children:Object(k.jsxs)("div",{className:"form-check mb-2",children:[Object(k.jsx)(v.L,{type:"checkbox",id:"save-data-checkbox"}),Object(k.jsx)(v.O,{className:"form-check-label",for:"save-data-checkbox",children:"Save my name, email, and website in this browser for the next time I comment."})]})}),Object(k.jsx)(v.B,{sm:"12",children:Object(k.jsx)(v.i,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),Object(k.jsx)(N.a,{})]})]})}},505:function(e,s,c){"use strict";var t=c(17),a=c(1),l=c(132),i=c(6),n=c.n(i),r=c(895),j=c(851),d=c(827),b=c(825),m=c(826),o=c(91),h=c(13);s.a=function(e){var s=e.data,c=e.title;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[c?Object(h.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(o.g,{children:[Object(h.jsx)(o.h,{tag:"li",children:Object(h.jsx)(l.b,{to:"/",children:"Home"})}),s.map((function(e,c){var i=e.link?l.b:a.Fragment,r=s.length-1===c;return Object(h.jsx)(o.h,{tag:"li",active:!r,className:n()({"text-primary":!r}),children:Object(h.jsx)(i,Object(t.a)(Object(t.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(h.jsxs)(o.ub,{children:[Object(h.jsx)(o.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(r.a,{size:14})}),Object(h.jsxs)(o.F,{tag:"ul",end:!0,children:[Object(h.jsxs)(o.E,{tag:l.b,to:"/apps/todo",children:[Object(h.jsx)(j.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(o.E,{tag:l.b,to:"/apps/chat",children:[Object(h.jsx)(d.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(o.E,{tag:l.b,to:"/apps/email",children:[Object(h.jsx)(b.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(o.E,{tag:l.b,to:"/apps/calendar",children:[Object(h.jsx)(m.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},689:function(e,s,c){},772:function(e,s,c){"use strict";var t=c(18),a=c(132),l=c(1),i=c(7),n=c.n(i),r=c(6),j=c.n(r),d=c(504),b=c(831),m=c(506),o=c(91),h=c(13);s.a=function(){var e=Object(l.useState)(null),s=Object(t.a)(e,2),c=s[0],i=s[1];Object(l.useEffect)((function(){n.a.get("/blog/list/data/sidebar").then((function(e){return i(e.data)}))}),[]);var r={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(h.jsx)("div",{className:"sidebar-detached sidebar-right",children:Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)("div",{className:"blog-sidebar right-sidebar my-2 my-lg-0",children:Object(h.jsxs)("div",{className:"right-sidebar-content",children:[Object(h.jsx)("div",{className:"blog-search",children:Object(h.jsxs)(o.M,{className:"input-group-merge",children:[Object(h.jsx)(o.L,{placeholder:"Search here"}),Object(h.jsx)(o.N,{children:Object(h.jsx)(b.a,{size:14})})]})}),null!==c?Object(h.jsxs)(l.Fragment,{children:[Object(h.jsxs)("div",{className:"blog-recent-posts mt-3",children:[Object(h.jsx)("h6",{className:"section-label",children:"Recent Posts"}),Object(h.jsx)("div",{className:"mt-75",children:c.recentPosts.map((function(e,s){return Object(h.jsxs)("div",{className:j()("d-flex",{"mb-2":s!==c.recentPosts.length-1}),children:[Object(h.jsx)(a.b,{className:"me-2",to:"/pages/blog/detail/".concat(e.id),children:Object(h.jsx)("img",{className:"rounded",src:e.img,alt:e.title,width:"100",height:"70"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h6",{className:"blog-recent-post-title",children:Object(h.jsx)(a.b,{className:"text-body-heading",to:"/pages/blog/detail/".concat(e.id),children:e.title})}),Object(h.jsx)("div",{className:"text-muted mb-0",children:e.createdTime})]})]},s)}))})]}),Object(h.jsxs)("div",{className:"blog-categories mt-3",children:[Object(h.jsx)("h6",{className:"section-label",children:"Categories"}),Object(h.jsx)("div",{className:"mt-1",children:c.categories.map((function(e,s){var t=d[e.icon];return Object(h.jsxs)("div",{className:j()("d-flex justify-content-start align-items-center",{"mb-75":s!==c.categories.length-1}),children:[Object(h.jsx)("a",{className:"me-75",href:"/",onClick:function(e){return e.preventDefault()},children:Object(h.jsx)(m.a,{className:"rounded",color:r[e.category],icon:Object(h.jsx)(t,{size:15})})}),Object(h.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(h.jsx)("div",{className:"blog-category-title text-body",children:e.category})})]},s)}))})]})]}):null]})})})})}}}]);
//# sourceMappingURL=113.6da94194.chunk.js.map