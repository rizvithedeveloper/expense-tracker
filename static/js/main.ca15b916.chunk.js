(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=n(0),o=function(){return Object(i.jsx)("h2",{children:"Expense Tracker"})},j=n(3),u=n(8),l=n(4),d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:[t.payload].concat(Object(u.a)(e.transactions))});default:return e}},b={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},x=Object(c.createContext)(b),O=function(e){var t=e.children,n=Object(c.useReducer)(d,b),r=Object(j.a)(n,2),a=r[0],s=r[1];return Object(i.jsx)(x.Provider,{value:{transactions:a.transactions,deleteTransaction:function(e){s({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){s({type:"ADD_TRANSACTION",payload:e})}},children:t})},h=function(){var e=Object(c.useContext)(x).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsx)("h1",{id:"balance",children:e<0?"-$".concat(Math.abs(e)):"$".concat(e)}),e<0&&Object(i.jsx)("p",{style:{color:"red"},children:"Hey! Your Expenses is greater than your income"})]})},m=function(){var e=Object(c.useContext)(x).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsxs)("p",{id:"money-plus",className:"money plus",children:["+$",t]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsxs)("p",{id:"money-minus",className:"money minus",children:["-$",n]})]})]})},p=function(e){var t=e.transaction,n=Object(c.useContext)(x).deleteTransaction,r=t.amount<0?"-":"+";return Object(i.jsx)("div",{children:Object(i.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(i.jsxs)("span",{children:[r,"$",Math.abs(t.amount)]}),Object(i.jsx)("button",{className:"delete-btn",onClick:function(){return n(t.id)},children:"x"})]})})},f=function(){var e=Object(c.useContext)(x).transactions;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{id:"list",className:"list",children:r.a.Children.toArray(e.map((function(e){return Object(i.jsx)(p,{transaction:e})})))})]})},v=function(){var e=Object(c.useContext)(x).addTransaction,t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(0),o=Object(j.a)(s,2),u=o[0],l=o[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault();var n={id:Math.floor(1e9*Math.random()),text:r,amount:parseInt(u)};e(n),a(""),l(0)},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",id:"text",value:r,onChange:function(e){return a(e.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:""}),Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{type:"number",id:"amount",value:u,onChange:function(e){return l(e.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};n(14);var y=function(){return Object(i.jsxs)(O,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{}),Object(i.jsx)(m,{}),Object(i.jsx)(f,{}),Object(i.jsx)(v,{})]})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ca15b916.chunk.js.map