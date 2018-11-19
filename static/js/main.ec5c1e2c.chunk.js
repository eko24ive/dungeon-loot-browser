(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,n,t){e.exports=t(74)},74:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(10),u=t.n(o),i=t(76),c=t(77),l=t(8),m=t(7),s=t(12),g=t(35),f=function(e){return{type:"SET_TIME_FILTER",timeFrom:e.timeFrom,timeTo:e.timeTo}},p=function(e){return{type:"SET_DUNGEONS_DUMP",dump:e}},d=function(e){return{type:"SET_DUNGEON",dungeon:e}},v=function(e){return{type:"SET_AVAILABLE_DUNGEONS",dungeons:e}},b={activeDungeon:null,timeFilter:Object(s.Map)({timeFrom:0,timeTo:24}),dungeonsDump:null,availableDungeons:[]},E=Object(g.combineReducers)({activeDungeon:function(e,n){switch(n.type){case"SET_DUNGEON":return n.dungeon;default:return e}},timeFilter:function(e,n){var t=n.timeFrom,a=n.timeTo;switch(n.type){case"SET_TIME_FILTER":return e.set("timeFrom",t).set("timeTo",a);default:return e}},dungeonsDump:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_DUNGEONS_DUMP":return n.dump;default:return e}},availableDungeons:function(e,n){switch(n.type){case"SET_AVAILABLE_DUNGEONS":return n.dungeons;default:return e}}}),D=Object(m.a)(function(e){var n=e.getState;return function(e){return function(t){var a=e(t);switch(t.type){case"SET_TIME_FILTER":return localStorage.setItem("timeFilter",JSON.stringify(n().get("timeFilter").toJS())),a;case"SET_DUNGEONS_DUMP":return localStorage.setItem("dungeonsDump",JSON.stringify(n().get("dungeonsDump"))),a;case"SET_DUNGEON":return localStorage.setItem("activeDungeon",n().get("activeDungeon")),a;case"SET_AVAILABLE_DUNGEONS":return localStorage.setItem("availableDungeons",JSON.stringify(n().get("availableDungeons"))),a;default:return a}}}}),O=Object(m.d)(E,(localStorage.getItem("timeFilter")&&(b.timeFilter=Object(s.fromJS)(JSON.parse(localStorage.getItem("timeFilter")))),localStorage.getItem("dungeonsDump")&&(b.dungeonsDump=JSON.parse(localStorage.getItem("dungeonsDump"))),localStorage.getItem("activeDungeon")&&(b.activeDungeon=localStorage.getItem("activeDungeon")),localStorage.getItem("availableDungeons")&&(b.availableDungeons=JSON.parse(localStorage.getItem("availableDungeons"))),Object(s.Map)(b)),Object(m.c)(D)),h=t(46),j=t(14),S=t(15),x=t(19),y=t(16),T=t(20),F=t(36),N=t.n(F),A=(t(62),function(e){function n(e){var t;return Object(j.a)(this,n),(t=Object(x.a)(this,Object(y.a)(n).call(this,e))).sliderRef=r.a.createRef(),t}return Object(T.a)(n,e),Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.timeFrom,t=e.timeTo,a=e.setTimeFilterAction,r=function(e){var n=String(e.toFixed(0));return 1===n.length?"0".concat(n,":00"):"".concat(n,":00")};N.a.create(this.sliderRef,{start:[n,t],step:1,margin:1,connect:!0,range:{min:0,max:24},tooltips:[{to:r},{to:r}],pips:{mode:"range",density:3,filter:function(){return 0}}}),this.sliderRef.noUiSlider.on("change",function(e,n,t){var r=Object(h.a)(t,2),o=r[0],u=r[1];a({timeFrom:o,timeTo:u})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(n){e.sliderRef=n}})}}]),n}(a.Component)),w=Object(l.b)(function(e){return{timeFrom:(n=e.get("timeFilter")).get("timeFrom"),timeTo:n.get("timeTo")};var n},function(e){return Object(m.b)({setTimeFilterAction:f},e)})(A),I=t(39),_=t(4),U=t(3);function k(){var e=Object(_.a)(["\n  margin-top: 35px;\n"]);return k=function(){return e},e}var J=U.a.div(k()),L=Object(l.b)(function(e){return{activeDungeon:e.get("activeDungeon"),availableDungeons:e.get("availableDungeons")}},function(e){return Object(m.b)({setActiveDungeonAction:d},e)})(function(e){var n=e.setActiveDungeonAction,t=e.availableDungeons;return r.a.createElement(J,null,r.a.createElement(I.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0434\u0430\u043d\u0436",options:t,onChange:function(e){return function(n){var t=n.value;e(t)}}(n)}))});function R(){var e=Object(_.a)(["\n  margin-top: 20px;\n  padding: 20px 40px;\n"]);return R=function(){return e},e}var G=U.a.div(R()),M=function(){return r.a.createElement(G,null,r.a.createElement(w,null),r.a.createElement(L,null))},C=t(48),B=t(42),P=t(43),V=t.n(P),z=Object(B.a)([function(e){return e.get("activeDungeon")},function(e){return e.get("dungeonsDump")},function(e){return e.get("timeFilter")}],function(e,n,t){if(e){var a=n[e].forwards,r=t.get("timeFrom"),o=t.get("timeTo"),u=a.filter(function(e){var n=e.unixTime,t=V()(n).hours();return r<=t&&t<=o}),i={},c=[];u.forEach(function(e,n){c.push({loot:e.loot,time:e.time,index:n}),null!==e.item&&(i[e.item]?i[e.item].amount+=1:i[e.item]={amount:1,time:e.time,index:n})});var l=Object(C.a)(Object.keys(i).map(function(e){return i[e].amount})).concat([0]).reduce(function(e,n){return e+n});return{items:Object.keys(i).map(function(e){return{name:e,time:i[e].time,amount:i[e].amount,index:i[e].index,percent:(100*i[e].amount/l).toFixed(1)}}).sort(function(e,n){return-(e.percent-n.percent)}),loot:c}}return{items:[],loot:[]}});function q(){var e=Object(_.a)(["\n  border: 1px solid #333;\n  padding: 5px 15px;\n"]);return q=function(){return e},e}function H(){var e=Object(_.a)(["\n  font-weight: bold;\n"]);return H=function(){return e},e}function K(){var e=Object(_.a)([""]);return K=function(){return e},e}function Q(){var e=Object(_.a)(["\n  width: 100%;\n"]);return Q=function(){return e},e}var W=U.a.table(Q()),X=U.a.tr(K()),Y=Object(U.a)(X)(H()),Z=(U.a.th,U.a.td(q())),$=function(e){var n=e.children;return r.a.createElement(W,null,r.a.createElement("tbody",null,n))};function ee(){var e=Object(_.a)(["\n  flex: 1;\n\n  &:first-child {\n    margin-right: 10px;\n  }\n\n  &:last-child {\n    margin-left: 10px;\n  }\n\n  @media (max-width: 800px) {\n    &:first-child {\n      margin-bottom: 10px;\n      margin-right: 0;\n    }\n\n    &:last-child {\n      margin-top: 10px;\n      margin-left: 0;\n    }\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(_.a)(["\n  display:flex;\n  padding: 20px 40px;\n  justify-content: space-between;\n  flex-direction: row;\n\n  @media (max-width: 800px) {\n    flex-direction: column;\n  }\n"]);return ne=function(){return e},e}var te=U.a.div(ne()),ae=U.a.div(ee()),re=Object(l.b)(function(e){var n=z(e);return{items:n.items,loot:n.loot}})(function(e){var n=e.items,t=e.loot;return r.a.createElement(te,null,r.a.createElement(ae,null,r.a.createElement($,null,r.a.createElement(Y,null,r.a.createElement(Z,null,"\u041f\u0440\u0435\u0434\u043c\u0435\u0442"),r.a.createElement(Z,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement(Z,null,"\u0428\u0430\u043d\u0441"),r.a.createElement(Z,null,"\u0412\u0440\u0435\u043c\u044f")),n.map(function(e){var n=e.name,t=e.amount,a=e.percent,o=e.time,u=e.index;return r.a.createElement(X,{key:u},r.a.createElement(Z,null,n),r.a.createElement(Z,null,t),r.a.createElement(Z,null,a,"%"),r.a.createElement(Z,null,o))}))),r.a.createElement(ae,null,r.a.createElement($,null,r.a.createElement(Y,null,r.a.createElement(Z,null,"\u041b\u0443\u0442"),r.a.createElement(Z,null,"\u0412\u0440\u0435\u043c\u044f")),t.map(function(e){var n=e.loot,t=e.time,a=e.index;return r.a.createElement(X,{key:a},r.a.createElement(Z,null,n),r.a.createElement(Z,null,t))}))))}),oe=t(49);function ue(){var e=Object(_.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n"]);return ue=function(){return e},e}var ie=U.a.div(ue()),ce=function(e){function n(){var e,t;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(x.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(r)))).onDrop=function(e){var n=e.setDungeonsDump,t=e.setAvailableDungeons;return function(e){e.forEach(function(e){var a=new FileReader;a.onload=function(){var e=JSON.parse(a.result),r=Object.keys(e).map(function(n){var t=e[n],a=t.name;return{value:t.technicalName,label:a}});t(r),n(e)},a.readAsText(e)})}},t}return Object(T.a)(n,e),Object(S.a)(n,[{key:"render",value:function(){var e=this.props,n=e.setDungeonsDumpAction,t=e.setAvailableDungeonsAction,a=e.dungeonsDump,o=e.availableDungeons;return null===a&&0===o.length&&r.a.createElement(ie,null,r.a.createElement(oe.a,{accept:".json",multiple:!1,onDrop:this.onDrop({setDungeonsDump:n,setAvailableDungeons:t}),style:{cursor:"pointer",top:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",fontSize:"34px"},activeStyle:{backgroundColor:"#effff0"}},"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438 \u0434\u0430\u043c\u043f \u0441\u044e\u0434\u0430, \u043b\u0438\u0431\u043e \u043a\u043b\u0438\u043d\u043a\u0438 \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0447\u0442\u043e \u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0439 \u0434\u0438\u0430\u043b\u043e\u0433"))}}]),n}(a.Component);ce.state={isDumpValid:!0},ce.defaultProps={dungeonsDump:null};var le=Object(l.b)(function(e){return{dungeonsDump:e.get("dungeonsDump"),availableDungeons:e.get("availableDungeons")}},function(e){return Object(m.b)({setDungeonsDumpAction:p,setAvailableDungeonsAction:v},e)})(ce);function me(){var e=Object(_.a)(["\n  padding: 40px 0 0 0;\n"]);return me=function(){return e},e}var se=U.a.div(me());function ge(){var e=Object(_.a)(["\n  text-align: center;\n  font-family: monospace;\n  font-size: 24px;\n"]);return ge=function(){return e},e}var fe=U.a.p(ge());u.a.render(r.a.createElement(se,null,r.a.createElement(l.a,{store:O},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(fe,null,"Dungeon Loot Browser"),r.a.createElement(c.a,{path:"/",exact:!0,component:M}),r.a.createElement(c.a,{path:"/",exact:!0,component:re}))))),document.getElementById("root"))}},[[50,2,1]]]);
//# sourceMappingURL=main.ec5c1e2c.chunk.js.map