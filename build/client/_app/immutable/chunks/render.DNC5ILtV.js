import{a0 as B,N as H,aw as E,am as m,ax as Y,G as $,ay as I,O as D,az as S,Y as q,aA as z,$ as G,aB as T,K as w,F as R,a as P,d as v,Z as j,aC as F,aD as K,W as U,H as Z,aE as x,C as J,c as Q,e as X,h as A,g as tt,o as et}from"./runtime.8MaW9EIQ.js";import{c as rt}from"./template.DEdvQlwJ.js";const V=new Set,L=new Set;function at(t,e,a,u){function o(r){if(u.capture||y.call(e,r),!r.cancelBubble){var i=I,d=D;E(null),m(null);try{return a.call(this,r)}finally{E(i),m(d)}}}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?H(()=>{e.addEventListener(t,o,u)}):e.addEventListener(t,o,u),o}function dt(t,e,a,u,o){var r={capture:u,passive:o},i=at(t,e,a,r);(e===document.body||e===window||e===document)&&B(()=>{e.removeEventListener(t,i,r)})}function ft(t){for(var e=0;e<t.length;e++)V.add(t[e]);for(var a of L)a(t)}function y(t){var O;var e=this,a=e.ownerDocument,u=t.type,o=((O=t.composedPath)==null?void 0:O.call(t))||[],r=o[0]||t.target,i=0,d=t.__root;if(d){var f=o.indexOf(d);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var _=o.indexOf(e);if(_===-1)return;f<=_&&(i=f)}if(r=o[i]||t.target,r!==e){Y(t,"currentTarget",{configurable:!0,get(){return r||a}});var b=I,l=D;E(null),m(null);try{for(var n,s=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var h=r["__"+u];if(h!==void 0&&!r.disabled)if($(h)){var[M,...W]=h;M.apply(r,[t,...W])}else h.call(r,t)}catch(g){n?s.push(g):n=g}if(t.cancelBubble||c===e||c===null)break;r=c}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{t.__root=e,delete t.currentTarget,E(b),m(l)}}}function _t(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const nt=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ht(t){return nt.includes(t)}const ot={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function pt(t){return t=t.toLowerCase(),ot[t]??t}const st=["touchstart","touchmove"];function it(t){return st.includes(t)}let N=!0;function vt(t){N=t}function yt(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function ut(t,e){return C(t,e)}function gt(t,e){S(),e.intro=e.intro??!1;const a=e.target,u=A,o=v;try{for(var r=q(a);r&&(r.nodeType!==8||r.data!==z);)r=G(r);if(!r)throw T;w(!0),R(r),P();const i=C(t,{...e,anchor:r});if(v===null||v.nodeType!==8||v.data!==j)throw F(),T;return w(!1),i}catch(i){if(i===T)return e.recover===!1&&K(),S(),U(a),w(!1),ut(t,e);throw i}finally{w(u),R(o)}}const p=new Map;function C(t,{target:e,anchor:a,props:u={},events:o,context:r,intro:i=!0}){S();var d=new Set,f=l=>{for(var n=0;n<l.length;n++){var s=l[n];if(!d.has(s)){d.add(s);var c=it(s);e.addEventListener(s,y,{passive:c});var h=p.get(s);h===void 0?(document.addEventListener(s,y,{passive:c}),p.set(s,1)):p.set(s,h+1)}}};f(Z(V)),L.add(f);var _=void 0,b=x(()=>{var l=a??e.appendChild(J());return Q(()=>{if(r){X({});var n=et;n.c=r}o&&(u.$$events=o),A&&rt(l,null),N=i,_=t(l,u)||{},N=!0,A&&(D.nodes_end=v),r&&tt()}),()=>{var c;for(var n of d){e.removeEventListener(n,y);var s=p.get(n);--s===0?(document.removeEventListener(n,y),p.delete(n)):p.set(n,s)}L.delete(f),k.delete(_),l!==a&&((c=l.parentNode)==null||c.removeChild(l))}});return k.set(_,b),_}let k=new WeakMap;function wt(t){const e=k.get(t);e&&e()}export{ht as a,vt as b,at as c,ft as d,dt as e,N as f,gt as h,_t as i,ut as m,pt as n,yt as s,wt as u};