"use strict";(self.webpackChunkservice_auto_rental_new1=self.webpackChunkservice_auto_rental_new1||[]).push([[947],{2947:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r,a,i=t(3433),u=t(5861),s=t(1413),l=t(9439),c=t(4687),o=t.n(c),f=t(2791),v=t(5218),d=t(2548),p=t(1687),h=t(6549),x=t(3554),Z=t(8346),m=t(2373),g=t(168),j=t(7924),b=j.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),M=j.ZP.button(a||(a=(0,g.Z)(["\n  font-family: var(--font-family);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  text-decoration: underline;\n  text-decoration-skip-ink: none;\n  color: #3470ff;  \n\n  &:hover {\n    color: #0b44cd;\n  }\n"]))),k=t(184),S=function(e){var n=e.favorites,t=e.setFavorites,r=(0,f.useState)([]),a=(0,l.Z)(r,2),c=a[0],g=a[1],j=(0,f.useState)(!1),S=(0,l.Z)(j,2),y=S[0],C=S[1],w=(0,f.useState)(1),P=(0,l.Z)(w,2),B=P[0],_=P[1],F=(0,f.useState)(!1),L=(0,l.Z)(F,2),I=L[0],E=L[1],N=(0,f.useState)(!1),X=(0,l.Z)(N,2),z=X[0],A=X[1],H=(0,f.useState)(null),O=(0,l.Z)(H,2),R=O[0],G=O[1],J=(0,f.useState)({id:"",make:"",price:"",minMileage:null,maxMileage:null,perPage:12}),K=(0,l.Z)(J,2),T=K[0],U=K[1],V=(0,f.useState)(""),W=(0,l.Z)(V,2),$=W[0],q=W[1],D=(0,f.useState)(["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Kia","Land Rover"]),Q=(0,l.Z)(D,1)[0];(0,f.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favorites"))||[];t(e)}),[t]);var Y=(0,f.useState)(null),ee=(0,l.Z)(Y,2),ne=ee[0],te=ee[1],re=function(e){return e.map((function(e){return{value:e,label:e}}))},ae=function(){var e=(0,u.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,e.next=4,(0,p.X)(B+1,T);case 4:0===(n=e.sent).length?E(!0):(g((function(e){return[].concat((0,i.Z)(e),(0,i.Z)(n))})),_((function(e){return e+1}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v.ZP.error(e.t0);case 11:return e.prev=11,C(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,u.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,e.next=4,(0,p.X)(1,T);case 4:n=e.sent,console.log("CatalogPage - applyFilters ",{filteredItems:n}),g(n),_(1),E(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),v.ZP.error(e.t0);case 14:return e.prev=14,C(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){var e=function(){var e=(0,u.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,e.next=4,(0,p.X)(1,T);case 4:n=e.sent,g(n),_(1),E(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),v.ZP.error(e.t0);case 13:return e.prev=13,C(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[T]),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{children:[(0,k.jsx)(Z.Z,{}),y&&(0,k.jsx)(x.a,{}),(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{children:(0,k.jsxs)("label",{htmlFor:"makeSelect",children:["Car Brand:",(0,k.jsx)(d.ZP,{id:"makeSelect",options:re(Q),value:re(Q).find((function(e){return e.value===ne})),onChange:function(e){te(e?e.value:null),U((function(n){return(0,s.Z)((0,s.Z)({},n),{},{make:e?e.value:""})})),g([])},isClearable:!0,isSearchable:!0,placeholder:"Select Car Brand"})]})}),(0,k.jsxs)("label",{children:["Price:",(0,k.jsx)("input",{type:"text",value:T.price,onChange:function(e){return U((function(n){return(0,s.Z)((0,s.Z)({},n),{},{price:e.target.value})}))}})]}),(0,k.jsxs)("label",{children:["Min Mileage:",(0,k.jsx)("input",{type:"number",value:T.minMileage,onChange:function(e){var n=e.target.value;/^\d*$/.test(n)?(q(""),U((function(e){return(0,s.Z)((0,s.Z)({},e),{},{minMileage:n})}))):q("Please enter a valid number")},min:"0",max:"9999"}),$&&(0,k.jsx)("div",{style:{color:"red"},children:$})]}),$&&(0,k.jsx)("div",{style:{color:"red"},children:$}),(0,k.jsxs)("label",{children:["Max Mileage:",(0,k.jsx)("input",{type:"number",value:T.maxMileage,onChange:function(e){return U((function(n){return(0,s.Z)((0,s.Z)({},n),{},{maxMileage:e.target.value})}))},pattern:"[0-9]*",maxLength:"4"})]}),(0,k.jsx)("button",{onClick:ie,children:"Search"})]}),(0,k.jsxs)(b,{children:[(0,k.jsx)(h.v,{items:c,openModal:function(e){A(!0),G(e)},favorites:n,setFavorites:t}),!I&&(0,k.jsx)(M,{onClick:ae,children:"Load More"}),I&&(0,k.jsx)("p",{children:"This is the entire catalog."}),z&&(0,k.jsx)(m.Z,{item:c[R],closeModal:function(){A(!1),G(null)}}),(0,k.jsx)(v.x7,{position:"bottom-center",reverseOrder:!0})]})]})})}}}]);
//# sourceMappingURL=947.e86781a5.chunk.js.map