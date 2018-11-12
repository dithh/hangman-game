(function(e){function t(t){for(var n,i,o=t[0],u=t[1],l=t[2],f=0,p=[];f<o.length;f++)i=o[f],r[i]&&p.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,o=1;o<s.length;o++){var u=s[o];0!==r[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("64a9"),r=s.n(n);r.a},"55e4":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"game-window",attrs:{id:"app"}},[s("game-header"),s("game-details",{attrs:{"guesses-left":this.guessesLeft,"letters-used":this.lettersUsed,guessed:this.guessed}}),s("player-controls",{attrs:{"is-game-on":e.isGameOn},on:{gameStarted:e.startGame,gameFinished:e.endGame,letterSelected:function(t){e.checkGuess(t)}}})],1)},a=[],i=(s("28a5"),s("a481"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Hangman game")])])}],u={},l=u,c=s("2877"),f=Object(c["a"])(l,i,o,!1,null,null,null);f.options.__file="game-header.vue";var p=f.exports,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return!1===e.isGameOn?s("div",{staticClass:"controls"},[s("button",{staticClass:"btn start-game-btn",on:{click:function(t){e.$emit("gameStarted")}}},[e._v("Start the game ")])]):s("div",[s("div",{staticClass:"controls keyboard"},e._l(e.lettersArray,function(t,n){return s("button",{key:n,staticClass:"btn keyboard-btn",on:{click:function(s){e.$emit("letterSelected",t)}}},[e._v("\n      "+e._s(t))])})),s("div",{staticClass:"controls"},[s("button",{staticClass:"btn give-up-btn",on:{click:function(t){e.$emit("gameFinished")}}},[e._v("Give up")])])])},h=[],v={props:["isGameOn"],data:function(){return{lettersArray:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}}},m=v,g=(s("a6a1"),Object(c["a"])(m,d,h,!1,null,null,null));g.options.__file="player-controls.vue";var _=g.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(e._s(e.answer))])])},b=[],y={props:["answer"]},O=y,G=Object(c["a"])(O,w,b,!1,null,null,null);G.options.__file="answer.vue";var j=G.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v(" Lifes left "+e._s(this.guessesLeft))]),s("p",[e._v("Letters used: "),e._l(e.lettersUsed,function(t,n){return s("span",{key:n},[e._v(e._s(t))])})],2),s("p",e._l(e.guessed,function(t,n){return s("span",{key:n},[e._v(e._s(t)+" ")])}))])},x=[],U={props:["guessesLeft","lettersUsed","guessed"]},C=U,L=Object(c["a"])(C,k,x,!1,null,null,null);L.options.__file="game-details.vue";var S=L.exports,$={name:"app",data:function(){return{isGameOn:!1,answer:"",guessesLeft:10,lettersUsed:[],toGuess:0,guessed:[]}},methods:{startGame:function(){var e=this;fetch("https://wordsapiv1.p.mashape.com/words/?random=true",{headers:{"X-Mashape-key":"oDMWIcQhtUmsheKLOq97fytvcg8ap15biEwjsnwIoq9eUUTaDZ","X-Mashape-host":"wordsapiv1.p.mashape.com"}}).then(function(e){return e.json()}).then(function(t){e.answer=t.word.replace(/[\W_]+/g," "),e.toGuess=e.answer.replace(/ /g,"").length,e.isGameOn=!0;for(var s=0;s<e.answer.length;s++){var n=e.answer.split("");" "===n[s]?e.guessed.push("-"):e.guessed.push("_")}}),console.log(this.answer)},endGame:function(){this.isGameOn=!1,this.answer="",this.guessesLeft=10,this.lettersUsed=[],this.guessed=[]},checkGuess:function(e){var t=this.answer.toUpperCase().indexOf(e);if(-1===this.lettersUsed.indexOf(e))if(this.lettersUsed.push(e),-1===t)this.guessesLeft--,0==this.guessesLeft&&(window.alert("You loss! The answer is : "+this.answer),this.endGame());else while(-1!=t)this.toGuess--,this.guessed[t]=e,0===this.toGuess&&(window.alert("You won! The answer is: "+this.answer),this.endGame()),t=this.answer.toUpperCase().indexOf(e,t+1);else window.alert("That letter was already used!")}},components:{GameHeader:p,PlayerControls:_,Answer:j,GameDetails:S}},E=$,M=(s("034f"),Object(c["a"])(E,r,a,!1,null,null,null));M.options.__file="App.vue";var P=M.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"64a9":function(e,t,s){},a6a1:function(e,t,s){"use strict";var n=s("55e4"),r=s.n(n);r.a}});
//# sourceMappingURL=app.bcc3c223.js.map