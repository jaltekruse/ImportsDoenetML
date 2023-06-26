import{M as X,u as Y,r as s,k as D,j as R}from"./index-2b5c64d9.js";import{BoardContext as N,LINE_LAYER_OFFSET as $,VERTEX_LAYER_OFFSET as B}from"./graph-6d43a295-5c8ba528.js";import"./css-ab4d83ca-d016d639.js";const z=X.memo(function h(L){let{name:_,id:A,SVs:e,actions:k,sourceOfUpdate:x,callAction:S}=Y(L);h.ignoreActionsWithoutCore=()=>!0;const u=s.useContext(N);let g=s.useRef(null),E=s.useRef(null),i=s.useRef(null),t=s.useRef(null),v=s.useRef(null),d=s.useRef(null),y=s.useRef(null),f=s.useRef(null),w=s.useRef(null);w.current=e.numericalVertices,s.useEffect(()=>()=>{i.current&&W()},[]);function U(){let n={visible:!e.hidden,withLabel:!1,fixed:!0,layer:10*e.layer+$,strokeColor:"green",highlightStrokeColor:"green",strokeWidth:3,dash:F("solid")},m=D(e.fDefinition);g.current=u.create("functiongraph",[m],n);let p={visible:!e.hidden,withLabel:!1,fixed:!0,layer:10*e.layer+$,strokeColor:"gray",highlightStrokeColor:"gray",strokeWidth:2,dash:F("solid")};E.current=u.create("line",[[0,0],[1,1]],p);let P=!0;for(let o of e.numericalVertices)Number.isFinite(o[0])||(P=!1),Number.isFinite(o[1])||(P=!1);let C={name:e.labelForGraph,visible:!e.hidden&&P,withLabel:e.labelForGraph!=="",fixed:!0,layer:10*e.layer+$,strokeColor:e.selectedStyle.lineColor,highlightStrokeColor:e.selectedStyle.lineColor,strokeWidth:e.selectedStyle.lineWidth,highlightStrokeWidth:e.selectedStyle.lineWidth,dash:F(e.selectedStyle.lineStyle)};C.label={highlight:!1},e.labelHasLatex&&(C.label.useMathJax=!0),f.current={fixed:!e.draggable||e.fixed,visible:!e.hidden&&P&&e.draggable,withLabel:!0,name:"A",layer:10*e.layer+B,fillColor:e.selectedStyle.markerColor,strokeColor:e.selectedStyle.markerColor,size:e.selectedStyle.markerSize,face:G(e.selectedStyle.markerStyle)},e.draggable?(f.current.highlightFillColor="#EEEEEE",f.current.highlightStrokeColor="#C3D9FF",f.current.showInfoBox=!0):(f.current.highlightFillColor=e.selectedStyle.markerColor,f.current.highlightStrokeColor=e.selectedStyle.markerColor,f.current.showInfoBox=!1),t.current=[];let a=e.variable.toString();for(let o=0;o<e.numPoints;o++){let c=Object.assign({},f.current);o===0?c.name=`(${a}_0,0)`:o%2===1?c.name=`(${a}_${(o-1)/2}, ${a}_${(o+1)/2})`:c.name=`(${a}_${o/2}, ${a}_${o/2})`,o!==e.numPoints-1&&(c.visible=!1),t.current.push(u.create("point",[...e.numericalVertices[o]],c))}let r=[],l=[];e.numericalVertices.forEach(o=>{r.push(o[0]),l.push(o[1])});let b=u.create("curve",[r,l],C);for(let o=0;o<e.numPoints;o++)t.current[o].on("drag",c=>O(o,c)),t.current[o].on("up",c=>j(o)),t.current[o].on("keyfocusout",()=>V(o)),t.current[o].on("keydown",c=>I(o,c)),t.current[o].on("down",c=>d.current=null);return y.current=e.numPoints,b}function W(){u.removeObject(i.current),i.current=null,u.removeObject(g.current),g.current=null,u.removeObject(E.current),E.current=null;for(let n=0;n<e.numPoints;n++)t.current[n]&&(t.current[n].off("drag"),t.current[n].off("up"),t.current[n].off("keyfocusout"),t.current[n].off("keydown"),t.current[n].off("down"),u.removeObject(t.current[n]),delete t.current[n])}function O(n,m){m.type,d.current=n,v.current={},v.current[n]=[t.current[n].X(),t.current[n].Y()],S({action:k.movePolyline,args:{pointCoords:v.current,transient:!0,skippable:!0,sourceDetails:{vertex:n}}}),t.current[n].coords.setCoordinates(JXG.COORDS_BY_USER,[...w.current[n]]),u.updateInfobox(t.current[n])}function j(n){d.current===n&&S({action:k.movePolyline,args:{pointCoords:v.current,sourceDetails:{vertex:n}}})}function V(n){if(d.current!==n){d.current=null;return}d.current=null,S({action:k.movePolyline,args:{pointCoords:v.current,sourceInformation:{vertex:n}}})}function I(n,m){m.key==="Enter"&&(d.current===n&&S({action:k.movePolyline,args:{pointCoords:v.current,sourceInformation:{vertex:n}}}),d.current=null)}if(u)if(!i.current)i.current=U();else{let n=D(e.fDefinition);g.current.Y=n,g.current.needsUpdate=!0,g.current.updateCurve();let m=!0;for(let r of e.numericalVertices)Number.isFinite(r[0])||(m=!1),Number.isFinite(r[1])||(m=!1);let p=e.variable.toString();if(e.numPoints>y.current)for(let r=y.current;r<e.numPoints;r++){let l=Object.assign({},f.current);r===0?l.name=`(${p}_0,0)`:r%2===1?l.name=`(${p}_${(r-1)/2}, ${p}_${(r+1)/2})`:l.name=`(${p}_${r/2}, ${p}_${r/2})`,r!==e.numPoints-1&&(l.visible=!1),t.current.push(u.create("point",[...e.numericalVertices[r]],l)),t.current[r].on("drag",b=>O(r,b)),t.current[r].on("up",b=>j(r)),t.current[r].on("keyfocusout",()=>V(r)),t.current[r].on("keydown",b=>I(r,b)),t.current[r].on("down",b=>d.current=null)}else if(e.numPoints<y.current){for(let r=e.numPoints;r<y.current;r++){let l=t.current.pop();l.off("drag"),l.off("up"),l.off("keyfocusout"),l.off("keydown"),l.off("down"),console.log("about to remove",l),u.removeObject(l),u.update()}i.current.dataX.length=e.numPoints}y.current=e.numPoints;let P=i.current.transformMat[1][0],C=i.current.transformMat[2][0];for(let r=0;r<e.numPoints;r++)t.current[r].coords.setCoordinates(JXG.COORDS_BY_USER,[...e.numericalVertices[r]]),i.current.dataX[r]=e.numericalVertices[r][0]-P,i.current.dataY[r]=e.numericalVertices[r][1]-C;let a=!e.hidden;if(m){i.current.visProp.visible=a,i.current.visPropCalc.visible=a;for(let r=0;r<e.numPoints-1;r++)t.current[r].visProp.visible=!1,t.current[r].visPropCalc.visible=!1;e.numPoints>0&&e.draggable&&(t.current[e.numPoints-1].visProp.visible=a,t.current[e.numPoints-1].visPropCalc.visible=a)}else{i.current.visProp.visible=!1,i.current.visPropCalc.visible=!1;for(let r=0;r<e.numPoints;r++)t.current[r].visProp.visible=!1,t.current[r].visPropCalc.visible=!1}if(x.sourceInformation&&_ in x.sourceInformation){let r=x.sourceInformation[_].vertex;Number.isFinite(r)&&u.updateInfobox(t.current[r])}i.current.needsUpdate=!0,i.current.update().updateVisibility();for(let r=0;r<e.numPoints;r++)t.current[r].needsUpdate=!0,t.current[r].update();e.numPoints>0&&(t.current[e.numPoints-1].setAttribute({withlabel:!0}),t.current[e.numPoints-1].label.needsUpdate=!0,t.current[e.numPoints-1].label.update()),u.updateRenderer()}return e.hidden?null:R.jsx(R.Fragment,{children:R.jsx("a",{name:A})})});function F(h){return h==="solid"?0:h==="dashed"?2:h==="dotted"?1:0}function G(h){return h==="triangle"?"triangleup":h}export{z as default};
