(()=>{var Be={316:(e,f,u)=>{"use strict";u.d(f,{A:()=>_});var x=u(502),o=u.n(x),s=u(830),m=u.n(s),d=m()(o());d.push([e.id,`table {
    border-collapse: collapse;
    width          : 100%;
}

.speed-test-detail{margin:10px 0;padding:14px;border:1px solid #dce2eb;border-radius:9px;background:#fff}.speed-test-detail.empty{text-align:center;color:#718096}.speed-test-detail>header{display:flex;justify-content:space-between;margin-bottom:8px}.speed-test-progress{height:6px;background:#e5eaf0;border-radius:4px;overflow:hidden}.speed-test-progress i{display:block;height:100%;background:#1769e0}.speed-test-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 0}.speed-test-summary>div{display:grid;padding:8px;background:#f5f7fa;border-radius:7px}.speed-test-summary small{color:#718096}.speed-test-bars{height:110px;display:grid;grid-template-columns:repeat(10,1fr);align-items:end;gap:5px}.speed-test-bars span{height:100%;display:grid;grid-template-rows:1fr auto;align-items:end;text-align:center}.speed-test-bars i{display:block;min-height:2px;background:#1769e0}.speed-test-bars small{font-size:.65rem;color:#718096}.speed-test-threads{max-height:170px;overflow:auto;margin-top:10px}.speed-test-threads>div{display:grid;grid-template-columns:40px 1fr 1fr;gap:8px;padding:5px;border-top:1px solid #eee}.speed-test-threads span:not(:first-child){text-align:right}@media(max-width:600px){.speed-test-summary{grid-template-columns:1fr 1fr}}

th,
td {
    border    : 1px solid #dddddd;
    /* \u6587\u5B57\u5C45\u4E2D */
    text-align: center;
    padding   : 5px;
}

th {
    background-color: #f2f2f2;
}

body {
    width         : -webkit-fill-available;
    height        : -webkit-fill-available;
    display       : flex;
    flex-direction: column;
}

/*server div*/
.sdiv {
    padding         : 4px;
    background-color: white;
    margin-bottom   : 0.5em;
    border-radius   : 0.5em;
    box-shadow      : 0 0 0.5em rgba(0, 0, 0, 0.1);
    font-size       : 0.9rem;
    text-align      : center;

    display: flex;

    /*this centers the text horizontally*/
    justify-content: center;

    /*this centers the text vertically*/
    align-items: center;
}

.Header {
    margin-top   : 3px;
    margin-bottom: 3px;
    margin-left  : 3px;
    margin-right : 3px;
    padding      : 4px;
    border-radius: 0.5rem;
    box-shadow   : 0 0 0.5em rgba(0, 0, 0, 0.1);

    display: flex;

    font-size       : 1rem;
    background-color: rgb(246, 248, 251);
}

/* \u8282\u70B9\u5217\u8868\u7684\u5934 */
.NodesHeader {
    margin-top   : 3px;
    margin-bottom: 3px;
    margin-left  : 3px;
    margin-right : 3px;
    padding      : 4px;
    border-radius: 0.5rem;
    box-shadow   : 0 0 0.5em rgba(0, 0, 0, 0.1);

    font-size: 1.1rem;

    position        : sticky;
    top             : 2px;
    z-index         : 100;
    /* \u4FBF\u4E8E\u89C2\u5BDF\u6548\u679C */
    background-color: rgb(246, 248, 251);
}

/* \u524D\u4E24\u4E2A\u5B50\u5143\u7D20 */
.NodesHeader>* {
    padding-left: 3px;
}

/* \u8FDE\u63A5\u5934 */
.LinksHeader {
    display        : flex;
    text-align     : center;
    justify-content: center;
    align-items    : center;
    margin-top     : 3px;
    margin-bottom  : 3px;
    margin-left    : 3px;
    margin-right   : 3px;
    padding        : 4px;
    border-radius  : 0.5rem;
    box-shadow     : 0 0 0.5em rgba(0, 0, 0, 0.1);

    position        : sticky;
    top             : 35px;
    z-index         : 102;
    background-color: #f6f8fb;

    font-size: 1rem;
}

/* \u7B2C\u4E00\u4E2A\u5143\u7D20 */
.LinksHeader>*:first-child {
    padding-left: 3px;
}

.LinksHeader button {
    width: 1em;
}

.SpeedChartHeader {
    display        : flex;
    text-align     : center;
    justify-content: center;
    align-items    : center;
    margin-top     : 3px;
    margin-bottom  : 3px;
    margin-left    : 3px;
    margin-right   : 3px;
    padding        : 4px;
    border-radius  : 0.5rem;
    box-shadow     : 0 0 0.5em rgba(0, 0, 0, 0.1);

    font-size: 0.9rem;
}

ul {
    list-style-type: none;
    padding        : 0;
}

li {
    display         : flex;
    justify-content : space-between;
    padding         : 4px;
    background-color: white;
    margin-bottom   : 0.5em;
    border-radius   : 0.5em;
    box-shadow      : 0 0 0.5em rgba(0, 0, 0, 0.1);
    font-size       : 0.9rem;
}

[data-dark-mode="true"] li {
    background-color: var(--purple-md);
}

li::before {
    display: none;
}

li button {
    appearance      : none;
    border          : none;
    padding         : none;
    margin          : none;
    background-color: transparent;
    display         : flex;
    align-items     : center;
    cursor          : pointer;
}

li button svg {
    width: 1.2em;
    fill : red;
}


.simple-button {
    /* padding: 10px 20px; */
    padding         : 3px;
    margin-right    : 3px;
    /* font-size    : 16px; */
    color           : white;
    background-color: #99c7f8;
    border          : none;
    border-radius   : 3px;
    cursor          : pointer;
    transition      : background-color 0.3s ease;
    outline         : none;
    text-align      : center;
    display         : flex;
    justify-content : center;
}

.simple-button:hover {
    background-color: #4e7bac;
}

.fade-out {
    transition: opacity 3s ease;
}

.link-end {
    /* \u5B57\u989C\u8272\u6E10\u6E10\u4ECE\u9ED1\u8272\u53D8\u6DE1 */
    color: rgba(35, 24, 77, 0.6);

    transition: color 3s ease;
}

/* \u6574\u4F53\u6EDA\u52A8\u6761 */
::-webkit-scrollbar {
    width: 1px;
    /* \u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6 */
}

/* \u6EDA\u52A8\u6761\u8F68\u9053 */
::-webkit-scrollbar-track {
    background   : #f1f1f1;
    /* \u8F68\u9053\u80CC\u666F */
    border-radius: 1px;
    /* \u5706\u89D2 */
}

/* \u6EDA\u52A8\u6761\u7684\u6ED1\u5757 */
::-webkit-scrollbar-thumb {
    background-color: #888;
    /* \u6ED1\u5757\u7684\u989C\u8272 */
    border-radius   : 1px;
    /* \u5706\u89D2 */
    border          : 1px solid #f1f1f1;
    /* \u7ED9\u6ED1\u5757\u6DFB\u52A0\u8FB9\u6846 */
}

/* \u6ED1\u5757\u5728\u60AC\u505C\u72B6\u6001\u65F6\u7684\u6837\u5F0F */
::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    /* \u60AC\u505C\u65F6\u53D8\u6697 */
}
`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:[`table {\r
    border-collapse: collapse;\r
    width          : 100%;\r
}

.speed-test-detail{margin:10px 0;padding:14px;border:1px solid #dce2eb;border-radius:9px;background:#fff}.speed-test-detail.empty{text-align:center;color:#718096}.speed-test-detail>header{display:flex;justify-content:space-between;margin-bottom:8px}.speed-test-progress{height:6px;background:#e5eaf0;border-radius:4px;overflow:hidden}.speed-test-progress i{display:block;height:100%;background:#1769e0}.speed-test-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 0}.speed-test-summary>div{display:grid;padding:8px;background:#f5f7fa;border-radius:7px}.speed-test-summary small{color:#718096}.speed-test-bars{height:110px;display:grid;grid-template-columns:repeat(10,1fr);align-items:end;gap:5px}.speed-test-bars span{height:100%;display:grid;grid-template-rows:1fr auto;align-items:end;text-align:center}.speed-test-bars i{display:block;min-height:2px;background:#1769e0}.speed-test-bars small{font-size:.65rem;color:#718096}.speed-test-threads{max-height:170px;overflow:auto;margin-top:10px}.speed-test-threads>div{display:grid;grid-template-columns:40px 1fr 1fr;gap:8px;padding:5px;border-top:1px solid #eee}.speed-test-threads span:not(:first-child){text-align:right}@media(max-width:600px){.speed-test-summary{grid-template-columns:1fr 1fr}}
\r
th,\r
td {\r
    border    : 1px solid #dddddd;\r
    /* \u6587\u5B57\u5C45\u4E2D */\r
    text-align: center;\r
    padding   : 5px;\r
}\r
\r
th {\r
    background-color: #f2f2f2;\r
}\r
\r
body {\r
    width         : -webkit-fill-available;\r
    height        : -webkit-fill-available;\r
    display       : flex;\r
    flex-direction: column;\r
}\r
\r
/*server div*/\r
.sdiv {\r
    padding         : 4px;\r
    background-color: white;\r
    margin-bottom   : 0.5em;\r
    border-radius   : 0.5em;\r
    box-shadow      : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
    font-size       : 0.9rem;\r
    text-align      : center;\r
\r
    display: flex;\r
\r
    /*this centers the text horizontally*/\r
    justify-content: center;\r
\r
    /*this centers the text vertically*/\r
    align-items: center;\r
}\r
\r
.Header {\r
    margin-top   : 3px;\r
    margin-bottom: 3px;\r
    margin-left  : 3px;\r
    margin-right : 3px;\r
    padding      : 4px;\r
    border-radius: 0.5rem;\r
    box-shadow   : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
\r
    display: flex;\r
\r
    font-size       : 1rem;\r
    background-color: rgb(246, 248, 251);\r
}\r
\r
/* \u8282\u70B9\u5217\u8868\u7684\u5934 */\r
.NodesHeader {\r
    margin-top   : 3px;\r
    margin-bottom: 3px;\r
    margin-left  : 3px;\r
    margin-right : 3px;\r
    padding      : 4px;\r
    border-radius: 0.5rem;\r
    box-shadow   : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
\r
    font-size: 1.1rem;\r
\r
    position        : sticky;\r
    top             : 2px;\r
    z-index         : 100;\r
    /* \u4FBF\u4E8E\u89C2\u5BDF\u6548\u679C */\r
    background-color: rgb(246, 248, 251);\r
}\r
\r
/* \u524D\u4E24\u4E2A\u5B50\u5143\u7D20 */\r
.NodesHeader>* {\r
    padding-left: 3px;\r
}\r
\r
/* \u8FDE\u63A5\u5934 */\r
.LinksHeader {\r
    display        : flex;\r
    text-align     : center;\r
    justify-content: center;\r
    align-items    : center;\r
    margin-top     : 3px;\r
    margin-bottom  : 3px;\r
    margin-left    : 3px;\r
    margin-right   : 3px;\r
    padding        : 4px;\r
    border-radius  : 0.5rem;\r
    box-shadow     : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
\r
    position        : sticky;\r
    top             : 35px;\r
    z-index         : 102;\r
    background-color: #f6f8fb;\r
\r
    font-size: 1rem;\r
}\r
\r
/* \u7B2C\u4E00\u4E2A\u5143\u7D20 */\r
.LinksHeader>*:first-child {\r
    padding-left: 3px;\r
}\r
\r
.LinksHeader button {\r
    width: 1em;\r
}\r
\r
.SpeedChartHeader {\r
    display        : flex;\r
    text-align     : center;\r
    justify-content: center;\r
    align-items    : center;\r
    margin-top     : 3px;\r
    margin-bottom  : 3px;\r
    margin-left    : 3px;\r
    margin-right   : 3px;\r
    padding        : 4px;\r
    border-radius  : 0.5rem;\r
    box-shadow     : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
\r
    font-size: 0.9rem;\r
}\r
\r
ul {\r
    list-style-type: none;\r
    padding        : 0;\r
}\r
\r
li {\r
    display         : flex;\r
    justify-content : space-between;\r
    padding         : 4px;\r
    background-color: white;\r
    margin-bottom   : 0.5em;\r
    border-radius   : 0.5em;\r
    box-shadow      : 0 0 0.5em rgba(0, 0, 0, 0.1);\r
    font-size       : 0.9rem;\r
}\r
\r
[data-dark-mode="true"] li {\r
    background-color: var(--purple-md);\r
}\r
\r
li::before {\r
    display: none;\r
}\r
\r
li button {\r
    appearance      : none;\r
    border          : none;\r
    padding         : none;\r
    margin          : none;\r
    background-color: transparent;\r
    display         : flex;\r
    align-items     : center;\r
    cursor          : pointer;\r
}\r
\r
li button svg {\r
    width: 1.2em;\r
    fill : red;\r
}\r
\r
\r
.simple-button {\r
    /* padding: 10px 20px; */\r
    padding         : 3px;\r
    margin-right    : 3px;\r
    /* font-size    : 16px; */\r
    color           : white;\r
    background-color: #99c7f8;\r
    border          : none;\r
    border-radius   : 3px;\r
    cursor          : pointer;\r
    transition      : background-color 0.3s ease;\r
    outline         : none;\r
    text-align      : center;\r
    display         : flex;\r
    justify-content : center;\r
}\r
\r
.simple-button:hover {\r
    background-color: #4e7bac;\r
}\r
\r
.fade-out {\r
    transition: opacity 3s ease;\r
}\r
\r
.link-end {\r
    /* \u5B57\u989C\u8272\u6E10\u6E10\u4ECE\u9ED1\u8272\u53D8\u6DE1 */\r
    color: rgba(35, 24, 77, 0.6);\r
\r
    transition: color 3s ease;\r
}\r
\r
/* \u6574\u4F53\u6EDA\u52A8\u6761 */\r
::-webkit-scrollbar {\r
    width: 1px;\r
    /* \u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6 */\r
}\r
\r
/* \u6EDA\u52A8\u6761\u8F68\u9053 */\r
::-webkit-scrollbar-track {\r
    background   : #f1f1f1;\r
    /* \u8F68\u9053\u80CC\u666F */\r
    border-radius: 1px;\r
    /* \u5706\u89D2 */\r
}\r
\r
/* \u6EDA\u52A8\u6761\u7684\u6ED1\u5757 */\r
::-webkit-scrollbar-thumb {\r
    background-color: #888;\r
    /* \u6ED1\u5757\u7684\u989C\u8272 */\r
    border-radius   : 1px;\r
    /* \u5706\u89D2 */\r
    border          : 1px solid #f1f1f1;\r
    /* \u7ED9\u6ED1\u5757\u6DFB\u52A0\u8FB9\u6846 */\r
}\r
\r
/* \u6ED1\u5757\u5728\u60AC\u505C\u72B6\u6001\u65F6\u7684\u6837\u5F0F */\r
::-webkit-scrollbar-thumb:hover {\r
    background-color: #555;\r
    /* \u60AC\u505C\u65F6\u53D8\u6697 */\r
}\r
`],sourceRoot:""}]);const _=d},830:e=>{"use strict";e.exports=function(f){var u=[];return u.toString=function(){return this.map(function(o){var s="",m=typeof o[5]<"u";return o[4]&&(s+="@supports (".concat(o[4],") {")),o[2]&&(s+="@media ".concat(o[2]," {")),m&&(s+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),s+=f(o),m&&(s+="}"),o[2]&&(s+="}"),o[4]&&(s+="}"),s}).join("")},u.i=function(o,s,m,d,_){typeof o=="string"&&(o=[[null,o,void 0]]);var F={};if(m)for(var B=0;B<this.length;B++){var E=this[B][0];E!=null&&(F[E]=!0)}for(var T=0;T<o.length;T++){var h=[].concat(o[T]);m&&F[h[0]]||(typeof _<"u"&&(typeof h[5]>"u"||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=_),s&&(h[2]&&(h[1]="@media ".concat(h[2]," {").concat(h[1],"}")),h[2]=s),d&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=d):h[4]="".concat(d)),u.push(h))}},u}},502:e=>{"use strict";e.exports=function(f){var u=f[1],x=f[3];if(!x)return u;if(typeof btoa=="function"){var o=btoa(unescape(encodeURIComponent(JSON.stringify(x)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),m="/*# ".concat(s," */");return[u].concat([m]).join(`
`)}return[u].join(`
`)}},286:(e,f,u)=>{"use strict";var x,o=u(254);if(1)f.H=o.createRoot,x=o.hydrateRoot;else var s},40:(e,f,u)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=u(292),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function F(B,E,T){var h,D={},P=null,M=null;T!==void 0&&(P=""+T),E.key!==void 0&&(P=""+E.key),E.ref!==void 0&&(M=E.ref);for(h in E)m.call(E,h)&&!_.hasOwnProperty(h)&&(D[h]=E[h]);if(B&&B.defaultProps)for(h in E=B.defaultProps,E)D[h]===void 0&&(D[h]=E[h]);return{$$typeof:o,type:B,key:P,ref:M,props:D,_owner:d.current}}f.Fragment=s,f.jsx=F,f.jsxs=F},228:(e,f,u)=>{"use strict";e.exports=u(40)},916:e=>{"use strict";var f=[];function u(s){for(var m=-1,d=0;d<f.length;d++)if(f[d].identifier===s){m=d;break}return m}function x(s,m){for(var d={},_=[],F=0;F<s.length;F++){var B=s[F],E=m.base?B[0]+m.base:B[0],T=d[E]||0,h="".concat(E," ").concat(T);d[E]=T+1;var D=u(h),P={css:B[1],media:B[2],sourceMap:B[3],supports:B[4],layer:B[5]};if(D!==-1)f[D].references++,f[D].updater(P);else{var M=o(P,m);m.byIndex=F,f.splice(F,0,{identifier:h,updater:M,references:1})}_.push(h)}return _}function o(s,m){var d=m.domAPI(m);d.update(s);var _=function(B){if(B){if(B.css===s.css&&B.media===s.media&&B.sourceMap===s.sourceMap&&B.supports===s.supports&&B.layer===s.layer)return;d.update(s=B)}else d.remove()};return _}e.exports=function(s,m){m=m||{},s=s||[];var d=x(s,m);return function(F){F=F||[];for(var B=0;B<d.length;B++){var E=d[B],T=u(E);f[T].references--}for(var h=x(F,m),D=0;D<d.length;D++){var P=d[D],M=u(P);f[M].references===0&&(f[M].updater(),f.splice(M,1))}d=h}}},895:e=>{"use strict";var f={};function u(o){if(typeof f[o]>"u"){var s=document.querySelector(o);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}f[o]=s}return f[o]}function x(o,s){var m=u(o);if(!m)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");m.appendChild(s)}e.exports=x},96:e=>{"use strict";function f(u){var x=document.createElement("style");return u.setAttributes(x,u.attributes),u.insert(x,u.options),x}e.exports=f},420:(e,f,u)=>{"use strict";function x(o){var s=u.nc;s&&o.setAttribute("nonce",s)}e.exports=x},709:e=>{"use strict";function f(o,s,m){var d="";m.supports&&(d+="@supports (".concat(m.supports,") {")),m.media&&(d+="@media ".concat(m.media," {"));var _=typeof m.layer<"u";_&&(d+="@layer".concat(m.layer.length>0?" ".concat(m.layer):""," {")),d+=m.css,_&&(d+="}"),m.media&&(d+="}"),m.supports&&(d+="}");var F=m.sourceMap;F&&typeof btoa<"u"&&(d+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(F))))," */")),s.styleTagTransform(d,o,s.options)}function u(o){if(o.parentNode===null)return!1;o.parentNode.removeChild(o)}function x(o){if(typeof document>"u")return{update:function(){},remove:function(){}};var s=o.insertStyleElement(o);return{update:function(d){f(s,o,d)},remove:function(){u(s)}}}e.exports=x},93:e=>{"use strict";function f(u,x){if(x.styleSheet)x.styleSheet.cssText=u;else{for(;x.firstChild;)x.removeChild(x.firstChild);x.appendChild(document.createTextNode(u))}}e.exports=f},6:(e,f,u)=>{e.exports=u(301)(233)},552:(e,f,u)=>{e.exports=u(301)(275)},777:(e,f,u)=>{e.exports=u(301)(311)},231:(e,f,u)=>{e.exports=u(301)(54)},254:(e,f,u)=>{e.exports=u(301)(541)},292:(e,f,u)=>{e.exports=u(301)(680)},319:(e,f,u)=>{e.exports=u(301)(911)},301:e=>{"use strict";e.exports=dll}},oe={};function j(e){var f=oe[e];if(f!==void 0)return f.exports;var u=oe[e]={id:e,exports:{}};return Be[e](u,u.exports,j),u.exports}j.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return j.d(f,{a:f}),f},j.d=(e,f)=>{for(var u in f)j.o(f,u)&&!j.o(e,u)&&Object.defineProperty(e,u,{enumerable:!0,get:f[u]})},j.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),j.nc=void 0;var rt={};(()=>{"use strict";var e=j(228),f=j(231),u=j(777),x=j(6),o=j(552),s=j(292),m=j(286);function d(a){return a/(1024*1024)>=1?_(a/(1024*1024),1)+"m":a/1024>=1?_(a/1024,1)+"k":a+"b"}function _(a,t){return a.toFixed(t).replace(/[.]?0+$/,"")}function F(){return(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-caret-down-filled",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,e.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,e.jsx)("path",{d:"M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z","stroke-width":"0",fill:"currentColor"})]})}function B(){return(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-caret-right-filled",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,e.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,e.jsx)("path",{d:"M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z","stroke-width":"0",fill:"currentColor"})]})}let E=x.observable.box(!1),T=x.observable.box([]),h="/";window.location.hostname,h="https://qs.qcad.cc/";async function D(){let t=await(await fetch(h+"vps")).json();(0,x.runInAction)(()=>{t&&T.set(t)})}D(),setInterval(D,1e3);const P=(0,o.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{E.set(!E.get())},children:[E.get()?F():B(),(0,e.jsx)("span",{children:"VPS\u6D41\u91CF"}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}})]}),E.get()&&(0,e.jsx)(M,{})]})}),M=(0,o.observer)(function(){const t=[...T.get()].sort((r,n)=>r.hostName.localeCompare(n.hostName,"zh-CN",{numeric:!0,sensitivity:"base"}));return(0,e.jsx)("div",{children:t.map(r=>r.traffic?(0,e.jsx)(be,{traffic:r},r.hostName):(0,e.jsxs)("div",{children:[r.hostName,"\u83B7\u53D6\u5931\u8D25!"]},r.hostName))})});function le(a){return a<10240?"#228B22":a<102400?"#1E90FF":a<502400?"#FF4500":"#8B0000"}const be=(0,o.observer)(function(t){let{traffic:r}=t,[n,i]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!1);const A=r.traffic.precise?.resetConfig,p=String(A?.day??(Number(r.resetDay)||1)).padStart(2,"0"),g=A?.hour??r.resetHour??0,C=A?.minute??r.resetMinute??0,y=r.traffic.precise?.currentDay,v=y?y.up/1024**3:r.traffic.day.at(-1)?.rx,b=y?y.dn/1024**3:r.traffic.day.at(-1)?.tx;let S=0;for(let w=r.traffic.day.length;w--;){let L=r.traffic.day[w],tt=L.date.split("-")[2];if(S+=r.calcType==="in"?L.rx:r.calcType==="out"?L.tx:r.calcType==="max"?Math.max(L.rx,L.tx):L.total,tt===p)break}const te=je(p,r.hostName==="\u9999\u6E2Fa");r.status||(r.status={rss:0,tcp:0,udp:0,speed:{rx:0,tx:0,rxp:0,txp:0},loadavg:[0,0,0],freemem:""});const ie=parseFloat(r.traffic.totalmem)||0,me=ie-(parseFloat(r.status.freemem)||0),et=ie?Math.min(100,Math.round(me/ie*100)):0,he=Object.entries(r.status.clients??{}).sort(([w],[L])=>w.localeCompare(L,void 0,{numeric:!0,sensitivity:"base"}));return(0,e.jsxs)("li",{style:{margin:1,display:"flex",flexDirection:"column"},children:[(0,e.jsxs)("div",{onClick:()=>i(!n),style:{display:"flex",flexDirection:"column",cursor:"pointer",backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"5px",margin:"1px 0",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[(0,e.jsxs)("div",{style:{display:"flex",backgroundColor:"#f5f5f5",justifyContent:"space-around",alignItems:"center",marginBottom:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"baseline",flex:"0 0 35%",minWidth:0,justifyContent:"flex-start"},children:[(0,e.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.3em",color:"#333",marginRight:"5px"},children:r.hostName}),(0,e.jsxs)("span",{style:{color:"#666",fontSize:"0.8em"},children:[p,"\u53F7 ",String(g).padStart(2,"0"),":",String(C).padStart(2,"0")," \u91CD\u7F6E"]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,e.jsxs)("span",{style:{color:"#007bff",marginRight:"5px"},children:["\u2191",v?.toFixed(1),"G"]}),(0,e.jsxs)("span",{style:{color:"#28a745"},children:["\u2193",b?.toFixed(1),"G"]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",flex:"0 0 35%",minWidth:0,justifyContent:"flex-end"},children:[(0,e.jsxs)("span",{style:{color:le(r.status.speed.rx),marginRight:"5px"},children:["\u2191",d(r.status.speed.rx)]}),(0,e.jsxs)("span",{style:{color:le(r.status.speed.tx),marginRight:"5px"},children:["\u2193",d(r.status.speed.tx)]})]})]}),(0,e.jsxs)("div",{style:{display:"flex",backgroundColor:"#f5f5f5",justifyContent:"space-around",alignItems:"center",fontSize:"0.9em",color:"#555"},children:[(0,e.jsxs)("span",{style:{flex:"0 0 33%",minWidth:0,textAlign:"left"},children:["\u5185\u5B58: ",r.status.rss,"Mb"]}),(0,e.jsxs)("span",{style:{flex:"0 0 33%",minWidth:0,textAlign:"center"},children:["\u8FDE\u63A5: TCP ",r.status.tcp," / UDP ",r.status.udp]}),(0,e.jsxs)("span",{style:{flex:"0 0 33%",minWidth:0,textAlign:"right"},children:["\u8D1F\u8F7D: ",r.status.loadavg.join(" | ")]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"4px 10px",fontSize:"0.85em",color:"#555",marginTop:"4px"},children:[(0,e.jsx)("span",{children:"\u5BA2\u6237\u7AEF:"}),he.length?he.map(([w,L])=>(0,e.jsxs)("span",{style:{padding:"1px 6px",borderRadius:"4px",backgroundColor:"#e9ecef"},children:[w," \xD7 ",L]},w)):(0,e.jsx)("span",{children:"\u65E0"})]}),(n||!0)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{display:"flex",backgroundColor:"#f5f5f5",justifyContent:"space-between",alignItems:"center",fontSize:"0.9em",color:"#555"},children:[(0,e.jsxs)("span",{style:{color:"#333"},children:["\u5185\u5B58: ",me.toFixed(1),"Mb / ",r.traffic.totalmem,"Mb (",et,"%)"]}),(0,e.jsxs)("span",{children:["uptime: ",ye(r.traffic.uptime)]})]}),(0,e.jsx)("div",{style:{display:"flex",backgroundColor:"#f5f5f5",alignItems:"center",fontSize:"0.9em",color:"#555"},children:r.traffic.diskInfo&&r.traffic.diskInfo.map(w=>{const L=w.total?Math.min(100,Math.round(w.used/w.total*100)):0;return(0,e.jsxs)("span",{style:{color:"#333"},children:["\u786C\u76D8",w.drive," : ",w.used.toFixed(1),"G / ",w.total.toFixed(1),"G (",L,"%)"]},w.drive)})})]})]}),(0,e.jsx)(Fe,{usedTraffic:S,totalTraffic:r.planTraffic,remDay:te}),n&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("hr",{style:{margin:"5px 0",borderTop:"1px solid #444",width:"100%"}}),(0,e.jsxs)("div",{style:{fontSize:"1em",lineHeight:"1.7",padding:"8px 0",backgroundColor:"#fff",borderRadius:"0 0 8px 8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"10px",marginBottom:"8px"},children:[(0,e.jsx)("button",{style:{padding:"8px 16px",border:"none",borderRadius:"6px",backgroundColor:"#0066cc",color:"#fff",cursor:"pointer",fontSize:"0.9em",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 102, 204, 0.2)"},onMouseEnter:w=>{w.currentTarget.style.backgroundColor="#0052a3",w.currentTarget.style.boxShadow="0 4px 8px rgba(0, 102, 204, 0.4)",w.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:w=>{w.currentTarget.style.backgroundColor="#0066cc",w.currentTarget.style.boxShadow="0 2px 4px rgba(0, 102, 204, 0.2)",w.currentTarget.style.transform="translateY(0)"},onClick:()=>{c(!0),fetch(h+"speed_test/"+encodeURIComponent(r.nodeName)+"/1")},children:"\u5355\u7EBF\u7A0B\u6D4B\u901F"}),(0,e.jsx)("button",{style:{padding:"8px 16px",border:"none",borderRadius:"6px",backgroundColor:"#0066cc",color:"#fff",cursor:"pointer",fontSize:"0.9em",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 102, 204, 0.2)"},onMouseEnter:w=>{w.currentTarget.style.backgroundColor="#0052a3",w.currentTarget.style.boxShadow="0 4px 8px rgba(0, 102, 204, 0.4)",w.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:w=>{w.currentTarget.style.backgroundColor="#0066cc",w.currentTarget.style.boxShadow="0 2px 4px rgba(0, 102, 204, 0.2)",w.currentTarget.style.transform="translateY(0)"},onClick:()=>{c(!0),fetch(h+"speed_test/"+encodeURIComponent(r.nodeName)+"/8")},children:"\u591A\u7EBF\u7A0B\u6D4B\u901F"})]}),l&&(0,e.jsx)(Ce,{nodeName:r.nodeName}),(0,e.jsx)(ve,{traffic:r}),(0,e.jsx)(we,{traffic:r})]})]})]})});function Ce({nodeName:a}){const[t,r]=(0,s.useState)();if((0,s.useEffect)(()=>{let A=!1;const p=async()=>{try{const C=await(await fetch(h+"speed_test/status")).json();A||r(C.find(y=>y.node===a))}catch{}};p();const g=setInterval(p,1e3);return()=>{A=!0,clearInterval(g)}},[a]),!t)return(0,e.jsx)("div",{className:"speed-test-detail empty",children:"\u6B63\u5728\u7B49\u5F85\u6D4B\u901F\u6570\u636E\u2026"});const n=t.samples??[],i=A=>A.length?A.reduce((p,g)=>p+g,0)/A.length:0,l=n.at(-1)??0,c=Math.max(0,...n);return(0,e.jsxs)("section",{className:"speed-test-detail",children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("strong",{children:[t.threads," \u7EBF\u7A0B \xB7 ",t.state==="running"?`${t.elapsedSeconds}/10 \u79D2`:t.state==="completed"?"\u5DF2\u5B8C\u6210":"\u5931\u8D25"]}),(0,e.jsxs)("span",{children:[(l*8/1e6).toFixed(1)," Mbps"]})]}),(0,e.jsx)("div",{className:"speed-test-progress",children:(0,e.jsx)("i",{style:{width:`${Math.min(100,t.elapsedSeconds*10)}%`}})}),(0,e.jsxs)("div",{className:"speed-test-summary",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5F53\u524D"}),(0,e.jsxs)("b",{children:[d(l),"/s"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5E73\u5747"}),(0,e.jsxs)("b",{children:[d(i(n)),"/s"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5CF0\u503C"}),(0,e.jsxs)("b",{children:[d(c),"/s"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u4F20\u8F93"}),(0,e.jsx)("b",{children:d(t.totalBytes)})]})]}),(0,e.jsx)("div",{className:"speed-test-bars",children:Array.from({length:10},(A,p)=>(0,e.jsxs)("span",{children:[(0,e.jsx)("i",{style:{height:`${c?(n[p]??0)/c*100:0}%`}}),(0,e.jsxs)("small",{children:[p+1,"s"]})]},p))}),t.threadSamples.length>1&&(0,e.jsx)("div",{className:"speed-test-threads",children:t.threadSamples.map((A,p)=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("span",{children:["#",p+1]}),(0,e.jsxs)("span",{children:[d(A.at(-1)??0),"/s"]}),(0,e.jsxs)("span",{children:["\u5E73\u5747 ",d(i(A)),"/s"]})]},p))}),t.error&&(0,e.jsx)("p",{children:t.error})]})}function ye(a){const t=Math.floor(a/86400),r=Math.floor(a%(3600*24)/3600),n=Math.floor(a%3600/60),i=Math.floor(a%60),l=t>0?`${t}\u5929 `:"",c=r>0?`${r}\u5C0F\u65F6 `:"",A=n>0?`${n}\u5206\u949F `:"",p=i>0?`${i}\u79D2`:"0\u79D2";return l+c+A+p}const ve=(0,o.observer)(function(t){const{traffic:r}=t,n=(0,s.useRef)(null),i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(n.current&&!i.current){i.current=u.init(n.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const l={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(c){const A=c[0].name,p=c[0].value.toFixed(2),g=c[1].value.toFixed(2);return`${A}<br/>\u4E0A\u4F20\uFF1A${p}G<br/>\u4E0B\u8F7D\uFF1A${g}G`}},legend:{data:["\u4E0A\u4F20","\u4E0B\u8F7D"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:r.traffic.day.map(c=>c.date.substring(5)),axisLabel:{color:"#000",rotate:45}},yAxis:{type:"value",name:"\u6D41\u91CF (GB)",nameTextStyle:{color:"#000"},axisLabel:{color:"#000"}},series:[{name:"\u4E0A\u4F20",type:"line",data:r.traffic.day.map(c=>c.rx),itemStyle:{color:"#4CAF50"}},{name:"\u4E0B\u8F7D",type:"line",data:r.traffic.day.map(c=>c.tx),itemStyle:{color:"#2196F3"}}],backgroundColor:"transparent",textStyle:{color:"#000"}};i.current.setOption(l)}return i.current,()=>{i.current&&(i.current.dispose(),i.current=null)}},[]),(0,s.useEffect)(()=>{const l=()=>{i.current&&i.current.resize()};return window.addEventListener("resize",l),window.addEventListener("orientationchange",l),()=>{window.removeEventListener("resize",l),window.removeEventListener("orientationchange",l)}},[]),(0,e.jsxs)("div",{style:{padding:"10px 0"},onMouseDown:l=>l.stopPropagation(),children:[(0,e.jsx)("h4",{style:{},children:"\u6BCF\u65E5\u6D41\u91CF"}),(0,e.jsx)("div",{ref:n,style:{height:200,width:"100%",backgroundColor:"#f5f5f5",border:"1px solid #ddd",borderRadius:"4px"}})]})}),we=(0,o.observer)(function(t){const{traffic:r}=t,n=(0,s.useRef)(null),i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(n.current&&!i.current){i.current=u.init(n.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const l={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(c){const A=c[0].name,p=(c[0].value/1024).toFixed(2),g=(c[1].value/1024).toFixed(2);return`${A}:00<br/>\u4E0A\u4F20\uFF1A${p}GB<br/>\u4E0B\u8F7D\uFF1A${g}GB`}},legend:{data:["\u4E0A\u4F20","\u4E0B\u8F7D"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:r.traffic.hour.map(c=>c.hour.toString().padStart(2,"0")+":00"),axisLabel:{color:"#000"}},yAxis:{type:"value",name:"\u6D41\u91CF (GB)",nameTextStyle:{color:"#000"},axisLabel:{color:"#000",formatter:function(c){return(c/1024).toFixed(1)}}},series:[{name:"\u4E0A\u4F20",type:"line",data:r.traffic.hour.map(c=>c.rx),itemStyle:{color:"#4CAF50"}},{name:"\u4E0B\u8F7D",type:"line",data:r.traffic.hour.map(c=>c.tx),itemStyle:{color:"#2196F3"}}],backgroundColor:"transparent",textStyle:{color:"#000"}};i.current.setOption(l)}return()=>{i.current&&(i.current.dispose(),i.current=null)}},[]),(0,s.useEffect)(()=>{const l=()=>{i.current&&i.current.resize()};return window.addEventListener("resize",l),window.addEventListener("orientationchange",l),()=>{window.removeEventListener("resize",l),window.removeEventListener("orientationchange",l)}},[]),(0,e.jsxs)("div",{style:{padding:"10px 0"},onMouseDown:l=>l.stopPropagation(),children:[(0,e.jsx)("h4",{style:{},children:"24\u5C0F\u65F6\u6D41\u91CF\u8D8B\u52BF"}),(0,e.jsx)("div",{ref:n,style:{height:200,width:"100%",backgroundColor:"#f5f5f5",border:"1px solid #ddd",borderRadius:"4px"}})]})});function je(a="07",t=!1){const r=new Date,n=t?r.getUTCDate():r.getDate(),i=parseInt(a);return n<i?i-n:new Date(r.getFullYear(),r.getMonth()+1,0).getDate()-n+i}const Fe=(0,o.observer)(function(t){const{usedTraffic:r,totalTraffic:n}=t,i=r/n*100;return(0,e.jsxs)("div",{style:{width:"100%",height:"20px",backgroundColor:"#f5f5f5",borderRadius:"10px",overflow:"hidden",margin:"5px 0",position:"relative"},children:[(0,e.jsx)("div",{style:{width:`${i}%`,height:"100%",backgroundColor:i>90?"#ff4444":i>70?"#ffbb33":"#00C851",transition:"width 0.3s ease-in-out",minWidth:"20px"}}),(0,e.jsxs)("span",{style:{position:"absolute",left:10,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-start",color:"#000",fontSize:"0.8em"},children:[r.toFixed(1),"G / ",n,"G (",i.toFixed(1),"%)"]}),(0,e.jsxs)("span",{style:{position:"absolute",left:0,right:10,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",color:"#000",fontSize:"0.8em"},children:[(n-r).toFixed(1),"G / ",t.remDay,"\u5929 = ",((n-r)/t.remDay).toFixed(1),"G/\u5929"]})]})});var N=j(319);function V(a){if(a){if(a.startsWith("\u7F8E\u56FD"))return(0,e.jsx)(N.US,{style:{width:15}});if(a.startsWith("\u9999\u6E2F"))return(0,e.jsx)(N.HK,{style:{width:15}});if(a.startsWith("\u53F0\u6E7E"))return(0,e.jsx)(N.TW,{style:{width:15}});if(a.startsWith("\u65E5\u672C"))return(0,e.jsx)(N.JP,{style:{width:15}});if(a.startsWith("\u65B0\u52A0\u5761"))return(0,e.jsx)(N.SG,{style:{width:15}});if(a.startsWith("\u97E9\u56FD"))return(0,e.jsx)(N.KR,{style:{width:15}});if(a.startsWith("\u5FB7\u56FD"))return(0,e.jsx)(N.DE,{style:{width:15}});if(a.startsWith("\u82F1\u56FD"))return(0,e.jsx)(N.GB,{style:{width:15}});if(a.startsWith("\u4FC4\u7F57\u65AF"))return(0,e.jsx)(N.RU,{style:{width:15}})}}var I=(a=>(a[a.\u987A\u5E8F=0]="\u987A\u5E8F",a[a.\u5EF6\u8FDF=1]="\u5EF6\u8FDF",a[a.\u4E0A\u4F20\u603B\u91CF=2]="\u4E0A\u4F20\u603B\u91CF",a[a.\u4E0B\u8F7D\u603B\u91CF=3]="\u4E0B\u8F7D\u603B\u91CF",a[a.\u4E0A\u4F20\u901F\u5EA6=4]="\u4E0A\u4F20\u901F\u5EA6",a[a.\u4E0B\u8F7D\u901F\u5EA6=5]="\u4E0B\u8F7D\u901F\u5EA6",a))(I||{}),Ee=j(916),Ie=j.n(Ee),ke=j(709),_e=j.n(ke),Se=j(895),De=j.n(Se),Te=j(420),Re=j.n(Te),ze=j(96),Le=j.n(ze),Pe=j(93),Me=j.n(Pe),K=j(316),H={};H.styleTagTransform=Me(),H.setAttributes=Re(),H.insert=De().bind(null,"head"),H.domAPI=_e(),H.insertStyleElement=Le();var nt=Ie()(K.A,H);const st=K.A&&K.A.locals?K.A.locals:void 0;function Ne(a,t=Date.now()){var r=Math.floor((t-a)/1e3),n=Math.floor(r/31536e3);let i="";if(n>=1&&(i+=n+"\u5E74",r-=n*31536e3),n=Math.floor(r/2592e3),n>=1&&(i+=n+"\u6708",r-=n*2592e3),n=Math.floor(r/86400),n>=1&&(i+=n+"\u5929",r-=n*86400),n=Math.floor(r/3600),n>=1){return i+=n+"h",i;r-=n*3600}if(n=Math.floor(r/60),n>=1){return i+=n+"m",i;r-=n*60}return r>0?i+=r+"s":i+=t-a,i}(0,x.configure)({enforceActions:"never"});let re=x.observable.box("\u83B7\u53D6\u5269\u4F59\u6D41\u91CF\u4E2D!"),ne=x.observable.box([]),z=x.observable.box([]),se=x.observable.box([]),ue=x.observable.box({}),J=x.observable.box(!1),Q=x.observable.box(!1),W=x.observable.box(!0),de=x.observable.box(!1),Z=x.observable.box(!1),k=x.observable.box(0),X=x.observable.box(!0),U=x.observable.box(0),q=x.observable.box(0);const ee=180;let $=x.observable.box([]),Y=x.observable.box([]),ae=x.observable.box({up:0,dn:0}),ce={};async function pe(){try{let t=(await(await fetch("https://ct.qcad.cc:5443/bwh")).text()).replaceAll("\u5269\u4F59\u6D41\u91CF:","");re.set(t)}catch{re.set("\u83B7\u53D6\u5931\u8D25")}}setInterval(pe,60*1e3*5),pe();let R="/";window.location.hostname,R="https://qs.qcad.cc/";async function Ae(){try{let t=await(await fetch(R+"allspeed")).json();$.set(t[0]),Y.set(t[1])}catch{console.log("\u65E0\u6CD5\u83B7\u53D6\u901F\u5EA6")}}Ae(),document.addEventListener("visibilitychange",function(){document.visibilityState==="visible"&&Ae()});const fe=async()=>{(0,x.runInAction)(async()=>{try{let l=await(await fetch(R+"status")).json();se.set(l.routes),ue.set(l.preServer);let c=new Map;for(let g of l.server)g.linkCount=0,g.upspeed=0,g.dnspeed=0,c.set(g.name,g);if(Z.get()){let g=Object.groupBy(l.links,C=>C.remote);l.links=[];for(let C in g)l.links.push(...g[C])}for(let g of l.links){let C=c.get(g.ss);C&&(C.linkCount++,g.upOp===1&&(C.upspeed+=g.up),g.dnOp===1&&(C.dnspeed+=g.dn))}k.get()===I.\u987A\u5E8F||(k.get()===I.\u5EF6\u8FDF?l.links.sort((g,C)=>C.delay-g.delay):k.get()===I.\u4E0A\u4F20\u603B\u91CF?l.links.sort((g,C)=>C.up-g.up):k.get()===I.\u4E0B\u8F7D\u603B\u91CF?l.links.sort((g,C)=>C.dn-g.dn):k.get()===I.\u4E0A\u4F20\u901F\u5EA6?l.links.sort((g,C)=>C.up*C.upOp-g.up*g.upOp):k.get()===I.\u4E0B\u8F7D\u901F\u5EA6&&l.links.sort((g,C)=>C.dn*C.dnOp-g.dn*g.dnOp)),X.get()&&l.links.reverse(),z.set(l.links),ne.set(l.server);let A=0,p=0;for(let g in l.traffic)A+=l.traffic[g].up,p+=l.traffic[g].dn;ae.set({up:A,dn:p}),ce=l.traffic}catch{console.log("\u65E0\u6CD5\u83B7\u53D6\u6570\u636E",R+"status")}});let t=await(await fetch(R+"speed")).json();U.set(t[0]),q.set(t[1]),document.title=`${d(U.get())}|${d(q.get())}`;let r=$.get().concat(),n=Y.get().concat();r.push(U.get()),n.push(q.get()),r.length>180&&(r=r.slice(10)),n.length>180&&(n=n.slice(10)),$.set(r),Y.set(n)};function G(){let a=z.get();k.get()===I.\u987A\u5E8F?a.sort((t,r)=>t.id-r.id):k.get()===I.\u5EF6\u8FDF?a.sort((t,r)=>r.delay-t.delay):k.get()===I.\u4E0A\u4F20\u603B\u91CF?a.sort((t,r)=>r.up-t.up):k.get()===I.\u4E0B\u8F7D\u603B\u91CF?a.sort((t,r)=>r.dn-t.dn):k.get()===I.\u4E0A\u4F20\u901F\u5EA6?a.sort((t,r)=>r.up-t.up):k.get()===I.\u4E0B\u8F7D\u901F\u5EA6&&a.sort((t,r)=>r.dn-t.dn),X.get()&&a.reverse(),z.set(a)}setInterval(fe,1e3),fe();const We=(0,o.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Oe,{}),(0,e.jsx)(qe,{}),(0,e.jsx)($e,{}),(0,e.jsx)(Ge,{}),(0,e.jsx)(Ke,{}),(0,e.jsx)(P,{})]})}),Oe=(0,o.observer)(function(){const t=se.get().at(-1);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{J.set(!J.get())},children:[J.get()?F():B(),(0,e.jsx)("span",{children:"\u8DEF\u7531"}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),t?.outServers[0]&&(0,e.jsxs)("span",{style:{width:65,marginRight:3},children:[V(t.outServers[0].name),t.outServers[0].name," "]}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("button",{className:"simple-button",onClick:r=>{fetch(R+"refresh"),r.preventDefault(),r.stopPropagation()},children:"\u5237\u65B0"}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("span",{children:re.get()})]}),J.get()&&(0,e.jsx)(Ue,{})]})}),Ue=(0,o.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[se.get().map(t=>(0,e.jsx)(ge,{...t},t.name)),(0,e.jsx)(ge,{name:"\u4F18\u5148",mode:"time",preServer:ue.get(),outServers:ne.get()},"\u4F18\u5148")]})}),qe=(0,o.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"LinksHeader",onClick:()=>Q.set(!Q.get()),children:[Q.get()?F():B(),(0,e.jsxs)("span",{style:{paddingLeft:3,marginRight:5,cursor:"default"},children:["\u8FDE\u63A5:",z.get().filter(t=>!t.endTime).length]}),(0,e.jsxs)("div",{style:{flex:1},children:[(0,e.jsx)("span",{style:{color:U.get()<10240?"#228B22":U.get()<102400?"#1E90FF":U.get()<502400?"#FF4500":"#8B0000"},children:"\u2191:"+d(U.get())}),(0,e.jsx)("span",{style:{color:q.get()<10240?"#228B22":q.get()<102400?"#1E90FF":q.get()<502400?"#FF4500":"#8B0000"},children:"\u2193:"+d(q.get())})]}),(0,e.jsx)("button",{className:"simple-button",style:{background:X.get()?"#01162a":""},onClick:t=>{X.set(!X.get()),G(),t.stopPropagation(),t.target.blur()},children:"r"}),(0,e.jsx)("button",{className:"simple-button",style:{background:Z.get()?"#01162a":""},onClick:t=>{Z.set(!Z.get()),t.stopPropagation(),t.target.blur()},children:"u"}),(0,e.jsx)("button",{className:"simple-button",style:{background:k.get()===I.\u987A\u5E8F?"#01162a":""},onClick:t=>{k.set(I.\u987A\u5E8F),G(),t.stopPropagation(),t.target.blur()},children:"id"}),(0,e.jsx)("button",{className:"simple-button",style:{background:k.get()===I.\u4E0A\u4F20\u901F\u5EA6?"#01162a":""},onClick:t=>{k.set(I.\u4E0A\u4F20\u901F\u5EA6),G(),t.stopPropagation(),t.target.blur()},children:"s\u2191"}),(0,e.jsx)("button",{className:"simple-button",style:{background:k.get()===I.\u4E0B\u8F7D\u901F\u5EA6?"#01162a":""},onClick:t=>{k.set(I.\u4E0B\u8F7D\u901F\u5EA6),G(),t.stopPropagation(),t.target.blur()},children:"s\u2193"}),(0,e.jsx)("button",{className:"simple-button",style:{background:k.get()===I.\u4E0A\u4F20\u603B\u91CF?"#01162a":""},onClick:t=>{k.set(I.\u4E0A\u4F20\u603B\u91CF),G(),t.stopPropagation(),t.target.blur()},children:"a\u2191"}),(0,e.jsx)("button",{className:"simple-button",style:{background:k.get()===I.\u4E0B\u8F7D\u603B\u91CF?"#01162a":""},onClick:t=>{k.set(I.\u4E0B\u8F7D\u603B\u91CF),G(),t.stopPropagation(),t.target.blur()},children:"a\u2193"}),(0,e.jsx)("button",{className:"simple-button",onClick:t=>{z.set([]),fetch(R+"allclose"),t.stopPropagation(),t.target.blur()},children:"\u65AD"})]}),Q.get()&&(0,e.jsx)(xe,{links:z.get()})]})}),xe=(0,o.observer)(function({links:t}){const[r,n]=(0,f.useAutoAnimate)({duration:250,easing:"ease-in-out",disrespectUserMotionPreference:!0});return(0,s.useEffect)(()=>{const i=()=>{n(!document.hidden)};return document.addEventListener("visibilitychange",i),()=>{document.removeEventListener("visibilitychange",i)}},[n]),(0,e.jsx)("ul",{ref:r,children:t.map(i=>(0,e.jsx)(Xe,{link:i},i.id))})}),He=(0,o.observer)(function(t){let{server:r,route:n}=t,i=n&&n.preServer[r.name]||0;const l=z.get().filter(v=>!v.endTime&&v.ss===r.name&&v.routeName===n.name).length,c=z.get().filter(v=>v.ss===r.name&&v.routeName===n.name).reduce((v,b)=>v+(b.upOp===1?b.up:0),0),A=z.get().filter(v=>v.ss===r.name&&v.routeName===n.name).reduce((v,b)=>v+(b.dnOp===1?b.dn:0),0);let p=(0,s.useRef)(0);const g=300,C=()=>{const v=new Date().getTime(),b=v-p.current;b<g&&b>0&&y(),p.current=v},y=()=>{if(!n)return;let v=prompt("\u8BF7\u8F93\u5165\u5EF6\u8FDF\u503C",i.toString());if(v){let b=parseInt(v);isNaN(b)||(n.name==="\u4F18\u5148"?fetch(R+`set_preServer/${r.name}/${b}`):fetch(R+`set_route_config/${n.name}/${r.name}/${b}`))}};return(0,e.jsxs)("div",{className:"sdiv",style:{margin:1,minWidth:160,height:30,flexGrow:1},onTouchEnd:C,onDoubleClick:v=>{p.current===0&&y(),p.current=0},children:[(0,e.jsxs)("span",{style:{width:77,textAlign:"left",marginRight:2,fontSize:"0.9rem"},children:[V(r.name),r.name," "]}),(0,e.jsx)("span",{style:{marginRight:2,fontSize:"0.8rem"},children:l}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"column"},children:[c?(0,e.jsx)("span",{style:{fontSize:"0.7rem",color:c<10240?"#228B22":c<102400?"#1E90FF":c<502400?"#FF4500":"#8B0000"},children:"\u2191:"+d(c)}):null,A?(0,e.jsx)("span",{style:{fontSize:"0.7rem",color:A<10240?"#228B22":A<102400?"#1E90FF":A<502400?"#FF4500":"#8B0000"},children:"\u2193:"+d(A)}):null]}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"column"},children:[(0,e.jsx)("span",{style:{color:r.time<500?"green":r.time<1e3?"blue":r.time<3e3?"red":"midnightblue"},children:r.time}),i?(0,e.jsxs)("span",{style:{color:"gray",fontSize:"0.6rem"},children:["-",i]}):null]})]},r.name)}),ge=(0,o.observer)(function(t){let[r,n]=(0,s.useState)(!1),[i,l]=(0,s.useState)(!1),[c,A]=(0,s.useState)(!1);const p=z.get().filter(b=>b.routeName===t.name),g=p.reduce((b,S)=>b+(S.upOp===1?S.up:0),0),C=p.reduce((b,S)=>b+(S.dnOp===1?S.dn:0),0),[y,v]=(0,s.useState)(t.mode);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:2,fontSize:"1rem",display:"flex"},onClick:()=>{n(!r)},children:[(0,e.jsx)("span",{style:{marginLeft:10},children:r?F():B()}),(0,e.jsx)("span",{children:t.name}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsx)(O,{speed:g,tag:"\u2191:",opacity:1}),(0,e.jsx)(O,{speed:C,tag:"\u2193:",opacity:1}),(0,e.jsx)("span",{style:{width:30}}),(0,e.jsx)("span",{style:{width:20,marginRight:15},children:p.filter(b=>!b.endTime).length}),t.outServers[0]&&(0,e.jsxs)("span",{style:{width:65,marginRight:3},children:[V(t.outServers[0].name),t.outServers[0].name," "]}),(0,e.jsx)("select",{title:"m:",id:"fruit-select",value:y,onClick:b=>{b.stopPropagation()},onChange:b=>{v(b.target.value),fetch(R+`set_route_slb/${t.name}/${b.target.value}`)},children:t.outServers.map((b,S)=>(0,e.jsx)("option",{value:S+1,children:S===0?"time":`slb${S+1}`},S))})]}),r&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"Header",style:{marginLeft:30,marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{l(!i)},children:[i?F():B(),(0,e.jsxs)("span",{children:["\u8282\u70B9:",t.outServers.length]})]}),i&&(0,e.jsx)("div",{style:{overflow:"auto",display:"grid",margin:3,gridTemplateColumns:"repeat(auto-fit, minmax(190px, 1fr))"},children:t.outServers.map(b=>{let S=ne.get().find(te=>te.name===b.name);return(0,e.jsx)(He,{server:S,route:t},b.name)})}),(0,e.jsxs)("div",{className:"Header",style:{marginLeft:30,marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{A(!c)},children:[c?F():B(),(0,e.jsxs)("span",{children:["\u8FDE\u63A5:",p.filter(b=>!b.endTime).length,"/",p.length]})]}),c&&(0,e.jsx)(xe,{links:p})]})]})}),$e=(0,o.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{W.set(!W.get())},children:[W.get()?F():B(),(0,e.jsx)("span",{children:"\u8FDE\u63A5\u901F\u5EA6"})]}),(W.get()||de.get())&&(0,e.jsx)(Ye,{})]})}),Ye=(0,o.observer)(function(){const t=(0,s.useRef)(null),r=(0,s.useRef)(null);return de.set(!0),(0,s.useEffect)(()=>{W.get()&&r.current&&r.current.resize()},[W.get()]),(0,s.useEffect)(()=>{if(t.current&&!r.current){r.current=u.init(t.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const n={title:{text:"\u8FDE\u63A5\u901F\u5EA6"},tooltip:{trigger:"axis",formatter:function(i){let[l,c]=i,A=$.get()[l.dataIndex],p=Y.get()[c.dataIndex];return`\u4E0A\u4F20\u901F\u5EA6:${d(A)}<br/>\u4E0B\u8F7D\u901F\u5EA6:${d(p)}`},axisPointer:{animation:!1}},legend:{data:["\u4E0A\u4F20\u901F\u5EA6","\u4E0B\u8F7D\u901F\u5EA6"]},xAxis:{type:"category",data:[...Array(ee).keys()].map(i=>-i+ee-1),splitLine:{show:!1}},yAxis:{type:"value",axisLabel:{formatter:function(i){return d(i)}}},series:[{name:"\u4E0A\u4F20\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(27, 195, 148)"},lineStyle:{color:"rgb(27, 195, 148)",width:1}},{name:"\u4E0B\u8F7D\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(16, 109, 202)"},lineStyle:{color:"rgb(16, 109, 202)",width:1}}]};r.current.setOption(n)}return r.current&&r.current.setOption({series:[{data:$.get()},{data:Y.get()}]}),()=>{r.current&&(r.current.dispose(),r.current=null)}},[]),(0,s.useEffect)(()=>(0,x.autorun)(()=>{let n=$.get(),i=Y.get();document.hidden||W.get()&&r.current&&r.current.setOption({series:[{data:n.map(l=>l)},{data:i.map(l=>l)}]})})),(0,s.useEffect)(()=>{const n=()=>{r.current&&r.current.resize()};return window.addEventListener("resize",n),window.addEventListener("orientationchange",n),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}},[]),(0,e.jsx)("div",{style:{height:200,margin:3,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"4px",display:W.get()?"flex":"none"},children:(0,e.jsx)("div",{ref:t,style:{height:200,width:"100%",backgroundColor:"#f5f5f5",border:"1px solid #ddd",borderRadius:"4px"}})})}),Ge=(0,o.observer)(function(){const[t,r]=(0,s.useState)(!1);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{r(!t)},children:[t?F():B(),(0,e.jsx)("span",{children:"\u5EF6\u8FDF"})]}),t&&(0,e.jsx)(Ve,{showPings:t})]})}),Ve=(0,o.observer)(function({showPings:t}){const r=(0,s.useRef)(null),n=(0,s.useRef)(null),i=(0,s.useRef)(!1),[l,c]=(0,s.useState)({});return(0,s.useEffect)(()=>{let A=setInterval(()=>{document.hidden||t&&fetch(`${R}pings`).then(p=>p.json()).then(p=>{for(let C of Object.keys(p))p[C]=p[C].map(y=>y>=2e3?2e3:y);c(p)}).catch(p=>{console.log("\u65E0\u6CD5\u83B7\u53D6ping")})},1e3);return()=>clearInterval(A)},[]),i.current=!0,(0,s.useEffect)(()=>{t&&n.current&&n.current.resize()},[t]),(0,s.useEffect)(()=>{if(r.current&&!n.current){n.current=u.init(r.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const A={title:{text:"\u5EF6\u8FDF"},tooltip:{trigger:"axis",formatter:function(p){return p.map(g=>g.seriesName+":"+g.value+"ms").join("<br/>")},axisPointer:{animation:!1}},xAxis:{type:"category",data:[...Array(ee).keys()].map(p=>-p+ee-1),splitLine:{show:!1}},yAxis:{type:"value",axisLabel:{formatter:function(p){return`${p}ms`}}}};n.current.setOption(A)}return n.current&&n.current.setOption({series:[{data:l.bwh},{data:l.yxvm},{data:l.yxvm_cu},{data:l.claw}]}),()=>{n.current&&(n.current.dispose(),n.current=null)}},[]),(0,s.useEffect)(()=>(0,x.autorun)(()=>{t&&n.current&&n.current.setOption({legend:{data:Object.keys(l)},series:Object.keys(l).map(A=>({name:A,showSymbol:!1,type:"line",itemStyle:{},lineStyle:{width:1},data:l[A].map(p=>p)}))})})),(0,s.useEffect)(()=>{const A=()=>{n.current&&n.current.resize()};return window.addEventListener("resize",A),window.addEventListener("orientationchange",A),()=>{window.removeEventListener("resize",A),window.removeEventListener("orientationchange",A)}},[]),(0,e.jsx)("div",{style:{height:200,margin:3,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"4px",display:t?"flex":"none"},children:(0,e.jsx)("div",{ref:r,style:{height:200,width:"100%",backgroundColor:"#f5f5f5",border:"1px solid #ddd",borderRadius:"4px"}})})}),Xe=(0,o.observer)(function({link:t}){const[r,n]=(0,s.useState)(!1),i=(0,s.useRef)(0),l=300,c=(0,s.useRef)(null),A=(0,s.useRef)(null);function p(y){n(y),t.details=y}(0,s.useEffect)(()=>{if(r&&c.current){A.current=u.init(c.current,{renderer:"canvas",useDirtyRect:!1});const y={title:{text:"\u8FDE\u63A5\u901F\u5EA6"},tooltip:{trigger:"axis",formatter:function(v){let[b,S]=v;return`\u4E0A\u4F20\u901F\u5EA6:${d(b.value)}<br/>\u4E0B\u8F7D\u901F\u5EA6:${d(S.value)}`},axisPointer:{animation:!1}},legend:{data:["\u4E0A\u4F20\u901F\u5EA6","\u4E0B\u8F7D\u901F\u5EA6"]},xAxis:{type:"category",data:[...Array(60).keys()].map(v=>v),splitLine:{show:!1},min:0,max:60},yAxis:{type:"value",axisLabel:{formatter:function(v){return d(v)}}},series:[{name:"\u4E0A\u4F20\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(27, 195, 148)"},lineStyle:{color:"rgb(27, 195, 148)",width:1}},{name:"\u4E0B\u8F7D\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(16, 109, 202)"},lineStyle:{color:"rgb(16, 109, 202)",width:1}}]};return A.current.setOption(y),()=>{A.current.dispose()}}},[r]),(0,s.useEffect)(()=>{r&&c.current&&A.current&&A.current.setOption({series:[{data:t.ups},{data:t.dns}]})},[t.ups,t.dns]),(0,s.useEffect)(()=>{r&&c.current&&A.current.resize()},[window.innerWidth,window.innerHeight]);const g=()=>{const y=new Date().getTime(),v=y-i.current;v<l&&v>0&&C(),i.current=y},C=()=>{r||(fetch(`${R}close/${t.id}`),z.set(z.get().filter(y=>y.id!==t.id)))};return(0,e.jsxs)("li",{style:{margin:3,padding:1,display:"flex",flexDirection:"column"},className:t.endTime?"link-end":"",onClick:y=>{y.detail>1&&C()},onTouchEnd:g,children:[(0,e.jsxs)("div",{style:{display:"flex",cursor:"pointer",justifyContent:"center",alignItems:"center"},children:[(0,e.jsxs)("span",{style:{width:30},children:[V(t.ss),t.ss?.substring(t.ss.length-1)]}),(0,e.jsx)("span",{style:{width:30},children:t.remote?.substring(17)}),(0,e.jsx)("span",{style:{width:30},children:Ne(t.linkTime,t.endTime)}),(0,e.jsx)("span",{style:{width:25,marginRight:1,color:t.delay<500?"green":t.delay<1e3?"blue":t.delay<3e3?"red":"midnightblue"},children:t.delay}),(0,e.jsxs)("span",{style:{flex:1,textAlign:"center",wordBreak:"break-all",color:t.endTime?"#acacac":"black"},onClick:y=>{p(!r),y.detail>1&&y.stopPropagation()},children:[t.addr,":",t.port]}),(0,e.jsxs)("div",{style:{padding:0,margin:0,display:"flex",flexDirection:"column",height:30},children:[t.upOp>0&&(0,e.jsx)(O,{speed:t.up,tag:"\u2191:",opacity:t.upOp,style:{fontSize:"0.7rem"}}),t.dnOp>0&&(0,e.jsx)(O,{speed:t.dn,tag:"\u2193:",opacity:t.dnOp,style:{fontSize:"0.7rem"}})]}),(0,e.jsxs)("div",{style:{padding:0,margin:0,display:"flex",marginLeft:15,height:30,flexDirection:"column"},children:[(0,e.jsx)(O,{speed:t.allUp,tag:"\u2191:",opacity:1,style:{fontSize:"0.7rem"}}),(0,e.jsx)(O,{speed:t.allDn,tag:"\u2193:",opacity:1,style:{fontSize:"0.7rem"}})]})]}),r&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("hr",{style:{margin:"5px 0",borderTop:"1px solid #444",width:"100%"}}),(0,e.jsxs)("div",{style:{fontSize:"1em",lineHeight:"1.7",padding:"5px 0"},onTouchEnd:y=>{y.stopPropagation()},onClick:y=>{y.stopPropagation()},children:[(0,e.jsxs)("div",{children:["ID: ",t.id]}),(0,e.jsxs)("div",{children:["\u8DEF\u7531:",t.routeName]}),(0,e.jsxs)("div",{children:["\u8FDC\u7A0B\u5730\u5740: ",t.remote]}),(0,e.jsxs)("div",{children:["\u8FDE\u63A5\u65F6\u95F4: ",new Date(t.linkTime).toLocaleString()]}),(0,e.jsxs)("div",{children:["\u670D\u52A1\u5668: ",V(t.ss)," ",t.ss]}),(0,e.jsx)("div",{ref:c,style:{width:"100%",height:"200px"}})]})]})]})}),O=(0,o.observer)(function(t){let{speed:r,opacity:n,style:i}=t;return(0,e.jsx)("span",{className:"fade-out",style:{...i,opacity:n===1?1:0,color:r<20480?"#228B22":r<102400?"#1E90FF":r<1024e3?"#FF4500":"#8B0000"},children:t.tag+d(r)})}),Ke=(0,o.observer)(function(){const[t,r]=(0,s.useState)(!1),[n,i]=(0,s.useState)([]);return(0,s.useEffect)(()=>{t&&fetch(`${R}traffics`).then(c=>c.json()).then(c=>i(c.reverse()));let l=setInterval(()=>{t&&fetch(`${R}traffics`).then(c=>c.json()).then(c=>i(c.reverse()))},2e3);return()=>clearInterval(l)},[t]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{!t&&n.length===0&&i([ce]),r(!t)},children:[t?F():B(),(0,e.jsx)("span",{children:"\u6D41\u91CF"}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("span",{children:["\u2191:",d(ae.get().up)]}),(0,e.jsx)("span",{style:{width:30}}),(0,e.jsxs)("span",{children:["\u2193:",d(ae.get().dn)]}),(0,e.jsx)("span",{style:{flex:1}})]}),t&&(0,e.jsx)(Je,{traffics:n})]})}),Je=(0,o.observer)(function(t){let{traffics:r}=t;return(0,e.jsx)("div",{children:r.map((n,i)=>(0,e.jsx)(Qe,{traffic:n},i))})}),Qe=(0,o.observer)(function(t){let{traffic:r}=t,[n,i]=(0,s.useState)(!1),l=Object.values(r).reduce((A,p)=>A+p.up,0),c=Object.values(r).reduce((A,p)=>A+p.dn,0);return(0,e.jsxs)("li",{style:{margin:3,display:"flex",flexDirection:"column"},onClick:A=>{i(!n)},children:[(0,e.jsxs)("div",{style:{display:"flex",cursor:"pointer"},children:[(0,e.jsx)(O,{speed:l,tag:"\u2191:",opacity:1,style:{width:90}}),(0,e.jsx)(O,{speed:c,tag:"\u2193:",opacity:1})]}),n&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("hr",{style:{margin:"5px 0",borderTop:"1px solid #444",width:"100%"}}),(0,e.jsx)("div",{style:{fontSize:"1em",lineHeight:"1.7",padding:"5px 0"},children:Object.entries(r).map(([A,p])=>(0,e.jsxs)("div",{children:[A,": ",d(p.up)," \u2191 ",d(p.dn)," \u2193"]},A))})]})]})}),Ze=document.getElementById("root");(0,m.H)(Ze).render((0,e.jsx)(We,{})),document.addEventListener("mousedown",function(a){a.detail>1&&a.preventDefault()})})()})();

//# sourceMappingURL=19e2eb20d476d97abd10.main.js.map