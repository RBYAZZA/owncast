(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4976],{26803:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}},56338:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=_interopRequireDefault(r(5661));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=a,e.exports=a},5661:function(e,t,r){"use strict";var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(42122)),o=_interopRequireWildcard(r(67294)),u=a(r(26803)),c=a(r(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_getRequireWildcardCache=function(e){return e?r:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=_getRequireWildcardCache(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}var UpOutlined=function(e,t){return o.createElement(c.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:u.default}))};UpOutlined.displayName="UpOutlined";var i=o.forwardRef(UpOutlined);t.default=i},8799:function(e,t,r){"use strict";var a=r(75263).default,n=r(64836).default;t.Z=void 0;var l=n(r(10434)),o=n(r(38416)),u=n(r(18698)),c=n(r(27424)),i=n(r(5085)),d=n(r(56338)),s=n(r(94184)),f=n(r(82122)),p=a(r(67294)),m=r(31929),v=n(r(93319)),y=n(r(3236)),g=r(51130),w=r(46549),b=r(47419),h=r(71434),__rest=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},O=p.forwardRef(function(e,t){var r=p.useContext(m.ConfigContext),a=r.getPrefixCls,n=r.direction,O=p.useContext(y.default),_=p.useState(!1),E=(0,c.default)(_,2),x=E[0],j=E[1],I=p.useRef(null);p.useImperativeHandle(t,function(){return I.current});var N=e.className,S=e.size,C=e.disabled,M=e.prefixCls,P=e.addonBefore,k=e.addonAfter,R=e.prefix,F=e.bordered,A=void 0===F||F,T=e.readOnly,Z=e.status,W=e.controls,D=__rest(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),L=a("input-number",M),q=(0,w.useCompactItemContext)(L,n),z=q.compactSize,B=q.compactItemClassnames,G=p.createElement(d.default,{className:"".concat(L,"-handler-up-inner")}),H=p.createElement(i.default,{className:"".concat(L,"-handler-down-inner")}),U="boolean"==typeof W?W:void 0;"object"===(0,u.default)(W)&&(G=void 0===W.upIcon?G:p.createElement("span",{className:"".concat(L,"-handler-up-inner")},W.upIcon),H=void 0===W.downIcon?H:p.createElement("span",{className:"".concat(L,"-handler-down-inner")},W.downIcon));var V=(0,p.useContext)(g.FormItemInputContext),K=V.hasFeedback,Q=V.status,X=V.isFormItemInput,J=V.feedbackIcon,Y=(0,h.getMergedStatus)(Q,Z),$=z||S||O,ee=p.useContext(v.default),et=null!=C?C:ee,er=(0,s.default)((en={},(0,o.default)(en,"".concat(L,"-lg"),"large"===$),(0,o.default)(en,"".concat(L,"-sm"),"small"===$),(0,o.default)(en,"".concat(L,"-rtl"),"rtl"===n),(0,o.default)(en,"".concat(L,"-borderless"),!A),(0,o.default)(en,"".concat(L,"-in-form-item"),X),en),(0,h.getStatusClassNames)(L,Y),B,N),ea=p.createElement(f.default,(0,l.default)({ref:I,disabled:et,className:er,upHandler:G,downHandler:H,prefixCls:L,readOnly:T,controls:U},D));if(null!=R||K){var en,el,eo=(0,s.default)("".concat(L,"-affix-wrapper"),(0,h.getStatusClassNames)("".concat(L,"-affix-wrapper"),Y,K),(el={},(0,o.default)(el,"".concat(L,"-affix-wrapper-focused"),x),(0,o.default)(el,"".concat(L,"-affix-wrapper-disabled"),e.disabled),(0,o.default)(el,"".concat(L,"-affix-wrapper-sm"),"small"===O),(0,o.default)(el,"".concat(L,"-affix-wrapper-lg"),"large"===O),(0,o.default)(el,"".concat(L,"-affix-wrapper-rtl"),"rtl"===n),(0,o.default)(el,"".concat(L,"-affix-wrapper-readonly"),T),(0,o.default)(el,"".concat(L,"-affix-wrapper-borderless"),!A),(0,o.default)(el,"".concat(N),!(P||k)&&N),el));ea=p.createElement("div",{className:eo,style:e.style,onMouseUp:function(){return I.current.focus()}},R&&p.createElement("span",{className:"".concat(L,"-prefix")},R),(0,b.cloneElement)(ea,{style:null,value:e.value,onFocus:function(t){var r;j(!0),null===(r=e.onFocus)||void 0===r||r.call(e,t)},onBlur:function(t){var r;j(!1),null===(r=e.onBlur)||void 0===r||r.call(e,t)}}),K&&p.createElement("span",{className:"".concat(L,"-suffix")},J))}if(null!=P||null!=k){var eu,ec="".concat(L,"-group"),ei="".concat(ec,"-addon"),ed=P?p.createElement("div",{className:ei},P):null,es=k?p.createElement("div",{className:ei},k):null,ef=(0,s.default)("".concat(L,"-wrapper"),ec,(0,o.default)({},"".concat(ec,"-rtl"),"rtl"===n)),ep=(0,s.default)("".concat(L,"-group-wrapper"),(eu={},(0,o.default)(eu,"".concat(L,"-group-wrapper-sm"),"small"===O),(0,o.default)(eu,"".concat(L,"-group-wrapper-lg"),"large"===O),(0,o.default)(eu,"".concat(L,"-group-wrapper-rtl"),"rtl"===n),eu),(0,h.getStatusClassNames)("".concat(L,"-group-wrapper"),Y,K),N);ea=p.createElement("div",{className:ep,style:e.style},p.createElement("div",{className:ef},ed&&p.createElement(w.NoCompactStyle,null,p.createElement(g.NoFormStyle,{status:!0,override:!0},ed)),(0,b.cloneElement)(ea,{style:null,disabled:et}),es&&p.createElement(w.NoCompactStyle,null,p.createElement(g.NoFormStyle,{status:!0,override:!0},es))))}return ea});t.Z=O},16373:function(e,t,r){"use strict";var a=r(64836).default,n=r(75263).default;t.default=void 0;var l=n(r(62704)),o=a(r(87412)),u=l.default;u.Header=l.Header,u.Footer=l.Footer,u.Content=l.Content,u.Sider=o.default,t.default=u},89277:function(e,t,r){"use strict";var a=r(75263).default,n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(10434));n(r(18698));var o=a(r(67294));n(r(13594));var u=n(r(28460)),__rest=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},c=o.forwardRef(function(e,t){var r=e.ellipsis,a=e.rel,n=__rest(e,["ellipsis","rel"]),c=(0,l.default)((0,l.default)({},n),{rel:void 0===a&&"_blank"===n.target?"noopener noreferrer":a});return delete c.navigate,o.createElement(u.default,(0,l.default)({},c,{ref:t,ellipsis:!!r,component:"a"}))});t.default=c},21987:function(e,t,r){"use strict";var a=r(75263).default,n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(10434)),o=a(r(67294)),u=n(r(28460)),c=o.forwardRef(function(e,t){return o.createElement(u.default,(0,l.default)({ref:t},e,{component:"div"}))});t.default=c},15394:function(e,t,r){"use strict";var a=r(75263).default,n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(10434)),o=n(r(18698)),u=n(r(18475)),c=a(r(67294));n(r(13594));var i=n(r(28460)),__rest=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>t.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},d=c.forwardRef(function(e,t){var r=e.ellipsis,a=__rest(e,["ellipsis"]),n=c.useMemo(function(){return r&&"object"===(0,o.default)(r)?(0,u.default)(r,["expandable","rows"]):r},[r]);return c.createElement(i.default,(0,l.default)({ref:t},a,{ellipsis:n,component:"span"}))});t.default=d},53740:function(e,t,r){"use strict";var a=r(64836).default;t.default=void 0;var n=a(r(89277)),l=a(r(21987)),o=a(r(15394)),u=a(r(34528)),c=a(r(89652)).default;c.Text=o.default,c.Link=n.default,c.Title=u.default,c.Paragraph=l.default,t.default=c},93645:function(e,t,r){"use strict";r.d(t,{u:function(){return getRoundingMethod}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function getRoundingMethod(e){return e?a[e]:a.trunc}},59910:function(e,t,r){"use strict";r.d(t,{Z:function(){return differenceInMilliseconds}});var a=r(19013),n=r(13882);function differenceInMilliseconds(e,t){return(0,n.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,r){"use strict";r.d(t,{Z:function(){return differenceInSeconds}});var a=r(59910),n=r(13882),l=r(93645);function differenceInSeconds(e,t,r){(0,n.Z)(2,arguments);var o=(0,a.Z)(e,t)/1e3;return(0,l.u)(null==r?void 0:r.roundingMethod)(o)}},10203:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/actions",function(){return r(11418)}])},11418:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return FediverseActions}});var a=r(85893),n=r(67294),l=r(2307),o=r(53740),u=r(58091),c=r(92863),i=r(19120),d=r(15578);let{Title:s,Paragraph:f}=o.default;function FediverseActions(){let[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(0),[d,p]=(0,n.useState)(0),getActions=async()=>{try{let e=50*d,r="".concat(c.op,"?offset=").concat(e,"&limit=").concat(50),a=await (0,c.rQ)(r,{auth:!0}),{results:n,total:l}=a;o(l),(0,i.Qr)(n)?t([]):t(n)}catch(e){console.log("==== error",e)}};(0,n.useEffect)(()=>{getActions()},[d]);let m=[{title:"Action",dataIndex:"type",key:"type",width:50,render:(e,t)=>{let r,n;switch(t.type){case"FEDIVERSE_ENGAGEMENT_REPOST":r="/img/repost.svg",n="Share";break;case"FEDIVERSE_ENGAGEMENT_LIKE":r="/img/like.svg",n="Like";break;case"FEDIVERSE_ENGAGEMENT_FOLLOW":r="/img/follow.svg",n="Follow";break;default:r=""}return(0,a.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,a.jsx)("img",{src:r,width:"70%",alt:n,title:n}),(0,a.jsx)("div",{style:{fontSize:"0.7rem"},children:n})]})}},{title:"From",dataIndex:"actorIRI",key:"from",render:(e,t)=>(0,a.jsx)("a",{href:t.actorIRI,children:t.actorIRI})},{title:"When",dataIndex:"timestamp",key:"timestamp",render:(e,t)=>{let r=new Date(t.timestamp);return(0,u.Z)(r,"P pp")}}];function makeTable(e,t){return(0,a.jsx)(l.Z,{dataSource:e,columns:t,size:"small",rowKey:e=>e.iri,pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:r},onChange:e=>{let t=e.current;p(t)}})}return(0,a.jsxs)("div",{children:[(0,a.jsx)(s,{level:3,children:"Fediverse Actions"}),(0,a.jsx)(f,{children:"Below is a list of actions that were taken by others in response to your posts as well as people who requested to follow you."}),makeTable(e,m)]})}FediverseActions.getLayout=function(e){return(0,a.jsx)(d.l,{page:e})}},11163:function(e,t,r){e.exports=r(59974)}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,7752,5891,2891,4749,6627,8966,8091,5578,9774,2888,179],function(){return e(e.s=10203)}),_N_E=e.O()}]);