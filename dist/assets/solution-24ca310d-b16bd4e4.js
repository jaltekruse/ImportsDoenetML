import{z as f,M as y,u as h,r as v,j as e,V,F as c,T as u}from"./index-2b5c64d9.js";const k=f.span`
  // display: block;
  // margin: SVs.open ? 12px 4px 0px 4px : 12px 4px 12px 4px;
  // padding: 6px;
  // border: 2px solid black;
  // border-top-left-radius: 5px;
  // border-top-right-radius: 5px;
  // border-bottom-left-radius: SVs.open ? 0px : 5px;
  // border-bottom-right-radius: SVs.open ? 0px : 5px;
  // background-color: var(--mainGray);
  // cursor: pointer;
  &: focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`,j=y.memo(function(b){let{name:R,id:n,SVs:o,children:m,actions:i,callAction:r}=h(b),g=a=>{r({action:i.recordVisibilityChange,args:{isVisible:a}})};v.useEffect(()=>()=>{r({action:i.recordVisibilityChange,args:{isVisible:!1}})},[]);let x="open";if(o.hidden)return null;let s,d=null,l={display:"none"},t,p;return o.open?(s=e.jsx(c,{icon:u}),x="close",d=m,l={display:"block",margin:"0px 4px 12px 4px",padding:"6px",border:"2px solid var(--canvastext)",borderTop:"0px",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",backgroundColor:"var(--canvas)"},p=a=>{a.key==="Enter"&&r({action:i.closeSolution})},o.canBeClosed?t=()=>{r({action:i.closeSolution})}:t=()=>{}):(s=e.jsx(c,{icon:u,rotation:90}),t=()=>{r({action:i.revealSolution})},p=a=>{a.key==="Enter"&&r({action:i.revealSolution})}),e.jsx(V,{partialVisibility:!0,onChange:g,children:e.jsxs("aside",{id:n,style:{margin:"12px 0"},children:[e.jsx("a",{name:n}),e.jsxs(k,{style:{display:"block",margin:o.open?"12px 4px 0px 4px":"12px 4px 12px 4px",padding:"6px",border:"2px solid var(--canvastext)",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",borderBottomLeftRadius:o.open?"0px":"5px",borderBottomRightRadius:o.open?"0px":"5px",backgroundColor:"var(--mainGray)",cursor:"pointer"},tabIndex:"0",id:n+"_button",onClick:t,onKeyDown:p,children:[s," ",o.sectionName," ",o.message," (click to ",x,")"]}),e.jsx("span",{style:l,children:d})]})})});export{j as default};
