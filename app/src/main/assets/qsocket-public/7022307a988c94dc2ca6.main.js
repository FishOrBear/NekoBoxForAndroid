(()=>{var Be={208:(e,A,u)=>{"use strict";u.d(A,{A:()=>_});var g=u(354),l=u.n(g),s=u(314),m=u.n(s),c=m()(l());c.push([e.id,`table {
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
}\r
\r
.speed-test-detail{margin:10px 0;padding:14px;border:1px solid #dce2eb;border-radius:9px;background:#fff}.speed-test-detail.empty{text-align:center;color:#718096}.speed-test-detail>header{display:flex;justify-content:space-between;margin-bottom:8px}.speed-test-progress{height:6px;background:#e5eaf0;border-radius:4px;overflow:hidden}.speed-test-progress i{display:block;height:100%;background:#1769e0}.speed-test-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 0}.speed-test-summary>div{display:grid;padding:8px;background:#f5f7fa;border-radius:7px}.speed-test-summary small{color:#718096}.speed-test-bars{height:110px;display:grid;grid-template-columns:repeat(10,1fr);align-items:end;gap:5px}.speed-test-bars span{height:100%;display:grid;grid-template-rows:1fr auto;align-items:end;text-align:center}.speed-test-bars i{display:block;min-height:2px;background:#1769e0}.speed-test-bars small{font-size:.65rem;color:#718096}.speed-test-threads{max-height:170px;overflow:auto;margin-top:10px}.speed-test-threads>div{display:grid;grid-template-columns:40px 1fr 1fr;gap:8px;padding:5px;border-top:1px solid #eee}.speed-test-threads span:not(:first-child){text-align:right}@media(max-width:600px){.speed-test-summary{grid-template-columns:1fr 1fr}}\r
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
`],sourceRoot:""}]);const _=c},314:e=>{"use strict";e.exports=function(A){var u=[];return u.toString=function(){return this.map(function(l){var s="",m=typeof l[5]<"u";return l[4]&&(s+="@supports (".concat(l[4],") {")),l[2]&&(s+="@media ".concat(l[2]," {")),m&&(s+="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {")),s+=A(l),m&&(s+="}"),l[2]&&(s+="}"),l[4]&&(s+="}"),s}).join("")},u.i=function(l,s,m,c,_){typeof l=="string"&&(l=[[null,l,void 0]]);var F={};if(m)for(var B=0;B<this.length;B++){var I=this[B][0];I!=null&&(F[I]=!0)}for(var T=0;T<l.length;T++){var b=[].concat(l[T]);m&&F[b[0]]||(typeof _<"u"&&(typeof b[5]>"u"||(b[1]="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {").concat(b[1],"}")),b[5]=_),s&&(b[2]&&(b[1]="@media ".concat(b[2]," {").concat(b[1],"}")),b[2]=s),c&&(b[4]?(b[1]="@supports (".concat(b[4],") {").concat(b[1],"}"),b[4]=c):b[4]="".concat(c)),u.push(b))}},u}},354:e=>{"use strict";e.exports=function(A){var u=A[1],g=A[3];if(!g)return u;if(typeof btoa=="function"){var l=btoa(unescape(encodeURIComponent(JSON.stringify(g)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),m="/*# ".concat(s," */");return[u].concat([m]).join(`
`)}return[u].join(`
`)}},338:(e,A,u)=>{"use strict";var g,l=u(564);if(1)A.H=l.createRoot,g=l.hydrateRoot;else var s},20:(e,A,u)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=u(845),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,c=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function F(B,I,T){var b,D={},M=null,N=null;T!==void 0&&(M=""+T),I.key!==void 0&&(M=""+I.key),I.ref!==void 0&&(N=I.ref);for(b in I)m.call(I,b)&&!_.hasOwnProperty(b)&&(D[b]=I[b]);if(B&&B.defaultProps)for(b in I=B.defaultProps,I)D[b]===void 0&&(D[b]=I[b]);return{$$typeof:l,type:B,key:M,ref:N,props:D,_owner:c.current}}A.Fragment=s,A.jsx=F,A.jsxs=F},848:(e,A,u)=>{"use strict";e.exports=u(20)},72:e=>{"use strict";var A=[];function u(s){for(var m=-1,c=0;c<A.length;c++)if(A[c].identifier===s){m=c;break}return m}function g(s,m){for(var c={},_=[],F=0;F<s.length;F++){var B=s[F],I=m.base?B[0]+m.base:B[0],T=c[I]||0,b="".concat(I," ").concat(T);c[I]=T+1;var D=u(b),M={css:B[1],media:B[2],sourceMap:B[3],supports:B[4],layer:B[5]};if(D!==-1)A[D].references++,A[D].updater(M);else{var N=l(M,m);m.byIndex=F,A.splice(F,0,{identifier:b,updater:N,references:1})}_.push(b)}return _}function l(s,m){var c=m.domAPI(m);c.update(s);var _=function(B){if(B){if(B.css===s.css&&B.media===s.media&&B.sourceMap===s.sourceMap&&B.supports===s.supports&&B.layer===s.layer)return;c.update(s=B)}else c.remove()};return _}e.exports=function(s,m){m=m||{},s=s||[];var c=g(s,m);return function(F){F=F||[];for(var B=0;B<c.length;B++){var I=c[B],T=u(I);A[T].references--}for(var b=g(F,m),D=0;D<c.length;D++){var M=c[D],N=u(M);A[N].references===0&&(A[N].updater(),A.splice(N,1))}c=b}}},659:e=>{"use strict";var A={};function u(l){if(typeof A[l]>"u"){var s=document.querySelector(l);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}A[l]=s}return A[l]}function g(l,s){var m=u(l);if(!m)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");m.appendChild(s)}e.exports=g},540:e=>{"use strict";function A(u){var g=document.createElement("style");return u.setAttributes(g,u.attributes),u.insert(g,u.options),g}e.exports=A},56:(e,A,u)=>{"use strict";function g(l){var s=u.nc;s&&l.setAttribute("nonce",s)}e.exports=g},825:e=>{"use strict";function A(l,s,m){var c="";m.supports&&(c+="@supports (".concat(m.supports,") {")),m.media&&(c+="@media ".concat(m.media," {"));var _=typeof m.layer<"u";_&&(c+="@layer".concat(m.layer.length>0?" ".concat(m.layer):""," {")),c+=m.css,_&&(c+="}"),m.media&&(c+="}"),m.supports&&(c+="}");var F=m.sourceMap;F&&typeof btoa<"u"&&(c+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(F))))," */")),s.styleTagTransform(c,l,s.options)}function u(l){if(l.parentNode===null)return!1;l.parentNode.removeChild(l)}function g(l){if(typeof document>"u")return{update:function(){},remove:function(){}};var s=l.insertStyleElement(l);return{update:function(c){A(s,l,c)},remove:function(){u(s)}}}e.exports=g},113:e=>{"use strict";function A(u,g){if(g.styleSheet)g.styleSheet.cssText=u;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(u))}}e.exports=A},639:(e,A,u)=>{e.exports=u(301)(15)},252:(e,A,u)=>{e.exports=u(301)(253)},798:(e,A,u)=>{e.exports=u(301)(484)},845:(e,A,u)=>{e.exports=u(301)(540)},18:(e,A,u)=>{e.exports=u(301)(682)},922:(e,A,u)=>{e.exports=u(301)(813)},564:(e,A,u)=>{e.exports=u(301)(961)},301:e=>{"use strict";e.exports=dll}},oe={};function j(e){var A=oe[e];if(A!==void 0)return A.exports;var u=oe[e]={id:e,exports:{}};return Be[e](u,u.exports,j),u.exports}j.n=e=>{var A=e&&e.__esModule?()=>e.default:()=>e;return j.d(A,{a:A}),A},j.d=(e,A)=>{for(var u in A)j.o(A,u)&&!j.o(e,u)&&Object.defineProperty(e,u,{enumerable:!0,get:A[u]})},j.o=(e,A)=>Object.prototype.hasOwnProperty.call(e,A),j.nc=void 0;var ot={};(()=>{"use strict";var e=j(848),A=j(798),u=j(18),g=j(922),l=j(639),s=j(845),m=j(338);function c(a){return a/(1024*1024)>=1?_(a/(1024*1024),1)+"m":a/1024>=1?_(a/1024,1)+"k":a+"b"}function _(a,t){return a.toFixed(t).replace(/[.]?0+$/,"")}function F(){return(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-caret-down-filled",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,e.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,e.jsx)("path",{d:"M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z","stroke-width":"0",fill:"currentColor"})]})}function B(){return(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-caret-right-filled",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,e.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,e.jsx)("path",{d:"M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z","stroke-width":"0",fill:"currentColor"})]})}function I(a){const t=typeof a=="number"?a:Number.parseFloat(a??"");return Number.isFinite(t)?t.toFixed(1).replace(/\.0$/,""):"0"}let T=g.observable.box(!1),b=g.observable.box([]),D="/";window.location.hostname,D="https://qs.qcad.cc/";async function M(){let t=await(await fetch(D+"vps")).json();(0,g.runInAction)(()=>{t&&b.set(t)})}M(),setInterval(M,1e3);const N=(0,l.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{T.set(!T.get())},children:[T.get()?F():B(),(0,e.jsx)("span",{children:"VPS\u6D41\u91CF"}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}})]}),T.get()&&(0,e.jsx)(ye,{})]})}),ye=(0,l.observer)(function(){const t=[...b.get()].sort((r,n)=>r.hostName.localeCompare(n.hostName,"zh-CN",{numeric:!0,sensitivity:"base"}));return(0,e.jsx)("div",{children:t.map(r=>r.traffic?(0,e.jsx)(ve,{traffic:r},r.hostName):(0,e.jsx)(Ce,{hostName:r.hostName},r.hostName))})});function Ce({hostName:a}){return(0,e.jsx)("li",{style:{margin:1,display:"flex",flexDirection:"column"},children:(0,e.jsxs)("div",{style:{minHeight:"46px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 10px",margin:"1px 0",borderRadius:"8px",backgroundColor:"#f5f5f5",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[(0,e.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.3em",color:"#555"},children:a}),(0,e.jsxs)("span",{role:"status",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"3px 9px",borderRadius:"999px",color:"#b42318",backgroundColor:"#fee4e2",fontSize:"0.82rem",fontWeight:600},children:[(0,e.jsx)("span",{"aria-hidden":"true",style:{width:"7px",height:"7px",borderRadius:"50%",backgroundColor:"#d92d20"}}),"\u5DF2\u65AD\u7EBF"]})]})})}function le(a){return a<10240?"#228B22":a<102400?"#1E90FF":a<502400?"#FF4500":"#8B0000"}const ve=(0,l.observer)(function(t){let{traffic:r}=t,[n,i]=(0,s.useState)(!1),[o,d]=(0,s.useState)(!1);const x=r.traffic.precise?.resetConfig,p=String(x?.day??(Number(r.resetDay)||1)).padStart(2,"0"),f=x?.hour??r.resetHour??0,h=x?.minute??r.resetMinute??0,v=r.traffic.precise?.currentDay,w=v?v.up/1024**3:r.traffic.day.at(-1)?.rx,y=v?v.dn/1024**3:r.traffic.day.at(-1)?.tx,E=r.traffic.precise?.billing,K=E&&[E.up,E.dn].every(C=>typeof C=="number"&&Number.isFinite(C)&&C>=0);let me=K?(r.calcType==="in"?E.up:r.calcType==="out"?E.dn:r.calcType==="max"?Math.max(E.up,E.dn):E.up+E.dn)/1024**3:0;if(!K)for(let C=r.traffic.day.length;C--;){let L=r.traffic.day[C],it=L.date.split("-")[2];if(me+=r.calcType==="in"?L.rx:r.calcType==="out"?L.tx:r.calcType==="max"?Math.max(L.rx,L.tx):L.total,it===p)break}const st=Ie(p,r.hostName==="\u9999\u6E2Fa");r.status||(r.status={rss:0,tcp:0,udp:0,speed:{rx:0,tx:0,rxp:0,txp:0},loadavg:[0,0,0],freemem:""});const re=parseFloat(r.traffic.totalmem)||0,he=re-(parseFloat(r.status.freemem)||0),at=re?Math.min(100,Math.round(he/re*100)):0,be=Object.entries(r.status.clients??{}).sort(([C],[L])=>C.localeCompare(L,void 0,{numeric:!0,sensitivity:"base"}));return(0,e.jsxs)("li",{style:{margin:1,display:"flex",flexDirection:"column"},children:[(0,e.jsxs)("div",{onClick:()=>i(!n),style:{display:"flex",flexDirection:"column",cursor:"pointer",backgroundColor:"#f5f5f5",borderRadius:"8px",padding:"5px",margin:"1px 0",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[(0,e.jsxs)("div",{style:{display:"flex",backgroundColor:"#f5f5f5",justifyContent:"space-around",alignItems:"center",marginBottom:"8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"baseline",flex:"0 0 35%",minWidth:0,justifyContent:"flex-start"},children:[(0,e.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.3em",color:"#333",marginRight:"5px"},children:r.hostName}),(0,e.jsxs)("span",{style:{color:"#666",fontSize:"0.8em"},children:[p,"\u53F7 ",String(f).padStart(2,"0"),":",String(h).padStart(2,"0")," \u91CD\u7F6E"]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,e.jsxs)("span",{style:{color:"#007bff",marginRight:"5px"},children:["\u2191",w?.toFixed(1),"G"]}),(0,e.jsxs)("span",{style:{color:"#28a745"},children:["\u2193",y?.toFixed(1),"G"]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",flex:"0 0 35%",minWidth:0,justifyContent:"flex-end"},children:[(0,e.jsxs)("span",{style:{color:le(r.status.speed.rx),marginRight:"5px"},children:["\u2191",c(r.status.speed.rx)]}),(0,e.jsxs)("span",{style:{color:le(r.status.speed.tx),marginRight:"5px"},children:["\u2193",c(r.status.speed.tx)]})]})]}),(0,e.jsxs)("div",{style:{display:"flex",backgroundColor:"#f5f5f5",justifyContent:"space-around",alignItems:"center",fontSize:"0.9em",color:"#555"},children:[(0,e.jsxs)("span",{style:{flex:"0 0 33%",minWidth:0,textAlign:"left"},children:["\u5185\u5B58: ",I(r.status.rss),"Mb"]}),(0,e.jsxs)("span",{style:{flex:"0 0 33%",minWidth:0,textAlign:"center"},children:["\u8FDE\u63A5: TCP ",r.status.tcp," / UDP ",r.status.udp]}),(0,e.jsxs)("span",{style:{flex:"0 0 33%",minWidth:0,textAlign:"right"},children:["\u8D1F\u8F7D: ",r.status.loadavg.join(" | ")]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"4px 10px",fontSize:"0.85em",color:"#555",marginTop:"4px"},children:[(0,e.jsx)("span",{children:"\u5BA2\u6237\u7AEF:"}),be.length?be.map(([C,L])=>(0,e.jsxs)("span",{style:{padding:"1px 6px",borderRadius:"4px",backgroundColor:"#e9ecef"},children:[C," \xD7 ",L]},C)):(0,e.jsx)("span",{children:"\u65E0"})]}),(n||!0)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{display:"flex",backgroundColor:"#f5f5f5",justifyContent:"space-between",alignItems:"center",fontSize:"0.9em",color:"#555"},children:[(0,e.jsxs)("span",{style:{color:"#333"},children:["\u5185\u5B58: ",I(he),"Mb / ",I(re),"Mb (",at,"%)"]}),(0,e.jsxs)("span",{children:["uptime: ",je(r.traffic.uptime)]})]}),(0,e.jsx)("div",{style:{display:"flex",backgroundColor:"#f5f5f5",alignItems:"center",fontSize:"0.9em",color:"#555"},children:r.traffic.diskInfo&&r.traffic.diskInfo.map(C=>{const L=C.total?Math.min(100,Math.round(C.used/C.total*100)):0;return(0,e.jsxs)("span",{style:{color:"#333"},children:["\u786C\u76D8",C.drive," : ",C.used.toFixed(1),"G / ",C.total.toFixed(1),"G (",L,"%)"]},C.drive)})})]})]}),(0,e.jsx)(ke,{usedTraffic:me,totalTraffic:r.planTraffic,remDay:st}),n&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("hr",{style:{margin:"5px 0",borderTop:"1px solid #444",width:"100%"}}),(0,e.jsxs)("div",{style:{fontSize:"1em",lineHeight:"1.7",padding:"8px 0",backgroundColor:"#fff",borderRadius:"0 0 8px 8px"},children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"10px",marginBottom:"8px"},children:[(0,e.jsx)("button",{style:{padding:"8px 16px",border:"none",borderRadius:"6px",backgroundColor:"#0066cc",color:"#fff",cursor:"pointer",fontSize:"0.9em",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 102, 204, 0.2)"},onMouseEnter:C=>{C.currentTarget.style.backgroundColor="#0052a3",C.currentTarget.style.boxShadow="0 4px 8px rgba(0, 102, 204, 0.4)",C.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:C=>{C.currentTarget.style.backgroundColor="#0066cc",C.currentTarget.style.boxShadow="0 2px 4px rgba(0, 102, 204, 0.2)",C.currentTarget.style.transform="translateY(0)"},onClick:()=>{d(!0),fetch(D+"speed_test/"+encodeURIComponent(r.nodeName)+"/1")},children:"\u5355\u7EBF\u7A0B\u6D4B\u901F"}),(0,e.jsx)("button",{style:{padding:"8px 16px",border:"none",borderRadius:"6px",backgroundColor:"#0066cc",color:"#fff",cursor:"pointer",fontSize:"0.9em",fontWeight:"500",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 102, 204, 0.2)"},onMouseEnter:C=>{C.currentTarget.style.backgroundColor="#0052a3",C.currentTarget.style.boxShadow="0 4px 8px rgba(0, 102, 204, 0.4)",C.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:C=>{C.currentTarget.style.backgroundColor="#0066cc",C.currentTarget.style.boxShadow="0 2px 4px rgba(0, 102, 204, 0.2)",C.currentTarget.style.transform="translateY(0)"},onClick:()=>{d(!0),fetch(D+"speed_test/"+encodeURIComponent(r.nodeName)+"/8")},children:"\u591A\u7EBF\u7A0B\u6D4B\u901F"})]}),o&&(0,e.jsx)(we,{nodeName:r.nodeName}),(0,e.jsx)(Fe,{traffic:r}),(0,e.jsx)(Ee,{traffic:r})]})]})]})});function we({nodeName:a}){const[t,r]=(0,s.useState)();if((0,s.useEffect)(()=>{let x=!1;const p=async()=>{try{const h=await(await fetch(D+"speed_test/status")).json();x||r(h.find(v=>v.node===a))}catch{}};p();const f=setInterval(p,1e3);return()=>{x=!0,clearInterval(f)}},[a]),!t)return(0,e.jsx)("div",{className:"speed-test-detail empty",children:"\u6B63\u5728\u7B49\u5F85\u6D4B\u901F\u6570\u636E\u2026"});const n=t.samples??[],i=x=>x.length?x.reduce((p,f)=>p+f,0)/x.length:0,o=n.at(-1)??0,d=Math.max(0,...n);return(0,e.jsxs)("section",{className:"speed-test-detail",children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("strong",{children:[t.threads," \u7EBF\u7A0B \xB7 ",t.state==="running"?`${t.elapsedSeconds}/10 \u79D2`:t.state==="completed"?"\u5DF2\u5B8C\u6210":"\u5931\u8D25"]}),(0,e.jsxs)("span",{children:[(o*8/1e6).toFixed(1)," Mbps"]})]}),(0,e.jsx)("div",{className:"speed-test-progress",children:(0,e.jsx)("i",{style:{width:`${Math.min(100,t.elapsedSeconds*10)}%`}})}),(0,e.jsxs)("div",{className:"speed-test-summary",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5F53\u524D"}),(0,e.jsxs)("b",{children:[c(o),"/s"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5E73\u5747"}),(0,e.jsxs)("b",{children:[c(i(n)),"/s"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u5CF0\u503C"}),(0,e.jsxs)("b",{children:[c(d),"/s"]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("small",{children:"\u4F20\u8F93"}),(0,e.jsx)("b",{children:c(t.totalBytes)})]})]}),(0,e.jsx)("div",{className:"speed-test-bars",children:Array.from({length:10},(x,p)=>(0,e.jsxs)("span",{children:[(0,e.jsx)("i",{style:{height:`${d?(n[p]??0)/d*100:0}%`}}),(0,e.jsxs)("small",{children:[p+1,"s"]})]},p))}),t.threadSamples.length>1&&(0,e.jsx)("div",{className:"speed-test-threads",children:t.threadSamples.map((x,p)=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("span",{children:["#",p+1]}),(0,e.jsxs)("span",{children:[c(x.at(-1)??0),"/s"]}),(0,e.jsxs)("span",{children:["\u5E73\u5747 ",c(i(x)),"/s"]})]},p))}),t.error&&(0,e.jsx)("p",{children:t.error})]})}function je(a){const t=Math.floor(a/86400),r=Math.floor(a%(3600*24)/3600),n=Math.floor(a%3600/60),i=Math.floor(a%60),o=t>0?`${t}\u5929 `:"",d=r>0?`${r}\u5C0F\u65F6 `:"",x=n>0?`${n}\u5206\u949F `:"",p=i>0?`${i}\u79D2`:"0\u79D2";return o+d+x+p}const Fe=(0,l.observer)(function(t){const{traffic:r}=t,n=(0,s.useRef)(null),i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(n.current&&!i.current){i.current=u.init(n.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const o={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(d){const x=d[0].name,p=d[0].value.toFixed(2),f=d[1].value.toFixed(2);return`${x}<br/>\u4E0A\u4F20\uFF1A${p}G<br/>\u4E0B\u8F7D\uFF1A${f}G`}},legend:{data:["\u4E0A\u4F20","\u4E0B\u8F7D"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:r.traffic.day.map(d=>d.date.substring(5)),axisLabel:{color:"#000",rotate:45}},yAxis:{type:"value",name:"\u6D41\u91CF (GB)",nameTextStyle:{color:"#000"},axisLabel:{color:"#000"}},series:[{name:"\u4E0A\u4F20",type:"line",data:r.traffic.day.map(d=>d.rx),itemStyle:{color:"#4CAF50"}},{name:"\u4E0B\u8F7D",type:"line",data:r.traffic.day.map(d=>d.tx),itemStyle:{color:"#2196F3"}}],backgroundColor:"transparent",textStyle:{color:"#000"}};i.current.setOption(o)}return i.current,()=>{i.current&&(i.current.dispose(),i.current=null)}},[]),(0,s.useEffect)(()=>{const o=()=>{i.current&&i.current.resize()};return window.addEventListener("resize",o),window.addEventListener("orientationchange",o),()=>{window.removeEventListener("resize",o),window.removeEventListener("orientationchange",o)}},[]),(0,e.jsxs)("div",{style:{padding:"10px 0"},onMouseDown:o=>o.stopPropagation(),children:[(0,e.jsx)("h4",{style:{},children:"\u6BCF\u65E5\u6D41\u91CF"}),(0,e.jsx)("div",{ref:n,style:{height:200,width:"100%",backgroundColor:"#f5f5f5",border:"1px solid #ddd",borderRadius:"4px"}})]})}),Ee=(0,l.observer)(function(t){const{traffic:r}=t,n=(0,s.useRef)(null),i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(n.current&&!i.current){i.current=u.init(n.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const o={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(d){const x=d[0].name,p=(d[0].value/1024).toFixed(2),f=(d[1].value/1024).toFixed(2);return`${x}:00<br/>\u4E0A\u4F20\uFF1A${p}GB<br/>\u4E0B\u8F7D\uFF1A${f}GB`}},legend:{data:["\u4E0A\u4F20","\u4E0B\u8F7D"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:r.traffic.hour.map(d=>d.hour.toString().padStart(2,"0")+":00"),axisLabel:{color:"#000"}},yAxis:{type:"value",name:"\u6D41\u91CF (GB)",nameTextStyle:{color:"#000"},axisLabel:{color:"#000",formatter:function(d){return(d/1024).toFixed(1)}}},series:[{name:"\u4E0A\u4F20",type:"line",data:r.traffic.hour.map(d=>d.rx),itemStyle:{color:"#4CAF50"}},{name:"\u4E0B\u8F7D",type:"line",data:r.traffic.hour.map(d=>d.tx),itemStyle:{color:"#2196F3"}}],backgroundColor:"transparent",textStyle:{color:"#000"}};i.current.setOption(o)}return()=>{i.current&&(i.current.dispose(),i.current=null)}},[]),(0,s.useEffect)(()=>{const o=()=>{i.current&&i.current.resize()};return window.addEventListener("resize",o),window.addEventListener("orientationchange",o),()=>{window.removeEventListener("resize",o),window.removeEventListener("orientationchange",o)}},[]),(0,e.jsxs)("div",{style:{padding:"10px 0"},onMouseDown:o=>o.stopPropagation(),children:[(0,e.jsx)("h4",{style:{},children:"24\u5C0F\u65F6\u6D41\u91CF\u8D8B\u52BF"}),(0,e.jsx)("div",{ref:n,style:{height:200,width:"100%",backgroundColor:"#f5f5f5",border:"1px solid #ddd",borderRadius:"4px"}})]})});function Ie(a="07",t=!1){const r=new Date,n=t?r.getUTCDate():r.getDate(),i=parseInt(a);return n<i?i-n:new Date(r.getFullYear(),r.getMonth()+1,0).getDate()-n+i}const ke=(0,l.observer)(function(t){const{usedTraffic:r,totalTraffic:n}=t,i=Number.isFinite(r)?Math.max(0,r):0,o=n>0?Math.min(100,i/n*100):0,d=Math.max(0,n-i),x=d/Math.max(1,t.remDay);return(0,e.jsxs)("div",{style:{width:"100%",height:"20px",backgroundColor:"#f5f5f5",borderRadius:"10px",overflow:"hidden",margin:"5px 0",position:"relative"},children:[(0,e.jsx)("div",{style:{width:`${o}%`,height:"100%",backgroundColor:o>90?"#ff4444":o>70?"#ffbb33":"#00C851",transition:"width 0.3s ease-in-out",minWidth:"20px"}}),(0,e.jsxs)("span",{style:{position:"absolute",left:10,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-start",color:"#000",fontSize:"0.8em"},children:[i.toFixed(1),"G / ",n,"G (",o.toFixed(1),"%)"]}),(0,e.jsxs)("span",{style:{position:"absolute",left:0,right:10,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",color:"#000",fontSize:"0.8em"},children:[d.toFixed(1),"G / ",t.remDay,"\u5929 = ",x.toFixed(1),"G/\u5929"]})]})});var P=j(252);function V(a){if(a){if(a.startsWith("\u7F8E\u56FD"))return(0,e.jsx)(P.US,{style:{width:15}});if(a.startsWith("\u9999\u6E2F"))return(0,e.jsx)(P.HK,{style:{width:15}});if(a.startsWith("\u53F0\u6E7E"))return(0,e.jsx)(P.TW,{style:{width:15}});if(a.startsWith("\u65E5\u672C"))return(0,e.jsx)(P.JP,{style:{width:15}});if(a.startsWith("\u65B0\u52A0\u5761"))return(0,e.jsx)(P.SG,{style:{width:15}});if(a.startsWith("\u97E9\u56FD"))return(0,e.jsx)(P.KR,{style:{width:15}});if(a.startsWith("\u5FB7\u56FD"))return(0,e.jsx)(P.DE,{style:{width:15}});if(a.startsWith("\u82F1\u56FD"))return(0,e.jsx)(P.GB,{style:{width:15}});if(a.startsWith("\u4FC4\u7F57\u65AF"))return(0,e.jsx)(P.RU,{style:{width:15}})}}var k=(a=>(a[a.\u987A\u5E8F=0]="\u987A\u5E8F",a[a.\u5EF6\u8FDF=1]="\u5EF6\u8FDF",a[a.\u4E0A\u4F20\u603B\u91CF=2]="\u4E0A\u4F20\u603B\u91CF",a[a.\u4E0B\u8F7D\u603B\u91CF=3]="\u4E0B\u8F7D\u603B\u91CF",a[a.\u4E0A\u4F20\u901F\u5EA6=4]="\u4E0A\u4F20\u901F\u5EA6",a[a.\u4E0B\u8F7D\u901F\u5EA6=5]="\u4E0B\u8F7D\u901F\u5EA6",a))(k||{}),Se=j(72),_e=j.n(Se),De=j(825),Te=j.n(De),Re=j(659),ze=j.n(Re),Le=j(56),Me=j.n(Le),Ne=j(540),Pe=j.n(Ne),We=j(113),Oe=j.n(We),J=j(208),$={};$.styleTagTransform=Oe(),$.setAttributes=Me(),$.insert=ze().bind(null,"head"),$.domAPI=Te(),$.insertStyleElement=Pe();var lt=_e()(J.A,$);const ut=J.A&&J.A.locals?J.A.locals:void 0;function Ue(a,t=Date.now()){var r=Math.floor((t-a)/1e3),n=Math.floor(r/31536e3);let i="";if(n>=1&&(i+=n+"\u5E74",r-=n*31536e3),n=Math.floor(r/2592e3),n>=1&&(i+=n+"\u6708",r-=n*2592e3),n=Math.floor(r/86400),n>=1&&(i+=n+"\u5929",r-=n*86400),n=Math.floor(r/3600),n>=1){return i+=n+"h",i;r-=n*3600}if(n=Math.floor(r/60),n>=1){return i+=n+"m",i;r-=n*60}return r>0?i+=r+"s":i+=t-a,i}(0,g.configure)({enforceActions:"never"});let ne=g.observable.box("\u83B7\u53D6\u5269\u4F59\u6D41\u91CF\u4E2D!"),se=g.observable.box([]),z=g.observable.box([]),ae=g.observable.box([]),ue=g.observable.box({}),Q=g.observable.box(!1),Z=g.observable.box(!1),W=g.observable.box(!0),de=g.observable.box(!1),ee=g.observable.box(!1),S=g.observable.box(0),X=g.observable.box(!0),U=g.observable.box(0),H=g.observable.box(0);const te=180;let q=g.observable.box([]),Y=g.observable.box([]),ie=g.observable.box({up:0,dn:0}),ce={};async function pe(){try{let t=(await(await fetch("https://ct.qcad.cc:5443/bwh")).text()).replaceAll("\u5269\u4F59\u6D41\u91CF:","");ne.set(t)}catch{ne.set("\u83B7\u53D6\u5931\u8D25")}}setInterval(pe,60*1e3*5),pe();let R="/";window.location.hostname,R="https://qs.qcad.cc/";async function fe(){try{let t=await(await fetch(R+"allspeed")).json();q.set(t[0]),Y.set(t[1])}catch{console.log("\u65E0\u6CD5\u83B7\u53D6\u901F\u5EA6")}}fe(),document.addEventListener("visibilitychange",function(){document.visibilityState==="visible"&&fe()});const Ae=async()=>{(0,g.runInAction)(async()=>{try{let o=await(await fetch(R+"status")).json();ae.set(o.routes),ue.set(o.preServer);let d=new Map;for(let f of o.server)f.linkCount=0,f.upspeed=0,f.dnspeed=0,d.set(f.name,f);if(ee.get()){let f=Object.groupBy(o.links,h=>h.remote);o.links=[];for(let h in f)o.links.push(...f[h])}for(let f of o.links){let h=d.get(f.ss);h&&(h.linkCount++,f.upOp===1&&(h.upspeed+=f.up),f.dnOp===1&&(h.dnspeed+=f.dn))}S.get()===k.\u987A\u5E8F||(S.get()===k.\u5EF6\u8FDF?o.links.sort((f,h)=>h.delay-f.delay):S.get()===k.\u4E0A\u4F20\u603B\u91CF?o.links.sort((f,h)=>h.up-f.up):S.get()===k.\u4E0B\u8F7D\u603B\u91CF?o.links.sort((f,h)=>h.dn-f.dn):S.get()===k.\u4E0A\u4F20\u901F\u5EA6?o.links.sort((f,h)=>h.up*h.upOp-f.up*f.upOp):S.get()===k.\u4E0B\u8F7D\u901F\u5EA6&&o.links.sort((f,h)=>h.dn*h.dnOp-f.dn*f.dnOp)),X.get()&&o.links.reverse(),z.set(o.links),se.set(o.server);let x=0,p=0;for(let f in o.traffic)x+=o.traffic[f].up,p+=o.traffic[f].dn;ie.set({up:x,dn:p}),ce=o.traffic}catch{console.log("\u65E0\u6CD5\u83B7\u53D6\u6570\u636E",R+"status")}});let t=await(await fetch(R+"speed")).json();U.set(t[0]),H.set(t[1]),document.title=`${c(U.get())}|${c(H.get())}`;let r=q.get().concat(),n=Y.get().concat();r.push(U.get()),n.push(H.get()),r.length>180&&(r=r.slice(10)),n.length>180&&(n=n.slice(10)),q.set(r),Y.set(n)};function G(){let a=z.get();S.get()===k.\u987A\u5E8F?a.sort((t,r)=>t.id-r.id):S.get()===k.\u5EF6\u8FDF?a.sort((t,r)=>r.delay-t.delay):S.get()===k.\u4E0A\u4F20\u603B\u91CF?a.sort((t,r)=>r.up-t.up):S.get()===k.\u4E0B\u8F7D\u603B\u91CF?a.sort((t,r)=>r.dn-t.dn):S.get()===k.\u4E0A\u4F20\u901F\u5EA6?a.sort((t,r)=>r.up-t.up):S.get()===k.\u4E0B\u8F7D\u901F\u5EA6&&a.sort((t,r)=>r.dn-t.dn),X.get()&&a.reverse(),z.set(a)}setInterval(Ae,1e3),Ae();const He=(0,l.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($e,{}),(0,e.jsx)(Ye,{}),(0,e.jsx)(Ve,{}),(0,e.jsx)(Ke,{}),(0,e.jsx)(Ze,{}),(0,e.jsx)(N,{})]})}),$e=(0,l.observer)(function(){const t=ae.get().at(-1);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{Q.set(!Q.get())},children:[Q.get()?F():B(),(0,e.jsx)("span",{children:"\u8DEF\u7531"}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),t?.outServers[0]&&(0,e.jsxs)("span",{style:{width:65,marginRight:3},children:[V(t.outServers[0].name),t.outServers[0].name," "]}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("button",{className:"simple-button",onClick:r=>{fetch(R+"refresh"),r.preventDefault(),r.stopPropagation()},children:"\u5237\u65B0"}),(0,e.jsx)("span",{style:{flex:"1 1 0%"}}),(0,e.jsx)("span",{children:ne.get()})]}),Q.get()&&(0,e.jsx)(qe,{})]})}),qe=(0,l.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[ae.get().map(t=>(0,e.jsx)(ge,{...t},t.name)),(0,e.jsx)(ge,{name:"\u4F18\u5148",mode:"time",preServer:ue.get(),outServers:se.get()},"\u4F18\u5148")]})}),Ye=(0,l.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"LinksHeader",onClick:()=>Z.set(!Z.get()),children:[Z.get()?F():B(),(0,e.jsxs)("span",{style:{paddingLeft:3,marginRight:5,cursor:"default"},children:["\u8FDE\u63A5:",z.get().filter(t=>!t.endTime).length]}),(0,e.jsxs)("div",{style:{flex:1},children:[(0,e.jsx)("span",{style:{color:U.get()<10240?"#228B22":U.get()<102400?"#1E90FF":U.get()<502400?"#FF4500":"#8B0000"},children:"\u2191:"+c(U.get())}),(0,e.jsx)("span",{style:{color:H.get()<10240?"#228B22":H.get()<102400?"#1E90FF":H.get()<502400?"#FF4500":"#8B0000"},children:"\u2193:"+c(H.get())})]}),(0,e.jsx)("button",{className:"simple-button",style:{background:X.get()?"#01162a":""},onClick:t=>{X.set(!X.get()),G(),t.stopPropagation(),t.target.blur()},children:"r"}),(0,e.jsx)("button",{className:"simple-button",style:{background:ee.get()?"#01162a":""},onClick:t=>{ee.set(!ee.get()),t.stopPropagation(),t.target.blur()},children:"u"}),(0,e.jsx)("button",{className:"simple-button",style:{background:S.get()===k.\u987A\u5E8F?"#01162a":""},onClick:t=>{S.set(k.\u987A\u5E8F),G(),t.stopPropagation(),t.target.blur()},children:"id"}),(0,e.jsx)("button",{className:"simple-button",style:{background:S.get()===k.\u4E0A\u4F20\u901F\u5EA6?"#01162a":""},onClick:t=>{S.set(k.\u4E0A\u4F20\u901F\u5EA6),G(),t.stopPropagation(),t.target.blur()},children:"s\u2191"}),(0,e.jsx)("button",{className:"simple-button",style:{background:S.get()===k.\u4E0B\u8F7D\u901F\u5EA6?"#01162a":""},onClick:t=>{S.set(k.\u4E0B\u8F7D\u901F\u5EA6),G(),t.stopPropagation(),t.target.blur()},children:"s\u2193"}),(0,e.jsx)("button",{className:"simple-button",style:{background:S.get()===k.\u4E0A\u4F20\u603B\u91CF?"#01162a":""},onClick:t=>{S.set(k.\u4E0A\u4F20\u603B\u91CF),G(),t.stopPropagation(),t.target.blur()},children:"a\u2191"}),(0,e.jsx)("button",{className:"simple-button",style:{background:S.get()===k.\u4E0B\u8F7D\u603B\u91CF?"#01162a":""},onClick:t=>{S.set(k.\u4E0B\u8F7D\u603B\u91CF),G(),t.stopPropagation(),t.target.blur()},children:"a\u2193"}),(0,e.jsx)("button",{className:"simple-button",onClick:t=>{z.set([]),fetch(R+"allclose"),t.stopPropagation(),t.target.blur()},children:"\u65AD"})]}),Z.get()&&(0,e.jsx)(xe,{links:z.get()})]})}),xe=(0,l.observer)(function({links:t}){const[r,n]=(0,A.useAutoAnimate)({duration:250,easing:"ease-in-out",disrespectUserMotionPreference:!0});return(0,s.useEffect)(()=>{const i=()=>{n(!document.hidden)};return document.addEventListener("visibilitychange",i),()=>{document.removeEventListener("visibilitychange",i)}},[n]),(0,e.jsx)("ul",{ref:r,children:t.map(i=>(0,e.jsx)(Qe,{link:i},String(i.id)))})}),Ge=(0,l.observer)(function(t){let{server:r,route:n}=t,i=n&&n.preServer[r.name]||0;const o=z.get().filter(w=>!w.endTime&&w.ss===r.name&&w.routeName===n.name).length,d=z.get().filter(w=>w.ss===r.name&&w.routeName===n.name).reduce((w,y)=>w+(y.upOp===1?y.up:0),0),x=z.get().filter(w=>w.ss===r.name&&w.routeName===n.name).reduce((w,y)=>w+(y.dnOp===1?y.dn:0),0);let p=(0,s.useRef)(0);const f=300,h=()=>{const w=new Date().getTime(),y=w-p.current;y<f&&y>0&&v(),p.current=w},v=()=>{if(!n)return;let w=prompt("\u8BF7\u8F93\u5165\u5EF6\u8FDF\u503C",i.toString());if(w){let y=parseInt(w);isNaN(y)||(n.name==="\u4F18\u5148"?fetch(R+`set_preServer/${r.name}/${y}`):fetch(R+`set_route_config/${n.name}/${r.name}/${y}`))}};return(0,e.jsxs)("div",{className:"sdiv",style:{margin:1,minWidth:160,height:30,flexGrow:1},onTouchEnd:h,onDoubleClick:w=>{p.current===0&&v(),p.current=0},children:[(0,e.jsxs)("span",{style:{width:77,textAlign:"left",marginRight:2,fontSize:"0.9rem"},children:[V(r.name),r.name," "]}),(0,e.jsx)("span",{style:{marginRight:2,fontSize:"0.8rem"},children:o}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"column"},children:[d?(0,e.jsx)("span",{style:{fontSize:"0.7rem",color:d<10240?"#228B22":d<102400?"#1E90FF":d<502400?"#FF4500":"#8B0000"},children:"\u2191:"+c(d)}):null,x?(0,e.jsx)("span",{style:{fontSize:"0.7rem",color:x<10240?"#228B22":x<102400?"#1E90FF":x<502400?"#FF4500":"#8B0000"},children:"\u2193:"+c(x)}):null]}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("div",{style:{display:"flex",flexFlow:"column"},children:[(0,e.jsx)("span",{style:{color:r.time<500?"green":r.time<1e3?"blue":r.time<3e3?"red":"midnightblue"},children:r.time}),i?(0,e.jsxs)("span",{style:{color:"gray",fontSize:"0.6rem"},children:["-",i]}):null]})]},r.name)}),ge=(0,l.observer)(function(t){let[r,n]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1),[d,x]=(0,s.useState)(!1);const p=z.get().filter(y=>y.routeName===t.name),f=p.reduce((y,E)=>y+(E.upOp===1?E.up:0),0),h=p.reduce((y,E)=>y+(E.dnOp===1?E.dn:0),0),[v,w]=(0,s.useState)(t.mode);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:2,fontSize:"1rem",display:"flex"},onClick:()=>{n(!r)},children:[(0,e.jsx)("span",{style:{marginLeft:10},children:r?F():B()}),(0,e.jsx)("span",{children:t.name}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsx)(O,{speed:f,tag:"\u2191:",opacity:1}),(0,e.jsx)(O,{speed:h,tag:"\u2193:",opacity:1}),(0,e.jsx)("span",{style:{width:30}}),(0,e.jsx)("span",{style:{width:20,marginRight:15},children:p.filter(y=>!y.endTime).length}),t.outServers[0]&&(0,e.jsxs)("span",{style:{width:65,marginRight:3},children:[V(t.outServers[0].name),t.outServers[0].name," "]}),(0,e.jsx)("select",{title:"m:",id:"fruit-select",value:v,onClick:y=>{y.stopPropagation()},onChange:y=>{w(y.target.value),fetch(R+`set_route_slb/${t.name}/${y.target.value}`)},children:t.outServers.map((y,E)=>(0,e.jsx)("option",{value:E+1,children:E===0?"time":`slb${E+1}`},E))})]}),r&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"Header",style:{marginLeft:30,marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{o(!i)},children:[i?F():B(),(0,e.jsxs)("span",{children:["\u8282\u70B9:",t.outServers.length]})]}),i&&(0,e.jsx)("div",{style:{overflow:"auto",display:"grid",margin:3,gridTemplateColumns:"repeat(auto-fit, minmax(190px, 1fr))"},children:t.outServers.map(y=>{let E=se.get().find(K=>K.name===y.name);return(0,e.jsx)(Ge,{server:E,route:t},y.name)})}),(0,e.jsxs)("div",{className:"Header",style:{marginLeft:30,marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{x(!d)},children:[d?F():B(),(0,e.jsxs)("span",{children:["\u8FDE\u63A5:",p.filter(y=>!y.endTime).length,"/",p.length]})]}),d&&(0,e.jsx)(xe,{links:p})]})]})}),Ve=(0,l.observer)(function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{W.set(!W.get())},children:[W.get()?F():B(),(0,e.jsx)("span",{children:"\u8FDE\u63A5\u901F\u5EA6"})]}),(W.get()||de.get())&&(0,e.jsx)(Xe,{})]})}),Xe=(0,l.observer)(function(){const t=(0,s.useRef)(null),r=(0,s.useRef)(null);return de.set(!0),(0,s.useEffect)(()=>{W.get()&&r.current&&r.current.resize()},[W.get()]),(0,s.useEffect)(()=>{if(t.current&&!r.current){r.current=u.init(t.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const n={title:{text:"\u8FDE\u63A5\u901F\u5EA6"},tooltip:{trigger:"axis",formatter:function(i){let[o,d]=i,x=q.get()[o.dataIndex],p=Y.get()[d.dataIndex];return`\u4E0A\u4F20\u901F\u5EA6:${c(x)}<br/>\u4E0B\u8F7D\u901F\u5EA6:${c(p)}`},axisPointer:{animation:!1}},legend:{data:["\u4E0A\u4F20\u901F\u5EA6","\u4E0B\u8F7D\u901F\u5EA6"]},xAxis:{type:"category",data:[...Array(te).keys()].map(i=>-i+te-1),splitLine:{show:!1}},yAxis:{type:"value",axisLabel:{formatter:function(i){return c(i)}}},series:[{name:"\u4E0A\u4F20\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(27, 195, 148)"},lineStyle:{color:"rgb(27, 195, 148)",width:1}},{name:"\u4E0B\u8F7D\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(16, 109, 202)"},lineStyle:{color:"rgb(16, 109, 202)",width:1}}]};r.current.setOption(n)}return r.current&&r.current.setOption({series:[{data:q.get()},{data:Y.get()}]}),()=>{r.current&&(r.current.dispose(),r.current=null)}},[]),(0,s.useEffect)(()=>(0,g.autorun)(()=>{let n=q.get(),i=Y.get();document.hidden||W.get()&&r.current&&r.current.setOption({series:[{data:n.map(o=>o)},{data:i.map(o=>o)}]})})),(0,s.useEffect)(()=>{const n=()=>{r.current&&r.current.resize()};return window.addEventListener("resize",n),window.addEventListener("orientationchange",n),()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}},[]),(0,e.jsx)("div",{style:{height:200,margin:3,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"4px",display:W.get()?"flex":"none"},children:(0,e.jsx)("div",{ref:t,style:{height:200,width:"100%",backgroundColor:"#f5f5f5",border:"1px solid #ddd",borderRadius:"4px"}})})}),Ke=(0,l.observer)(function(){const[t,r]=(0,s.useState)(!1);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{r(!t)},children:[t?F():B(),(0,e.jsx)("span",{children:"\u5EF6\u8FDF"})]}),t&&(0,e.jsx)(Je,{showPings:t})]})}),Je=(0,l.observer)(function({showPings:t}){const r=(0,s.useRef)(null),n=(0,s.useRef)(null),i=(0,s.useRef)(!1),[o,d]=(0,s.useState)({});return(0,s.useEffect)(()=>{let x=setInterval(()=>{document.hidden||t&&fetch(`${R}pings`).then(p=>p.json()).then(p=>{for(let h of Object.keys(p))p[h]=p[h].map(v=>v>=2e3?2e3:v);d(p)}).catch(p=>{console.log("\u65E0\u6CD5\u83B7\u53D6ping")})},1e3);return()=>clearInterval(x)},[]),i.current=!0,(0,s.useEffect)(()=>{t&&n.current&&n.current.resize()},[t]),(0,s.useEffect)(()=>{if(r.current&&!n.current){n.current=u.init(r.current,{renderer:"canvas",useDirtyRect:!1,grid:{top:50,left:50,right:10,bottom:30}});const x={title:{text:"\u5EF6\u8FDF"},tooltip:{trigger:"axis",formatter:function(p){return p.map(f=>f.seriesName+":"+f.value+"ms").join("<br/>")},axisPointer:{animation:!1}},xAxis:{type:"category",data:[...Array(te).keys()].map(p=>-p+te-1),splitLine:{show:!1}},yAxis:{type:"value",axisLabel:{formatter:function(p){return`${p}ms`}}}};n.current.setOption(x)}return n.current&&n.current.setOption({series:[{data:o.bwh},{data:o.yxvm},{data:o.yxvm_cu},{data:o.claw}]}),()=>{n.current&&(n.current.dispose(),n.current=null)}},[]),(0,s.useEffect)(()=>(0,g.autorun)(()=>{t&&n.current&&n.current.setOption({legend:{data:Object.keys(o)},series:Object.keys(o).map(x=>({name:x,showSymbol:!1,type:"line",itemStyle:{},lineStyle:{width:1},data:o[x].map(p=>p)}))})})),(0,s.useEffect)(()=>{const x=()=>{n.current&&n.current.resize()};return window.addEventListener("resize",x),window.addEventListener("orientationchange",x),()=>{window.removeEventListener("resize",x),window.removeEventListener("orientationchange",x)}},[]),(0,e.jsx)("div",{style:{height:200,margin:3,boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"4px",display:t?"flex":"none"},children:(0,e.jsx)("div",{ref:r,style:{height:200,width:"100%",backgroundColor:"#f5f5f5",border:"1px solid #ddd",borderRadius:"4px"}})})}),Qe=(0,l.observer)(function({link:t}){const[r,n]=(0,s.useState)(!1),i=(0,s.useRef)(0),o=300,d=(0,s.useRef)(null),x=(0,s.useRef)(null);function p(v){n(v),t.details=v}(0,s.useEffect)(()=>{if(r&&d.current){x.current=u.init(d.current,{renderer:"canvas",useDirtyRect:!1});const v={title:{text:"\u8FDE\u63A5\u901F\u5EA6"},tooltip:{trigger:"axis",formatter:function(w){let[y,E]=w;return`\u4E0A\u4F20\u901F\u5EA6:${c(y.value)}<br/>\u4E0B\u8F7D\u901F\u5EA6:${c(E.value)}`},axisPointer:{animation:!1}},legend:{data:["\u4E0A\u4F20\u901F\u5EA6","\u4E0B\u8F7D\u901F\u5EA6"]},xAxis:{type:"category",data:[...Array(60).keys()].map(w=>w),splitLine:{show:!1},min:0,max:60},yAxis:{type:"value",axisLabel:{formatter:function(w){return c(w)}}},series:[{name:"\u4E0A\u4F20\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(27, 195, 148)"},lineStyle:{color:"rgb(27, 195, 148)",width:1}},{name:"\u4E0B\u8F7D\u901F\u5EA6",showSymbol:!1,type:"line",data:[],itemStyle:{color:"rgb(16, 109, 202)"},lineStyle:{color:"rgb(16, 109, 202)",width:1}}]};return x.current.setOption(v),()=>{x.current.dispose()}}},[r]),(0,s.useEffect)(()=>{r&&d.current&&x.current&&x.current.setOption({series:[{data:t.ups},{data:t.dns}]})},[t.ups,t.dns]),(0,s.useEffect)(()=>{r&&d.current&&x.current.resize()},[window.innerWidth,window.innerHeight]);const f=()=>{const v=new Date().getTime(),w=v-i.current;w<o&&w>0&&h(),i.current=v},h=()=>{r||(fetch(`${R}close/${t.id}`),z.set(z.get().filter(v=>v.id!==t.id)))};return(0,e.jsxs)("li",{style:{margin:3,padding:1,display:"flex",flexDirection:"column"},className:t.endTime?"link-end":"",onClick:v=>{v.detail>1&&h()},onTouchEnd:f,children:[(0,e.jsxs)("div",{style:{display:"flex",cursor:"pointer",justifyContent:"center",alignItems:"center"},children:[(0,e.jsxs)("span",{style:{width:30},children:[V(t.ss),t.ss?.substring(t.ss.length-1)]}),(0,e.jsx)("span",{style:{width:30},children:t.remote?.substring(17)}),(0,e.jsx)("span",{style:{width:30},children:Ue(t.linkTime,t.endTime)}),(0,e.jsx)("span",{style:{width:25,marginRight:1,color:t.delay<500?"green":t.delay<1e3?"blue":t.delay<3e3?"red":"midnightblue"},children:t.delay}),(0,e.jsxs)("span",{style:{flex:1,textAlign:"center",wordBreak:"break-all",color:t.endTime?"#acacac":"black"},onClick:v=>{p(!r),v.detail>1&&v.stopPropagation()},children:[t.addr,":",t.port]}),(0,e.jsxs)("div",{style:{padding:0,margin:0,display:"flex",flexDirection:"column",height:30},children:[t.upOp>0&&(0,e.jsx)(O,{speed:t.up,tag:"\u2191:",opacity:t.upOp,style:{fontSize:"0.7rem"}}),t.dnOp>0&&(0,e.jsx)(O,{speed:t.dn,tag:"\u2193:",opacity:t.dnOp,style:{fontSize:"0.7rem"}})]}),(0,e.jsxs)("div",{style:{padding:0,margin:0,display:"flex",marginLeft:15,height:30,flexDirection:"column"},children:[(0,e.jsx)(O,{speed:t.allUp,tag:"\u2191:",opacity:1,style:{fontSize:"0.7rem"}}),(0,e.jsx)(O,{speed:t.allDn,tag:"\u2193:",opacity:1,style:{fontSize:"0.7rem"}})]})]}),r&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("hr",{style:{margin:"5px 0",borderTop:"1px solid #444",width:"100%"}}),(0,e.jsxs)("div",{style:{fontSize:"1em",lineHeight:"1.7",padding:"5px 0"},onTouchEnd:v=>{v.stopPropagation()},onClick:v=>{v.stopPropagation()},children:[(0,e.jsxs)("div",{children:["ID: ",t.id]}),(0,e.jsxs)("div",{children:["\u8DEF\u7531:",t.routeName]}),(0,e.jsxs)("div",{children:["\u8FDC\u7A0B\u5730\u5740: ",t.remote]}),(0,e.jsxs)("div",{children:["\u8FDE\u63A5\u65F6\u95F4: ",new Date(t.linkTime).toLocaleString()]}),(0,e.jsxs)("div",{children:["\u670D\u52A1\u5668: ",V(t.ss)," ",t.ss]}),(0,e.jsx)("div",{ref:d,style:{width:"100%",height:"200px"}})]})]})]})}),O=(0,l.observer)(function(t){let{speed:r,opacity:n,style:i}=t;return(0,e.jsx)("span",{className:"fade-out",style:{...i,opacity:n===1?1:0,color:r<20480?"#228B22":r<102400?"#1E90FF":r<1024e3?"#FF4500":"#8B0000"},children:t.tag+c(r)})}),Ze=(0,l.observer)(function(){const[t,r]=(0,s.useState)(!1),[n,i]=(0,s.useState)([]);return(0,s.useEffect)(()=>{t&&fetch(`${R}traffics`).then(d=>d.json()).then(d=>i(d.reverse()));let o=setInterval(()=>{t&&fetch(`${R}traffics`).then(d=>d.json()).then(d=>i(d.reverse()))},2e3);return()=>clearInterval(o)},[t]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"NodesHeader",style:{marginBottom:3,fontSize:"1rem",display:"flex"},onClick:()=>{!t&&n.length===0&&i([{start:new Date().setMinutes(0,0,0),traffic:ce}]),r(!t)},children:[t?F():B(),(0,e.jsx)("span",{children:"\u6D41\u91CF"}),(0,e.jsx)("span",{style:{flex:1}}),(0,e.jsxs)("span",{children:["\u2191:",c(ie.get().up)]}),(0,e.jsx)("span",{style:{width:30}}),(0,e.jsxs)("span",{children:["\u2193:",c(ie.get().dn)]}),(0,e.jsx)("span",{style:{flex:1}})]}),t&&(0,e.jsx)(et,{traffics:n})]})}),et=(0,l.observer)(function(t){let{traffics:r}=t;return(0,e.jsx)("div",{children:r.map((n,i)=>(0,e.jsx)(rt,{snapshot:n,current:i===0},n.start))})});function tt(a,t){const r=new Date(a),n=i=>i.toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1});return t?`${n(r)} - \u73B0\u5728`:`${n(r)} - ${n(new Date(a+60*60*1e3))}`}const rt=(0,l.observer)(function(t){const{snapshot:r,current:n}=t,{traffic:i}=r;let[o,d]=(0,s.useState)(!1),x=Object.values(i).reduce((f,h)=>f+h.up,0),p=Object.values(i).reduce((f,h)=>f+h.dn,0);return(0,e.jsxs)("li",{style:{margin:3,display:"flex",flexDirection:"column"},onClick:f=>{d(!o)},children:[(0,e.jsxs)("div",{style:{display:"flex",cursor:"pointer"},children:[(0,e.jsx)("span",{style:{width:125,color:"#666",fontVariantNumeric:"tabular-nums"},children:tt(r.start,n)}),(0,e.jsx)(O,{speed:x,tag:"\u2191:",opacity:1,style:{width:90}}),(0,e.jsx)(O,{speed:p,tag:"\u2193:",opacity:1})]}),o&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("hr",{style:{margin:"5px 0",borderTop:"1px solid #444",width:"100%"}}),(0,e.jsx)("div",{style:{fontSize:"1em",lineHeight:"1.7",padding:"5px 0"},children:Object.entries(i).map(([f,h])=>(0,e.jsxs)("div",{children:[f,": ",c(h.up)," \u2191 ",c(h.dn)," \u2193"]},f))})]})]})}),nt=document.getElementById("root");(0,m.H)(nt).render((0,e.jsx)(He,{})),document.addEventListener("mousedown",function(a){a.detail>1&&a.preventDefault()})})()})();

//# sourceMappingURL=7022307a988c94dc2ca6.main.js.map