(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[147],{1605:function(e,c,l){"use strict";l.r(c);var a=l(2),n=l(91),s=l(265),i=l.n(s),r=l(519),t=l(506),d=l(13),o=function(){return Object(d.jsxs)("div",{className:"demo-inline-spacing",children:[Object(d.jsx)(n.f,{color:"primary",pill:!0,className:"badge-glow",children:"Primary"}),Object(d.jsx)(n.f,{color:"secondary",pill:!0,className:"badge-glow",children:"Secondary"}),Object(d.jsx)(n.f,{color:"success",pill:!0,className:"badge-glow",children:"Success"}),Object(d.jsx)(n.f,{color:"danger",pill:!0,className:"badge-glow",children:"Danger"}),Object(d.jsx)(n.f,{color:"warning",pill:!0,className:"badge-glow",children:"Warning"}),Object(d.jsx)(n.f,{color:"info",pill:!0,className:"badge-glow",children:"Info"}),Object(d.jsx)(n.f,{color:"dark",pill:!0,className:"badge-glow",children:"Dark"})]})},j=function(){return Object(d.jsx)(n.f,{pill:!0,color:"danger",className:"d-block",children:Object(d.jsx)("span",{children:"Block Badge Pill"})})},g=l(903),b=function(){return Object(d.jsxs)(n.f,{color:"primary",pill:!0,href:"#",children:[Object(d.jsx)(g.a,{size:12}),Object(d.jsx)("span",{className:"align-middle ms-50",children:"Link Badge Pill"})]})},m=function(){return Object(d.jsxs)("div",{className:"demo-inline-spacing",children:[Object(d.jsx)(n.f,{color:"light-primary",pill:!0,children:"Primary"}),Object(d.jsx)(n.f,{color:"light-secondary",pill:!0,children:"Secondary"}),Object(d.jsx)(n.f,{color:"light-success",pill:!0,children:"Success"}),Object(d.jsx)(n.f,{color:"light-danger",pill:!0,children:"Danger"}),Object(d.jsx)(n.f,{color:"light-warning",pill:!0,children:"Warning"}),Object(d.jsx)(n.f,{color:"light-info",pill:!0,children:"Info"})]})},h=l(842),p=function(){return Object(d.jsxs)("div",{className:"demo-inline-spacing",children:[Object(d.jsxs)("div",{className:"position-relative",children:[Object(d.jsx)(n.f,{pill:!0,color:"primary",className:"badge-up",children:"4"}),Object(d.jsx)(h.a,{className:"text-primary",size:22})]}),Object(d.jsxs)("div",{className:"position-relative",children:[Object(d.jsx)(n.f,{pill:!0,color:"danger",className:"badge-up",children:"5"}),Object(d.jsx)(h.a,{className:"text-danger",size:22})]}),Object(d.jsxs)("div",{className:"position-relative",children:[Object(d.jsx)(n.f,{pill:!0,color:"info",className:"badge-up",children:"6"}),Object(d.jsx)(h.a,{className:"text-info",size:22})]})]})},x=function(){return Object(d.jsxs)("div",{className:"demo-inline-spacing",children:[Object(d.jsx)(n.f,{color:"primary",pill:!0,children:"Primary"}),Object(d.jsx)(n.f,{color:"secondary",pill:!0,children:"Secondary"}),Object(d.jsx)(n.f,{color:"success",pill:!0,children:"Success"}),Object(d.jsx)(n.f,{color:"danger",pill:!0,children:"Danger"}),Object(d.jsx)(n.f,{color:"warning",pill:!0,children:"Warning"}),Object(d.jsx)(n.f,{color:"info",pill:!0,children:"Info"}),Object(d.jsx)(n.f,{color:"dark",pill:!0,children:"Dark"})]})},O=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Badge } from 'reactstrap'\n\nconst BadgePillLight = () => {\n  return (\n    <React.Fragment>\n      <Badge color='light-primary' pill>\n        Primary\n      </Badge>\n      <Badge color='light-secondary' pill>\n        Secondary\n      </Badge>\n      <Badge color='light-success' pill>\n        Success\n      </Badge>\n      <Badge color='light-danger' pill>\n      Danger\n      </Badge>\n      <Badge color='light-warning' pill>\n        Warning\n      </Badge>\n      <Badge color='light-info' pill>\n        Info\n      </Badge>\n    </React.Fragment>\n  )\n}\nexport default BadgePillLight\n"})}),B=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Badge } from 'reactstrap'\n\nconst BadgePillGlow = () => {\n  return (\n    <React.Fragment>\n      <Badge color='primary' pill className='badge-glow'>\n        Primary\n      </Badge>\n      <Badge color='secondary' pill className='badge-glow'>\n        Secondary\n      </Badge>\n      <Badge color='success' pill className='badge-glow'>\n        Success\n      </Badge>\n      <Badge color='danger' pill className='badge-glow'>\n        Danger\n      </Badge>\n      <Badge color='warning' pill className='badge-glow'>\n        Warning\n      </Badge>\n      <Badge color='info' pill className='badge-glow'>\n        Info\n      </Badge>\n      <Badge color='dark' pill className='badge-glow mb-1'>\n        Dark\n      </Badge>\n    </React.Fragment>\n  )\n}\nexport default BadgePillGlow\n"})}),u=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Badge } from 'reactstrap'\n\nconst BadgePillContextual = () => {\n  return (\n    <React.Fragment>\n      <Badge color='primary' pill>\n        Primary\n      </Badge>\n      <Badge color='secondary' pill>\n        Secondary\n      </Badge>\n      <Badge color='success' pill>\n        Success\n      </Badge>\n      <Badge color='danger' pill>\n        Danger\n      </Badge>\n      <Badge color='warning' pill>\n        Warning\n      </Badge>\n      <Badge color='info' pill>\n        Info\n      </Badge>\n      <Badge color='dark' pill>\n        Dark\n      </Badge>\n    </React.Fragment>\n  )\n}\nexport default BadgePillContextual\n"})}),f=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Badge } from 'reactstrap'\nimport { Bell } from 'react-feather'\n\nconst BadgePillNotification = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <div className='position-relative'>\n        <Badge pill color='primary' className='badge-up'>\n          4\n        </Badge>\n        <Bell className='text-primary' size={22} />\n      </div>\n      <div className='position-relative'>\n        <Badge pill color='danger' className='badge-up'>\n          5\n        </Badge>\n        <Bell className='text-danger' size={22} />\n      </div>\n      <div className='position-relative'>\n        <Badge pill color='info' className='badge-up'>\n          6\n        </Badge>\n        <Bell className='text-info' size={22} />\n      </div>\n    </div>\n  )\n}\nexport default BadgePillNotification\n\n"})}),N=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Badge } from 'reactstrap'\nimport { Link } from 'react-feather'\n\nconst BadgePillLink = () => {\n  return (\n    <Badge color='primary' pill href='#'>\n      <Link size={12} />\n      <span className='align-middle ms-50'>Link Badge Pill</span>\n    </Badge>\n  )\n}\nexport default BadgePillLink\n"})}),v=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"\n\nimport { Badge } from 'reactstrap'\n\nconst BadgePillBlock = () => {\n  return (\n    <Badge pill color='primary' className='d-block'>\n      <span>Block Badge Pill</span>\n    </Badge>\n  )\n}\nexport default BadgePillBlock\n"})});c.default=function(){return Object(a.useEffect)((function(){i.a.highlightAll()}),[]),Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(t.a,{title:"Pill Badges",data:[{title:"Components"},{title:"Pill Badges"}]}),Object(d.jsxs)(n.jb,{children:[Object(d.jsx)(n.B,{sm:"12",children:Object(d.jsxs)(r.a,{title:"Contextual",code:u,children:[Object(d.jsxs)(n.u,{className:"mb-0",children:["Use prop ",Object(d.jsx)("code",{children:"pill"})," with ",Object(d.jsx)("code",{children:"Badge"})," tag to create badge pill."]}),Object(d.jsx)(x,{})]})}),Object(d.jsx)(n.B,{sm:"12",children:Object(d.jsxs)(r.a,{title:"Glow",code:B,children:[Object(d.jsxs)(n.u,{className:"mb-0",children:["Use class ",Object(d.jsx)("code",{children:".badge-glow"})," with ",Object(d.jsx)("code",{children:"Badge"})," tag to add glow effect to your badge."]}),Object(d.jsx)(o,{})]})}),Object(d.jsx)(n.B,{sm:"12",children:Object(d.jsxs)(r.a,{title:"Light",code:O,children:[Object(d.jsxs)(n.u,{className:"mb-0",children:["Use prop ",Object(d.jsx)("code",{children:"pill"})," and ",Object(d.jsx)("code",{children:'color="light-COLOR_NAME"'})," with ",Object(d.jsx)("code",{children:"Badge"})," tag to create a light badge pill."]}),Object(d.jsx)(m,{})]})}),Object(d.jsx)(n.B,{sm:"12",children:Object(d.jsxs)(r.a,{title:"Notifications",code:f,children:[Object(d.jsxs)(n.u,{className:"mb-0",children:["Use ",Object(d.jsx)("code",{children:".badge-up"})," to set pill badge to higher than other text. So that it can work with notifications also."]}),Object(d.jsx)(p,{})]})})]}),Object(d.jsxs)(n.jb,{className:"match-height",children:[Object(d.jsx)(n.B,{md:"6",sm:"12",children:Object(d.jsxs)(r.a,{title:"Link",code:N,children:[Object(d.jsxs)(n.u,{children:["Use ",Object(d.jsx)("code",{children:'href="#"'})," prop to use badge as a link."]}),Object(d.jsx)(b,{})]})}),Object(d.jsx)(n.B,{md:"6",sm:"12",children:Object(d.jsxs)(r.a,{title:"Block",code:v,children:[Object(d.jsxs)(n.u,{children:["Use ",Object(d.jsx)("code",{children:".d-block"})," class to make badge display as block."]}),Object(d.jsx)(j,{})]})})]})]})}},506:function(e,c,l){"use strict";var a=l(17),n=l(2),s=l(132),i=l(6),r=l.n(i),t=l(893),d=l(849),o=l(914),j=l(909),g=l(846),b=l(91),m=l(13);c.a=function(e){var c=e.data,l=e.title;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[l?Object(m.jsx)("h2",{className:"content-header-title float-start mb-0",children:l}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(b.g,{children:[Object(m.jsx)(b.h,{tag:"li",children:Object(m.jsx)(s.b,{to:"/",children:"Home"})}),c.map((function(e,l){var i=e.link?s.b:n.Fragment,t=c.length-1===l;return Object(m.jsx)(b.h,{tag:"li",active:!t,className:r()({"text-primary":!t}),children:Object(m.jsx)(i,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},l)}))]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(m.jsxs)(b.ub,{children:[Object(m.jsx)(b.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(t.a,{size:14})}),Object(m.jsxs)(b.F,{tag:"ul",end:!0,children:[Object(m.jsxs)(b.E,{tag:s.b,to:"/apps/todo",children:[Object(m.jsx)(d.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(b.E,{tag:s.b,to:"/apps/chat",children:[Object(m.jsx)(o.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(b.E,{tag:s.b,to:"/apps/email",children:[Object(m.jsx)(j.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(b.E,{tag:s.b,to:"/apps/calendar",children:[Object(m.jsx)(g.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},519:function(e,c,l){"use strict";var a=l(18),n=l(2),s=l(862),i=l(91),r=l(13);c.a=function(e){var c=e.title,l=e.children,t=e.noBody,d=e.code,o=e.iconCode,j=Object(n.useState)(!1),g=Object(a.a)(j,2),b=g[0],m=g[1],h=o||Object(r.jsx)(s.a,{size:15}),p=t?n.Fragment:i.m;return Object(r.jsxs)(i.l,{className:"card-snippet",children:[Object(r.jsxs)(i.p,{children:[Object(r.jsx)(i.v,{tag:"h4",children:c}),Object(r.jsx)("div",{className:"views cursor-pointer",onClick:function(){return m(!b)},children:h})]}),Object(r.jsx)(p,{children:l}),Object(r.jsx)(i.C,{isOpen:b,children:Object(r.jsx)(i.m,{children:d})})]})}}}]);
//# sourceMappingURL=147.3b94a3b5.chunk.js.map