import{M as g,u,r as b,j as e,B as j,V as v}from"./index-2b5c64d9.js";import{i as t}from"./css-ab4d83ca-d016d639.js";const w=g.memo(function(h){let{name:y,id:r,SVs:i,children:c,actions:o,callAction:n}=u(h,!1),x=p=>{n({action:o.recordVisibilityChange,args:{isVisible:p}})};if(b.useEffect(()=>()=>{n({action:o.recordVisibilityChange,args:{isVisible:!1}})},[]),i.hidden)return null;let s={...i.height};s.size=s.size-40;let d={...i.width};d.size=d.size-4;let a={width:t(i.width),maxWidth:"100%"};i.locationFromParent!=="bottom"&&(a.border="var(--mainBorder)",a.borderRadius="var(--mainBorderRadius)");let m=e.jsxs("div",{style:{width:t(i.width),height:t(i.height),maxWidth:"100%",boxSizing:"border-box",paddingLeft:"10px"},children:[e.jsx("div",{style:{height:"28px"},children:e.jsx(j,{onClick:()=>n({action:o.updateComponents}),value:"update",id:r+"_updateButton",style:{marginTop:"10px"}})}),e.jsx("div",{style:{overflowY:"scroll",width:t(d),maxWidth:"100%",height:t(s),paddingRight:"10px",marginTop:"10px",boxSizing:"border-box"},id:r+"_content",children:c})]}),l={};return i.locationFromParent!=="bottom"&&(l={margin:"12px 0"}),e.jsx(v,{partialVisibility:!0,onChange:x,children:e.jsxs("div",{style:l,children:[e.jsx("a",{name:r}),e.jsx("div",{style:a,className:"codeViewerSurroundingBox",id:r,children:m})]})})});export{w as default};
