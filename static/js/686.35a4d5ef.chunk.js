"use strict";(self.webpackChunkservice_auto_rental_new1=self.webpackChunkservice_auto_rental_new1||[]).push([[686],{3595:function(n,i,t){t(2791);i.Z=t.p+"static/media/verticalTrait.9da486f0a04fa631faaf96665866e4f8.svg"},1687:function(n,i,t){t.d(i,{X:function(){return s}});var e=t(5861),r=t(4687),a=t.n(r),l=t(5294);l.Z.defaults.baseURL="https://6574665df941bda3f2afb2f5.mockapi.io/api/v1/";var s=function(){var n=(0,e.Z)(a().mark((function n(){var i,t,e,r,s,o,c,x=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=x.length>0&&void 0!==x[0]?x[0]:1,t=x.length>1?x[1]:void 0,n.prev=2,n.next=5,l.Z.get("/data-auto");case 5:return e=n.sent,r=e.data,""!==t.make&&(r=r.filter((function(n){return n.make===t.make}))),""!==t.price&&(r=r.filter((function(n){return parseInt(n.rentalPrice.replace(/\D/g,""),10)<=t.price}))),null!==t.minMileage&&(r=r.filter((function(n){return Number(n.mileage)>=Number(t.minMileage)}))),null!==t.maxMileage&&(r=r.filter((function(n){return Number(n.mileage)<=Number(t.maxMileage)}))),s=(i-1)*t.perPage,o=s+t.perPage,c=r.slice(s,o),console.log("fetchHome - currentItems",c),n.abrupt("return",c);case 18:throw n.prev=18,n.t0=n.catch(2),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",n.t0),n.t0;case 22:case"end":return n.stop()}}),n,null,[[2,18]])})));return function(){return n.apply(this,arguments)}}()},2373:function(n,i,t){t.d(i,{Z:function(){return K}});var e,r,a,l,s,o,c,x,d,f,p,h,g,m,u,Z,j,b,v,P,w,y=t(2791),k=t(168),z=t(7924),V=z.ZP.div(e||(e=(0,k.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  font-family: var(--font-family);\n  \n"]))),C=z.ZP.div(r||(r=(0,k.Z)(["\n  background: #fff;  \n  border-radius: 24px;\n  position: relative;\n  z-index: 1001;\n  max-width: 541px;\n  width: 100%; \n  height: 100%; \n"]))),M=z.ZP.div(a||(a=(0,k.Z)(["\n  left: calc((100% - 541px) / 2);\n  width: 541px;\n  height: 752px;\n"]))),I=z.ZP.span(l||(l=(0,k.Z)(["\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  cursor: pointer;\n  font-size: 22px;\n  color: #333;\n"]))),N=z.ZP.img(s||(s=(0,k.Z)(["\n  max-width: 100%;\n  max-height: 100%;  \n  width: 461px;\n  height: 248px; \n  margin-bottom: 14px;\n  margin-top: 40px;\n  display: block;\n  margin-left:40px;\n  border-radius: 14px;\n"]))),S=z.ZP.h2(o||(o=(0,k.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 133%;\n  color: #121417;  \n  text-align: left;\n  margin-bottom: 8px;  \n"]))),_=z.ZP.span(c||(c=(0,k.Z)(["\n  color: #3470ff;\n"]))),A=z.ZP.img(x||(x=(0,k.Z)(["\n  stroke-width: 1px;\n  stroke: rgba(18, 20, 23, 0.1);\n  display: inline-block;\n  margin-left: 6px;\n  margin-right: 6px;\n"]))),H=z.ZP.div(d||(d=(0,k.Z)(["\n  width: 461px;\n  min-height: 126px;\n  margin-bottom: 24px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex;\n  flex-direction: column;\n  margin-left: 40px;\n"]))),L=z.ZP.div(f||(f=(0,k.Z)(["  \n  text-align: left;\n  margin-bottom: 4px;\n  \n"]))),E=z.ZP.div(p||(p=(0,k.Z)(["\n  text-align: left;\n  margin-bottom: 8px;  \n"]))),F=z.ZP.h3(h||(h=(0,k.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 143%;\n  color: #121417;\n  display: flex;\n  text-align: left;\n  max-height: 40px; \n  overflow: auto;\n"]))),O=z.ZP.h3(g||(g=(0,k.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 143%;\n  color: #121417;\n  display: flex;\n  margin-bottom: 8px; \n"]))),R=z.ZP.div(m||(m=(0,k.Z)(["\n  width: 461px;\n  min-height: 68px;\n  margin-bottom: 24px;\n  text-align: left;\n  margin-left: 40px;\n"]))),D=z.ZP.div(u||(u=(0,k.Z)(["\n  width: 461px;\n  height: 100px;\n  margin-bottom: 24px;\n  text-align: left;\n  margin-left: 40px;\n"]))),J=z.ZP.span(Z||(Z=(0,k.Z)(["\n  padding: 7px 14px 7px 14px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #363535;\n  background: #f9f9f9;\n  border-radius: 35px;\n"]))),T=z.ZP.span(j||(j=(0,k.Z)(["\n  font-weight: 600;\n  color: #3470ff;\n"]))),U=z.ZP.div(b||(b=(0,k.Z)(["\n  margin-bottom: 8px;\n"]))),X=z.ZP.div(v||(v=(0,k.Z)(["\n  margin-bottom: 24px;\n"]))),Y=z.ZP.span(P||(P=(0,k.Z)(["\n  font-family: var(--font-family);\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: rgba(18, 20, 23, 0.5);\n"]))),q=z.ZP.a(w||(w=(0,k.Z)(["  \n  margin-bottom: 40px;\n  margin-left: 40px;\n  border-radius: 12px;\n  padding: 12px 50px;\n  width: 168px;\n  height: 44px;\n  background: #3470ff;\n\n  font-family: var(--font-family);\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 143%;\n  color: #fff;\n\n  &:hover {\n    background: #0b44cd;\n  }\n"]))),B=t(3595),G=t(184),K=function(n){var i=n.item,t=n.closeModal;(0,y.useEffect)((function(){var n;n=i.img,(new Image).src=n}),[i.img]);var e=function(n){var i=n.split("\n");return{minimumAge:i[0].split(":")[0],ageValue:i[0].split(":")[1],conditionsArray:i}}(i.rentalConditions),r=e.minimumAge,a=e.ageValue,l=e.conditionsArray,s=function(n){var i=n.split(",");return{street:i[0],city:i[1],state:i[2]}}(i.address),o=s.city,c=s.state;return(0,G.jsx)(V,{children:(0,G.jsx)(C,{children:(0,G.jsxs)(M,{children:[(0,G.jsx)(I,{onClick:t,children:"\xd7"}),(0,G.jsx)(N,{src:i.img,alt:"car"}),(0,G.jsxs)(H,{children:[(0,G.jsxs)(S,{children:[i.make," ",(0,G.jsx)(_,{children:i.model})," ,"," ",i.year]}),(0,G.jsxs)(L,{children:[(0,G.jsx)(Y,{children:o}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsx)(Y,{children:c}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsxs)(Y,{children:["ID: ",i.id]}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsxs)(Y,{children:["Year: ",i.year]}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsxs)(Y,{children:["Type: ",i.type]})]}),(0,G.jsxs)(E,{children:[(0,G.jsxs)(Y,{children:["Fuel Consumption: ",i.fuelConsumption]}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsxs)(Y,{children:["Engine Size: ",i.engineSize]})]}),(0,G.jsx)(F,{children:i.description})]}),(0,G.jsxs)(R,{children:[(0,G.jsx)(O,{children:"Accessories and functionalities:"}),(0,G.jsxs)(L,{children:[(0,G.jsx)(Y,{children:i.accessories[0]}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsx)(Y,{children:i.accessories[1]}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsx)(Y,{children:i.accessories[2]})]}),(0,G.jsxs)(L,{children:[(0,G.jsx)(Y,{children:i.functionalities[0]}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsx)(Y,{children:i.functionalities[1]}),(0,G.jsx)(A,{src:B.Z,alt:"Vertical trait"}),(0,G.jsx)(Y,{children:i.functionalities[2]})]})]}),(0,G.jsxs)(D,{children:[(0,G.jsx)(O,{children:"Rental Conditions:"}),(0,G.jsxs)(U,{children:[(0,G.jsxs)(J,{children:[r," : ",a]}),(0,G.jsx)(J,{children:l[1]})]}),(0,G.jsxs)(X,{children:[(0,G.jsx)(J,{children:l[2]}),(0,G.jsxs)(J,{children:["Mileage: ",(0,G.jsx)(T,{children:i.mileage})]}),(0,G.jsxs)(J,{children:["Price: ",(0,G.jsx)(T,{children:i.rentalPrice})]})]})]}),(0,G.jsx)(q,{href:"tel:+380730000000",children:"Rental car"})]})})})}},6549:function(n,i,t){t.d(i,{v:function(){return J}});var e,r,a,l,s,o,c,x,d,f,p,h,g,m,u,Z,j=t(3433),b=t(2791),v=t(168),P=t(7924),w=P.ZP.ul(e||(e=(0,v.Z)([" \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 29px;\n  row-gap: 50px;\n  flex-wrap: wrap;\n  margin: 50px 0 100px;\n"]))),y=P.ZP.li(r||(r=(0,v.Z)(["  \n  position: relative;\n"]))),k=P.ZP.div(a||(a=(0,v.Z)(["\n  width: 274px;\n  height: 444px;\n"]))),z=P.ZP.img(l||(l=(0,v.Z)(["\n  border-radius: 14px;\n"]))),V=P.ZP.img(s||(s=(0,v.Z)(["\n  cursor: pointer;\n  position: absolute;\n  top: 14px;\n  right: 14px;\n"]))),C=(P.ZP.span(o||(o=(0,v.Z)(["\n  color: var(--pr-button-background-color);\n  font-size: 16px;\n\n  &:hover,\n  :focus {\n    color: var(--hovered-button-background-color);\n  }\n"]))),P.ZP.div(c||(c=(0,v.Z)(["\n  font-family: var(--font-family);\n  width: 274px;\n  min-height: 72px;\n  margin-bottom: 24px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex;\n  flex-direction: column;\n  /* margin-left: 40px; */\n"])))),M=P.ZP.div(x||(x=(0,v.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 133%;\n  color: #121417;\n  text-align: left;\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),I=P.ZP.div(d||(d=(0,v.Z)(["\n  display: block;\n"]))),N=P.ZP.span(f||(f=(0,v.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 133%;\n  color: #121417;\n  margin-bottom: 8px;\n\n  /* display: inline-block; */\n"]))),S=P.ZP.span(p||(p=(0,v.Z)(["\n  color: #3470ff;\n"]))),_=P.ZP.img(h||(h=(0,v.Z)(["\n  stroke-width: 1px;\n  stroke: rgba(18, 20, 23, 0.1);\n  display: inline-block;\n  margin-left: 6px;\n  margin-right: 6px;\n"]))),A=P.ZP.div(g||(g=(0,v.Z)(["\n  /* display: flex; */\n  text-align: left;\n  margin-bottom: 4px;\n  /* margin-left: 40px; */\n"]))),H=P.ZP.div(m||(m=(0,v.Z)(["\n  text-align: left;\n  margin-bottom: 8px;\n  /* margin-left: 40px; */\n"]))),L=P.ZP.span(u||(u=(0,v.Z)(["\n  font-family: var(--font-family);\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: rgba(18, 20, 23, 0.5);\n\n  /* height: 18px; */\n"]))),E=P.ZP.button(Z||(Z=(0,v.Z)(["  \n  position: absolute;\n  bottom: 0;\n  border-radius: 12px;\n  padding: 12px 50px;\n  width: 274px;\n  height: 44px;\n  background: #3470ff;\n  \n  font-weight: 600;\n  font-size: 14px;\n  line-height: 143%;\n  color: #fff;\n\n  &:hover {\n    background: #0b44cd;\n  }\n"]))),F=t(3595);var O=t.p+"static/media/heartFilled.7d4380f6ad5218cebb3bbc1d87905f02.svg";var R=t.p+"static/media/heartOutline.f67f09b55cb66f40050b2ce10e5cd6a1.svg",D=t(184),J=function(n){var i=n.items,t=n.openModal,e=n.favorites,r=n.setFavorites;console.log("HomeList",{items:i},{favorites:e}),(0,b.useEffect)((function(){var n=JSON.parse(localStorage.getItem("favorites"))||[];r(n)}),[r]);return(0,D.jsx)(w,{children:i.map((function(n,a){var l=n.id,s=n.make,o=n.model,c=n.img,x=n.year,d=n.rentalCompany,f=n.type,p=n.functionalities,h=n.rentalPrice,g=function(n){var i=n.split(",");return{city:i[1],state:i[2]}}(n.address),m=g.city,u=g.state,Z=e.includes(l)?O:R;return console.log("HomeList-2",{items:i},{favorites:e}),(0,D.jsx)(y,{children:(0,D.jsxs)(k,{children:[(0,D.jsxs)("div",{children:[(0,D.jsx)(z,{src:c,width:"274",height:"268",alt:"car"}),(0,D.jsx)(V,{src:Z,alt:"Heart",onClick:function(){return function(n){var i=e.includes(n)?e.filter((function(i){return i!==n})):[].concat((0,j.Z)(e),[n]);r(i),localStorage.setItem("favorites",JSON.stringify(i))}(l)}})]}),(0,D.jsxs)(C,{children:[(0,D.jsxs)(M,{children:[(0,D.jsxs)(I,{children:[s," ",(0,D.jsx)(S,{children:o})," , ",x," "]}),(0,D.jsx)(I,{children:(0,D.jsx)(N,{children:h})})]}),(0,D.jsxs)(A,{children:[(0,D.jsx)(L,{children:m}),(0,D.jsx)(_,{src:F.Z,alt:"Vertical trait"}),(0,D.jsx)(L,{children:u}),(0,D.jsx)(_,{src:F.Z,alt:"Vertical trait"}),(0,D.jsx)(L,{children:d}),(0,D.jsx)(_,{src:F.Z,alt:"Vertical trait"}),(0,D.jsx)(L,{children:"Premium"})]}),(0,D.jsxs)(H,{children:[(0,D.jsx)(L,{children:f}),(0,D.jsx)(_,{src:F.Z,alt:"Vertical trait"}),(0,D.jsx)(L,{children:o}),(0,D.jsx)(_,{src:F.Z,alt:"Vertical trait"}),(0,D.jsx)(L,{children:l}),(0,D.jsx)(_,{src:F.Z,alt:"Vertical trait"}),(0,D.jsx)(L,{children:p[0]})]}),(0,D.jsx)(E,{onClick:function(){return t(a)},children:"Learn more"})]})]})},l)}))})}}}]);
//# sourceMappingURL=686.35a4d5ef.chunk.js.map