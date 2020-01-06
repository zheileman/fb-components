!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1).initAll()},function(t,e,n){(function(n){var o,i,r,s;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s=function(t){"use strict";function e(t,e){if(window.NodeList.prototype.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e.call(window,t[n],n,t)}function o(t){this.$module=t,this.moduleId=t.getAttribute("id"),this.$sections=t.querySelectorAll(".govuk-accordion__section"),this.$openAllButton="",this.browserSupportsSessionStorage=i.checkForSessionStorage(),this.controlsClass="govuk-accordion__controls",this.openAllClass="govuk-accordion__open-all",this.iconClass="govuk-accordion__icon",this.sectionHeaderClass="govuk-accordion__section-header",this.sectionHeaderFocusedClass="govuk-accordion__section-header--focused",this.sectionHeadingClass="govuk-accordion__section-heading",this.sectionSummaryClass="govuk-accordion__section-summary",this.sectionButtonClass="govuk-accordion__section-button",this.sectionExpandedClass="govuk-accordion__section--expanded"}(function(t){var e,n,o;"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(e=Object.defineProperty,n=Object.prototype.hasOwnProperty("__defineGetter__"),o="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,i,r){if(e&&(t===window||t===document||t===Element.prototype||t instanceof Element))return e(t,i,r);if(null===t||!(t instanceof Object||"object"===a(t)))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var s=String(i),c="value"in r||"writable"in r,u="get"in r&&a(r.get),l="set"in r&&a(r.set);if(u){if("function"!==u)throw new TypeError("Getter must be a function");if(!n)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(c)throw new TypeError(o);Object.__defineGetter__.call(t,s,r.get)}else t[s]=r.value;if(l){if("function"!==l)throw new TypeError("Setter must be a function");if(!n)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(c)throw new TypeError(o);Object.__defineSetter__.call(t,s,r.set)}return"value"in r&&(t[s]=r.value),t})}).call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),function(t){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function(t){var e,n=Array,o=Object,i=o.prototype,r=n.prototype,s=function(){},c=i.toString,u="function"==typeof Symbol&&"symbol"===a(Symbol.toStringTag),l=Function.prototype.toString,d=function(t){try{return l.call(t),!0}catch(t){return!1}},p="[object Function]",h="[object GeneratorFunction]";e=function(t){if("function"!=typeof t)return!1;if(u)return d(t);var e=c.call(t);return e===p||e===h};var f=r.slice,b=r.concat,m=r.push,v=Math.max,y=this;if(!e(y))throw new TypeError("Function.prototype.bind called on incompatible "+y);for(var g,w=f.call(arguments,1),E=function(){if(this instanceof g){var e=y.apply(this,b.call(w,f.call(arguments)));return o(e)===e?e:this}return y.apply(t,b.call(w,f.call(arguments)))},A=v(0,y.length-w.length),S=[],k=0;k<A;k++)m.call(S,"$"+k);return g=Function("binder","return function ("+S.join(",")+"){ return binder.apply(this, arguments); }")(E),y.prototype&&(s.prototype=y.prototype,g.prototype=new s,s.prototype=null),g}})}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),function(t){var e;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||function(e){var n;"DOMTokenList"in e&&e.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(e.DOMTokenList=function(){var e=!0,n=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{n({},"support")}catch(t){e=!1}return function(e,o){var i=this,r=[],s={},c=0,u=0,l=function(t){n(i,t,(function(){return p(),r[t]}),!1)},d=function(){if(c>=u)for(;u<c;++u)l(u)},p=function(){var t,n,i=arguments,u=/\s+/;if(i.length)for(n=0;n<i.length;++n)if(u.test(i[n]))throw(t=new SyntaxError('String "'+i[n]+'" contains an invalid character')).code=5,t.name="InvalidCharacterError",t;for(""===(r="object"===a(e[o])?(""+e[o].baseVal).replace(/^\s+|\s+$/g,"").split(u):(""+e[o]).replace(/^\s+|\s+$/g,"").split(u))[0]&&(r=[]),s={},n=0;n<r.length;++n)s[r[n]]=!0;c=r.length,d()};return p(),n(i,"length",(function(){return p(),c})),i.toLocaleString=i.toString=function(){return p(),r.join(" ")},i.item=function(t){return p(),r[t]},i.contains=function(t){return p(),!!s[t]},i.add=function(){p.apply(i,t=arguments);for(var t,n,u=0,l=t.length;u<l;++u)n=t[u],s[n]||(r.push(n),s[n]=!0);c!==r.length&&(c=r.length>>>0,"object"===a(e[o])?e[o].baseVal=r.join(" "):e[o]=r.join(" "),d())},i.remove=function(){p.apply(i,t=arguments);for(var t,n={},u=0,l=[];u<t.length;++u)n[t[u]]=!0,delete s[t[u]];for(u=0;u<r.length;++u)n[r[u]]||l.push(r[u]);r=l,c=l.length>>>0,"object"===a(e[o])?e[o].baseVal=r.join(" "):e[o]=r.join(" "),d()},i.toggle=function(e,n){return p.apply(i,[e]),t!==n?n?(i.add(e),!0):(i.remove(e),!1):s[e]?(i.remove(e),!1):(i.add(e),!0)},i}}()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function(e){var n=arguments[1];if(n===t){var o=!this.contains(e);return this[o?"add":"remove"](e),o}return this[(n=!!n)?"add":"remove"](e),n})),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a","b"),!t.classList.contains("b"))){var e=t.classList.constructor.prototype.add;t.classList.constructor.prototype.add=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}(),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a"),t.classList.add("b"),t.classList.remove("a","b"),t.classList.contains("b"))){var e=t.classList.constructor.prototype.remove;t.classList.constructor.prototype.remove=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}()}(this)}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),function(t){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),function(t){"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,e=document.appendChild(document.createElement("body")),n=e.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),i={},r=function t(e,n){var o,r,s,a=e.childNodes||[],c=-1;if(1===e.nodeType&&e.constructor!==Element)for(o in e.constructor=Element,i)r=i[o],e[o]=r;for(;s=n&&a[++c];)t(s,n);return e},s=document.getElementsByTagName("*"),a=document.createElement,c=100;o.attachEvent("onpropertychange",(function(t){for(var e,n=t.propertyName,r=!i.hasOwnProperty(n),a=o[n],c=i[n],u=-1;e=s[++u];)1===e.nodeType&&(r||e[n]===c)&&(e[n]=a);i[n]=a})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),u()||(document.onreadystatechange=u,t=setInterval(u,25)),document.createElement=function(t){var e=a(String(t).toLowerCase());return r(e)},document.removeChild(e)}else window.HTMLElement=window.Element;function u(){return c--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState)||(r(document,!0),t&&document.body.prototype&&clearTimeout(t),!document.body.prototype))}}()}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),function(t){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(t){var e=!0,n=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{n({},"support")}catch(t){e=!1}var o=function t(o,i,r){n(o.prototype,i,(function(){var o,s="__defineGetter__DEFINE_PROPERTY"+i;if(this[s])return o;if(this[s]=!0,!1===e){for(var a,c=t.mirror||document.createElement("div"),u=c.childNodes,l=u.length,d=0;d<l;++d)if(u[d]._R===this){a=u[d];break}a||(a=c.appendChild(document.createElement("div"))),o=DOMTokenList.call(a,this,r)}else o=new DOMTokenList(this,r);return n(this,i,(function(){return o})),delete this[s],o}),!0)};o(t.Element,"classList","className"),o(t.HTMLElement,"classList","className"),o(t.HTMLLinkElement,"relList","rel"),o(t.HTMLAnchorElement,"relList","rel"),o(t.HTMLAreaElement,"relList","rel")}(this)}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),o.prototype.init=function(){if(this.$module){this.initControls(),this.initSectionHeaders();var t=this.checkIfAllSectionsOpen();this.updateOpenAllButton(t)}},o.prototype.initControls=function(){this.$openAllButton=document.createElement("button"),this.$openAllButton.setAttribute("type","button"),this.$openAllButton.innerHTML='Open all <span class="govuk-visually-hidden">sections</span>',this.$openAllButton.setAttribute("class",this.openAllClass),this.$openAllButton.setAttribute("aria-expanded","false"),this.$openAllButton.setAttribute("type","button");var t=document.createElement("div");t.setAttribute("class",this.controlsClass),t.appendChild(this.$openAllButton),this.$module.insertBefore(t,this.$module.firstChild),this.$openAllButton.addEventListener("click",this.onOpenOrCloseAllToggle.bind(this))},o.prototype.initSectionHeaders=function(){e(this.$sections,function(t,e){var n=t.querySelector("."+this.sectionHeaderClass);this.initHeaderAttributes(n,e),this.setExpanded(this.isExpanded(t),t),n.addEventListener("click",this.onSectionToggle.bind(this,t)),this.setInitialState(t)}.bind(this))},o.prototype.initHeaderAttributes=function(t,e){var n=this,o=t.querySelector("."+this.sectionButtonClass),i=t.querySelector("."+this.sectionHeadingClass),r=t.querySelector("."+this.sectionSummaryClass),s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("id",this.moduleId+"-heading-"+(e+1)),s.setAttribute("aria-controls",this.moduleId+"-content-"+(e+1));for(var a=0;a<o.attributes.length;a++){var c=o.attributes.item(a);s.setAttribute(c.nodeName,c.nodeValue)}s.addEventListener("focusin",(function(e){t.classList.contains(n.sectionHeaderFocusedClass)||(t.className+=" "+n.sectionHeaderFocusedClass)})),s.addEventListener("blur",(function(e){t.classList.remove(n.sectionHeaderFocusedClass)})),null!=r&&s.setAttribute("aria-describedby",this.moduleId+"-summary-"+(e+1)),s.innerHTML=o.innerHTML,i.removeChild(o),i.appendChild(s);var u=document.createElement("span");u.className=this.iconClass,u.setAttribute("aria-hidden","true"),i.appendChild(u)},o.prototype.onSectionToggle=function(t){var e=this.isExpanded(t);this.setExpanded(!e,t),this.storeState(t)},o.prototype.onOpenOrCloseAllToggle=function(){var t=this,n=this.$sections,o=!this.checkIfAllSectionsOpen();e(n,(function(e){t.setExpanded(o,e),t.storeState(e)})),t.updateOpenAllButton(o)},o.prototype.setExpanded=function(t,e){e.querySelector("."+this.sectionButtonClass).setAttribute("aria-expanded",t),t?e.classList.add(this.sectionExpandedClass):e.classList.remove(this.sectionExpandedClass);var n=this.checkIfAllSectionsOpen();this.updateOpenAllButton(n)},o.prototype.isExpanded=function(t){return t.classList.contains(this.sectionExpandedClass)},o.prototype.checkIfAllSectionsOpen=function(){return this.$sections.length===this.$module.querySelectorAll("."+this.sectionExpandedClass).length},o.prototype.updateOpenAllButton=function(t){var e=t?"Close all":"Open all";e+='<span class="govuk-visually-hidden"> sections</span>',this.$openAllButton.setAttribute("aria-expanded",t),this.$openAllButton.innerHTML=e};var i={checkForSessionStorage:function(){var t,e="this is the test string";try{return window.sessionStorage.setItem(e,e),t=window.sessionStorage.getItem(e)===e.toString(),window.sessionStorage.removeItem(e),t}catch(t){"undefined"!=typeof console&&void 0!==console.log||console.log("Notice: sessionStorage not available.")}}};function r(t){this.$module=t,this.debounceFormSubmitTimer=null}function s(t){this.$module=t}function c(t){this.$module=t,this.$textarea=t.querySelector(".govuk-js-character-count"),this.$textarea&&(this.$countMessage=t.querySelector("[id="+this.$textarea.id+"-info]"))}function u(t){this.$module=t,this.$inputs=t.querySelectorAll('input[type="checkbox"]')}function l(t){this.$module=t}function d(t){this.$module=t}function p(t){this.$module=t}function h(t){this.$module=t,this.$tabs=t.querySelectorAll(".govuk-tabs__tab"),this.keys={left:37,right:39,up:38,down:40},this.jsHiddenClass="govuk-tabs__panel--hidden"}o.prototype.storeState=function(t){if(this.browserSupportsSessionStorage){var e=t.querySelector("."+this.sectionButtonClass);if(e){var n=e.getAttribute("aria-controls"),o=e.getAttribute("aria-expanded");void 0!==n||"undefined"!=typeof console&&void 0!==console.log||console.error(new Error("No aria controls present in accordion section heading.")),void 0!==o||"undefined"!=typeof console&&void 0!==console.log||console.error(new Error("No aria expanded present in accordion section heading.")),n&&o&&window.sessionStorage.setItem(n,o)}}},o.prototype.setInitialState=function(t){if(this.browserSupportsSessionStorage){var e=t.querySelector("."+this.sectionButtonClass);if(e){var n=e.getAttribute("aria-controls"),o=n?window.sessionStorage.getItem(n):null;null!==o&&this.setExpanded("true"===o,t)}}},function(t){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=this}(this)}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),function(t){(function(t){if(!("Event"in t))return!1;if("function"==typeof t.Event)return!0;try{return new Event("click"),!0}catch(t){return!1}})(this)||function(){var e={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(e,n){if(!e)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var i=!(!n||n.bubbles===t)&&n.bubbles,r=!(!n||n.cancelable===t)&&n.cancelable;return o.initEvent(e,i,r),o}return(o=document.createEventObject()).type=e,o.bubbles=!(!n||n.bubbles===t)&&n.bubbles,o.cancelable=!(!n||n.cancelable===t)&&n.cancelable,o},n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,n=arguments[0],i=arguments[1];if(t===window&&n in e)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");t._events||(t._events={}),t._events[n]||(t._events[n]=function(e){var n,i=t._events[e.type].list,r=i.slice(),s=-1,a=r.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=t,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||t,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++s<a&&!e.cancelImmediate;)s in r&&-1!==o(i,n=r[s])&&"function"==typeof n&&n.call(t,e)},t._events[n].list=[],t.attachEvent&&t.attachEvent("on"+n,t._events[n])),t._events[n].list.push(i)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,n=arguments[0],i=arguments[1];e._events&&e._events[n]&&e._events[n].list&&-1!==(t=o(e._events[n].list,i))&&(e._events[n].list.splice(t,1),e._events[n].list.length||(e.detachEvent&&e.detachEvent("on"+n,e._events[n]),delete e._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var o=function t(o){o.cancelBubble=!0,(e||window).detachEvent("on"+n,t)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,t)}catch(o){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[n]&&e._events[n].call(e,t),"function"==typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))})))}function o(t,e){for(var n=-1,o=t.length;++n<o;)if(n in t&&t[n]===e)return n;return-1}}()}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),r.prototype.handleKeyDown=function(t){var e=t.target;"button"===e.getAttribute("role")&&32===t.keyCode&&(t.preventDefault(),e.click())},r.prototype.debounce=function(t){if("true"===t.target.getAttribute("data-prevent-double-click"))return this.debounceFormSubmitTimer?(t.preventDefault(),!1):void(this.debounceFormSubmitTimer=setTimeout(function(){this.debounceFormSubmitTimer=null}.bind(this),1e3))},r.prototype.init=function(){this.$module.addEventListener("keydown",this.handleKeyDown),this.$module.addEventListener("click",this.debounce)},s.prototype.init=function(){this.$module&&("boolean"==typeof this.$module.open||this.polyfillDetails())},s.prototype.polyfillDetails=function(){var t,e=this.$module,n=this.$summary=e.getElementsByTagName("summary").item(0),o=this.$content=e.getElementsByTagName("div").item(0);n&&o&&(o.id||(o.id="details-content-"+(t=(new Date).getTime(),void 0!==window.performance&&"function"==typeof window.performance.now&&(t+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?n:3&n|8).toString(16)})))),e.setAttribute("role","group"),n.setAttribute("role","button"),n.setAttribute("aria-controls",o.id),n.tabIndex=0,!0==(null!==e.getAttribute("open"))?(n.setAttribute("aria-expanded","true"),o.setAttribute("aria-hidden","false")):(n.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true"),o.style.display="none"),this.polyfillHandleInputs(n,this.polyfillSetAttributes.bind(this)))},s.prototype.polyfillSetAttributes=function(){var t=this.$module,e=this.$summary,n=this.$content,o="true"===e.getAttribute("aria-expanded"),i="true"===n.getAttribute("aria-hidden");return e.setAttribute("aria-expanded",o?"false":"true"),n.setAttribute("aria-hidden",i?"false":"true"),n.style.display=o?"none":"",null!==t.getAttribute("open")?t.removeAttribute("open"):t.setAttribute("open","open"),!0},s.prototype.polyfillHandleInputs=function(t,e){t.addEventListener("keypress",(function(t){var n=t.target;13!==t.keyCode&&32!==t.keyCode||"summary"===n.nodeName.toLowerCase()&&(t.preventDefault(),n.click?n.click():e(t))})),t.addEventListener("keyup",(function(t){var e=t.target;32===t.keyCode&&"summary"===e.nodeName.toLowerCase()&&t.preventDefault()})),t.addEventListener("click",e)},c.prototype.defaults={characterCountAttribute:"data-maxlength",wordCountAttribute:"data-maxwords"},c.prototype.init=function(){var t=this.$module,e=this.$textarea,n=this.$countMessage;if(e&&n){e.insertAdjacentElement("afterend",n),this.options=this.getDataset(t);var o=this.defaults.characterCountAttribute;this.options.maxwords&&(o=this.defaults.wordCountAttribute),this.maxLength=t.getAttribute(o),this.maxLength&&(t.removeAttribute("maxlength"),this.bindChangeEvents.bind(this)(),this.updateCountMessage.bind(this)())}},c.prototype.getDataset=function(t){var e={},n=t.attributes;if(n)for(var o=0;o<n.length;o++){var i=n[o],r=i.name.match(/^data-(.+)/);r&&(e[r[1]]=i.value)}return e},c.prototype.count=function(t){return this.options.maxwords?(t.match(/\S+/g)||[]).length:t.length},c.prototype.bindChangeEvents=function(){var t=this.$textarea;t.addEventListener("keyup",this.checkIfValueChanged.bind(this)),t.addEventListener("focus",this.handleFocus.bind(this)),t.addEventListener("blur",this.handleBlur.bind(this))},c.prototype.checkIfValueChanged=function(){this.$textarea.oldValue||(this.$textarea.oldValue=""),this.$textarea.value!==this.$textarea.oldValue&&(this.$textarea.oldValue=this.$textarea.value,this.updateCountMessage.bind(this)())},c.prototype.updateCountMessage=function(){var t=this.$textarea,e=this.options,n=this.$countMessage,o=this.count(t.value),i=this.maxLength,r=i-o;i*(e.threshold?e.threshold:0)/100>o?(n.classList.add("govuk-character-count__message--disabled"),n.setAttribute("aria-hidden",!0)):(n.classList.remove("govuk-character-count__message--disabled"),n.removeAttribute("aria-hidden")),r<0?(t.classList.add("govuk-textarea--error"),n.classList.remove("govuk-hint"),n.classList.add("govuk-error-message")):(t.classList.remove("govuk-textarea--error"),n.classList.remove("govuk-error-message"),n.classList.add("govuk-hint"));var s,a,c="character";e.maxwords&&(c="word"),c+=-1===r||1===r?"":"s",s=r<0?"too many":"remaining",a=Math.abs(r),n.innerHTML="You have "+a+" "+c+" "+s},c.prototype.handleFocus=function(){this.valueChecker=setInterval(this.checkIfValueChanged.bind(this),1e3)},c.prototype.handleBlur=function(){clearInterval(this.valueChecker)},u.prototype.init=function(){var t=this.$module;e(this.$inputs,function(e){var n=e.getAttribute("data-aria-controls");n&&t.querySelector("#"+n)&&(e.setAttribute("aria-controls",n),e.removeAttribute("data-aria-controls"),this.setAttributes(e))}.bind(this)),t.addEventListener("click",this.handleClick.bind(this))},u.prototype.setAttributes=function(t){var e=t.checked;t.setAttribute("aria-expanded",e);var n=this.$module.querySelector("#"+t.getAttribute("aria-controls"));n&&n.classList.toggle("govuk-checkboxes__conditional--hidden",!e)},u.prototype.handleClick=function(t){var e=t.target,n="checkbox"===e.getAttribute("type"),o=e.getAttribute("aria-controls");n&&o&&this.setAttributes(e)},function(t){"document"in this&&"matches"in document.documentElement||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=0;e[n]&&e[n]!==this;)++n;return!!e[n]})}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),function(t){"document"in this&&"closest"in document.documentElement||(Element.prototype.closest=function(t){for(var e=this;e;){if(e.matches(t))return e;e="SVGElement"in window&&e instanceof SVGElement?e.parentNode:e.parentElement}return null})}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),l.prototype.init=function(){var t=this.$module;t&&(t.focus(),t.addEventListener("click",this.handleClick.bind(this)))},l.prototype.handleClick=function(t){var e=t.target;this.focusTarget(e)&&t.preventDefault()},l.prototype.focusTarget=function(t){if("A"!==t.tagName||!1===t.href)return!1;var e=this.getFragmentFromUrl(t.href),n=document.getElementById(e);if(!n)return!1;var o=this.getAssociatedLegendOrLabel(n);return!!o&&(o.scrollIntoView(),n.focus({preventScroll:!0}),!0)},l.prototype.getFragmentFromUrl=function(t){return-1!==t.indexOf("#")&&t.split("#").pop()},l.prototype.getAssociatedLegendOrLabel=function(t){var e=t.closest("fieldset");if(e){var n=e.getElementsByTagName("legend");if(n.length){var o=n[0];if("checkbox"===t.type||"radio"===t.type)return o;var i=o.getBoundingClientRect().top,r=t.getBoundingClientRect();if(r.height&&window.innerHeight&&r.top+r.height-i<window.innerHeight/2)return o}}return document.querySelector("label[for='"+t.getAttribute("id")+"']")||t.closest("label")},d.prototype.init=function(){var t=this.$module;if(t){var e=t.querySelector(".govuk-js-header-toggle");e&&e.addEventListener("click",this.handleClick.bind(this))}},d.prototype.toggleClass=function(t,e){t.className.indexOf(e)>0?t.className=t.className.replace(" "+e,""):t.className+=" "+e},d.prototype.handleClick=function(t){var e=this.$module,n=t.target||t.srcElement,o=e.querySelector("#"+n.getAttribute("aria-controls"));n&&o&&(this.toggleClass(o,"govuk-header__navigation--open"),this.toggleClass(n,"govuk-header__menu-button--open"),n.setAttribute("aria-expanded","true"!==n.getAttribute("aria-expanded")),o.setAttribute("aria-hidden","false"===o.getAttribute("aria-hidden")))},p.prototype.init=function(){var t=this.$module;e(t.querySelectorAll('input[type="radio"]'),function(e){var n=e.getAttribute("data-aria-controls");n&&t.querySelector("#"+n)&&(e.setAttribute("aria-controls",n),e.removeAttribute("data-aria-controls"),this.setAttributes(e))}.bind(this)),t.addEventListener("click",this.handleClick.bind(this))},p.prototype.setAttributes=function(t){var e=document.querySelector("#"+t.getAttribute("aria-controls"));if(e&&e.classList.contains("govuk-radios__conditional")){var n=t.checked;t.setAttribute("aria-expanded",n),e.classList.toggle("govuk-radios__conditional--hidden",!n)}},p.prototype.handleClick=function(t){var n=t.target;"radio"===n.type&&e(document.querySelectorAll('input[type="radio"][aria-controls]'),function(t){var e=t.form===n.form;t.name===n.name&&e&&this.setAttributes(t)}.bind(this))},function(t){"Element"in this&&"nextElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t&&1!==t.nodeType;)t=t.nextSibling;return 1===t.nodeType?t:null}})}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),function(t){"Element"in this&&"previousElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"previousElementSibling",{get:function(){for(var t=this.previousSibling;t&&1!==t.nodeType;)t=t.previousSibling;return 1===t.nodeType?t:null}})}.call("object"===("undefined"==typeof window?"undefined":a(window))&&window||"object"===("undefined"==typeof self?"undefined":a(self))&&self||"object"===(void 0===n?"undefined":a(n))&&n||{}),h.prototype.init=function(){"function"==typeof window.matchMedia?this.setupResponsiveChecks():this.setup()},h.prototype.setupResponsiveChecks=function(){this.mql=window.matchMedia("(min-width: 40.0625em)"),this.mql.addListener(this.checkMode.bind(this)),this.checkMode()},h.prototype.checkMode=function(){this.mql.matches?this.setup():this.teardown()},h.prototype.setup=function(){var t=this.$module,n=this.$tabs,o=t.querySelector(".govuk-tabs__list"),i=t.querySelectorAll(".govuk-tabs__list-item");if(n&&o&&i){o.setAttribute("role","tablist"),e(i,(function(t){t.setAttribute("role","presentation")})),e(n,function(t){this.setAttributes(t),t.boundTabClick=this.onTabClick.bind(this),t.boundTabKeydown=this.onTabKeydown.bind(this),t.addEventListener("click",t.boundTabClick,!0),t.addEventListener("keydown",t.boundTabKeydown,!0),this.hideTab(t)}.bind(this));var r=this.getTab(window.location.hash)||this.$tabs[0];this.showTab(r),t.boundOnHashChange=this.onHashChange.bind(this),window.addEventListener("hashchange",t.boundOnHashChange,!0)}},h.prototype.teardown=function(){var t=this.$module,n=this.$tabs,o=t.querySelector(".govuk-tabs__list"),i=t.querySelectorAll(".govuk-tabs__list-item");n&&o&&i&&(o.removeAttribute("role"),e(i,(function(t){t.removeAttribute("role","presentation")})),e(n,function(t){t.removeEventListener("click",t.boundTabClick,!0),t.removeEventListener("keydown",t.boundTabKeydown,!0),this.unsetAttributes(t)}.bind(this)),window.removeEventListener("hashchange",t.boundOnHashChange,!0))},h.prototype.onHashChange=function(t){var e=window.location.hash,n=this.getTab(e);if(n)if(this.changingHash)this.changingHash=!1;else{var o=this.getCurrentTab();this.hideTab(o),this.showTab(n),n.focus()}},h.prototype.hideTab=function(t){this.unhighlightTab(t),this.hidePanel(t)},h.prototype.showTab=function(t){this.highlightTab(t),this.showPanel(t)},h.prototype.getTab=function(t){return this.$module.querySelector('.govuk-tabs__tab[href="'+t+'"]')},h.prototype.setAttributes=function(t){var e=this.getHref(t).slice(1);t.setAttribute("id","tab_"+e),t.setAttribute("role","tab"),t.setAttribute("aria-controls",e),t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1");var n=this.getPanel(t);n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",t.id),n.classList.add(this.jsHiddenClass)},h.prototype.unsetAttributes=function(t){t.removeAttribute("id"),t.removeAttribute("role"),t.removeAttribute("aria-controls"),t.removeAttribute("aria-selected"),t.removeAttribute("tabindex");var e=this.getPanel(t);e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.classList.remove(this.jsHiddenClass)},h.prototype.onTabClick=function(t){if(!t.target.classList.contains("govuk-tabs__tab"))return!1;t.preventDefault();var e=t.target,n=this.getCurrentTab();this.hideTab(n),this.showTab(e),this.createHistoryEntry(e)},h.prototype.createHistoryEntry=function(t){var e=this.getPanel(t),n=e.id;e.id="",this.changingHash=!0,window.location.hash=this.getHref(t).slice(1),e.id=n},h.prototype.onTabKeydown=function(t){switch(t.keyCode){case this.keys.left:case this.keys.up:this.activatePreviousTab(),t.preventDefault();break;case this.keys.right:case this.keys.down:this.activateNextTab(),t.preventDefault()}},h.prototype.activateNextTab=function(){var t=this.getCurrentTab(),e=t.parentNode.nextElementSibling;if(e)var n=e.querySelector(".govuk-tabs__tab");n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))},h.prototype.activatePreviousTab=function(){var t=this.getCurrentTab(),e=t.parentNode.previousElementSibling;if(e)var n=e.querySelector(".govuk-tabs__tab");n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))},h.prototype.getPanel=function(t){return this.$module.querySelector(this.getHref(t))},h.prototype.showPanel=function(t){this.getPanel(t).classList.remove(this.jsHiddenClass)},h.prototype.hidePanel=function(t){this.getPanel(t).classList.add(this.jsHiddenClass)},h.prototype.unhighlightTab=function(t){t.setAttribute("aria-selected","false"),t.parentNode.classList.remove("govuk-tabs__list-item--selected"),t.setAttribute("tabindex","-1")},h.prototype.highlightTab=function(t){t.setAttribute("aria-selected","true"),t.parentNode.classList.add("govuk-tabs__list-item--selected"),t.setAttribute("tabindex","0")},h.prototype.getCurrentTab=function(){return this.$module.querySelector(".govuk-tabs__list-item--selected .govuk-tabs__tab")},h.prototype.getHref=function(t){var e=t.getAttribute("href");return e.slice(e.indexOf("#"),e.length)},t.initAll=function(t){var n=void 0!==(t=void 0!==t?t:{}).scope?t.scope:document;e(n.querySelectorAll('[data-module="govuk-button"]'),(function(t){new r(t).init()})),e(n.querySelectorAll('[data-module="govuk-accordion"]'),(function(t){new o(t).init()})),e(n.querySelectorAll('[data-module="govuk-details"]'),(function(t){new s(t).init()})),e(n.querySelectorAll('[data-module="govuk-character-count"]'),(function(t){new c(t).init()})),e(n.querySelectorAll('[data-module="govuk-checkboxes"]'),(function(t){new u(t).init()})),new l(n.querySelector('[data-module="govuk-error-summary"]')).init(),new d(n.querySelector('[data-module="govuk-header"]')).init(),e(n.querySelectorAll('[data-module="govuk-radios"]'),(function(t){new p(t).init()})),e(n.querySelectorAll('[data-module="govuk-tabs"]'),(function(t){new h(t).init()}))},t.Accordion=o,t.Button=r,t.Details=s,t.CharacterCount=c,t.Checkboxes=u,t.ErrorSummary=l,t.Header=d,t.Radios=p,t.Tabs=h},"object"===a(e)&&void 0!==t?s(e):(i=[e],void 0===(r="function"==typeof(o=s)?o.apply(e,i):o)||(t.exports=r))}).call(this,n(2))},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}t.exports=o}]);
//# sourceMappingURL=app-1.0.4.js.map