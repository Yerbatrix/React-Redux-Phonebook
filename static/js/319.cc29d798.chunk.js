"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[319],{1319:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var a=e(2791),r=e(4420),s=e(4270),i=e(208),c="ContactListItem_item__UAAix",o="ContactListItem_details__9gLE2",u="ContactListItem_name__cIBvF",l="ContactListItem_phone__eLbis",h="ContactListItem_button__SG6H2",m=e(184),d=function(t){var n=t.contact,e=(0,r.I0)();return(0,m.jsxs)("li",{className:c,children:[(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("span",{className:u,children:n.name}),(0,m.jsx)("span",{className:l,children:n.number})]}),(0,m.jsx)("button",{className:h,onClick:function(){return t=n.id,void e((0,i.GK)(t));var t},children:"Delete"})]})},_="ContactList_list__csErn",p={container:"Counter_container__lKuhH"},f=e(3553),x=function(t){return t.contacts.items},j=(0,f.P1)([x,function(t){return t.filter}],(function(t,n){return t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))})),v=function(){var t=(0,r.v9)(x);return(0,m.jsx)("div",{className:p.container,children:(0,m.jsxs)("h4",{className:p.total,children:["Total Contacts: ",t.length]})})},C=function(){var t=(0,r.v9)(j);return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Contact List"}),(0,m.jsx)(v,{}),(0,m.jsx)("ul",{className:_,children:t.map((function(t){return(0,m.jsx)(d,{contact:t},t.id)}))})]})},b=e(9439),I="ContactForm_container__qpJ1N",N=function(){var t=(0,a.useState)(""),n=(0,b.Z)(t,2),e=n[0],s=n[1],c=(0,a.useState)(""),o=(0,b.Z)(c,2),u=o[0],l=o[1],h=(0,r.v9)((function(t){return t.contacts.items})),d=(0,r.I0)(),_=function(t){var n=t.target,e=n.name,a=n.value;"name"===e?s(a):"phone"===e&&l(a)};return(0,m.jsx)("div",{className:I,children:(0,m.jsxs)("form",{onSubmit:function(t){(t.preventDefault(),""!==e.trim()&&""!==u.trim())&&(h.some((function(t){return t.name===e}))?alert("Contact with this name already exists!"):(d((0,i.uK)({name:e,number:u})),s(""),l("")))},children:[(0,m.jsxs)("label",{htmlFor:"nameInput",children:["Name",(0,m.jsx)("input",{type:"text",name:"name",id:"nameInput",value:e,onChange:_,placeholder:"Enter name",required:!0})]}),(0,m.jsxs)("label",{htmlFor:"phoneInput",children:["Phone number",(0,m.jsx)("input",{type:"tel",name:"phone",id:"phoneInput",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:u,onChange:_,placeholder:"Enter phone number",required:!0})]}),(0,m.jsx)("button",{type:"submit",children:"Add contact"})]})})},g=e(6895),L="Filter_input__N7T3z",w=function(){var t=(0,r.v9)((function(t){return t.filter})),n=(0,r.I0)();return(0,m.jsx)("input",{className:L,type:"text",placeholder:"Search contacts...",value:t,onChange:function(t){n((0,g.T)(t.target.value))}})};function k(){var t=(0,r.I0)();return(0,a.useEffect)((function(){t((0,i.yF)())}),[t]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.q,{children:(0,m.jsx)("title",{children:"Your Contacts"})}),(0,m.jsx)(v,{}),(0,m.jsx)(N,{}),(0,m.jsx)(w,{}),(0,m.jsx)(C,{})]})}}}]);
//# sourceMappingURL=319.cc29d798.chunk.js.map