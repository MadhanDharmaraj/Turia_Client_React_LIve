(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[155],{1645:function(e,n,t){"use strict";t.r(n);var a=t(2),s=t(265),c=t.n(s),o=t(91),i=t(520),r=t(506),l=t(13),m=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport classnames from 'classnames'\nimport { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'\n\nconst OffCanvasPlacement = () => {\n  const [canvasPlacement, setCanvasPlacement] = useState('start')\n  const [canvasOpen, setCanvasOpen] = useState(false)\n\n  const toggleCanvasStart = () => {\n    setCanvasPlacement('start')\n    setCanvasOpen(!canvasOpen)\n  }\n\n  const toggleCanvasEnd = () => {\n    setCanvasPlacement('end')\n    setCanvasOpen(!canvasOpen)\n  }\n\n  const toggleCanvasTop = () => {\n    setCanvasPlacement('top')\n    setCanvasOpen(!canvasOpen)\n  }\n\n  const toggleCanvasBottom = () => {\n    setCanvasPlacement('bottom')\n    setCanvasOpen(!canvasOpen)\n  }\n\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' onClick={toggleCanvasStart}>\n        Toggle Start\n      </Button>\n      <Button color='primary' onClick={toggleCanvasEnd}>\n        Toggle End\n      </Button>\n      <Button color='primary' onClick={toggleCanvasTop}>\n        Toggle Top\n      </Button>\n      <Button color='primary' onClick={toggleCanvasBottom}>\n        Toggle Bottom\n      </Button>\n      <Offcanvas direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasStart}>\n        <OffcanvasHeader toggle={toggleCanvasStart}>OffCanvas {canvasPlacement}</OffcanvasHeader>\n        <OffcanvasBody\n          className={classnames({\n            'my-auto mx-0 flex-grow-0': canvasPlacement === 'start' || canvasPlacement === 'end'\n          })}\n        >\n          <p\n            className={classnames({\n              'text-center': canvasPlacement === 'start' || canvasPlacement === 'end'\n            })}\n          >\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <Button\n            color='primary'\n            onClick={toggleCanvasStart}\n            className={classnames({\n              'mb-1': canvasPlacement === 'start' || canvasPlacement === 'end',\n              'me-1': canvasPlacement === 'top' || canvasPlacement === 'bottom'\n            })}\n            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}\n          >\n            Continue\n          </Button>\n          <Button\n            outline\n            color='secondary'\n            onClick={toggleCanvasStart}\n            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}\n          >\n            Cancel\n          </Button>\n        </OffcanvasBody>\n      </Offcanvas>\n    </div>\n  )\n}\n\nexport default OffCanvasPlacement\n"})}),d=Object(l.jsx)("pre",{children:Object(l.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'\n\nconst OffCanvasPlacement = () => {\n  const [canvasOpen, setCanvasOpen] = useState(false)\n  const [canvasScroll, setCanvasScroll] = useState(false)\n  const [canvasBackdrop, setCanvasBackdrop] = useState(true)\n\n  const toggleCanvasScroll = () => {\n    setCanvasScroll(true)\n    setCanvasOpen(!canvasOpen)\n  }\n\n  const toggleCanvasBackdrop = () => {\n    setCanvasBackdrop(false)\n    setCanvasOpen(!canvasOpen)\n  }\n\n  return (\n    <div className='demo-inline-spacing'>\n      <Button color='primary' onClick={toggleCanvasScroll}>\n        Enable Body Scrolling\n      </Button>\n      <Button color='primary' onClick={toggleCanvasBackdrop}>\n        Disable Backdrop\n      </Button>\n      <Offcanvas\n        scrollable={canvasScroll}\n        backdrop={canvasBackdrop}\n        direction='end'\n        isOpen={canvasOpen}\n        toggle={toggleCanvasScroll}\n      >\n        <OffcanvasHeader toggle={toggleCanvasScroll}>OffCanvas {canvasScroll ? 'Scroll' : 'Backdrop'}</OffcanvasHeader>\n        <OffcanvasBody className='my-auto mx-0 flex-grow-0'>\n          <p className='text-center'>\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <p className='text-center'>\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <p className='text-center'>\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <p className='text-center'>\n            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web\n            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have\n            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.\n          </p>\n          <Button block color='primary' onClick={toggleCanvasScroll} className='mb-1'>\n            Continue\n          </Button>\n          <Button block outline color='secondary' onClick={toggleCanvasScroll}>\n            Cancel\n          </Button>\n        </OffcanvasBody>\n      </Offcanvas>\n    </div>\n  )\n}\n\nexport default OffCanvasPlacement\n"})}),u=t(18),p=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],s=n[1],c=Object(a.useState)(!1),i=Object(u.a)(c,2),r=i[0],m=i[1],d=Object(a.useState)(!0),p=Object(u.a)(d,2),b=p[0],h=p[1],j=function(){m(!0),s(!t)};return Object(l.jsxs)("div",{className:"demo-inline-spacing",children:[Object(l.jsx)(o.i,{color:"primary",onClick:j,children:"Enable Body Scrolling"}),Object(l.jsx)(o.i,{color:"primary",onClick:function(){h(!1),s(!t)},children:"Disable Backdrop"}),Object(l.jsxs)(o.Z,{scrollable:r,backdrop:b,direction:"end",isOpen:t,toggle:j,children:[Object(l.jsxs)(o.bb,{toggle:j,children:["OffCanvas ",r?"Scroll":"Backdrop"]}),Object(l.jsxs)(o.ab,{className:"my-auto mx-0 flex-grow-0",children:[Object(l.jsx)("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)(o.i,{block:!0,color:"primary",onClick:j,className:"mb-1",children:"Continue"}),Object(l.jsx)(o.i,{block:!0,outline:!0,color:"secondary",onClick:j,children:"Cancel"})]})]})]})},b=t(17),h=t(6),j=t.n(h),g=function(){var e=Object(a.useState)("start"),n=Object(u.a)(e,2),t=n[0],s=n[1],c=Object(a.useState)(!1),i=Object(u.a)(c,2),r=i[0],m=i[1],d=function(){s("start"),m(!r)};return Object(l.jsxs)("div",{className:"demo-inline-spacing",children:[Object(l.jsx)(o.i,{color:"primary",onClick:d,children:"Toggle Start"}),Object(l.jsx)(o.i,{color:"primary",onClick:function(){s("end"),m(!r)},children:"Toggle End"}),Object(l.jsx)(o.i,{color:"primary",onClick:function(){s("top"),m(!r)},children:"Toggle Top"}),Object(l.jsx)(o.i,{color:"primary",onClick:function(){s("bottom"),m(!r)},children:"Toggle Bottom"}),Object(l.jsxs)(o.Z,{direction:t,isOpen:r,toggle:d,children:[Object(l.jsxs)(o.bb,{toggle:d,children:["OffCanvas ",t]}),Object(l.jsxs)(o.ab,{className:j()({"my-auto mx-0 flex-grow-0":"start"===t||"end"===t}),children:[Object(l.jsx)("p",{className:j()({"text-center":"start"===t||"end"===t}),children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),Object(l.jsx)(o.i,Object(b.a)(Object(b.a)({color:"primary",onClick:d,className:j()({"mb-1":"start"===t||"end"===t,"me-1":"top"===t||"bottom"===t})},"start"===t||"end"===t?{block:!0}:{}),{},{children:"Continue"})),Object(l.jsx)(o.i,Object(b.a)(Object(b.a)({outline:!0,color:"secondary",onClick:d},"start"===t||"end"===t?{block:!0}:{}),{},{children:"Cancel"}))]})]})]})};n.default=function(){return Object(a.useEffect)((function(){c.a.highlightAll()}),[]),Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(r.a,{title:"Offcanvas",data:[{title:"Components"},{title:"OffCanvas"}]}),Object(l.jsxs)(o.jb,{className:"match-height",children:[Object(l.jsx)(o.B,{sm:"12",children:Object(l.jsx)(i.a,{title:"Placement",code:m,children:Object(l.jsx)(g,{})})}),Object(l.jsx)(o.B,{sm:"12",children:Object(l.jsx)(i.a,{title:"Options",code:d,children:Object(l.jsx)(p,{})})})]})]})}},506:function(e,n,t){"use strict";var a=t(17),s=t(2),c=t(132),o=t(6),i=t.n(o),r=t(896),l=t(852),m=t(828),d=t(826),u=t(827),p=t(91),b=t(13);n.a=function(e){var n=e.data,t=e.title;return Object(b.jsxs)("div",{className:"content-header row",children:[Object(b.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(b.jsx)("div",{className:"row breadcrumbs-top",children:Object(b.jsxs)("div",{className:"col-12",children:[t?Object(b.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(b.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(b.jsxs)(p.g,{children:[Object(b.jsx)(p.h,{tag:"li",children:Object(b.jsx)(c.b,{to:"/",children:"Home"})}),n.map((function(e,t){var o=e.link?c.b:s.Fragment,r=n.length-1===t;return Object(b.jsx)(p.h,{tag:"li",active:!r,className:i()({"text-primary":!r}),children:Object(b.jsx)(o,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]})})}),Object(b.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(b.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(b.jsxs)(p.ub,{children:[Object(b.jsx)(p.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(b.jsx)(r.a,{size:14})}),Object(b.jsxs)(p.F,{tag:"ul",end:!0,children:[Object(b.jsxs)(p.E,{tag:c.b,to:"/apps/todo",children:[Object(b.jsx)(l.a,{className:"me-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(b.jsxs)(p.E,{tag:c.b,to:"/apps/chat",children:[Object(b.jsx)(m.a,{className:"me-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(b.jsxs)(p.E,{tag:c.b,to:"/apps/email",children:[Object(b.jsx)(d.a,{className:"me-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(b.jsxs)(p.E,{tag:c.b,to:"/apps/calendar",children:[Object(b.jsx)(u.a,{className:"me-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},520:function(e,n,t){"use strict";var a=t(18),s=t(2),c=t(865),o=t(91),i=t(13);n.a=function(e){var n=e.title,t=e.children,r=e.noBody,l=e.code,m=e.iconCode,d=Object(s.useState)(!1),u=Object(a.a)(d,2),p=u[0],b=u[1],h=m||Object(i.jsx)(c.a,{size:15}),j=r?s.Fragment:o.m;return Object(i.jsxs)(o.l,{className:"card-snippet",children:[Object(i.jsxs)(o.p,{children:[Object(i.jsx)(o.v,{tag:"h4",children:n}),Object(i.jsx)("div",{className:"views cursor-pointer",onClick:function(){return b(!p)},children:h})]}),Object(i.jsx)(j,{children:t}),Object(i.jsx)(o.C,{isOpen:p,children:Object(i.jsx)(o.m,{children:l})})]})}}}]);
//# sourceMappingURL=155.af920284.chunk.js.map