import{n as e,u as s,j as o}from"./index-1473a56e.js";const l="/campers-for-rent/assets/camper_378-adaef73b.png",c=e.div`
display: flex;
gap: 35px;
align-items: center;
overflow: hidden;
padding: 0 64px;
`;e.p`
font-size: 30px;
font-weight: bold;
`;const p=e.div`
width: 100%;
  min-height: 90vh;
  background-image: url(${l});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`,d=e.div`
  display: inline-block;
  margin: 0;
`,g=e.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`,m=e.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 30px;
`,h=e.li`
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
    background-color: ${({theme:t})=>t.color.mainColor};
    border-radius: 50%;
  }
`,x=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 166px;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  border-radius: 200px;
  /* padding: 16px 40px; */
  color: ${({theme:t})=>t.color.whiteColor};
  background-color: ${({theme:t})=>t.color.mainButton};
  transition: background-color ${({theme:t})=>t.transition.main};
  &:hover,
  &:focus {
    background-color: ${({theme:t})=>t.color.hoverButton};
  }
`,u=()=>{const t=s(),n=()=>{t("/catalog")},i=["Wide Selection of Campers","Flexible Pricing Plans","Full Service Maintenance","Additional Equipment ","Custom Tourist Packages","Loyalty Program"];return o.jsxs(d,{children:[o.jsx(g,{children:"Experience the Freedom of the Open Road with Our Camper Rentals"}),o.jsx(m,{children:i.map((r,a)=>o.jsx(h,{children:r},a))}),o.jsx(x,{type:"button",onClick:n,children:"Show more"})]})},f=()=>o.jsxs(c,{children:[o.jsx(u,{}),o.jsx(p,{})]});export{f as default};
