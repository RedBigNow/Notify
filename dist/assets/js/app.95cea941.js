(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05aa":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("header",[n("div",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-content"},[n("div",{staticClass:"logo"},[t._v("NOTIFY")]),n("ul",{staticClass:"navbar-list"},t._l(t.links,(function(e){return n("li",{key:e.title,staticClass:"navbar-item"},[n("router-link",{staticClass:"navbar-link",attrs:{title:e.title,to:e.url}},[t._v(t._s(e.title))])],1)})),0)])])])]),n("router-view")],1)},s=[],i={data:function(){return{links:[{title:"Home",url:"/"},{title:"Notify",url:"/notify"}]}}},o=i,c=(n("5c0b"),n("2877")),l=Object(c["a"])(o,a,s,!1,null,null,null),u=l.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",[t._v("Home page")])])])])}],d={},m=Object(c["a"])(d,p,v,!1,null,null,null),_=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("PAGE NOT FOUND!")]),n("p",[t._v("Go to "),n("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v(" main page")]),t._v(" ?")],1)])])])},y=[],h=(n("e787"),{}),g=Object(c["a"])(h,b,y,!1,null,"d8cc83a2",null),w=g.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"notify__wrapper"},[t._m(0),n("div",{staticClass:"notify__content"},[n("notify",{attrs:{messages:t.messages}})],1)])])])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notify__title"},[n("p",[t._v("Notify App")])])}],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("transition-group",{attrs:{name:"list",tag:"tbody"}},t._l(t.messages,(function(e){return n("tr",{key:e.title},[n("td",[n("span",[t._v(t._s(e.title))])])])})),0)],1)},x=[],k={props:{messages:{type:Array,required:!0}}},E=k,P=(n("8475"),Object(c["a"])(E,j,x,!1,null,"6c302d51",null)),$=P.exports,S={components:{notify:$},data:function(){return{messages:[{title:"message 1"},{title:"message 2"},{title:"message 3"},{title:"message 4"},{title:"message 5"},{title:"message 6"}]}}},N=S,T=(n("a080"),Object(c["a"])(N,C,O,!1,null,"940a4570",null)),M=T.exports;r["a"].use(f["a"]);var A=new f["a"]({routes:[{path:"/",name:"home",component:_},{path:"*",name:"notFound",component:w},{path:"/notify",name:"notify",component:M}]}),F=n("2f62");r["a"].use(F["a"]);var G=new F["a"].Store({modules:{}});n("c1c3");r["a"].config.productionTip=!1,new r["a"]({router:A,store:G,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},8475:function(t,e,n){"use strict";n("d81e")},"9c0c":function(t,e,n){},a080:function(t,e,n){"use strict";n("05aa")},c1c3:function(t,e,n){},d81e:function(t,e,n){},e787:function(t,e,n){"use strict";n("fb5e")},fb5e:function(t,e,n){}});