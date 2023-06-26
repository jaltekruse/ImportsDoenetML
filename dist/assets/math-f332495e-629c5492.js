import{M as le,u as de,r as i,h as he,i as ge,C as Q,g as ee,j as o,m as me,t as pe,a as L}from"./index-2b5c64d9.js";import{BoardContext as fe,TEXT_LAYER_OFFSET as re}from"./graph-6d43a295-5c8ba528.js";import"./css-ab4d83ca-d016d639.js";const Ce=le.memo(function te(ne){let{name:O,id:b,SVs:e,actions:p,sourceOfUpdate:xe,callAction:f}=de(ne);te.ignoreActionsWithoutCore=()=>!0;let r=i.useRef(null),E=i.useRef(null),T=i.useRef(null);const t=i.useContext(fe);let C=i.useRef(null),U=i.useRef(null),X=i.useRef(!1),Y=i.useRef(!1),m=i.useRef(!1),x=i.useRef(null),y=i.useRef(null),W=i.useRef(null),w=i.useRef(null),S=i.useRef(!1),F=i.useRef(!1);S.current=e.fixed,F.current=!e.draggable||e.fixLocation||e.fixed;const j=he(ge);i.useEffect(()=>()=>{r.current!==null&&ie(),t&&t.off("move",V)},[]),i.useEffect(()=>{t&&t.on("move",V)},[t]);function oe(){let n=j==="dark"?e.selectedStyle.textColorDarkMode:e.selectedStyle.textColor,c=j==="dark"?e.selectedStyle.backgroundColorDarkMode:e.selectedStyle.backgroundColor,g="";c&&(g+=`background-color: ${c}`);let l={visible:!e.hidden,fixed:S.current,layer:10*e.layer+re,cssStyle:g,highlightCssStyle:g,strokeColor:n,strokeOpacity:1,highlightStrokeColor:n,highlightStrokeOpacity:.5,highlight:!F.current,useMathJax:!0,parse:!1},d;try{let a=Q.fromAst(e.anchor),v=[a.get_component(0).evaluate_to_constant(),a.get_component(1).evaluate_to_constant()];Number.isFinite(v[0])||(v[0]=0,l.visible=!1),Number.isFinite(v[1])||(v[1]=0,l.visible=!1),d=t.create("point",v,{visible:!1})}catch{l.visible=!1,d=t.create("point",[0,0],{visible:!1})}l.anchor=d;let{anchorx:_,anchory:A}=ee(e.positionFromAnchor);l.anchorx=_,l.anchory=A,T.current=[_,A];let u,h;e.renderMode==="inline"?(u="\\(",h="\\)"):e.renderMode==="display"?(u="\\[",h="\\]"):e.renderMode==="numbered"?(u=`\\begin{gather}\\tag{${e.equationTag}}`,h="\\end{gather}"):e.renderMode==="align"?(u="\\begin{align}",h="\\end{align}"):(u="\\(",h="\\)");let s=t.create("text",[0,0,u+e.latex+h],l);s.isDraggable=!F.current,s.on("down",function(a){C.current=[a.x,a.y],U.current=[...d.coords.scrCoords],m.current=!1,X.current=!0,Y.current=!1,S.current||f({action:p.mathFocused,args:{name:O}})}),s.on("hit",function(a){U.current=[...d.coords.scrCoords],m.current=!1,f({action:p.mathFocused,args:{name:O}})}),s.on("up",function(a){m.current?(f({action:p.moveMath,args:{x:x.current,y:y.current}}),m.current=!1):!Y.current&&!S.current&&f({action:p.mathClicked,args:{name:O}}),X.current=!1}),s.on("keyfocusout",function(a){m.current&&(f({action:p.moveMath,args:{x:x.current,y:y.current}}),m.current=!1)}),s.on("drag",function(a){let v=a.type==="pointermove";(!v||Math.abs(a.x-C.current[0])>.1||Math.abs(a.y-C.current[1])>.1)&&(m.current=!0);let[J,$,G,q]=t.getBoundingBox(),z=s.size[0]/t.unitX,I=s.size[1]/t.unitY,H=T.current[0],K=T.current[1],N=0;H==="middle"?N=-z/2:H==="right"&&(N=-z);let B=0;K==="middle"?B=-I/2:K==="top"&&(B=-I);let ce=J+.04*(G-J)-N-z,se=G-.04*(G-J)-N,ae=q+.04*($-q)-B-I,ue=$-.04*($-q)-B;if(v){var Z=t.origin.scrCoords;x.current=(U.current[1]+a.x-C.current[0]-Z[1])/t.unitX,y.current=(Z[2]-(U.current[2]+a.y-C.current[1]))/t.unitY}else x.current=d.X()+s.relativeCoords.usrCoords[1],y.current=d.Y()+s.relativeCoords.usrCoords[2];x.current=Math.min(se,Math.max(ce,x.current)),y.current=Math.min(ue,Math.max(ae,y.current)),f({action:p.moveMath,args:{x:x.current,y:y.current,transient:!0,skippable:!0}}),s.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),d.coords.setCoordinates(JXG.COORDS_BY_USER,W.current)}),s.on("keydown",function(a){a.key==="Enter"&&(m.current&&(f({action:p.moveMath,args:{x:x.current,y:y.current}}),m.current=!1),f({action:p.mathClicked,args:{name:O}}))}),r.current=s,E.current=d,w.current=e.positionFromAnchor,setTimeout(()=>{r.current&&(r.current.needsUpdate=!0,r.current.setText(u+e.latex+h),r.current.update(),t.updateRenderer())},1e3)}function V(n){X.current&&(Math.abs(n.x-C.current[0])>.1||Math.abs(n.y-C.current[1])>.1)&&(Y.current=!0)}function ie(){r.current.off("drag"),r.current.off("down"),r.current.off("hit"),r.current.off("up"),r.current.off("keyfocusout"),r.current.off("keydown"),t.removeObject(r.current),r.current=null}if(t){let n;try{let c=Q.fromAst(e.anchor);n=[c.get_component(0).evaluate_to_constant(),c.get_component(1).evaluate_to_constant()]}catch{n=[NaN,NaN]}if(W.current=n,r.current===null)oe();else{r.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),E.current.coords.setCoordinates(JXG.COORDS_BY_USER,n);let c,g;e.renderMode==="inline"?(c="\\(",g="\\)"):e.renderMode==="display"?(c="\\[",g="\\]"):e.renderMode==="numbered"?(c=`\\begin{gather}\\tag{${e.equationTag}}`,g="\\end{gather}"):e.renderMode==="align"?(c="\\begin{align}",g="\\end{align}"):(c="\\(",g="\\)"),r.current.setText(c+e.latex+g);let l=!e.hidden;if(Number.isFinite(n[0])&&Number.isFinite(n[1])){let h=r.current.visProp.visible!==l;r.current.visProp.visible=l,r.current.visPropCalc.visible=l,h&&r.current.setAttribute({visible:l})}else r.current.visProp.visible=!1,r.current.visPropCalc.visible=!1;let d=10*e.layer+re;r.current.visProp.layer!==d&&r.current.setAttribute({layer:d});let _=j==="dark"?e.selectedStyle.textColorDarkMode:e.selectedStyle.textColor,A=j==="dark"?e.selectedStyle.backgroundColorDarkMode:e.selectedStyle.backgroundColor,u="";if(A?u+=`background-color: ${A}`:u+="background-color: transparent",r.current.visProp.strokecolor!==_&&(r.current.visProp.strokecolor=_,r.current.visProp.highlightstrokecolor=_),r.current.visProp.cssstyle!==u&&(r.current.visProp.cssstyle=u,r.current.visProp.highlightcssstyle=u),r.current.visProp.highlight=!F.current,r.current.visProp.fixed=S.current,r.current.isDraggable=!F.current,r.current.needsUpdate=!0,e.positionFromAnchor!==w.current){let{anchorx:h,anchory:s}=ee(e.positionFromAnchor);r.current.visProp.anchorx=h,r.current.visProp.anchory=s,T.current=[h,s],w.current=e.positionFromAnchor,r.current.fullUpdate()}else r.current.update();E.current.needsUpdate=!0,E.current.update(),t.updateRenderer()}return o.jsx("a",{name:b})}if(e.hidden)return null;let k,R;if(e.renderMode==="inline"?(k="\\(",R="\\)"):e.renderMode==="display"?(k="\\[",R="\\]"):e.renderMode==="numbered"?(k=`\\begin{gather}\\tag{${e.equationTag}}`,R="\\end{gather}"):e.renderMode==="align"?(k="\\begin{align}",R="\\end{align}"):(k="\\(",R="\\)"),!e.latexWithInputChildren)return null;let M=e.latexWithInputChildren.map(n=>typeof n=="number"?this.children[n]:k+n+R),P=[o.jsx("a",{name:b},b)];e.mrowChildNames&&P.push(...e.mrowChildNames.map(n=>{let c=me(n);return o.jsx("a",{name:c,id:c},c)}));let D=pe(j,e.selectedStyle);return M.length===0?o.jsxs(o.Fragment,{children:[P,o.jsx("span",{id:b,style:D})]}):M.length===1?o.jsxs(o.Fragment,{children:[P,o.jsx("span",{id:b,style:D,children:o.jsx(L,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:M[0]})})]}):M.length===2?o.jsxs(o.Fragment,{children:[P,o.jsx("span",{id:b,style:D,children:o.jsxs(L,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:[M[0],M[1]]})})]}):o.jsxs(o.Fragment,{children:[P,o.jsx("span",{id:b,style:D,children:o.jsx(L,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:M[0]})})]})});export{Ce as default};
