"use strict";(self["webpackChunkednevnik_plus"]=self["webpackChunkednevnik_plus"]||[]).push([[279],{9279:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(6252);const o=t=>((0,r.dD)("data-v-4b22361a"),t=t(),(0,r.Cn)(),t),i={class:"card content-card"},a=o((()=>(0,r._)("h2",null,"Deinstalacija je završena",-1))),u=o((()=>(0,r._)("div",{class:"bye"},[(0,r._)("div",{class:"messageSent"},"Poslano!"),(0,r._)("form",{action:"https://script.google.com/macros/s/AKfycbw5Fs3Y-Ht3Cs3PMdQhpUW_-Xd_poar4w5C3ae1SmNnfTIUKbwm/exec",method:"POST"},[(0,r._)("div",{style:{"padding-top":"30px"}},[(0,r._)("label",{class:"radio"},[(0,r._)("input",{type:"radio",name:"Option: ",value:"PERFECT"}),(0,r._)("span",null,"Školovanje je završeno i više mi ne treba.")]),(0,r._)("label",{class:"radio"},[(0,r._)("input",{type:"radio",name:"Option: ",value:"NOT GOOD"}),(0,r._)("span",null,"Ne sviđa mi se, očekivao sam više.")]),(0,r._)("label",{class:"radio"},[(0,r._)("input",{type:"radio",name:"Option: ",value:"ERROR"}),(0,r._)("span",null,"Ne radi ispravno.")])]),(0,r._)("div",{class:"msgNsubmit"},[(0,r._)("textarea",{class:"card message",name:"Comment: ",type:"text"}),(0,r._)("a",{class:"submit",type:"submit"},"Pošalji")])])],-1)));function c(t,e,n,o,c,f){return(0,r.wg)(),(0,r.iD)("div",i,[a,(0,r.Uk)(" Hvala vam što ste koristili e-Dnevnik Plus. "),u])}n(560);var f=(0,r.aZ)({name:"Uninstalled",mounted(){function t(t){var e,n=t.elements,r=Object.keys(n).filter((function(t){return"honeypot"!==n[t].name||(e=n[t].value,!1)})).map((function(t){return void 0!==n[t].name?n[t].name:n[t].length>0?n[t].item(0).name:void 0})).filter((function(t,e,n){return n.indexOf(t)==e&&t})),o={};return r.forEach((function(t){var e=n[t];if(o[t]=e.value,e.length){for(var r=[],i=0;i<e.length;i++){var a=e.item(i);(a.checked||a.selected)&&r.push(a.value)}o[t]=r.join(", ")}})),o.formDataNameOrder=JSON.stringify(r),o.formGoogleSheetName=t.dataset.sheet||"responses",o.formGoogleSend=t.dataset.email||"",{data:o,honeypot:e}}function e(e){let n=document.getElementsByTagName("form")[0],r=document.getElementsByClassName("messageSent")[0];n.style.opacity=n.style.maxHeight=0,setTimeout((()=>{r.style.height=r.style.width="auto",r.style.padding="70px 0 70px",r.style.opacity=1,n.remove(),window.onbeforeunload=function(){}}),500),e.preventDefault();var o=t(n),i=o.data;if(o.honeypot)return!1;var a=n.action,u=new XMLHttpRequest;u.open("POST",a),u.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var c=Object.keys(i).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(i[t])})).join("&");u.send(c)}window.onload=function(){let t=document.getElementsByName("Option: "),n=document.getElementsByClassName("message")[0],r=document.getElementsByClassName("submit")[0],o=document.getElementsByClassName("msgNsubmit")[0],i=!1,a=!1;for(let e=0;e<t.length;e++)t[e].addEventListener("click",c);function u(){n.value||!i?r.classList.add("enabled"):r.classList.remove("enabled")}function c(){a||(o.style.display="block",setTimeout((()=>{o.style.height="250px",setTimeout((()=>{o.style.opacity=1}),250)}),10),a=!0),"PERFECT"==this.value?(n.placeholder="Dodaj komentar...",i=!1):"NOT GOOD"==this.value?(n.placeholder="Dodaj prijedlog...",i=!0):(n.placeholder="Objasni što nije ispravno...",i=!0),u()}r.addEventListener("click",e,!1),n.addEventListener("input",u)},window.addEventListener("keydown",(function(t){if(("U+000A"==t.keyIdentifier||"Enter"==t.keyIdentifier||13==t.keyCode)&&"INPUT"==t.target.nodeName&&"text"==t.target.type)return t.preventDefault(),!1}),!0)}}),s=n(3744);const l=(0,s.Z)(f,[["render",c],["__scopeId","data-v-4b22361a"]]);var p=l},509:function(t,e,n){var r=n(9985),o=n(3691),i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not a function")}},5027:function(t,e,n){var r=n(8999),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not an object")}},4328:function(t,e,n){var r=n(5290),o=n(7578),i=n(6310),a=function(t){return function(e,n,a){var u,c=r(e),f=i(c),s=o(a,f);if(t&&n!==n){while(f>s)if(u=c[s++],u!==u)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},5649:function(t,e,n){var r=n(7697),o=n(2297),i=TypeError,a=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(o(t)&&!a(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},6648:function(t,e,n){var r=n(8844),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},8758:function(t,e,n){var r=n(6812),o=n(9152),i=n(2474),a=n(2560);t.exports=function(t,e,n){for(var u=o(e),c=a.f,f=i.f,s=0;s<u.length;s++){var l=u[s];r(t,l)||n&&r(n,l)||c(t,l,f(e,l))}}},5773:function(t,e,n){var r=n(7697),o=n(2560),i=n(5684);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},5684:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},1880:function(t,e,n){var r=n(9985),o=n(2560),i=n(8702),a=n(5014);t.exports=function(t,e,n,u){u||(u={});var c=u.enumerable,f=void 0!==u.name?u.name:e;if(r(n)&&i(n,f,u),u.global)c?t[e]=n:a(e,n);else{try{u.unsafe?t[e]&&(c=!0):delete t[e]}catch(s){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},5014:function(t,e,n){var r=n(9037),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},7697:function(t,e,n){var r=n(3689);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6420:function(t,e,n){var r=n(9037),o=n(8999),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},5565:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},71:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(t,e,n){var r,o,i=n(9037),a=n(71),u=i.process,c=i.Deno,f=u&&u.versions||c&&c.version,s=f&&f.v8;s&&(r=s.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},2739:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(t,e,n){var r=n(9037),o=n(2474).f,i=n(5773),a=n(1880),u=n(5014),c=n(8758),f=n(5266);t.exports=function(t,e){var n,s,l,p,v,d,y=t.target,m=t.global,h=t.stat;if(s=m?r:h?r[y]||u(y,{}):(r[y]||{}).prototype,s)for(l in e){if(v=e[l],t.dontCallGetSet?(d=o(s,l),p=d&&d.value):p=s[l],n=f(m?l:y+(h?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof v==typeof p)continue;c(v,p)}(t.sham||p&&p.sham)&&i(v,"sham",!0),a(s,l,v,t)}}},3689:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},7215:function(t,e,n){var r=n(3689);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2615:function(t,e,n){var r=n(7215),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1236:function(t,e,n){var r=n(7697),o=n(6812),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,f=u&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:f}},8844:function(t,e,n){var r=n(7215),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);t.exports=r?a:function(t){return function(){return i.apply(t,arguments)}}},6058:function(t,e,n){var r=n(9037),o=n(9985),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},4849:function(t,e,n){var r=n(509),o=n(981);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},9037:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(t,e,n){var r=n(8844),o=n(690),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},7248:function(t){t.exports={}},8506:function(t,e,n){var r=n(7697),o=n(3689),i=n(6420);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(t,e,n){var r=n(8844),o=n(3689),i=n(6648),a=Object,u=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?u(t,""):a(t)}:a},6738:function(t,e,n){var r=n(8844),o=n(9985),i=n(4091),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},618:function(t,e,n){var r,o,i,a=n(9834),u=n(9037),c=n(8999),f=n(5773),s=n(6812),l=n(4091),p=n(2713),v=n(7248),d="Object already initialized",y=u.TypeError,m=u.WeakMap,h=function(t){return i(t)?o(t):r(t,{})},g=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw new y("Incompatible receiver, "+t+" required");return n}};if(a||l.state){var b=l.state||(l.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw new y(d);return e.facade=t,b.set(t,e),e},o=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var x=p("state");v[x]=!0,r=function(t,e){if(s(t,x))throw new y(d);return e.facade=t,f(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:h,getterFor:g}},2297:function(t,e,n){var r=n(6648);t.exports=Array.isArray||function(t){return"Array"===r(t)}},9985:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},5266:function(t,e,n){var r=n(3689),o=n(9985),i=/#|\.prototype\./,a=function(t,e){var n=c[u(t)];return n===s||n!==f&&(o(e)?r(e):!!e)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},f=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},981:function(t){t.exports=function(t){return null===t||void 0===t}},8999:function(t,e,n){var r=n(9985);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3931:function(t){t.exports=!1},734:function(t,e,n){var r=n(6058),o=n(9985),i=n(3622),a=n(9525),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,u(t))}},6310:function(t,e,n){var r=n(3126);t.exports=function(t){return r(t.length)}},8702:function(t,e,n){var r=n(8844),o=n(3689),i=n(9985),a=n(6812),u=n(7697),c=n(1236).CONFIGURABLE,f=n(6738),s=n(618),l=s.enforce,p=s.get,v=String,d=Object.defineProperty,y=r("".slice),m=r("".replace),h=r([].join),g=u&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),b=String(String).split("String"),x=t.exports=function(t,e,n){"Symbol("===y(v(e),0,7)&&(e="["+m(v(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!a(t,"name")||c&&t.name!==e)&&(u?d(t,"name",{value:e,configurable:!0}):t.name=e),g&&n&&a(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?u&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=l(t);return a(r,"source")||(r.source=h(b,"string"==typeof e?e:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||f(this)}),"toString")},8828:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2560:function(t,e,n){var r=n(7697),o=n(8506),i=n(5648),a=n(5027),u=n(8360),c=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";e.f=r?i?function(t,e,n){if(a(t),e=u(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&v in n&&!n[v]){var r=s(t,e);r&&r[v]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return f(t,e,n)}:f:function(t,e,n){if(a(t),e=u(e),a(n),o)try{return f(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},2474:function(t,e,n){var r=n(7697),o=n(2615),i=n(9556),a=n(5684),u=n(5290),c=n(8360),f=n(6812),s=n(8506),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=c(e),s)try{return l(t,e)}catch(n){}if(f(t,e))return a(!o(i.f,t,e),t[e])}},2741:function(t,e,n){var r=n(4948),o=n(2739),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},7518:function(t,e){e.f=Object.getOwnPropertySymbols},3622:function(t,e,n){var r=n(8844);t.exports=r({}.isPrototypeOf)},4948:function(t,e,n){var r=n(8844),o=n(6812),i=n(5290),a=n(4328).indexOf,u=n(7248),c=r([].push);t.exports=function(t,e){var n,r=i(t),f=0,s=[];for(n in r)!o(u,n)&&o(r,n)&&c(s,n);while(e.length>f)o(r,n=e[f++])&&(~a(s,n)||c(s,n));return s}},9556:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},5899:function(t,e,n){var r=n(2615),o=n(9985),i=n(8999),a=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&o(n=t.toString)&&!i(u=r(n,t)))return u;if(o(n=t.valueOf)&&!i(u=r(n,t)))return u;if("string"!==e&&o(n=t.toString)&&!i(u=r(n,t)))return u;throw new a("Can't convert object to primitive value")}},9152:function(t,e,n){var r=n(6058),o=n(8844),i=n(2741),a=n(7518),u=n(5027),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=a.f;return n?c(e,n(t)):e}},4684:function(t,e,n){var r=n(981),o=TypeError;t.exports=function(t){if(r(t))throw new o("Can't call method on "+t);return t}},2713:function(t,e,n){var r=n(3430),o=n(4630),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4091:function(t,e,n){var r=n(9037),o=n(5014),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},3430:function(t,e,n){var r=n(3931),o=n(4091);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.35.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(t,e,n){var r=n(3615),o=n(3689),i=n(9037),a=i.String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!a(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(t,e,n){var r=n(8700),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5290:function(t,e,n){var r=n(4413),o=n(4684);t.exports=function(t){return r(o(t))}},8700:function(t,e,n){var r=n(8828);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},3126:function(t,e,n){var r=n(8700),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},690:function(t,e,n){var r=n(4684),o=Object;t.exports=function(t){return o(r(t))}},8732:function(t,e,n){var r=n(2615),o=n(8999),i=n(734),a=n(4849),u=n(5899),c=n(4201),f=TypeError,s=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=a(t,s);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw new f("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},8360:function(t,e,n){var r=n(8732),o=n(734);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},3691:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},4630:function(t,e,n){var r=n(8844),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},9525:function(t,e,n){var r=n(146);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(t,e,n){var r=n(7697),o=n(3689);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:function(t,e,n){var r=n(9037),o=n(9985),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},4201:function(t,e,n){var r=n(9037),o=n(3430),i=n(6812),a=n(4630),u=n(146),c=n(9525),f=r.Symbol,s=o("wks"),l=c?f["for"]||f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)||(s[t]=u&&i(f,t)?f[t]:l("Symbol."+t)),s[t]}},560:function(t,e,n){var r=n(9989),o=n(690),i=n(6310),a=n(5649),u=n(5565),c=n(3689),f=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},l=f||!s();r({target:"Array",proto:!0,arity:1,forced:l},{push:function(t){var e=o(this),n=i(e),r=arguments.length;u(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return a(e,n),n}})}}]);
//# sourceMappingURL=279.68f0e1a1.js.map