(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[114],{1461:function(e,t,n){"use strict";n.r(t);var r=n(14),c=n(1),s=n(4),a=n(142),i=n(22),l=n(2),o=n(18),u=n.n(o),j=n(141),b=n(571),d=n(779),h=n(3),p=n(5),O=n(10),x=Object(O.d)(),m=Object(h.b)("appUsers/importData",function(){var e=Object(s.a)(Object(c.a)().mark((function e(t,n){var r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,p.a.post("/".concat(t.module,"/import"),{rows:t.data,validationOnly:t.validationflag,createdBy:x});case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.data.errors));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}()),f=(Object(h.c)({name:"appClients",initialState:{importErrors:[]},reducers:{},extraReducers:function(e){e.addCase(m.rejected,(function(e,t){e.importErrors=t.payload}))}}).reducer,n(545)),v=n(96),g=(n(626),n(140)),y=n(13),w=n(16);t.default=function(){var e=Object(y.g)().module,t=Object(y.f)(),n=Object(g.b)(),o=Object(l.useState)(""),h=Object(i.a)(o,2),p=h[0],O=h[1],x=Object(l.useState)(""),N=Object(i.a)(x,2),k=N[0],S=N[1],C=Object(l.useState)([]),_=Object(i.a)(C,2),B=_[0],D=_[1],F=Object(l.useState)([]),L=Object(i.a)(F,2),E=L[0],I=L[1],W=Object(l.useState)([]),z=Object(i.a)(W,2),A=z[0],R=z[1],U=Object(b.a)({multiple:!1,onDrop:function(e){var t=new FileReader;t.onload=function(){D([]),O("");var n=t.result,r=u.a.read(n,{type:"binary"});r.SheetNames.forEach((function(t){for(var n=u.a.utils.sheet_to_row_object_array(r.Sheets[t]),c=u.a.utils.decode_range(r.Sheets.Sheet1["!ref"]),s=[],a=c.s.c;a<=c.e.c;++a){var i=u.a.utils.encode_cell({r:c.s.r,c:a}),l=r.Sheets[t][i];l&&s.push(l.v.toLowerCase().split(" ").reduce((function(e,t){return e+(t.charAt(0).toUpperCase()+t.slice(1))})))}var o=u.a.utils.sheet_to_json(r.Sheets[t],{header:s,range:1});!function(e,t){D(e),O(t)}(n,e[0].name),I(o)}))},e.length&&e[0].name.endsWith("xlsx")?t.readAsBinaryString(e[0]):j.b.error((function(){return Object(w.jsxs)("p",{className:"mb-0",children:["You can only upload ",Object(w.jsx)("span",{className:"fw-bolder",children:".xlsx"}),", ",Object(w.jsx)("span",{className:"fw-bolder",children:".xls"})," &"," ",Object(w.jsx)("span",{className:"fw-bolder",children:".csv"})," Files!."]})}),{style:{minWidth:"380px"}})}}),J=U.getRootProps,P=U.getInputProps,T=B.length?B.map((function(e,t){return 0===t?Object(a.a)(Object.keys(e)):null})):[],K=k.length?A:B.length&&!k.length?B:null,V=function(){t("holidays"===e?"/account-settings":"/".concat(e,"/list"))},Y=function(){var t=Object(s.a)(Object(c.a)().mark((function t(){var r;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={data:E,module:e,validationflag:!1},t.next=3,n(m(r));case 3:return t.next=5,j.b.success("Imported SuccessFully");case 5:V();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.useEffect)(Object(s.a)(Object(c.a)().mark((function t(){var r;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null!==E&&E.length>0)){t.next=4;break}return r={data:E,module:e,validationflag:!0},t.next=4,n(m(r));case 4:case"end":return t.stop()}}),t)}))),[E]),Object(w.jsxs)(l.Fragment,{children:[Object(w.jsx)(f.a,{title:"Import ".concat(e.charAt(0).toUpperCase()+e.substring(1))}),Object(w.jsxs)(v.ib,{className:"import-component",children:[Object(w.jsx)(v.ib,{children:Object(w.jsx)(v.B,{sm:"12",md:"9",children:Object(w.jsx)(v.l,{children:Object(w.jsx)(v.m,{children:Object(w.jsx)(v.ib,{children:Object(w.jsx)(v.B,{sm:"12",children:Object(w.jsxs)("div",Object(r.a)(Object(r.a)({},J({className:"dropzone"})),{},{children:[Object(w.jsx)("input",Object(r.a)({},P())),Object(w.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column",children:[Object(w.jsx)(d.a,{size:64}),Object(w.jsx)("h5",{children:"Drop Files here or click to upload"}),Object(w.jsxs)("p",{className:"text-secondary",children:["Drop files here or click"," ",Object(w.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:"browse"})," ","thorough your machine"]})]})]}))})})})})})}),B.length?Object(w.jsx)(v.B,{sm:"12",children:Object(w.jsxs)(v.l,{children:[Object(w.jsxs)(v.p,{className:"justify-content-between flex-wrap",children:[Object(w.jsx)(v.v,{tag:"h4",children:p}),Object(w.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[Object(w.jsx)(v.N,{for:"search-input",className:"me-1",children:"Search"}),Object(w.jsx)(v.K,{id:"search-input",type:"text",bsSize:"sm",value:k,onChange:function(e){return function(e){var t=B,n=[],r=e.target.value;if(S(r),!r.length)return null;n=t.filter((function(e){var t=Object.keys(e),n=t.filter((function(t){return e[t].toString().toLowerCase().startsWith(r.toLowerCase())})),c=t.filter((function(t){return e[t].toString().toLowerCase().includes(r.toLowerCase())}));return n.length?e[n]:!n&&c.length?e[c]:null})),R(n),S(r)}(e)}})]})]}),Object(w.jsxs)(v.mb,{className:"table-hover-animation",responsive:!0,children:[Object(w.jsx)("thead",{children:Object(w.jsx)("tr",{children:T.length?T[0].map((function(e,t){return Object(w.jsx)("th",{children:e},t)})):null})}),Object(w.jsx)("tbody",{children:null!==K&&K.length?K.map((function(e,t){var n=Object.keys(e).map((function(t,n){return Object(w.jsx)("td",{children:e[t]},n)}));return Object(w.jsx)("tr",{children:n},t)})):null})]})]})}):null]}),Object(w.jsx)(v.ib,{className:"px-1",children:Object(w.jsx)(v.l,{className:"p-1",children:Object(w.jsxs)(v.B,{children:[Object(w.jsx)(v.i,{outline:!0,color:"warning",onClick:V,children:"Cancel"}),B.length>0&&Object(w.jsx)(v.i,{color:"primary",className:"ms-1",onClick:function(){Y()},children:"Import"})]})})})]})}},545:function(e,t,n){"use strict";var r=n(96),c=n(16);t.a=function(e){return Object(c.jsx)(r.ib,{className:"mb-2",children:Object(c.jsxs)(r.B,{sm:"12",className:"ms-50",children:[Object(c.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(c.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},626:function(e,t,n){}}]);
//# sourceMappingURL=114.5829bc27.chunk.js.map