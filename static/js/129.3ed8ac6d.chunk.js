(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[129],{1492:function(e,t,a){},1612:function(e,t,a){"use strict";a.r(t);var i=a(2),s=a(91),c=a(18),r=a(6),l=a.n(r),n=a(574),o=a(578),d=a(13),m=function(){var e=Object(o.a)(),t=Object(c.a)(e,1)[0],a=Object(i.useState)([{text:"Youtube",color:"light-secondary"},{text:"Facebook",color:"light-primary"},{text:"Google",color:"light-success"},{text:"Instagram",color:"light-danger"},{text:"Twitter",color:"light-info"},{text:"Discord",color:"light-warning"}]),r=Object(c.a)(a,2),m=r[0],u=r[1],j=Object(i.useState)([{text:"Github",color:"light-secondary"},{text:"Gitlab",color:"light-primary"},{text:"Slack",color:"light-success"},{text:"Pinterest",color:"light-danger"},{text:"Tinder",color:"light-info"},{text:"Amazon",color:"light-warning"}]),b=Object(c.a)(j,2),h=b[0],p=b[1];return Object(d.jsxs)(s.l,{children:[Object(d.jsx)(s.p,{children:Object(d.jsx)(s.v,{tag:"h4",children:"Clone List"})}),Object(d.jsxs)(s.m,{children:[Object(d.jsxs)(s.u,{children:["Add ",Object(d.jsx)("code",{children:"pull:clone"})," with your group prop to clone items."]}),Object(d.jsxs)(s.jb,{children:[Object(d.jsxs)(s.B,{md:"6",sm:"12",children:[Object(d.jsx)("h4",{className:"my-1",children:"Badge Source 1"}),Object(d.jsx)(n.ReactSortable,{list:m,setList:u,group:{name:"shared-badge-group",pull:"clone"},className:l()("demo-inline-spacing sortable",{"flex-row-reverse":t}),children:m.map((function(e,t){return Object(d.jsx)(s.f,{className:"draggable",color:e.color,pill:!0,children:e.text},"".concat(e.text,"-").concat(t))}))})]}),Object(d.jsxs)(s.B,{md:"6",sm:"12",children:[Object(d.jsx)("h4",{className:"my-1",children:"Badge Source 2"}),Object(d.jsx)(n.ReactSortable,{list:h,setList:p,group:{name:"shared-badge-group",pull:"clone"},className:l()("demo-inline-spacing sortable",{"flex-row-reverse":t}),children:h.map((function(e,t){return Object(d.jsx)(s.f,{className:"draggable",color:e.color,pill:!0,children:e.text},"".concat(e.text,"-").concat(t))}))})]})]})]})]})},u=[{id:"1",title:"Draggable Card 1",content:"Jelly beans sugar plum cheesecake cookie oat cake souffl\xe9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."},{id:"2",title:"Draggable Card 2",content:"Jelly beans sugar plum cheesecake cookie oat cake souffl\xe9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."},{id:"3",title:"Draggable Card 3",content:"Jelly beans sugar plum cheesecake cookie oat cake souffl\xe9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."},{id:"4",title:"Draggable Card 4",content:"Jelly beans sugar plum cheesecake cookie oat cake souffl\xe9.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."}],j=function(){var e=Object(i.useState)(u),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(d.jsx)(n.ReactSortable,{className:"row sortable-row",list:a,setList:r,children:a.map((function(e){return Object(d.jsx)(s.B,{className:"draggable",xl:"3",md:"6",sm:"12",children:Object(d.jsxs)(s.l,{className:"draggable-cards ".concat(4!==e.id?"me-1":null),children:[Object(d.jsx)(s.p,{children:Object(d.jsx)(s.v,{tag:"h4",children:e.title})}),Object(d.jsx)(s.m,{children:Object(d.jsx)(s.u,{children:e.content})})]})},e.id)}))})},b=[{id:"1",content:"Cras justo odio"},{id:"2",content:"Dapibus ac facilisis in"},{id:"3",content:"Morbi leo risus"},{id:"4",content:"Porta ac consectetur ac"},{id:"5",content:"Vestibulum at eros"}],h=[{id:"6",content:"Cras justo odio"},{id:"7",content:"Dapibus ac facilisis in"},{id:"8",content:"Morbi leo risus"},{id:"9",content:"Porta ac consectetur ac"},{id:"10",content:"Vestibulum at eros"}],p=function(){var e=Object(i.useState)(b),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(h),o=Object(c.a)(l,2),m=o[0],u=o[1];return Object(d.jsxs)(s.l,{children:[Object(d.jsx)(s.p,{children:Object(d.jsx)(s.v,{tag:"h4",children:"Drag And Drop With Handle"})}),Object(d.jsxs)(s.m,{children:[Object(d.jsxs)(s.u,{children:["Add handle to your items using ",Object(d.jsx)("code",{children:"handle"})," prop."]}),Object(d.jsxs)(s.jb,{id:"dd-with-handle",children:[Object(d.jsxs)(s.B,{md:"6",sm:"12",children:[Object(d.jsx)("h4",{className:"my-1",children:"List One"}),Object(d.jsx)(n.ReactSortable,{tag:"ul",className:"list-group sortable",group:"shared-handle-group",handle:".handle",list:a,setList:r,children:a.map((function(e){return Object(d.jsxs)(s.Q,{children:[Object(d.jsx)("span",{className:"handle",children:"+"}),e.content]},e.id)}))})]}),Object(d.jsxs)(s.B,{md:"6",sm:"12",children:[Object(d.jsx)("h4",{className:"my-1",children:"People Group 2"}),Object(d.jsx)(n.ReactSortable,{tag:"ul",className:"list-group sortable",group:"shared-handle-group",handle:".handle",list:m,setList:u,children:m.map((function(e){return Object(d.jsxs)(s.Q,{className:"draggable",children:[Object(d.jsx)("span",{className:"handle",children:"+"}),e.content]},e.id)}))})]})]})]})]})},g=a(268),x=a(46),O=a(60),f=a(37),k=a(70),N=a(57),w=a(92),S=a(68),v=a(61),y=a(32),C={list1:[{id:"1",img:g.default,name:"Mary S. Navarre",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."},{id:"2",img:x.default,name:"Samuel M. Ellis",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"3",img:O.default,name:"Sandra C. Toney",content:"Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa."},{id:"4",img:f.default,name:"Cleveland C. Goins",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"5",img:k.default,name:"Linda M. English",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."}],list2:[{id:"6",img:N.default,name:"Alexandria I. Smelser",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"7",img:w.default,name:"Oscar N. Pool",content:"Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupsake."},{id:"8",img:S.default,name:"Kathy A. Alvarado",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."},{id:"9",img:v.default,name:"James E. White",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"10",img:y.default,name:"Roberta R. Babin",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."}]},T=function(){var e=Object(i.useState)(C.list1),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(C.list2),o=Object(c.a)(l,2),m=o[0],u=o[1];return Object(d.jsxs)(s.l,{children:[Object(d.jsx)(s.p,{children:Object(d.jsx)(s.v,{tag:"h4",children:"Multiple Lists"})}),Object(d.jsxs)(s.m,{children:[Object(d.jsxs)(s.u,{children:["Use ",Object(d.jsx)("code",{children:"group"})," prop to create a multiple list Drag & Drop."]}),Object(d.jsxs)(s.jb,{children:[Object(d.jsxs)(s.B,{md:"6",sm:"12",children:[Object(d.jsx)("h4",{className:"my-1",children:"People Group 1"}),Object(d.jsx)(n.ReactSortable,{tag:"ul",className:"list-group list-group-flush sortable",group:"shared-group",list:a,setList:r,children:a.map((function(e){return Object(d.jsx)(s.Q,{className:"draggable",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.img,className:"rounded-circle me-2",alt:"Generic placeholder image",height:"50",width:"50"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"mt-0",children:e.name}),e.content]})]})},e.id)}))})]}),Object(d.jsxs)(s.B,{md:"6",sm:"12",children:[Object(d.jsx)("h4",{className:"my-1",children:"People Group 2"}),Object(d.jsx)(n.ReactSortable,{tag:"ul",className:"list-group list-group-flush sortable",group:"shared-group",list:m,setList:u,children:m.map((function(e){return Object(d.jsx)(s.Q,{className:"draggable",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.img,className:"rounded-circle me-2",alt:"Generic placeholder image",height:"50",width:"50"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"mt-0",children:e.name}),e.content]})]})},e.id)}))})]})]})]})]})},B=a(645),z={list1:[{id:"1",img:g.default,name:"Mary S. Navarre",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."},{id:"2",img:x.default,name:"Samuel M. Ellis",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"3",img:O.default,name:"Sandra C. Toney",content:"Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa."},{id:"4",img:f.default,name:"Cleveland C. Goins",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"5",img:k.default,name:"Linda M. English",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."}],list2:[{id:"6",img:N.default,name:"Alexandria I. Smelser",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"7",img:w.default,name:"Oscar N. Pool",content:"Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupsake."},{id:"8",img:S.default,name:"Kathy A. Alvarado",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."},{id:"9",img:v.default,name:"James E. White",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"10",img:y.default,name:"Roberta R. Babin",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."}]};B.Sortable.mount(new B.MultiDrag);var D=function(){var e=Object(i.useState)(z.list1),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(i.useState)(z.list2),o=Object(c.a)(l,2),m=o[0],u=o[1];return Object(d.jsxs)(s.l,{children:[Object(d.jsx)(s.p,{children:Object(d.jsx)(s.v,{tag:"h4",children:"Multiple Drag"})}),Object(d.jsxs)(s.m,{children:[Object(d.jsxs)(s.u,{children:["Use ",Object(d.jsx)("code",{children:"MultiDrag"})," prop to create a multiple drag list."]}),Object(d.jsxs)(s.u,{children:["Use ",Object(d.jsx)("code",{children:"CTRL"})," key to select multiple items."]}),Object(d.jsxs)(s.jb,{children:[Object(d.jsxs)(s.B,{md:"6",sm:"12",children:[Object(d.jsx)("h4",{className:"my-1",children:"People Group 1"}),Object(d.jsx)(n.ReactSortable,{tag:"ul",multiDrag:!0,list:a,setList:r,group:"shared-multi-drag-group",className:"list-group list-group-flush sortable",children:a.map((function(e){return Object(d.jsx)(s.Q,{className:"draggable",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{width:"50",height:"50",src:e.img,className:"rounded-circle me-2",alt:"Generic placeholder image"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"mt-0",children:e.name}),e.content]})]})},e.id)}))})]}),Object(d.jsxs)(s.B,{md:"6",sm:"12",children:[Object(d.jsx)("h4",{className:"my-1",children:"People Group 2"}),Object(d.jsx)(n.ReactSortable,{tag:"ul",list:m,setList:u,group:"shared-multi-drag-group",className:"list-group list-group-flush sortable",children:m.map((function(e){return Object(d.jsx)(s.Q,{className:"draggable",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{width:"50",height:"50",src:e.img,className:"rounded-circle me-2",alt:"Generic placeholder image"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"mt-0",children:e.name}),e.content]})]})},e.id)}))})]})]})]})]})},L=[{id:"1",img:g.default,name:"Mary S. Navarre",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."},{id:"2",img:x.default,name:"Samuel M. Ellis",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"3",img:O.default,name:"Sandra C. Toney",content:"Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa chupsake."},{id:"4",img:f.default,name:"Cleveland C. Goins",content:"Toffee powder marzipan tiramisu. Cake cake dessert danish."},{id:"5",img:k.default,name:"Linda M. English",content:"Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."}],G=function(){var e=Object(i.useState)(L),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)(s.l,{children:[Object(d.jsx)(s.p,{children:Object(d.jsx)(s.v,{tag:"h4",children:"Basic List Group Sortable"})}),Object(d.jsxs)(s.m,{children:[Object(d.jsx)(s.u,{children:"The most basic list group is simply an unordered list with list items, and the proper classes."}),Object(d.jsx)(n.ReactSortable,{tag:"ul",className:"list-group",list:a,setList:r,children:a.map((function(e){return Object(d.jsx)(s.Q,{className:"draggable",children:Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.img,className:"rounded-circle me-2",alt:"Generic placeholder image",height:"50",width:"50"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"mt-0",children:e.name}),e.content]})]})},e.name)}))})]})]})},R=a(527);a(1492),t.default=function(){return Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(R.a,{title:"React Sortablejs",subTitle:"Sortablejs wrapper for React",link:"https://github.com/SortableJS/react-sortablejs"}),Object(d.jsxs)(s.jb,{children:[Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)(j,{})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)(G,{})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)(T,{})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)(m,{})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)(p,{})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)(D,{})})]})]})}},527:function(e,t,a){"use strict";var i=a(91),s=a(13);t.a=function(e){return Object(s.jsx)(i.jb,{className:"mb-2",children:Object(s.jsxs)(i.B,{sm:"12",className:"ms-50",children:[Object(s.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(s.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}}]);
//# sourceMappingURL=129.3ed8ac6d.chunk.js.map