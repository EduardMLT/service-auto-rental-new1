"use strict";(self.webpackChunkservice_auto_rental_new1=self.webpackChunkservice_auto_rental_new1||[]).push([[378],{378:function(n,e,t){t.r(e),t.d(e,{default:function(){return pn}});var i=t(433),r=t(861),a=t(413),l=t(439),s=t(687),o=t.n(s),c=t(791),x=t(218),u=t(548),p=t(294);p.Z.defaults.baseURL="https://6574665df941bda3f2afb2f5.mockapi.io/api/v1/";var f,d,h,g,m,v,j,Z,b,k,w,y,P,M,C,S,z,V,H,I,L,B,N=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,i,r,a,l,s,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:1,t=c.length>1?c[1]:void 0,n.prev=2,n.next=5,p.Z.get("/data-auto");case 5:return i=n.sent,console.log("fetchHome - filters",t),r=i.data,console.log("fetchHome - filteredCars",r),""!==t.make&&(console.log("fetchHome - filters.make",t.make),r=r.filter((function(n){return n.make===t.make})),console.log("fetchHome - filteredCars",r)),""!==t.price&&(r=r.filter((function(n){return parseInt(n.rentalPrice.replace(/\D/g,""),10)<=t.price}))),null!==t.minMileage&&(r=r.filter((function(n){return Number(n.mileage)>=Number(t.minMileage)}))),null!==t.maxMileage&&(r=r.filter((function(n){return Number(n.mileage)<=Number(t.maxMileage)}))),a=(e-1)*t.perPage,l=a+t.perPage,s=r.slice(a,l),console.log("fetchHome - currentItems",s),n.abrupt("return",s);case 20:throw n.prev=20,n.t0=n.catch(2),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",n.t0),n.t0;case 24:case"end":return n.stop()}}),n,null,[[2,20]])})));return function(){return n.apply(this,arguments)}}(),R=t(168),_=t(924),E=_.ZP.ul(f||(f=(0,R.Z)([" \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 29px;\n  row-gap: 50px;\n  flex-wrap: wrap;\n  margin: 50px 0 100px;\n"]))),F=_.ZP.li(d||(d=(0,R.Z)(["\n  display: block;\n  padding: 10px, 15px;\n  font-family: Roboto sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  color: rgb(106 162 144);\n"]))),A=_.ZP.span(h||(h=(0,R.Z)(["\n  color: var(--pr-button-background-color);\n  font-size: 16px;\n\n  &:hover,\n  :focus {\n    color: var(--hovered-button-background-color);\n  }\n"]))),T=t(184),U=function(n){var e=n.items,t=n.openModal;return(0,T.jsxs)(E,{children:[console.log("HomeList",{items:e}),e.map((function(n,e){var i=n.id,r=n.make,a=n.model,l=n.img;return(0,T.jsx)(F,{children:(0,T.jsxs)("div",{onClick:function(){return t(e)},children:[(0,T.jsxs)(A,{children:[r," ",a]}),(0,T.jsx)("div",{children:(0,T.jsx)("img",{src:l,width:"200",height:"250",alt:"car"})}),(0,T.jsxs)(A,{children:[r," ",a]})]})},i)}))]})},D=t(554),K=_.ZP.div(g||(g=(0,R.Z)(["\n  position: fixed;\n  top: 0;\n  left: calc((100% - 541px) / 2);\n  width: 541px;\n  height: 752px;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  font-family: var(--font-family);\n  border-radius: 24px;\n"]))),q=_.ZP.div(m||(m=(0,R.Z)(["\n  background: #fff;\n  /* padding: 20px; */\n  border-radius: 8px;\n  position: relative;\n  z-index: 1001;\n  max-width: 900px;\n  width: 100%;\n  /* text-align: center; */\n\n  /* img {\n    width: 461px;\n    height: 248px;\n    object-fit: contain;\n  } */\n"]))),G=_.ZP.span(v||(v=(0,R.Z)(["\n  position: absolute;\n  top: 45px;\n  right: 22px;\n  cursor: pointer;\n  font-size: 22px;\n  color: #333;\n"]))),O=_.ZP.img(j||(j=(0,R.Z)(["\n  max-width: 100%;\n  max-height: 100%;\n  /* object-fit: contain; */\n  width: 461px;\n  height: 248px;\n  /* margin: auto; */\n  margin-bottom: 14px;\n  margin-top: 40px;\n  display: block;\n  margin-left:40px;\n  border-radius: 14px;\n"]))),W=_.ZP.h2(Z||(Z=(0,R.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 133%;\n  color: #121417;\n  /* display: flex; */\n  text-align: left;\n  margin-bottom: 8px;\n  /* margin-left: 40px; */\n"]))),Y=_.ZP.span(b||(b=(0,R.Z)(["\n  color: #3470ff;\n"]))),$=_.ZP.img(k||(k=(0,R.Z)(["\n  stroke-width: 1px;\n  stroke: rgba(18, 20, 23, 0.1);\n  display: inline-block;\n  margin-left: 6px;\n  margin-right: 6px;\n"]))),J=_.ZP.div(w||(w=(0,R.Z)(["\n  width: 461px;\n  min-height: 126px;\n  margin-bottom: 24px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex;\n  flex-direction: column;\n  margin-left: 40px;\n"]))),Q=_.ZP.div(y||(y=(0,R.Z)(["\n  /* display: flex; */\n  text-align: left;\n  margin-bottom: 4px;\n  /* margin-left: 40px; */\n"]))),X=_.ZP.div(P||(P=(0,R.Z)(["\n  text-align: left;\n  margin-bottom: 8px;\n  /* margin-left: 40px; */\n"]))),nn=_.ZP.h3(M||(M=(0,R.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 143%;\n  color: #121417;\n  display: flex;\n  text-align: left;\n  \n  /* margin-left: 40px; */\n"]))),en=_.ZP.h3(C||(C=(0,R.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 143%;\n  color: #121417;\n  display: flex;\n  margin-bottom: 8px;\n  /* text-align: left;\n  margin-left: 40px; */\n"]))),tn=_.ZP.div(S||(S=(0,R.Z)(["\n  width: 461px;\n  min-height: 68px;\n  margin-bottom: 24px;\n  text-align: left;\n  margin-left: 40px;\n"]))),rn=_.ZP.div(z||(z=(0,R.Z)(["\n  width: 461px;\n  height: 100px;\n  margin-bottom: 24px;\n  text-align: left;\n  margin-left: 40px;\n"]))),an=_.ZP.span(V||(V=(0,R.Z)(["\n  padding: 7px 14px 7px 14px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #363535;\n  background: #f9f9f9;\n  border-radius: 35px;\n"]))),ln=_.ZP.div(H||(H=(0,R.Z)(["\n  margin-bottom: 8px;\n"]))),sn=_.ZP.div(I||(I=(0,R.Z)(["\n  margin-bottom: 24px;\n"]))),on=_.ZP.span(L||(L=(0,R.Z)(["\n  font-family: var(--font-family);\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: rgba(18, 20, 23, 0.5);\n  \n  /* height: 18px; */\n"]))),cn=_.ZP.button(B||(B=(0,R.Z)(["\n  /* height: 44px;\n  width: 168px; */\n  margin-bottom: 40px;\n  margin-left: 40px;\n  border-radius: 12px;\n  padding: 12px 50px;\n  width: 168px;\n  height: 44px;\n  background: #3470ff;\n\n  font-family: var(--font-family);\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 143%;\n  color: #fff;\n\n  &:hover {\n    background: #0b44cd;\n  }\n"])));var xn=t.p+"static/media/verticalTrait.9da486f0a04fa631faaf96665866e4f8.svg",un=function(n){var e=n.item,t=n.closeModal;return(0,c.useEffect)((function(){var n;n=e.img,(new Image).src=n}),[e.img]),(0,T.jsx)(K,{children:(0,T.jsxs)(q,{children:[(0,T.jsx)(G,{onClick:t,children:"\xd7"}),(0,T.jsx)(O,{src:e.img,alt:"car"}),(0,T.jsxs)(J,{children:[(0,T.jsxs)(W,{children:[e.make," ",(0,T.jsx)(Y,{children:e.model})," , ",e.year]}),(0,T.jsxs)(Q,{children:[(0,T.jsx)(on,{children:"Kiev"}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsx)(on,{children:"Ukraine"}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsxs)(on,{children:["ID: ",e.id]}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsxs)(on,{children:["Year: ",e.year]}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsxs)(on,{children:["Type: ",e.type]})]}),(0,T.jsxs)(X,{children:[(0,T.jsxs)(on,{children:["Fuel Consumption: ",e.fuelConsumption]}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsxs)(on,{children:["Engine Size: ",e.engineSize]})]}),(0,T.jsx)(nn,{children:e.description})]}),(0,T.jsxs)(tn,{children:[(0,T.jsx)(en,{children:"Accessories and functionalities:"}),(0,T.jsxs)(Q,{children:[(0,T.jsx)(on,{children:e.accessories[0]}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsx)(on,{children:e.accessories[1]}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsx)(on,{children:e.accessories[2]})]}),(0,T.jsxs)(Q,{children:[(0,T.jsx)(on,{children:e.functionalities[0]}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsx)(on,{children:e.functionalities[1]}),(0,T.jsx)($,{src:xn,alt:"Vertical trait"}),(0,T.jsx)(on,{children:e.functionalities[2]})]})]}),(0,T.jsxs)(rn,{children:[(0,T.jsx)(en,{children:"Rental Conditions:"}),(0,T.jsxs)(ln,{children:[(0,T.jsx)(an,{children:"Minimum age : "}),(0,T.jsx)(an,{children:"Valid driver\u2019s license"})]}),(0,T.jsxs)(sn,{children:[(0,T.jsx)(an,{children:"Security deposite required"}),(0,T.jsx)(an,{children:"Mileage: "}),(0,T.jsx)(an,{children:"Price: "})]})]}),(0,T.jsx)(cn,{onClick:function(){},children:"Rental car"})]})})},pn=function(){var n=(0,c.useState)([]),e=(0,l.Z)(n,2),t=e[0],s=e[1],p=(0,c.useState)(!1),f=(0,l.Z)(p,2),d=f[0],h=f[1],g=(0,c.useState)(1),m=(0,l.Z)(g,2),v=m[0],j=m[1],Z=(0,c.useState)(!1),b=(0,l.Z)(Z,2),k=b[0],w=b[1],y=(0,c.useState)(!1),P=(0,l.Z)(y,2),M=P[0],C=P[1],S=(0,c.useState)(null),z=(0,l.Z)(S,2),V=z[0],H=z[1],I=(0,c.useState)({make:"",price:"",minMileage:null,maxMileage:null,perPage:12}),L=(0,l.Z)(I,2),B=L[0],R=L[1],_=(0,c.useState)(""),E=(0,l.Z)(_,2),F=E[0],A=E[1],K=(0,c.useState)(["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Kia","Land Rover"]),q=(0,l.Z)(K,1)[0],G=(0,c.useState)(null),O=(0,l.Z)(G,2),W=O[0],Y=O[1],$=function(n){return n.map((function(n){return{value:n,label:n}}))},J=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.next=4,N(v+1,B);case 4:0===(e=n.sent).length?w(!0):(s((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(e))})),j((function(n){return n+1}))),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),x.ZP.error(n.t0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.next=4,N(1,B);case 4:e=n.sent,console.log("CatalogPage - applyFilters ",{filteredItems:e}),s(e),j(1),w(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),x.ZP.error(n.t0);case 14:return n.prev=14,h(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.next=4,N(1,B);case 4:e=n.sent,s(e),j(1),w(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),x.ZP.error(n.t0);case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[B]),(0,T.jsxs)(T.Fragment,{children:[d&&(0,T.jsx)(D.a,{}),(0,T.jsxs)("div",{children:[(0,T.jsx)("div",{children:(0,T.jsxs)("label",{htmlFor:"makeSelect",children:["Car Brand:",(0,T.jsx)(u.ZP,{id:"makeSelect",options:$(q),value:$(q).find((function(n){return n.value===W})),onChange:function(n){Y(n?n.value:null),R((function(e){return(0,a.Z)((0,a.Z)({},e),{},{make:n?n.value:""})})),s([])},isClearable:!0,isSearchable:!0,placeholder:"Select Car Brand"})]})}),(0,T.jsxs)("label",{children:["Price:",(0,T.jsx)("input",{type:"text",value:B.price,onChange:function(n){return R((function(e){return(0,a.Z)((0,a.Z)({},e),{},{price:n.target.value})}))}})]}),(0,T.jsxs)("label",{children:["Min Mileage:",(0,T.jsx)("input",{type:"number",value:B.minMileage,onChange:function(n){var e=n.target.value;/^\d*$/.test(e)?(A(""),R((function(n){return(0,a.Z)((0,a.Z)({},n),{},{minMileage:e})}))):A("Please enter a valid number")},min:"0",max:"9999"}),F&&(0,T.jsx)("div",{style:{color:"red"},children:F})]}),F&&(0,T.jsx)("div",{style:{color:"red"},children:F}),(0,T.jsxs)("label",{children:["Max Mileage:",(0,T.jsx)("input",{type:"number",value:B.maxMileage,onChange:function(n){return R((function(e){return(0,a.Z)((0,a.Z)({},e),{},{maxMileage:n.target.value})}))},pattern:"[0-9]*",maxLength:"4"})]}),(0,T.jsx)("button",{onClick:Q,children:"Search"})]}),(0,T.jsx)(U,{items:t,openModal:function(n){C(!0),H(n)}}),!k&&(0,T.jsx)("button",{onClick:J,children:"Load More"}),k&&(0,T.jsx)("p",{children:"This is the entire catalog."}),M&&(0,T.jsx)(un,{item:t[V],closeModal:function(){C(!1),H(null)}}),(0,T.jsx)(x.x7,{position:"bottom-center",reverseOrder:!0})]})}}}]);
//# sourceMappingURL=378.ad357498.chunk.js.map