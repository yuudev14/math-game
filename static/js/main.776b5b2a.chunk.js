(this["webpackJsonpmath-game"]=this["webpackJsonpmath-game"]||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),o=n.n(c),s=(n(32),n(10)),i=n(11),u=n(14),l=n(13),m=(n(33),n(7)),h=n(8),p=n(12),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.state.highestScore;return a.a.createElement("div",{className:"score"},a.a.createElement("h2",null,"High Score"),a.a.createElement("p",null,e),a.a.createElement(m.b,{to:"/"},a.a.createElement("button",null,"back")))}}]),n}(a.a.Component),b=Object(p.b)((function(e){return{state:e}}))(d),v=a.a.lazy((function(){return n.e(3).then(n.bind(null,40))})),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).checkAnswer=function(t){var n=document.querySelectorAll(".choices li");n.forEach((function(e){return e.classList.remove("wrong")})),n.forEach((function(e){return e.classList.remove("correct")}));var r=t,a=e.props.state.answer;Number(r)===a?(e.props.addScore(),e.props.timerAdd()):(e.props.timerSubtract(),e.props.state.inplay||clearInterval(e.timer)),e.randomQuest()},e.restart=function(){var t=document.querySelectorAll(".choices li"),n=document.querySelector(".gameover");t.forEach((function(e){return e.classList.remove("disable")})),n.classList.remove("gameisover"),e.props.reset(),e.randomQuest()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.randomQuest(),this.timerReady()}},{key:"componentDidUpdate",value:function(){if(!this.props.state.inplay){var e=document.querySelector(".gameover");return document.querySelectorAll(".choices li").forEach((function(e){return e.classList.add("disable")})),e.classList.add("gameisover"),clearInterval(this.timer)}return this.timer}},{key:"randomQuest",value:function(){return this.props.randomQuestion()}},{key:"timerReady",value:function(){var e=this;this.timer=setInterval((function(){e.props.state.inplay&&e.props.timer()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),this.props.reset()}},{key:"render",value:function(){var e=this.props.state,t=e.minutes,n=e.seconds,c=e.number1,o=e.number2,s=e.operation,i=e.choices,u=e.score,l=e.answer;return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"wait...")},a.a.createElement("div",{className:"game"},a.a.createElement("h3",null,t,":",n),u,a.a.createElement("div",{className:"gameover"},"Game Over"),a.a.createElement("div",{className:"question"},a.a.createElement("p",null,c," ",s," ",o," = ?")),a.a.createElement(v,{choices:i,checkAnswer:this.checkAnswer,answer:l}),a.a.createElement("div",{className:"game-button"},a.a.createElement("button",{onClick:this.restart},"Restart"),a.a.createElement(m.b,{to:"/"},a.a.createElement("button",null,"Menu")))))}}]),n}(a.a.Component),E=Object(p.b)((function(e){return{state:e}}),(function(e){return{randomQuestion:function(){e({type:"RANDOM_QUESTION"})},addScore:function(){e({type:"ADD_SCORE"})},reset:function(){e({type:"RESET"})},timer:function(){e({type:"TIMER"})},timerAdd:function(){e({type:"TIMER_ADD"})},timerSubtract:function(){e({type:"TIMER_SUBTRACT"})}}}))(f);var y=function(){return a.a.createElement("div",{className:"menu"},a.a.createElement(m.b,{to:"/game"},a.a.createElement("button",null,"Start")),a.a.createElement(m.b,{to:"/scoreList"},a.a.createElement("button",null,"Highest Score")))},O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={screen:null},r}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Math Game"),a.a.createElement(h.a,{exact:!0,path:"/",component:y}),a.a.createElement(h.a,{path:"/game",component:E}),a.a.createElement(h.a,{path:"/scoreList",component:b})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(18),j=n(4),S={score:0,highestScore:0,minutes:1,seconds:"00",operation:"",number1:0,number2:0,answer:0,choices:[],inplay:!1};function w(e){return Math.floor(Math.random()*e)}function k(e){var t=Math.random()*e;return Number(t.toFixed(2))}function A(e){for(var t=k(5*e),n=k(5*e),r=k(5*e),a=[Number(e),t,n,r],c=0;c<a.length;c++){var o=Math.floor(w(a.length)),s=a[c];a[c]=a[o],a[o]=s}return console.log(a),a}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RANDOM_QUESTION":var n=["+","-","/","*"],r=k(100),a=k(r),c=n[w(n.length)],o="";return"+"===c?o=r+a:"-"===c?o=r-a:"/"===c?o=r/a:"*"===c&&(o=r*a),Object(j.a)(Object(j.a)({},e),{},{number1:r,number2:a,operation:c,answer:Number(o.toFixed(2)),choices:A(o.toFixed(2)),inplay:!0});case"ADD_SCORE":var s=e.score+1,i=e.highestScore<s?s:e.highestScore;return Object(j.a)(Object(j.a)({},e),{},{score:s,highestScore:i});case"RESET":return Object(j.a)(Object(j.a)({},e),{},{score:0,minutes:1,seconds:"00",operation:"",number1:0,number2:0,answer:0,choices:[],inplay:!1});case"TIMER":var u=Number(e.seconds),l=e.minutes,m=!0;return 0===u?(u=59,l-=1):u-=1,u<=9&&u>=0&&(u="0"+u),l<=-1&&59===u&&(u="00",l=0,m=!1),Object(j.a)(Object(j.a)({},e),{},{seconds:u,minutes:l,inplay:m});case"TIMER_ADD":var h=Number(e.seconds)+5,p=e.minutes;return h>60&&(h-=60,p+=1),h<=9&&h>=0&&(h="0"+h),Object(j.a)(Object(j.a)({},e),{},{seconds:h,minutes:p});case"TIMER_SUBTRACT":var d=Number(e.seconds)-5,b=e.minutes,v=!0;return d<0&&(d=60+d,b-=1),d<=9&&d>=0&&(d="0"+d),b<0&&(d="00",b=0,v=!1),Object(j.a)(Object(j.a)({},e),{},{seconds:d,minutes:b,inplay:v});default:return e}},R=Object(g.b)(N);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p.a,{store:R},a.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.776b5b2a.chunk.js.map