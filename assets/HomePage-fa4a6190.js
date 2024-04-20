import{n as t,u as s,j as o}from"./index-e7019bf3.js";const l="/campers-for-rent/assets/camper_378-adaef73b.png",c=t.div`
display: flex;
gap: 35px;
align-items: center;
overflow: hidden;
padding: 0 64px;
`;t.p`
font-size: 30px;
font-weight: bold;
`;const d=t.div`
width: 100%;
  min-height: 90vh;
  background-image: url(${l});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`,p=t.div`
  display: inline-block;
  margin: 0;
`,g=t.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`,m=t.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 30px;
`,h=t.li`
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: ${({theme:e})=>e.color.mainColor};
    border-radius: 50%;
  }
`,u=t.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 166px;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  border-radius: 200px;
  color: ${({theme:e})=>e.color.whiteColor};
  background-color: ${({theme:e})=>e.color.mainButton};
  transition: background-color ${({theme:e})=>e.transition.main};
  &:hover {
    background-color: ${({theme:e})=>e.color.hoverButton};
  }
`,x=()=>{const e=s(),n=()=>{e("/catalog")},i=["Wide Selection of Campers","Flexible Pricing Plans","Full Service Maintenance","Additional Equipment ","Custom Tourist Packages","Loyalty Program"];return o.jsxs(p,{children:[o.jsx(g,{children:"Experience the Freedom of the Open Road with Our Camper Rentals"}),o.jsx(m,{children:i.map((r,a)=>o.jsx(h,{children:r},a))}),o.jsx(u,{type:"button",onClick:n,children:"Show more"})]})},f=()=>o.jsxs(c,{children:[o.jsx(x,{}),o.jsx(d,{})]});export{f as default};
