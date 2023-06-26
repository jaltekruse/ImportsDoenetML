import{z as s,M as c,u as p,r as b,j as e,V as u,F as m}from"./index-2b5c64d9.js";import{c as f}from"./index.es-7d451cd6-eca72cdc.js";const g=s.aside`
  background-color: var(--canvas);
  margin: 0px 4px 12px 4px;
  padding: 1em;
  border: 2px solid var(--canvastext);
  border-top: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  //   &: focus {
  //   outline: 2px solid var(--canvastext);
  //   outline-offset: 2px;
  //  }
`,h=s.span`
  display: block;
  margin: 12px 4px 0px 4px;
  padding: 6px;
  border: 2px solid var(--canvastext);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: var(--mainGray);
  &: focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`,y=c.memo(function(t){let{name:v,id:i,SVs:r,children:n,actions:a,callAction:o}=p(t),d=l=>{o({action:a.recordVisibilityChange,args:{isVisible:l}})};if(b.useEffect(()=>()=>{o({action:a.recordVisibilityChange,args:{isVisible:!1}})},[]),r.hidden)return null;let x=e.jsx(m,{icon:f});return e.jsx(u,{partialVisibility:!0,onChange:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{tabIndex:"0",children:[x," Feedback"]}),e.jsxs(g,{id:i,children:[e.jsx("a",{name:i}),r.feedbackText,n]})]})})});export{y as default};
