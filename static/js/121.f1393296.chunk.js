(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[121],{1627:function(e,s,t){"use strict";t.r(s);var n=t(2),a=t(91),l=t(265),o=t.n(l),i=t(519),r=t(506),c=t(18),d=t(267),m=t(13),p=function(){var e=Object(n.useState)(!1),s=Object(c.a)(e,2),t=s[0],l=s[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(a.i,{className:"mb-2",color:"primary",onClick:function(){return l(!t)},children:"Toggle"}),Object(m.jsx)(a.C,{isOpen:t,children:Object(m.jsxs)("div",{className:"d-flex p-1 border",children:[Object(m.jsx)("img",{className:"me-2",src:d.default,alt:"collapse-img",height:"125"}),Object(m.jsx)("span",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."})]})})]})},h=t(728),j=function(){var e=Object(n.useState)(!1),s=Object(c.a)(e,2),t=s[0],l=s[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(a.i,{className:"mb-2",color:"primary",onClick:function(){return l(!t)},children:"Toggle"}),Object(m.jsx)(a.C,{horizontal:!0,isOpen:t,children:Object(m.jsxs)("div",{className:"p-1 d-flex width-300 border",children:[Object(m.jsx)("img",{className:"me-2",src:h.a,alt:"collapse-img",height:"100",width:"100"}),Object(m.jsx)("div",{className:"flex-grow-1",children:"This is some content from a media component. You can replace this with any content and adjust it as needed."})]})})]})},b=t(266),g=function(){var e=Object(n.useState)(!1),s=Object(c.a)(e,2),t=s[0],l=s[1],o=Object(n.useState)(!1),i=Object(c.a)(o,2),r=i[0],d=i[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"demo-inline-spacing mb-2",children:[Object(m.jsx)(a.i,{color:"primary",onClick:function(){return l(!t)},children:"Toggle First Collapse"}),Object(m.jsx)(a.i,{color:"primary",onClick:function(){return d(!r)},children:"Toggle Second Collapse"}),Object(m.jsx)(a.i,{color:"primary",onClick:function(){l(!t),d(!r)},children:"Toggle Both Collapse"})]}),Object(m.jsxs)(a.jb,{children:[Object(m.jsx)(a.B,{lg:6,children:Object(m.jsx)(a.C,{isOpen:t,children:Object(m.jsxs)("div",{className:"d-flex p-1 border",children:[Object(m.jsx)("img",{className:"me-2",src:b.default,alt:"collapse-img-1",height:"125"}),Object(m.jsx)("span",{children:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."})]})})}),Object(m.jsx)(a.B,{lg:6,children:Object(m.jsx)(a.C,{isOpen:r,children:Object(m.jsxs)("div",{className:"d-flex p-1 border",children:[Object(m.jsx)("img",{className:"me-2",src:h.a,alt:"collapse-img-2",height:"125"}),Object(m.jsx)("span",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.It is a long established fact that a reader content."})]})})})]})]})},u=Object(m.jsx)("pre",{children:Object(m.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Collapse, Button } from 'reactstrap'\n\nimport collapseImg from '@src/assets/images/slider/04.jpg'\n\nconst CollapseBasic = () => {\n  const [isOpen, setIsOpen] = useState(false)\n\n  const toggle = () => setIsOpen(!isOpen)\n\n  return (\n    <div>\n      <Button className='mb-2' color='primary' onClick={toggle}>\n        Toggle\n      </Button>\n      <Collapse isOpen={isOpen}>\n        <div className='d-flex p-1 border'>\n          <img className='me-2' src={collapseImg} alt='collapse-img' height='125' />\n          <span>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\n            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like\n            Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be\n            distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is\n            that it has a more-or-less normal distribution of letters.\n          </span>\n        </div>\n      </Collapse>\n    </div>\n  )\n}\n\nexport default CollapseBasic\n"})}),O=Object(m.jsx)("pre",{children:Object(m.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Row, Col, Collapse, Button } from 'reactstrap'\n\nimport collapseImg1 from '@src/assets/images/slider/06.jpg'\nimport collapseImg2 from '@src/assets/images/slider/08.jpg'\n\nconst CollapseMultipleTargets = () => {\n  const [firstCollapse, setFirstCollapse] = useState(false)\n  const [secondCollapse, setSecondCollapse] = useState(false)\n\n  const toggleFirstCollapse = () => setFirstCollapse(!firstCollapse)\n  const toggleSecondCollapse = () => setSecondCollapse(!secondCollapse)\n  const toggleBothCollapses = () => {\n    setFirstCollapse(!firstCollapse)\n    setSecondCollapse(!secondCollapse)\n  }\n\n  return (\n    <div>\n      <div className='demo-inline-spacing mb-2'>\n        <Button color='primary' onClick={toggleFirstCollapse}>\n          Toggle First Collapse\n        </Button>\n        <Button color='primary' onClick={toggleSecondCollapse}>\n          Toggle Second Collapse\n        </Button>\n        <Button color='primary' onClick={toggleBothCollapses}>\n          Toggle Both Collapse\n        </Button>\n      </div>\n      <Row>\n        <Col lg={6}>\n          <Collapse isOpen={firstCollapse}>\n            <div className='d-flex p-1 border'>\n              <img className='me-2' src={collapseImg1} alt='collapse-img-1' height='125' />\n              <span>\n                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making\n                this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined\n                with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.\n              </span>\n            </div>\n          </Collapse>\n        </Col>\n        <Col lg={6}>\n          <Collapse isOpen={secondCollapse}>\n            <div className='d-flex p-1 border'>\n              <img className='me-2' src={collapseImg2} alt='collapse-img-2' height='125' />\n              <span>\n                There are many variations of passages of Lorem Ipsum available, but the majority have suffered\n                alteration in some form, by injected humour, or randomised words which don't look even slightly\n                believable. If you are going to use a passage of Lorem Ipsum.It is a long established fact that a reader\n                content.\n              </span>\n            </div>\n          </Collapse>\n        </Col>\n      </Row>\n    </div>\n  )\n}\n\nexport default CollapseMultipleTargets\n"})}),x=Object(m.jsx)("pre",{children:Object(m.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Collapse, Button } from 'reactstrap'\n\nimport collapseImg from '@src/assets/images/slider/08.jpg'\n\nconst CollapseHorizontal = () => {\n  const [isOpen, setIsOpen] = useState(false)\n\n  const toggle = () => setIsOpen(!isOpen)\n\n  return (\n    <div>\n      <Button className='mb-2' color='primary' onClick={toggle}>\n        Toggle\n      </Button>\n      <Collapse horizontal isOpen={isOpen}>\n        <div className='p-1 d-flex width-300 border'>\n          <img className='me-2' src={collapseImg} alt='collapse-img' height='100' width='100' />\n          <div className='flex-grow-1'>\n            This is some content from a media component. You can replace this with any content and adjust it as needed.\n          </div>\n        </div>\n      </Collapse>\n    </div>\n  )\n}\n\nexport default CollapseHorizontal\n"})});s.default=function(){return Object(n.useEffect)((function(){o.a.highlightAll()}),[]),Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(r.a,{title:"Collapse",data:[{title:"Components"},{title:"Collapse"}]}),Object(m.jsxs)(a.jb,{children:[Object(m.jsx)(a.B,{sm:"12",children:Object(m.jsx)(i.a,{title:"Collapse Basic",code:u,children:Object(m.jsx)(p,{})})}),Object(m.jsx)(a.B,{sm:"12",children:Object(m.jsx)(i.a,{title:"Multiple Target",code:O,children:Object(m.jsx)(g,{})})}),Object(m.jsx)(a.B,{sm:"12",children:Object(m.jsxs)(i.a,{title:"Horizontal",code:x,children:[Object(m.jsxs)(a.u,{children:["Use props ",Object(m.jsx)("code",{children:"horizontal"})," to create horizontal collapse"]}),Object(m.jsx)(j,{})]})})]})]})}},506:function(e,s,t){"use strict";var n=t(17),a=t(2),l=t(132),o=t(6),i=t.n(o),r=t(896),c=t(852),d=t(828),m=t(826),p=t(827),h=t(91),j=t(13);s.a=function(e){var s=e.data,t=e.title;return Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[t?Object(j.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(h.g,{children:[Object(j.jsx)(h.h,{tag:"li",children:Object(j.jsx)(l.b,{to:"/",children:"Home"})}),s.map((function(e,t){var o=e.link?l.b:a.Fragment,r=s.length-1===t;return Object(j.jsx)(h.h,{tag:"li",active:!r,className:i()({"text-primary":!r}),children:Object(j.jsx)(o,Object(n.a)(Object(n.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]})})}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(j.jsxs)(h.ub,{children:[Object(j.jsx)(h.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(j.jsx)(r.a,{size:14})}),Object(j.jsxs)(h.F,{tag:"ul",end:!0,children:[Object(j.jsxs)(h.E,{tag:l.b,to:"/apps/todo",children:[Object(j.jsx)(c.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(j.jsxs)(h.E,{tag:l.b,to:"/apps/chat",children:[Object(j.jsx)(d.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(j.jsxs)(h.E,{tag:l.b,to:"/apps/email",children:[Object(j.jsx)(m.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(j.jsxs)(h.E,{tag:l.b,to:"/apps/calendar",children:[Object(j.jsx)(p.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},519:function(e,s,t){"use strict";var n=t(18),a=t(2),l=t(865),o=t(91),i=t(13);s.a=function(e){var s=e.title,t=e.children,r=e.noBody,c=e.code,d=e.iconCode,m=Object(a.useState)(!1),p=Object(n.a)(m,2),h=p[0],j=p[1],b=d||Object(i.jsx)(l.a,{size:15}),g=r?a.Fragment:o.m;return Object(i.jsxs)(o.l,{className:"card-snippet",children:[Object(i.jsxs)(o.p,{children:[Object(i.jsx)(o.v,{tag:"h4",children:s}),Object(i.jsx)("div",{className:"views cursor-pointer",onClick:function(){return j(!h)},children:b})]}),Object(i.jsx)(g,{children:t}),Object(i.jsx)(o.C,{isOpen:h,children:Object(i.jsx)(o.m,{children:c})})]})}},728:function(e,s,t){"use strict";s.a=t.p+"static/media/08.9fa51868.jpg"}}]);
//# sourceMappingURL=121.f1393296.chunk.js.map