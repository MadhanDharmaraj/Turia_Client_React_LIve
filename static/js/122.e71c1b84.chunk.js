(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[122],{1373:function(e,s,c){},1589:function(e,s,c){"use strict";c.r(s);var t=c(2),a=c(11),i=c(843),n=c(860),l=c(939),r=c(91),j=c(13),d=function(){return Object(j.jsx)("div",{className:"item-features",children:Object(j.jsxs)(r.jb,{className:"text-center",children:[Object(j.jsx)(r.B,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(j.jsxs)("div",{className:"w-75 mx-auto",children:[Object(j.jsx)(i.a,{}),Object(j.jsx)("h4",{className:"mt-2 mb-1",children:"100% Original"}),Object(j.jsx)(r.u,{children:"Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah."})]})}),Object(j.jsx)(r.B,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(j.jsxs)("div",{className:"w-75 mx-auto",children:[Object(j.jsx)(n.a,{}),Object(j.jsx)("h4",{className:"mt-2 mb-1",children:"10 Day Replacement"}),Object(j.jsx)(r.u,{children:"Marshmallow biscuit donut drag\xe9e fruitcake. Jujubes wafer cupcake."})]})}),Object(j.jsx)(r.B,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(j.jsxs)("div",{className:"w-75 mx-auto",children:[Object(j.jsx)(l.a,{}),Object(j.jsx)("h4",{className:"mt-2 mb-1",children:"1 Year Warranty"}),Object(j.jsx)(r.u,{children:"Cotton candy gingerbread cake I love sugar plum I love sweet croissant."})]})})]})})},m=c(17),b=c(18),o=c(132),h=c(6),x=c.n(h),O=c(947),p=c(941),u=c(876),g=c(898),f=c(937),N=c(885),v=c(957),w=c(967),y=c(903),k=function(e){var s=e.data,c=e.deleteWishlistItem,a=e.dispatch,i=e.addToWishlist,n=e.getProduct,l=e.productId,d=e.addToCart,h=Object(t.useState)("primary"),k=Object(b.a)(h,2),C=k[0],I=k[1],z=s.isInCart?o.b:"button";return Object(j.jsxs)(r.jb,{className:"my-2",children:[Object(j.jsx)(r.B,{className:"d-flex align-items-center justify-content-center mb-2 mb-md-0",md:"5",xs:"12",children:Object(j.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(j.jsx)("img",{className:"img-fluid product-img",src:s.image,alt:s.name})})}),Object(j.jsxs)(r.B,{md:"7",xs:"12",children:[Object(j.jsx)("h4",{children:s.name}),Object(j.jsxs)(r.u,{tag:"span",className:"item-company",children:["By",Object(j.jsx)("a",{className:"company-name",href:"/",onClick:function(e){return e.preventDefault()},children:s.brand})]}),Object(j.jsxs)("div",{className:"ecommerce-details-price d-flex flex-wrap mt-1",children:[Object(j.jsxs)("h4",{className:"item-price me-1",children:["$",s.price]}),Object(j.jsx)("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((function(e,c){return Object(j.jsx)("li",{className:"ratings-list-item me-25",children:Object(j.jsx)(O.a,{className:x()({"filled-star":c+1<=s.rating,"unfilled-star":c+1>s.rating})})},c)}))})]}),Object(j.jsxs)(r.u,{children:["Available -",Object(j.jsx)("span",{className:"text-success ms-25",children:"In stock"})]}),Object(j.jsx)(r.u,{children:s.description}),Object(j.jsxs)("ul",{className:"product-features list-unstyled",children:[s.hasFreeShipping?Object(j.jsxs)("li",{children:[Object(j.jsx)(p.a,{size:19}),Object(j.jsx)("span",{children:"Free Shipping"})]}):null,Object(j.jsxs)("li",{children:[Object(j.jsx)(u.a,{size:19}),Object(j.jsx)("span",{children:"EMI options available"})]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"product-color-options",children:[Object(j.jsx)("h6",{children:"Colors"}),Object(j.jsx)("ul",{className:"list-unstyled mb-0",children:s.colorOptions.map((function(e,c){var t=s.colorOptions.length-1===c;return Object(j.jsx)("li",{className:x()("d-inline-block",{"me-25":!t,selected:C===e}),onClick:function(){return I(e)},children:Object(j.jsx)("div",{className:"color-option b-".concat(e),children:Object(j.jsx)("div",{className:"filloption bg-".concat(e)})})},e)}))})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"d-flex flex-column flex-sm-row pt-1",children:[Object(j.jsxs)(r.i,Object(m.a)(Object(m.a)({tag:z,className:"btn-cart me-0 me-sm-1 mb-1 mb-sm-0",color:"primary",onClick:function(){return e=s.id,!1===s.isInCart&&a(d(e)),void a(n(l));var e}},s.isInCart?{to:"/apps/ecommerce/checkout"}:{}),{},{children:[Object(j.jsx)(p.a,{className:"me-50",size:14}),s.isInCart?"View in cart":"Move to cart"]})),Object(j.jsxs)(r.i,{className:"btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0",color:"secondary",outline:!0,onClick:function(){return e=s.isInWishlist,a(e?c(l):i(l)),void a(n(l));var e},children:[Object(j.jsx)(g.a,{size:14,className:x()("me-50",{"text-danger":s.isInWishlist})}),Object(j.jsx)("span",{children:"Wishlist"})]}),Object(j.jsxs)(r.ub,{className:"dropdown-icon-wrapper btn-share",children:[Object(j.jsx)(r.G,{className:"btn-icon hide-arrow",color:"secondary",caret:!0,outline:!0,children:Object(j.jsx)(f.a,{size:14})}),Object(j.jsxs)(r.F,{end:!0,children:[Object(j.jsx)(r.E,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(N.a,{size:14})}),Object(j.jsx)(r.E,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(v.a,{size:14})}),Object(j.jsx)(r.E,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(w.a,{size:14})}),Object(j.jsx)(r.E,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(j.jsx)(y.a,{size:14})})]})]})]})]})]})},C=c(653),I=c(553),z=c.p+"static/media/apple-watch.884c5ea7.png",P=c.p+"static/media/macbook-pro.4ecc26e8.png",B=c.p+"static/media/homepod.c5fa0cec.png",A=c.p+"static/media/magic-mouse.f8ccce24.png",D=c.p+"static/media/iphone-x.ba5bfe17.png",E=(c(1028),function(){C.k.use([C.g]);var e=[{name:"Apple Watch Series 6",brand:"Apple",ratings:4,price:399.98,img:z},{name:"Apple MacBook Pro - Silver",brand:"Apple",ratings:2,price:2449.49,img:P},{name:"Apple HomePod (Space Grey)",brand:"Apple",ratings:3,price:229.29,img:B},{name:"Magic Mouse 2 - Black",brand:"Apple",ratings:3,price:90.98,img:A},{name:"iPhone 12 Pro",brand:"Apple",ratings:4,price:1559.99,img:D}];return Object(j.jsxs)(t.Fragment,{children:[Object(j.jsxs)("div",{className:"mt-4 mb-2 text-center",children:[Object(j.jsx)("h4",{children:"Related Products"}),Object(j.jsx)(r.u,{children:"People also search for this items"})]}),Object(j.jsx)(I.a,Object(m.a)(Object(m.a)({},{className:"swiper-responsive-breakpoints swiper-container px-4 py-2",slidesPerView:5,spaceBetween:55,navigation:!0,breakpoints:{1600:{slidesPerView:4,spaceBetween:55},1300:{slidesPerView:3,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},320:{slidesPerView:1,spaceBetween:55}}}),{},{children:e.map((function(e){return Object(j.jsx)(I.b,{children:Object(j.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(j.jsxs)("div",{className:"item-heading",children:[Object(j.jsx)("h5",{className:"text-truncate mb-0",children:e.name}),Object(j.jsxs)("small",{className:"text-body",children:["by ",e.brand]})]}),Object(j.jsx)("div",{className:"img-container w-50 mx-auto py-75",children:Object(j.jsx)("img",{src:e.img,alt:"swiper 1",className:"img-fluid"})}),Object(j.jsxs)("div",{className:"item-meta",children:[Object(j.jsx)("ul",{className:"unstyled-list list-inline mb-25",children:new Array(5).fill().map((function(s,c){return Object(j.jsx)("li",{className:"ratings-list-item me-25",children:Object(j.jsx)(O.a,{className:x()({"filled-star":c+1<=e.ratings,"unfilled-star":c+1>e.ratings})})},c)}))}),Object(j.jsxs)(r.u,{className:"text-primary mb-0",children:["$",e.price]})]})]})},e.name)}))}))]})}),W=c(506),F=c(133),M=c(156);c(1373),s.default=function(){var e=Object(a.g)().product,s=e.substring(e.lastIndexOf("-")+1),c=Object(F.b)(),i=Object(F.c)((function(e){return e.ecommerce}));return Object(t.useEffect)((function(){c(Object(M.g)(s))}),[]),Object(j.jsxs)(t.Fragment,{children:[Object(j.jsx)(W.a,{title:"Product Details",data:[{title:"eCommerce"},{title:"Details"}]}),Object(j.jsx)("div",{className:"app-ecommerce-details",children:Object.keys(i.productDetail).length?Object(j.jsxs)(r.l,{children:[Object(j.jsx)(r.m,{children:Object(j.jsx)(k,{dispatch:c,addToCart:M.a,productId:s,getProduct:M.g,data:i.productDetail,addToWishlist:M.b,deleteWishlistItem:M.e})}),Object(j.jsx)(d,{}),Object(j.jsx)(r.m,{children:Object(j.jsx)(E,{})})]}):null})]})}},506:function(e,s,c){"use strict";var t=c(17),a=c(2),i=c(132),n=c(6),l=c.n(n),r=c(896),j=c(852),d=c(828),m=c(826),b=c(827),o=c(91),h=c(13);s.a=function(e){var s=e.data,c=e.title;return Object(h.jsxs)("div",{className:"content-header row",children:[Object(h.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(h.jsx)("div",{className:"row breadcrumbs-top",children:Object(h.jsxs)("div",{className:"col-12",children:[c?Object(h.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(h.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(h.jsxs)(o.g,{children:[Object(h.jsx)(o.h,{tag:"li",children:Object(h.jsx)(i.b,{to:"/",children:"Home"})}),s.map((function(e,c){var n=e.link?i.b:a.Fragment,r=s.length-1===c;return Object(h.jsx)(o.h,{tag:"li",active:!r,className:l()({"text-primary":!r}),children:Object(h.jsx)(n,Object(t.a)(Object(t.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(h.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(h.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(h.jsxs)(o.ub,{children:[Object(h.jsx)(o.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(h.jsx)(r.a,{size:14})}),Object(h.jsxs)(o.F,{tag:"ul",end:!0,children:[Object(h.jsxs)(o.E,{tag:i.b,to:"/apps/todo",children:[Object(h.jsx)(j.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(h.jsxs)(o.E,{tag:i.b,to:"/apps/chat",children:[Object(h.jsx)(d.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(h.jsxs)(o.E,{tag:i.b,to:"/apps/email",children:[Object(h.jsx)(m.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(h.jsxs)(o.E,{tag:i.b,to:"/apps/calendar",children:[Object(h.jsx)(b.a,{className:"me-1",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}}}]);
//# sourceMappingURL=122.e71c1b84.chunk.js.map