import{d as r,n as i,a as h,b as g,j as e,s as o,e as f,g as u}from"./index-e7019bf3.js";const K=t=>t.campers.error,M=t=>t.campers.isLoading,G=t=>t.campers.campers,a=t=>t.campers.filters,b=t=>t.campers.favorite;r([a],t=>t.location);r([a],t=>t.equipment);r([a],t=>t.vehicleType);const j=i.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  margin: 0;
  box-sizing: border-box;
  max-width: 888px;
`,m=i.h2`
  font-weight: 600;
  font-size: 24px;
`,v=i.p`
  font-weight: 600;
  font-size: 24px;
`,w=i.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  /* border-bottom: 2px solid #333; */
`,y=i.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;
  border-bottom: 1px solid ${({theme:t})=>t.color.mainColor};

  /* text-decoration: underline; */
`,C=i.div`
  display: flex;
  gap: 4px;
  align-items: baseline;
`,$=i.p`
  margin-bottom: 24px;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,k=i.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,F=i.li`
  background-color: #f2f4f7;
  border-radius: 100px;
  padding: 12px 18px;
  display: flex;

  text-align: center;
`,L=i.img`
  border-radius: 10px;
  object-fit: cover;
  width: 290px;
`,z=i.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
`,I=i.div`
  width: 526px;
  height: 310px;
  display: flex;
  flex-direction: column;
`,S=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,T=i.div`
  display: flex;
  gap: 24px;
`,B=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`,D=i.p`
  margin-left: 8px;
`,R=i.button`
  background-color: transparent;
  border: none;
`,W=i.button`
  border-radius: 200px;
  font-size: 16px;
  width: 166px;
  height: 56px;
  border: none;
  line-height: 24px;
  font-weight: 500;

  color: ${({theme:t})=>t.color.whiteColor};
  background-color: ${({theme:t})=>t.color.mainButton};
  transition: background-color ${({theme:t})=>t.transition.main};
  &:hover,
  &:focus {
    background-color: ${({theme:t})=>t.color.hoverButton};
  }
`,P=i.div`
  display: flex;
  gap: 10px;
`;i.svg`
  margin-left: 4px;
`;const A=({camper:t})=>{const s=[{icon:"icon-users",text:`${t.adults} adults`},{icon:"icon-automatic",text:"Automatic"},{icon:"icon-petrol",text:"Petrol"},{icon:"icon-kitchen",text:"Kitchen"},{icon:"icon-bed",text:`${t.details.beds} beds`},{icon:"icon-ac-2",text:"AC"}],d=h(b),c=g(),l=d.find(n=>n.id===t.id),x=()=>{c(l?f(t):u(t))};return e.jsx(j,{children:e.jsxs(T,{children:[e.jsx(L,{src:t.gallery[0],alt:t.name}),e.jsxs(I,{children:[e.jsxs(S,{children:[e.jsx(m,{children:t.name}),e.jsxs(P,{children:[e.jsxs(v,{children:["€",t.price.toFixed(2)]}),e.jsx(R,{type:"button",onClick:x,children:l?e.jsx("svg",{width:"24px",height:"24px",children:e.jsx("use",{href:`${o}#icon-heart-favorite`})}):e.jsx("svg",{width:"24px",height:"24px",children:e.jsx("use",{href:`${o}#icon-heart-default`})})})]})]}),e.jsxs(z,{children:[e.jsxs(w,{children:[e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{href:`${o}#icon-star`})}),e.jsxs(y,{children:[t.rating,"(",t.reviews.length," Reviews)"]})]}),e.jsxs(C,{children:[e.jsx("svg",{width:"16px",height:"16px",children:e.jsx("use",{href:`${o}#icon-location`})}),e.jsx("p",{children:t.location})]})]}),e.jsxs($,{children:[t.description," ..."]}),e.jsx(B,{children:e.jsx(k,{children:s.map((n,p)=>e.jsxs(F,{children:[e.jsx("svg",{width:"20px",height:"20px",children:e.jsx("use",{href:`${o}#${n.icon}`})}),e.jsx(D,{children:n.text})]},p))})}),e.jsx(W,{type:"button",children:"Show More"})]})]})})},E=i.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
`;i.main`
  flex-grow: 1;
  margin-top: 64px;
`;const H=({campers:t})=>e.jsx(E,{children:t.map(s=>e.jsx(A,{camper:s},s.id))});export{H as C,G as a,M as b,K as c,b as s};
