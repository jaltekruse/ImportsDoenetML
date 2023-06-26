import{z as h,M as g,u as f,h as j,K as k,N as R,j as i}from"./index-2b5c64d9.js";import{i as B}from"./index-44cba13f-436a649c.js";const c=h.button`
  position: relative;
  height: 24px;
  display: inline-block;
  color: white;
  color: ${r=>r.disabled?"var(--canvastext)":"var(--canvas)"};
  background-color: ${r=>r.disabled?"var(--mainGray)":"var(--mainBlue)"};

  padding: 2px;
  border: none;
  border-radius: var(--mainBorderRadius);
  cursor: pointer;
  cursor: ${r=>r.disabled?"not-allowed":"pointer"};
  padding: 1px 6px 1px 6px;

  &:hover {
    background-color: ${r=>r.disabled?"var(--mainGray)":"var(--lightBlue)"};
    color: ${r=>r.disabled?"var(--canvastext)":"var(--canvas)"};
  }

  &:focus {
    outline: 2px solid var(--mainBlue);
    outline-offset: 2px;
  }
`,_=g.memo(function(r){let{name:w,id:a,SVs:e,children:d,location:u,navigate:x}=f(r);const l=j(k);let p=u.search||"";if(e.hidden)return null;let t=d;d.length===0&&(t=e.linkText);let{targetForATag:o,url:n,haveValidTarget:m,externalUri:v}=R({cid:e.cid,doenetId:e.doenetId,variantIndex:e.variantIndex,edit:e.edit,hash:e.hash,page:e.page,givenUri:e.uri,targetName:e.targetName,search:p,id:a});if(e.createButton)return o==="_blank"?i.jsxs("span",{id:a,children:[i.jsx("a",{name:a}),i.jsx(c,{id:a+"_button",onClick:()=>window.open(n,o),disabled:e.disabled,children:e.linkText})]}):i.jsxs("span",{id:a,children:[i.jsx("a",{name:a}),i.jsx(c,{id:a+"_button",onClick:()=>x(n),disabled:e.disabled,children:e.linkText})]});if(m){if(v||n==="#")return i.jsx("a",{style:{color:"var(--mainBlue)",borderRadius:"5px"},target:o,id:a,name:a,href:n,children:t});{let b=l===window?"scrollY":"scrollTop",s={fromLink:!0};return Object.defineProperty(s,"previousScrollPosition",{get:()=>l==null?void 0:l[b],enumerable:!0}),i.jsx(B,{style:{color:"var(--mainBlue)",borderRadius:"5px"},target:o,id:a,name:a,to:n,state:s,children:t})}}else return i.jsx("span",{id:a,children:t})});export{_ as default};
