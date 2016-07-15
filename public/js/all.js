/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.0.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return a&&"[object Object]"===k.call(a)?(b=e(a))?(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n):!0:!1},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;d>f;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a)?(d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e):void 0},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"===c||r.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;d>b;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;d>b;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(f>b)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(1>=b&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){
return j.call(r(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;g>f;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;g>f;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;d>c;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;o>n;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){return this.originalEvent?b(this.originalEvent):void 0}:function(){return this.originalEvent?this.originalEvent[a]:void 0},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==va()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===va()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&r.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;m>l;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;i>l;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;e>d;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;e>d;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),0>=d||null==d){if(d=Ma(a,b,f),(0>d||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){return c?!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)}):void 0},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){return b?(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;e>g;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);g>f;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;e>d;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c);
}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){return r.isArray(b)?a.checked=r.inArray(r(a).val(),b)>-1:void 0}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?r.event.trigger(a,b,c,!0):void 0}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",0>b&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;return o.cors||Pb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){return c?(c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c):void 0})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.6'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

!function(){function t(e,n){e instanceof t?(this.enc=e.enc,this.pos=e.pos):(this.enc=e,this.pos=n)}function e(t,e,n,i,o){this.stream=t,this.header=e,this.length=n,this.tag=i,this.sub=o}function n(t){var e,n,i="";for(e=0;e+3<=t.length;e+=3)n=parseInt(t.substring(e,e+3),16),i+=et.charAt(n>>6)+et.charAt(63&n);for(e+1==t.length?(n=parseInt(t.substring(e,e+1),16),i+=et.charAt(n<<2)):e+2==t.length&&(n=parseInt(t.substring(e,e+2),16),i+=et.charAt(n>>2)+et.charAt((3&n)<<4));(3&i.length)>0;)i+=nt;return i}function i(t){var e,n,i,o="",r=0;for(e=0;e<t.length&&t.charAt(e)!=nt;++e)i=et.indexOf(t.charAt(e)),0>i||(0==r?(o+=l(i>>2),n=3&i,r=1):1==r?(o+=l(n<<2|i>>4),n=15&i,r=2):2==r?(o+=l(n),o+=l(i>>2),n=3&i,r=3):(o+=l(n<<2|i>>4),o+=l(15&i),r=0));return 1==r&&(o+=l(n<<2)),o}function o(t){var e,n=i(t),o=new Array;for(e=0;2*e<n.length;++e)o[e]=parseInt(n.substring(2*e,2*e+2),16);return o}function r(t,e,n){null!=t&&("number"==typeof t?this.fromNumber(t,e,n):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function s(){return new r(null)}function a(t,e,n,i,o,r){for(;--r>=0;){var s=e*this[t++]+n[i]+o;o=Math.floor(s/67108864),n[i++]=67108863&s}return o}function c(t,e,n,i,o,r){for(var s=32767&e,a=e>>15;--r>=0;){var c=32767&this[t],u=this[t++]>>15,l=a*c+u*s;c=s*c+((32767&l)<<15)+n[i]+(1073741823&o),o=(c>>>30)+(l>>>15)+a*u+(o>>>30),n[i++]=1073741823&c}return o}function u(t,e,n,i,o,r){for(var s=16383&e,a=e>>14;--r>=0;){var c=16383&this[t],u=this[t++]>>14,l=a*c+u*s;c=s*c+((16383&l)<<14)+n[i]+o,o=(c>>28)+(l>>14)+a*u,n[i++]=268435455&c}return o}function l(t){return ct.charAt(t)}function h(t,e){var n=ut[t.charCodeAt(e)];return null==n?-1:n}function p(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}function d(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function f(t){var e=s();return e.fromInt(t),e}function m(t,e){var n;if(16==e)n=4;else if(8==e)n=3;else if(256==e)n=8;else if(2==e)n=1;else if(32==e)n=5;else{if(4!=e)return void this.fromRadix(t,e);n=2}this.t=0,this.s=0;for(var i=t.length,o=!1,s=0;--i>=0;){var a=8==n?255&t[i]:h(t,i);0>a?"-"==t.charAt(i)&&(o=!0):(o=!1,0==s?this[this.t++]=a:s+n>this.DB?(this[this.t-1]|=(a&(1<<this.DB-s)-1)<<s,this[this.t++]=a>>this.DB-s):this[this.t-1]|=a<<s,s+=n,s>=this.DB&&(s-=this.DB))}8==n&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),o&&r.ZERO.subTo(this,this)}function y(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function g(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var n,i=(1<<e)-1,o=!1,r="",s=this.t,a=this.DB-s*this.DB%e;if(s-->0)for(a<this.DB&&(n=this[s]>>a)>0&&(o=!0,r=l(n));s>=0;)e>a?(n=(this[s]&(1<<a)-1)<<e-a,n|=this[--s]>>(a+=this.DB-e)):(n=this[s]>>(a-=e)&i,0>=a&&(a+=this.DB,--s)),n>0&&(o=!0),o&&(r+=l(n));return o?r:"0"}function v(){var t=s();return r.ZERO.subTo(this,t),t}function _(){return this.s<0?this.negate():this}function b(t){var e=this.s-t.s;if(0!=e)return e;var n=this.t;if(e=n-t.t,0!=e)return this.s<0?-e:e;for(;--n>=0;)if(0!=(e=this[n]-t[n]))return e;return 0}function E(t){var e,n=1;return 0!=(e=t>>>16)&&(t=e,n+=16),0!=(e=t>>8)&&(t=e,n+=8),0!=(e=t>>4)&&(t=e,n+=4),0!=(e=t>>2)&&(t=e,n+=2),0!=(e=t>>1)&&(t=e,n+=1),n}function w(){return this.t<=0?0:this.DB*(this.t-1)+E(this[this.t-1]^this.s&this.DM)}function A(t,e){var n;for(n=this.t-1;n>=0;--n)e[n+t]=this[n];for(n=t-1;n>=0;--n)e[n]=0;e.t=this.t+t,e.s=this.s}function C(t,e){for(var n=t;n<this.t;++n)e[n-t]=this[n];e.t=Math.max(this.t-t,0),e.s=this.s}function N(t,e){var n,i=t%this.DB,o=this.DB-i,r=(1<<o)-1,s=Math.floor(t/this.DB),a=this.s<<i&this.DM;for(n=this.t-1;n>=0;--n)e[n+s+1]=this[n]>>o|a,a=(this[n]&r)<<i;for(n=s-1;n>=0;--n)e[n]=0;e[s]=a,e.t=this.t+s+1,e.s=this.s,e.clamp()}function T(t,e){e.s=this.s;var n=Math.floor(t/this.DB);if(n>=this.t)return void(e.t=0);var i=t%this.DB,o=this.DB-i,r=(1<<i)-1;e[0]=this[n]>>i;for(var s=n+1;s<this.t;++s)e[s-n-1]|=(this[s]&r)<<o,e[s-n]=this[s]>>i;i>0&&(e[this.t-n-1]|=(this.s&r)<<o),e.t=this.t-n,e.clamp()}function I(t,e){for(var n=0,i=0,o=Math.min(t.t,this.t);o>n;)i+=this[n]-t[n],e[n++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;n<this.t;)i+=this[n],e[n++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;n<t.t;)i-=t[n],e[n++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=0>i?-1:0,-1>i?e[n++]=this.DV+i:i>0&&(e[n++]=i),e.t=n,e.clamp()}function S(t,e){var n=this.abs(),i=t.abs(),o=n.t;for(e.t=o+i.t;--o>=0;)e[o]=0;for(o=0;o<i.t;++o)e[o+n.t]=n.am(0,i[o],e,o,0,n.t);e.s=0,e.clamp(),this.s!=t.s&&r.ZERO.subTo(e,e)}function x(t){for(var e=this.abs(),n=t.t=2*e.t;--n>=0;)t[n]=0;for(n=0;n<e.t-1;++n){var i=e.am(n,e[n],t,2*n,0,1);(t[n+e.t]+=e.am(n+1,2*e[n],t,2*n+1,i,e.t-n-1))>=e.DV&&(t[n+e.t]-=e.DV,t[n+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(n,e[n],t,2*n,0,1)),t.s=0,t.clamp()}function P(t,e,n){var i=t.abs();if(!(i.t<=0)){var o=this.abs();if(o.t<i.t)return null!=e&&e.fromInt(0),void(null!=n&&this.copyTo(n));null==n&&(n=s());var a=s(),c=this.s,u=t.s,l=this.DB-E(i[i.t-1]);l>0?(i.lShiftTo(l,a),o.lShiftTo(l,n)):(i.copyTo(a),o.copyTo(n));var h=a.t,p=a[h-1];if(0!=p){var d=p*(1<<this.F1)+(h>1?a[h-2]>>this.F2:0),f=this.FV/d,m=(1<<this.F1)/d,y=1<<this.F2,g=n.t,v=g-h,_=null==e?s():e;for(a.dlShiftTo(v,_),n.compareTo(_)>=0&&(n[n.t++]=1,n.subTo(_,n)),r.ONE.dlShiftTo(h,_),_.subTo(a,a);a.t<h;)a[a.t++]=0;for(;--v>=0;){var b=n[--g]==p?this.DM:Math.floor(n[g]*f+(n[g-1]+y)*m);if((n[g]+=a.am(0,b,n,v,0,h))<b)for(a.dlShiftTo(v,_),n.subTo(_,n);n[g]<--b;)n.subTo(_,n)}null!=e&&(n.drShiftTo(h,e),c!=u&&r.ZERO.subTo(e,e)),n.t=h,n.clamp(),l>0&&n.rShiftTo(l,n),0>c&&r.ZERO.subTo(n,n)}}}function O(t){var e=s();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(r.ZERO)>0&&t.subTo(e,e),e}function R(t){this.m=t}function D(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function M(t){return t}function U(t){t.divRemTo(this.m,null,t)}function F(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function L(t,e){t.squareTo(e),this.reduce(e)}function k(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function B(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function j(t){var e=s();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(r.ZERO)>0&&this.m.subTo(e,e),e}function V(t){var e=s();return t.copyTo(e),this.reduce(e),e}function H(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var n=32767&t[e],i=n*this.mpl+((n*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(n=e+this.m.t,t[n]+=this.m.am(0,i,t,e,0,this.m.t);t[n]>=t.DV;)t[n]-=t.DV,t[++n]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function z(t,e){t.squareTo(e),this.reduce(e)}function Y(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function G(){return 0==(this.t>0?1&this[0]:this.s)}function W(t,e){if(t>4294967295||1>t)return r.ONE;var n=s(),i=s(),o=e.convert(this),a=E(t)-1;for(o.copyTo(n);--a>=0;)if(e.sqrTo(n,i),(t&1<<a)>0)e.mulTo(i,o,n);else{var c=n;n=i,i=c}return e.revert(n)}function q(t,e){var n;return n=256>t||e.isEven()?new R(e):new B(e),this.exp(t,n)}function K(t,e){return new r(t,e)}function Q(t,e){if(e<t.length+11)throw new Error("Message too long for RSA");for(var n=new Array,i=t.length-1;i>=0&&e>0;){var o=t.charCodeAt(i--);128>o?n[--e]=o:o>127&&2048>o?(n[--e]=63&o|128,n[--e]=o>>6|192):(n[--e]=63&o|128,n[--e]=o>>6&63|128,n[--e]=o>>12|224)}n[--e]=0;for(var s=0,a=0,c=0;e>2;)0==c&&(a=lt.random.randomWords(1,0)[0]),s=a>>c&255,c=(c+8)%32,0!=s&&(n[--e]=s);return n[--e]=2,n[--e]=0,new r(n)}function Z(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function X(t,e){if(!(null!=t&&null!=e&&t.length>0&&e.length>0))throw new Error("Invalid RSA public key");this.n=K(t,16),this.e=parseInt(e,16)}function $(t){return t.modPowInt(this.e,this.n)}function J(t){var e=Q(t,this.n.bitLength()+7>>3);if(null==e)return null;var n=this.doPublic(e);if(null==n)return null;var i=n.toString(16);return 0==(1&i.length)?i:"0"+i}t.prototype.get=function(t){if(void 0==t&&(t=this.pos++),t>=this.enc.length)throw"Requesting byte offset "+t+" on a stream of length "+this.enc.length;return this.enc[t]},t.prototype.hexDigits="0123456789ABCDEF",t.prototype.hexByte=function(t){return this.hexDigits.charAt(t>>4&15)+this.hexDigits.charAt(15&t)},t.prototype.hexDump=function(t,e){for(var n="",i=t;e>i;++i)switch(n+=this.hexByte(this.get(i)),15&i){case 7:n+="  ";break;case 15:n+="\n";break;default:n+=" "}return n},t.prototype.parseStringISO=function(t,e){for(var n="",i=t;e>i;++i)n+=String.fromCharCode(this.get(i));return n},t.prototype.parseStringUTF=function(t,e){for(var n="",i=0,o=t;e>o;){var i=this.get(o++);n+=String.fromCharCode(128>i?i:i>191&&224>i?(31&i)<<6|63&this.get(o++):(15&i)<<12|(63&this.get(o++))<<6|63&this.get(o++))}return n},t.prototype.reTime=/^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,t.prototype.parseTime=function(t,e){var n=this.parseStringISO(t,e),i=this.reTime.exec(n);return i?(n=i[1]+"-"+i[2]+"-"+i[3]+" "+i[4],i[5]&&(n+=":"+i[5],i[6]&&(n+=":"+i[6],i[7]&&(n+="."+i[7]))),i[8]&&(n+=" UTC","Z"!=i[8]&&(n+=i[8],i[9]&&(n+=":"+i[9]))),n):"Unrecognized time: "+n},t.prototype.parseInteger=function(t,e){var n=e-t;if(n>4){n<<=3;var i=this.get(t);if(0==i)n-=8;else for(;128>i;)i<<=1,--n;return"("+n+" bit)"}for(var o=0,r=t;e>r;++r)o=o<<8|this.get(r);return o},t.prototype.parseBitString=function(t,e){var n=this.get(t),i=(e-t-1<<3)-n,o="("+i+" bit)";if(20>=i){var r=n;o+=" ";for(var s=e-1;s>t;--s){for(var a=this.get(s),c=r;8>c;++c)o+=a>>c&1?"1":"0";r=0}}return o},t.prototype.parseOctetString=function(t,e){var n=e-t,i="("+n+" byte) ";n>20&&(e=t+20);for(var o=t;e>o;++o)i+=this.hexByte(this.get(o));return n>20&&(i+=String.fromCharCode(8230)),i},t.prototype.parseOID=function(t,e){for(var n,i=0,o=0,r=t;e>r;++r){var s=this.get(r);i=i<<7|127&s,o+=7,128&s||(void 0==n?n=parseInt(i/40)+"."+i%40:n+="."+(o>=31?"bigint":i),i=o=0),n+=String.fromCharCode()}return n},e.prototype.typeName=function(){if(void 0==this.tag)return"unknown";var t=this.tag>>6,e=(this.tag>>5&1,31&this.tag);switch(t){case 0:switch(e){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString";default:return"Universal_"+e.toString(16)}case 1:return"Application_"+e.toString(16);case 2:return"["+e+"]";case 3:return"Private_"+e.toString(16)}},e.prototype.content=function(){if(void 0==this.tag)return null;var t=this.tag>>6;if(0!=t)return null==this.sub?null:"("+this.sub.length+")";var e=31&this.tag,n=this.posContent(),i=Math.abs(this.length);switch(e){case 1:return 0==this.stream.get(n)?"false":"true";case 2:return this.stream.parseInteger(n,n+i);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(n,n+i);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(n,n+i);case 6:return this.stream.parseOID(n,n+i);case 16:case 17:return"("+this.sub.length+" elem)";case 12:return this.stream.parseStringUTF(n,n+i);case 18:case 19:case 20:case 21:case 22:case 26:return this.stream.parseStringISO(n,n+i);case 23:case 24:return this.stream.parseTime(n,n+i)}return null},e.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null==this.sub?"null":this.sub.length)+"]"},e.prototype.print=function(t){if(void 0==t&&(t=""),document.writeln(t+this),null!=this.sub){t+="  ";for(var e=0,n=this.sub.length;n>e;++e)this.sub[e].print(t)}},e.prototype.toPrettyString=function(t){void 0==t&&(t="");var e=t+this.typeName()+" @"+this.stream.pos;if(this.length>=0&&(e+="+"),e+=this.length,32&this.tag?e+=" (constructed)":3!=this.tag&&4!=this.tag||null==this.sub||(e+=" (encapsulates)"),e+="\n",null!=this.sub){t+="  ";for(var n=0,i=this.sub.length;i>n;++n)e+=this.sub[n].toPrettyString(t)}return e},e.prototype.posStart=function(){return this.stream.pos},e.prototype.posContent=function(){return this.stream.pos+this.header},e.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},e.decodeLength=function(t){var e=t.get(),n=127&e;if(n==e)return n;if(n>3)throw"Length over 24 bits not supported at position "+(t.pos-1);if(0==n)return-1;e=0;for(var i=0;n>i;++i)e=e<<8|t.get();return e},e.hasContent=function(n,i,o){if(32&n)return!0;if(3>n||n>4)return!1;var r=new t(o);3==n&&r.get();var s=r.get();if(s>>6&1)return!1;try{var a=e.decodeLength(r);return r.pos-o.pos+a==i}catch(c){return!1}},e.decode=function(n){n instanceof t||(n=new t(n,0));var i=new t(n),o=n.get(),r=e.decodeLength(n),s=n.pos-i.pos,a=null;if(e.hasContent(o,r,n)){var c=n.pos;if(3==o&&n.get(),a=[],r>=0){for(var u=c+r;n.pos<u;)a[a.length]=e.decode(n);if(n.pos!=u)throw"Content size is not correct for container starting at offset "+c}else try{for(;;){var l=e.decode(n);if(0==l.tag)break;a[a.length]=l}r=c-n.pos}catch(h){throw"Exception while decoding undefined length content: "+h}}else n.pos+=r;return new e(i,s,r,o,a)};var tt,et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nt="=",it=0xdeadbeefcafe,ot=15715070==(16777215&it);ot&&"Microsoft Internet Explorer"==navigator.appName?(r.prototype.am=c,tt=30):ot&&"Netscape"!=navigator.appName?(r.prototype.am=a,tt=26):(r.prototype.am=u,tt=28),r.prototype.DB=tt,r.prototype.DM=(1<<tt)-1,r.prototype.DV=1<<tt;var rt=52;r.prototype.FV=Math.pow(2,rt),r.prototype.F1=rt-tt,r.prototype.F2=2*tt-rt;var st,at,ct="0123456789abcdefghijklmnopqrstuvwxyz",ut=new Array;for(st="0".charCodeAt(0),at=0;9>=at;++at)ut[st++]=at;for(st="a".charCodeAt(0),at=10;36>at;++at)ut[st++]=at;for(st="A".charCodeAt(0),at=10;36>at;++at)ut[st++]=at;R.prototype.convert=D,R.prototype.revert=M,R.prototype.reduce=U,R.prototype.mulTo=F,R.prototype.sqrTo=L,B.prototype.convert=j,B.prototype.revert=V,B.prototype.reduce=H,B.prototype.mulTo=Y,B.prototype.sqrTo=z,r.prototype.copyTo=p,r.prototype.fromInt=d,r.prototype.fromString=m,r.prototype.clamp=y,r.prototype.dlShiftTo=A,r.prototype.drShiftTo=C,r.prototype.lShiftTo=N,r.prototype.rShiftTo=T,r.prototype.subTo=I,r.prototype.multiplyTo=S,r.prototype.squareTo=x,r.prototype.divRemTo=P,r.prototype.invDigit=k,r.prototype.isEven=G,r.prototype.exp=W,r.prototype.toString=g,r.prototype.negate=v,r.prototype.abs=_,r.prototype.compareTo=b,r.prototype.bitLength=w,r.prototype.mod=O,r.prototype.modPowInt=q,r.ZERO=f(0),r.ONE=f(1),Z.prototype.doPublic=$,Z.prototype.setPublic=X,Z.prototype.encrypt=J;var lt={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};"undefined"!=typeof module&&module.exports&&(module.exports=lt),lt.cipher.aes=function(t){this._tables[0][0][0]||this._precompute();var e,n,i,o,r,s=this._tables[0][4],a=this._tables[1],c=t.length,u=1;if(4!==c&&6!==c&&8!==c)throw new lt.exception.invalid("invalid aes key size");for(this._key=[o=t.slice(0),r=[]],e=c;4*c+28>e;e++)i=o[e-1],(e%c===0||8===c&&e%c===4)&&(i=s[i>>>24]<<24^s[i>>16&255]<<16^s[i>>8&255]<<8^s[255&i],e%c===0&&(i=i<<8^i>>>24^u<<24,u=u<<1^283*(u>>7))),o[e]=o[e-c]^i;for(n=0;e;n++,e--)i=o[3&n?e:e-4],r[n]=4>=e||4>n?i:a[0][s[i>>>24]]^a[1][s[i>>16&255]]^a[2][s[i>>8&255]]^a[3][s[255&i]]},lt.cipher.aes.prototype={encrypt:function(t){return this._crypt(t,0)},decrypt:function(t){return this._crypt(t,1)},_tables:[[[],[],[],[],[]],[[],[],[],[],[]]],_precompute:function(){var t,e,n,i,o,r,s,a,c,u=this._tables[0],l=this._tables[1],h=u[4],p=l[4],d=[],f=[];for(t=0;256>t;t++)f[(d[t]=t<<1^283*(t>>7))^t]=t;for(e=n=0;!h[e];e^=i||1,n=f[n]||1)for(s=n^n<<1^n<<2^n<<3^n<<4,s=s>>8^255&s^99,h[e]=s,p[s]=e,r=d[o=d[i=d[e]]],c=16843009*r^65537*o^257*i^16843008*e,a=257*d[s]^16843008*s,t=0;4>t;t++)u[t][e]=a=a<<24^a>>>8,l[t][s]=c=c<<24^c>>>8;for(t=0;5>t;t++)u[t]=u[t].slice(0),l[t]=l[t].slice(0)},_crypt:function(t,e){if(4!==t.length)throw new lt.exception.invalid("invalid aes block size");var n,i,o,r,s=this._key[e],a=t[0]^s[0],c=t[e?3:1]^s[1],u=t[2]^s[2],l=t[e?1:3]^s[3],h=s.length/4-2,p=4,d=[0,0,0,0],f=this._tables[e],m=f[0],y=f[1],g=f[2],v=f[3],_=f[4];for(r=0;h>r;r++)n=m[a>>>24]^y[c>>16&255]^g[u>>8&255]^v[255&l]^s[p],i=m[c>>>24]^y[u>>16&255]^g[l>>8&255]^v[255&a]^s[p+1],o=m[u>>>24]^y[l>>16&255]^g[a>>8&255]^v[255&c]^s[p+2],l=m[l>>>24]^y[a>>16&255]^g[c>>8&255]^v[255&u]^s[p+3],p+=4,a=n,c=i,u=o;for(r=0;4>r;r++)d[e?3&-r:r]=_[a>>>24]<<24^_[c>>16&255]<<16^_[u>>8&255]<<8^_[255&l]^s[p++],n=a,a=c,c=u,u=l,l=n;return d}},lt.bitArray={bitSlice:function(t,e,n){return t=lt.bitArray._shiftRight(t.slice(e/32),32-(31&e)).slice(1),void 0===n?t:lt.bitArray.clamp(t,n-e)},extract:function(t,e,n){var i,o=Math.floor(-e-n&31);return i=-32&(e+n-1^e)?t[e/32|0]<<32-o^t[e/32+1|0]>>>o:t[e/32|0]>>>o,i&(1<<n)-1},concat:function(t,e){if(0===t.length||0===e.length)return t.concat(e);var n=t[t.length-1],i=lt.bitArray.getPartial(n);return 32===i?t.concat(e):lt.bitArray._shiftRight(e,i,0|n,t.slice(0,t.length-1))},bitLength:function(t){var e,n=t.length;return 0===n?0:(e=t[n-1],32*(n-1)+lt.bitArray.getPartial(e))},clamp:function(t,e){if(32*t.length<e)return t;t=t.slice(0,Math.ceil(e/32));var n=t.length;return e=31&e,n>0&&e&&(t[n-1]=lt.bitArray.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial:function(t,e,n){return 32===t?e:(n?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(lt.bitArray.bitLength(t)!==lt.bitArray.bitLength(e))return!1;var n,i=0;for(n=0;n<t.length;n++)i|=t[n]^e[n];return 0===i},_shiftRight:function(t,e,n,i){var o,r,s=0;for(void 0===i&&(i=[]);e>=32;e-=32)i.push(n),n=0;if(0===e)return i.concat(t);for(o=0;o<t.length;o++)i.push(n|t[o]>>>e),n=t[o]<<32-e;return s=t.length?t[t.length-1]:0,r=lt.bitArray.getPartial(s),i.push(lt.bitArray.partial(e+r&31,e+r>32?n:i.pop(),1)),i},_xor4:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]}},lt.codec.hex={fromBits:function(t){var e,n="";for(e=0;e<t.length;e++)n+=((0|t[e])+0xf00000000000).toString(16).substr(4);return n.substr(0,lt.bitArray.bitLength(t)/4)},toBits:function(t){var e,n,i=[];for(t=t.replace(/\s|0x/g,""),n=t.length,t+="00000000",e=0;e<t.length;e+=8)i.push(0^parseInt(t.substr(e,8),16));return lt.bitArray.clamp(i,4*n)}},lt.codec.utf8String={fromBits:function(t){var e,n,i="",o=lt.bitArray.bitLength(t);for(e=0;o/8>e;e++)0===(3&e)&&(n=t[e/4]),i+=String.fromCharCode(n>>>24),n<<=8;return decodeURIComponent(escape(i))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,n=[],i=0;for(e=0;e<t.length;e++)i=i<<8|t.charCodeAt(e),3===(3&e)&&(n.push(i),i=0);return 3&e&&n.push(lt.bitArray.partial(8*(3&e),i)),n}},lt.codec.base64={_chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(t,e,n){var i,o="",r=0,s=lt.codec.base64._chars,a=0,c=lt.bitArray.bitLength(t);for(n&&(s=s.substr(0,62)+"-_"),i=0;6*o.length<c;)o+=s.charAt((a^t[i]>>>r)>>>26),6>r?(a=t[i]<<6-r,r+=26,i++):(a<<=6,r-=6);for(;3&o.length&&!e;)o+="=";return o},toBits:function(t,e){t=t.replace(/\s|=/g,"");var n,i,o=[],r=0,s=lt.codec.base64._chars,a=0;for(e&&(s=s.substr(0,62)+"-_"),n=0;n<t.length;n++){if(i=s.indexOf(t.charAt(n)),0>i)throw new lt.exception.invalid("this isn't base64!");r>26?(r-=26,o.push(a^i>>>r),a=i<<32-r):(r+=6,a^=i<<32-r)}return 56&r&&o.push(lt.bitArray.partial(56&r,a,1)),o}},lt.codec.base64url={fromBits:function(t){return lt.codec.base64.fromBits(t,1,1)},toBits:function(t){return lt.codec.base64.toBits(t,1)}},void 0===lt.beware&&(lt.beware={}),lt.beware["CBC mode is dangerous because it doesn't protect message integrity."]=function(){lt.mode.cbc={name:"cbc",encrypt:function(t,e,n,i){if(i&&i.length)throw new lt.exception.invalid("cbc can't authenticate data");if(128!==lt.bitArray.bitLength(n))throw new lt.exception.invalid("cbc iv must be 128 bits");var o,r=lt.bitArray,s=r._xor4,a=r.bitLength(e),c=0,u=[];if(7&a)throw new lt.exception.invalid("pkcs#5 padding only works for multiples of a byte");for(o=0;a>=c+128;o+=4,c+=128)n=t.encrypt(s(n,e.slice(o,o+4))),u.splice(o,0,n[0],n[1],n[2],n[3]);return a=16843009*(16-(a>>3&15)),n=t.encrypt(s(n,r.concat(e,[a,a,a,a]).slice(o,o+4))),u.splice(o,0,n[0],n[1],n[2],n[3]),u},decrypt:function(t,e,n,i){if(i&&i.length)throw new lt.exception.invalid("cbc can't authenticate data");if(128!==lt.bitArray.bitLength(n))throw new lt.exception.invalid("cbc iv must be 128 bits");if(127&lt.bitArray.bitLength(e)||!e.length)throw new lt.exception.corrupt("cbc ciphertext must be a positive multiple of the block size");var o,r,s,a=lt.bitArray,c=a._xor4,u=[];for(i=i||[],o=0;o<e.length;o+=4)r=e.slice(o,o+4),s=c(n,t.decrypt(r)),u.splice(o,0,s[0],s[1],s[2],s[3]),n=r;if(r=255&u[o-1],0==r||r>16)throw new lt.exception.corrupt("pkcs#5 padding corrupt");if(s=16843009*r,!a.equal(a.bitSlice([s,s,s,s],0,8*r),a.bitSlice(u,32*u.length-8*r,32*u.length)))throw new lt.exception.corrupt("pkcs#5 padding corrupt");return a.bitSlice(u,0,32*u.length-8*r)}}},lt.misc.hmac=function(t,e){this._hash=e=e||lt.hash.sha256;var n,i=[[],[]],o=e.prototype.blockSize/32;for(this._baseHash=[new e,new e],t.length>o&&(t=e.hash(t)),n=0;o>n;n++)i[0][n]=909522486^t[n],i[1][n]=1549556828^t[n];this._baseHash[0].update(i[0]),this._baseHash[1].update(i[1])},lt.misc.hmac.prototype.encrypt=lt.misc.hmac.prototype.mac=function(t,e){var n=new this._hash(this._baseHash[0]).update(t,e).finalize();return new this._hash(this._baseHash[1]).update(n).finalize()},lt.hash.sha256=function(t){this._key[0]||this._precompute(),t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset()},lt.hash.sha256.hash=function(t){return(new lt.hash.sha256).update(t).finalize()},lt.hash.sha256.prototype={blockSize:512,reset:function(){return this._h=this._init.slice(0),this._buffer=[],this._length=0,this},update:function(t){"string"==typeof t&&(t=lt.codec.utf8String.toBits(t));var e,n=this._buffer=lt.bitArray.concat(this._buffer,t),i=this._length,o=this._length=i+lt.bitArray.bitLength(t);for(e=512+i&-512;o>=e;e+=512)this._block(n.splice(0,16));return this},finalize:function(){var t,e=this._buffer,n=this._h;for(e=lt.bitArray.concat(e,[lt.bitArray.partial(1,1)]),t=e.length+2;15&t;t++)e.push(0);for(e.push(Math.floor(this._length/4294967296)),e.push(0|this._length);e.length;)this._block(e.splice(0,16));return this.reset(),n},_init:[],_key:[],_precompute:function(){function t(t){return 4294967296*(t-Math.floor(t))|0}var e,n=0,i=2;t:for(;64>n;i++){for(e=2;i>=e*e;e++)if(i%e===0)continue t;8>n&&(this._init[n]=t(Math.pow(i,.5))),this._key[n]=t(Math.pow(i,1/3)),n++}},_block:function(t){var e,n,i,o,r=t.slice(0),s=this._h,a=this._key,c=s[0],u=s[1],l=s[2],h=s[3],p=s[4],d=s[5],f=s[6],m=s[7];for(e=0;64>e;e++)16>e?n=r[e]:(i=r[e+1&15],o=r[e+14&15],n=r[15&e]=(i>>>7^i>>>18^i>>>3^i<<25^i<<14)+(o>>>17^o>>>19^o>>>10^o<<15^o<<13)+r[15&e]+r[e+9&15]|0),n=n+m+(p>>>6^p>>>11^p>>>25^p<<26^p<<21^p<<7)+(f^p&(d^f))+a[e],m=f,f=d,d=p,p=h+n|0,h=l,l=u,u=c,c=n+(u&l^h&(u^l))+(u>>>2^u>>>13^u>>>22^u<<30^u<<19^u<<10)|0;s[0]=s[0]+c|0,s[1]=s[1]+u|0,s[2]=s[2]+l|0,s[3]=s[3]+h|0,s[4]=s[4]+p|0,s[5]=s[5]+d|0,s[6]=s[6]+f|0,s[7]=s[7]+m|0}},lt.random={randomWords:function(t,e){var n,i,o=[],r=this.isReady(e);if(r===this._NOT_READY)throw new lt.exception.notReady("generator isn't seeded");for(r&this._REQUIRES_RESEED&&this._reseedFromPools(!(r&this._READY)),n=0;t>n;n+=4)(n+1)%this._MAX_WORDS_PER_BURST===0&&this._gate(),i=this._gen4words(),o.push(i[0],i[1],i[2],i[3]);return this._gate(),o.slice(0,t)},setDefaultParanoia:function(t){this._defaultParanoia=t},addEntropy:function(t,e,n){n=n||"user";var i,o,r,s=(new Date).valueOf(),a=this._robins[n],c=this.isReady(),u=0;switch(i=this._collectorIds[n],void 0===i&&(i=this._collectorIds[n]=this._collectorIdNext++),void 0===a&&(a=this._robins[n]=0),this._robins[n]=(this._robins[n]+1)%this._pools.length,typeof t){case"number":void 0===e&&(e=1),this._pools[a].update([i,this._eventId++,1,e,s,1,0|t]);break;case"object":var l=Object.prototype.toString.call(t);if("[object Uint32Array]"===l){for(r=[],o=0;o<t.length;o++)r.push(t[o]);t=r}else for("[object Array]"!==l&&(u=1),o=0;o<t.length&&!u;o++)"number"!=typeof t[o]&&(u=1);if(!u){if(void 0===e)for(e=0,o=0;o<t.length;o++)for(r=t[o];r>0;)e++,r>>>=1;this._pools[a].update([i,this._eventId++,2,e,s,t.length].concat(t))}break;case"string":void 0===e&&(e=t.length),this._pools[a].update([i,this._eventId++,3,e,s,t.length]),this._pools[a].update(t);break;default:u=1}if(u)throw new lt.exception.bug("random: addEntropy only supports number, array of numbers or string");this._poolEntropy[a]+=e,this._poolStrength+=e,c===this._NOT_READY&&(this.isReady()!==this._NOT_READY&&this._fireEvent("seeded",Math.max(this._strength,this._poolStrength)),this._fireEvent("progress",this.getProgress()))},isReady:function(t){var e=this._PARANOIA_LEVELS[void 0!==t?t:this._defaultParanoia];return this._strength&&this._strength>=e?this._poolEntropy[0]>this._BITS_PER_RESEED&&(new Date).valueOf()>this._nextReseed?this._REQUIRES_RESEED|this._READY:this._READY:this._poolStrength>=e?this._REQUIRES_RESEED|this._NOT_READY:this._NOT_READY},getProgress:function(t){var e=this._PARANOIA_LEVELS[t?t:this._defaultParanoia];return this._strength>=e?1:this._poolStrength>e?1:this._poolStrength/e},startCollectors:function(){if(!this._collectorsStarted){if(window.addEventListener)window.addEventListener("load",this._loadTimeCollector,!1),window.addEventListener("mousemove",this._mouseCollector,!1);else{if(!document.attachEvent)throw new lt.exception.bug("can't attach event");document.attachEvent("onload",this._loadTimeCollector),document.attachEvent("onmousemove",this._mouseCollector)}this._collectorsStarted=!0}},stopCollectors:function(){this._collectorsStarted&&(window.removeEventListener?(window.removeEventListener("load",this._loadTimeCollector,!1),window.removeEventListener("mousemove",this._mouseCollector,!1)):window.detachEvent&&(window.detachEvent("onload",this._loadTimeCollector),window.detachEvent("onmousemove",this._mouseCollector)),this._collectorsStarted=!1)},addEventListener:function(t,e){this._callbacks[t][this._callbackI++]=e},removeEventListener:function(t,e){var n,i,o=this._callbacks[t],r=[];for(i in o)o.hasOwnProperty(i)&&o[i]===e&&r.push(i);for(n=0;n<r.length;n++)i=r[n],delete o[i]},_pools:[new lt.hash.sha256],_poolEntropy:[0],_reseedCount:0,_robins:{},_eventId:0,_collectorIds:{},_collectorIdNext:0,_strength:0,_poolStrength:0,_nextReseed:0,_key:[0,0,0,0,0,0,0,0],_counter:[0,0,0,0],_cipher:void 0,_defaultParanoia:6,_collectorsStarted:!1,_callbacks:{progress:{},seeded:{}},_callbackI:0,_NOT_READY:0,_READY:1,_REQUIRES_RESEED:2,_MAX_WORDS_PER_BURST:65536,_PARANOIA_LEVELS:[0,48,64,96,128,192,256,384,512,768,1024],_MILLISECONDS_PER_RESEED:3e4,_BITS_PER_RESEED:80,_gen4words:function(){for(var t=0;4>t&&(this._counter[t]=this._counter[t]+1|0,!this._counter[t]);t++);return this._cipher.encrypt(this._counter)},_gate:function(){this._key=this._gen4words().concat(this._gen4words()),this._cipher=new lt.cipher.aes(this._key)},_reseed:function(t){this._key=lt.hash.sha256.hash(this._key.concat(t)),this._cipher=new lt.cipher.aes(this._key);for(var e=0;4>e&&(this._counter[e]=this._counter[e]+1|0,!this._counter[e]);e++);},_reseedFromPools:function(t){var e,n=[],i=0;for(this._nextReseed=n[0]=(new Date).valueOf()+this._MILLISECONDS_PER_RESEED,e=0;16>e;e++)n.push(4294967296*Math.random()|0);for(e=0;e<this._pools.length&&(n=n.concat(this._pools[e].finalize()),i+=this._poolEntropy[e],this._poolEntropy[e]=0,t||!(this._reseedCount&1<<e));e++);this._reseedCount>=1<<this._pools.length&&(this._pools.push(new lt.hash.sha256),this._poolEntropy.push(0)),this._poolStrength-=i,i>this._strength&&(this._strength=i),this._reseedCount++,this._reseed(n)},_mouseCollector:function(t){var e=t.x||t.clientX||t.offsetX||0,n=t.y||t.clientY||t.offsetY||0;lt.random.addEntropy([e,n],2,"mouse")},_loadTimeCollector:function(t){lt.random.addEntropy((new Date).valueOf(),2,"loadtime")},_fireEvent:function(t,e){var n,i=lt.random._callbacks[t],o=[];for(n in i)i.hasOwnProperty(n)&&o.push(i[n]);for(n=0;n<o.length;n++)o[n](e)}},function(){try{var t=new Uint32Array(32);crypto.getRandomValues(t),lt.random.addEntropy(t,1024,"crypto.getRandomValues")}catch(e){}}(),function(){for(var t in lt.beware)lt.beware.hasOwnProperty(t)&&lt.beware[t]()}();var ht={sjcl:lt,version:"1.3.10"};ht.generateAesKey=function(){return{key:lt.random.randomWords(8,0),encrypt:function(t){return this.encryptWithIv(t,lt.random.randomWords(4,0))},encryptWithIv:function(t,e){var n=new lt.cipher.aes(this.key),i=lt.codec.utf8String.toBits(t),o=lt.mode.cbc.encrypt(n,i,e),r=lt.bitArray.concat(e,o);return lt.codec.base64.fromBits(r)}}},ht.create=function(t){return new ht.EncryptionClient(t)},ht.EncryptionClient=function(t){var i=this,r=[];i.publicKey=t,i.version=ht.version;var s=function(t,e){var n,i,o;n=document.createElement(t);for(i in e)e.hasOwnProperty(i)&&(o=e[i],n.setAttribute(i,o));return n},a=function(t){return window.jQuery&&t instanceof jQuery?t[0]:t.nodeType&&1===t.nodeType?t:document.getElementById(t)},c=function(t){var e,n,i,o,r=[];if("INTEGER"===t.typeName()&&(e=t.posContent(),n=t.posEnd(),i=t.stream.hexDump(e,n).replace(/[ \n]/g,""),r.push(i)),null!==t.sub)for(o=0;o<t.sub.length;o++)r=r.concat(c(t.sub[o]));return r},u=function(t){var e,n,i=[],o=t.children;for(n=0;n<o.length;n++)e=o[n],1===e.nodeType&&e.attributes["data-encrypted-name"]?i.push(e):e.children&&e.children.length>0&&(i=i.concat(u(e)));return i},l=function(){var n,i,r,s,a,u;try{a=o(t),n=e.decode(a)}catch(l){throw"Invalid encryption key. Please use the key labeled 'Client-Side Encryption Key'"}if(r=c(n),2!==r.length)throw"Invalid encryption key. Please use the key labeled 'Client-Side Encryption Key'";return s=r[0],i=r[1],u=new Z,u.setPublic(s,i),u},h=function(){return{key:lt.random.randomWords(8,0),sign:function(t){var e=new lt.misc.hmac(this.key,lt.hash.sha256),n=e.encrypt(t);return lt.codec.base64.fromBits(n)}}};i.encrypt=function(t){var e=l(),o=ht.generateAesKey(),r=h(),s=o.encrypt(t),a=r.sign(lt.codec.base64.toBits(s)),c=lt.bitArray.concat(o.key,r.key),u=lt.codec.base64.fromBits(c),p=e.encrypt(u),d="$bt4|javascript_"+i.version.replace(/\./g,"_")+"$",f=null;return p&&(f=n(p)),d+f+"$"+s+"$"+a},i.encryptForm=function(t){var e,n,o,c,l,h;for(t=a(t),h=u(t);r.length>0;){try{t.removeChild(r[0])}catch(p){}r.splice(0,1)}for(l=0;l<h.length;l++)e=h[l],o=e.getAttribute("data-encrypted-name"),n=i.encrypt(e.value),e.removeAttribute("name"),c=s("input",{value:n,type:"hidden",name:o}),r.push(c),t.appendChild(c)},i.onSubmitEncryptForm=function(t,e){var n;t=a(t),n=function(n){return i.encryptForm(t),e?e(n):n},window.jQuery?window.jQuery(t).submit(n):t.addEventListener?t.addEventListener("submit",n,!1):t.attachEvent&&t.attachEvent("onsubmit",n)},i.formEncrypter={encryptForm:i.encryptForm,extractForm:a,onSubmitEncryptForm:i.onSubmitEncryptForm},lt.random.startCollectors()},window.Braintree=ht;

}(),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.braintree=t()}}(function(){var t;return function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){(function(n){"use strict";function i(t){var e=t.analyticsConfiguration||{},i=n.braintree?n.braintree.VERSION:null,o=i?"braintree/web/"+i:"";return{sdkVersion:e.sdkVersion||o,merchantAppId:e.merchantAppId||n.location.host}}function o(t){var e=i(t);this.options=t,this.driver=t.driver||m({enableCORS:y(t)}),this.customerId=t.customerId,this.integration=t.integrationType||t.integration||"",this.sdkVersion=e.sdkVersion,this.merchantAppId=e.merchantAppId,this.sessionId=t.channel||_(),this.authorization=t.authorization||t.clientToken,c.isTokenizationKey(this.authorization)?(this.authorizationType=v.authorizationTypes.TOKENIZATION_KEY,this.gatewayConfiguration=t.gatewayConfiguration):(this.gatewayConfiguration=t.gatewayConfiguration||a(this.authorization),this.authorizationFingerprint=a(this.authorization).authorizationFingerprint,this.authorizationType=v.authorizationTypes.CLIENT_TOKEN),this.requestTimeout=t.hasOwnProperty("timeout")?t.timeout:6e4}var r=t(87),s=t(26),a=t(8),c=t(13),u=t(11),l=t(5),h=t(4),p=t(2),d=t(9),f=t(7).normalizeCreditCardFields,m=t(40).chooseDriver,y=t(12),g=t(6),v=t(3),_=t(49).uuid;o.prototype._getGatewayConfiguration=function(t){var e=this;return this.gatewayConfiguration?void t(null,this.gatewayConfiguration):void g({authorization:this.authorization,enableCORS:y(this.options)},function(n,i){return n?void t(n,null):(e.gatewayConfiguration=i,void t(null,i))})},o.prototype._getAttrs=function(t){var e={};return this.options.hasOwnProperty("sharedCustomerIdentifier")&&(e.sharedCustomerIdentifier=this.options.sharedCustomerIdentifier),e.sharedCustomerIdentifierType=this.options.sharedCustomerIdentifierType,e.braintreeLibraryVersion=this.sdkVersion,t.merchantAccountId&&(e.merchantAccountId=t.merchantAccountId),this.authorizationType===v.authorizationTypes.TOKENIZATION_KEY?e.clientKey=this.options.authorization:e.authorizationFingerprint=this.authorizationFingerprint,e._meta={sessionId:this.sessionId},e},o.prototype.getCreditCards=function(t,e){"function"==typeof t&&(e=t,t={}),this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=this._getAttrs(i),t.defaultFirst===!0&&(o.defaultFirst=1),void this.driver.get(c.joinUrlFragments([i.clientApiUrl,"v1","payment_methods"]),o,function(t){var e=0,n=t.paymentMethods.length,i=[];for(e;n>e;e++)i.push(new h(t.paymentMethods[e]));return i},e,this.requestTimeout))},this))},o.prototype.tokenizeCoinbase=function(t,e){t.options={validate:!1},this.addCoinbase(t,function(t,n){t?e(t,null):n&&n.nonce?e(t,n):e("Unable to tokenize coinbase account.",null)})},o.prototype.tokenizePayPalAccount=function(t,e){t.options={validate:!1},this.addPayPalAccount(t,function(t,n){t?e(t,null):n&&n.nonce?e(null,n):e("Unable to tokenize paypal account.",null)})},o.prototype.tokenizeCard=function(t,e){t.options={validate:!1},this.addCreditCard(t,function(t,n){n&&n.nonce?e(t,n.nonce,{type:n.type,details:n.details}):e("Unable to tokenize card.",null)})},o.prototype.lookup3DS=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o,r;return n?e(n):(o=c.joinUrlFragments([i.clientApiUrl,"v1/payment_methods",t.nonce,"three_d_secure/lookup"]),r=c.mergeOptions(this._getAttrs(i),{amount:t.amount}),void this.driver.post(o,r,function(t){return t},e,this.requestTimeout))},this))},o.prototype.createSEPAMandate=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),{sepaMandate:t}),void this.driver.post(c.joinUrlFragments([i.clientApiUrl,"v1","sepa_mandates.json"]),o,function(t){return{sepaMandate:new u(t.europeBankAccounts[0].sepaMandates[0]),sepaBankAccount:new l(t.europeBankAccounts[0])}},e,this.requestTimeout))},this))},o.prototype.getSEPAMandate=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),t),void this.driver.get(c.joinUrlFragments([i.clientApiUrl,"v1","sepa_mandates.json"]),o,function(t){return{sepaMandate:new u(t.sepaMandates[0])}},e,this.requestTimeout))},this))},o.prototype.addCoinbase=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(delete t.share,o=c.mergeOptions(this._getAttrs(i),{coinbaseAccount:t,_meta:{integration:this.integration||"custom",source:"coinbase",sessionId:this.sessionId}}),void this.driver.post(c.joinUrlFragments([i.clientApiUrl,"v1","payment_methods/coinbase_accounts"]),o,function(t){return new p(t.coinbaseAccounts[0])},e,this.requestTimeout))},this))},o.prototype.addPayPalAccount=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(delete t.share,o=c.mergeOptions(this._getAttrs(i),{paypalAccount:t,_meta:{integration:this.integration||"paypal",source:"paypal",sessionId:this.sessionId}}),void this.driver.post(c.joinUrlFragments([i.clientApiUrl,"v1","payment_methods","paypal_accounts"]),o,function(t){return new d(t.paypalAccounts[0])},e,this.requestTimeout))},this))},o.prototype.addCreditCard=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o,r,s;return n?e(n):(s=t.share,delete t.share,r=f(t),o=c.mergeOptions(this._getAttrs(i),{share:s,creditCard:r,_meta:{integration:this.integration||"custom",source:"form",sessionId:this.sessionId}}),void this.driver.post(c.joinUrlFragments([i.clientApiUrl,"v1","payment_methods/credit_cards"]),o,function(t){return new h(t.creditCards[0])},e,this.requestTimeout))},this))},o.prototype.sendAnalyticsEvents=function(t,e){this._getGatewayConfiguration(r(function(i,o){var r,s,a,u;if(i)return void e(i);if(a=o.analytics.url,u=[],t=c.isArray(t)?t:[t],!a)return void(e&&e(null,{}));for(s in t)t.hasOwnProperty(s)&&u.push({kind:t[s]});r=c.mergeOptions(this._getAttrs(o),{analytics:u,_meta:{merchantAppId:this.merchantAppId,platform:"web",platformVersion:n.navigator.userAgent,integrationType:this.integration,sdkVersion:this.sdkVersion,sessionId:this.sessionId}}),this.driver.post(a,r,function(t){return t},e,v.ANALYTICS_TIMEOUT_MS)},this))},o.prototype.decryptBrowserswitchPayload=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o,r;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),{asymmetricEncryptedPayload:t}),r=c.joinUrlFragments([i.clientApiUrl,"/v1/paypal_browser_switch/decrypt"]),void this.driver.post(r,o,function(t){return t},e,this.requestTimeout))},this))},o.prototype.encryptBrowserswitchReturnPayload=function(t,e,n){this._getGatewayConfiguration(r(function(i,o){var r,s;return i?n(i):(r=c.mergeOptions(this._getAttrs(o),{payload:t,aesKey:e}),s=c.joinUrlFragments([o.clientApiUrl,"/v1/paypal_browser_switch/encrypt"]),void this.driver.post(s,r,function(t){return t},n,this.requestTimeout))},this))},o.prototype.exchangePaypalTokenForConsentCode=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o,r;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),t),i.merchantAccountId&&(o.merchantAccountId=i.merchantAccountId),r=c.joinUrlFragments([i.clientApiUrl,"/v1/paypal_account_service/merchant_consent"]),void this.driver.post(r,o,function(t){return t},e,this.requestTimeout))},this))},o.prototype.getAmexRewardsBalance=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),t),o.nonce&&(o.paymentMethodNonce=o.nonce,delete o.nonce),void this.driver.get(c.joinUrlFragments([i.clientApiUrl,"v1/payment_methods/amex_rewards_balance"]),o,function(t){return t},e,this.requestTimeout))},this))},o.prototype.getAmexExpressCheckoutNonceProfile=function(t,e){this._getGatewayConfiguration(r(function(n,i){var o;return n?e(n):(o=c.mergeOptions(this._getAttrs(i),t),o.nonce&&(o.paymentMethodNonce=o.nonce,delete o.nonce),void this.driver.get(c.joinUrlFragments([i.clientApiUrl,"v1/payment_methods/amex_express_checkout_cards",o.paymentMethodNonce]),o,function(t){return t},e,this.requestTimeout))},this))},o.prototype.verify3DS=function(){var t=arguments;return this._secure3d?this._secure3d.verify.apply(this._secure3d,t):void this._getGatewayConfiguration(r(function(e,n){var i;return e?(i=t[t.length-1])(e):(this._secure3d=s.create(this,{container:this.options.container,clientToken:n}),this._secure3d.verify.apply(this._secure3d,t))},this))},e.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{11:11,12:12,13:13,2:2,26:26,3:3,4:4,40:40,49:49,5:5,6:6,7:7,8:8,87:87,9:9}],2:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<o.length;e++)n=o[e],this[n]=t[n]}var o=["nonce","type","description","details"];e.exports=i},{}],3:[function(t,e,n){"use strict";var i={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};e.exports={apiUrls:i,errors:{UNKNOWN_ERROR:"Unknown error",INVALID_TIMEOUT:"Timeout must be a number"},ANALYTICS_TIMEOUT_MS:4e3,authorizationTypes:{CLIENT_TOKEN:"CLIENT_TOKEN",TOKENIZATION_KEY:"TOKENIZATION_KEY"}}},{}],4:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<o.length;e++)n=o[e],this[n]=t[n]}var o=["billingAddress","branding","createdAt","createdAtMerchant","createdAtMerchantName","details","isLocked","lastUsedAt","lastUsedAtMerchant","lastUsedAtMerchantName","lastUsedByCurrentMerchant","nonce","securityQuestions","type"];e.exports=i},{}],5:[function(t,e,n){"use strict";function i(t){var e,n=["bic","maskedIBAN","nonce","accountHolderName"],i=0;for(i=0;i<n.length;i++)e=n[i],this[e]=t[e]}e.exports=i},{}],6:[function(t,e,n){"use strict";function i(t){var e=t.split("_"),n=e[0],i=e.slice(2).join("_");return{merchantId:i,environment:n}}function o(t,e){var n,o,l,h=a({enableCORS:c(t)}),p={};s.isTokenizationKey(t.authorization)?(p.clientKey=t.authorization,o=i(t.authorization),n=u.apiUrls[o.environment]+"/merchants/"+o.merchantId+"/client_api/v1/configuration"):(l=r(t.authorization),p.authorizationFingerprint=l.authorizationFingerprint,n=l.configUrl),t.sessionId&&(p._meta={sessionId:t.sessionId}),h.get(n,p,function(t){return t},e,t.timeout)}var r=t(8),s=t(13),a=t(40).chooseDriver,c=t(12),u=t(3);e.exports=o},{12:12,13:13,3:3,40:40,8:8}],7:[function(t,e,n){"use strict";function i(t){var e,n={billingAddress:t.billingAddress||{}};for(e in t)if(t.hasOwnProperty(e))switch(e.replace(/_/g,"").toLowerCase()){case"postalcode":case"countryname":case"countrycodenumeric":case"countrycodealpha2":case"countrycodealpha3":case"region":case"extendedaddress":case"locality":case"firstname":case"lastname":case"company":case"streetaddress":n.billingAddress[e]=t[e];break;default:n[e]=t[e]}return n}e.exports={normalizeCreditCardFields:i}},{}],8:[function(t,e,n){"use strict";function i(t){var e;if(!t)throw new Error("Braintree API Client Misconfigured: clientToken required.");if("object"==typeof t&&null!==t)e=t;else{try{t=window.atob(t)}catch(n){}try{e=JSON.parse(t)}catch(i){throw new Error("Braintree API Client Misconfigured: clientToken is not valid JSON.")}}if(!e.hasOwnProperty("clientApiUrl")||!o.isWhitelistedDomain(e.clientApiUrl))throw new Error("Braintree API Client Misconfigured: the clientApiUrl provided in the clientToken is invalid.");return e}var o=t(49);t(10),e.exports=i},{10:10,49:49}],9:[function(t,e,n){"use strict";function i(t){var e,n;for(e=0;e<o.length;e++)n=o[e],this[n]=t[n]}var o=["nonce","type","description","details"];e.exports=i},{}],10:[function(t,e,n){(function(t){"use strict";var n=function(t){var e=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="";if(!e.test(t))throw new Error("Non base64 encoded input passed to window.atob polyfill");var o=0;do{var r=n.indexOf(t.charAt(o++)),s=n.indexOf(t.charAt(o++)),a=n.indexOf(t.charAt(o++)),c=n.indexOf(t.charAt(o++)),u=(63&r)<<2|s>>4&3,l=(15&s)<<4|a>>2&15,h=(3&a)<<6|63&c;i+=String.fromCharCode(u)+(l?String.fromCharCode(l):"")+(h?String.fromCharCode(h):"")}while(o<t.length);return i};t.atob=t.atob||n,e.exports={atobPolyfill:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(t,e,n){"use strict";function i(t){var e,n=0,i=["accountHolderName","bic","longFormURL","mandateReferenceNumber","maskedIBAN","shortForm"];for(n=0;n<i.length;n++)e=i[n],this[e]=t[e]}e.exports=i},{}],12:[function(t,e,n){"use strict";e.exports=function(t){return null!=t.enableCORS?t.enableCORS:t.merchantConfiguration?t.merchantConfiguration.enableCORS:!1}},{}],13:[function(t,e,n){"use strict";function i(t){var e,n,i=[];for(n=0;n<t.length;n++)e=t[n],"/"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),"/"===e.charAt(0)&&(e=e.substring(1)),i.push(e);return i.join("/")}function o(t){return t&&"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===Object.prototype.toString.call(t)||!1}function r(t,e){var n,i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);for(n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);return i}function s(t){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(t)}e.exports={joinUrlFragments:i,isArray:o,mergeOptions:r,isTokenizationKey:s}},{}],14:[function(t,e,n){"use strict";function i(t){return new o(t)}var o=t(1),r=t(13),s=t(8),a=t(6);e.exports={Client:o,configure:i,util:r,parseClientToken:s,_getConfiguration:a}},{1:1,13:13,6:6,8:8}],15:[function(t,e,n){"use strict";var i,o=Array.prototype.indexOf;i=o?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},e.exports={indexOf:i}},{}],16:[function(t,e,n){"use strict";function i(t){var e,n,i="";for(e=0;e<t.length;e++)i+="%",n=t[e].charCodeAt(0).toString(16).toUpperCase(),n.length<2&&(i+="0"),i+=n;return i}function o(t){return decodeURIComponent(i(atob(t)))}e.exports={decodeUtf8:o}},{}],17:[function(t,e,n){"use strict";function i(t,e){if(e=e||"["+t+"] is not a valid DOM Element",t&&t.nodeType&&1===t.nodeType)return t;if(t&&window.jQuery&&(t instanceof jQuery||"jquery"in Object(t))&&0!==t.length)return t[0];if("string"==typeof t&&document.getElementById(t))return document.getElementById(t);throw new Error(e)}e.exports={normalizeElement:i}},{}],18:[function(t,e,n){"use strict";function i(t,e,n,i){t.addEventListener?t.addEventListener(e,n,i||!1):t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e,n,i){t.removeEventListener?t.removeEventListener(e,n,i||!1):t.detachEvent&&t.detachEvent("on"+e,n)}function r(t){t.preventDefault?t.preventDefault():t.returnValue=!1}e.exports={addEventListener:i,removeEventListener:o,preventDefault:r}},{}],19:[function(t,e,n){"use strict";function i(t){return"[object Function]"===r.call(t)}function o(t,e){return function(){return t.apply(e,arguments)}}var r=Object.prototype.toString;e.exports={bind:o,isFunction:i}},{}],20:[function(t,e,n){"use strict";function i(t){var e,n,i,o,r=[{min:0,max:180,chars:7},{min:181,max:620,chars:14},{min:621,max:960,chars:22}];for(o=r.length,t=t||window.innerWidth,n=0;o>n;n++)i=r[n],t>=i.min&&t<=i.max&&(e=i.chars);return e||60}function o(t,e){var n,i;return-1===t.indexOf("@")?t:(t=t.split("@"),n=t[0],i=t[1],n.length>e&&(n=n.slice(0,e)+"..."),i.length>e&&(i="..."+i.slice(-e)),n+"@"+i)}e.exports={truncateEmail:o,getMaxCharLength:i}},{}],21:[function(t,e,n){"use strict";function i(){return"https:"===window.location.protocol}function o(t){switch(t){case null:case void 0:return"";case!0:return"1";case!1:return"0";default:return encodeURIComponent(t)}}function r(t,e){var n,i,s=[];for(i in t)if(t.hasOwnProperty(i)){var a=t[i];n=e?e+"["+i+"]":i,"object"==typeof a?s.push(r(a,n)):void 0!==a&&null!==a&&s.push(o(n)+"="+o(a))}return s.join("&")}function s(t){for(var e={},n=t.split("&"),i=0;i<n.length;i++){var o=n[i].split("="),r=o[0],s=decodeURIComponent(o[1]);e[r]=s}return e}function a(t){var e=t.split("?");return 2!==e.length?{}:s(e[1])}function c(t){if(t=t.toLowerCase(),!/^http/.test(t))return!1;l.href=t;var e=l.hostname.split("."),n=e.slice(-2).join(".");return-1===u.indexOf(h,n)?!1:!0}var u=t(15),l=document.createElement("a"),h=["paypal.com","braintreepayments.com","braintreegateway.com","localhost"];e.exports={isBrowserHttps:i,makeQueryString:r,decodeQueryString:s,getParams:a,isWhitelistedDomain:c}},{15:15}],22:[function(t,e,n){"use strict";function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}e.exports=i},{}],23:[function(t,e,n){var i=t(17),o=t(21),r=t(19),s=t(18),a=t(20),c=t(15),u=t(16),l=t(22);e.exports={string:a,array:c,normalizeElement:i.normalizeElement,isBrowserHttps:o.isBrowserHttps,makeQueryString:o.makeQueryString,decodeQueryString:o.decodeQueryString,getParams:o.getParams,isWhitelistedDomain:o.isWhitelistedDomain,removeEventListener:s.removeEventListener,addEventListener:s.addEventListener,preventDefault:s.preventDefault,bind:r.bind,isFunction:r.isFunction,base64ToUtf8:u.decodeUtf8,uuid:l}},{15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22}],24:[function(t,e,n){"use strict";function i(t,e){var n=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return n[e]}function o(){return{html:{height:s.style.height||"",overflow:i(s,"overflow"),position:i(s,"position")},body:{height:a.style.height||"",overflow:i(a,"overflow")}}}function r(t,e){this.assetsUrl=t,this.container=e||document.body,this.iframe=null,s=document.documentElement,a=document.body,this.merchantPageDefaultStyles=o()}var s,a,c=t(23),u=t(146),l=t(31),h="1.3.3";r.prototype.get=function(t,e){var n=this,i=this.constructAuthorizationURL(t);this.container&&u(this.container)?this.container(i+"&no_style=1"):this.insertIframe(i),new l(function(t){u(n.container)||n.removeIframe(),e(t)})},r.prototype.removeIframe=function(){this.container&&this.container.nodeType&&1===this.container.nodeType?this.container.removeChild(this.iframe):this.container&&window.jQuery&&this.container instanceof jQuery?$(this.iframe,this.container).remove():"string"==typeof this.container&&document.getElementById(this.container).removeChild(this.iframe),this.unlockMerchantWindowSize()},r.prototype.insertIframe=function(t){var e=document.createElement("iframe");if(e.src=t,this.applyStyles(e),this.lockMerchantWindowSize(),this.container&&this.container.nodeType&&1===this.container.nodeType)this.container.appendChild(e);else if(this.container&&window.jQuery&&this.container instanceof jQuery&&0!==this.container.length)this.container.append(e);else{if("string"!=typeof this.container||!document.getElementById(this.container))throw new Error("Unable to find valid container for iframe.");document.getElementById(this.container).appendChild(e)}this.iframe=e},r.prototype.applyStyles=function(t){t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.setAttribute("frameborder","0"),t.setAttribute("allowTransparency","true"),t.style.border="0",t.style.zIndex="99999"},r.prototype.lockMerchantWindowSize=function(){s.style.overflow="hidden",a.style.overflow="hidden",a.style.height="100%"},r.prototype.unlockMerchantWindowSize=function(){var t=this.merchantPageDefaultStyles;a.style.height=t.body.height,a.style.overflow=t.body.overflow,s.style.overflow=t.html.overflow},r.prototype.constructAuthorizationURL=function(t){var e,n=window.location.href;return n.indexOf("#")>-1&&(n=n.split("#")[0]),e=c.makeQueryString({acsUrl:t.acsUrl,pareq:t.pareq,termUrl:t.termUrl+"&three_d_secure_version="+h,md:t.md,parentUrl:n}),this.assetsUrl+"/3ds/"+h+"/html/style_frame?"+e},e.exports=r},{146:146,23:23,31:31}],25:[function(t,e,n){"use strict";function i(){}function o(t,e){e=e||{},this.clientToken=e.clientToken,this.container=e.container,this.api=t,this.nonce=null,this._loader=null,this._boundHandleUserClose=s(this._handleUserClose,this)}var r=t(23),s=t(87),a=t(146),c=t(24),u=t(27);o.prototype.verify=function(t,e){if(!a(e))throw this.api.sendAnalyticsEvents("3ds.web.no_callback"),new Error("No suitable callback argument was given");a(t.onUserClose)&&(this._onUserClose=t.onUserClose),a(t.onLookupComplete)&&(this._onLookupComplete=t.onLookupComplete),(void 0===t.useDefaultLoader||t.useDefaultLoader===!0)&&this._createDefaultLoader();var n={nonce:"",amount:t.amount},i=t.creditCard;if("string"==typeof i)n.nonce=i,this.api.sendAnalyticsEvents("3ds.web.verify.nonce"),this.startVerification(n,e);else{var o=this,r=function(t,i){return t?(o._removeDefaultLoader(),e(t)):(n.nonce=i,void o.startVerification(n,e))};this.api.sendAnalyticsEvents("3ds.web.verify.credit_card"),this.api.tokenizeCard(i,r)}},o.prototype.startVerification=function(t,e){this.api.lookup3DS(t,s(this.handleLookupResponse(e),this))},o.prototype.handleLookupResponse=function(t){var e=this;return function(n,i){var o;this._onLookupComplete(),n?t(n.error):i.lookup&&i.lookup.acsUrl&&i.lookup.acsUrl.length>0?(e.nonce=i.paymentMethod.nonce,o=new c(this.clientToken.assetsUrl,this.container),o.get(i.lookup,s(this.handleAuthenticationResponse(t),this)),this._detachListeners(),this._attachListeners()):(e.nonce=i.paymentMethod.nonce,t(null,{nonce:e.nonce,verificationDetails:i.threeDSecureInfo}))}},o.prototype.handleAuthenticationResponse=function(t){return function(e){var n,i=r.decodeQueryString(e);i.user_closed||(n=JSON.parse(i.auth_response),n.success?t(null,{nonce:n.paymentMethod.nonce,verificationDetails:n.threeDSecureInfo}):n.threeDSecureInfo&&n.threeDSecureInfo.liabilityShiftPossible?t(null,{nonce:this.nonce,verificationDetails:n.threeDSecureInfo}):t(n.error))}},o.prototype._attachListeners=function(){r.addEventListener(window,"message",this._boundHandleUserClose)},o.prototype._detachListeners=function(){r.removeEventListener(window,"message",this._boundHandleUserClose)},o.prototype._createDefaultLoader=function(){this._loader=new u,document.body.appendChild(this._loader.getElement())},o.prototype._removeDefaultLoader=function(){if(this._loader){var t=this._loader.getElement(),e=t.parentNode;e&&e.removeChild(t),this._loader.dispose(),this._loader=null}},o.prototype._handleUserClose=function(t){"user_closed=true"===t.data&&this._onUserClose()},o.prototype._onUserClose=i,o.prototype._onLookupComplete=function(){this._removeDefaultLoader()},e.exports=o},{146:146,23:23,24:24,27:27,87:87}],26:[function(t,e,n){"use strict";var i=t(25);e.exports={create:function(t,e){var n=new i(t,e);return n}}},{25:25}],27:[function(t,e,n){"use strict";function i(){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._display=null,this._initialize()}var o=t(28),r=t(29),s=t(30);i.prototype._cssDeclarations=["filter:progid:DXImageTransform.Microsoft.Gradient(StartColorStr=#7F000000, EndColorStr=#7F000000)","background-color: rgba(0, 0, 0, 0.5)","display: table","height: 100%","left: 0","position: fixed","right: 0","top: 0","width: 100%","z-index: 99999"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._display.dispose(),this._display=null,this._element=null},i.prototype._initialize=function(){var t=new s,e=window.SVGElement&&window.SVGAnimateElement&&window.SVGAnimateTransformElement;e||(t=new r("Loading...")),this._display=new o(t),this.getElement().appendChild(this._display.getElement())},e.exports=i},{28:28,29:29,30:30}],28:[function(t,e,n){"use strict";function i(t){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._displayObject=t,this._initialize()}i.prototype._cssDeclarations=["display: table-cell","vertical-align: middle"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._displayObject.dispose(),this._displayObject=null,this._element=null},i.prototype._initialize=function(){this.getElement().appendChild(this._displayObject.getElement())},e.exports=i},{}],29:[function(t,e,n){"use strict";function i(t){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._element.innerHTML=t}i.prototype._cssDeclarations=["color: #fff","font-family: Helvetica, sans-serif","font-size: 12px","text-align: center"].join(";"),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._element=null},e.exports=i},{}],30:[function(t,e,n){"use strict";function i(){this._element=document.createElement("div"),this._element.style.cssText=this._cssDeclarations,this._element.innerHTML=this._markup}i.prototype._cssDeclarations=["height: 36px","margin-left: auto","margin-right: auto","width: 36px"].join(";"),i.prototype._markup=['<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"','width="100%" height="100%" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">','  <path fill="#FFF" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">','    <animateTransform attributeType="xml"','    attributeName="transform"','    type="rotate"','    from="0 25 25"','    to="360 25 25"','    dur="780ms"','    repeatCount="indefinite"','    calcMode="spline"','    keySplines="0.44, 0.22, 0, 1"','    keyTimes="0;1"/>',"  </path>","</svg>"].join(""),i.prototype.getElement=function(){return this._element},i.prototype.dispose=function(){this._element=null},e.exports=i},{}],31:[function(t,e,n){"use strict";function i(t){this.postMessageReceiver(t),this.hashChangeReceiver(t)}var o=t(23);i.prototype.postMessageReceiver=function(t){var e=this;this.wrappedCallback=function(n){var i=n.data;(/^(auth_response=)/.test(i)||"user_closed=true"===i)&&(t(i),e.stopListening())},o.addEventListener(window,"message",this.wrappedCallback)},i.prototype.hashChangeReceiver=function(t){var e,n=window.location.hash,i=this;this.poll=setInterval(function(){e=window.location.hash,e.length>0&&e!==n&&(i.stopListening(),e=e.substring(1,e.length),t(e),window.location.hash=n.length>0?n:"")},10)},i.prototype.stopListening=function(){clearTimeout(this.poll),o.removeEventListener(window,"message",this.wrappedCallback)},e.exports=i},{23:23}],32:[function(t,e,n){(function(n){"use strict";function i(){return h?new XMLHttpRequest:new XDomainRequest}function o(t,e,n,i,o){var r=a.createURLParams(t,e);s("GET",r,null,n,i,o)}function r(t,e,n,i,o){s("POST",t,e,n,i,o)}function s(t,e,n,o,r,s){var a,p,d=i();r=r||function(){},h?d.onreadystatechange=function(){4===d.readyState&&(a=d.status,p=u(d.responseText),a>=400||0===a?r.call(null,p||{errors:l.errors.UNKNOWN_ERROR},null):a>0&&r.call(null,null,o(p)))}:(d.onload=function(){r.call(null,null,o(u(d.responseText)))},d.onerror=function(){r.call(null,d.responseText,null)},d.onprogress=function(){},d.ontimeout=function(){r.call(null,{errors:l.errors.UNKNOWN_ERROR},null)}),d.open(t,e,!0),d.timeout=null==s?6e4:s,h&&"POST"===t&&d.setRequestHeader("Content-Type","application/json"),setTimeout(function(){d.send(c(t,n))},0)}var a=t(39),c=t(38),u=t(37),l=t(34),h=n.XMLHttpRequest&&"withCredentials"in new n.XMLHttpRequest;e.exports={get:o,post:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{34:34,37:37,38:38,39:39}],33:[function(t,e,n){"use strict";function i(t){var e=s.getUserAgent(),n=!(s.isHTTP()&&/(MSIE\s(8|9))|(Phantom)/.test(e));return t=t||{},t.enableCORS&&n?r:o}var o=t(35),r=t(32),s=t(39);e.exports=i},{32:32,35:35,39:39}],34:[function(t,e,n){e.exports={errors:{UNKNOWN_ERROR:"Unknown error",INVALID_TIMEOUT:"Timeout must be a number"}}},{}],35:[function(t,e,n){"use strict";function i(t,e){return t.status>=400?[t,null]:[null,e(t)]}function o(){}function r(t,e,n,r,s,a){var c;s=s||o,null==a&&(a=6e4),c=r(t,e,function(t,e,o){l[o]&&(clearTimeout(l[o]),t?s.call(null,t):s.apply(null,i(e,function(t){return n(t)})))}),"number"==typeof a?l[c]=setTimeout(function(){l[c]=null,s.apply(null,[{errors:u.errors.UNKNOWN_ERROR},null])},a):s.apply(null,[{errors:u.errors.INVALID_TIMEOUT},null])}function s(t,e,n,i,o){e._method="POST",r(t,e,n,c.get,i,o)}function a(t,e,n,i,o){r(t,e,n,c.get,i,o)}var c=t(36),u=t(34),l=[];e.exports={get:a,post:s}},{34:34,36:36}],36:[function(t,e,n){(function(n){"use strict";function i(t,e){var n=document.createElement("script"),i=!1;n.src=t,n.async=!0;var o=e||u.error;"function"==typeof o&&(n.onerror=function(e){o({url:t,event:e})}),n.onload=n.onreadystatechange=function(){i||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(i=!0,n.onload=n.onreadystatechange=null,n&&n.parentNode&&n.parentNode.removeChild(n))},s||(s=document.getElementsByTagName("head")[0]),s.appendChild(n)}function o(t,e,n,o){var r,s;return o=o||u.callbackName||"callback",s=o+"_json"+a.generateUUID(),e[o]=s,r=a.createURLParams(t,e),c[s]=function(t){n(null,t,s);try{delete c[s]}catch(e){}c[s]=null},i(r,function(t){n(t,null,s)}),s}function r(t){u=t}var s,a=t(39),c=n,u={};e.exports={get:o,init:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{39:39}],37:[function(t,e,n){"use strict";e.exports=function(t){try{t=JSON.parse(t)}catch(e){}return t}},{}],38:[function(t,e,n){"use strict";e.exports=function(t,e){if("string"!=typeof t)throw new Error("Method must be a string");return"get"!==t.toLowerCase()&&null!=e&&(e="string"==typeof e?e:JSON.stringify(e)),e}},{}],39:[function(t,e,n){(function(t){"use strict";function n(t){var e;for(e in t)if(t.hasOwnProperty(e))return!0;return!1}function i(t){return t&&"object"==typeof t&&"number"==typeof t.length&&"[object Array]"===Object.prototype.toString.call(t)||!1}function o(t,e){var n,r,s,a=[];for(s in t)t.hasOwnProperty(s)&&(r=t[s],n=e?i(t)?e+"[]":e+"["+s+"]":s,a.push("object"==typeof r?o(r,n):encodeURIComponent(n)+"="+encodeURIComponent(r)));return a.join("&")}function r(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.floor(16*Math.random()),n="x"===t?e:3&e|8;return n.toString(16)})}function s(t,e){return t=t||"",null!=e&&"object"==typeof e&&n(e)&&(t+=-1===t.indexOf("?")?"?":"",t+=-1!==t.indexOf("=")?"&":"",t+=o(e)),t}function a(){return t.navigator.userAgent}function c(){return"http:"===t.location.protocol}e.exports={isArray:i,generateUUID:r,stringify:o,createURLParams:s,getUserAgent:a,isHTTP:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],40:[function(t,e,n){"use strict";var i=t(32),o=t(35),r=t(33),s=t(39);e.exports={AJAXDriver:i,JSONPDriver:o,chooseDriver:r,util:s}},{32:32,33:33,35:35,39:39}],41:[function(t,e,n){arguments[4][15][0].apply(n,arguments)},{15:15}],42:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{16:16}],43:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{17:17}],44:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{18:18}],45:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{19:19}],46:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{20:20}],47:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{21:21,41:41}],48:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{22:22}],49:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{23:23,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48}],50:[function(t,e,n){"use strict";function i(t,e){this.host=t||window,this.channel=e||null,this.handlers=[],o.addEventListener(this.host,"message",o.bind(this.receive,this));

}var o=t(64);i.prototype.receive=function(t){var e,n,o,r;try{o=JSON.parse(t.data)}catch(s){return}for(r=o.type,n=new i.Message(this,t.source,o.data),e=0;e<this.handlers.length;e++)this.handlers[e].type===r&&this.handlers[e].handler(n)},i.prototype.send=function(t,e,n){try{t.postMessage(JSON.stringify({type:this._namespaceEvent(e),data:n}),"*")}catch(i){}},i.prototype.register=function(t,e){this.handlers.push({type:this._namespaceEvent(t),handler:e})},i.prototype.unregister=function(t,e){for(var n=this.handlers.length-1;n>=0;n--)if(this.handlers[n].type===t&&this.handlers[n].handler===e)return this.handlers.splice(n,1)},i.prototype._namespaceEvent=function(t){return this.channel?["braintree",this.channel,t].join(":"):t},i.Message=function(t,e,n){this.bus=t,this.source=e,this.content=n},i.Message.prototype.reply=function(t,e){this.bus.send(this.source,t,e)},e.exports=i},{64:64}],51:[function(t,e,n){"use strict";function i(t,e){this.bus=t,this.target=e,this.handlers=[],this.bus.register("publish",o.bind(this._handleMessage,this))}var o=t(64);i.prototype._handleMessage=function(t){var e,n=t.content,i=this.handlers[n.channel];if("undefined"!=typeof i)for(e=0;e<i.length;e++)i[e](n.data)},i.prototype.publish=function(t,e){this.bus.send(this.target,"publish",{channel:t,data:e})},i.prototype.subscribe=function(t,e){this.handlers[t]=this.handlers[t]||[],this.handlers[t].push(e)},i.prototype.unsubscribe=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n]===e&&i.splice(n,1)},e.exports=i},{64:64}],52:[function(t,e,n){"use strict";function i(t){this.bus=t,this.frames=[],this.handlers=[]}i.prototype.subscribe=function(t,e){this.handlers[t]=this.handlers[t]||[],this.handlers[t].push(e)},i.prototype.registerFrame=function(t){this.frames.push(t)},i.prototype.unregisterFrame=function(t){for(var e=0;e<this.frames.length;e++)this.frames[e]===t&&this.frames.splice(e,1)},i.prototype.publish=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n](e);for(n=0;n<this.frames.length;n++)this.bus.send(this.frames[n],"publish",{channel:t,data:e})},i.prototype.unsubscribe=function(t,e){var n,i=this.handlers[t];if("undefined"!=typeof i)for(n=0;n<i.length;n++)i[n]===e&&i.splice(n,1)},e.exports=i},{}],53:[function(t,e,n){"use strict";function i(t,e){this.bus=t,this.target=e||window.parent,this.counter=0,this.callbacks={},this.bus.register("rpc_response",o.bind(this._handleResponse,this))}var o=t(64);i.prototype._handleResponse=function(t){var e=t.content,n=this.callbacks[e.id];"function"==typeof n&&(n.apply(null,e.response),delete this.callbacks[e.id])},i.prototype.invoke=function(t,e,n){var i=this.counter++;this.callbacks[i]=n,this.bus.send(this.target,"rpc_request",{id:i,method:t,args:e})},e.exports=i},{64:64}],54:[function(t,e,n){"use strict";function i(t){this.bus=t,this.methods={},this.bus.register("rpc_request",o.bind(this._handleRequest,this))}var o=t(64);i.prototype._handleRequest=function(t){var e,n=t.content,i=n.args||[],o=this.methods[n.method];"function"==typeof o&&(e=function(){t.reply("rpc_response",{id:n.id,response:Array.prototype.slice.call(arguments)})},i.push(e),o.apply(null,i))},i.prototype.reset=function(){this.methods={}},i.prototype.define=function(t,e){this.methods[t]=e},e.exports=i},{64:64}],55:[function(t,e,n){var i=t(50),o=t(51),r=t(52),s=t(53),a=t(54);e.exports={MessageBus:i,PubsubClient:o,PubsubServer:r,RPCClient:s,RPCServer:a}},{50:50,51:51,52:52,53:53,54:54}],56:[function(t,e,n){arguments[4][15][0].apply(n,arguments)},{15:15}],57:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{16:16}],58:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{17:17}],59:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{18:18}],60:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{19:19}],61:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{20:20}],62:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{21:21,56:56}],63:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{22:22}],64:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{23:23,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63}],65:[function(t,e,n){arguments[4][15][0].apply(n,arguments)},{15:15}],66:[function(t,e,n){arguments[4][16][0].apply(n,arguments)},{16:16}],67:[function(t,e,n){arguments[4][17][0].apply(n,arguments)},{17:17}],68:[function(t,e,n){arguments[4][18][0].apply(n,arguments)},{18:18}],69:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{19:19}],70:[function(t,e,n){arguments[4][20][0].apply(n,arguments)},{20:20}],71:[function(t,e,n){arguments[4][21][0].apply(n,arguments)},{21:21,65:65}],72:[function(t,e,n){arguments[4][22][0].apply(n,arguments)},{22:22}],73:[function(t,e,n){arguments[4][23][0].apply(n,arguments)},{23:23,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72}],74:[function(t,e,n){"use strict";function i(t){if(!(this instanceof i))return new i(t);var e,n=r(t.className).split(/\s+/);for(this._elem=t,this.length=0,e=0;e<n.length;e+=1)n[e]&&s.push.call(this,n[e])}e.exports=i;var o=t(75),r=t(76),s=Array.prototype;i.prototype.add=function(){var t,e;for(e=0;e<arguments.length;e+=1)t=""+arguments[e],o(this,t)>=0||s.push.call(this,t);return this._elem.className=this.toString(),this},i.prototype.remove=function(){var t,e,n;for(n=0;n<arguments.length;n+=1)e=""+arguments[n],t=o(this,e),0>t||s.splice.call(this,t,1);return this._elem.className=this.toString(),this},i.prototype.contains=function(t){return t+="",o(this,t)>=0},i.prototype.toggle=function(t,e){return t+="",e===!0?this.add(t):e===!1?this.remove(t):this[this.contains(t)?"remove":"add"](t)},i.prototype.toString=function(){return s.join.call(this," ")}},{75:75,76:76}],75:[function(t,e,n){e.exports=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},{}],76:[function(t,e,n){function i(t){return t.replace(/^\s*|\s*$/g,"")}n=e.exports=i,n.left=function(t){return t.replace(/^\s*/,"")},n.right=function(t){return t.replace(/\s*$/,"")}},{}],77:[function(t,e,n){"use strict";function i(){this._teardownRegistry=[]}var o=t(78),r=t(79);i.prototype.registerFunctionForTeardown=function(t){r.isFunction(t)&&this._teardownRegistry.push(t)},i.prototype.teardown=function(t){o(this._teardownRegistry,r.bind(function(e){this._teardownRegistry=[],r.isFunction(t)&&t(e)},this))},e.exports=i},{78:78,79:79}],78:[function(t,e,n){"use strict";function i(t,e){var n,i=0===t.length;i?(t(),e(null)):(n=o(e),t(n))}function o(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}e.exports=function(t,e){var n=t.length,o=n;if(0===n)return void e(null);for(var r=0;n>r;r++)i(t[r],function(t){return t?void e(t):(o-=1,void(0===o&&e(null)))})}},{}],79:[function(t,e,n){arguments[4][19][0].apply(n,arguments)},{19:19}],80:[function(t,e,n){(function(t){"use strict";function n(t){if(("string"==typeof t||t instanceof String)&&(t=document.getElementById(t)),!(t instanceof HTMLFormElement))throw new TypeError("FormNapper requires an HTMLFormElement element or the id string of one.");this.htmlForm=t}n.prototype.hijack=function(e){this.submitHandler||(this.submitHandler=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,e(t)},null!=t.addEventListener?this.htmlForm.addEventListener("submit",this.submitHandler,!1):null!=t.attachEvent?this.htmlForm.attachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=this.submitHandler)},n.prototype.inject=function(t,e){var n=this.htmlForm.querySelector('input[name="'+t+'"]');return null==n&&(n=document.createElement("input"),n.type="hidden",n.name=t,this.htmlForm.appendChild(n)),n.value=e,n},n.prototype.submit=function(){HTMLFormElement.prototype.submit.call(this.htmlForm)},n.prototype.detach=function(){this.submitHandler&&(null!=t.removeEventListener?this.htmlForm.removeEventListener("submit",this.submitHandler,!1):null!=t.detachEvent?this.htmlForm.detachEvent("onsubmit",this.submitHandler):this.htmlForm.onsubmit=null,delete this.submitHandler)},e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],81:[function(e,n,i){"use strict";!function(e,o){"object"==typeof i&&"undefined"!=typeof n?n.exports=o():"function"==typeof t&&t.amd?t([],o):e.framebus=o()}(this,function(){function t(t){return null==t?!1:null==t.Window?!1:t.constructor!==t.Window?!1:(b.push(t),!0)}function e(t){var e,n={};for(e in _)_.hasOwnProperty(e)&&(n[e]=_[e]);return n._origin=t||"*",n}function n(t){var e,n,i=r(this);return s(t)?!1:s(i)?!1:(n=Array.prototype.slice.call(arguments,1),e=a(t,n,i),e===!1?!1:(f(v.top,e,i),!0))}function i(t,e){var n=r(this);return g(t,e,n)?!1:(E[n]=E[n]||{},E[n][t]=E[n][t]||[],E[n][t].push(e),!0)}function o(t,e){var n,i,o=r(this);if(g(t,e,o))return!1;if(i=E[o]&&E[o][t],!i)return!1;for(n=0;n<i.length;n++)if(i[n]===e)return i.splice(n,1),!0;return!1}function r(t){return t&&t._origin||"*"}function s(t){return"string"!=typeof t}function a(t,e,n){var i=!1,o={event:t,origin:n},r=e[e.length-1];"function"==typeof r&&(o.reply=y(r,n),e=e.slice(0,-1)),o.args=e;try{i=w+JSON.stringify(o)}catch(s){throw new Error("Could not stringify event: "+s.message)}return i}function c(t){var e,n,i,o;if(t.data.slice(0,w.length)!==w)return!1;try{e=JSON.parse(t.data.slice(w.length))}catch(r){return!1}return null!=e.reply&&(n=t.origin,i=t.source,o=e.reply,e.reply=function(t){var e=a(o,[t],n);return e===!1?!1:void i.postMessage(e,n)},e.args.push(e.reply)),e}function u(t){v||(v=t||window,v.addEventListener?v.addEventListener("message",h,!1):v.attachEvent?v.attachEvent("onmessage",h):null===v.onmessage?v.onmessage=h:v=null)}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}function h(t){var e;s(t.data)||(e=c(t),e&&(p("*",e.event,e.args,t),p(t.origin,e.event,e.args,t),m(t.data,e.origin,t.source)))}function p(t,e,n,i){var o;if(E[t]&&E[t][e])for(o=0;o<E[t][e].length;o++)E[t][e][o].apply(i,n)}function d(t){return t.top!==t?!1:null==t.opener?!1:t.opener===t?!1:t.opener.closed===!0?!1:!0}function f(t,e,n){var i;try{for(t.postMessage(e,n),d(t)&&f(t.opener.top,e,n),i=0;i<t.frames.length;i++)f(t.frames[i],e,n)}catch(o){}}function m(t,e,n){var i,o;for(i=b.length-1;i>=0;i--)o=b[i],o.closed===!0?b=b.slice(i,1):n!==o&&f(o.top,t,e)}function y(t,e){function n(o,r){t(o,r),_.target(e).unsubscribe(i,n)}var i=l();return _.target(e).subscribe(i,n),i}function g(t,e,n){return s(t)?!0:"function"!=typeof e?!0:s(n)?!0:!1}var v,_,b=[],E={},w="/*framebus*/";return u(),_={target:e,include:t,publish:n,pub:n,trigger:n,emit:n,subscribe:i,sub:i,on:i,unsubscribe:o,unsub:o,off:o}})},{}],82:[function(t,e,n){"use strict";var i=t(150),o=t(149),r=t(84),s=t(83);e.exports=function(t){var e=document.createElement("iframe"),n=i({},s,t);return n.style&&!o(n.style)&&(i(e.style,n.style),delete n.style),r(e,n),e.getAttribute("id")||(e.id=e.name),e}},{149:149,150:150,83:83,84:84}],83:[function(t,e,n){e.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],84:[function(t,e,n){e.exports=function(t,e){var n;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],null==n?t.removeAttribute(i):t.setAttribute(i,n))}},{}],85:[function(t,e,n){function i(t){if(c(t)&&!a(t)&&!(t instanceof o)){if(t instanceof r)return t;if(h.call(t,"__chain__")&&h.call(t,"__wrapped__"))return u(t)}return new r(t)}var o=t(92),r=t(93),s=t(107),a=t(145),c=t(133),u=t(142),l=Object.prototype,h=l.hasOwnProperty;i.prototype=s.prototype,e.exports=i},{107:107,133:133,142:142,145:145,92:92,93:93}],86:[function(t,e,n){var i=t(124),o=i(Date,"now"),r=o||function(){return(new Date).getTime()};e.exports=r},{124:124}],87:[function(t,e,n){var i=t(120),o=t(138),r=t(91),s=1,a=32,c=r(function(t,e,n){var r=s;if(n.length){var u=o(n,c.placeholder);r|=a}return i(t,r,e,n,u)});c.placeholder={},e.exports=c},{120:120,138:138,91:91}],88:[function(t,e,n){var i=t(103),o=t(120),r=t(152),s=t(91),a=1,c=s(function(t,e){e=e.length?i(e):r(t);for(var n=-1,s=e.length;++n<s;){var c=e[n];t[c]=o(t[c],a,t)}return t});e.exports=c},{103:103,120:120,152:152,91:91}],89:[function(t,e,n){function i(t,e,n){function i(){g&&clearTimeout(g),d&&clearTimeout(d),_=0,d=g=v=void 0}function c(e,n){n&&clearTimeout(n),d=g=v=void 0,e&&(_=r(),f=t.apply(y,p),g||d||(p=y=void 0))}function u(){var t=e-(r()-m);0>=t||t>e?c(v,d):g=setTimeout(u,t)}function l(){c(E,g)}function h(){if(p=arguments,m=r(),y=this,v=E&&(g||!w),b===!1)var n=w&&!g;else{d||w||(_=m);var i=b-(m-_),o=0>=i||i>b;o?(d&&(d=clearTimeout(d)),_=m,f=t.apply(y,p)):d||(d=setTimeout(l,i))}return o&&g?g=clearTimeout(g):g||e===b||(g=setTimeout(u,e)),n&&(o=!0,f=t.apply(y,p)),!o||g||d||(p=y=void 0),f}var p,d,f,m,y,g,v,_=0,b=!1,E=!0;if("function"!=typeof t)throw new TypeError(s);if(e=0>e?0:+e||0,n===!0){var w=!0;E=!1}else o(n)&&(w=!!n.leading,b="maxWait"in n&&a(+n.maxWait||0,e),E="trailing"in n?!!n.trailing:E);return h.cancel=i,h}var o=t(148),r=t(86),s="Expected a function",a=Math.max;e.exports=i},{148:148,86:86}],90:[function(t,e,n){var i=t(102),o=t(91),r=o(function(t,e){return i(t,1,e)});e.exports=r},{102:102,91:91}],91:[function(t,e,n){function i(t,e){if("function"!=typeof t)throw new TypeError(o);return e=r(void 0===e?t.length-1:+e||0,0),function(){for(var n=arguments,i=-1,o=r(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];switch(e){case 0:return t.call(this,s);case 1:return t.call(this,n[0],s);case 2:return t.call(this,n[0],n[1],s)}var a=Array(e+1);for(i=-1;++i<e;)a[i]=n[i];return a[e]=s,t.apply(this,a)}}var o="Expected a function",r=Math.max;e.exports=i},{}],92:[function(t,e,n){function i(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=s,this.__views__=[]}var o=t(101),r=t(107),s=Number.POSITIVE_INFINITY;i.prototype=o(r.prototype),i.prototype.constructor=i,e.exports=i},{101:101,107:107}],93:[function(t,e,n){function i(t,e,n){this.__wrapped__=t,this.__actions__=n||[],this.__chain__=!!e}var o=t(101),r=t(107);i.prototype=o(r.prototype),i.prototype.constructor=i,e.exports=i},{101:101,107:107}],94:[function(t,e,n){function i(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}e.exports=i},{}],95:[function(t,e,n){function i(t,e){for(var n=-1,i=t.length;++n<i&&e(t[n],n,t)!==!1;);return t}e.exports=i},{}],96:[function(t,e,n){function i(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}e.exports=i},{}],97:[function(t,e,n){function i(t,e,n){for(var i=-1,r=o(e),s=r.length;++i<s;){var a=r[i],c=t[a],u=n(c,e[a],a,t,e);(u===u?u===c:c!==c)&&(void 0!==c||a in t)||(t[a]=u)}return t}var o=t(153);e.exports=i},{153:153}],98:[function(t,e,n){function i(t,e){return null==e?t:o(e,r(e),t)}var o=t(100),r=t(153);e.exports=i},{100:100,153:153}],99:[function(t,e,n){function i(t,e,n,f,m,y,g){var _;if(n&&(_=m?n(t,f,m):n(t)),void 0!==_)return _;if(!p(t))return t;var b=h(t);if(b){if(_=c(t),!e)return o(t,_)}else{var w=k.call(t),A=w==v;if(w!=E&&w!=d&&(!A||m))return F[w]?u(t,w,e):m?t:{};if(_=l(A?{}:t),!e)return s(_,t)}y||(y=[]),g||(g=[]);for(var C=y.length;C--;)if(y[C]==t)return g[C];return y.push(t),g.push(_),(b?r:a)(t,function(o,r){_[r]=i(o,e,n,r,t,y,g)}),_}var o=t(94),r=t(95),s=t(98),a=t(105),c=t(125),u=t(126),l=t(127),h=t(145),p=t(148),d="[object Arguments]",f="[object Array]",m="[object Boolean]",y="[object Date]",g="[object Error]",v="[object Function]",_="[object Map]",b="[object Number]",E="[object Object]",w="[object RegExp]",A="[object Set]",C="[object String]",N="[object WeakMap]",T="[object ArrayBuffer]",I="[object Float32Array]",S="[object Float64Array]",x="[object Int8Array]",P="[object Int16Array]",O="[object Int32Array]",R="[object Uint8Array]",D="[object Uint8ClampedArray]",M="[object Uint16Array]",U="[object Uint32Array]",F={};F[d]=F[f]=F[T]=F[m]=F[y]=F[I]=F[S]=F[x]=F[P]=F[O]=F[b]=F[E]=F[w]=F[C]=F[R]=F[D]=F[M]=F[U]=!0,F[g]=F[v]=F[_]=F[A]=F[N]=!1;var L=Object.prototype,k=L.toString;e.exports=i},{105:105,125:125,126:126,127:127,145:145,148:148,94:94,95:95,98:98}],100:[function(t,e,n){function i(t,e,n){n||(n={});for(var i=-1,o=e.length;++i<o;){var r=e[i];n[r]=t[r]}return n}e.exports=i},{}],101:[function(t,e,n){var i=t(148),o=function(){function t(){}return function(e){if(i(e)){t.prototype=e;var n=new t;t.prototype=void 0}return n||{}}}();e.exports=o},{148:148}],102:[function(t,e,n){function i(t,e,n){if("function"!=typeof t)throw new TypeError(o);return setTimeout(function(){t.apply(void 0,n)},e)}var o="Expected a function";e.exports=i},{}],103:[function(t,e,n){function i(t,e,n,u){u||(u=[]);for(var l=-1,h=t.length;++l<h;){var p=t[l];c(p)&&a(p)&&(n||s(p)||r(p))?e?i(p,e,n,u):o(u,p):n||(u[u.length]=p)}return u}var o=t(96),r=t(144),s=t(145),a=t(128),c=t(133);e.exports=i},{128:128,133:133,144:144,145:145,96:96}],104:[function(t,e,n){var i=t(115),o=i();e.exports=o},{115:115}],105:[function(t,e,n){function i(t,e){return o(t,e,r)}var o=t(104),r=t(153);e.exports=i},{104:104,153:153}],106:[function(t,e,n){function i(t,e){for(var n=-1,i=e.length,r=-1,s=[];++n<i;){var a=e[n];o(t[a])&&(s[++r]=a)}return s}var o=t(146);e.exports=i},{146:146}],107:[function(t,e,n){function i(){}e.exports=i},{}],108:[function(t,e,n){function i(t){return function(e){return null==e?void 0:e[t]}}e.exports=i},{}],109:[function(t,e,n){var i=t(155),o=t(135),r=o?function(t,e){return o.set(t,e),t}:i;e.exports=r},{135:135,155:155}],110:[function(t,e,n){function i(t,e,n){if("function"!=typeof t)return o;if(void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,i,o){return t.call(e,n,i,o)};case 4:return function(n,i,o,r){return t.call(e,n,i,o,r)};case 5:return function(n,i,o,r,s){return t.call(e,n,i,o,r,s)}}return function(){return t.apply(e,arguments)}}var o=t(155);e.exports=i},{155:155}],111:[function(t,e,n){(function(t){function n(t){var e=new i(t.byteLength),n=new o(e);return n.set(new o(t)),e}var i=t.ArrayBuffer,o=t.Uint8Array;e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],112:[function(t,e,n){function i(t,e,n){for(var i=n.length,r=-1,s=o(t.length-i,0),a=-1,c=e.length,u=Array(c+s);++a<c;)u[a]=e[a];for(;++r<i;)u[n[r]]=t[r];for(;s--;)u[a++]=t[r++];return u}var o=Math.max;e.exports=i},{}],113:[function(t,e,n){function i(t,e,n){for(var i=-1,r=n.length,s=-1,a=o(t.length-r,0),c=-1,u=e.length,l=Array(a+u);++s<a;)l[s]=t[s];for(var h=s;++c<u;)l[h+c]=e[c];for(;++i<r;)l[h+n[i]]=t[s++];return l}var o=Math.max;e.exports=i},{}],114:[function(t,e,n){function i(t){return s(function(e,n){var i=-1,s=null==e?0:n.length,a=s>2?n[s-2]:void 0,c=s>2?n[2]:void 0,u=s>1?n[s-1]:void 0;for("function"==typeof a?(a=o(a,u,5),s-=2):(a="function"==typeof u?u:void 0,s-=a?1:0),c&&r(n[0],n[1],c)&&(a=3>s?void 0:a,s=1);++i<s;){var l=n[i];l&&t(e,l,a)}return e})}var o=t(110),r=t(130),s=t(91);e.exports=i},{110:110,130:130,91:91}],115:[function(t,e,n){function i(t){return function(e,n,i){for(var r=o(e),s=i(e),a=s.length,c=t?a:-1;t?c--:++c<a;){var u=s[c];if(n(r[u],u,r)===!1)break}return e}}var o=t(141);e.exports=i},{141:141}],116:[function(t,e,n){(function(n){function i(t,e){function i(){var o=this&&this!==n&&this instanceof i?r:t;return o.apply(e,arguments)}var r=o(t);return i}var o=t(117);e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{117:117}],117:[function(t,e,n){function i(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=o(t.prototype),i=t.apply(n,e);return r(i)?i:n}}var o=t(101),r=t(148);e.exports=i},{101:101,148:148}],118:[function(t,e,n){(function(n){function i(t,e,E,w,A,C,N,T,I,S){function x(){for(var f=arguments.length,m=f,y=Array(f);m--;)y[m]=arguments[m];if(w&&(y=r(y,w,A)),C&&(y=s(y,C,N)),D||U){var _=x.placeholder,L=l(y,_);if(f-=L.length,S>f){var k=T?o(T):void 0,B=b(S-f,0),j=D?L:void 0,V=D?void 0:L,H=D?y:void 0,z=D?void 0:y;e|=D?g:v,e&=~(D?v:g),M||(e&=~(p|d));var Y=[t,e,E,H,j,z,V,k,I,B],G=i.apply(void 0,Y);return c(t)&&h(G,Y),G.placeholder=_,G}}var W=O?E:this,q=R?W[t]:t;return T&&(y=u(y,T)),P&&I<y.length&&(y.length=I),this&&this!==n&&this instanceof x&&(q=F||a(t)),q.apply(W,y)}var P=e&_,O=e&p,R=e&d,D=e&m,M=e&f,U=e&y,F=R?void 0:a(t);return x}var o=t(94),r=t(112),s=t(113),a=t(117),c=t(131),u=t(137),l=t(138),h=t(139),p=1,d=2,f=4,m=8,y=16,g=32,v=64,_=128,b=Math.max;e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{112:112,113:113,117:117,131:131,137:137,138:138,139:139,94:94}],119:[function(t,e,n){(function(n){function i(t,e,i,s){function a(){for(var e=-1,o=arguments.length,r=-1,l=s.length,h=Array(l+o);++r<l;)h[r]=s[r];for(;o--;)h[r++]=arguments[++e];var p=this&&this!==n&&this instanceof a?u:t;return p.apply(c?i:this,h)}var c=e&r,u=o(t);return a}var o=t(117),r=1;e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{117:117}],120:[function(t,e,n){function i(t,e,n,i,g,v,_,b){var E=e&p;if(!E&&"function"!=typeof t)throw new TypeError(m);var w=i?i.length:0;if(w||(e&=~(d|f),i=g=void 0),w-=g?g.length:0,e&f){var A=i,C=g;i=g=void 0}var N=E?void 0:c(t),T=[t,e,n,i,g,A,C,v,_,b];if(N&&(u(T,N),e=T[1],b=T[9]),T[9]=null==b?E?0:t.length:y(b-w,0)||0,e==h)var I=r(T[0],T[2]);else I=e!=d&&e!=(h|d)||T[4].length?s.apply(void 0,T):a.apply(void 0,T);var S=N?o:l;return S(I,T)}var o=t(109),r=t(116),s=t(118),a=t(119),c=t(121),u=t(134),l=t(139),h=1,p=2,d=32,f=64,m="Expected a function",y=Math.max;e.exports=i},{109:109,116:116,118:118,119:119,121:121,134:134,139:139}],121:[function(t,e,n){var i=t(135),o=t(156),r=i?function(t){return i.get(t)}:o;e.exports=r},{135:135,156:156}],122:[function(t,e,n){function i(t){for(var e=t.name+"",n=o[e],i=n?n.length:0;i--;){var r=n[i],s=r.func;if(null==s||s==t)return r.name}return e}var o=t(136);e.exports=i},{136:136}],123:[function(t,e,n){var i=t(108),o=i("length");e.exports=o},{108:108}],124:[function(t,e,n){function i(t,e){var n=null==t?void 0:t[e];return o(n)?n:void 0}var o=t(147);e.exports=i},{147:147}],125:[function(t,e,n){function i(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var o=Object.prototype,r=o.hasOwnProperty;e.exports=i},{}],126:[function(t,e,n){function i(t,e,n){var i=t.constructor;switch(e){case l:return o(t);case r:case s:return new i(+t);case h:case p:case d:case f:case m:case y:case g:case v:case _:var E=t.buffer;return new i(n?o(E):E,t.byteOffset,t.length);case a:case u:return new i(t);case c:var w=new i(t.source,b.exec(t));w.lastIndex=t.lastIndex}return w}var o=t(111),r="[object Boolean]",s="[object Date]",a="[object Number]",c="[object RegExp]",u="[object String]",l="[object ArrayBuffer]",h="[object Float32Array]",p="[object Float64Array]",d="[object Int8Array]",f="[object Int16Array]",m="[object Int32Array]",y="[object Uint8Array]",g="[object Uint8ClampedArray]",v="[object Uint16Array]",_="[object Uint32Array]",b=/\w*$/;e.exports=i},{111:111}],127:[function(t,e,n){function i(t){var e=t.constructor;return"function"==typeof e&&e instanceof e||(e=Object),new e}e.exports=i},{}],128:[function(t,e,n){function i(t){return null!=t&&r(o(t))}var o=t(123),r=t(132);e.exports=i},{123:123,132:132}],129:[function(t,e,n){function i(t,e){return t="number"==typeof t||o.test(t)?+t:-1,e=null==e?r:e,t>-1&&t%1==0&&e>t}var o=/^\d+$/,r=9007199254740991;e.exports=i},{}],130:[function(t,e,n){function i(t,e,n){if(!s(n))return!1;var i=typeof e;if("number"==i?o(n)&&r(e,n.length):"string"==i&&e in n){var a=n[e];return t===t?t===a:a!==a}return!1}var o=t(128),r=t(129),s=t(148);e.exports=i},{128:128,129:129,148:148}],131:[function(t,e,n){function i(t){var e=s(t),n=a[e];if("function"!=typeof n||!(e in o.prototype))return!1;if(t===n)return!0;var i=r(n);return!!i&&t===i[0]}var o=t(92),r=t(121),s=t(122),a=t(85);e.exports=i},{121:121,122:122,85:85,92:92}],132:[function(t,e,n){function i(t){return"number"==typeof t&&t>-1&&t%1==0&&o>=t}var o=9007199254740991;e.exports=i},{}],133:[function(t,e,n){function i(t){return!!t&&"object"==typeof t}e.exports=i},{}],134:[function(t,e,n){function i(t,e){var n=t[1],i=e[1],m=n|i,y=h>m,g=i==h&&n==l||i==h&&n==p&&t[7].length<=e[8]||i==(h|p)&&n==l;if(!y&&!g)return t;i&c&&(t[2]=e[2],m|=n&c?0:u);var v=e[3];if(v){var _=t[3];t[3]=_?r(_,v,e[4]):o(v),t[4]=_?a(t[3],d):o(e[4])}return v=e[5],v&&(_=t[5],t[5]=_?s(_,v,e[6]):o(v),t[6]=_?a(t[5],d):o(e[6])),v=e[7],v&&(t[7]=o(v)),i&h&&(t[8]=null==t[8]?e[8]:f(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=m,t}var o=t(94),r=t(112),s=t(113),a=t(138),c=1,u=4,l=8,h=128,p=256,d="__lodash_placeholder__",f=Math.min;e.exports=i},{112:112,113:113,138:138,94:94}],135:[function(t,e,n){(function(n){var i=t(124),o=i(n,"WeakMap"),r=o&&new o;e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{124:124}],136:[function(t,e,n){var i={};e.exports=i},{}],137:[function(t,e,n){function i(t,e){for(var n=t.length,i=s(e.length,n),a=o(t);i--;){var c=e[i];t[i]=r(c,n)?a[c]:void 0}return t}var o=t(94),r=t(129),s=Math.min;e.exports=i},{129:129,94:94}],138:[function(t,e,n){function i(t,e){for(var n=-1,i=t.length,r=-1,s=[];++n<i;)t[n]===e&&(t[n]=o,s[++r]=n);return s}var o="__lodash_placeholder__";e.exports=i},{}],139:[function(t,e,n){var i=t(109),o=t(86),r=150,s=16,a=function(){var t=0,e=0;return function(n,a){var c=o(),u=s-(c-e);if(e=c,u>0){if(++t>=r)return n}else t=0;return i(n,a)}}();e.exports=a},{109:109,86:86}],140:[function(t,e,n){function i(t){for(var e=c(t),n=e.length,i=n&&t.length,u=!!i&&a(i)&&(r(t)||o(t)),h=-1,p=[];++h<n;){var d=e[h];(u&&s(d,i)||l.call(t,d))&&p.push(d)}return p}var o=t(144),r=t(145),s=t(129),a=t(132),c=t(154),u=Object.prototype,l=u.hasOwnProperty;e.exports=i},{129:129,132:132,144:144,145:145,154:154}],141:[function(t,e,n){function i(t){return o(t)?t:Object(t)}var o=t(148);e.exports=i},{148:148}],142:[function(t,e,n){function i(t){return t instanceof o?t.clone():new r(t.__wrapped__,t.__chain__,s(t.__actions__))}var o=t(92),r=t(93),s=t(94);e.exports=i},{92:92,93:93,94:94}],143:[function(t,e,n){function i(t,e,n){return"function"==typeof e?o(t,!0,r(e,n,3)):o(t,!0)}var o=t(99),r=t(110);e.exports=i},{110:110,99:99}],144:[function(t,e,n){function i(t){return r(t)&&o(t)&&a.call(t,"callee")&&!c.call(t,"callee")}var o=t(128),r=t(133),s=Object.prototype,a=s.hasOwnProperty,c=s.propertyIsEnumerable;e.exports=i},{128:128,133:133}],145:[function(t,e,n){var i=t(124),o=t(132),r=t(133),s="[object Array]",a=Object.prototype,c=a.toString,u=i(Array,"isArray"),l=u||function(t){return r(t)&&o(t.length)&&c.call(t)==s};e.exports=l},{124:124,132:132,133:133}],146:[function(t,e,n){function i(t){return o(t)&&a.call(t)==r}var o=t(148),r="[object Function]",s=Object.prototype,a=s.toString;e.exports=i},{148:148}],147:[function(t,e,n){function i(t){return null==t?!1:o(t)?l.test(c.call(t)):r(t)&&s.test(t)}var o=t(146),r=t(133),s=/^\[object .+?Constructor\]$/,a=Object.prototype,c=Function.prototype.toString,u=a.hasOwnProperty,l=RegExp("^"+c.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=i},{133:133,146:146}],148:[function(t,e,n){function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}e.exports=i},{}],149:[function(t,e,n){function i(t){return"string"==typeof t||o(t)&&a.call(t)==r}var o=t(133),r="[object String]",s=Object.prototype,a=s.toString;e.exports=i},{133:133}],150:[function(t,e,n){var i=t(97),o=t(98),r=t(114),s=r(function(t,e,n){return n?i(t,e,n):o(t,e)});e.exports=s},{114:114,97:97,98:98}],151:[function(t,e,n){function i(t,e,n){var i=r(t);return n&&s(t,e,n)&&(e=void 0),e?o(i,e):i}var o=t(98),r=t(101),s=t(130);e.exports=i},{101:101,130:130,98:98}],152:[function(t,e,n){function i(t){return o(t,r(t))}var o=t(106),r=t(154);e.exports=i},{106:106,154:154}],153:[function(t,e,n){var i=t(124),o=t(128),r=t(148),s=t(140),a=i(Object,"keys"),c=a?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?s(t):r(t)?a(t):[]}:s;e.exports=c},{124:124,128:128,140:140,148:148}],154:[function(t,e,n){function i(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&a(e)&&(r(t)||o(t))&&e||0;for(var n=t.constructor,i=-1,u="function"==typeof n&&n.prototype===t,h=Array(e),p=e>0;++i<e;)h[i]=i+"";for(var d in t)p&&s(d,e)||"constructor"==d&&(u||!l.call(t,d))||h.push(d);return h}var o=t(144),r=t(145),s=t(129),a=t(132),c=t(148),u=Object.prototype,l=u.hasOwnProperty;e.exports=i},{129:129,132:132,144:144,145:145,148:148}],155:[function(t,e,n){function i(t){return t}e.exports=i},{}],156:[function(t,e,n){function i(){}e.exports=i},{}],157:[function(t,e,n){function i(t){try{return Array.prototype.slice.call(t)}catch(e){for(var n=[],i=0;i<t.length;i++)n.push(t[i]);return n}}"undefined"!=typeof e&&(e.exports=i)},{}],158:[function(t,e,n){"use strict";function i(t){if(t=t||{},this.channel=t.channel,!this.channel)throw new Error("Channel ID must be specified");this.merchantUrl=t.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var o=t(81),r=t(160),s=t(159).checkOrigin;i.prototype.on=function(t,e){var n,i,r=e,a=this;this._isDestroyed||(this.merchantUrl&&(r=function(){s(this.origin,a.merchantUrl)&&e.apply(this,arguments)}),n=this._namespaceEvent(t),i=Array.prototype.slice.call(arguments),i[0]=n,i[1]=r,this._log("on",i),o.on.apply(o,i),this._listeners.push({eventName:t,handler:r,originalHandler:e}))},i.prototype.emit=function(t){var e;this._isDestroyed||(e=Array.prototype.slice.call(arguments),e[0]=this._namespaceEvent(t),this._log("emit",e),o.emit.apply(o,e))},i.prototype._offDirect=function(t){var e=Array.prototype.slice.call(arguments);this._isDestroyed||(e[0]=this._namespaceEvent(t),this._log("off",e),o.off.apply(o,e))},i.prototype.off=function(t,e){var n,i,o=e;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)i=this._listeners[n],i.originalHandler===e&&(o=i.handler);this._offDirect(t,o)}},i.prototype._namespaceEvent=function(t){return["braintree",this.channel,t].join(":")},i.prototype.teardown=function(){var t,e;for(e=0;e<this._listeners.length;e++)t=this._listeners[e],this._offDirect(t.eventName,t.handler);this._listeners.length=0,this._isDestroyed=!0},i.prototype._log=function(t,e){this._isVerbose&&console.log(t,e)},i.events=r,e.exports=i},{159:159,160:160,81:81}],159:[function(t,e,n){"use strict";function i(t,e){var n,i,r=document.createElement("a");return r.href=e,i="https:"===r.protocol?r.host.replace(/:443$/,""):"http:"===r.protocol?r.host.replace(/:80$/,""):r.host,n=r.protocol+"//"+i,n===t||o.test(t)}var o=/^https:\/\/([a-zA-Z0-9-]+\.)*(braintreepayments|braintreegateway|paypal)\.com(:\d{1,5})?$/;e.exports={checkOrigin:i}},{}],160:[function(t,e,n){"use strict";var i,o,r=["PAYMENT_METHOD_REQUEST","PAYMENT_METHOD_RECEIVED","PAYMENT_METHOD_GENERATED","PAYMENT_METHOD_NOT_GENERATED","PAYMENT_METHOD_CANCELLED","PAYMENT_METHOD_ERROR","CONFIGURATION_REQUEST","ROOT_METADATA_REQUEST","ERROR","WARNING","UI_POPUP_DID_OPEN","UI_POPUP_DID_CLOSE","UI_POPUP_FORCE_CLOSE","UI_MODAL_DID_OPEN","UI_MODAL_DID_CLOSE","ASYNC_DEPENDENCY_INITIALIZING","ASYNC_DEPENDENCY_READY","USER_FORM_SUBMIT_REQUEST","SEND_ANALYTICS_EVENTS"],s={};for(i=0;i<r.length;i++)o=r[i],s[o]=o;e.exports=s},{}],161:[function(t,e,n){"use strict";function i(t){var e,n={};if(t){for(e in t)t.hasOwnProperty(e)&&(n[o(e)]=t[e]);return n}}function o(t){return t.replace(/([A-Z])/g,function(t){return"_"+t.toLowerCase()})}e.exports={convertToLegacyShippingAddress:i
}},{}],162:[function(t,e,n){"use strict";e.exports={ROOT_SUCCESS_CALLBACK:"onPaymentMethodReceived",ROOT_ERROR_CALLBACK:"onError",ROOT_READY_CALLBACK:"onReady",TEARDOWN_STATE:{IN_PROGRESS:"inProgress",COMPLETE:"complete"}}},{}],163:[function(t,e,n){(function(n){"use strict";function i(){}function o(t){t.paypal=t.paypal||{}}function r(){this._dependenciesRemaining++}function s(){this._dependenciesRemaining--,0===this._dependenciesRemaining&&(delete this._dependenciesRemaining,this.bus.off(l.events.ASYNC_DEPENDENCY_INITIALIZING,this._handleDependencyInitializing),this.bus.off(l.events.ASYNC_DEPENDENCY_READY,this._handleDependencyReady),this._onIntegrationReady())}function a(t){this.configuration=t,this.isReady=!1,this.destructor=new h,this.bus=new l({channel:this.configuration.channel,merchantUrl:n.location.href}),this.apiClient=new u.Client(this.configuration),this._configureCallbacks(),this._configureAnalytics(),this._attachEvents(),this._emitInitializing()}var c=t(169).cloneAndStripDOM,u=t(14),l=t(158),h=t(77),p=t(87),d=t(162),f=t(174),m=t(172),y=t(170),g=t(188);a.prototype._emitInitializing=function(){this.bus.emit(l.events.ASYNC_DEPENDENCY_INITIALIZING)},a.prototype._configureCallbacks=function(){function t(t){return function(e){t(f(e))}}var e=m(this.configuration.merchantConfiguration);this.onSuccess=t(e(d.ROOT_SUCCESS_CALLBACK)),this.onError=e(d.ROOT_ERROR_CALLBACK,y),this.onReady=e(d.ROOT_READY_CALLBACK)},a.prototype._configureAnalytics=function(){var t="web."+this.configuration.integrationType+".",e=this.apiClient;this.bus.on(l.events.SEND_ANALYTICS_EVENTS,function(n,i){var o;for(n instanceof Array||(n=[n]),o=0;o<n.length;o++)n[o]=t+n[o];e.sendAnalyticsEvents(n,i)})},a.prototype._attachEvents=function(){var t=c(this.configuration);"dropin"===t.integrationType&&o(t.merchantConfiguration),this.bus.on(l.events.ERROR,this.onError),this.bus.on(l.events.PAYMENT_METHOD_RECEIVED,this.onSuccess),this.bus.on(l.events.WARNING,function(t){try{console.warn(t)}catch(e){}}),this.bus.on(l.events.CONFIGURATION_REQUEST,function(e){e(t)}),this._dependenciesRemaining=0,this._handleDependencyInitializing=p(r,this),this._handleDependencyReady=p(s,this),this.bus.on(l.events.ASYNC_DEPENDENCY_INITIALIZING,this._handleDependencyInitializing),this.bus.on(l.events.ASYNC_DEPENDENCY_READY,this._handleDependencyReady)},a.prototype._addDeviceData=function(t){var e,n=this.configuration.merchantConfiguration,i=this.configuration.gatewayConfiguration,o={};if(null!=n.dataCollector&&(i.kount&&n.dataCollector.kount&&(o.kount={merchantId:n.dataCollector.kount.merchantId||i.kount.kountMerchantId,environment:n.dataCollector.kount.environment||i.environment}),o.paypal=n.dataCollector.paypal===!0,o.kount||o.paypal)){try{e=g.setup(o)}catch(r){this.bus.emit(l.events.ERROR,{type:"CONFIGURATION",message:r.message})}null!=e&&(this.destructor.registerFunctionForTeardown(function(){e.teardown()}),t.deviceData=e.deviceData)}},a.prototype.teardown=function(t){if(this.teardownState===d.TEARDOWN_STATE.IN_PROGRESS)throw new Error("Cannot call teardown while in progress");if(this.teardownState===d.TEARDOWN_STATE.COMPLETE)throw new Error("Cannot teardown integration more than once");this.teardownMerchantCallback=t||i,this.teardownState=d.TEARDOWN_STATE.IN_PROGRESS,this.destructor.teardown(p(this._handleTeardown,this))},a.prototype._handleTeardown=function(){this.bus.teardown(),this.teardownState=d.TEARDOWN_STATE.COMPLETE,this.teardownMerchantCallback()},a.prototype._wrapWithTeardownReply=function(t,e){var n=this;return function(){if(n.teardownState===d.TEARDOWN_STATE.IN_PROGRESS)throw new Error("Cannot call "+t+" while teardown is in progress");if(n.teardownState===d.TEARDOWN_STATE.COMPLETE)throw new Error("Cannot call "+t+" after teardown has completed");e()}},a.prototype._onIntegrationReady=function(t){this.returnedInstance=t||{},this.returnedInstance.teardown=p(this.teardown,this),this._addDeviceData(this.returnedInstance),this.isReady=!0,this.onReady(this.returnedInstance)},e.exports=a}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{14:14,158:158,162:162,169:169,170:170,172:172,174:174,188:188,77:77,87:87}],164:[function(t,e,n){"use strict";function i(){var t,e;u.apply(this,arguments),e=o(this.configuration),e.apiClient=this.apiClient,this._attachBusEvents(),t=a.create(e),null!=t&&this.destructor.registerFunctionForTeardown(function(e){t.teardown(e)}),this.bus.emit(c.events.ASYNC_DEPENDENCY_READY)}var o=t(169).cloneAndPreserveDOM,r=t(151),s=t(87),a=t(176),c=t(158),u=t(163);i.prototype=r(u.prototype,{constructor:i}),i.prototype._attachBusEvents=function(){this.bus.on(c.events.PAYMENT_METHOD_GENERATED,s(this._onPaymentMethodGenerated,this))},i.prototype._onPaymentMethodGenerated=function(t){this.bus.emit(c.events.PAYMENT_METHOD_RECEIVED,t)},e.exports=i},{151:151,158:158,163:163,169:169,176:176,87:87}],165:[function(t,e,n){"use strict";function i(){_.apply(this,arguments),null!=this.configuration.merchantConfiguration.hostedFields?this._setupHostedFields():this._setupForm(),this._setupPayPal(),this._setupCoinbase(),this.bus.emit(g.events.ASYNC_DEPENDENCY_READY)}function o(t,e){return function(n){return e in t&&d(t[e][n])?t[e][n]:function(){}}}var r=t(169).cloneAndPreserveDOM,s=t(151),a=t(89),c=t(90),u=t(197),l=t(209),h=t(176),p=t(87),d=t(146),f=t(203),m=t(80),y=t(162),g=t(158),v=t(161).convertToLegacyShippingAddress,_=t(163),b=t(171);i.prototype=s(_.prototype,{constructor:i}),i.prototype._setupHostedFields=function(){var t,e=this.configuration.merchantConfiguration,n=e[y.ROOT_SUCCESS_CALLBACK],i=new m(e.id),o=f.create(this.configuration),r=new b({formNapper:i,rootCallback:n,channel:this.configuration.channel});return null==i.htmlForm?void this.bus.emit(g.events.ERROR,{type:"CONFIGURATION",message:"options.id does not reference a valid DOM element"}):(t=p(r.handleSubmitRequest,r),i.hijack(t),this.bus.on(g.events.USER_FORM_SUBMIT_REQUEST,t),void this.destructor.registerFunctionForTeardown(p(function(t){r.teardown(),i.detach(),o.teardown(t)},this)))},i.prototype._setupForm=function(){var t,e,n,i=this.configuration.merchantConfiguration;i.id?(n=u.setup(this.apiClient,this.configuration),t=!d(i[y.ROOT_SUCCESS_CALLBACK]),t||(e=this.onSuccess,n.onNonceReceived=p(function(t,n){t?this.bus.emit(g.events.ERROR,t):e(n)},this)),this.destructor.registerFunctionForTeardown(function(){n.teardown()})):this.bus.on(g.events.PAYMENT_METHOD_GENERATED,p(function(t){this.bus.emit(g.events.PAYMENT_METHOD_RECEIVED,t)},this))},i.prototype._setupPayPal=function(){var t,e,n,i,s,u,h,f,m;this.configuration.merchantConfiguration.paypal&&(t=r(this.configuration),h=t.merchantConfiguration,u=h.paypal,e=o(h,"paypal"),n=e("onSuccess"),i=e("onCancelled"),u.paymentMethodNonceInputField||(s=document.createElement("input"),s.id="braintree-custom-integration-dummy-input",u.paymentMethodNonceInputField=s),u.onSuccess=function(t){m=t.nonce,n(t.nonce,t.details.email,v(t.details.shippingAddress))},d(u.onAuthorizationDismissed)&&(f=a(function(t){c(function(){t&&"PayPal"===t.source&&!m&&u.onAuthorizationDismissed()})},200,{leading:!0}),this.bus.on(g.events.UI_POPUP_DID_CLOSE,f),this.bus.on(g.events.UI_MODAL_DID_CLOSE,f)),u.onCancelled=function(){m=null,i()},h.enableCORS&&(u.enableCORS=!0),this.paypalIntegration=l.create(t),null!=this.paypalIntegration&&this.destructor.registerFunctionForTeardown(p(function(){this.paypalIntegration.teardown()},this)))},i.prototype._setupCoinbase=function(){var t,e;this.configuration.merchantConfiguration.coinbase&&(navigator.userAgent.match(/MSIE 8\.0/)||(t=r(this.configuration),t.apiClient=this.apiClient,e=h.create(t),null!=e&&this.destructor.registerFunctionForTeardown(function(t){e.teardown(t)})))},i.prototype._onIntegrationReady=function(){var t=this,e={};this.paypalIntegration&&(e.paypal={initAuthFlow:this._wrapWithTeardownReply("initAuthFlow",function(){t.bus.emit(g.events.SEND_ANALYTICS_EVENTS,"paypal.auth.init"),t.paypalIntegration.initAuthFlow()}),closeAuthFlow:this._wrapWithTeardownReply("closeAuthFlow",function(){t.bus.emit(g.events.SEND_ANALYTICS_EVENTS,"paypal.auth.close"),t.paypalIntegration.closeAuthFlow()})}),_.prototype._onIntegrationReady.call(this,e)},e.exports=i},{146:146,151:151,158:158,161:161,162:162,163:163,169:169,171:171,176:176,197:197,203:203,209:209,80:80,87:87,89:89,90:90}],166:[function(t,e,n){"use strict";function i(t){return l(t.paymentMethodNonceReceived)?t.paymentMethodNonceReceived:null}function o(t){return l(t[p.ROOT_SUCCESS_CALLBACK])}function r(){var t,e,n,r,a;f.apply(this,arguments),a=s(this.configuration),t=a.merchantConfiguration,e=i(t),n=o(t),(e||n)&&(t.paymentMethodNonceReceived=u(function(t){e&&e(t.originalEvent,t.nonce),this.bus.emit(h.events.PAYMENT_METHOD_RECEIVED,d(t))},this)),r=c.create(a),this.destructor.registerFunctionForTeardown(function(t){r.teardown(t)}),this.bus.emit(h.events.ASYNC_DEPENDENCY_READY)}var s=t(169).cloneAndPreserveDOM,a=t(151),c=t(195),u=t(87),l=t(146),h=t(158),p=t(162),d=t(174),f=t(163);r.prototype=a(f.prototype,{constructor:r}),e.exports=r},{146:146,151:151,158:158,162:162,163:163,169:169,174:174,195:195,87:87}],167:[function(t,e,n){"use strict";e.exports={custom:t(165),dropin:t(166),paypal:t(168),coinbase:t(164)}},{164:164,165:165,166:166,168:168}],168:[function(t,e,n){"use strict";function i(t){return"onSuccess"in t&&p(t.onSuccess)?t.onSuccess:"paypal"in t&&p(t.paypal.onSuccess)?t.paypal.onSuccess:null}function o(t){return p(t[d.ROOT_SUCCESS_CALLBACK])}function r(t){var e,n,r,a,d,g,v;t=s(t),t.merchantConfiguration.paypal=t.merchantConfiguration.paypal||{};for(a in t.merchantConfiguration)t.merchantConfiguration.hasOwnProperty(a)&&"paypal"!==a&&(t.merchantConfiguration.paypal[a]=t.merchantConfiguration[a]);y.call(this,t),e=this.configuration.merchantConfiguration,n=i(e),r=o(e),d=p(e.paypal.onCancelled)?e.paypal.onCancelled:function(){},(n||r)&&(e.paypal.onSuccess=h(function(t){v=t.nonce,n&&n(t.nonce,t.details.email,m(t.details.shippingAddress)),this.bus.emit(f.events.PAYMENT_METHOD_RECEIVED,t)},this)),p(e.paypal.onAuthorizationDismissed)&&(g=c(function(t){u(function(){t&&"PayPal"===t.source&&!v&&e.paypal.onAuthorizationDismissed()})},200,{leading:!0}),this.bus.on(f.events.UI_POPUP_DID_CLOSE,g),this.bus.on(f.events.UI_MODAL_DID_CLOSE,g)),e.paypal.onCancelled=function(){v=null,d&&d()},this.paypalIntegration=l.create(this.configuration),this.destructor.registerFunctionForTeardown(h(function(){this.paypalIntegration.teardown()},this)),this.bus.emit(f.events.ASYNC_DEPENDENCY_READY)}var s=t(169).cloneAndPreserveDOM,a=t(151),c=t(89),u=t(90),l=t(209),h=t(87),p=t(146),d=t(162),f=t(158),m=t(161).convertToLegacyShippingAddress,y=t(163);r.prototype=a(y.prototype,{constructor:r}),r.prototype._onIntegrationReady=function(){var t=this,e={};this.paypalIntegration&&(e.paypal={initAuthFlow:this._wrapWithTeardownReply("initAuthFlow",function(){t.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"paypal.auth.init"),t.paypalIntegration.initAuthFlow()}),closeAuthFlow:this._wrapWithTeardownReply("closeAuthFlow",function(){t.bus.emit(f.events.SEND_ANALYTICS_EVENTS,"paypal.auth.close"),t.paypalIntegration.closeAuthFlow()})}),y.prototype._onIntegrationReady.call(this,e)},e.exports=r},{146:146,151:151,158:158,161:161,162:162,163:163,169:169,209:209,87:87,89:89,90:90}],169:[function(t,e,n){"use strict";function i(t){return r(t,function(t){return a(t)?t.get(0):c(t)?t:void 0})}function o(t){return r(t,function(t){return a(t)||c(t)?{}:void 0})}var r=t(143),s=t(173),a=s.isJQueryElement,c=s.isHTMLElement;e.exports={cloneAndPreserveDOM:i,cloneAndStripDOM:o}},{143:143,173:173}],170:[function(t,e,n){"use strict";e.exports=function(t){if("CONFIGURATION"===t.type||"IMMEDIATE"===t.type)throw new Error(t.message);try{console.error(-1===navigator.userAgent.indexOf("MSIE")?t:JSON.stringify(t,null,2))}catch(e){}}},{}],171:[function(t,e,n){"use strict";function i(t){this.paymentMethod=null,this.nonceInputElement=null,this.bus=new o({channel:t.channel}),this.formNapper=t.formNapper,this.rootCallback=t.rootCallback,this._attachEvents()}var o=t(158),r=t(203),s="web.custom.hosted-fields.via.",a="payment_method_nonce";i.prototype._shouldStrictlyValidate=function(t){return null!=t?!1:null==this.paymentMethod||"CreditCard"===this.paymentMethod.type},i.prototype._clearNonce=function(){this.paymentMethod&&this.paymentMethod.nonce&&(this.paymentMethod=null,this.nonceInputElement=this.formNapper.inject(a,""))},i.prototype._attachEvents=function(){var t=this;this.bus.on(o.events.PAYMENT_METHOD_CANCELLED,function(){t._clearNonce()}),this.bus.on(o.events.PAYMENT_METHOD_GENERATED,function(e){t.paymentMethod=e,t.nonceInputElement=t.formNapper.inject(a,t.paymentMethod.nonce)})},i.prototype.handleSubmitRequest=function(){var t=this;this.bus.emit(r.events.TOKENIZATION_REQUEST,function(e){var n=e[0],i=e[1];return n?void t.bus.emit(o.events.ERROR,n):(t.paymentMethod=i||t.paymentMethod,t._shouldStrictlyValidate(i)?(t.bus.emit(r.events.VALIDATE_STRICT),void t.bus.emit(o.events.ERROR,{type:"VALIDATION",message:"User did not enter a payment method"})):void(t.rootCallback?t.bus.emit(o.events.SEND_ANALYTICS_EVENTS,s+"callback.success",function(){t.rootCallback(t.paymentMethod)}):t.bus.emit(o.events.SEND_ANALYTICS_EVENTS,s+"formsubmit.success",function(){t.nonceInputElement=t.formNapper.inject(a,t.paymentMethod.nonce),t.formNapper.submit()})))})},i.prototype.teardown=function(){this._clearNonce()},e.exports=i},{158:158,203:203}],172:[function(t,e,n){"use strict";function i(){}var o=t(146);e.exports=function(t){return function(e,n){return o(t[e])?t[e]:o(n)?n:i}}},{146:146}],173:[function(t,e,n){"use strict";function i(t){return Boolean(t)&&"object"==typeof t&&"jquery"in t}function o(t){return Boolean(t)&&1===t.nodeType}e.exports={isJQueryElement:i,isHTMLElement:o}},{}],174:[function(t,e,n){"use strict";e.exports=function(t){return{nonce:t.nonce,details:t.details,type:t.type}}},{}],175:[function(t,e,n){(function(n){"use strict";function i(t,e,i){var s;if(!c.hasOwnProperty(e))throw new Error(e+" is an unsupported integration");i=i||{},s=p.uuid(),r._getConfiguration({enableCORS:i.enableCORS||!1,authorization:t,sessionId:s},function(r,a){var d;return r?(d=h(i)(u.ROOT_ERROR_CALLBACK,l),void d({message:r.errors})):void new c[e]({channel:s,authorization:t,gatewayConfiguration:a,integrationType:e,merchantConfiguration:i,analyticsConfiguration:{sdkVersion:"braintree/web/"+o,merchantAppId:n.location.host},isMerchantPageHttps:p.isBrowserHttps()})})}var o="2.26.0",r=t(14),s=t(209),a=t(195),c=t(167),u=t(162),l=t(170),h=t(172),p=t(73),d=t(188);e.exports={api:r,data:d,cse:n.Braintree,paypal:s,dropin:a,hostedFields:{VERSION:t(203).VERSION},setup:i,VERSION:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{14:14,162:162,167:167,170:170,172:172,188:188,195:195,203:203,209:209,73:73}],176:[function(t,e,n){"use strict";function i(t){var e=new o(t);return e.canCreateIntegration?e:null}var o=t(179);e.exports={create:i}},{179:179}],177:[function(t,e,n){(function(t){"use strict";function n(e){return e=e||t.navigator.userAgent,/AppleWebKit\//.test(e)&&/Mobile\//.test(e)?e.replace(/.* OS ([0-9_]+) like Mac OS X.*/,"$1").replace(/_/g,"."):null}function i(e){var n=e||t.navigator.userAgent,i=null,o=/MSIE.(\d+)/.exec(n);return/Trident/.test(n)&&(i=11),o&&(i=parseInt(o[1],10)),i}function o(e){return e=e||t.navigator.userAgent,/Android/.test(e)?e.replace(/^.* Android ([0-9\.]+).*$/,"$1"):null}e.exports={ieVersion:i,iOSSafariVersion:n,androidVersion:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],178:[function(t,e,n){"use strict";function i(t,e,n){return t?(n.bus.emit(o.ERROR,t.error),void n.bus.emit(o.SEND_ANALYTICS_EVENTS,"coinbase.generate.nonce.failed")):(n.bus.emit(o.PAYMENT_METHOD_GENERATED,e),void n.bus.emit(o.SEND_ANALYTICS_EVENTS,"coinbase.generate.nonce.succeeded"))}var o=t(158).events;e.exports={tokenize:i}},{158:158}],179:[function(t,e,n){(function(n){"use strict";function i(t){return{clientId:t.gatewayConfiguration.coinbase.clientId,redirectUrl:t.gatewayConfiguration.coinbase.redirectUrl,scopes:t.gatewayConfiguration.coinbase.scopes||d.SCOPES,meta:{authorizations_merchant_account:t.gatewayConfiguration.coinbase.merchantAccount||""}}}function o(t){return function(e,n){t.emit(m.events.ERROR,{type:n,message:e})}}function r(t,e){var n=(t.merchantConfiguration||{}).coinbase,i=o(e);if(null==t.apiClient)i("apiClient is required for coinbase",d.CONFIGURATION_ERROR);else if(t.gatewayConfiguration.coinbaseEnabled)if(n&&(n.container||n.button))if(n.container&&n.button)i("options.coinbase.container and options.coinbase.button are mutually exclusive",d.CONFIGURATION_ERROR);else{if(f.isSupportedBrowser())return!0;i("Coinbase is not supported by your browser. Please consider upgrading",d.UNSUPPORTED_BROWSER_ERROR)}else i("Either options.coinbase.container or options.coinbase.button is required for Coinbase integrations",d.CONFIGURATION_ERROR);else i("Coinbase is not enabled for your merchant account",d.CONFIGURATION_ERROR);return!1}function s(t){var e,o,s=this;this.configuration=t,this.destructor=new u,o={channel:t.channel};try{t.coinbase.container&&(o.merchantUrl=n.location.href)}catch(l){}this.bus=t.bus||new m(o),this.canCreateIntegration=r(t,this.bus),this.canCreateIntegration&&(this.buttonId=t.merchantConfiguration.coinbase.button||d.BUTTON_ID,this.apiClient=t.apiClient||new y.Client(t),this._onOAuthSuccess=a(this._onOAuthSuccess,this),this._handleButtonClick=a(this._handleButtonClick,this),this.popupParams=i(t),this.redirectDoneInterval=null,t.merchantConfiguration.coinbase.container?(e=c.normalizeElement(t.merchantConfiguration.coinbase.container),this._insertFrame(e)):(n.braintreeCoinbasePopupCallback=this._onOAuthSuccess,e=document.body,c.addEventListener(e,"click",this._handleButtonClick),this.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.initialized"),this.destructor.registerFunctionForTeardown(function(){s._closePopup()}),this.bus.on(d.TEARDOWN_EVENT,a(this.destructor.teardown,this.destructor))))}var a=t(87),c=t(73),u=t(77),l=t(183),h=t(186),p=t(178),d=t(180),f=t(181),m=t(158),y=t(14);s.prototype._insertFrame=function(t){var e=this,n=l.createFrame({channel:this.configuration.channel});this.bus.emit(m.events.ASYNC_DEPENDENCY_INITIALIZING),t.appendChild(n),this.destructor.registerFunctionForTeardown(function(){t.removeChild(n)}),setTimeout(function(){n.src=e.configuration.gatewayConfiguration.assetsUrl+"/coinbase/"+d.VERSION+"/coinbase-frame.html#"+e.configuration.channel},0)},s.prototype._onOAuthSuccess=function(t){var e=this;return t.code?(this.bus.emit("coinbase:view:navigate","loading"),this.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.authorized"),this.apiClient.tokenizeCoinbase({code:t.code,query:h.getQueryString()},function(t,n){p.tokenize.apply(null,[t,n,e])}),void this._closePopup()):(this.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.denied"),void this._closePopup())},s.prototype._clearPollForRedirectDone=function(){this.redirectDoneInterval&&(clearInterval(this.redirectDoneInterval),this.redirectDoneInterval=null)},s.prototype._closePopup=function(t){t=t||this.popup,null!=t&&(f.shouldCloseFromParent()&&t.close(),this._popupCleanup())},s.prototype._popupCleanup=function(){this._clearPollForRedirectDone(),this.bus.emit(m.events.UI_POPUP_DID_CLOSE,{source:d.INTEGRATION_NAME})},s.prototype._pollForRedirectDone=function(t){var e=this,n=setInterval(function(){var n;if(null==t||t.closed)return e.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.aborted"),void e._popupCleanup();try{if("about:blank"===t.location.href)throw new Error("Not finished loading");n=c.decodeQueryString(t.location.search.replace(/^\?/,"")).code}catch(i){return}e._onOAuthSuccess({code:n})},100);return this.redirectDoneInterval=n,n},s.prototype._openPopup=function(){var t;this.bus.emit(m.events.SEND_ANALYTICS_EVENTS,"coinbase.popup.started"),t=l.createPopup(h.compose(this._getOAuthBaseUrl(),this.popupParams)),t.focus(),this._pollForRedirectDone(t),this.bus.emit(m.events.UI_POPUP_DID_OPEN,{source:d.INTEGRATION_NAME}),this.bus.on(m.events.UI_POPUP_FORCE_CLOSE,function(e){e.target===d.INTEGRATION_NAME&&t.close()}),this.popup=t},s.prototype._getOAuthBaseUrl=function(){var t;return t="shared_sandbox"===this.configuration.gatewayConfiguration.coinbase.environment?d.SANDBOX_OAUTH_BASE_URL:d.PRODUCTION_OAUTH_BASE_URL},s.prototype._handleButtonClick=function(t){for(var e=t.target||t.srcElement;;){if(null==e)return;if(e===t.currentTarget)return;if(e.id===this.buttonId)break;e=e.parentNode}t&&t.preventDefault?t.preventDefault():t.returnValue=!1,this._openPopup()},s.prototype.teardown=function(t){var e=this;return this.canCreateIntegration?void this.bus.emit(d.TEARDOWN_EVENT,function(){e.destructor.teardown(function(n){return n?t(n):(e.bus.teardown(),void t(null))})}):void t(null)},e.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{14:14,158:158,178:178,180:180,181:181,183:183,186:186,73:73,77:77,87:87}],180:[function(t,e,n){"use strict";e.exports={PRODUCTION_OAUTH_BASE_URL:"https://coinbase.com",SANDBOX_OAUTH_BASE_URL:"https://sandbox.coinbase.com",ORIGIN_URL:"https://www.coinbase.com",FRAME_NAME:"braintree-coinbase-frame",POPUP_NAME:"coinbase",BUTTON_ID:"bt-coinbase-button",SCOPES:"send",VERSION:"2.26.0",INTEGRATION_NAME:"Coinbase",CONFIGURATION_ERROR:"CONFIGURATION",UNSUPPORTED_BROWSER_ERROR:"UNSUPPORTED_BROWSER",TEARDOWN_EVENT:"coinbase:TEARDOWN"}},{}],181:[function(t,e,n){"use strict";function i(){var t=a.ieVersion();return!t||t>8}function o(){var t=a.androidVersion();return null==t?!1:/^5/.test(t)}function r(){return!(o()||s())}function s(){var t=a.iOSSafariVersion();return null==t?!1:/^8\.0/.test(t)||/^8\.1$/.test(t)}var a=t(177);e.exports={isSupportedBrowser:i,shouldCloseFromParent:r,shouldDisplayIOSClose:s,shouldDisplayLollipopClose:o}},{177:177}],182:[function(t,e,n){"use strict";function i(t){var e=document.createElement("button");return t=t||{},e.id=t.id||"coinbase-button",e.style.backgroundColor=t.backgroundColor||"#EEE",e.style.color=t.color||"#4597C3",e.style.border=t.border||"0",e.style.borderRadius=t.borderRadius||"6px",e.style.padding=t.padding||"12px",e.innerHTML=t.innerHTML||"coinbase",e}e.exports={create:i}},{}],183:[function(t,e,n){"use strict";var i=t(185),o=t(182),r=t(184);e.exports={createButton:o.create,createPopup:i.create,createFrame:r.create}},{182:182,184:184,185:185}],184:[function(t,e,n){"use strict";function i(){return r({name:o.FRAME_NAME,height:"70px",width:"100%",style:{padding:0,margin:0,border:0,outline:"none"}})}var o=t(180),r=t(82);e.exports={create:i}},{180:180,82:82}],185:[function(t,e,n){(function(n){"use strict";function i(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push([e,t[e]].join("="));return n.join(",")}function o(){var t=580,e=810;return i({width:t,height:e,left:(screen.width-t)/2,top:(screen.height-e)/4})}function r(t){return n.open(t,s.POPUP_NAME,o())}var s=t(180);e.exports={create:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{180:180}],186:[function(t,e,n){"use strict";function i(){return"version="+r.VERSION}function o(t,e){var n,o=t+"/oauth/authorize?response_type=code",r=e.redirectUrl+"?"+i();if(o+="&redirect_uri="+encodeURIComponent(r),o+="&client_id="+e.clientId,e.scopes&&(o+="&scope="+encodeURIComponent(e.scopes)),e.meta)for(n in e.meta)e.meta.hasOwnProperty(n)&&(o+="&meta["+encodeURIComponent(n)+"]="+encodeURIComponent(e.meta[n]));return o}var r=t(180);e.exports={compose:o,getQueryString:i}},{180:180}],187:[function(t,e,n){"use strict";function i(){return new o}function o(){this.sessionId=r(),this._beaconId=s(this.sessionId),this._parameterBlock=a(this.sessionId,this._beaconId),this._thirdPartyBlock=c()}function r(){var t,e="";for(t=0;32>t;t++)e+=Math.floor(16*Math.random()).toString(16);return e}function s(t){var e=(new Date).getTime()/1e3;return"https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p="+t+"&t="+e+"&a=14"}function a(t,e){var n=document.body.appendChild(document.createElement("script"));return n.type="application/json",n.setAttribute("fncls","fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"),n.text=JSON.stringify({f:t,s:"BRAINTREE_SIGNIN",b:e}),n}function c(){function t(){n._l()}var e,n,i="https://www.paypalobjects.com/webstatic/r/fb/",o=document.createElement("iframe");o.src="about:blank",o.title="",o.role="presentation",(o.frameElement||o).style.cssText="width: 0; height: 0; border: 0",document.body.appendChild(o);try{n=o.contentWindow.document}catch(r){e=document.domain,o.src='javascript:var d=document.open();d.domain="'+e+'";void(0);',n=o.contentWindow.document}return n.open()._l=function(){var t=this.createElement("script");e&&(this.domain=e),t.id="js-iframe-async",t.src=i+"fb-all-prod.pp.min.js",this.body.appendChild(t)},o.addEventListener?o.addEventListener("load",t,!1):o.attachEvent?o.attachEvent("onload",t):n.write('<body onload="document._l();">'),n.close(),o}o.prototype.teardown=function(){this._thirdPartyBlock.parentNode.removeChild(this._thirdPartyBlock)},e.exports={setup:i}},{}],188:[function(t,e,n){"use strict";function i(t){function e(){var t;for(t=0;t<a.length;t++)a[t].teardown()}var n,i,s,a=[];return null!=t.kount?(i=o.setup(t.kount),n=i.deviceData,a.push(i)):n={},t.paypal===!0&&(s=r.setup(),n.correlation_id=s.sessionId,a.push(s)),{deviceData:JSON.stringify(n),teardown:e}}var o=t(189),r=t(187);e.exports={setup:i}},{187:187,189:189}],189:[function(t,e,n){(function(t){"use strict";function n(t){var e=null!=t?t:{};return new i(e)}function i(t){o.random.startCollectors(),this._currentEnvironment=this._initializeEnvironment(t),this._deviceSessionId=this._generateDeviceSessionId(),this.deviceData=this._getDeviceData(),this._iframe=this._setupIFrame()}var o=t.Braintree.sjcl,r="braintreeDataFrame",s="600000",a="https://assets.qa.braintreepayments.com/data",c={development:a,qa:a,sandbox:"https://assets.braintreegateway.com/sandbox/data",production:"https://assets.braintreegateway.com/data"};i.prototype.teardown=function(){o.random.stopCollectors(),this._removeIframe()},i.prototype._removeIframe=function(){this._iframe.parentNode.removeChild(this._iframe)},i.prototype._getDeviceData=function(){return{device_session_id:this._deviceSessionId,fraud_merchant_id:this._currentEnvironment.id}},i.prototype._generateDeviceSessionId=function(){var t,e;return t=o.random.randomWords(4,0),e=o.codec.hex.fromBits(t)},i.prototype._setupIFrame=function(){var t,e=this,n=document.getElementById(r);return null!=n?n:(t="?m="+this._currentEnvironment.id+"&s="+this._deviceSessionId,n=document.createElement("iframe"),n.width=1,n.id=r,n.height=1,n.frameBorder=0,n.scrolling="no",document.body.appendChild(n),setTimeout(function(){n.src=e._currentEnvironment.url+"/logo.htm"+t;try{n.innerHTML='<img src="'+e._currentEnvironment.url+"/logo.gif"+t+'" />'}catch(i){}},10),n)},i.prototype._initializeEnvironment=function(t){var e=c[t.environment];if(null==e)throw new Error(t.environment+" is not a valid environment for kount.environment");return{url:e,name:t.environment,id:null==t.merchantId?s:t.merchantId}},e.exports={setup:n,Kount:i,environmentUrls:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],190:[function(t,e,n){"use strict";function i(t){this.apiClient=t}var o=["unlockCreditCard"];i.prototype.attach=function(t){function e(e){t.define(e,function(){n.apiClient[e].apply(n.apiClient,arguments)})}var n=this,i=0,r=o.length;for(i;r>i;i++)e(o[i])},e.exports=i},{}],191:[function(t,e,n){(function(n){"use strict";function i(t,e){var n=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return n[e]}function o(){return{html:{height:a.style.height||"",overflow:i(a,"overflow"),position:i(a,"position")},body:{height:c.style.height||"",overflow:i(c,"overflow")}}}function r(){var t=/Android|iPhone|iPod|iPad/i.test(window.navigator.userAgent);return t}function s(t){var e,i,o,r=this;this.configuration=t,this.destructor=new h,this.container=null,this.merchantFormManager=null,this.configurationRequests=[],this.braintreeApiClient=new u.Client(this.configuration),this.braintreeBus=new l({merchantUrl:n.location.href,channel:this.configuration.channel}),this.bus=new p.MessageBus(this.configuration.root,this.configuration.channel),this.rpcServer=new p.RPCServer(this.bus),this.apiProxyServer=new y(this.braintreeApiClient),this.apiProxyServer.attach(this.rpcServer),e=this.configuration.inlineFramePath||this.configuration.gatewayConfiguration.assetsUrl+"/dropin/"+b+"/inline-frame.html",i=this.configuration.modalFramePath||this.configuration.gatewayConfiguration.assetsUrl+"/dropin/"+b+"/modal-frame.html",a=document.documentElement,c=document.body,this.frames={inline:this._createFrame(e,_.INLINE_FRAME_NAME),modal:this._createFrame(i,_.MODAL_FRAME_NAME)},this.container=f(this.configuration.merchantConfiguration.container,"Unable to find valid container."),o=f(this.configuration.merchantConfiguration.form||this._findClosest(this.container,"form")),this.merchantFormManager=new g({form:o,frames:this.frames,onSubmit:this.configuration.merchantConfiguration.paymentMethodNonceReceived,apiClient:this.braintreeApiClient}).initialize(),this.destructor.registerFunctionForTeardown(function(){r.merchantFormManager.teardown()}),this.configuration.gatewayConfiguration.paypalEnabled&&this._configurePayPal(),this.braintreeApiClient.sendAnalyticsEvents("dropin.web.initialized")}var a,c,u=t(14),l=t(158),h=t(77),p=t(55),d=t(73),f=d.normalizeElement,m=t(87),y=t(190),g=t(194),v=t(193),_=t(196),b="2.26.0",E=t(213);s.prototype.initialize=function(){var t,e=this;this._initializeModal(),this.braintreeBus.emit(l.events.ASYNC_DEPENDENCY_INITIALIZING),this.container.appendChild(this.frames.inline.element),c.appendChild(this.frames.modal.element),this.destructor.registerFunctionForTeardown(function(t){e._hideModal(function(){e.container.removeChild(e.frames.inline.element),c.removeChild(e.frames.modal.element),t()})}),this.rpcServer.define("receiveSharedCustomerIdentifier",function(n){for(e.braintreeApiClient.attrs.sharedCustomerIdentifier=n,e.braintreeApiClient.attrs.sharedCustomerIdentifierType="browser_session_cookie_store",t=0;t<e.configurationRequests.length;t++)e.configurationRequests[t](e.encodedClientToken);e.configurationRequests=[]}),this.braintreeBus.on(l.events.PAYMENT_METHOD_GENERATED,m(this._handleAltPayData,this)),this.rpcServer.define("selectPaymentMethod",function(t){e.frames.modal.rpcClient.invoke("selectPaymentMethod",[t]),e._showModal()}),this.rpcServer.define("sendAddedPaymentMethod",function(t){e.merchantFormManager.setNoncePayload(t),e.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[t])}),this.rpcServer.define("sendUsedPaymentMethod",function(t){e.frames.inline.rpcClient.invoke("selectPaymentMethod",[t])}),this.rpcServer.define("sendUnlockedNonce",function(t){e.merchantFormManager.setNoncePayload(t)}),this.rpcServer.define("clearNonce",function(){e.merchantFormManager.clearNoncePayload()}),this.rpcServer.define("closeDropInModal",function(){e._hideModal()}),this.rpcServer.define("setInlineFrameHeight",function(t){e.frames.inline.element.style.height=t+"px"}),this.bus.register("ready",function(t){t.source===e.frames.inline.element.contentWindow?e.frames.inline.rpcClient=new p.RPCClient(e.bus,t.source):t.source===e.frames.modal.element.contentWindow&&(e.frames.modal.rpcClient=new p.RPCClient(e.bus,t.source))})},s.prototype._createFrame=function(t,e){return new v(t,e,this.braintreeBus)},s.prototype._initializeModal=function(){this.frames.modal.element.style.display="none",this.frames.modal.element.style.position=r()?"absolute":"fixed",this.frames.modal.element.style.top="0",this.frames.modal.element.style.left="0",this.frames.modal.element.style.height="100%",
this.frames.modal.element.style.width="100%"},s.prototype._lockMerchantWindowSize=function(){setTimeout(function(){a.style.overflow="hidden",c.style.overflow="hidden",c.style.height="100%",r()&&(a.style.position="relative",a.style.height=window.innerHeight+"px")},160)},s.prototype._unlockMerchantWindowSize=function(){var t=this.merchantPageDefaultStyles;t&&(c.style.height=t.body.height,c.style.overflow=t.body.overflow,a.style.overflow=t.html.overflow,r()&&(a.style.height=t.html.height,a.style.position=t.html.position),delete this.merchantPageDefaultStyles)},s.prototype._showModal=function(){var t=this,e=this.frames.modal.element;this.merchantPageDefaultStyles=o(),e.style.display="block",this.frames.modal.rpcClient.invoke("open",[],function(){setTimeout(function(){t._lockMerchantWindowSize(),e.contentWindow.focus()},200)})},s.prototype._hideModal=function(t){this._unlockMerchantWindowSize(),this.frames.modal.element.style.display="none",t&&t()},s.prototype._configurePayPal=function(){var t=this.configuration.merchantConfiguration.paypal||{};this.paypalModalView=new E({channel:this.configuration.channel,insertFrameFunction:t.insertFrame,paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,isHermes:Boolean(t.singleUse)&&Boolean(t.amount)&&Boolean(t.currency)})},s.prototype._handleAltPayData=function(t){this.merchantFormManager.setNoncePayload(t),this.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[t]),this.frames.modal.rpcClient.invoke("modalViewClose")},s.prototype._findClosest=function(t,e){e=e.toUpperCase();do{if(t.nodeName===e)return t;t=t.parentNode}while(t);throw new Error("Unable to find a valid "+e)},s.prototype.teardown=function(t){var e=this;this.paypalModalView&&this.paypalModalView.teardown(),this.braintreeBus.emit(_.MODAL_FRAME_TEARDOWN_EVENT,function(){e.braintreeBus.emit(_.INLINE_FRAME_TEARDOWN_EVENT,function(){e.destructor.teardown(function(n){return n?t(n):(e.braintreeBus.teardown(),void t())})})})},e.exports=s}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{14:14,158:158,190:190,193:193,194:194,196:196,213:213,55:55,73:73,77:77,87:87}],192:[function(t,e,n){"use strict";function i(t){var e=new o(t);return e.initialize(),e}var o=t(191),r="2.26.0";e.exports={create:i,VERSION:r}},{191:191}],193:[function(t,e,n){"use strict";function i(){var t,e=document.createElement("fakeelement");for(t in u)if("undefined"!=typeof e.style[t])return u[t];return null}function o(t,e){function n(i){i.target===t&&"height"===i.propertyName&&(e.emit(s.events.ASYNC_DEPENDENCY_READY),t.removeEventListener(o,n))}var o=i();o?t.addEventListener(o,n):setTimeout(function(){e.emit(s.events.ASYNC_DEPENDENCY_READY)},500)}function r(t,e,n){var i="height 210ms cubic-bezier(0.390, 0.575, 0.565, 1.000)",r=c({name:e,width:"100%",height:"68",style:{transition:i,WebkitTransition:i,MozTransition:i,msTransition:i,OTransition:i,border:"0",zIndex:"9999"}});this.element=r,setTimeout(function(){r.src=t+"#"+n.channel},0),e===a.INLINE_FRAME_NAME&&o(r,n)}var s=t(158),a=t(196),c=t(82),u={transition:"transitionend","-o-transition":"otransitionEnd","-moz-transition":"transitionend","-webkit-transition":"webkitTransitionEnd"};e.exports=r},{158:158,196:196,82:82}],194:[function(t,e,n){"use strict";function i(t){this.formNapper=new r(t.form),this.frames=t.frames,this.onSubmit=t.onSubmit,this.apiClient=t.apiClient}var o=t(87),r=t(80);i.prototype.initialize=function(){return this._isSubmitBased()&&this._setElements(),this._setEvents(),this},i.prototype.setNoncePayload=function(t){this.noncePayload=t},i.prototype.clearNoncePayload=function(){this.noncePayload=null},i.prototype._isSubmitBased=function(){return!this.onSubmit},i.prototype._isCallbackBased=function(){return Boolean(this.onSubmit)},i.prototype._setElements=function(){this.nonceInput=this.formNapper.inject("payment_method_nonce","")},i.prototype._setEvents=function(){this.formNapper.hijack(o(this._handleFormSubmit,this))},i.prototype._handleFormSubmit=function(t){var e=this;this.noncePayload&&this.noncePayload.nonce?this._handleNonceReply(t):this.frames.inline.rpcClient.invoke("requestNonce",[],function(n){e.setNoncePayload(n),e._handleNonceReply(t)})},i.prototype._handleNonceReply=function(t){var e=this;this._isCallbackBased()?this.apiClient.sendAnalyticsEvents("dropin.web.end.callback",function(){var n=e.noncePayload;n.originalEvent=t,e.onSubmit(n),setTimeout(function(){delete n.originalEvent,e.frames.inline.rpcClient.invoke("clearLoadingState"),e.frames.inline.rpcClient.invoke("receiveNewPaymentMethod",[n])},200)}):this._triggerFormSubmission()},i.prototype._triggerFormSubmission=function(){var t=this;this.nonceInput=this.formNapper.inject("payment_method_nonce",this.noncePayload.nonce),this.apiClient.sendAnalyticsEvents("dropin.web.end.auto-submit",function(){t.formNapper.submit()})},i.prototype.teardown=function(){var t;this.nonceInput&&(t=this.formNapper.htmlForm,t.removeChild(this.nonceInput)),this.formNapper.detach()},e.exports=i},{80:80,87:87}],195:[function(t,e,n){"use strict";e.exports=t(192)},{192:192}],196:[function(t,e,n){e.exports={PAYPAL_INTEGRATION_NAME:"PayPal",INLINE_FRAME_NAME:"braintree-dropin-frame",MODAL_FRAME_NAME:"braintree-dropin-modal-frame",PAYMENT_METHOD_TYPES:["CoinbaseAccount","PayPalAccount","CreditCard"],cssClassMap:{"American Express":"american-express","Diners Club":"diners-club",DinersClub:"diners-club",Discover:"discover",JCB:"jcb",Maestro:"maestro",MasterCard:"master-card",Solo:"solo",Switch:"switch",UKMaestro:"maestro",UnionPay:"unionpay",Visa:"visa"},INLINE_FRAME_TEARDOWN_EVENT:"dropin:TEARDOWN_INLINE_FRAME",MODAL_FRAME_TEARDOWN_EVENT:"dropin:TEARDOWN_MODAL_FRAME"}},{}],197:[function(t,e,n){"use strict";function i(t,e){var n=e.merchantConfiguration||{},i=document.getElementById(n.id),s=n.useCreditCard!==!1;if(!i)throw new Error('Unable to find form with id: "'+n.id+'"');return s&&r(i),new o(t,e)}var o=t(199),r=t(202);e.exports={setup:i}},{199:199,202:202}],198:[function(t,e,n){(function(t){"use strict";function n(t,e){var o,s,a,c=t.children;for(e=e||{},s=0;s<c.length;s++)o=c[s],r(o)?(a=o.getAttribute("data-braintree-name"),"postal_code"===a?e.billingAddress={postalCode:o.value}:e[a]=o.value,i(o)):o.children&&o.children.length>0&&n(o,e);return e}function i(t){try{t.attributes.removeNamedItem("name")}catch(e){}}function o(t){n(t)}function r(t){return t.nodeType===s&&t.attributes["data-braintree-name"]}var s=t.Node?t.Node.ELEMENT_NODE:1;e.exports={extractValues:n,scrubAllAttributes:o,scrubAttributes:i,isBraintreeNode:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],199:[function(t,e,n){(function(n){"use strict";function i(t,e){var i=e.merchantConfiguration,o="object"==typeof i.paymentMethodNonceInputField,r=this;this.destructor=new a,this.apiClient=t,this.isCreditCardForm=i.useCreditCard!==!1,this.htmlForm=document.getElementById(i.id),this.paymentMethodNonceInput=l(i.paymentMethodNonceInputField),this.htmlForm.appendChild(this.paymentMethodNonceInput),this.destructor.registerFunctionForTeardown(function(){o?r.paymentMethodNonceInput.value="":r.htmlForm.removeChild(r.paymentMethodNonceInput)}),this.model=new u,this.bus=new c({merchantUrl:n.location.href,channel:e.channel}),this.setEvents(),this.destructor.registerFunctionForTeardown(function(){r.bus.teardown()})}var o=t(87),r=t(73),s=t(198),a=t(77),c=t(158),u=t(201),l=t(200),h={message:"Unable to process payments at this time",type:"IMMEDIATE"};i.prototype.setEvents=function(){var t=this;this.onSubmitHandler=o(this.handleSubmit,this),this.onExternalNonceReceived=o(this.onExternalNonceReceived,this),this.clearExternalNonce=o(this.clearExternalNonce,this),r.addEventListener(this.htmlForm,"submit",this.onSubmitHandler),this.destructor.registerFunctionForTeardown(function(){r.removeEventListener(t.htmlForm,"submit",t.onSubmitHandler)}),this.bus.on(c.events.PAYMENT_METHOD_GENERATED,this.onExternalNonceReceived),this.bus.on(c.events.PAYMENT_METHOD_CANCELLED,this.clearExternalNonce)},i.prototype.handleSubmit=function(t){var e,n=this;return t.preventDefault?t.preventDefault():t.returnValue=!1,this.isCreditCardForm?(e=this.model.get("type"),e&&"CreditCard"!==e?(s.scrubAllAttributes(this.htmlForm),void this.onNonceReceived(null,this.model.attributes)):void this.apiClient.tokenizeCard(s.extractValues(this.htmlForm),function(t,e,i){t?n.onNonceReceived(h,null):(n.model.set({nonce:e,type:i.type,details:i.details}),n.onNonceReceived(null,n.model.attributes))})):void this.onNonceReceived(null,this.model.attributes)},i.prototype.writeNonceToDOM=function(){this.paymentMethodNonceInput.value=this.model.get("nonce")},i.prototype.onExternalNonceReceived=function(t){this.model.set(t),this.writeNonceToDOM()},i.prototype.clearExternalNonce=function(){this.model.reset()},i.prototype.onNonceReceived=function(t){var e=this.htmlForm;return t?void this.bus.emit(c.events.ERROR,h):(r.removeEventListener(e,"submit",this.onSubmitHandler),this.writeNonceToDOM(),void(e.submit&&("function"==typeof e.submit||e.submit.call)?e.submit():setTimeout(function(){e.querySelector('[type="submit"]').click()},1)))},i.prototype.teardown=function(){this.destructor.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,198:198,200:200,201:201,73:73,77:77,87:87}],200:[function(t,e,n){"use strict";e.exports=function(t){var e,n;return"object"==typeof t?t:(e="payment_method_nonce","string"==typeof t&&(e=t),n=document.createElement("input"),n.name=e,n.type="hidden",n)}},{}],201:[function(t,e,n){"use strict";function i(){this.reset()}i.prototype.get=function(t){return this.attributes[t]},i.prototype.set=function(t){this.attributes=t||{}},i.prototype.reset=function(){this.attributes={}},e.exports=i},{}],202:[function(t,e,n){"use strict";e.exports=function(t){var e,n,i=t.getElementsByTagName("*"),o={};for(e=0;e<i.length;e++)n=i[e].getAttribute("data-braintree-name"),o[n]=!0;if(!o.number)throw new Error('Unable to find an input with data-braintree-name="number" in your form. Please add one.');if(o.expiration_date){if(o.expiration_month||o.expiration_year)throw new Error('You have inputs with data-braintree-name="expiration_date" AND data-braintree-name="expiration_(year|month)". Please use either "expiration_date" or "expiration_year" and "expiration_month".')}else{if(!o.expiration_month&&!o.expiration_year)throw new Error('Unable to find an input with data-braintree-name="expiration_date" in your form. Please add one.');if(!o.expiration_month)throw new Error('Unable to find an input with data-braintree-name="expiration_month" in your form. Please add one.');if(!o.expiration_year)throw new Error('Unable to find an input with data-braintree-name="expiration_year" in your form. Please add one.')}}},{}],203:[function(t,e,n){"use strict";var i=t(205),o=t(207).events,r="2.26.0";e.exports={create:function(t){return new i(t)},events:o,VERSION:r}},{205:205,207:207}],204:[function(t,e,n){"use strict";var i=t(207);e.exports=function(t,e){return t+"/hosted-fields/"+i.VERSION+"/hosted-fields-frame.html#"+e}},{207:207}],205:[function(t,e,n){"use strict";function i(t,e){var n=document.createElement("div");return n.style.clear="both",e=e||document.body,e.appendChild(t),e.appendChild(n),{parent:e,children:[t,n]}}function o(t,e){return function(n){var i=t[n.fieldKey].containerElement,o=a(i);n.target={fieldKey:n.fieldKey,container:i},o.toggle(h.externalClasses.FOCUSED,n.isFocused).toggle(h.externalClasses.VALID,n.isValid),n.isStrictlyValidating?o.toggle(h.externalClasses.INVALID,!n.isValid):o.toggle(h.externalClasses.INVALID,!n.isPotentiallyValid),delete n.fieldKey,delete n.isStrictlyValidating,e&&e(n)}}function r(t){var e,n,r,p,d,f=this,m={},g=0;this.injectedNodes=[],this.destructor=new s,this.bus=new u({channel:t.channel,merchantUrl:location.href}),this.destructor.registerFunctionForTeardown(function(){f.bus.teardown()}),this.bus.emit(u.events.ASYNC_DEPENDENCY_INITIALIZING),this.bus.emit(u.events.SEND_ANALYTICS_EVENTS,"hosted-fields.initialized");for(p in h.whitelistedFields)if(h.whitelistedFields.hasOwnProperty(p)){if(e=t.merchantConfiguration.hostedFields[p],!e)continue;if(n=document.querySelector(e.selector),!n){d='Unable to find element with selector "'+e.selector+'" for hostedFields.'+p,this.bus.emit(u.events.ERROR,{message:d});continue}if(n.querySelector('iframe[name^="braintree-"]')){this.bus.emit(u.events.ERROR,{message:'Cannot place two elements in "'+e.selector+'"'});continue}r=c({type:p,name:"braintree-hosted-field-"+p,style:h.defaultIFrameStyle}),this.injectedNodes.push(i(r,n)),this.setupLabelFocus(p,n),m[p]={frameElement:r,containerElement:n},g++,setTimeout(function(e){return function(){e.src=l(t.gatewayConfiguration.assetsUrl,t.channel)}}(r),0)}this.bus.on(y.FRAME_READY,function(t){g--,t(0===g)}),this.bus.on(y.INPUT_EVENT,o(m,t.merchantConfiguration.hostedFields.onFieldEvent)),this.destructor.registerFunctionForTeardown(function(){var t,e,n;for(t=0;t<f.injectedNodes.length;t++){for(n=f.injectedNodes[t],e=0;e<n.children.length;e++)n.parent.removeChild(n.children[e]);a(n.parent).remove(h.externalClasses.FOCUSED,h.externalClasses.INVALID,h.externalClasses.VALID)}})}var s=t(77),a=t(74),c=t(82),u=t(158),l=t(204),h=t(207),p=t(157),d=t(73),f=t(208),m=t(206),y=h.events;r.prototype.setupLabelFocus=function(t,e){function n(){r.emit(y.TRIGGER_INPUT_FOCUS,t)}var i,o,r=this.bus;if(m()&&null!=e.id){for(i=p(document.querySelectorAll('label[for="'+e.id+'"]')),i=i.concat(f(e,"label")),o=0;o<i.length;o++)d.addEventListener(i[o],"click",n,!1);this.destructor.registerFunctionForTeardown(function(){for(o=0;o<i.length;o++)d.removeEventListener(i[o],"click",n,!1)})}},r.prototype.teardown=function(t){this.destructor.teardown(t)},e.exports=r},{157:157,158:158,204:204,206:206,207:207,208:208,73:73,74:74,77:77,82:82}],206:[function(t,e,n){"use strict";e.exports=function(){return!/(iPad|iPhone|iPod)/i.test(navigator.userAgent)}},{}],207:[function(t,e,n){"use strict";var i="2.26.0";e.exports={VERSION:i,events:{FRAME_READY:"hosted-fields:FRAME_READY",VALIDATE_STRICT:"hosted-fields:VALIDATE_STRICT",CONFIGURATION:"hosted-fields:CONFIGURATION",TOKENIZATION_REQUEST:"hosted-fields:TOKENIZATION_REQUEST",INPUT_EVENT:"hosted-fields:INPUT_EVENT",TRIGGER_INPUT_FOCUS:"hosted-fields:TRIGGER_INPUT_FOCUS"},externalEvents:{FOCUS:"focus",BLUR:"blur",FIELD_STATE_CHANGE:"fieldStateChange"},defaultMaxLengths:{number:19,postalCode:8,expirationDate:7,expirationMonth:2,expirationYear:4,cvv:3},externalClasses:{FOCUSED:"braintree-hosted-fields-focused",INVALID:"braintree-hosted-fields-invalid",VALID:"braintree-hosted-fields-valid"},defaultIFrameStyle:{border:"none",width:"100%",height:"100%","float":"left"},whitelistedStyles:["-moz-osx-font-smoothing","-moz-transition","-moz-tap-highlight-color","-webkit-font-smoothing","-webkit-transition","-webkit-tap-highlight-color","color","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-weight","line-height","opacity","outline","text-shadow","transition"],whitelistedFields:{number:{name:"credit-card-number",label:"Credit Card Number"},cvv:{name:"cvv",label:"CVV"},expirationDate:{name:"expiration",label:"Expiration Date"},expirationMonth:{name:"expiration-month",label:"Expiration Month"},expirationYear:{name:"expiration-year",label:"Expiration Year"},postalCode:{name:"postal-code",label:"Postal Code"}}}},{}],208:[function(t,e,n){"use strict";function i(t,e){for(var n=t.parentNode,i=[];null!=n;)null!=n.tagName&&n.tagName.toLowerCase()===e&&i.push(n),n=n.parentNode;return i}e.exports=i},{}],209:[function(t,e,n){"use strict";e.exports=t(211)},{211:211}],210:[function(t,e,n){(function(n){"use strict";function i(t){this.configuration=t,this.destructor=new a,this.bus=new c({merchantUrl:n.location.href,channel:this.configuration.channel}),this.container=o.normalizeElement(this.configuration.merchantConfiguration.paypal.container||document.body),this.loggedInView=null,this.loggedOutView=null,this.appView=null,this.merchantPageView=null,this.paymentMethodNonceInputFieldView=null,this.overlayView=null,this.bridgeIframeView=null,b(this,["initAuthFlow","closeAuthFlow"])}var o=t(73),r=t(87),s=t(146),a=t(77),c=t(158),u=t(213),l=t(215),h=t(216),p=t(219),d=t(217),f=t(220),m=t(214),y=t(230),g=t(226),v=t(222),_=t(232),b=t(88);i.prototype.initialize=function(){var t=r(this._handleClickLogin,this);this._createViews(),this.bus.on(c.events.PAYMENT_METHOD_CANCELLED,r(this._handlePaymentMethodCancelled,this)),"dropin"!==this.configuration.integrationType&&this.bus.on(c.events.PAYMENT_METHOD_GENERATED,r(this._handlePaymentMethodGenerated,this)),o.addEventListener(document.body,"click",t),this.destructor.registerFunctionForTeardown(function(){o.removeEventListener(document.body,"click",t)})},i.prototype._createViews=function(){function t(){g.isFirefox()?(i.closeAuthFlow(),i.initAuthFlow()):i.bus.emit(v.events.FOCUS_APP)}var e,n=[],i=this,o="dropin"===this.configuration.integrationType;y.isBridgeIframeRequired()&&(this.bridgeIframeView=new m({container:this.container,paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,channel:this.configuration.channel}),n.push(this.bridgeIframeView)),this.appView=new u({insertFrameFunction:this.configuration.merchantConfiguration.paypal.insertFrameFunction,paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,isHermes:_.isHermesConfiguration(this.configuration),isDropin:o,channel:this.configuration.channel}),n.push(this.appView),o||(this.merchantPageView=new d({channel:this.configuration.channel}),n.push(this.merchantPageView),y.isPopupSupported()&&y.isOverlaySupported()&&(this.overlayView=new p({paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,onFocus:t,onClose:function(){i.bus.emit(v.events.CLOSE_APP)},locale:this.configuration.merchantConfiguration.paypal.locale,channel:this.configuration.channel}),n.push(this.overlayView))),o||this.configuration.merchantConfiguration.paypal.headless||(this.paymentMethodNonceInputFieldView=new f({container:this.container,el:this.configuration.merchantConfiguration.paypal.paymentMethodNonceInputField,channel:this.configuration.channel}),n.push(this.paymentMethodNonceInputFieldView),this.loggedInView=new l({paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,container:this.container,locale:this.configuration.merchantConfiguration.paypal.locale,channel:this.configuration.channel}),n.push(this.loggedInView),this.loggedOutView=new h({paypalAssetsUrl:this.configuration.gatewayConfiguration.paypal.assetsUrl,container:this.container,enablePayPalButton:_.isOnetimeHermesConfiguration(this.configuration),locale:this.configuration.merchantConfiguration.paypal.locale,channel:this.configuration.channel}),n.push(this.loggedOutView)),this.destructor.registerFunctionForTeardown(function(){for(e=0;e<n.length;e++)n[e].teardown()})},i.prototype._handleClickLogin=function(t){for(var e=t.target||t.srcElement;;){if(null==e)return;if(e===t.currentTarget)return;if(this._isButton(e))break;e=e.parentNode}_.preventDefault(t),this.initAuthFlow()},i.prototype.initAuthFlow=function(){this.appView.open()},i.prototype.closeAuthFlow=function(){this.appView.close()},i.prototype._isButton=function(t){var e="braintree-paypal-button"===t.id,n=_.isOnetimeHermesConfiguration(this.configuration)&&t.className.match(/paypal-button(?!-widget)/);return e||n},i.prototype._handlePaymentMethodGenerated=function(t){var e=this.configuration.merchantConfiguration.paypal.onSuccess;t.type===v.NONCE_TYPE&&s(e)&&e(t)},i.prototype._handlePaymentMethodCancelled=function(t){var e=this.configuration.merchantConfiguration.paypal.onCancelled;t.source===v.PAYPAL_INTEGRATION_NAME&&s(e)&&e()},i.prototype.teardown=function(){var t=this;this.destructor.teardown(function(){t.bus.teardown()})},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,158:158,213:213,214:214,215:215,216:216,217:217,219:219,220:220,222:222,226:226,230:230,232:232,73:73,77:77,87:87,88:88}],211:[function(t,e,n){"use strict";function i(t){var e,n;if(n=t.merchantConfiguration.onUnsupported,"function"!=typeof n&&(n=function(t){try{console.log(t)}catch(e){}}),!t.gatewayConfiguration.paypalEnabled)return n(new Error("PayPal is not enabled")),null;if(!h.detectedPostMessage())return n(new Error("unsupported browser detected")),null;if(!t.merchantConfiguration.paypal.container&&!t.merchantConfiguration.paypal.headless)return n(new Error("Please supply a container for the PayPal button to be appended to")),null;if(!u(t))return n(new Error("unsupported protocol detected")),null;if(c(t))return n(new Error("Unvetted merchant client token does not include a payee email")),null;if(f.isHermesConfiguration(t)&&!s(t.merchantConfiguration.paypal.locale))return n(new Error("This PayPal integration does not support this country")),null;if(f.isOnetimeHermesConfiguration(t)){if(!r(t.merchantConfiguration.paypal.currency))return n(new Error("This PayPal integration does not support this currency")),null;if(!a(t.merchantConfiguration.paypal.amount))return n(new Error("Amount must be a number")),null}return e=new l(t),e.initialize(),e}function o(t,e){var n,i=e.length,o=!1;for(n=0;i>n;n++)t.toLowerCase()===e[n].toLowerCase()&&(o=!0);return o}function r(t){return o(t,p.HERMES_SUPPORTED_CURRENCIES)}function s(t){return o(d(t).split("_")[1],p.HERMES_SUPPORTED_COUNTRIES)}function a(t){return t=parseFloat(t),"number"==typeof t&&!isNaN(t)&&t>=0}function c(t){return t.gatewayConfiguration.paypal.unvettedMerchant&&(!f.isHermesConfiguration(t)||!t.gatewayConfiguration.paypal.payeeEmail)}function u(t){return t.gatewayConfiguration.paypal.allowHttp?!0:h.isPopupSupported()?!0:"isMerchantPageHttps"in t?t.isMerchantPageHttps:y.isBrowserHttps()}var l=t(210),h=t(230),p=t(222),d=t(224),f=t(232),m="2.26.0",y=t(73);e.exports={create:i,VERSION:m}},{210:210,222:222,224:224,230:230,232:232,73:73}],212:[function(t,e,n){e.exports={en_us:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},en_uk:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},en_au:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},sv_se:{cancel:"Avbryt",overlay_text:"Ser du inte den säkra PayPal-webbl&auml;saren? Vi hj&auml;lper dig att starta om f&ouml;nstret f&ouml;r att slutf&ouml;ra k&ouml;pet.",continue_link:"Forts&auml;tt"},de_de:{cancel:"Abbrechen",overlay_text:"Sie sehen das sichere Browserfenster von PayPal nicht? Das Fenster wird neu ge&ouml;ffnet, damit Sie Ihren Einkauf abschlie&szlig;en k&ouml;nnen.",continue_link:"Weiter"},fr_fr:{cancel:"Annuler",overlay_text:"Vous ne voyez pas le navigateur s&eacute;curis&eacute; PayPal ? Nous allons vous aider &agrave; relancer la fen&ecirc;tre pour effectuer votre achat.",continue_link:"Continuer"},en_ca:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},fr_ca:{cancel:"Annuler",overlay_text:"Vous ne voyez pas le navigateur s&eacute;curis&eacute; de PayPal ? Nous vous aiderons &agrave; relancer la fen&ecirc;tre afin d'effectuer votre achat.",continue_link:"Continuer"},es_es:{cancel:"Cancelar",overlay_text:"&iquest;No ves el s&iacute;mbolo de navegaci&oacute;n segura de PayPal? Te ayudaremos a abrir de nuevo la ventana para completar la compra.",continue_link:"Continuar"},es_xc:{cancel:"Cancelar",overlay_text:"&iquest;No ve el s&iacute;mbolo de navegaci&oacute;n segura de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra.",continue_link:"Continuar"},fr_xc:{cancel:"Annuler",overlay_text:"Le navigateur s&eacute;curis&eacute; de PayPal n'appara&icirc;t pas ? Nous allons vous aider &agrave; rouvrir la fen&ecirc;tre pour finaliser votre achat.",continue_link:"Continuer"},nl_nl:{cancel:"Annuleren",overlay_text:"Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen zodat u uw aankoop kunt voltooien.",continue_link:"Doorgaan"},pt_pt:{cancel:"Cancelar",overlay_text:"N&atilde;o est&aacute; a ver a indica&ccedil;&atilde;o de liga&ccedil;&atilde;o segura PayPal no browser? Vamos ent&atilde;o voltar a abrir a janela para concluir a sua compra.",continue_link:"Continuar"},ru_ru:{cancel:"Отмена",overlay_text:"Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку.",continue_link:"Продолжить"},da_dk:{cancel:"Annuller",overlay_text:"Kan du ikke se PayPals sikre browser? Vi hj&aelig;lper dig med at &aring;bne vinduet igen, s&aring; du kan betale.",continue_link:"Forts&aelig;t"},it_it:{cancel:"Annulla",overlay_text:"Non vedi il browser sicuro di PayPal? Ti aiuteremo a riavviare la pagina per completare l'acquisto.",continue_link:"Continua"},no_no:{cancel:"Avbryt",overlay_text:"Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med &aring; &aring;pne vinduet p&aring; nytt s&aring; du kan fullf&oslash;re kj&oslash;pet.",continue_link:"Fortsett"},pl_pl:{cancel:"Anuluj",overlay_text:"Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu.",continue_link:"Kontynuuj"},tr_tr:{cancel:"İptal",overlay_text:"G&uuml;venli PayPal tarayıcısını g&ouml;rm&uuml;yor musunuz? Alışverişinizi tamamlamak i&ccedil;in pencereyi yeniden başlatmanıza yardımcı olacağız.",continue_link:"Devam"},zh_xc:{cancel:"取消",overlay_text:"没有看到安全的PayPal浏览器？我们将帮助您重启窗口以完成购物。",continue_link:"继续"},en_hk:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},zh_hk:{cancel:"取消",overlay_text:"看不到安全的 PayPal 瀏覽器視窗？我們會助你重新啟動視窗，以完成購物。",continue_link:"繼續"},en_my:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},en_nz:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"},en_sg:{cancel:"Cancel",overlay_text:"Don't see the secure PayPal browser? We'll help you re-launch the window to complete your purchase.",continue_link:"Continue"}}},{}],213:[function(t,e,n){(function(n){"use strict";function i(t){var e=this;this.options=t||{},this.destructor=new a,this.bus=new c({merchantUrl:n.location.href,channel:this.options.channel}),this.destructor.registerFunctionForTeardown(function(){e.bus.teardown()}),this._initialize()}var o=t(87),r=t(146),s=t(230),a=t(77),c=t(158),u=t(222),l=t(221),h=t(218);i.prototype._initialize=function(){var t=this;this.app=s.isPopupSupported()?new l({src:this._buildUrl(),isHermes:this.options.isHermes,channel:this.options.channel}):new h({src:this._buildUrl(),isDropin:this.options.isDropin,isHermes:this.options.isHermes,insertFrameFunction:this.options.insertFrameFunction,channel:this.options.channel}),this.destructor.registerFunctionForTeardown(function(){t.app.teardown()}),this.bus.on(u.events.CLOSE_APP,o(this.close,this)),this.bus.on(u.events.FOCUS_APP,o(this.focus,this)),this.bus.on(c.events.PAYMENT_METHOD_GENERATED,o(this._handlePaymentMethodGenerated,this)),this.bus.on(c.events.UI_POPUP_FORCE_CLOSE,o(this._handleForceClose,this))},i.prototype._buildUrl=function(){var t=this.options.paypalAssetsUrl;return t+="/pwpp/",t+=u.VERSION,t+="/html/braintree-frame.html",t+="#"+this.options.channel},i.prototype.open=function(){this.focus(),this.app.open(),this.poll()},i.prototype._handleForceClose=function(t){t.target===u.PAYPAL_INTEGRATION_NAME&&this.close()},i.prototype.close=function(){this.app.close()},i.prototype.focus=function(){r(this.app.focus)&&this.app.focus()},i.prototype.isClosed=function(){return this.app.isClosed()},i.prototype.stopPolling=function(){clearInterval(this.pollId)},i.prototype.poll=function(){var t=this;this.pollId=setInterval(function(){t.isClosed()&&t._handleClosed()},100)},i.prototype._handlePaymentMethodGenerated=function(t){t.type===u.NONCE_TYPE&&this.close()},i.prototype._handleClosed=function(){this.stopPolling(),this.close(),s.isPopupSupported()&&(this.app.el=null)},i.prototype.teardown=function(){this.destructor.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,158:158,218:218,221:221,222:222,230:230,77:77,87:87}],214:[function(t,e,n){"use strict";function i(t){this.options=t||{},this.el=r({src:this._buildUrl(),name:o.BRIDGE_FRAME_NAME,height:1,width:1,style:{position:"static",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",background:"transparent"}}),this.options.container.appendChild(this.el)}var o=t(222),r=t(82);i.prototype._buildUrl=function(){var t=this.options.paypalAssetsUrl;return t+="/pwpp/",t+=o.VERSION,t+="/html/bridge-frame.html",t+="#"+this.options.channel},i.prototype.teardown=function(){this.options.container.removeChild(this.el)},e.exports=i},{222:222,82:82}],215:[function(t,e,n){(function(n){"use strict";function i(t){var e;this.options=t||{},this.wrapper=this.options.container||document.body,this.destructor=new s,this.bus=new a({merchantUrl:n.location.href,channel:t.channel}),e=h(this.options.locale,p),this.translation=e.translation,this._initialize()}var o=t(73),r=t(87),s=t(77),a=t(158),c=t(232),u=t(231),l=t(222),h=t(225),p=t(212);i.prototype._initialize=function(){var t=this,e=r(this._handleClickLogout,this);this._createViewContainer(),this._createPayPalName(),this._createEmailNode(),this._createLogoutNode(),o.addEventListener(this.logoutNode,"click",e),this.destructor.registerFunctionForTeardown(function(){o.removeEventListener(t.logoutNode,"click",e)}),this.bus.on(a.events.PAYMENT_METHOD_GENERATED,r(this._handlePaymentMethodGenerated,this)),this.bus.on(a.events.PAYMENT_METHOD_CANCELLED,r(this._handlePaymentMethodCancelled,this))},i.prototype._createViewContainer=function(){var t=["display: none","max-width: 500px","overflow: hidden","padding: 16px","background-image: url("+this.options.paypalAssetsUrl+"/pwpp/"+l.VERSION+"/images/paypal-small.png)","background-image: url("+this.options.paypalAssetsUrl+"/pwpp/"+l.VERSION+"/images/paypal-small.svg), none","background-position: 20px 50%","background-repeat: no-repeat","background-size: 13px 15px","border-top: 1px solid #d1d4d6","border-bottom: 1px solid #d1d4d6"].join(";");this.container=document.createElement("div"),this.container.id="braintree-paypal-loggedin",this.container.style.cssText=t,this.wrapper.appendChild(this.container)},i.prototype._createPayPalName=function(){var t=["color: #283036","font-size: 13px","font-weight: 800",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"margin-left: 36px","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");return this.payPalName=document.createElement("span"),this.payPalName.id="bt-pp-name",this.payPalName.innerHTML="PayPal",this.payPalName.style.cssText=t,this.container.appendChild(this.payPalName)},i.prototype._createEmailNode=function(){var t=["color: #6e787f","font-size: 13px",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"margin-left: 5px","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");this.emailNode=document.createElement("span"),
this.emailNode.id="bt-pp-email",this.emailNode.style.cssText=t,this.container.appendChild(this.emailNode)},i.prototype._createLogoutNode=function(){var t=["color: #3d95ce","font-size: 11px",'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif',"line-height: 20px","margin: 0 0 0 25px","padding: 0","background-color: transparent","border: 0","cursor: pointer","text-decoration: underline","float: right","-webkit-font-smoothing: antialiased","-moz-font-smoothing: antialiased","-ms-font-smoothing: antialiased","font-smoothing: antialiased"].join(";");this.logoutNode=document.createElement("button"),this.logoutNode.id="bt-pp-cancel",this.logoutNode.innerHTML=this.translation.cancel,this.logoutNode.setAttribute("type","button"),this.logoutNode.style.cssText=t,this.container.appendChild(this.logoutNode)},i.prototype.show=function(t){this.container.style.display="block",u.setTextContent(this.emailNode,t)},i.prototype.hide=function(){this.container.style.display="none"},i.prototype._handleClickLogout=function(t){c.preventDefault(t),this.bus.emit(a.events.PAYMENT_METHOD_CANCELLED,{source:l.PAYPAL_INTEGRATION_NAME})},i.prototype._handlePaymentMethodGenerated=function(t){var e;t.type===l.NONCE_TYPE&&(e=t&&t.details&&t.details.email?t.details.email:"",this.show(e))},i.prototype._handlePaymentMethodCancelled=function(t){t.source===l.PAYPAL_INTEGRATION_NAME&&this.hide()},i.prototype.teardown=function(){this.wrapper.removeChild(this.container),this.destructor.teardown(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,212:212,222:222,225:225,231:231,232:232,73:73,77:77,87:87}],216:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.wrapper=this.options.container||document.body,this.bus=new r({merchantUrl:n.location.href,channel:t.channel}),this._initialize()}var o=t(87),r=t(158),s=t(222),a=t(224);i.prototype._initialize=function(){this.createViewContainer(),this.options.enablePayPalButton?this.createCheckoutWithPayPalButton():this.createPayWithPayPalButton(),this.bus.on(r.events.PAYMENT_METHOD_GENERATED,o(this._handlePaymentMethodGenerated,this)),this.bus.on(r.events.PAYMENT_METHOD_CANCELLED,o(this._handlePaymentMethodCancelled,this))},i.prototype.createViewContainer=function(){this.container=document.createElement("div"),this.container.id="braintree-paypal-loggedout",this.wrapper.appendChild(this.container),this.loginNode=this.container},i.prototype.createPayWithPayPalButton=function(){var t=document.createElement("a"),e=new Image,n=["max-width: 100%","display: block","width: 100%","height: 100%","outline: none","border: 0"].join(";"),i=["display: block","width: 115px","height: 44px","overflow: hidden"].join(";");t.id="braintree-paypal-button",t.href="#",t.style.cssText=i,e.src=this.options.paypalAssetsUrl+"/pwpp/"+s.VERSION+"/images/pay-with-paypal.png",e.setAttribute("alt","Pay with PayPal"),e.style.cssText=n,t.appendChild(e),this.container.appendChild(t)},i.prototype.createCheckoutWithPayPalButton=function(){var t,e=document.createElement("script"),n={"data-merchant":"merchant-id","data-button":"checkout","data-type":"button","data-color":"blue","data-lc":a(this.options.locale)};e.src="//www.paypalobjects.com/api/button.js",e.async=!0;for(t in n)n.hasOwnProperty(t)&&e.setAttribute(t,n[t]);this.container.appendChild(e)},i.prototype.show=function(){this.container.style.display="block"},i.prototype.hide=function(){this.container.style.display="none"},i.prototype._handlePaymentMethodGenerated=function(t){t.type===s.NONCE_TYPE&&this.hide()},i.prototype._handlePaymentMethodCancelled=function(t){t.source===s.PAYPAL_INTEGRATION_NAME&&this.show()},i.prototype.teardown=function(){this.wrapper.removeChild(this.container),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,222:222,224:224,87:87}],217:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.bus=new s({merchantUrl:n.location.href,channel:t.channel}),this.bus.on(s.events.UI_MODAL_DID_OPEN,a(this.lockWindowSize,this)),this.bus.on(s.events.UI_MODAL_DID_CLOSE,a(this.unlockWindowSize,this))}function o(t){var e=window.getComputedStyle?getComputedStyle(t):t.currentStyle;return{overflow:e.overflow||"",height:t.style.height||""}}function r(){return{html:{node:document.documentElement,styles:o(document.documentElement)},body:{node:document.body,styles:o(document.body)}}}var s=t(158),a=t(87),c=t(222);i.prototype.lockWindowSize=function(){this.defaultStyles=r(),document.documentElement.style.height="100%",document.documentElement.style.overflow="hidden",document.body.style.height="100%",document.body.style.overflow="hidden"},i.prototype.unlockWindowSize=function(){this.defaultStyles&&(document.documentElement.style.height=this.defaultStyles.html.styles.height,document.documentElement.style.overflow=this.defaultStyles.html.styles.overflow,document.body.style.height=this.defaultStyles.body.styles.height,document.body.style.overflow=this.defaultStyles.body.styles.overflow,delete this.defaultStyles)},i.prototype._handleUIModalDidOpen=function(t){t.source===c.PAYPAL_INTEGRATION_NAME&&this.lockWindowSize()},i.prototype._handleUIModalDidClose=function(t){t.source===c.PAYPAL_INTEGRATION_NAME&&this.unlockWindowSize()},i.prototype.teardown=function(){this.unlockWindowSize(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,222:222,87:87}],218:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t||{},this.container=document.body,this.bus=new u({merchantUrl:n.location.href,channel:t.channel}),this.options.isDropin?this._open=this._openHeadless:this._attachBusEvents(),this._initialize()}var o=t(87),r=t(150),s=t(146),a=t(228),c=t(222),u=t(158),l=t(82),h=t(230).isIosUIWebView,p={position:"fixed",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",zIndex:20001,background:"#FFFFFF"};i.prototype._attachBusEvents=function(){this.bus.on(c.events.OPEN_MODAL,o(this.open,this))},i.prototype._initialize=function(){var t=this.options.isHermes?c.HERMES_FRAME_NAME:c.FRAME_NAME;a.isIos()?(this.el=document.createElement("div"),this.el.className=c.FRAME_CONTAINER_NAME,r(this.el.style,p,{height:this.options.height||"100%",width:this.options.width||"100%",overflow:"scroll"}),h()||(this.el.style.webkitOverflowScrolling="touch"),this.el.appendChild(l({src:this.options.src,name:t,scrolling:"yes",height:"100%",width:"100%",style:{position:"absolute",top:0,left:0,border:0,outline:"none",background:"#FFFFFF"}}))):this.el=l({src:this.options.src,name:t,scrolling:"yes",height:this.options.height||"100%",width:this.options.width||"100%",style:p})},i.prototype.isClosed=function(){return!this.container.contains(this.el)},i.prototype._openHeadless=function(){this.bus.emit(c.events.OPEN_MODAL)},i.prototype._open=function(){s(this.options.insertFrameFunction)?this.options.insertFrameFunction(this.el.src):this.container.appendChild(this.el),this.bus.emit(u.events.UI_MODAL_DID_OPEN,{source:c.PAYPAL_INTEGRATION_NAME})},i.prototype.open=function(){this.isClosed()&&this._open()},i.prototype.close=function(){this.isClosed()||(this.container.removeChild(this.el),this.bus.emit(u.events.UI_MODAL_DID_CLOSE,{source:c.PAYPAL_INTEGRATION_NAME}))},i.prototype.teardown=function(){this.close(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,150:150,158:158,222:222,228:228,230:230,82:82,87:87}],219:[function(t,e,n){(function(n){"use strict";function i(t){var e;this.options=t,this.spriteSrc=this.options.paypalAssetsUrl+"/pwpp/"+u.VERSION+"/images/pp_overlay_sprite.png",this.bus=new c({merchantUrl:n.location.href,channel:t.channel}),this.destructor=new a,e=l(this.options.locale,h),this.translation=e.translation,this._create(),this._setupEvents(),this.bus.on(c.events.UI_POPUP_DID_OPEN,r(this._handleUIPopupDidOpen,this)),this.bus.on(c.events.UI_POPUP_DID_CLOSE,r(this._handleUIPopupDidClose,this))}var o=t(73),r=t(87),s=t(146),a=t(77),c=t(158),u=t(222),l=t(225),h=t(212);i.prototype.open=function(){document.body.contains(this.el)||document.body.appendChild(this.el)},i.prototype.close=function(){document.body.contains(this.el)&&document.body.removeChild(this.el)},i.prototype._handleUIPopupDidClose=function(t){t.source===u.PAYPAL_INTEGRATION_NAME&&this.close()},i.prototype._handleUIPopupDidOpen=function(t){t.source===u.PAYPAL_INTEGRATION_NAME&&this.open()},i.prototype._create=function(){this.el=document.createElement("div"),this.el.className="bt-overlay",this._setStyles(this.el,["z-index: 20001","position: fixed","top: 0","left: 0","height: 100%","width: 100%","text-align: center","background: #000","background: rgba(0,0,0,0.7)",'-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=52)"']),this.el.appendChild(this._createCloseIcon()),this.el.appendChild(this._createMessage())},i.prototype._createCloseIcon=function(){return this.closeIcon=document.createElement("div"),this.closeIcon.className="bt-close-overlay",this._setStyles(this.closeIcon,["position: absolute","top: 10px","right: 10px","cursor: pointer","background: url("+this.spriteSrc+") no-repeat 0 -67px","height: 14px","width: 14px"]),this.closeIcon},i.prototype._createMessage=function(){var t=document.createElement("div");return this._setStyles(t,["position: relative","top: 50%","max-width: 350px",'font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif',"font-size: 14px","line-height: 20px","margin: -70px auto 0"]),t.appendChild(this._createLogo()),t.appendChild(this._createExplanation()),t.appendChild(this._createFocusLink()),t},i.prototype._createExplanation=function(){return this.explanation=document.createElement("div"),this._setStyles(this.explanation,["color: #FFF","margin-bottom: 20px"]),this.explanation.innerHTML=this.translation.overlay_text,this.explanation},i.prototype._createLogo=function(){var t=document.createElement("div");return this._setStyles(t,["background: url("+this.spriteSrc+") no-repeat 0 0","width: 94px","height: 25px","margin: 0 auto 26px auto"]),t},i.prototype._createFocusLink=function(){return this.focusLink=document.createElement("a"),this._setStyles(this.focusLink,["color: #009be1","cursor: pointer"]),this.focusLink.innerHTML=this.translation.continue_link,this.focusLink},i.prototype._setStyles=function(t,e){var n=e.join(";");t.style.cssText=n},i.prototype._setupEvents=function(){var t=this,e=r(this._handleClose,this),n=r(this._handleFocus,this);o.addEventListener(this.closeIcon,"click",e),o.addEventListener(this.focusLink,"click",n),this.destructor.registerFunctionForTeardown(function(){o.removeEventListener(t.closeIcon,"click",e),o.removeEventListener(t.focusLink,"click",n)})},i.prototype._handleClose=function(t){t.preventDefault(),this.close(),s(this.options.onClose)&&this.options.onClose()},i.prototype._handleFocus=function(t){t.preventDefault(),s(this.options.onFocus)&&this.options.onFocus()},i.prototype.teardown=function(){this.bus.teardown(),this.destructor.teardown(),this.close()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,158:158,212:212,222:222,225:225,73:73,77:77,87:87}],220:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t||{},this.container=this.options.container||document.body,this.el=this.options.el,this.destructor=new a,this.bus=new c({merchantUrl:n.location.href,channel:t.channel}),this._initialize()}var o=t(73),r=t(87),s=t(146),a=t(77),c=t(158),u=t(222);i.prototype._initialize=function(){var t=this;s(this.el)||(null!=this.el?(this.el=o.normalizeElement(this.el),this.destructor.registerFunctionForTeardown(function(){t.clear()})):this.el=this.create()),this.bus.on(c.events.PAYMENT_METHOD_GENERATED,r(this._handlePaymentMethodGenerated,this)),this.bus.on(c.events.PAYMENT_METHOD_CANCELLED,r(this._handlePaymentMethodCancelled,this))},i.prototype.create=function(){var t=this,e=document.createElement("input");return e.name="payment_method_nonce",e.type="hidden",this.container.appendChild(e),this.destructor.registerFunctionForTeardown(function(){t.container.removeChild(e)}),e},i.prototype.value=function(t){s(this.el)?this.el(t):this.el.value=t},i.prototype.clear=function(){this.value("")},i.prototype._handlePaymentMethodCancelled=function(t){t.source===u.PAYPAL_INTEGRATION_NAME&&this.clear()},i.prototype._handlePaymentMethodGenerated=function(t){t.type===u.NONCE_TYPE&&this.value(t.nonce)},i.prototype.teardown=function(){this.destructor.teardown(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{146:146,158:158,222:222,73:73,77:77,87:87}],221:[function(t,e,n){(function(n){"use strict";function i(t){this.options=t,this.bus=new r({merchantUrl:n.location.href,channel:this.options.channel}),t.isHermes?(this.name=o.HERMES_POPUP_NAME,this.popupHeight=o.HERMES_POPUP_HEIGHT,this.popupWidth=o.HERMES_POPUP_WIDTH):(this.name=o.POPUP_NAME,this.popupHeight=o.POPUP_HEIGHT,this.popupWidth=o.POPUP_WIDTH)}var o=t(222),r=t(158),s=t(226);i.prototype._getPopupOptions=function(){return["height="+this.popupHeight,"width="+this.popupWidth,"top="+this._getTopPosition(),"left="+this._getLeftPosition(),o.POPUP_OPTIONS].join(",")},i.prototype._centerPosition=function(t,e,n){return(t-e)/2+n},i.prototype._getTopPosition=function(){var t=window.outerHeight||document.documentElement.clientHeight,e="undefined"==typeof window.screenY?window.screenTop:window.screenY;return this._centerPosition(t,this.popupHeight,e)},i.prototype._getLeftPosition=function(){var t=window.outerWidth||document.documentElement.clientWidth,e="undefined"==typeof window.screenX?window.screenLeft:window.screenX;return this._centerPosition(t,this.popupWidth,e)},i.prototype.isClosed=function(){return this.el?this.el.closed:void 0},i.prototype.open=function(){(!this.el||this.isClosed())&&(this.el=window.open(this.options.src,this.name,this._getPopupOptions()),this.focus(),this.bus.emit(r.events.UI_POPUP_DID_OPEN,{source:o.PAYPAL_INTEGRATION_NAME}))},i.prototype.close=function(){this.el&&((s.isIE8()&&!this.isClosed()||!s.isIE8())&&this.el.close(),this.bus.emit(r.events.UI_POPUP_DID_CLOSE,{source:o.PAYPAL_INTEGRATION_NAME}))},i.prototype.focus=function(){this.el&&this.el.focus()},i.prototype.teardown=function(){this.close(),this.bus.teardown()},e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{158:158,222:222,226:226}],222:[function(t,e,n){"use strict";var i,o="2.26.0",r=["GET_CLIENT_TOKEN","GET_CLIENT_OPTIONS","OPEN_MODAL","CLOSE_APP","FOCUS_APP"],s={LEGACY_ONETIME:"Legacy Onetime",HERMES_ONETIME:"Hermes Onetime",LEGACY_FUTURE_PAYMENTS:"Legacy Future Payments",HERMES_BILLING_AGREEMENTS:"Hermes Billing Agreements"};for(n.VERSION=o,n.POPUP_NAME="braintree_paypal_popup",n.HERMES_POPUP_NAME="PPFrameRedirect",n.FRAME_NAME="braintree-paypal-frame",n.HERMES_FRAME_NAME="PPFrameRedirect",n.FRAME_CONTAINER_NAME="braintree-paypal-frame-container",n.POPUP_PATH="/pwpp/"+o+"/html/braintree-frame.html",n.POPUP_OPTIONS="resizable,scrollbars",n.POPUP_HEIGHT=470,n.POPUP_WIDTH=410,n.HERMES_POPUP_HEIGHT=535,n.HERMES_POPUP_WIDTH=450,n.BRIDGE_FRAME_NAME="bt-proxy-frame",n.HERMES_SUPPORTED_CURRENCIES=["USD","GBP","EUR","AUD","CAD","DKK","NOK","PLN","SEK","CHF","TRY","BRL","MXN","ILS","SGD","THB","PHP","NZD","HKD","MYR","CZK","JPY","RUB"],n.HERMES_SUPPORTED_COUNTRIES=["US","GB","AU","CA","ES","FR","DE","IT","NL","NO","PL","CH","TR","DK","BE","AT","SE","HK","BR","XC"],n.NONCE_TYPE="PayPalAccount",n.PAYPAL_INTEGRATION_NAME="PayPal",n.ILLEGAL_XHR_ERROR="Illegal XHR request attempted",n.CONFIGURATION_TYPES=s,n.events={},i=0;i<r.length;i++)n.events[r[i]]="paypal:"+r[i]},{}],223:[function(t,e,n){"use strict";e.exports={us:"en_us",gb:"en_uk",uk:"en_uk",de:"de_de",fr:"fr_fr",it:"it_it",es:"es_es",ca:"en_ca",au:"en_au",at:"de_de",be:"en_us",ch:"de_de",dk:"da_dk",nl:"nl_nl",no:"no_no",pl:"pl_pl",se:"sv_se",tr:"tr_tr",bg:"en_us",cy:"en_us",hr:"en_us",is:"en_us",kh:"en_us",mt:"en_us",my:"en_us",ru:"ru_ru"}},{}],224:[function(t,e,n){"use strict";function i(t){return-1!==t.indexOf("_")&&5===t.length}function o(t){var e,n;for(e in s)s.hasOwnProperty(e)&&(e===t?n=s[e]:s[e]===t&&(n=s[e]));return n}function r(t){var e,n;return t=t?t.toLowerCase():"us",t=t.replace(/-/g,"_"),e=i(t)?t:o(t),e?(n=e.split("_"),[n[0],n[1].toUpperCase()].join("_")):"en_US"}var s=t(223);e.exports=r},{223:223}],225:[function(t,e,n){"use strict";function i(t){var e=t?t.toLowerCase().replace(/-/g,"_"):"us";return-1!==e.indexOf("_")&&(e=e.split("_")[1]),e=s[e]?e:"us","uk"===e&&(e="gb"),e}function o(t,e){return t=t.toLowerCase(),e[t]?e[t]:e.en_us}function r(t,e){var n=i(t),r=a(t),s=o(r,e);return{country:n,locale:r,translation:s}}var s=t(223),a=t(224);e.exports=r},{223:223,224:224}],226:[function(t,e,n){"use strict";function i(){return d.matchUserAgent("Android")&&!o()}function o(){return d.matchUserAgent("Chrome")||d.matchUserAgent("CriOS")}function r(){return d.matchUserAgent("Firefox")}function s(){return d.matchUserAgent("Trident")||d.matchUserAgent("MSIE")}function a(){return d.matchUserAgent(/MSIE 8\.0/)}function c(){return d.matchUserAgent("Opera")||d.matchUserAgent("OPR")}function u(){return c()&&"[object OperaMini]"===Object.prototype.toString.call(window.operamini)}function l(){return d.matchUserAgent("Safari")&&!o()&&!i()}function h(){return f.isIos()&&!o()&&!l()}function p(){var t=/Version\/[\w\.]+ Chrome\/[\w\.]+ Mobile/;return f.isAndroid()&&d.matchUserAgent(t)}var d=t(229),f=t(228);e.exports={isAndroid:i,isChrome:o,isFirefox:r,isIE:s,isIE8:a,isOpera:c,isOperaMini:u,isSafari:l,isIosWebView:h,isAndroidWebView:p}},{228:228,229:229}],227:[function(t,e,n){"use strict";function i(){return!o()&&(a.isAndroid()||a.isIpod()||a.isIphone()||s.matchUserAgent("IEMobile"))}function o(){return a.isIpad()||a.isAndroid()&&!s.matchUserAgent("Mobile")}function r(){return!i()&&!o()}var s=t(229),a=t(228);e.exports={isMobile:i,isTablet:o,isDesktop:r}},{228:228,229:229}],228:[function(t,e,n){"use strict";function i(){return u.matchUserAgent("Android")}function o(){return u.matchUserAgent("iPad")}function r(){return u.matchUserAgent("iPod")}function s(){return u.matchUserAgent("iPhone")&&!r()}function a(){return o()||r()||s()}function c(){return u.matchUserAgent("(iPhone|iPod|iPad) OS 9")}var u=t(229);e.exports={isAndroid:i,isIpad:o,isIpod:r,isIphone:s,isIos:a,isIos9:c}},{229:229}],229:[function(t,e,n){"use strict";function i(){return r}function o(t){var e=n.getNativeUserAgent(),i=e.match(t);return i?!0:!1}var r=window.navigator.userAgent;n.getNativeUserAgent=i,n.matchUserAgent=o},{}],230:[function(t,e,n){"use strict";function i(){return o()&&window.outerWidth<600}function o(){return y.test(m)}function r(){return Boolean(window.postMessage)}function s(){if(h.isOperaMini())return!1;if(d.isIos9()&&h.isChrome())return!0;if(p.isDesktop())return!0;if(p.isMobile()||p.isTablet()){if(h.isIE())return!1;if(d.isAndroid())return h.isAndroidWebView()?!1:!0;if(d.isIos())return h.isChrome()?!1:h.isSafari()&&f.matchUserAgent(/OS (?:8_1|8_0|8)(?!_\d)/i)?!1:h.isIosWebView()?!1:!0}return!1}function a(){if(h.isIE8())return!1;try{return window.self===window.top}catch(t){return!1}}function c(){return h.isIE()}function u(){var t=null,e="";try{new ActiveXObject("")}catch(n){e=n.name}try{t=Boolean(new ActiveXObject("htmlfile"))}catch(n){t=!1}return t="ReferenceError"!==e&&t===!1?!1:!0,!t}function l(){return h.isIosWebView()&&!window.indexedDB}var h=t(226),p=t(227),d=t(228),f=t(229),m=window.navigator.userAgent,y=/[Mm]obi|tablet|iOS|Android|IEMobile|Windows\sPhone/;e.exports={isMobile:i,isMobileDevice:o,detectedPostMessage:r,isPopupSupported:s,isOverlaySupported:a,isBridgeIframeRequired:c,isMetroBrowser:u,isIosUIWebView:l}},{226:226,227:227,228:228,229:229}],231:[function(t,e,n){"use strict";function i(t,e){var n="innerText";document&&document.body&&"textContent"in document.body&&(n="textContent"),t[n]=e}e.exports={setTextContent:i}},{}],232:[function(t,e,n){"use strict";function i(){var t,e,n="";for(t=0;32>t;t++)e=Math.floor(16*Math.random()),n+=e.toString(16);return n}function o(t){return/^(true|1)$/i.test(t)}function r(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&apos;")}function s(t){var e,n,i,o,r,s,a,c,u=t.indexOf("?"),l={};if(u>=0&&(t=t.substr(u+1)),0===t.length)return null;for(e=t.split("&"),n=0,i=e.length;i>n;n++)o=e[n],r=o.indexOf("="),s=o.substr(0,r),c=o.substr(r+1),a=decodeURIComponent(c),a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"),"false"===a&&(a=!1),(null==a||"true"===a)&&(a=!0),l[s]=a;return l}function a(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function c(t){var e;return e=Boolean(t.merchantConfiguration.paypal.amount)&&Boolean(t.merchantConfiguration.paypal.currency)?d.CONFIGURATION_TYPES.HERMES_ONETIME:d.CONFIGURATION_TYPES.LEGACY_ONETIME}function u(t){var e;return e=Boolean(t.gatewayConfiguration.paypal.billingAgreementsEnabled)?d.CONFIGURATION_TYPES.HERMES_BILLING_AGREEMENTS:d.CONFIGURATION_TYPES.LEGACY_FUTURE_PAYMENTS}function l(t){var e;return e=Boolean(t.merchantConfiguration.paypal.singleUse)?c(t):u(t)}function h(t){var e=l(t);return e===d.CONFIGURATION_TYPES.HERMES_ONETIME||e===d.CONFIGURATION_TYPES.HERMES_BILLING_AGREEMENTS}function p(t){var e=l(t);return e===d.CONFIGURATION_TYPES.HERMES_ONETIME}var d=t(222),f="function"==typeof String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/,"")},m="function"==typeof window.btoa?function(t){return window.btoa(t)}:function(t){for(var e,n,i,o,r,s,a,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u="",l=0;l<t.length;)e=t.charCodeAt(l++),n=t.charCodeAt(l++),i=t.charCodeAt(l++),o=e>>2,r=(3&e)<<4|n>>4,s=(15&n)<<2|i>>6,a=63&i,isNaN(n)?s=a=64:isNaN(i)&&(a=64),u=u+c.charAt(o)+c.charAt(r)+c.charAt(s)+c.charAt(a);return u};e.exports={trim:f,btoa:m,generateUid:i,castToBoolean:o,htmlEscape:r,parseUrlParams:s,preventDefault:a,isHermesConfiguration:h,isOnetimeHermesConfiguration:p,getConfigurationType:l}},{222:222}]},{},[175])(175)});

(function(){

	$('.window .titlebar a').on('click', function(e){
		e.preventDefault();
	});

})();
(function(){
	var inputs = document.querySelectorAll('.file');

	Array.prototype.forEach.call(inputs, function(input)
	{
		var label = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener('change', function(e)
		{
			var fileName = e.target.value.split('\\').pop();

			if(fileName)
				label.innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});
})();
(function(){
    if(location.hash != ''){
        var links = $('.tabs-url .tab-li a');

        $('.tabs-url .tab-li.active').removeClass('active');

        Array.prototype.forEach.call(links, function(link) {
            var $link = $(link);

            if($link.attr('href') == location.hash){
                $link.parent('.tab-li').addClass('active');
            }
        });

        $('.tabs-url .tab-panel.active').removeClass('active');
        $('.tabs-url .tab-panel' + location.hash).addClass('active');
    }

    $('.tab-li a').on('click', function(e){
        var $this = $(this),
            tab_li = $this.parent('.tab-li');

        if(!$('.tabs').hasClass('tabs-url')){
            e.preventDefault();
        }

        if(!tab_li.hasClass('active')){
            $('.tab-panel.active').removeClass('active');
            $('.tab-panel' + $this.attr('href')).addClass('active');
            $('.tab-li.active').removeClass('active');
            tab_li.addClass('active');
        }
    });    
})();
(function(){

	var $window = $(window),
		$document = $(document),
		$more = $('.more'),
		$more_id = $('#more');

	$document.ready(function(){
		$('.home.section1 section')
			.css('visibility', 'visible')
			.animate({
				opacity: 1
			},600);
	});

	$more.find('a').on('click', function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $more_id.offset().top-35
		},1000);
	});

	$window.on('scroll', function(){

		if($(this).width() >= 1000){
			if($(this).scrollTop() >= 200){
				$more.fadeOut('slow');
			}else{
				$more.fadeIn('slow');
			}
		}

		if($(this).scrollTop() >= $more_id.offset().top - 300){
			$('.home .content>.main').css('visibility', 'visible').animate({
				opacity: 1
			});
		}
	});

	$('.home .menu-toggler').on('click', function(){
		var nav = $('.home.nav');

		nav.toggleClass('open');
		
	});

})();
$('.new-question textarea#body').on('keyup', function() {
	$('.new-question #preview').html(marked(this.value));
});
//# sourceMappingURL=all.js.map
