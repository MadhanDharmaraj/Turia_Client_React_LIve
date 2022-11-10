(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[116],{1606:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n(498),c=n(90),s=n(511),r=n.n(s),l=n(512),a=n.n(l),u=n(10),m=a()(r.a),b=function(){return Object(u.jsxs)(c.l,{children:[Object(u.jsx)(c.p,{children:Object(u.jsx)(c.v,{tag:"h4",children:"Types"})}),Object(u.jsxs)(c.m,{children:[Object(u.jsx)(c.u,{className:"mb-0",children:'SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info".'}),Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(c.i,{color:"success",onClick:function(){return m.fire({title:"Good job!",text:"You clicked the button!",icon:"success",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Success"}),Object(u.jsx)(c.i,{color:"danger",onClick:function(){return m.fire({title:"Error!",text:" You clicked the button!",icon:"error",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Error"}),Object(u.jsx)(c.i,{color:"warning",onClick:function(){return m.fire({title:"Warning!",text:" You clicked the button!",icon:"warning",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Warning"}),Object(u.jsx)(c.i,{color:"info",onClick:function(){return m.fire({title:"Info!",text:"You clicked the button!",icon:"info",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Info"}),Object(u.jsx)(c.i,{onClick:function(){return m.fire({title:"Question?",text:" You clicked the button!",icon:"question",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Question"})]})]})]})},j=n(941),d=n(940),h=a()(r.a),f=function(){return Object(u.jsxs)(c.l,{children:[Object(u.jsx)(c.p,{children:Object(u.jsx)(c.v,{tag:"h4",children:"Basic"})}),Object(u.jsxs)(c.m,{children:[Object(u.jsx)(c.u,{className:"mb-0",children:"SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!"}),Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(c.i,{color:"primary",onClick:function(){return h.fire({title:"Any fool can use a computer",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Basic"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return h.fire({title:"The Internet?,",text:"That thing is still around?",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"With Title"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return h.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="#">Why do I have this issue?</a>',customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"With Footer"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return h.fire({title:"<strong>HTML <u>example</u></strong>",icon:"info",html:'You can use <b>bold text</b>, <a href="https://pixinvent.com/" target="_blank">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:Object(u.jsxs)("span",{className:"align-middle",children:[Object(u.jsx)(j.a,{className:"me-50",size:15}),Object(u.jsx)("span",{className:"align-middle",children:"Great!"})]}),cancelButtonText:Object(u.jsx)(d.a,{size:15}),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1})},outline:!0,children:"HTML"})]})]})]})},x=n(248),p=a()(r.a),O=function(){return Object(u.jsxs)(c.l,{children:[Object(u.jsx)(c.p,{children:Object(u.jsx)(c.v,{tag:"h4",children:"Options"})}),Object(u.jsx)(c.m,{children:Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(c.i,{color:"primary",onClick:function(){return p.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:x.default,imageWidth:300,imageHeight:200,imageAlt:"Custom image",customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Image"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){var t;r.a.fire({title:"Auto close alert!",html:"I will close in <b></b> seconds.",timerProgressBar:!0,timer:2e3,didOpen:function(){r.a.showLoading();var e=r.a.getHtmlContainer().querySelector("b");t=setInterval((function(){e.textContent=r.a.getTimerLeft()}),100)},willClose:function(){clearInterval(t)}}).then((function(t){t.dismiss===r.a.DismissReason.timer&&console.log("I was closed by the timer")}))},outline:!0,children:"Timeout"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return p.fire({backdrop:!0,title:"Click outside to close!",text:"This is a cool message!",allowOutsideClick:!0,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},outline:!0,children:"Click Outside"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){p.fire({title:"Search for a user",input:"text",customClass:{input:"mx-3",confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1,inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:function(t){return fetch("//api.github.com/users/".concat(t)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).catch((function(t){p.showValidationMessage("Request failed:  ".concat(t))}))}}).then((function(t){t.value&&p.fire({title:"".concat(t.value.login,"'s avatar"),imageUrl:t.value.avatar_url,customClass:{confirmButton:"btn btn-primary"}})}))},outline:!0,children:"Ajax"})]})})]})},C=a()(r.a),g=function(){return Object(u.jsxs)(c.l,{children:[Object(u.jsx)(c.p,{children:Object(u.jsx)(c.v,{tag:"h4",children:"Callback"})}),Object(u.jsx)(c.m,{children:Object(u.jsxs)(c.ib,{children:[Object(u.jsxs)(c.B,{className:"mb-2 mb-md-0",md:"6",sm:"12",children:[Object(u.jsx)("h5",{className:"mb-1",children:"Confirm Button Text"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return C.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then((function(t){t.value&&C.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}})}))},outline:!0,children:"Confirm Text"})]}),Object(u.jsxs)(c.B,{md:"6",sm:"12",children:[Object(u.jsx)("h5",{className:"mb-1",children:"Confirm Button Color"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return C.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then((function(t){t.value?C.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success"}}):t.dismiss===C.DismissReason.cancel&&C.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",customClass:{confirmButton:"btn btn-success"}})}))},outline:!0,children:"Confirm & cancel"})]})]})})]})},y=a()(r.a),B=function(){return Object(u.jsxs)(c.l,{children:[Object(u.jsx)(c.p,{children:Object(u.jsx)(c.v,{tag:"h4",children:"Position"})}),Object(u.jsxs)(c.m,{children:[Object(u.jsxs)(c.u,{className:"mb-0",children:["You can specify position of your alert with"," ",Object(u.jsx)("code",{children:"position : top-start | top-end | bottom-start | bottom-end "})," "]}),Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(c.i,{color:"primary",onClick:function(){return y.fire({position:"top-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},outline:!0,children:"Top Start"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return y.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},outline:!0,children:"Top End"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return y.fire({position:"bottom-start",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},outline:!0,children:"Bottom Start"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return y.fire({position:"bottom-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},outline:!0,children:"Bottom End"})]})]})]})},k=a()(r.a),w=function(){return Object(u.jsxs)(c.l,{children:[Object(u.jsx)(c.p,{children:Object(u.jsx)(c.v,{tag:"h4",children:"Animations"})}),Object(u.jsxs)(c.m,{children:[Object(u.jsxs)(c.u,{className:"mb-0",children:["Use ",Object(u.jsx)("code",{children:"popup"})," inside ",Object(u.jsx)("code",{children:"showClass"})," parameter to add animation to your alert."]}),Object(u.jsxs)("div",{className:"demo-inline-spacing",children:[Object(u.jsx)(c.i,{color:"primary",onClick:function(){return k.fire({title:"Bounce In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__bounceIn"},buttonsStyling:!1})},outline:!0,children:"Bounce In"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return k.fire({title:"Fade In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__fadeIn"},buttonsStyling:!1})},outline:!0,children:"Fade In"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return k.fire({title:"Flip In Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__flipInX"},buttonsStyling:!1})},outline:!0,children:"Flip In"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return k.fire({title:"Tada Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__tada"},buttonsStyling:!1})},outline:!0,children:"Tada"}),Object(u.jsx)(c.i,{color:"primary",onClick:function(){return k.fire({title:"Shake Animation",customClass:{confirmButton:"btn btn-primary"},showClass:{popup:"animate__animated animate__shakeX"},buttonsStyling:!1})},outline:!0,children:"Shake"})]})]})]})};n(959),n(544),e.default=function(){return Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)(o.a,{title:"Sweet Alerts2",subTitle:"A React implementation of SweetAlert2",link:"https://github.com/sweetalert2/sweetalert2-react-content"}),Object(u.jsxs)(c.ib,{children:[Object(u.jsx)(c.B,{sm:"12",children:Object(u.jsx)(f,{})}),Object(u.jsx)(c.B,{sm:"12",children:Object(u.jsx)(B,{})}),Object(u.jsx)(c.B,{sm:"12",children:Object(u.jsx)(w,{})}),Object(u.jsx)(c.B,{sm:"12",children:Object(u.jsx)(b,{})}),Object(u.jsx)(c.B,{sm:"12",children:Object(u.jsx)(O,{})}),Object(u.jsx)(c.B,{sm:"12",children:Object(u.jsx)(g,{})})]})]})}},498:function(t,e,n){"use strict";var i=n(90),o=n(10);e.a=function(t){return Object(o.jsx)(i.ib,{className:"mb-2",children:Object(o.jsxs)(i.B,{sm:"12",className:"ms-50",children:[Object(o.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:t.title}),t.link?Object(o.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.subTitle}):Object(o.jsx)("p",{className:"text-primary",children:t.subTitle})]})})}},544:function(t,e,n){}}]);
//# sourceMappingURL=116.be299694.chunk.js.map