(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[87],{1616:function(e,n,t){"use strict";t.r(n);var s=t(1),a=t(910),i=t(511),r=t(502),c=t(18),l=t(91),o=t(650),d=t(265),m=t(144),x=t(12),j=[{src:d.default,id:1},{src:m.default,id:2},{src:o.a,id:3}],u=function(){var e=Object(s.useState)(0),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(s.useState)(0),r=Object(c.a)(i,2),o=r[0],d=r[1],m=function(){a(!0)},u=function(){a(!1)},p=function(){if(!t){var e=o===j.length-1?0:o+1;d(e)}},g=function(){if(!t){var e=0===o?j.length-1:o-1;d(e)}},b=j.map((function(e){return Object(x.jsx)(l.A,{onExiting:m,onExited:u,children:Object(x.jsx)("img",{src:e.src,className:"img-fluid",alt:e.id})},e.id)}));return Object(x.jsxs)(l.w,{activeIndex:o,next:p,previous:g,keyboard:!1,children:[Object(x.jsx)(l.z,{items:j,activeIndex:o,onClickHandler:function(e){t||d(e)}}),b,Object(x.jsx)(l.y,{direction:"prev",directionText:"Previous",onClickHandler:g}),Object(x.jsx)(l.y,{direction:"next",directionText:"Next",onClickHandler:p})]})},p=t(270),g=t(721),b=t(271),h=[{src:p.default,id:1,header:"Slide 1",caption:"Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin."},{src:g.a,id:2,header:"Slide 2",caption:"Tart macaroon marzipan I love souffl\xe9 apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake."},{src:b.default,id:3,header:"Slide 3",caption:"Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin Marshmallow cake powder icing."}],f=function(){var e=Object(s.useState)(0),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(s.useState)(0),r=Object(c.a)(i,2),o=r[0],d=r[1],m=function(){a(!0)},j=function(){a(!1)},u=function(){if(!t){var e=o===h.length-1?0:o+1;d(e)}},p=function(){if(!t){var e=0===o?h.length-1:o-1;d(e)}},g=h.map((function(e){return Object(x.jsxs)(l.A,{onExiting:m,onExited:j,children:[Object(x.jsx)("img",{src:e.src,className:"img-fluid",alt:e.id}),Object(x.jsx)(l.x,{captionText:e.caption,captionHeader:Object(x.jsx)("span",{className:"text-white",children:e.header})})]},e.id)}));return Object(x.jsxs)(l.w,{activeIndex:o,next:u,previous:p,keyboard:!1,interval:5e5,children:[Object(x.jsx)(l.z,{items:h,activeIndex:o,onClickHandler:function(e){t||d(e)}}),g,Object(x.jsx)(l.y,{direction:"prev",directionText:"Previous",onClickHandler:p}),Object(x.jsx)(l.y,{direction:"next",directionText:"Next",onClickHandler:u})]})},O=[{key:1,src:d.default,caption:"",altText:"Slide 1"},{key:2,src:m.default,caption:"",altText:"Slide 2"},{key:3,src:o.a,caption:"",altText:"Slide 3"}],I=function(){return Object(x.jsx)(l.vb,{items:O,keyboard:!1})},v=t(262),C=t(263),k=t(720),S=[{src:v.default,key:1,caption:"",altText:"Slide 1"},{src:C.default,key:2,caption:"",altText:"Slide 2"},{src:k.a,key:3,caption:"",altText:"Slide 3"}],N=function(){return Object(x.jsx)(l.vb,{items:S,interval:"500",keyboard:!1})},y=[{src:m.default,key:1,caption:"",altText:"Slide 1"},{src:v.default,key:2,caption:"",altText:"Slide 2"},{src:o.a,key:3,caption:"",altText:"Slide 3"}],T=function(){return Object(x.jsx)(l.vb,{items:y,keyboard:!0})},w=[{src:C.default,key:1,caption:"",altText:"Slide 1"},{src:m.default,key:2,caption:"",altText:"Slide 2"},{src:k.a,key:3,caption:"",altText:"Slide 3"}],E=function(){return Object(x.jsx)(l.vb,{items:w,pause:"hover",keyboard:!1})},H=t(261),A=t.n(H),U=Object(x.jsx)("pre",{children:Object(x.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport {\n  Carousel,\n  CarouselItem,\n  CarouselControl,\n  CarouselIndicators\n} from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/01.jpg'\nimport sliderImage2 from '@src/assets/images/slider/02.jpg'\nimport sliderImage3 from '@src/assets/images/slider/03.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1\n  },\n  {\n    src: sliderImage2,\n    id: 2\n  },\n  {\n    src: sliderImage3,\n    id: 3\n  }\n]\n\nconst CarouselBasic = () => {\n  const [activeIndex, setActiveIndex] = useState(0)\n  const [animating, setAnimating] = useState(0)\n\n  const onExiting = () => {\n    setAnimating(true)\n  }\n\n  const onExited = () => {\n    setAnimating(false)\n  }\n\n  const next = () => {\n    if (animating) return\n    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1\n    setActiveIndex(nextIndex)\n  }\n\n  const previous = () => {\n    if (animating) return\n    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1\n    setActiveIndex(nextIndex)\n  }\n\n  const goToIndex = newIndex => {\n    if (animating) return\n    setActiveIndex(newIndex)\n  }\n\n  const slides = images.map(item => {\n    return (\n      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>\n        <img src={item.src} className='img-fluid' alt={item.id} />\n      </CarouselItem>\n    )\n  })\n  return (\n    <Carousel activeIndex={activeIndex} next={next} previous={previous}>\n      <CarouselIndicators\n        items={images}\n        activeIndex={activeIndex}\n        onClickHandler={goToIndex}\n      />\n      {slides}\n      <CarouselControl\n        direction='prev'\n        directionText='Previous'\n        onClickHandler={previous}\n      />\n      <CarouselControl\n        direction='next'\n        directionText='Next'\n        onClickHandler={next}\n      />\n    </Carousel>\n  )\n}\n\nexport default CarouselBasic\n    "})}),B=Object(x.jsx)("pre",{children:Object(x.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport {\n  Carousel,\n  CarouselItem,\n  CarouselControl,\n  CarouselIndicators,\n  CarouselCaption\n} from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/03.jpg'\nimport sliderImage2 from '@src/assets/images/slider/04.jpg'\nimport sliderImage3 from '@src/assets/images/slider/05.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1,\n    header: <span className=\"text-white\">Slide 1 Header</span>\n    caption: 'Cupcake ipsum dolor sit amet toffee lemon drops bonbon.'\n  },\n  {\n    src: sliderImage2,\n    id: 2,\n    header: <span className=\"text-white\">Slide 2 Header</span>\n    caption: 'Cheesecake caramels wafer pie lollipop.'\n  },\n  {\n    src: sliderImage3,\n    id: 3,\n    header: <span className=\"text-white\">Slide 3 Header</span>\n    caption: 'Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing.'\n  }\n]\n\nconst CarouselCaptions = () => {\n  const [activeIndex, setActiveIndex] = useState(0)\n  const [animating, setAnimating] = useState(0)\n\n  const onExiting = () => {\n    setAnimating(true)\n  }\n\n  const onExited = () => {\n    setAnimating(false)\n  }\n\n  const next = () => {\n    if (animating) return\n    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1\n    setActiveIndex(nextIndex)\n  }\n\n  const previous = () => {\n    if (animating) return\n    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1\n    setActiveIndex(nextIndex)\n  }\n\n  const goToIndex = newIndex => {\n    if (animating) return\n    setActiveIndex(newIndex)\n  }\n\n  const slides = images.map(item => {\n    return (\n      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>\n        <img src={item.src} className='img-fluid' alt={item.id} />\n        <CarouselCaption\n          captionText={item.caption}\n          captionHeader={<span className=\"text-center\">item.header</span>}\n        />\n      </CarouselItem>\n    )\n  })\n  return (\n    <Carousel activeIndex={activeIndex} next={next} previous={previous}>\n      <CarouselIndicators\n        items={images}\n        activeIndex={activeIndex}\n        onClickHandler={goToIndex}\n      />\n      {slides}\n      <CarouselControl\n        direction='prev'\n        directionText='Previous'\n        onClickHandler={previous}\n      />\n      <CarouselControl\n        direction='next'\n        directionText='Next'\n        onClickHandler={next}\n      />\n    </Carousel>\n  )\n}\n\nexport default CarouselCaptions\n    "})}),z=Object(x.jsx)("pre",{children:Object(x.jsx)("code",{className:"language-jsx",children:"\n\nimport { UncontrolledCarousel } from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/06.jpg'\nimport sliderImage2 from '@src/assets/images/slider/02.jpg'\nimport sliderImage3 from '@src/assets/images/slider/05.jpg'\n\nconst items = [\n  {\n    src: sliderImage1,\n    altText: 'Slide 1',\n  },\n  {\n    src: sliderImage2,\n    altText: 'Slide 2',\n  },\n  {\n    src: sliderImage3,\n    altText: 'Slide 3',\n  }\n]\n\nconst CarouselUncontrolled = () => {\n  return <UncontrolledCarousel items={items} />\n}\nexport default CarouselUncontrolled\n        "})}),P=Object(x.jsx)("pre",{children:Object(x.jsx)("code",{className:"language-jsx",children:"\n\nimport { UncontrolledCarousel } from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/05.jpg'\nimport sliderImage2 from '@src/assets/images/slider/04.jpg'\nimport sliderImage3 from '@src/assets/images/slider/01.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1,\n    altText: 'Slide 1',\n  },\n  {\n    src: sliderImage2,\n    id: 2,\n    altText: 'Slide 2',\n  },\n  {\n    src: sliderImage3,\n    id: 3,\n    altText: 'Slide 3',\n  }\n]\n\nconst CarouselInterval = () => {\n  return <UncontrolledCarousel items={images} interval='500' />\n}\nexport default CarouselInterval"})}),K=Object(x.jsx)("pre",{children:Object(x.jsx)("code",{className:"language-jsx",children:"\n\nimport { UncontrolledCarousel } from 'reactstrap'\nimport { carouselKeyboard } from './CarouselSourceCode'\nimport sliderImage1 from '@src/assets/images/slider/04.jpg'\nimport sliderImage2 from '@src/assets/images/slider/01.jpg'\nimport sliderImage3 from '@src/assets/images/slider/05.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1,\n    altText: 'Slide 1',\n  },\n  {\n    src: sliderImage2,\n    id: 2,\n    altText: 'Slide 2',\n  },\n  {\n    src: sliderImage3,\n    id: 3,\n    altText: 'Slide 3',\n  }\n]\n\nconst CarouselKeyboard = () => {\n  return <UncontrolledCarousel items={images} keyboard={false} />\n}\nexport default CarouselKeyboard\n            "})}),F=Object(x.jsx)("pre",{children:Object(x.jsx)("code",{className:"language-jsx",children:"\n\nimport { UncontrolledCarousel } from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/02.jpg'\nimport sliderImage2 from '@src/assets/images/slider/06.jpg'\nimport sliderImage3 from '@src/assets/images/slider/05.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1,\n    altText: 'Slide 1',\n    caption: 'Slide 1',\n    header: <span className=\"text-white\">Slide 1 Header</span>\n  },\n  {\n    src: sliderImage2,\n    id: 2,\n    altText: 'Slide 2',\n    caption: 'Slide 2',\n    header: <span className=\"text-white\">Slide 2 Header</span>\n  },\n  {\n    src: sliderImage3,\n    id: 3,\n    altText: 'Slide 3',\n    caption: 'Slide 3',\n    header: <span className=\"text-white\">Slide 3 Header</span>\n  }\n]\n\nconst CarouselPause = () => {\n  return <UncontrolledCarousel items={images} pause='hover' />\n}\nexport default CarouselPause\n"})});n.default=function(){return Object(s.useEffect)((function(){A.a.highlightAll()}),[]),Object(x.jsxs)(s.Fragment,{children:[Object(x.jsx)(r.a,{title:"Carousel",data:[{title:"Components"},{title:"Carousel"}]}),Object(x.jsxs)(l.jb,{children:[Object(x.jsx)(l.B,{className:"mb-1",sm:"12",children:Object(x.jsx)(l.e,{color:"info",children:Object(x.jsx)("div",{className:"alert-body",children:Object(x.jsxs)("p",{children:[Object(x.jsx)(a.a,{className:"me-1",size:14}),"Nested carousels are not supported."]})})})}),Object(x.jsx)(l.B,{md:"6",sm:"12",children:Object(x.jsx)(i.a,{title:"Basic Example",code:U,children:Object(x.jsx)(u,{})})}),Object(x.jsx)(l.B,{md:"6",sm:"12",children:Object(x.jsx)(i.a,{title:"Captions Example",code:B,children:Object(x.jsx)(f,{})})}),Object(x.jsx)(l.B,{md:"6",sm:"12",children:Object(x.jsxs)(i.a,{title:"Uncontrolled Example",code:z,children:[Object(x.jsxs)(l.u,{children:["You don't have to manage state with ",Object(x.jsx)("code",{children:"UncontrolledCarousel"})," all you have to do is return it with your content."]}),Object(x.jsx)(I,{})]})}),Object(x.jsx)(l.B,{md:"6",sm:"12",children:Object(x.jsxs)(i.a,{title:"Interval Example",code:P,children:[Object(x.jsxs)(l.u,{children:["Use ",Object(x.jsx)("code",{children:"Interval"})," prop to set interval between slides. default interval is ",Object(x.jsx)("strong",{children:"5000"}),"."]}),Object(x.jsx)(N,{})]})}),Object(x.jsx)(l.B,{md:"6",sm:"12",children:Object(x.jsxs)(i.a,{title:"Keyboard Example",code:K,children:[Object(x.jsxs)(l.u,{children:["Use ",Object(x.jsx)("code",{children:"Keyboard"})," prop to control carousel with keyboard default is ",Object(x.jsx)("code",{children:"false"}),"."]}),Object(x.jsx)(T,{})]})}),Object(x.jsx)(l.B,{md:"6",sm:"12",children:Object(x.jsxs)(i.a,{title:"Pause Example",code:F,children:[Object(x.jsxs)(l.u,{children:["Use ",Object(x.jsx)("code",{children:"pause"})," prop to pause carousel on hover."]}),Object(x.jsx)(E,{})]})})]})]})}},502:function(e,n,t){"use strict";var s=t(17),a=t(1),i=t(132),r=t(6),c=t.n(r),l=t(904),o=t(860),d=t(835),m=t(833),x=t(834),j=t(91),u=t(12);n.a=function(e){var n=e.data,t=e.title;return Object(u.jsxs)("div",{className:"content-header row",children:[Object(u.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(u.jsx)("div",{className:"row breadcrumbs-top",children:Object(u.jsxs)("div",{className:"col-12",children:[t?Object(u.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(j.g,{children:[Object(u.jsx)(j.h,{tag:"li",children:Object(u.jsx)(i.b,{to:"/",children:"Home"})}),n.map((function(e,t){var r=e.link?i.b:a.Fragment,l=n.length-1===t;return Object(u.jsx)(j.h,{tag:"li",active:!l,className:c()({"text-primary":!l}),children:Object(u.jsx)(r,Object(s.a)(Object(s.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]})})}),Object(u.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(u.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(u.jsxs)(j.ub,{children:[Object(u.jsx)(j.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(u.jsx)(l.a,{size:14})}),Object(u.jsxs)(j.F,{tag:"ul",end:!0,children:[Object(u.jsxs)(j.E,{tag:i.b,to:"/apps/todo",children:[Object(u.jsx)(o.a,{className:"me-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(u.jsxs)(j.E,{tag:i.b,to:"/apps/chat",children:[Object(u.jsx)(d.a,{className:"me-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(u.jsxs)(j.E,{tag:i.b,to:"/apps/email",children:[Object(u.jsx)(m.a,{className:"me-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(u.jsxs)(j.E,{tag:i.b,to:"/apps/calendar",children:[Object(u.jsx)(x.a,{className:"me-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},511:function(e,n,t){"use strict";var s=t(18),a=t(1),i=t(873),r=t(91),c=t(12);n.a=function(e){var n=e.title,t=e.children,l=e.noBody,o=e.code,d=e.iconCode,m=Object(a.useState)(!1),x=Object(s.a)(m,2),j=x[0],u=x[1],p=d||Object(c.jsx)(i.a,{size:15}),g=l?a.Fragment:r.m;return Object(c.jsxs)(r.l,{className:"card-snippet",children:[Object(c.jsxs)(r.p,{children:[Object(c.jsx)(r.v,{tag:"h4",children:n}),Object(c.jsx)("div",{className:"views cursor-pointer",onClick:function(){return u(!j)},children:p})]}),Object(c.jsx)(g,{children:t}),Object(c.jsx)(r.C,{isOpen:j,children:Object(c.jsx)(r.m,{children:o})})]})}},650:function(e,n,t){"use strict";n.a=t.p+"static/media/01.ae763d9d.jpg"},720:function(e,n,t){"use strict";n.a=t.p+"static/media/05.3d963e35.jpg"},721:function(e,n,t){"use strict";n.a=t.p+"static/media/08.9fa51868.jpg"}}]);
//# sourceMappingURL=87.a3c48222.chunk.js.map