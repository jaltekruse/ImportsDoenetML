import{z as C,M as j,u as k,r as A,j as e,J as u,F as m,b as R,c as _,d as B,f as S}from"./index-2b5c64d9.js";import{y as f}from"./ActionButtonGroup-31bfb1b3-fff09301.js";const E=C.div`
  position: relative;
  margin: 6px;
  display: inline-block;
  vertical-align: middle;
  width: auto;

  :before {
    content: "";
    position: absolute;
    left: -6px;
    top: -6px;
    border: var(--mainBorder);
    border-right: 0px;
    width: 6px;
    height: 100%;
    padding-top: 6px;
    padding-bottom: 3px;
  }

  :after {
    content: "";
    position: absolute;
    right: -6px;
    top: -6px;
    border: var(--mainBorder);
    border-left: 0px;
    width: 6px;
    height: 100%;
    padding-top: 6px;
    padding-bottom: 3px;
  }
`,c=C.button`
  position: relative;
  width: 24px;
  height: 24px;
  display: inline-block;
  color: white;
  background-color: var(--mainBlue);
  /* border: var(--mainBorder); */
  padding: 2px;
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`,V=j.memo(function(v){let{name:F,id:t,SVs:n,actions:l,children:y,callAction:a}=k(v),s=A.useRef(null);function w(){s.current="unvalidated",(n.valueHasBeenValidated||n.numAttemptsLeft<1)&&(n.creditAchieved===1?s.current="correct":n.creditAchieved===0?s.current="incorrect":s.current="partialcorrect")}if(n.hidden)return null;w();let p=n.disabled;getComputedStyle(document.documentElement).getPropertyValue("--mainGray");let r={cursor:"pointer",padding:"1px 6px 1px 6px"},o=null;if(n.includeCheckWork&&!n.suppressCheckwork){if(s.current==="unvalidated")p&&(r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray")),o=e.jsx(c,{id:t+"_submit",tabIndex:"0",disabled:p,style:r,onClick:()=>a({action:l.submitAnswer}),onKeyPress:i=>{i.key==="Enter"&&a({action:l.submitAnswer})},children:e.jsx(m,{icon:R,transform:{rotate:90}})});else if(n.showCorrectness)if(s.current==="correct")r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),o=e.jsx(c,{id:t+"_correct",style:r,children:e.jsx(m,{icon:_})});else if(s.current==="partialcorrect"){let i=`${Math.round(n.creditAchieved*100)} %`;r.width="44px",r.backgroundColor="#efab34",o=e.jsx(c,{id:t+"_partial",style:r,children:i})}else r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),o=e.jsx(c,{id:t+"_incorrect",style:r,children:e.jsx(m,{icon:B})});else r.backgroundColor="rgb(74, 3, 217)",r.padding="1px 8px 1px 4px",o=e.jsx(c,{id:t+"_saved",style:r,children:e.jsx(m,{icon:S})});n.numAttemptsLeft<0?o=e.jsxs(e.Fragment,{children:[o,e.jsx("span",{children:"(no attempts remaining)"})]}):n.numAttemptsLeft==1?o=e.jsxs(e.Fragment,{children:[o,e.jsx("span",{children:"(1 attempt remaining)"})]}):n.numAttemptsLeft<1/0&&(o=e.jsxs(e.Fragment,{children:[o,e.jsxs("span",{children:["(",n.numAttemptsLeft," attempts remaining)"]})]}))}let x=[];for(let i=0;i<n.numRows;i++){let b=[];for(let d=0;d<n.numColumns;d++)b.push(e.jsx("td",{className:"matrixCell",id:t+"_component_"+i+"_"+d,children:y[i*n.numColumns+d]},d));x.push(e.jsx("tr",{children:b},i))}let h=null;n.showSizeControls&&(h=e.jsx("span",{style:{margin:"0px 4px 4px 0px"},children:e.jsxs(f,{children:[e.jsx(u,{id:t+"_rowDecrement",value:"r-",onClick:()=>a({action:l.updateNumRows,args:{numRows:n.numRows-1}}),disabled:n.numRows<2,children:"r-"}),e.jsx(u,{id:t+"_rowIncrement",value:"r+",onClick:()=>a({action:l.updateNumRows,args:{numRows:n.numRows+1}}),children:"r+"})]})}));let g=null;return n.showSizeControls&&(g=e.jsx("span",{style:{margin:"0px 4px 4px 0px"},children:e.jsxs(f,{children:[e.jsx(u,{id:t+"_columnDecrement",value:"c-",onClick:()=>a({action:l.updateNumColumns,args:{numColumns:n.numColumns-1}}),disabled:n.numColumns<2,children:"c-"}),e.jsx(u,{id:t+"_columnIncrement",value:"c+",onClick:()=>a({action:l.updateNumColumns,args:{numColumns:n.numColumns+1}}),children:"c+"})]})})),e.jsxs(j.Fragment,{children:[e.jsx("a",{name:t}),e.jsxs("div",{style:{display:"inline-flex",margin:"0px 4px 4px 4px"},children:[e.jsx(E,{className:"matrixInputSurroundingBox",id:t,children:e.jsx("table",{children:e.jsx("tbody",{children:x})})}),e.jsx("div",{style:{marginRight:"4px"}}),h,g,o]})]})});export{V as default};
