import{z as U,M as te,u as ne,r as C,R as ie,e as le,j as n,J as S,a as O,C as ae}from"./index-2b5c64d9.js";import{y as P}from"./ActionButtonGroup-31bfb1b3-fff09301.js";let I=(i,s)=>ae.round_numbers_to_decimals(i,s).tree;const H=U.div`
  width: fit-content;
  height: ${i=>i.labeled&&i.noTicked?"60px":i.labeled?"80px":i.noTicked?"40px":"60px"};
  margin-bottom: 12px;
  &:focus {
    outline: 0;
  }
`,J=U.div`
  padding-top: 10px;
  height: 50px;
`,K=U.div`
  position: relative;
  border-radius: 3px;
  background-color: var(--canvastext);
  height: 2px;
  width: ${i=>i.width};
  user-select: none;
`,T=U.p`
  display: inline;
  user-select: none;
`,Q=U.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  position: relative;
  top: -4px;
  opacity: 1;
  background: ${i=>i.disabled?"var(--mainGray)":"var(--mainBlue)"}; // var(--mainBlue)?
  cursor: pointer;
`,k=U.div`
  position: absolute;
  border-left: 2px solid var(--mainGray);
  height: 10px;
  top: 1px;
  z-index: -2;
  left: ${i=>i.x};
  user-select: none;
`,$=U.p`
  position: absolute;
  left: ${i=>i.x};
  color: var(--canvastext);
  font-size: 12px;
  top: 1px;
  user-select: none;
