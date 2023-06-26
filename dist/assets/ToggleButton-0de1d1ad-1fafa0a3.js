import{z as b,r as n,j as i,a as m}from"./index-2b5c64d9.js";const o=b.button`
  margin: ${a=>a.theme.margin};
  height: 24px;
  border: ${a=>a.alert?"2px solid var(--mainRed)":a.disabled?"2px solid var(--mainGray)":"2px solid var(--mainBlue)"};
  border-width: 2px;
  color: ${a=>a.alert?"var(--mainRed)":a.disabled?"var(--mainGray)":"var(--mainBlue)"};
  background-color: var(--canvas);
  border-radius: ${a=>a.theme.borderRadius};
  padding: ${a=>a.theme.padding};
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  font-size: 12px;
  text-align: center;

  &:hover {
    // Button color lightens on hover
    color: ${a=>a.disabled?"var(--mainGray)":"black"};
    background-color: ${a=>a.alert?"var(--lightRed)":a.disabled?"none":"var(--lightBlue)"};
  }

  &:focus {
    outline: 2px solid
      ${a=>a.disabled?"var(--mainGray)":a.alert?"var(--mainRed)":"var(--mainBlue)"};
    outline-offset: 2px;
  }
`;o.defaultProps={theme:{margin:"0px",borderRadius:"var(--mainBorderRadius)",padding:"0px 10px 0px 10px"}};function g(a){const[s,u]=n.useState(a.isSelected?a.isSelected:!1),v=a.label?"static":"none",d=a.vertical?"static":"flex",x=a.alert?a.alert:null,c=a.disabled?a.disabled:null;n.useEffect(()=>{u(a.isSelected)},[a.isSelected]);var l={value:"Toggle Button"},e="",r={value:"Label:",fontSize:"14px",display:`${v}`,marginRight:"5px",marginBottom:`${d=="flex"?"none":"2px"}`},t={display:`${d}`,alignItems:"center"};(a.value||a.icon)&&(a.value&&a.icon?(e=a.icon,l.value=a.value):a.value?l.value=a.value:a.icon&&(e=a.icon,l.value=""),a.value&&a.valueHasLatex&&(l.value=i.jsx(m,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:l.value}))),s===!0&&(a.disabled||(a.alert?l.backgroundColor="var(--mainRed)":l.backgroundColor="var(--mainBlue)",l.color="var(--canvas)",a.switch_value&&(l.value=a.switch_value)));function p(){a.onClick&&a.onClick(a.index!==null&&a.index!==void 0?a.index:null)}return a.label&&(r.value=a.label),a.width&&a.width==="menu"&&(l.width="var(--menuWidth)",a.label&&(t.width="var(--menuWidth)",l.width="100%")),a.num==="first"&&(l.borderRadius="5px 0px 0px 5px"),a.num==="last"&&(l.borderRadius="0px 5px 5px 0px"),a.num==="first_vert"&&(l.borderRadius="5px 5px 0px 0px"),a.num==="last_vert"&&(l.borderRadius="0px 0px 5px 5px"),i.jsx(i.Fragment,{children:i.jsxs("div",{style:t,children:[i.jsx("p",{id:"toggle-button-label",style:r,children:r.value}),i.jsxs(o,{"aria-labelledby":"toggle-button-label","aria-pressed":a.isSelected,"aria-disabled":!!a.disabled,id:a.id,style:l,disabled:c,alert:x,onClick:()=>{p()},children:[e," ",l.value]})]})})}export{g as B};
