import{z as g,M as f,u as j,j as e,F as a,f as C,b as y,c as A,d as k}from"./index-2b5c64d9.js";const i=g.button`
  position: relative;
  height: 24px;
  display: inline-block;
  color: white;
  background-color: var(--mainBlue);
  padding: 2px;
  /* border: var(--mainBorder); */
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`,L=f.memo(function(h){let{name:v,id:s,SVs:t,actions:m,children:b,callAction:u}=j(h);if(t.hidden)return null;let p=t.disabled,l=()=>u({action:m.submitAnswer});t.submitAllAnswersAtAncestor&&(l=()=>u({action:m.submitAllAnswers}));let c=null;if(t.inputChildren.length>0){let o=t.inputChildren.map(r=>r.componentName);c=b.filter(r=>r&&typeof r!="string"&&o.includes(r.props.componentInstructions.componentName))}if(!t.delegateCheckWork&&!t.suppressCheckwork){let o="unvalidated";(t.justSubmitted||t.numAttemptsLeft<1)&&(t.creditAchieved===1?o="correct":t.creditAchieved===0?o="incorrect":o="partialcorrect");let r={cursor:"pointer",padding:"1px 6px 1px 6px"};p&&(r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray"));let x=t.submitLabel;t.showCorrectness||(x=t.submitLabelNoCorrectness);let n=e.jsxs(i,{id:s+"_submit",tabIndex:"0",disabled:p,style:r,onClick:l,onKeyPress:d=>{d.key==="Enter"&&l()},children:[e.jsx(a,{style:{},icon:y,transform:{rotate:90}})," ",x]});if(t.showCorrectness){if(o==="correct")r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),n=e.jsxs(i,{id:s+"_correct",style:r,children:[e.jsx(a,{icon:A}),"  Correct"]});else if(o==="incorrect")r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),n=e.jsxs(i,{id:s+"_incorrect",style:r,children:[e.jsx(a,{icon:k}),"  Incorrect"]});else if(o==="partialcorrect"){r.backgroundColor="#efab34";let d=`${Math.round(t.creditAchieved*100)}% Correct`;n=e.jsx(i,{id:s+"_partial",style:r,children:d})}}else o!=="unvalidated"&&(r.backgroundColor="rgb(74, 3, 217)",n=e.jsxs(i,{id:s+"_saved",style:r,children:[e.jsx(a,{icon:C}),"  Response Saved"]}));return t.numAttemptsLeft<0?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(no attempts remaining)"})]}):t.numAttemptsLeft==1?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(1 attempt remaining)"})]}):Number.isFinite(t.numAttemptsLeft)&&(n=e.jsxs(e.Fragment,{children:[n,e.jsxs("span",{children:["(",t.numAttemptsLeft," attempts remaining)"]})]})),e.jsxs("span",{id:s,style:{marginBottom:"4px"},children:[e.jsx("a",{name:s}),c,n]})}else return e.jsxs("span",{id:s,style:{marginBottom:"4px"},children:[e.jsx("a",{name:s}),c]})});export{L as default};
