(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[95],{1553:function(e,t,o){"use strict";o.r(t);var n=o(18),r=o(1),c=o(136),a=o(808),i=o(524),l=o(91),s=o(12);t.default=function(){var e=Object(r.useState)("Copy Me!"),t=Object(n.a)(e,2),o=t[0],u=t[1],p=Object(r.useState)(!1),f=Object(n.a)(p,2),b=f[0],d=f[1];return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)(i.a,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),Object(s.jsx)(l.jb,{children:Object(s.jsx)(l.B,{sm:"12",children:Object(s.jsxs)(l.l,{children:[Object(s.jsx)(l.p,{children:Object(s.jsx)(l.v,{tag:"h4",children:"Clipboard"})}),Object(s.jsx)(l.m,{children:Object(s.jsxs)(l.jb,{children:[Object(s.jsx)(l.B,{xl:"3",md:"4",sm:"6",className:"pe-sm-0 mb-md-0 mb-1",children:Object(s.jsx)(l.L,{value:o,onChange:function(e){var t=e.target.value;u(t),b&&d(!1)}})}),Object(s.jsx)(l.B,{md:"2",sm:"12",children:Object(s.jsx)(a.CopyToClipboard,{onCopy:function(){d(!0),c.b.success("Copied To Clipboard !")},text:o,children:Object(s.jsx)(l.i,{color:"primary",outline:!0,children:"Copy!"})})})]})})]})})})]})}},524:function(e,t,o){"use strict";var n=o(91),r=o(12);t.a=function(e){return Object(r.jsx)(n.jb,{className:"mb-2",children:Object(r.jsxs)(n.B,{sm:"12",className:"ms-50",children:[Object(r.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(r.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(r.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},808:function(e,t,o){"use strict";var n=o(809).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},809:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=c(o(1)),r=c(o(810));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?b(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var m=function(e){function t(){var e,o;s(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return y(b(o=p(this,(e=f(t)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var t=o.props,c=t.text,a=t.onCopy,i=t.children,l=t.options,s=n.default.Children.only(i),u=(0,r.default)(c,l);a&&a(c,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),o}var o,c,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),o=t,c=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=l(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach((function(t){y(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}],c&&u(o.prototype,c),a&&u(o,a),t}(n.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})},810:function(e,t,o){"use strict";var n=o(811),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,c,a,i,l,s,u=!1;t||(t={}),o=t.debug||!1;try{if(a=n(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=r[t.format]||r.default;window.clipboardData.setData(c,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){o&&console.error("unable to copy using execCommand: ",p),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),a()}return u}},811:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=95.7fdeeb84.chunk.js.map