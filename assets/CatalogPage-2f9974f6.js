import{n as u,b as x,a as i,r,f,j as t,L as c,c as b}from"./index-e7019bf3.js";import{a as j,b as C,c as L,C as E}from"./CardList-0f49105b.js";const v=u.button`

  background-color: transparent;
  color: ${({theme:e})=>e.color.mainColor};
  font-size: 16px;
  line-height: 24px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  width: 145px;
  height: 56px;
  transition: border-color ${({theme:e})=>e.transition.main};
  align-self: center;
  margin-left: 150px;
  margin-top: 50px;

  &:hover {
    border-color: ${({theme:e})=>e.color.mainButton};
  }
`,S=()=>{const l=x(),d=i(j),a=i(C),n=i(L),[o,p]=r.useState(1),[g,m]=r.useState(0),h=()=>{p(o+1)};return r.useEffect(()=>{(async()=>{try{const s=await b({page:1,limit:""});console.log(s),m(Math.ceil(s.length/4))}catch(s){console.error("Error fetching total result:",s)}})()},[4]),r.useEffect(()=>{l(f({page:o,limit:4}))},[l,o,4]),t.jsx("div",{children:t.jsxs("div",{children:[n&&t.jsxs("div",{children:["Error: ",n]}),a?t.jsx(c,{}):t.jsx(E,{campers:d}),o<g&&t.jsx(v,{onClick:h,disabled:a,type:"button",children:a?t.jsx(c,{}):"Load more"})]})})};export{S as default};