`;function W(i,s,f,t){let e,o=Math.max(Math.abs(t.firstItem),Math.abs(t.lastItem)),p=Math.round(Math.log(o)/Math.log(10));o===0&&(p=1);let E=5-p;if(i.length===0){let a=[I(t.firstItem,E),I(t.lastItem,E)],l=Math.min(t.numItems,100),m=Math.floor(t.numItems/l);for(let d=1;d<l;d++)a.push(I(t.from+t.step*d*m,E));e=F(a)}else{let a=i.map(l=>I(l,E));e=F(a)}const j=t.numItems;if(t.width.size>e*j)if(i.length===0){let a=[],l=[],m=Math.max(Math.abs(t.firstItem),Math.abs(t.lastItem)),d=Math.round(Math.log(m)/Math.log(10));m===0&&(d=1);let w=5-d;for(let c=0;c<t.numItems;c++){let V=I(t.from+t.step*c,w);a.push(n.jsx(k,{x:`${c*s}px`},V)),l.push(n.jsx($,{x:`${c*s-3}px`,children:V},V))}return[a,l]}else return[i.map((a,l)=>n.jsx(k,{x:`${l*s}px`},a)),i.map((a,l)=>n.jsx($,{x:`${l*s-3}px`,children:a},a))];else if(t.width.size<e){let a=[...i];if(i.length===0)for(let l=0;l<Math.min(3,t.numItems);l++)a.push(t.from+t.step*l);return[a.map((l,m)=>m==0?n.jsx(k,{x:`${m*s}px`},l):""),a.map((l,m)=>{if(m==0)return n.jsx($,{x:`${m*s-3}px`,children:l},l);if(m==2)return n.jsx($,{x:`${m*s-3}px`,children:"..."},l)})]}else if(t.width.size<e*j){let a,l;if(i.length===0){let m=Math.floor(t.width.size/e),d=t.lastItem-t.firstItem,w=d/(m+1),c=Math.max(Math.abs(t.firstItem),Math.abs(t.lastItem)),V=Math.round(Math.log(c)/Math.log(10)),v=1-V,b=Math.max(I(w,v),10**-v),M=Math.floor(d/b)+1,y=5-V;l=[...Array(M).keys()].map(z=>t.from+b*z),a=l.map(z=>Math.round((z-t.from)/t.step)),l=l.map(z=>I(z,y))}else{let m=Math.max(2,Math.floor(t.width.size/e)),d=Math.ceil((t.numItems-1)/(m-1)-1e-10),w=Math.floor((t.numItems-1)/d+1e-10)+1;a=[...Array(w).keys()].map(v=>Math.round(d*v));let c=Math.max(Math.abs(t.firstItem),Math.abs(t.lastItem)),V=2-Math.round(Math.log(c)/Math.log(10));l=a.map(v=>I(i[v],V))}return[a.map((m,d)=>n.jsx(k,{x:`${m*s}px`},l[d])),a.map((m,d)=>n.jsx($,{x:`${m*s}px`,children:l[d]},l[d]))]}else return[i.map(a=>n.jsx(k,{x:`${(a-f)*s}px`},a)),i.map(a=>n.jsx($,{x:`${(a-f)*s-3}px`,children:a},a))]}function F(i){return i.reduce(function(s,f){return s>f.toString().length?s:f.toString().length})*12}function Y(i,s,f){let t=F(i);const e=Object.keys(i).length;if(f.width.size>t*e)return[i.map((o,p)=>n.jsx(k,{x:`${p*s}px`},o)),i.map((o,p)=>n.jsx($,{x:`${p*s-3}px`,children:o},o))];if(f.width.size<t)return[i.map((o,p)=>p==0?n.jsx(k,{x:`${p*s}px`},o):""),i.map((o,p)=>{if(p==0)return n.jsx($,{x:`${p*s-3}px`,children:o},o);if(p==2)return n.jsx($,{x:`${p*s-3}px`,children:"..."},o)})];if(f.width.size<t*e)return[i.map((o,p)=>n.jsx(k,{x:`${p*s}px`},o)),i.map((o,p)=>p==0||e===p+1?n.jsx($,{x:`${p*s-3}px`,children:o},o):n.jsx($,{x:`${p*s-3}px`,children:o.length<3?o:o.substr(0,3)+"..."},o))]}function Z(i,s,f){return f+i/s}function B(i,s,f){let t=Math.max(0,Math.min(f.numItems-1,Math.round(i-f.firstItem))),e;return s.length===0?e=f.from+f.step*t:e=s[t],[e,t]}const oe=te.memo(function i(s){let{name:f,id:t,SVs:e,actions:o,ignoreUpdate:p,rendererName:E,callAction:j}=ne(s);i.baseStateVariable="index";const a=C.useRef(null),l=ie(le(E)),[m,d]=C.useState(0),w=C.useRef(!1),[c,V]=C.useState(0),v=e.type==="text"?0:e.firstItem;let b=e.width.size/(e.numItems-1);const[M,y]=C.useState(0);if(C.useEffect(()=>{if(a.current){const h=a.current.getBoundingClientRect();V(h.left)}},[]),C.useEffect(()=>{!w.current&&!p&&(y(e.index),e.type!=="text"?d(e.index/(e.numItems-1)*e.width.size):d(e.index*b))},[e.index]),e.hidden)return null;if(e.disabled){let h="";e.showControls?h=n.jsxs(P,{style:{marginBottom:"12px"},children:[n.jsx(S,{value:"Prev",onClick:g=>D(),disabled:!0}),n.jsx(S,{value:"Next",onClick:g=>X(),disabled:!0})]}):h=null;let r="";e.type==="text"?r=Y(e.items,b,e):r=W(e.items,b,v,e);let x="";e.showTicks===!1?x=null:x=r;let u=null;if(e.label){let g=e.label;e.labelHasLatex&&(g=n.jsx(O,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:g})),e.showValue?u=n.jsxs(T,{children:[g," = "+e.valueForDisplay]}):u=n.jsx(T,{children:g})}else!e.label&&e.showValue?u=n.jsx(T,{children:e.valueForDisplay}):u=null;return n.jsxs(H,{labeled:e.showControls||e.label,noTicked:e.showTicks===!1,ref:a,children:[n.jsx("div",{id:`${t}-label`,style:{height:e.label||e.showValue?"20px":"0px"},children:u}),n.jsx(J,{children:n.jsxs(K,{width:`${e.width.size}px`,id:t,children:[n.jsx(Q,{disabled:!0,style:{left:`${m-4}px`},id:`${t}-handle`}),x]})}),n.jsx("div",{style:{height:e.showControls?"20px":"0px"},children:h})]})}function z(h){if(w.current=!0,document.addEventListener("mousemove",N),document.addEventListener("mouseup",_),d(h.nativeEvent.clientX-c),e.type!=="text"){let r=Z(h.nativeEvent.clientX-c,b,v),x=B(r,e.items,e);y(x[1]),l(u=>{let g={...u};return g.ignoreUpdate=!0,g}),j({action:o.changeValue,args:{value:x[0],transient:!0},baseVariableValue:x[1]})}else{let r=Math.round((h.nativeEvent.clientX-c)/b);y(r),l(x=>{let u={...x};return u.ignoreUpdate=!0,u}),j({action:o.changeValue,args:{value:e.items[r],transient:!0},baseVariableValue:r})}}function _(h){if(document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",_),!!w.current)if(w.current=!1,e.type!=="text"){let r=function(u,g,ee){return ee+u/g}(h.clientX-c,b,v),x=B(r,e.items,e);y(x[1]),d(x[1]*b),l(u=>{let g={...u};return g.ignoreUpdate=!0,g}),j({action:o.changeValue,args:{value:x[0]},baseVariableValue:x[1]})}else{let r=Math.round((h.clientX-c)/b);r=Math.max(0,Math.min(e.numItems-1,r)),y(r),d(r*b),l(x=>{let u={...x};return u.ignoreUpdate=!0,u}),j({action:o.changeValue,args:{value:e.items[r]},baseVariableValue:r})}}function N(h){if(w.current)if(d(Math.max(0,Math.min(e.width.size,h.clientX-c))),e.type!=="text"){let r=Z(h.clientX-c,b,v),x=B(r,e.items,e);y(x[1]),l(u=>{let g={...u};return g.ignoreUpdate=!0,g}),j({action:o.changeValue,args:{value:x[0],transient:!0,skippable:!0},baseVariableValue:x[1]})}else{let r=Math.round((h.clientX-c)/b);y(r),l(x=>{let u={...x};return u.ignoreUpdate=!0,u}),j({action:o.changeValue,args:{value:e.items[r],transient:!0,skippable:!0},baseVariableValue:r})}}function X(h){if(M===e.numItems-1)return;let r;e.items.length===0?r=e.from+e.step*(M+1):r=e.items[M+1],l(x=>{let u={...x};return u.ignoreUpdate=!0,u}),j({action:o.changeValue,args:{value:r},baseVariableValue:M+1}),y(M+1)}function D(h){if(M===0)return;let r;e.items.length===0?r=e.from+e.step*(M-1):r=e.items[M-1],l(x=>{let u={...x};return u.ignoreUpdate=!0,u}),j({action:o.changeValue,args:{value:r},baseVariableValue:M-1}),y(M-1)}function q(h){if(h.key==="ArrowLeft")return D();if(h.key==="ArrowRight")return X()}let L="";e.type==="text"?L=Y(e.items,b,e):L=W(e.items,b,v,e);let A="";e.showTicks===!1?A=null:A=L;let G="";e.showControls&&(G=n.jsxs(P,{style:{marginBottom:"12px"},children:[n.jsx(S,{value:"Prev",onClick:h=>D(),id:`${t}-prevbutton`}),n.jsx(S,{value:"Next",onClick:h=>X(),id:`${t}-nextbutton`})]})),e.showValue&&e.valueForDisplay;let R=null;if(e.label){let h=e.label;e.labelHasLatex&&(h=n.jsx(O,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:h})),e.showValue?R=n.jsxs(T,{children:[h," = "+e.valueForDisplay]}):R=n.jsx(T,{children:h})}else!e.label&&e.showValue?R=n.jsx(T,{children:e.valueForDisplay}):R=null;return n.jsxs(H,{ref:a,labeled:e.showControls||e.label,noTicked:e.showTicks===!1,onKeyDown:q,tabIndex:"0",children:[n.jsx("div",{id:`${t}-label`,style:{height:e.label||e.showValue?"20px":"0px"},children:R}),n.jsx(J,{onMouseDown:z,children:n.jsxs(K,{width:`${e.width.size}px`,id:t,children:[n.jsx(Q,{style:{left:`${m-4}px`},id:`${t}-handle`}),A]})}),n.jsx("div",{style:{height:e.showControls?"20px":"0px"},children:G})]})});export{oe as default};
