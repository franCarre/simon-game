(function(e){function t(t){for(var i,r,o=t[0],a=t[1],l=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},c={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/simon-game/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4e47":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SimonGame")],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Simon Says")]),n("div",{staticClass:"container"},[n("div",{staticClass:"circle"},[n("div",{staticClass:"color red",class:{lit:e.isLit[1]},on:{click:function(t){return e.clicked(1)}}}),n("div",{staticClass:"color blue",class:{lit:e.isLit[2]},on:{click:function(t){return e.clicked(2)}}}),n("div",{staticClass:"color yellow",class:{lit:e.isLit[3]},on:{click:function(t){return e.clicked(3)}}}),n("div",{staticClass:"color green",class:{lit:e.isLit[4]},on:{click:function(t){return e.clicked(4)}}})]),n("div",{staticClass:"info"},[n("h2",[e._v("Round: "+e._s(e.level))]),n("button",{staticClass:"btn",on:{click:e.startGame}},[e._v("Start")]),e.isWrong?n("p",[e._v("Sorry, you lost after "+e._s(e.score)+" rounds!")]):e._e(),n("h2",[e._v("Difficulty: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.difficulty,expression:"difficulty"}],attrs:{type:"radio",value:"1500"},domProps:{checked:e._q(e.difficulty,"1500")},on:{change:function(t){e.difficulty="1500"}}}),n("label",[e._v("Easy 1.5s")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.difficulty,expression:"difficulty"}],attrs:{type:"radio",value:"1000"},domProps:{checked:e._q(e.difficulty,"1000")},on:{change:function(t){e.difficulty="1000"}}}),n("label",[e._v("Normal 1s")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.difficulty,expression:"difficulty"}],attrs:{type:"radio",value:"400"},domProps:{checked:e._q(e.difficulty,"400")},on:{change:function(t){e.difficulty="400"}}}),n("label",[e._v("Hard 0.4s")])])])])},o=[],a={name:"SimonGame",data:function(){return{started:!1,level:0,score:0,gameSequence:[],playerSequence:[],sequenceInterval:null,isClickable:!1,isWrong:!1,difficulty:1e3,sounds:[new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")],isLit:{1:!1,2:!1,3:!1,4:!1}}},methods:{startGame:function(){this.started=!0,this.level=0,this.score=0,this.gameSequence=[],this.playerSequence=[],this.isWrong=!1,clearInterval(this.sequenceInterval),this.nextSequence()},clicked:function(e){this.isClickable&&(this.playSound(e),this.highlight(e),this.playerSequence.push(e),this.checkAnswer())},highlight:function(e){var t=this;this.isLit[e]=!0,setTimeout((function(){t.isLit[e]=!1}),300)},playSound:function(e){this.sounds[e-1].play()},nextSequence:function(e){var t=this,n=0,i=0===this.gameSequence.length?1e3:this.difficulty;this.isClickable=!1,e||this.gameSequence.push(Math.floor(4*Math.random()+1)),this.sequenceInterval=setInterval((function(){if(n>=t.gameSequence.length)return clearInterval(t.sequenceInterval),t.isClickable=!0;t.playSound(t.gameSequence[n]),t.highlight(t.gameSequence[n]),n++}),i)},checkAnswer:function(){for(var e=0;e<this.playerSequence.length;e++)this.playerSequence[e]!==this.gameSequence[e]&&(this.playerSequence=[],this.level=0,this.isWrong=!0,this.isClickable=!1);this.playerSequence.length===this.gameSequence.length&&(this.score++,this.level++,this.playerSequence=[],this.nextSequence())}}},l=a,u=(n("d778"),n("2877")),d=Object(u["a"])(l,r,o,!1,null,null,null),f=d.exports,h={name:"App",components:{SimonGame:f}},p=h,m=Object(u["a"])(p,c,s,!1,null,null,null),v=m.exports;i["a"].config.devtools=!0,new i["a"]({render:function(e){return e(v)}}).$mount("#app")},d778:function(e,t,n){"use strict";var i=n("4e47"),c=n.n(i);c.a}});
//# sourceMappingURL=app.44aeaf53.js.map