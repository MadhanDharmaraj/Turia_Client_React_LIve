(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[173],{1286:function(e,n,t){},633:function(e,n,t){"use strict";t.d(n,"a",(function(){return A})),t.d(n,"b",(function(){return T})),t.d(n,"c",(function(){return j})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return b}));var i=t(2),r=t.n(i);function o(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}var c=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(i&&(i+=" "),i+=n);return i};function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}var s=Object(i.createContext)({});function l(){return Object(i.useContext)(s)}var f=function(e){return r.a.createElement(s.Provider,{value:e.refTracker},e.children)};function d(){var e=new Map;return{on:function(n,t){var i;return e.has(n)?null==(i=e.get(n))||i.add(t):e.set(n,new Set([t])),this},off:function(n,t){return t?e.get(n).delete(t):e.delete(n),this},emit:function(n,t){if("production"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASENAME:"",REACT_APP_API_URL:"http://localhost:3000",REACT_APP_PARENTDOMAIN:"turia.in",REACT_APP_CLIENTDOMAIN:"localhost:3000",REACT_APP_GOOGLE_CLIENT_ID:"896819639652-rhg79p2c8kete06bjvnugbvfo9ijk66l.apps.googleusercontent.com"}).NODE){var i=n;e.has(n)||0===i||console.error("It seems that the menu you are trying to display is not renderer or you have a menu id mismatch.","You used the menu id: "+n)}return e.has(n)&&e.get(n).forEach((function(e){e(t)})),this}}}var v=d();function m(){return Object(i.useRef)(new Map).current}var p={show:function(e){var n=e.id,t=e.event,i=e.props,r=e.position;t.preventDefault&&t.preventDefault(),v.emit(0).emit(n,{event:t.nativeEvent||t,props:i,position:r})},hideAll:function(){v.emit(0)}};function b(e){return{show:function(n,t){p.show({id:(null==t?void 0:t.id)||(null==e?void 0:e.id),props:(null==t?void 0:t.props)||(null==e?void 0:e.props),event:n,position:null==t?void 0:t.position})},hideAll:function(){p.hideAll()}}}function g(){var e,n,t,i,r=new Map,o=!1;function c(){i[e].node.focus()}function a(){return-1!==e||(u(),!1)}function u(){e+1<i.length?e++:e+1===i.length&&(e=0),o&&s(),c()}function s(){if(a()&&!t){var u=r.get(n),s=u.isRoot,l=u.items,f=u.focusedIndex,d=u.parentNode;n.classList.remove("react-contexify__submenu--is-open"),i=l,n=d,s&&(t=!0,r.clear()),o||(e=f,c())}}return{init:function(n){i=n,e=-1,t=!0},moveDown:u,moveUp:function(){-1===e||0===e?e=i.length-1:e-1<i.length&&e--,o&&s(),c()},openSubmenu:function(){if(a()&&e>=0&&i[e].isSubmenu){var u=Array.from(i[e].submenuRefTracker.values()),s=i[e].node;return r.set(s,{isRoot:t,focusedIndex:e,parentNode:n||s,items:i}),s.classList.add("react-contexify__submenu--is-open"),n=s,u.length>0?(e=0,i=u):o=!0,t=!1,c(),!0}return!1},closeSubmenu:s}}var h={fade:"fade",flip:"flip",scale:"scale",slide:"slide"},y=function(){};function w(e){return"function"===typeof e}function E(e){return"string"===typeof e}function _(e,n){return i.Children.map(i.Children.toArray(e).filter(Boolean),(function(e){return Object(i.cloneElement)(e,n)}))}function x(e,n){return w(e)?e(n):e}function O(e,n){return w(n)?a({},e,n(e)):a({},e,n)}var T=function(e){var n,t=e.id,o=e.theme,s=e.style,l=e.className,d=e.children,p=e.animation,b=void 0===p?"scale":p,h=e.onHidden,w=void 0===h?y:h,x=e.onShown,T=void 0===x?y:x,A=u(e,["id","theme","style","className","children","animation","onHidden","onShown"]),j=Object(i.useReducer)(O,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),L=j[0],k=j[1],N=Object(i.useRef)(null),R=Object(i.useRef)(!1),S=function(e){var n=Object(i.useRef)();return Object(i.useEffect)((function(){n.current=e}),[e]),n.current}(L.visible),C=m(),P=Object(i.useState)((function(){return g()}))[0];function D(e){var n=e.event,t=e.props,i=e.position;n.stopPropagation();var r=i||function(e){var n={x:0,y:0};return function(e){return"touchend"===e.type}(e)&&e.changedTouches&&e.changedTouches.length>0?(n.x=e.changedTouches[0].clientX,n.y=e.changedTouches[0].clientY):(n.x=e.clientX,n.y=e.clientY),(!n.x||n.x<0)&&(n.x=0),(!n.y||n.y<0)&&(n.y=0),n}(n),o=r.x,c=r.y;setTimeout((function(){k({visible:!0,willLeave:!1,x:o,y:c,triggerEvent:n,propsFromTrigger:t})}),0)}function I(e){var n=e;("undefined"===typeof n||2!==n.button&&!0!==n.ctrlKey||"contextmenu"===n.type)&&(!function(e){return!(!e||!(E(e)||"exit"in e&&e.exit))}(b)?k((function(e){return{visible:!e.visible&&e.visible}})):k((function(e){return{willLeave:e.visible}})))}Object(i.useEffect)((function(){return R.current=!0,v.on(t,D).on(0,I),function(){v.off(t,D).off(0,I)}}),[t]),Object(i.useEffect)((function(){R.current&&L.visible!==S&&(L.visible?T():w())}),[L.visible,w,T]),Object(i.useEffect)((function(){L.visible?P.init(Array.from(C.values())):C.clear()}),[L.visible,P,C]),Object(i.useEffect)((function(){if(L.visible){var e=window,n=e.innerWidth,t=e.innerHeight,i=N.current,r=i.offsetWidth,o=i.offsetHeight,c=L.x,a=L.y;c+r>n&&(c-=c+r-n),a+o>t&&(a-=a+o-t),k({x:c,y:a})}}),[L.visible]),Object(i.useEffect)((function(){function e(e){switch(e.preventDefault(),e.key){case"Enter":P.openSubmenu()||I();break;case"Escape":I();break;case"ArrowUp":P.moveUp();break;case"ArrowDown":P.moveDown();break;case"ArrowRight":P.openSubmenu();break;case"ArrowLeft":P.closeSubmenu()}}return L.visible&&(window.addEventListener("resize",I),window.addEventListener("contextmenu",I),window.addEventListener("click",I),window.addEventListener("scroll",I),window.addEventListener("keydown",e),window.addEventListener("blur",I)),function(){window.removeEventListener("resize",I),window.removeEventListener("contextmenu",I),window.removeEventListener("click",I),window.removeEventListener("scroll",I),window.removeEventListener("keydown",e),window.removeEventListener("blur",I)}}),[L.visible,P]);var F=L.visible,H=L.triggerEvent,M=L.propsFromTrigger,U=L.x,W=L.y,K=L.willLeave,B=c("react-contexify",l,((n={})["react-contexify__theme--"+o]=o,n),function(){return b?E(b)?c(((e={})["react-contexify__will-enter--"+b]=b&&F&&!K,e["react-contexify__will-leave--"+b+" react-contexify__will-leave--'disabled'"]=b&&F&&K,e)):"enter"in b&&"exit"in b?c(((n={})["react-contexify__will-enter--"+b.enter]=b.enter&&F&&!K,n["react-contexify__will-leave--"+b.exit+" react-contexify__will-leave--'disabled'"]=b.exit&&F&&K,n)):null:null;var e,n}()),Y=a({},s,{left:U,top:W,opacity:1});return r.a.createElement(f,{refTracker:C},F&&r.a.createElement("div",Object.assign({},A,{className:B,onAnimationEnd:function(){L.willLeave&&L.visible&&k({visible:!1,willLeave:!1})},style:Y,ref:N,role:"menu"}),_(d,{propsFromTrigger:M,triggerEvent:H})))},A=function(e){var n,t=e.children,i=e.className,o=e.style,a=e.triggerEvent,s=e.data,f=e.propsFromTrigger,d=e.onClick,v=void 0===d?y:d,m=e.disabled,p=void 0!==m&&m,b=e.hidden,g=void 0!==b&&b,h=u(e,["children","className","style","triggerEvent","data","propsFromTrigger","onClick","disabled","hidden"]),w=l(),E={data:s,triggerEvent:a,props:f},_=x(p,E);if(x(g,E))return null;var O=c("react-contexify__item",i,((n={})["react-contexify__item--disabled"]=_,n));return r.a.createElement("div",Object.assign({},h,{className:O,style:o,onClick:function(e){E.event=e,_?e.stopPropagation():v(E)},onKeyDown:function(e){"Enter"===e.key&&(E.event=e,v(E))},ref:function(e){e&&!_&&w.set(e,{node:e,isSubmenu:!1})},tabIndex:-1,role:"menuitem","aria-disabled":_}),r.a.createElement("div",{className:"react-contexify__item__content"},t))};var j=function(e){var n,t=e.arrow,o=void 0===t?"\u25b6":t,s=e.children,d=e.disabled,v=void 0!==d&&d,p=e.hidden,b=void 0!==p&&p,g=e.label,h=e.className,y=e.triggerEvent,w=e.propsFromTrigger,E=e.style,O=u(e,["arrow","children","disabled","hidden","label","className","triggerEvent","propsFromTrigger","style"]),T=l(),A=m(),j=Object(i.useRef)(null),L=Object(i.useState)({left:"100%",top:0,bottom:"initial"}),k=L[0],N=L[1],R={triggerEvent:y,props:w},S=x(v,R),C=x(b,R);if(Object(i.useEffect)((function(){if(j.current){var e=window,n=e.innerWidth,t=e.innerHeight,i=j.current.getBoundingClientRect(),r={};i.right<n?(r.left="100%",r.right=void 0):(r.right="100%",r.left=void 0),i.bottom>t?(r.bottom=0,r.top="initial"):r.bottom="initial",N(r)}}),[]),C)return null;var P=c("react-contexify__item",h,((n={})["react-contexify__item--disabled"]=S,n)),D=a({},E,k);return r.a.createElement(f,{refTracker:A},r.a.createElement("div",Object.assign({},O,{className:P,ref:function(e){e&&!S&&T.set(e,{node:e,isSubmenu:!0,submenuRefTracker:A})},tabIndex:-1,role:"menuitem","aria-haspopup":!0,"aria-disabled":S}),r.a.createElement("div",{className:"react-contexify__item__content",onClick:function(e){e.stopPropagation()}},g,r.a.createElement("span",{className:"react-contexify__submenu-arrow"},o)),r.a.createElement("div",{className:"react-contexify react-contexify__submenu",ref:j,style:D},_(s,{propsFromTrigger:w,triggerEvent:y}))))}}}]);
//# sourceMappingURL=173.c16de5dc.chunk.js.map