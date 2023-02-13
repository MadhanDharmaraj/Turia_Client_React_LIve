(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[67],{1674:function(e,t,n){"use strict";n.r(t);var c=n(17),i=n(135),s=n(4),a=n(18),r=n(1),l=n.n(r),o=n(2),d=n(11),b=n(132),u=n(6),j=n.n(u),m=n(133),f=n(147),O=n(5),h=n(818),p=n(929),x=n(511),v=n(509),g=n(522),y=n(523),N=n(12),B=n(91),_=(n(524),n(510),n(508),n(513),n(517)),C=n.n(_),S=n(518),w=n.n(S),E=n(13),k=Object(N.b)(),A=Object(N.e)(),P=function(){var e,t=w()(C.a),n=/^[0-9\- ]{10,10}$/,r=Object(d.f)({}),u=Object(m.c)((function(e){return e.client})),N=Object(m.b)(),_=Object(o.useState)([]),S=Object(a.a)(_,2),P=S[0],T=S[1],I=Object(o.useState)([]),q=Object(a.a)(I,2),L=q[0],z=q[1],D=Object(o.useState)([]),R=Object(a.a)(D,2),Z=R[0],G=R[1],V=Object(o.useState)([]),J=Object(a.a)(V,2),M=J[0],Y=J[1],$=Object(o.useState)([]),F=Object(a.a)($,2),U=F[0],H=F[1],K=Object(o.useState)(2),Q=Object(a.a)(K,2),W=Q[0],X=Q[1],ee=Object(o.useState)([]),te=Object(a.a)(ee,2),ne=te[0],ce=te[1],ie=Object(o.useState)(null),se=Object(a.a)(ie,2),ae=se[0],re=se[1],le=Object(o.useState)({}),oe=Object(a.a)(le,2),de=oe[0],be=oe[1],ue=g.d().shape({clientType:g.c(),updatedBy:g.f().default(A),uniqueIdentity:g.f().nullable(),contactPersonName:g.f().required("Please Enter a Contact Person Name"),name:g.f().when(["clientType"],{is:function(e){return 2===e},then:g.f().required("Please Enter Business Name.")}),contactnumber:g.f().matches(n,{message:"Phone number is not valid",excludeEmptyString:!0}),email:g.f().email("Please Enter valid Email").required("Please Enter valid Email"),businessEntity:g.f().when(["clientType"],{is:function(e){return 2===e},then:g.f().required("Please Select Business Enity.")}),gstRegistrationType:g.f().required("Please select a GST Type"),gstin:g.f().required("Please Enter GSTIN No"),placeOfSupply:g.f().required("Please select Place Of Supply"),currency:g.f(),billingAddressLine1:g.f().nullable(),billingAddressLine2:g.f().nullable(),billingAddressCity:g.f().nullable(),billingAddressState:g.c().nullable(),billingAddressCountry:g.c().nullable(),billingAddressZip:g.f().matches(/^[0-9\- ]{6,6}$/,{message:"Zip Code is not valid",excludeEmptyString:!0}),contact_info:g.a().of(g.d().shape({updatedBy:g.f().default(A),createdBy:g.f().default(A),name:g.f().required("Please Enter A Name"),email:g.f().email().required("Please Enter valid Email"),contactnumber:g.f().matches(n,{message:"Phone number is not valid",excludeEmptyString:!0})})).min(1,"Please Enter atleast one contact Info")}),je=Object(v.f)({resolver:Object(y.a)(ue),defaultValues:ue.cast()}),me=je.handleSubmit,fe=je.reset,Oe=je.control,he=je.formState.errors,pe=Object(d.g)().id,xe=Object(v.e)({name:"contact_info",control:Oe,keyName:"rowid"}),ve=xe.fields,ge=xe.append,ye=xe.remove,Ne=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.contact_info,delete t.contact_info,c=de.id,e.next=5,N(Object(f.i)({data:t,id:c}));case 5:ce((function(e){return[].concat(Object(i.a)(e),Object(i.a)(n))}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Be=function(e){return t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(){var n=Object(s.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!c.value){n.next=7;break}return n.next=3,N(Object(f.e)(e));case 3:return t.fire({icon:"success",title:"Deleted!",text:"Conatct has been deleted.",customClass:{confirmButton:"btn btn-success"}}),n.abrupt("return",!0);case 7:if(c.dismiss!==t.DismissReason.cancel){n.next=9;break}return n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},_e=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(n=Oe._formValues.contact_info[t].id)){e.next=5;break}return e.next=4,Be(n);case 4:c=e.sent;case 5:c&&ye(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(Object(f.g)(ae));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(Object(f.f)(pe));case 2:t=e.sent,be(t.payload);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){Object.keys(de).length>0&&(fe({clientType:1,uniqueIdentity:de.uniqueidentity,contactPersonName:de.contactpersonname,organization:de.organizationid,name:de.name,contactnumber:de.contactnumber,businessEntity:de.businessentityid,email:de.email,gstRegistrationType:de.gstregistrationtypeid,gstin:de.gstin,placeOfSupply:de.placeofsupplyid,currency:de.currencyid,billingAddressLine1:de.billingaddressline1,billingAddressLine2:de.billingaddressline2,billingAddressCountry:de.billingaddresscountry,billingAddressState:de.billingaddressstate,billingAddressZip:de.billingaddresszip,billingAddressCity:de.billingaddresscity}),re(de.id)),null!==ae&&Ce()}),[ae,de]),Object(o.useEffect)((function(){u.clientInformations.forEach((function(e){ge(e)}))}),[u.clientInformations]),Object(o.useEffect)((function(){ne.length&&function(){var e={rows:ne};N(Object(f.j)(e)),r("/client/view/".concat(ae))}()}),[ne]),Object(o.useEffect)((function(){O.a.post("/businessentities/list").then((function(e){var t=e.data;T(t.businessentities)})),O.a.post("/countries/list").then((function(e){var t=e.data;G(t.countries)})),O.a.post("/currencies/list").then((function(e){var t=e.data;Y(t.currencies)})),O.a.post("/gstregistrationtypes/list").then((function(e){var t=e.data;H(t.gstregistrationtypes)})),O.a.post("/states/list").then((function(e){var t=e.data;z(t.states)})),Se()}),[]);var we=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(E.jsxs)(B.jb,{className:"mb-1",children:[Object(E.jsx)(B.O,{sm:"4",size:"lg",className:j()("form-label ".concat(n?"required":"")),for:t,children:e}),Object(E.jsxs)(B.B,{sm:"8",children:[Object(E.jsx)(v.a,{id:t,name:t,control:Oe,render:function(e){var n=e.field;return Object(E.jsx)(B.L,Object(c.a)({invalid:he[t]&&!0},n))}}),he[t]&&Object(E.jsx)(B.I,{children:he[t].message})]})]})},Ee=function(e,t,n){var i,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(E.jsxs)(B.jb,{className:"mb-1",children:[Object(E.jsx)(B.O,{sm:"4",size:"lg",className:j()("form-label ".concat(s?"required":"")),for:t,children:e}),Object(E.jsxs)(B.B,{sm:"8",children:[Object(E.jsx)(v.a,{control:Oe,name:t,id:t,render:function(e){var i=e.field,s=e.ref;return Object(E.jsx)(x.a,Object(c.a)(Object(c.a)({inputRef:s,className:j()("react-select",{"is-invalid":he[t]})},i),{},{classNamePrefix:"select",isDisabled:"currency"===t,options:n,value:n.find((function(e){return e.id===i.value})),onChange:function(e){return i.onChange(e.id)},getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id}}))}}),he[t]&&Object(E.jsx)(B.I,{className:"text-danger",children:null===(i=he[t])||void 0===i?void 0:i.message})]})]})};return Object(E.jsxs)("form",{onSubmit:me(Ne),children:[Object(E.jsxs)(B.l,{className:"invoice-preview-card",children:[Object(E.jsx)(B.p,{children:Object(E.jsx)(B.v,{children:" Edit Client"})}),Object(E.jsxs)(B.m,{className:"pb-0",children:[Object(E.jsxs)(B.jb,{children:[Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:Object(E.jsxs)(B.jb,{className:"mb-1",children:[Object(E.jsx)(B.O,{sm:"4",size:"lg",className:"form-label required",for:"contactPersonName",children:"Client Type"}),Object(E.jsxs)(B.B,{sm:"8",children:[Object(E.jsxs)("div",{className:"form-check form-check-primary form-check-inline",children:[Object(E.jsx)(v.a,{name:"clientType",control:Oe,render:function(e){var t=e.field;return Object(E.jsx)(B.L,Object(c.a)(Object(c.a)({type:"radio",id:"clientType_1",defaultChecked:!0,value:2},t),{},{onInput:function(){return X(2)}}))}}),Object(E.jsx)(B.O,{className:"form-check-label",for:"clientType_1",children:"Business"})]}),Object(E.jsxs)("div",{className:"form-check form-check-primary form-check-inline",children:[Object(E.jsx)(v.a,{name:"clientType",control:Oe,render:function(e){var t=e.field;return Object(E.jsx)(B.L,Object(c.a)(Object(c.a)({id:"clientType_2",type:"radio",value:1},t),{},{onInput:function(){return X(1)}}))}}),Object(E.jsx)(B.O,{className:"form-check-label",for:"clientType_2",children:"Individual"})]})]})]})}),Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("Unique No","uniqueIdentity",!0)})]}),Object(E.jsxs)(B.jb,{children:[Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("Contact Person Name","contactPersonName",!0)}),Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("Business Name","name",!0)})]}),Object(E.jsxs)(B.jb,{children:[Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("Mobile Number","contactnumber")}),Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("Email ID","email",!0)})]}),2===W&&Object(E.jsx)(B.jb,{children:Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:Ee("Business Entity","businessEntity",P,!0)})})]}),Object(E.jsx)("hr",{className:"invoice-spacing"}),he.contact_info&&Object(E.jsx)("p",{className:"text-danger ms-2",children:null===(e=he.contact_info)||void 0===e?void 0:e.message}),Object(E.jsxs)(B.m,{className:"invoice-padding invoice-product-details",children:[ve.map((function(e,t){var n,i,s,a,r,l,o,d,b,u,j,m,f,O,p,x;return Object(E.jsx)("div",{className:"repeater-wrapper",children:Object(E.jsx)(B.jb,{children:Object(E.jsxs)(B.B,{className:"d-lg-flex product-details-border position-relative pe-0",sm:"12",children:[Object(E.jsxs)(B.jb,{className:"w-100 pe-lg-0 pe-1 py-2",children:[Object(E.jsxs)(B.B,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2 col-lg-3 col-sm-12",children:[Object(E.jsx)(B.u,{className:"col-title mb-md-50 mb-0",children:"First Name"}),Object(E.jsx)(v.a,{control:Oe,id:"contact_info_name",name:"contact_info[".concat(t,"].name"),render:function(e){var n,i,s=e.field;return Object(E.jsx)(B.L,Object(c.a)({type:"text",onChange:function(e){s.onChange(e)},invalid:(null===(n=he.contact_info)||void 0===n||null===(i=n[t])||void 0===i?void 0:i.name)&&!0},s))}}),(null===(n=he.contact_info)||void 0===n||null===(i=n[t])||void 0===i?void 0:i.name)&&Object(E.jsx)(B.I,{children:null===(s=he.contact_info)||void 0===s||null===(a=s[t])||void 0===a?void 0:a.name.message})]}),Object(E.jsxs)(B.B,{className:"my-lg-0 my-2 col-lg-3 col-sm-12",children:[Object(E.jsx)(B.u,{className:"col-title mb-md-2 mb-0 ",children:"Email"}),Object(E.jsx)(v.a,{control:Oe,id:"contact_info_email",name:"contact_info[".concat(t,"].email"),render:function(e){var n,i,s=e.field;return Object(E.jsx)(B.L,Object(c.a)({type:"email",onChange:function(e){s.onChange(e)},invalid:(null===(n=he.contact_info)||void 0===n||null===(i=n[t])||void 0===i?void 0:i.email)&&!0},s))}}),(null===(r=he.contact_info)||void 0===r||null===(l=r[t])||void 0===l?void 0:l.email)&&Object(E.jsx)(B.I,{children:null===(o=he.contact_info)||void 0===o||null===(d=o[t])||void 0===d?void 0:d.email.message})]}),Object(E.jsxs)(B.B,{className:"my-lg-0 my-2",lg:"2",sm:"12",children:[Object(E.jsx)(B.u,{className:"col-title mb-md-2 mb-0",children:"Mobile"}),Object(E.jsx)(v.a,{control:Oe,id:"contact_info_contactnumber",name:"contact_info[".concat(t,"].contactnumber"),render:function(e){var n,i,s=e.field;return Object(E.jsx)(B.L,Object(c.a)({type:"number",onChange:function(e){s.onChange(e)},invalid:(null===(n=he.contact_info)||void 0===n||null===(i=n[t])||void 0===i?void 0:i.contactnumber)&&!0},s))}}),(null===(b=he.contact_info)||void 0===b||null===(u=b[t])||void 0===u?void 0:u.contactnumber)&&Object(E.jsx)(B.I,{children:null===(j=he.contact_info)||void 0===j||null===(m=j[t])||void 0===m?void 0:m.contactnumber.message})]}),Object(E.jsxs)(B.B,{className:"my-lg-0 mt-2",lg:"2",sm:"12",children:[Object(E.jsx)(B.u,{className:"col-title mb-md-50 mb-0",children:"Designation"}),Object(E.jsx)(v.a,{control:Oe,id:"contact_info_designation",name:"contact_info[".concat(t,"].designation"),render:function(e){var n,i,s=e.field;return Object(E.jsx)(B.L,Object(c.a)({type:"text",invalid:(null===(n=he.contact_info)||void 0===n||null===(i=n[t])||void 0===i?void 0:i.designation)&&!0,onChange:function(e){s.onChange(e)}},s))}}),(null===(f=he.contact_info)||void 0===f||null===(O=f[t])||void 0===O?void 0:O.designation)&&Object(E.jsx)(B.I,{children:null===(p=he.contact_info)||void 0===p||null===(x=p[t])||void 0===x?void 0:x.designation.message})]}),Object(E.jsxs)(B.B,{className:"my-lg-0 mt-2",lg:"1",sm:"12",children:[Object(E.jsx)(B.u,{className:"col-title mb-md-50 mb-0",children:"Primary"}),Object(E.jsx)("div",{className:"form-switch form-check-primary",children:Object(E.jsx)(v.a,{control:Oe,id:"contact_info_primarystatus",name:"contact_info[".concat(t,"].primarystatus"),render:function(e){var t=e.field;return Object(E.jsx)(B.L,Object(c.a)(Object(c.a)({type:"switch",onChange:function(e){t.onChange(e)}},t),{},{defaultChecked:t.value}))}})})]})]}),Object(E.jsx)("div",{className:"d-lg-flex justify-content-center border-start invoice-product-actions py-50 px-25",children:Object(E.jsx)(h.a,{size:18,className:"cursor-pointer",onClick:function(){return _e(t)}})})]})})},e.rowid)})),Object(E.jsx)(B.jb,{className:"mt-1",children:Object(E.jsx)(B.B,{sm:"12",className:"px-0",children:Object(E.jsxs)(B.i,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){ge({id:"",name:"",email:"",contactnumber:"",contactid:pe,organizationid:k,designation:"",primarystatus:!1})},children:[Object(E.jsx)(p.a,{size:14,className:"me-25"})," ",Object(E.jsx)("span",{className:"align-middle",children:"Add Item"})]})})})]}),Object(E.jsx)("hr",{className:"invoice-spacing"}),Object(E.jsxs)(B.m,{children:[Object(E.jsxs)(B.jb,{children:[Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:Ee("GST Type","gstRegistrationType",U,!0)}),Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:Ee("Place of Supply","placeOfSupply",L,!0)})]}),Object(E.jsxs)(B.jb,{children:[Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("GSTIN","gstin",!0)}),Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:Ee("Currency","currency",M,!1)})]})]}),Object(E.jsxs)(B.m,{className:"",children:[Object(E.jsx)("h4",{className:"text-primary",children:"Billing Address"}),Object(E.jsxs)(B.jb,{children:[Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("Address Line1","billingAddressLine1")}),Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("Address Line2","billingAddressLine2")})]}),Object(E.jsxs)(B.jb,{children:[Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("City","billingAddressCity")}),Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:Ee("State","billingAddressState",L)})]}),Object(E.jsxs)(B.jb,{children:[Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:Ee("Country","billingAddressCountry",Z)}),Object(E.jsx)(B.B,{md:"6",className:"mb-1",children:we("Zip Code","billingAddressZip")})]})]})]}),Object(E.jsx)(B.l,{children:Object(E.jsx)(B.m,{children:Object(E.jsxs)("div",{className:"modal-footer border-0",children:[Object(E.jsx)(B.i,{color:"warning",outline:!0,tag:b.b,to:"/client/list",children:"Cancel"}),Object(E.jsx)(B.i,{color:"primary",type:"submit",children:"Save"})]})})})]})};t.default=function(){return Object(E.jsx)("div",{className:"invoice-add-wrapper",children:Object(E.jsx)(B.jb,{className:"invoice-add",children:Object(E.jsx)(B.B,{xl:12,md:12,sm:12,children:Object(E.jsx)(P,{})})})})}},508:function(e,t,n){},513:function(e,t,n){},524:function(e,t,n){}}]);
//# sourceMappingURL=67.1d9f933f.chunk.js.map