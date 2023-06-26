import{z as n,M as t,j as i,L as m}from"./index-2b5c64d9.js";const v=n.div`
  /* margin-left: 3px; */
  display: ${l=>l.vertical?"static":"flex"};
  overflow: auto;
  min-width: 0;
  /* flex-wrap: wrap; */
`,f=n.div`
  display: ${l=>l.align};
  width: ${l=>l.width=="menu"?"var(--menuWidth)":""};
  align-items: ${l=>l.alignItems};
`,h=n.p`
  font-size: 14px;
  display: ${l=>l.labelVisible};
  margin-right: 5px;
  margin-bottom: ${l=>l.align=="flex"?"none":"2px"};
`,g={borderRadius:"0",padding:"0px 12px 0px 10px",border:"1px solid var(--mainGray)",outlineOffset:"-6px"},b={margin:"0px 4px 0px 4px",borderRadius:"0",padding:"0px 10px 0px 10px",border:"1px solid var(--mainGray)",outlineOffset:"-6px"},w=l=>{let s=l.vertical?"first_vert":"first",p=l.vertical?"last_vert":"last",a=l.width?"no_overflow":"overflow",e=t.Children.toArray(l.children);e.length>1&&(e=[t.cloneElement(e[0],{num:s,overflow:a})].concat(e.slice(1,-1).map(c=>t.cloneElement(c,{overflow:a}))).concat(t.cloneElement(e[e.length-1],{num:p,overflow:a})));const x=l.label?"static":"none";var o="",r="flex",d="center";return l.label&&(o=l.label,l.verticalLabel&&(r="static")),i.jsx(i.Fragment,{children:i.jsxs(f,{align:r,alignItems:d,width:l.width,children:[i.jsx(h,{labelVisible:x,align:r,children:o}),i.jsx(v,{vertical:l.vertical,children:i.jsx(m,{theme:l.vertical?b:g,children:e})})]})})},j=w;export{j as y};
