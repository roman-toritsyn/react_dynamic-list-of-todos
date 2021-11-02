(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(7),c=n.n(s),r=n(2),o=n(3),a=n(5),i=n(4),l=n(1),d=n.n(l),u=(n(13),n(14),n(15),n(8)),h=n.n(u);function j(e){return fetch("".concat("https://mate.academy/students-api/users/").concat(e)).then((function(e){return e.json()}))}var p=n(0),b=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={query:"",todos:[],filterTodos:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()})).then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this,t=this.props.changeUser,n=this.state,s=n.query,c=n.todos.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return"completed"===this.state.filterTodos&&(c=c.filter((function(e){return!0===e.completed}))),"not completed"===this.state.filterTodos&&(c=c.filter((function(e){return!1===e.completed}))),Object(p.jsxs)("div",{className:"TodoList",children:[Object(p.jsx)("h2",{children:"Todos:"}),Object(p.jsxs)("div",{className:"TodoList__list-container",children:[Object(p.jsx)("input",{className:"TodoList__input input is-info",type:"text",placeholder:"Filter todos",value:s,onChange:function(t){return e.setState({query:t.target.value})}}),Object(p.jsxs)("select",{className:"TodoList__select select",name:"filter",id:"filter",onChange:function(t){return e.setState({filterTodos:t.target.value})},children:[Object(p.jsx)("option",{value:"all",children:"Show all todos"}),Object(p.jsx)("option",{value:"completed",children:"Show completed todos"}),Object(p.jsx)("option",{value:"not completed",children:"Show active todos"})]}),Object(p.jsx)("ul",{className:"TodoList__list",children:c.map((function(e){return Object(p.jsxs)("li",{className:h()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed}),children:[Object(p.jsxs)("label",{htmlFor:"user-button",children:[Object(p.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(p.jsx)("p",{children:e.title})]}),Object(p.jsxs)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",name:"user-button",onClick:function(){return t(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})]})]})}}]),n}(d.a.Component),m=(n(17),function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={user:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;j(this.props.selectedUserId).then((function(t){e.setState({user:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props.selectedUserId;e.selectedUserId!==n&&j(n).then((function(e){t.setState({user:e})}))}},{key:"render",value:function(){var e=this.state.user,t=this.props.clearSelectedUser;return Object(p.jsxs)("div",{className:"CurrentUser",children:[Object(p.jsx)("h2",{className:"CurrentUser__title",children:Object(p.jsxs)("span",{children:["Selected user:"," ".concat(null===e||void 0===e?void 0:e.id)]})}),Object(p.jsx)("h3",{className:"CurrentUser__name",children:null===e||void 0===e?void 0:e.name}),Object(p.jsx)("p",{className:"CurrentUser__email",children:null===e||void 0===e?void 0:e.email}),Object(p.jsx)("p",{className:"CurrentUser__phone",children:null===e||void 0===e?void 0:e.phone}),Object(p.jsx)("button",{type:"button",className:"button",onClick:function(){return t()},children:"Clear"})]})}}]),n}(d.a.Component)),f=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={selectedUserId:0},e.changeUser=function(t){e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.selectedUserId;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"App__sidebar",children:Object(p.jsx)(b,{changeUser:this.changeUser})}),Object(p.jsx)("div",{className:"App__content",children:Object(p.jsx)("div",{className:"App__content-container",children:e?Object(p.jsx)(m,{selectedUserId:e,clearSelectedUser:this.clearSelectedUser}):"No user selected"})})]})}}]),n}(d.a.Component),v=f;c.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.feb7bdf1.chunk.js.map