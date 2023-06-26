import{s as l,r as s}from"./index-2b5c64d9.js";/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var $;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($||($={}));function p(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function B(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function j(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function G(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var z;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(z||(z={}));function F(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function se(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?G(e):e;return{pathname:n?n.startsWith("/")?n:ce(n,t):t,search:le(r),hash:pe(a)}}function ce(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function A(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Q(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function X(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=G(e):(a=P({},e),p(!a.pathname||!a.pathname.includes("?"),A("?","pathname","search",a)),p(!a.pathname||!a.pathname.includes("#"),A("#","pathname","hash",a)),p(!a.search||!a.search.includes("#"),A("#","search","hash",a)));let c=e===""||a.pathname==="",o=c?"/":a.pathname,u;if(r||o==null)u=n;else{let d=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;a.pathname=g.join("/")}u=d>=0?t[d]:"/"}let i=se(a,u),h=o&&o!=="/"&&o.endsWith("/"),v=(c||o===".")&&n.endsWith("/");return!i.pathname.endsWith("/")&&(h||v)&&(i.pathname+="/"),i}const K=e=>e.join("/").replace(/\/\/+/g,"/"),le=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Z=["post","put","patch","delete"];new Set(Z);const he=["get",...Z];new Set(he);function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}const L=s.createContext(null);l.env.NODE_ENV!=="production"&&(L.displayName="DataRouter");const ee=s.createContext(null);l.env.NODE_ENV!=="production"&&(ee.displayName="DataRouterState");const fe=s.createContext(null);l.env.NODE_ENV!=="production"&&(fe.displayName="Await");const w=s.createContext(null);l.env.NODE_ENV!=="production"&&(w.displayName="Navigation");const J=s.createContext(null);l.env.NODE_ENV!=="production"&&(J.displayName="Location");const D=s.createContext({outlet:null,matches:[],isDataRoute:!1});l.env.NODE_ENV!=="production"&&(D.displayName="Route");const me=s.createContext(null);l.env.NODE_ENV!=="production"&&(me.displayName="RouteError");function de(e,t){let{relative:n}=t===void 0?{}:t;M()||(l.env.NODE_ENV!=="production"?p(!1,"useHref() may be used only in the context of a <Router> component."):p(!1));let{basename:r,navigator:a}=s.useContext(w),{hash:c,pathname:o,search:u}=U(e,{relative:n}),i=o;return r!=="/"&&(i=o==="/"?r:K([r,o])),a.createHref({pathname:i,search:u,hash:c})}function M(){return s.useContext(J)!=null}function O(){return M()||(l.env.NODE_ENV!=="production"?p(!1,"useLocation() may be used only in the context of a <Router> component."):p(!1)),s.useContext(J).location}const te="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ne(e){s.useContext(w).static||s.useLayoutEffect(e)}function ve(){let{isDataRoute:e}=s.useContext(D);return e?Ee():ge()}function ge(){M()||(l.env.NODE_ENV!=="production"?p(!1,"useNavigate() may be used only in the context of a <Router> component."):p(!1));let e=s.useContext(L),{basename:t,navigator:n}=s.useContext(w),{matches:r}=s.useContext(D),{pathname:a}=O(),c=JSON.stringify(Q(r).map(u=>u.pathnameBase)),o=s.useRef(!1);return ne(()=>{o.current=!0}),s.useCallback(function(u,i){if(i===void 0&&(i={}),l.env.NODE_ENV!=="production"&&B(o.current,te),!o.current)return;if(typeof u=="number"){n.go(u);return}let h=X(u,JSON.parse(c),a,i.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:K([t,h.pathname])),(i.replace?n.replace:n.push)(h,i.state,i)},[t,n,c,a,e])}function U(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=s.useContext(D),{pathname:a}=O(),c=JSON.stringify(Q(r).map(o=>o.pathnameBase));return s.useMemo(()=>X(e,JSON.parse(c),a,n==="path"),[e,c,a,n])}var W;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(W||(W={}));var x;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(x||(x={}));function re(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function Ne(e){let t=s.useContext(L);return t||(l.env.NODE_ENV!=="production"?p(!1,re(e)):p(!1)),t}function ye(e){let t=s.useContext(D);return t||(l.env.NODE_ENV!=="production"?p(!1,re(e)):p(!1)),t}function ae(e){let t=ye(e),n=t.matches[t.matches.length-1];return n.route.id||(l.env.NODE_ENV!=="production"?p(!1,e+' can only be used on routes that contain a unique "id"'):p(!1)),n.route.id}function be(){return ae(x.UseRouteId)}function Ee(){let{router:e}=Ne(W.UseNavigateStable),t=ae(x.UseNavigateStable),n=s.useRef(!1);return ne(()=>{n.current=!0}),s.useCallback(function(r,a){a===void 0&&(a={}),l.env.NODE_ENV!=="production"&&B(n.current,te),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,I({fromRouteId:t},a)))},[e,t])}var Y;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Y||(Y={}));new Promise(()=>{});function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function H(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,c;for(c=0;c<r.length;c++)a=r[c],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}const S="get",k="application/x-www-form-urlencoded";function _(e){return e!=null&&typeof e.tagName=="string"}function we(e){return _(e)&&e.tagName.toLowerCase()==="button"}function Re(e){return _(e)&&e.tagName.toLowerCase()==="form"}function De(e){return _(e)&&e.tagName.toLowerCase()==="input"}function Oe(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ce(e,t){return e.button===0&&(!t||t==="_self")&&!Oe(e)}function Se(e,t,n){let r,a=null,c,o;if(Re(e)){let u=t.submissionTrigger;if(t.action)a=t.action;else{let i=e.getAttribute("action");a=i?F(i,n):null}r=t.method||e.getAttribute("method")||S,c=t.encType||e.getAttribute("enctype")||k,o=new FormData(e),u&&u.name&&o.append(u.name,u.value)}else if(we(e)||De(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');if(t.action)a=t.action;else{let i=e.getAttribute("formaction")||u.getAttribute("action");a=i?F(i,n):null}r=t.method||e.getAttribute("formmethod")||u.getAttribute("method")||S,c=t.encType||e.getAttribute("formenctype")||u.getAttribute("enctype")||k,o=new FormData(u),e.name&&o.append(e.name,e.value)}else{if(_(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(r=t.method||S,a=t.action||null,c=t.encType||k,e instanceof FormData)o=e;else if(o=new FormData,e instanceof URLSearchParams)for(let[u,i]of e)o.append(u,i);else if(e!=null)for(let u of Object.keys(e))o.append(u,e[u])}return{action:a,method:r.toLowerCase(),encType:c,formData:o}}const xe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Le=["aria-current","caseSensitive","className","end","style","to","children"],Ue=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];l.env.NODE_ENV;const _e=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ve=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oe=s.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:a,replace:c,state:o,target:u,to:i,preventScrollReset:h}=e,v=H(e,xe),{basename:d}=s.useContext(w),g,R=!1;if(typeof i=="string"&&Ve.test(i)&&(g=i,_e))try{let f=new URL(window.location.href),y=i.startsWith("//")?new URL(f.protocol+i):new URL(i),C=F(y.pathname,d);y.origin===f.origin&&C!=null?i=C+y.search+y.hash:R=!0}catch{l.env.NODE_ENV!=="production"&&B(!1,'<Link to="'+i+'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')}let N=de(i,{relative:r}),b=Fe(i,{replace:c,state:o,target:u,preventScrollReset:h,relative:r});function m(f){n&&n(f),f.defaultPrevented||b(f)}return s.createElement("a",E({},v,{href:g||N,onClick:R||a?n:m,ref:t,target:u}))});l.env.NODE_ENV!=="production"&&(oe.displayName="Link");const Ae=s.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:a="",end:c=!1,style:o,to:u,children:i}=e,h=H(e,Le),v=U(u,{relative:h.relative}),d=O(),g=s.useContext(ee),{navigator:R}=s.useContext(w),N=R.encodeLocation?R.encodeLocation(v).pathname:v.pathname,b=d.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(b=b.toLowerCase(),m=m?m.toLowerCase():null,N=N.toLowerCase());let f=b===N||!c&&b.startsWith(N)&&b.charAt(N.length)==="/",y=m!=null&&(m===N||!c&&m.startsWith(N)&&m.charAt(N.length)==="/"),C=f?n:void 0,V;typeof a=="function"?V=a({isActive:f,isPending:y}):V=[a,f?"active":null,y?"pending":null].filter(Boolean).join(" ");let ue=typeof o=="function"?o({isActive:f,isPending:y}):o;return s.createElement(oe,E({},h,{"aria-current":C,className:V,ref:t,style:ue,to:u}),typeof i=="function"?i({isActive:f,isPending:y}):i)});l.env.NODE_ENV!=="production"&&(Ae.displayName="NavLink");const ke=s.forwardRef((e,t)=>s.createElement(ie,E({},e,{ref:t})));l.env.NODE_ENV!=="production"&&(ke.displayName="Form");const ie=s.forwardRef((e,t)=>{let{reloadDocument:n,replace:r,method:a=S,action:c,onSubmit:o,fetcherKey:u,routeId:i,relative:h,preventScrollReset:v}=e,d=H(e,Ue),g=Ie(u,i),R=a.toLowerCase()==="get"?"get":"post",N=We(c,{relative:h}),b=m=>{if(o&&o(m),m.defaultPrevented)return;m.preventDefault();let f=m.nativeEvent.submitter,y=(f==null?void 0:f.getAttribute("formmethod"))||a;g(f||m.currentTarget,{method:y,replace:r,relative:h,preventScrollReset:v})};return s.createElement("form",E({ref:t,method:R,action:N,onSubmit:n?o:b},d))});l.env.NODE_ENV!=="production"&&(ie.displayName="FormImpl");l.env.NODE_ENV;var T;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(T||(T={}));var q;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(q||(q={}));function Pe(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function je(e){let t=s.useContext(L);return t||(l.env.NODE_ENV!=="production"?p(!1,Pe(e)):p(!1)),t}function Fe(e,t){let{target:n,replace:r,state:a,preventScrollReset:c,relative:o}=t===void 0?{}:t,u=ve(),i=O(),h=U(e,{relative:o});return s.useCallback(v=>{if(Ce(v,n)){v.preventDefault();let d=r!==void 0?r:j(i)===j(h);u(e,{replace:d,state:a,preventScrollReset:c,relative:o})}},[i,u,h,r,a,n,e,c,o])}function Ie(e,t){let{router:n}=je(T.UseSubmitImpl),{basename:r}=s.useContext(w),a=be();return s.useCallback(function(c,o){if(o===void 0&&(o={}),typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{action:u,method:i,encType:h,formData:v}=Se(c,o,r),d={preventScrollReset:o.preventScrollReset,formData:v,formMethod:i,formEncType:h};e?(t==null&&(l.env.NODE_ENV!=="production"?p(!1,"No routeId available for useFetcher()"):p(!1)),n.fetch(e,t,u,d)):n.navigate(u,E({},d,{replace:o.replace,fromRouteId:a}))},[n,r,e,t,a])}function We(e,t){let{relative:n}=t===void 0?{}:t,{basename:r}=s.useContext(w),a=s.useContext(D);a||(l.env.NODE_ENV!=="production"?p(!1,"useFormAction must be used inside a RouteContext"):p(!1));let[c]=a.matches.slice(-1),o=E({},U(e||".",{relative:n})),u=O();if(e==null&&(o.search=u.search,o.hash=u.hash,c.route.index)){let i=new URLSearchParams(o.search);i.delete("index"),o.search=i.toString()?"?"+i.toString():""}return(!e||e===".")&&c.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:K([r,o.pathname])),j(o)}export{oe as i};
