(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[73],{1265:function(e,t,n){window,e.exports=function(e,t){return r={},n.m=a=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},i=function(e,t,n){var a,c=e.textContent;return""===c.trim()?{chunk:(a=n,{text:" ",inlines:[new r.OrderedSet],entities:[a],blocks:[]})}:{chunk:{text:c,inlines:Array(c.length).fill(t),entities:Array(c.length).fill(n),blocks:[]}}},l=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},s=function(){return{text:"",inlines:[],entities:[],blocks:[]}},o=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},d=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},u=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},b=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},m=new r.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),j={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function h(e){return e.style.textAlign?new r.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new r.Map({"margin-left":e.style.marginLeft}):void 0}var f=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,a.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return v}));var p=" ",g=new RegExp("&nbsp;","g"),x=!0;function O(e,t,n,r,c,p){var g=e.nodeName.toLowerCase();if(p){var v=p(g,e);if(v){var y=a.Entity.__create(v.type,v.mutability,v.data||{});return{chunk:u(y)}}}if("#text"===g&&"\n"!==e.textContent)return i(e,t,c);if("br"===g)return{chunk:l()};if("img"===g&&e instanceof HTMLImageElement){var N={};N.src=e.getAttribute&&e.getAttribute("src")||e.src,N.alt=e.alt,N.height=e.style.height,N.width=e.style.width,e.style.float&&(N.alignment=e.style.float);var k=a.Entity.__create("IMAGE","MUTABLE",N);return{chunk:u(k)}}if("video"===g&&e instanceof HTMLVideoElement){var w={};w.src=e.getAttribute&&e.getAttribute("src")||e.src,w.alt=e.alt,w.height=e.style.height,w.width=e.style.width,e.style.float&&(w.alignment=e.style.float);var E=a.Entity.__create("VIDEO","MUTABLE",w);return{chunk:u(E)}}if("iframe"===g&&e instanceof HTMLIFrameElement){var M={};M.src=e.getAttribute&&e.getAttribute("src")||e.src,M.height=e.height,M.width=e.width;var S=a.Entity.__create("EMBEDDED_LINK","MUTABLE",M);return{chunk:u(S)}}var C,T=function(e,t){var n=m.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(g,r);T&&("ul"===g||"ol"===g?(r=g,n+=1):("unordered-list-item"!==T&&"ordered-list-item"!==T&&(r="",n=-1),x?(C=o(T,h(e)),x=!1):C=d(T,n,h(e)))),C=C||s(),t=function(e,t,n){var a,r=j[e];if(r)a=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var c=t;a=(a=n).withMutations((function(e){var t=c.style.color,n=c.style.backgroundColor,a=c.style.fontSize,r=c.style.fontFamily.replace(/^"|"$/g,""),i=c.style.fontWeight,l=c.style.textDecoration,s=c.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),a&&e.add("fontsize-".concat(a.replace(/px$/g,""))),r&&e.add("fontfamily-".concat(r)),"bold"===i&&e.add(j.strong),"underline"===l&&e.add(j.ins),"italic"===s&&e.add(j.em)})).toOrderedSet()}return a}(g,e,t);for(var L=e.firstChild;L;){var A=O(L,t,n,r,f(L)||c,p).chunk;C=b(C,A),L=L.nextSibling}return{chunk:C}}function v(e,t){var n,i,l,s=(n=t,i=e.trim().replace(g,p),(l=c(i))?(x=!0,{chunk:O(l,new r.OrderedSet,-1,"",void 0,n).chunk}):null);if(s){var o=s.chunk,d=new r.OrderedMap({});o.entities&&o.entities.forEach((function(e){e&&(d=d.set(e,a.Entity.__get(e)))}));var u=0;return{contentBlocks:o.text.split("\r").map((function(e,t){var n=u+e.length,c=o&&o.inlines.slice(u,n),i=o&&o.entities.slice(u,n),l=new r.List(c.map((function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),a.CharacterMetadata.create(n)})));return u=n,new a.ContentBlock({key:Object(a.genKey)(),type:o&&o.blocks[t]&&o.blocks[t].type||"unstyled",depth:o&&o.blocks[t]&&o.blocks[t].depth,data:o&&o.blocks[t]&&o.blocks[t].data||new r.Map({}),text:e,characterList:l})})),entityMap:d}}return null}}],n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var a,r}(n(548),n(636))},1266:function(e,t,n){},1321:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(2),c=n(12),i=n.n(c),l=n(536),s=n(1265),o=n.n(s),d=n(635),u=n(636),b=n(528),m=n(525),j=n(541),h=n(96),f=(n(623),n(1266),n(535),n(632),n(16));t.default=function(){var e=o()("\n  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>\n  <p>Liquorice drag\xe9e cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans drag\xe9e macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>\n  "),t=u.ContentState.createFromBlockArray(e.contentBlocks),n=u.EditorState.createWithContent(t),c=Object(r.useState)(null),s=Object(a.a)(c,2),p=s[0],g=s[1],x=Object(r.useState)(""),O=Object(a.a)(x,2),v=O[0],y=O[1],N=Object(r.useState)(""),k=Object(a.a)(N,2),w=k[0],E=k[1],M=Object(r.useState)(""),S=Object(a.a)(M,2),C=S[0],T=S[1],L=Object(r.useState)(n),A=Object(a.a)(L,2),B=A[0],_=A[1],I=Object(r.useState)([]),D=Object(a.a)(I,2),H=D[0],P=D[1],F=Object(r.useState)(null),z=Object(a.a)(F,2),R=z[0],U=z[1],K=Object(r.useState)("banner.jpg"),q=Object(a.a)(K,2),G=q[0],J=q[1];Object(r.useEffect)((function(){i.a.get("/blog/list/data/edit").then((function(e){g(e.data),y(e.data.blogTitle),E(e.data.slug),P(e.data.blogCategories),U(e.data.featuredImage),T(e.data.status)}))}),[]);return Object(f.jsxs)("div",{className:"blog-edit-wrapper",children:[Object(f.jsx)(m.a,{title:"Blog Edit",data:[{title:"Pages"},{title:"Blog"},{title:"Edit"}]}),null!==p?Object(f.jsx)(h.ib,{children:Object(f.jsx)(h.B,{sm:"12",children:Object(f.jsx)(h.l,{children:Object(f.jsxs)(h.m,{children:[Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{className:"me-75",img:p.avatar,imgWidth:"38",imgHeight:"38"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h6",{className:"mb-25",children:p.userFullName}),Object(f.jsx)(h.u,{children:p.createdTime})]})]}),Object(f.jsx)(h.H,{className:"mt-2",onSubmit:function(e){return e.preventDefault()},children:Object(f.jsxs)(h.ib,{children:[Object(f.jsxs)(h.B,{md:"6",className:"mb-2",children:[Object(f.jsx)(h.N,{className:"form-label",for:"blog-edit-title",children:"Title"}),Object(f.jsx)(h.K,{id:"blog-edit-title",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(f.jsxs)(h.B,{md:"6",className:"mb-2",children:[Object(f.jsx)(h.N,{className:"form-label",for:"blog-edit-category",children:"Category"}),Object(f.jsx)(l.a,{id:"blog-edit-category",isClearable:!1,theme:j.i,value:H,isMulti:!0,name:"colors",options:[{value:"fashion",label:"Fashion"},{value:"gaming",label:"Gaming"},{value:"quote",label:"Quote"},{value:"video",label:"Video"},{value:"food",label:"Food"}],className:"react-select",classNamePrefix:"select",onChange:function(e){return P(e)}})]}),Object(f.jsxs)(h.B,{md:"6",className:"mb-2",children:[Object(f.jsx)(h.N,{className:"form-label",for:"blog-edit-slug",children:"Slug"}),Object(f.jsx)(h.K,{id:"blog-edit-slug",value:w,onChange:function(e){return E(e.target.value)}})]}),Object(f.jsxs)(h.B,{md:"6",className:"mb-2",children:[Object(f.jsx)(h.N,{className:"form-label",for:"blog-edit-status",children:"Status"}),Object(f.jsxs)(h.K,{type:"select",id:"blog-edit-status",value:C,onChange:function(e){return T(e.target.value)},children:[Object(f.jsx)("option",{value:"Published",children:"Published"}),Object(f.jsx)("option",{value:"Pending",children:"Pending"}),Object(f.jsx)("option",{value:"Draft",children:"Draft"})]})]}),Object(f.jsxs)(h.B,{sm:"12",className:"mb-2",children:[Object(f.jsx)(h.N,{className:"form-label",children:"Content"}),Object(f.jsx)(d.Editor,{editorState:B,onEditorStateChange:function(e){return _(e)}})]}),Object(f.jsx)(h.B,{className:"mb-2",sm:"12",children:Object(f.jsxs)("div",{className:"border rounded p-2",children:[Object(f.jsx)("h4",{className:"mb-1",children:"Featured Image"}),Object(f.jsxs)("div",{className:"d-flex flex-column flex-md-row",children:[Object(f.jsx)("img",{className:"rounded me-2 mb-1 mb-md-0",src:R,alt:"featured img",width:"170",height:"110"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("small",{className:"text-muted",children:"Required image resolution 800x400, image size 10mb."}),Object(f.jsx)("p",{className:"my-50",children:Object(f.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"C:/fakepath/".concat(G)})}),Object(f.jsx)("div",{className:"d-inline-block",children:Object(f.jsx)("div",{className:"mb-0",children:Object(f.jsx)(h.K,{type:"file",id:"exampleCustomFileBrowser",name:"customFile",onChange:function(e){var t=new FileReader,n=e.target.files;J(n[0].name),t.onload=function(){U(t.result)},t.readAsDataURL(n[0])},accept:".jpg, .png, .gif"})})})]})]})]})}),Object(f.jsxs)(h.B,{className:"mt-50",children:[Object(f.jsx)(h.i,{color:"primary",className:"me-1",children:"Save Changes"}),Object(f.jsx)(h.i,{color:"secondary",outline:!0,children:"Cancel"})]})]})})]})})})}):null]})}},525:function(e,t,n){"use strict";var a=n(14),r=n(2),c=n(139),i=n(7),l=n.n(i),s=n(798),o=n(756),d=n(819),u=n(814),b=n(754),m=n(96),j=n(16);t.a=function(e){var t=e.data,n=e.title;return Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[n?Object(j.jsx)("h2",{className:"content-header-title float-start mb-0",children:n}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(m.g,{children:[Object(j.jsx)(m.h,{tag:"li",children:Object(j.jsx)(c.b,{to:"/",children:"Home"})}),t.map((function(e,n){var i=e.link?c.b:r.Fragment,s=t.length-1===n;return Object(j.jsx)(m.h,{tag:"li",active:!s,className:l()({"text-primary":!s}),children:Object(j.jsx)(i,Object(a.a)(Object(a.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},n)}))]})})]})})}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(j.jsxs)(m.tb,{children:[Object(j.jsx)(m.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(j.jsx)(s.a,{size:14})}),Object(j.jsxs)(m.F,{tag:"ul",end:!0,children:[Object(j.jsxs)(m.E,{tag:c.b,to:"/apps/todo",children:[Object(j.jsx)(o.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(j.jsxs)(m.E,{tag:c.b,to:"/apps/chat",children:[Object(j.jsx)(d.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(j.jsxs)(m.E,{tag:c.b,to:"/apps/email",children:[Object(j.jsx)(u.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(j.jsxs)(m.E,{tag:c.b,to:"/apps/calendar",children:[Object(j.jsx)(b.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},623:function(e,t,n){},632:function(e,t,n){}}]);
//# sourceMappingURL=73.bae99431.chunk.js.map