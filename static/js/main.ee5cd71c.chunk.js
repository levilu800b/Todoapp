(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(2),i=n.n(c),a=n(8),r=n.n(a),d=(n(16),n(17),n(7)),u=n(3);var s=function(t){var e=Object(c.useState)(t.edit?t.edit.value:""),n=Object(u.a)(e,2),i=n[0],a=n[1],r=Object(c.useRef)(null);Object(c.useEffect)((function(){r.current.focus()}));var d=function(t){a(t.target.value)},s=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),a("")};return Object(o.jsx)("form",{onSubmit:s,className:"todo-form",children:t.edit?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{placeholder:"Update your item",value:i,onChange:d,name:"text",ref:r,className:"todo-input edit"}),Object(o.jsx)("button",{onClick:s,className:"todo-button edit",children:"Update"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{placeholder:"Add a todo",value:i,onChange:d,name:"text",className:"todo-input",ref:r}),Object(o.jsx)("button",{onClick:s,className:"todo-button",children:"Add todo"})]})})},l=n(9),j=n(10);var b=function(t){var e=t.todos,n=t.completeTodo,i=t.removeTodo,a=t.updateTodo,r=Object(c.useState)({id:null,value:""}),d=Object(u.a)(r,2),b=d[0],f=d[1];return b.id?Object(o.jsx)(s,{edit:b,onSubmit:function(t){a(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(o.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(o.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(l.a,{onClick:function(){return i(t.id)},className:"delete-icon"}),Object(o.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],i=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"What's the Plan for Today? "}),Object(o.jsx)(s,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(d.a)(n));i(e)}}}),Object(o.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));i(e)},removeTodo:function(t){var e=Object(d.a)(n).filter((function(e){return e.id!==t}));i(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(o.jsx)("div",{className:"todo-app",children:Object(o.jsx)(f,{})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.ee5cd71c.chunk.js.map