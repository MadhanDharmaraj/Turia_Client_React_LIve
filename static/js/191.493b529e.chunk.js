(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[191],{1335:function(e,t,n){"use strict";n.r(t);var a=n(22),i=n(2),r=n(546),s=n(18),c=n.n(s),o=n(26),l=n(96),b=n(16),j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}];t.default=function(){var e=Object(i.useRef)(),t=Object(i.useState)(j),n=Object(a.a)(t,1)[0],s=Object(i.useState)(""),m=Object(a.a)(s,2),d=m[0],u=m[1],h=Object(i.useState)(!1),x=Object(a.a)(h,2),O=x[0],f=x[1],w=Object(i.useState)(""),p=Object(a.a)(w,2),C=p[0],g=p[1],v=Object(i.useState)([]),y=Object(a.a)(v,2),S=y[0],L=y[1],k=Object(i.useState)("xlsx"),N=Object(a.a)(k,2),E=N[0],T=N[1],_=function(){f(!O)},B=(d?S:n).map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.website}),Object(b.jsx)("td",{children:e.id})]},e.id)}));return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)(r.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),Object(b.jsx)(l.ib,{className:"export-component",children:Object(b.jsx)(l.B,{sm:"12",children:Object(b.jsxs)(l.l,{children:[Object(b.jsx)(l.m,{className:"pb-0",children:Object(b.jsxs)("div",{className:"d-flex justify-content-between flex-wrap flex-sm-row flex-column",children:[Object(b.jsx)(l.i,{color:"primary",onClick:function(){return _()},children:"Export"}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-end mt-sm-0 mt-1",children:[Object(b.jsx)(l.N,{for:"search-input",className:"me-1",children:"Search"}),Object(b.jsx)(l.K,{id:"search-input",bsSize:"sm",type:"text",value:d,onChange:function(e){return function(e){var t=n,a=[],i=e.target.value;u(i),i.length&&(a=t.filter((function(e){var t=e.name.toLowerCase().startsWith(i.toLowerCase())||e.email.toLowerCase().startsWith(i.toLowerCase())||e.website.toLowerCase().startsWith(i.toLowerCase())||e.id.toString().toLowerCase().startsWith(i.toLowerCase()),n=e.name.toLowerCase().includes(i.toLowerCase())||e.email.toLowerCase().includes(i.toLowerCase())||e.website.toLowerCase().includes(i.toLowerCase())||e.id.toString().toLowerCase().includes(i.toLowerCase());return t||(!t&&n?n:null)})),L(a),u(i))}(e)}})]})]})}),Object(b.jsxs)(l.mb,{innerRef:e,className:"table-hover-animation mt-2",responsive:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Website"}),Object(b.jsx)("th",{children:"Rank"})]})}),Object(b.jsx)("tbody",{children:B})]})]})})}),Object(b.jsxs)(l.Q,{isOpen:O,toggle:function(){return _()},className:"modal-dialog-centered",onClosed:function(){return g("")},children:[Object(b.jsx)(l.T,{toggle:function(){return _()},children:"Export To Excel"}),Object(b.jsxs)(l.R,{children:[Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsx)(l.K,{type:"text",value:C,onChange:function(e){return g(e.target.value)},placeholder:"Enter File Name"})}),Object(b.jsx)("div",{children:Object(b.jsxs)(l.K,{type:"select",id:"selectFileFormat",name:"customSelect",value:E,onChange:function(e){return T(e.target.value)},children:[Object(b.jsx)("option",{children:"xlsx"}),Object(b.jsx)("option",{children:"csv"}),Object(b.jsx)("option",{children:"txt"})]})})]}),Object(b.jsxs)(l.S,{children:[Object(b.jsx)(l.i,{color:"primary",onClick:function(){return function(){_();var t=E,n=c.a.utils.table_to_book(e.current,{sheet:"Sheet JS"}),a=c.a.write(n,{bookType:t,bookSST:!0,type:"binary"}),i=C.length?"".concat(C,".").concat(E):"excel-sheet.".concat(E);return o.saveAs(new Blob([function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;a++)n[a]=255&e.charCodeAt(a);return t}(a)],{type:"application/octet-stream"}),i)}()},children:"Export"}),Object(b.jsx)(l.i,{color:"flat-danger",onClick:function(){return _()},children:"Cancel"})]})]})]})}},546:function(e,t,n){"use strict";var a=n(96),i=n(16);t.a=function(e){return Object(i.jsx)(a.ib,{className:"mb-2",children:Object(i.jsxs)(a.B,{sm:"12",className:"ms-50",children:[Object(i.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(i.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}}}]);
//# sourceMappingURL=191.493b529e.chunk.js.map