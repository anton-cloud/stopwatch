(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{33:function(t,n,e){},39:function(t,n,e){"use strict";e.r(n);var c,o=e(1),a=e.n(o),r=e(23),s=e.n(r),i=(e(33),e(24)),u=e(25).a.div(c||(c=Object(i.a)(['\n  display: flex;\n  justify-content: center;\n  padding-top: 50px;\n  .Stopwatch {\n    &__wrap {\n      background-image: url("https://cdn-icons-png.flaticon.com/512/4893/4893021.png");\n      background-size: 100% auto;\n      background-position: center;\n      background-repeat: no-repeat;\n    }\n    &__title,\n    &__text,\n    &__button-text {\n      text-align: center;\n      font-family: Raleway;\n      font-style: normal;\n      font-weight: 400;\n      font-feature-settings: "lnum";\n    }\n\n    &__title {\n      color: #e0e0e0;\n      font-weight: 700;\n      font-size: 28px;\n      border-bottom: 2px solid;\n\n      margin: 20px 0 0 0;\n    }\n    &__text {\n      color: #828282;\n      font-size: 24px;\n\n      margin: 15px 0;\n    }\n    &__button {\n      background: #f31d42;\n      box-shadow: inset 0 6px 5px hsla(0, 0%, 100%, 0.3);\n      border-radius: 30px;\n      min-height: 20px;\n      min-width: 40px;\n      outline: none;\n      border: none;\n      cursor: pointer;\n      transition: 0.2s ease;\n      margin: 5px;\n      &:hover {\n        transform: scale(1.1);\n      }\n    }\n\n    &__button-text {\n      color: #fff;\n    }\n  }\n']))),l=e(3),b=function(t){var n=t.result,e=t.isStarted,c=t.onHandleStop,o=t.waitButtonRef,a=t.onHandleReset,r=t.onHandleStart;return Object(l.jsx)(u,{children:Object(l.jsxs)("div",{className:"Stopwatch__wrap",children:[Object(l.jsx)("h2",{className:"Stopwatch__title",children:"Stopwatch"}),Object(l.jsx)("p",{className:"Stopwatch__text",children:n}),e?Object(l.jsx)("button",{className:"Stopwatch__button",onClick:c,children:Object(l.jsx)("span",{className:"Stopwatch__button-text",children:" Stop"})}):Object(l.jsx)("button",{className:"Stopwatch__button",onClick:r,children:Object(l.jsx)("span",{className:"Stopwatch__button-text",children:" Start"})}),Object(l.jsx)("button",{className:"Stopwatch__button",ref:o,children:Object(l.jsx)("span",{className:"Stopwatch__button-text",children:" Wait"})}),Object(l.jsx)("button",{className:"Stopwatch__button",onClick:a,children:Object(l.jsx)("span",{className:"Stopwatch__button-text",children:" Reset"})})]})})},p=e(21),j=e(45),d=e(46),h=e(44),f=e(41),x=e(42),_=e(17),O=e(43),m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=0;return[3600,60,1].map((function(e){return n=Math.floor(t/e).toString(),t%=e,n.length<2?"0"+n:n})).join(":")},w=function(){var t=Object(o.useState)(0),n=Object(p.a)(t,2),e=n[0],c=n[1],a=Object(o.useState)(!1),r=Object(p.a)(a,2),s=r[0],i=r[1],u=Object(o.useRef)(null),w=Object(o.useRef)(null),S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;u.current||(u.current=Object(j.a)(1e3).pipe(Object(d.a)((function(t){return t+1}),t)).subscribe(c))},g=function(){u.current&&(u.current.unsubscribe(),u.current=null)};return Object(o.useEffect)((function(){var t=Object(h.a)(w.current,"click"),n=t.pipe(Object(f.a)(300)),e=t.pipe(Object(x.a)(n),Object(_.a)((function(t){return t.length})),Object(O.a)((function(t){return 2===t}))).subscribe((function(){u.current&&(i(!1),g())}));return function(){return e.unsubscribe()}}),[]),Object(l.jsx)(b,{result:m(e),isStarted:s,waitButtonRef:w,onHandleStart:function(){i(!0),e>0?S(e):S()},onHandleStop:function(){c(0),i(!1),g()},onHandleReset:function(){c(0),i(!0),g(),S()}})},S=function(){return Object(l.jsx)(w,{})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.18c6a787.chunk.js.map