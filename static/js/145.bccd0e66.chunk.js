(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[145],{1600:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(265),i=n.n(a),l=n(91),o=n(519),c=n(506),r=n(18),m=n(7),u=n.n(m),g=n(625),j=n(13),d=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){u.a.get("/api/autocomplete/data").then((function(e){return a(e.data.autoComplete)}))}),[]),n.length?Object(j.jsx)(g.a,{suggestions:n,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"}):null},p=function(){var e=Object(s.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(r.a)(e,1)[0];return Object(j.jsx)(g.a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",suggestions:t,className:"form-control"})},b=n(6),h=n.n(b),x=n(46),f=n(60),O=n(37),S=n(70),C=n(57),v=n(92),N=function(){var e=Object(s.useState)([{name:"Jake Shelton",img:x.default},{name:"Edith Baldwin",img:f.default},{name:"Jennifer Wolfe",img:O.default},{name:"Emily Washington",img:S.default},{name:"Heather Green",img:v.default},{name:"Brian Moore",img:C.default}]),t=Object(r.a)(e,1)[0];return Object(j.jsx)(g.a,{filterKey:"name",placeholder:"Type 'a'",className:"form-control",suggestions:t,customRender:function(e,t,n,s,a,i){return Object(j.jsxs)("li",{onMouseEnter:function(){return i(n.indexOf(e))},className:h()("suggestion-item",{active:n.indexOf(e)===s}),onClick:function(e){a(null,e)},children:[Object(j.jsx)("img",{src:e.img,alt:e.name,height:"32",width:"32",className:"me-1"}),Object(j.jsx)("span",{children:e.name})]},t)}})},y=function(){var e=Object(s.useState)([{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]),t=Object(r.a)(e,1)[0];return Object(j.jsx)(g.a,{grouped:!0,filterKey:"title",placeholder:"Type 'c'",className:"form-control",suggestions:t,filterHeaderKey:"groupTitle"})},A=function(){var e=Object(s.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(r.a)(e,1)[0];return Object(j.jsx)(g.a,{suggestions:t,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})},T=function(){var e=Object(s.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(r.a)(e,1)[0];return Object(j.jsx)(g.a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",className:"form-control",suggestions:t,defaultSuggestions:!0})},H=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteBasic = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteBasic\n"})}),L=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteSections = () => {\n  const [suggestions] = useState([\n    {\n      groupTitle: '1970s',\n      data: [\n        {\n          title: 'C'\n        }\n      ]\n    },\n    {\n      groupTitle: '1980s',\n      data: [\n        {\n          title: 'C++'\n        },\n        {\n          title: 'Perl'\n        }\n      ]\n    },\n    {\n      groupTitle: '1990s',\n      data: [\n        {\n          title: 'Haskell'\n        },\n        {\n          title: 'Python'\n        },\n        {\n          title: 'Java'\n        },\n        {\n          title: 'Javascript'\n        },\n        {\n          title: 'PHP'\n        },\n        {\n          title: 'Ruby'\n        }\n      ]\n    },\n    {\n      groupTitle: '2000s',\n      data: [\n        {\n          title: 'C#'\n        },\n        {\n          title: 'Scala'\n        },\n        {\n          title: 'Clojure'\n        },\n        {\n          title: 'Go'\n        }\n      ]\n    },\n    {\n      groupTitle: '2010s',\n      data: [\n        {\n          title: 'Elm'\n        }\n      ]\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      filterHeaderKey='groupTitle'\n      grouped={true}\n      placeholder=\"Type 'c'\"\n    />\n  )\n}\nexport default AutoCompleteSections\n"})}),P=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState, useEffect } from 'react'\nimport axios from 'axios'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteAjax = () => {\n  const [suggestions, setSuggestions] = useState([])\n\n  useEffect(() => {\n    axios\n      .get('/api/autocomplete/data')\n      .then(response => setSuggestions(response.data.autoComplete))\n  }, [])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      placeholder='Search for any of the top 250 IMDB movies'\n    />\n  )\n}\nexport default AutoCompleteAjax\n"})}),R=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport classnames from 'classnames'\nimport AutoComplete from '@components/autocomplete'\nimport img1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'\nimport img2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'\nimport img3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'\nimport img4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'\nimport img5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'\nimport img6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'\n\nconst AutoCompleteRender = () => {\n  const [suggestions] = useState([\n    {\n      name: 'Jake Shelton',\n      img: img1\n    },\n    {\n      name: 'Edith Baldwin',\n      img: img2\n    },\n    {\n      name: 'Jennifer Wolfe',\n      img: img3\n    },\n    {\n      name: 'Emily Washington',\n      img: img4\n    },\n    {\n      name: 'Heather Green',\n      img: img6\n    },\n    {\n      name: 'Brian Moore',\n      img: img5\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='name'\n      placeholder=\"Type 'a'\"\n      customRender={(\n        suggestion,\n        i,\n        filteredData,\n        activeSuggestion,\n        onSuggestionItemClick,\n        onSuggestionItemHover\n      ) => (\n        <li\n          className={classnames('suggestion-item', {\n            active: filteredData.indexOf(suggestion) === activeSuggestion\n          })}\n          key={i}\n          onMouseEnter={() =>\n            onSuggestionItemHover(filteredData.indexOf(suggestion))\n          }\n          onClick={e => {\n            onSuggestionItemClick(null, e)\n          }}\n        >\n          <img\n            src={suggestion.img}\n            alt={suggestion.name}\n            height='32'\n            width='32'\n            className='me-1'\n          />\n          <span>{suggestion.name}</span>\n        </li>\n      )}\n    />\n  )\n}\nexport default AutoCompleteRender\n"})}),k=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteDefaultSuggestions = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      defaultSuggestions={true}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteDefaultSuggestions\n"})}),E=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteSearchLimit = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={2}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteSearchLimit\n"})});t.default=function(){return Object(s.useEffect)((function(){i.a.highlightAll()}),[]),Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(c.a,{title:"Auto Complete",data:[{title:"Components"},{title:"Auto Complete"}]}),Object(j.jsxs)(l.jb,{children:[Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Basic",code:H,children:Object(j.jsx)(p,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Sections",code:L,children:Object(j.jsx)(y,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Ajax",code:P,children:Object(j.jsx)(d,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Custom Render",code:R,children:Object(j.jsx)(N,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Default Suggestions",code:k,children:Object(j.jsx)(T,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Search Limit",code:E,children:Object(j.jsx)(A,{})})})]})]})}},506:function(e,t,n){"use strict";var s=n(17),a=n(2),i=n(132),l=n(6),o=n.n(l),c=n(896),r=n(852),m=n(828),u=n(826),g=n(827),j=n(91),d=n(13);t.a=function(e){var t=e.data,n=e.title;return Object(d.jsxs)("div",{className:"content-header row",children:[Object(d.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(d.jsx)("div",{className:"row breadcrumbs-top",children:Object(d.jsxs)("div",{className:"col-12",children:[n?Object(d.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(d.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(d.jsxs)(j.g,{children:[Object(d.jsx)(j.h,{tag:"li",children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),t.map((function(e,n){var l=e.link?i.b:a.Fragment,c=t.length-1===n;return Object(d.jsx)(j.h,{tag:"li",active:!c,className:o()({"text-primary":!c}),children:Object(d.jsx)(l,Object(s.a)(Object(s.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})}),Object(d.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(d.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(d.jsxs)(j.ub,{children:[Object(d.jsx)(j.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(d.jsx)(c.a,{size:14})}),Object(d.jsxs)(j.F,{tag:"ul",end:!0,children:[Object(d.jsxs)(j.E,{tag:i.b,to:"/apps/todo",children:[Object(d.jsx)(r.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(d.jsxs)(j.E,{tag:i.b,to:"/apps/chat",children:[Object(d.jsx)(m.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(d.jsxs)(j.E,{tag:i.b,to:"/apps/email",children:[Object(d.jsx)(u.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(d.jsxs)(j.E,{tag:i.b,to:"/apps/calendar",children:[Object(d.jsx)(g.a,{className:"me-1",size:14}),Object(d.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},519:function(e,t,n){"use strict";var s=n(18),a=n(2),i=n(865),l=n(91),o=n(13);t.a=function(e){var t=e.title,n=e.children,c=e.noBody,r=e.code,m=e.iconCode,u=Object(a.useState)(!1),g=Object(s.a)(u,2),j=g[0],d=g[1],p=m||Object(o.jsx)(i.a,{size:15}),b=c?a.Fragment:l.m;return Object(o.jsxs)(l.l,{className:"card-snippet",children:[Object(o.jsxs)(l.p,{children:[Object(o.jsx)(l.v,{tag:"h4",children:t}),Object(o.jsx)("div",{className:"views cursor-pointer",onClick:function(){return d(!j)},children:p})]}),Object(o.jsx)(b,{children:n}),Object(o.jsx)(l.C,{isOpen:j,children:Object(o.jsx)(l.m,{children:r})})]})}}}]);
//# sourceMappingURL=145.bccd0e66.chunk.js.map