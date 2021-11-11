(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(15),n(2)),s=n(10),l=n(8),u=n(3),b=n(4),d=n(6),m=n(5),j=n(19),h=n(0),f=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsx)("div",{className:"inner_form",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleInputChange}),Object(h.jsx)("label",{htmlFor:"number",children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleInputChange}),Object(h.jsx)("button",{className:"btn_form",type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=f,p=function(t){var e=t.filter,n=t.filterContact;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),Object(h.jsx)("input",{type:"text",name:"filter",onChange:n,value:e})]})},C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:"contact_list",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:"contact_list_item",children:[Object(h.jsxs)("p",{className:"contact_name",children:[a,": ",c]}),Object(h.jsx)("button",{className:"contact_btn",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},v=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addToContact=function(e){var n=t.state.contacts,a=Object(l.a)(Object(l.a)({},e),{},{id:Object(j.a)()});n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts))}}))},t.filterContact=function(e){t.setState(Object(o.a)({},e.target.name,e.target.value))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(O,{onSubmit:this.addToContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(p,{filter:e,filterContact:this.filterContact}),Object(h.jsx)(C,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),x=v;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c05bb46b.chunk.js.map