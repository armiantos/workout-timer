(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{57:function(e,a,t){e.exports=t(68)},62:function(e,a,t){},63:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),l=t.n(r),o=(t(62),t(63),t(36)),i=t(49),u=t(106),m=t(100),s=t(104),f=t(101),E=t(102),b=t(103),p=t(105),v=t(97),h=t(48),k=t.n(h),d=t(47),g=t.n(d),w=t(46),j=t.n(w),O=t(34),x=t(96),y=Object(i.a)({palette:{primary:O.a,secondary:x.a}}),N=Object(v.a)({root:{"max-width":"400px"},m:{margin:"20px","background-color":"black"},s:{margin:"6px"}});function I(e){return c.a.createElement(u.a,{onClick:e.callback},e.active?c.a.createElement(j.a,null):c.a.createElement(g.a,null))}function S(e){return c.a.createElement(m.a,null,c.a.createElement(s.a,{label:"Time"}),c.a.createElement(u.a,{onClick:e.callback},c.a.createElement(k.a,null)))}var B=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),u=i[0],m=i[1];Object(n.useEffect)((function(){var e=0;return u&&(e=setInterval((function(){r((function(e){return e.map((function(e,a){return a?e:e-1})).filter((function(e){return e>=0}))}))}),1e3)),t.length<1&&m(!1),function(){clearInterval(e)}}),[u,t.length]);var s=N();return c.a.createElement(f.a,{theme:y},c.a.createElement(E.a,{className:s.root},c.a.createElement(I,{callback:function(){m(!u)},active:u,className:s.m}),c.a.createElement(b.a,null),c.a.createElement(S,{callback:function(){r((function(e){return e.concat(30)}))},className:s.m}),c.a.createElement(b.a,null),t.map((function(e,a){return c.a.createElement(p.a,{key:a,className:s.s},c.a.createElement(p.a,null,e,"s"),c.a.createElement(b.a,null))}))))};var C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.6352abb6.chunk.js.map