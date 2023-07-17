"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[141],{1396:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var a=t(9439),s=t(2791),c=t(9434),r=t(3634),o=t(5206),i=(t(5462),function(e){return e.contacts.contacts}),l=function(e){return e.contacts.error},u=function(e){return e.filter},d="ContactForm_form__dhl+T",m="ContactForm_label__-cVXI",_="ContactForm_input__Bl93P",h="ContactForm_btn__wll+u",f=t(184),p=function(e){return o.Am.error(e)},x=function(e){return o.Am.success(e)},b=function(){var e=(0,s.useState)(""),n=(0,a.Z)(e,2),t=n[0],u=n[1],b=(0,s.useState)(""),v=(0,a.Z)(b,2),j=v[0],C=v[1],N=(0,c.v9)(i),y=(0,c.v9)(l),k=function(e){var n=e.currentTarget,t=n.name,a=n.value;"name"===t?u(a):C(a)},w=(0,c.I0)(),D=function(){u(""),C("")};return(0,f.jsxs)("div",{children:[(0,f.jsx)(o.Ix,{}),(0,f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==t.trim()&&""!==j.trim()){if(N.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return void o.Am.error("".concat(t," is already in contacts"));if(y)return void p("problem with server");w((0,r.uK)({name:t,phone:j})),x("".concat(t," adding to contacts")),D()}},className:d,children:[(0,f.jsx)("label",{className:m,children:(0,f.jsx)("input",{className:_,type:"text",name:"name",value:t,onChange:k,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name"})}),(0,f.jsx)("label",{className:m,children:(0,f.jsx)("input",{className:_,type:"tel",name:"number",value:j,onChange:k,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Phone number"})}),(0,f.jsx)("button",{className:h,type:"submit",children:"Add contact"})]})]})},v="ContactList_ul__ppW9Q",j="ContactList_li__dzNT+",C="ContactList_name__UCkFW",N="ContactList_tel__7uvfm",y="ContactList_btn__6Piat",k={backdrop:"DeleteConfirmation_backdrop__4-QGc",modal:"DeleteConfirmation_modal__8oYdD",btnDiv:"DeleteConfirmation_btnDiv__wLqm8",btn:"DeleteConfirmation_btn__++3Qu"},w=function(e){var n=e.contact,t=e.onCancel,a=(0,c.I0)();return(0,f.jsx)("div",{className:k.backdrop,children:(0,f.jsxs)("div",{className:k.modal,children:[(0,f.jsx)("p",{className:k.text,children:"Are you sure you want to delete this contact?"}),(0,f.jsxs)("div",{className:k.btnDiv,children:[(0,f.jsx)("button",{onClick:function(){a((0,r.GK)(n.id)),r.GK&&o.Am.success("".concat(n.name," deleted")),t()},className:k.btn,children:"Delete"}),(0,f.jsx)("button",{onClick:t,className:k.btn,children:"Cancel"})]})]})})},D=function(){var e=(0,c.I0)(),n=(0,c.v9)(i),t=(0,c.v9)(u);(0,s.useEffect)((function(){e((0,r.yF)())}),[e]);var o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),l=(0,s.useState)(!1),d=(0,a.Z)(l,2),m=d[0],_=d[1],h=function(){_(!1)};return(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:v,children:o.map((function(e){return(0,f.jsxs)("li",{contact:e,className:j,children:[(0,f.jsxs)("span",{className:C,children:[e.name,":"]}),(0,f.jsx)("span",{className:N,children:e.number}),(0,f.jsx)("button",{className:y,type:"button",onClick:function(){return e.id,void _(!0)},children:"Delete"}),m&&(0,f.jsx)(w,{contact:e,onCancel:h})]},e.id)}))})})},g=t(4808),A="Filter_label__vEd1E",F="Filter_findTitle__DW5WU",L="Filter_input__N7T3z",z=function(){var e=(0,c.I0)();return(0,f.jsxs)("label",{className:A,children:[(0,f.jsx)("span",{className:F,children:"Find contacts by name"}),(0,f.jsx)("input",{className:L,type:"text",onChange:function(n){var t=n.target.value;e((0,g.Tv)(t))},placeholder:"search..."})]})},I=function(){return(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[(0,f.jsx)("section",{children:(0,f.jsx)(b,{})}),(0,f.jsx)("section",{children:(0,f.jsx)(z,{})}),(0,f.jsx)("section",{children:(0,f.jsx)(D,{})})]})}}}]);
//# sourceMappingURL=contacts-page.fed9799c.chunk.js.map