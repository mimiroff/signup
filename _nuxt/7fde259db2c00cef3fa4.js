(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(216))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=f;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},function(e){return!f(e)||t.test(e)})}},179:function(e,t,r){var content=r(209);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("7c6ec044",content,!0,{sourceMap:!1})},180:function(e,t,r){var content=r(214);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("e47ff408",content,!0,{sourceMap:!1})},186:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),t.helpers=void 0;var n=E(r(215)),o=E(r(218)),l=E(r(219)),f=E(r(220)),c=E(r(221)),d=E(r(222)),v=E(r(223)),m=E(r(224)),h=E(r(225)),y=E(r(226)),P=E(r(227)),_=E(r(228)),x=E(r(229)),j=E(r(230)),O=E(r(231)),w=E(r(232)),M=E(r(233)),A=E(r(234)),$=E(r(235)),k=E(r(236)),S=E(r(237)),C=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(174));function E(e){return e&&e.__esModule?e:{default:e}}t.helpers=C},207:function(e,t,r){e.exports=r.p+"img/f0d2603.gif"},208:function(e,t,r){"use strict";var n=r(179);r.n(n).a},209:function(e,t,r){(e.exports=r(49)(!1)).push([e.i,".preloader-wrapper[data-v-495089e2]{display:flex;min-width:100vw;min-height:100vh;justify-content:center;align-items:center;background-color:#fff;opacity:.7;position:fixed;top:0;left:0;z-index:9999999}.preloader[data-v-495089e2]{width:300x;height:200px}",""])},211:function(e,t,r){"use strict";r(212)("link",function(e){return function(t){return e(this,"a","href",t)}})},212:function(e,t,r){var n=r(4),o=r(9),l=r(19),f=/"/g,c=function(e,t,r,n){var o=String(l(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(f,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},213:function(e,t,r){"use strict";var n=r(180);r.n(n).a},214:function(e,t,r){(e.exports=r(49)(!1)).push([e.i,".navigation__link{text-decoration:none;color:#666;cursor:pointer}",""])},215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(174).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},216:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(217).withParams:r(100).withParams;t.default=n}).call(this,r(69))},217:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e(function(){})};t.withParams=o}).call(this,r(27))},218:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(174).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},219:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(174).regex)("numeric",/^[0-9]*$/);t.default=n},220:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})}},221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(174).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=n},222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174),o=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)});t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},223:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)})};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})}},225:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})}},226:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174),o=(0,n.withParams)({type:"required"},n.req);t.default=o},227:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})}},230:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(174).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/i);t.default=n},231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})}},232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})}},233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e){return(0,n.withParams)({type:"not"},function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)})}},234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(174);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}},236:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(174).regex)("integer",/^-?[0-9]*$/);t.default=n},237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(174).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},239:function(e,t,r){var content=r(263);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("36873827",content,!0,{sourceMap:!1})},240:function(e,t,r){"use strict";var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preloader-wrapper"},[t("img",{staticClass:"preloader",attrs:{src:r(207)}})])}],o={},l=(r(208),r(18)),component=Object(l.a)(o,function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,"495089e2",null);t.a=component.exports},242:function(e,t,r){"use strict";r(211);var n={props:["text","link"],methods:{redirect:function(){this.$router.push(this.link)}}},o=(r(213),r(18)),component=Object(o.a)(n,function(){var e=this.$createElement;return(this._self._c||e)("a",{staticClass:"navigation__link",on:{click:this.redirect}},[this._v(this._s(this.text))])},[],!1,null,null,null);t.a=component.exports},262:function(e,t,r){"use strict";var n=r(239);r.n(n).a},263:function(e,t,r){(e.exports=r(49)(!1)).push([e.i,"body,html{font-family:Helvetica Neue,Helvetica,sans-serif;font-size:16px}.main{width:318px;margin:20px auto 0}.app-button,.navigation{margin-top:22px}.app-dialog-box,.app-input{margin-top:20px}.navigation{border-top:1px solid #e0e7eb;display:flex;justify-content:center}.navigation__list{list-style:none;display:flex;flex-direction:column;padding:0;margin:30px 0 0}",""])},267:function(e,t,r){"use strict";r.r(t);r(51);var n=r(7),o=r(184),l=r(185),f=r(183),c=r(241),d=r(182),v=r(240),m=r(242),h=r(186),y=r(203),P=r(204),_={components:{AppButton:o.a,AppFoto:l.a,AppHeader:f.a,AppInput:c.a,DialogBox:d.a,Preloader:v.a,NavLink:m.a},data:function(){return{dialogText:"Hi, I'm Stephen. I'll sign you up with InstaPay in minutes!",helpBlock:{reset:!1,help:!0},navigation:{prev:"/",next:"/contacts"},email:"",errorMessage:"",showPreloader:!1}},methods:{submit:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.validate(),this.$v.email.$error){e.next=14;break}return this.showPreloader=!0,e.prev=3,e.next=6,this.$axios({url:P.a.GRAPHQL_PATH,method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify({query:"query ($email: String!) { hasExistingLead (email: $email) } ",variables:{email:this.email}})});case 6:t=e.sent,this.$store.dispatch("setEmail",this.email),this.handleResponse(t.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[3,11]])}));return function(){return e.apply(this,arguments)}}(),validate:function(){this.$v.email.$touch(),this.errorMessage=this.$v.email.required?this.$v.email.email?"":"You should type a valid email address":"This field is required"},handleResponse:function(data){data.data&&!data.data.hasExistingLead?this.$router.push("/start"):data.data&&data.data.hasExistingLead&&this.$router.push("/check-email")},redirect:function(){this.$router.push("/")},onBodyEnterHandler:function(e){"Enter"===e.key&&this.submit()}},mounted:function(){document.querySelector("body").addEventListener("keydown",this.onBodyEnterHandler)},beforeDestroy:function(){document.querySelector("body").removeEventListener("keydown",this.onBodyEnterHandler)},validations:{email:{required:y.c,email:h.email}}},x=(r(262),r(18)),component=Object(x.a)(_,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("AppHeader",{attrs:{helpBlock:e.helpBlock}}),e._v(" "),r("main",{staticClass:"main"},[r("AppFoto",{staticClass:"app-foto"}),e._v(" "),r("DialogBox",{staticClass:"app-dialog-box",attrs:{text:e.dialogText}}),e._v(" "),r("AppInput",{staticClass:"app-input",attrs:{errorMessage:e.errorMessage,type:"email",appPlaceholder:"Email"},on:{input:e.validate},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("AppButton",{staticClass:"app-button",attrs:{text:"Next"},nativeOn:{click:function(t){return e.submit(t)}}})],1),e._v(" "),r("nav",{staticClass:"navigation"},[r("ul",{staticClass:"navigation__list"},[r("li",{staticClass:"navigation__element"},[r("NavLink",{attrs:{text:"Sign up",link:"/"}})],1)])]),e._v(" "),r("Preloader",{directives:[{name:"show",rawName:"v-show",value:e.showPreloader,expression:"showPreloader"}]})],1)},[],!1,null,null,null);t.default=component.exports}}]);