import{M as r,u as x,j as e,a as m}from"./index-2b5c64d9.js";const u=r.memo(function(s){let{name:c,id:n,SVs:i,children:t}=x(s);if(i.hidden)return null;if(t.length===0&&i.latex)return e.jsxs(r.Fragment,{children:[e.jsx("a",{name:n}),e.jsx("span",{id:n,children:e.jsx(m,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:"\\("+i.latex+"\\)"})})]},n);if(t.length===0)return e.jsx(r.Fragment,{},n);let a=t.slice(1).reduce((l,d)=>[...l,", ",d],[t[0]]);return e.jsxs(r.Fragment,{children:[e.jsx("a",{name:n}),e.jsx("span",{id:n,children:a})]},n)});export{u as default};