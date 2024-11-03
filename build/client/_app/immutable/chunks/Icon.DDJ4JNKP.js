var X=t=>{throw TypeError(t)};var W=(t,e,s)=>e.has(t)||X("Cannot "+s);var a=(t,e,s)=>(W(t,e,"read from private field"),s?s.call(t):e.get(t)),S=(t,e,s)=>e.has(t)?X("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),m=(t,e,s,n)=>(W(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s),O=(t,e,s)=>(W(t,e,"access private method"),s);import{h as R,a as Y,d as B,b as ge,E as Se,c as _e,a0 as Ee,I as xe,O as Z,K as $,S as Ce,aM as ye,p as Pe,P as je,q as Oe,aN as ke,aO as Fe,e as Te,t as ee,g as Re,i as Me,s as Ne,r as Le,f as Ae,j as te}from"./runtime.CUd8L4PE.js";import"./disclose-version.Bg9kRutz.js";import{c as Ie,a as se,n as Ke,d as qe}from"./template.d_0FGAGE.js";import{s as ne,c as re,e as De,i as Ge}from"./each.dZy8B3G7.js";import{s as ze}from"./slot.M8yLwYd-.js";import{b as ie}from"./render.BzBl1P_w.js";import{b as ae}from"./attributes.BHTXVK9S.js";import{i as Qe}from"./lifecycle.DFTc0-wV.js";import{l as oe,p as K}from"./props.DOJ_1Ofh.js";function Ue(t,e,s,n,r,o){let d=R;R&&Y();var i,l,h=null;R&&B.nodeType===1&&(h=B,Y());var f=R?B:t,p,_=re;ge(()=>{const y=e()||null;var E=s||y==="svg"?ye:null;if(y!==i){var c=re;ne(_),p&&(y===null?Pe(p,()=>{p=null,l=null}):y===l?je(p):(Oe(p),ie(!1))),y&&y!==l&&(p=_e(()=>{if(h=R?h:E?document.createElementNS(E,y):document.createElement(y),Ie(h,h),n){var u=R?Ee(h):h.appendChild(xe());R&&(u===null?Z(!1):$(u)),n(h,u)}Ce.nodes_end=h,f.before(h)})),i=y,i&&(l=i),ie(!0),ne(c)}},Se),d&&(Z(!0),$(f))}var me=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},U=typeof window>"u"||"Deno"in globalThis;function bt(){}function wt(t,e){return typeof t=="function"?t(e):t}function We(t){return typeof t=="number"&&t>=0&&t!==1/0}function gt(t,e){return Math.max(t+(e||0)-Date.now(),0)}function St(t,e){return typeof t=="function"?t(e):t}function _t(t,e){return typeof t=="function"?t(e):t}function Et(t,e){const{type:s="all",exact:n,fetchStatus:r,predicate:o,queryKey:d,stale:i}=t;if(d){if(n){if(e.queryHash!==Be(d,e.options))return!1}else if(!J(e.queryKey,d))return!1}if(s!=="all"){const l=e.isActive();if(s==="active"&&!l||s==="inactive"&&l)return!1}return!(typeof i=="boolean"&&e.isStale()!==i||r&&r!==e.state.fetchStatus||o&&!o(e))}function xt(t,e){const{exact:s,status:n,predicate:r,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(s){if(H(e.options.mutationKey)!==H(o))return!1}else if(!J(e.options.mutationKey,o))return!1}return!(n&&e.state.status!==n||r&&!r(e))}function Be(t,e){return((e==null?void 0:e.queryKeyHashFn)||H)(t)}function H(t){return JSON.stringify(t,(e,s)=>V(s)?Object.keys(s).sort().reduce((n,r)=>(n[r]=s[r],n),{}):s)}function J(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(s=>!J(t[s],e[s])):!1}function pe(t,e){if(t===e)return t;const s=ue(t)&&ue(e);if(s||V(t)&&V(e)){const n=s?t:Object.keys(t),r=n.length,o=s?e:Object.keys(e),d=o.length,i=s?[]:{};let l=0;for(let h=0;h<d;h++){const f=s?h:o[h];(!s&&n.includes(f)||s)&&t[f]===void 0&&e[f]===void 0?(i[f]=void 0,l++):(i[f]=pe(t[f],e[f]),i[f]===t[f]&&t[f]!==void 0&&l++)}return r===d&&l===r?t:i}return e}function Ct(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s in t)if(t[s]!==e[s])return!1;return!0}function ue(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function V(t){if(!le(t))return!1;const e=t.constructor;if(e===void 0)return!0;const s=e.prototype;return!(!le(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function le(t){return Object.prototype.toString.call(t)==="[object Object]"}function He(t){return new Promise(e=>{setTimeout(e,t)})}function Pt(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?pe(t,e):e}function jt(t,e,s=0){const n=[...t,e];return s&&n.length>s?n.slice(1):n}function Ot(t,e,s=0){const n=[e,...t];return s&&n.length>s?n.slice(0,-1):n}var Ve=Symbol();function kt(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Ve?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var M,F,q,ce,Je=(ce=class extends me{constructor(){super();S(this,M);S(this,F);S(this,q);m(this,q,e=>{if(!U&&window.addEventListener){const s=()=>e();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){a(this,F)||this.setEventListener(a(this,q))}onUnsubscribe(){var e;this.hasListeners()||((e=a(this,F))==null||e.call(this),m(this,F,void 0))}setEventListener(e){var s;m(this,q,e),(s=a(this,F))==null||s.call(this),m(this,F,e(n=>{typeof n=="boolean"?this.setFocused(n):this.onFocus()}))}setFocused(e){a(this,M)!==e&&(m(this,M,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(s=>{s(e)})}isFocused(){var e;return typeof a(this,M)=="boolean"?a(this,M):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},M=new WeakMap,F=new WeakMap,q=new WeakMap,ce),Xe=new Je,D,T,G,he,Ye=(he=class extends me{constructor(){super();S(this,D,!0);S(this,T);S(this,G);m(this,G,e=>{if(!U&&window.addEventListener){const s=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",n)}}})}onSubscribe(){a(this,T)||this.setEventListener(a(this,G))}onUnsubscribe(){var e;this.hasListeners()||((e=a(this,T))==null||e.call(this),m(this,T,void 0))}setEventListener(e){var s;m(this,G,e),(s=a(this,T))==null||s.call(this),m(this,T,e(this.setOnline.bind(this)))}setOnline(e){a(this,D)!==e&&(m(this,D,e),this.listeners.forEach(n=>{n(e)}))}isOnline(){return a(this,D)}},D=new WeakMap,T=new WeakMap,G=new WeakMap,he),ve=new Ye;function Ze(){let t,e;const s=new Promise((r,o)=>{t=r,e=o});s.status="pending",s.catch(()=>{});function n(r){Object.assign(s,r),delete s.resolve,delete s.reject}return s.resolve=r=>{n({status:"fulfilled",value:r}),t(r)},s.reject=r=>{n({status:"rejected",reason:r}),e(r)},s}function $e(t){return Math.min(1e3*2**t,3e4)}function et(t){return(t??"online")==="online"?ve.isOnline():!0}var be=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Ft(t){return t instanceof be}function tt(t){let e=!1,s=0,n=!1,r;const o=Ze(),d=c=>{var u;n||(_(new be(c)),(u=t.abort)==null||u.call(t))},i=()=>{e=!0},l=()=>{e=!1},h=()=>Xe.isFocused()&&(t.networkMode==="always"||ve.isOnline())&&t.canRun(),f=()=>et(t.networkMode)&&t.canRun(),p=c=>{var u;n||(n=!0,(u=t.onSuccess)==null||u.call(t,c),r==null||r(),o.resolve(c))},_=c=>{var u;n||(n=!0,(u=t.onError)==null||u.call(t,c),r==null||r(),o.reject(c))},y=()=>new Promise(c=>{var u;r=v=>{(n||h())&&c(v)},(u=t.onPause)==null||u.call(t)}).then(()=>{var c;r=void 0,n||(c=t.onContinue)==null||c.call(t)}),E=()=>{if(n)return;let c;const u=s===0?t.initialPromise:void 0;try{c=u??t.fn()}catch(v){c=Promise.reject(v)}Promise.resolve(c).then(p).catch(v=>{var I;if(n)return;const g=t.retry??(U?0:3),P=t.retryDelay??$e,A=typeof P=="function"?P(s,v):P,j=g===!0||typeof g=="number"&&s<g||typeof g=="function"&&g(s,v);if(e||!j){_(v);return}s++,(I=t.onFail)==null||I.call(t,s,v),He(A).then(()=>h()?void 0:y()).then(()=>{e?_(v):E()})})};return{promise:o,cancel:d,continue:()=>(r==null||r(),o),cancelRetry:i,continueRetry:l,canStart:f,start:()=>(f()?E():y().then(E),o)}}function st(){let t=[],e=0,s=i=>{i()},n=i=>{i()},r=i=>setTimeout(i,0);const o=i=>{e?t.push(i):r(()=>{s(i)})},d=()=>{const i=t;t=[],i.length&&r(()=>{n(()=>{i.forEach(l=>{s(l)})})})};return{batch:i=>{let l;e++;try{l=i()}finally{e--,e||d()}return l},batchCalls:i=>(...l)=>{o(()=>{i(...l)})},schedule:o,setNotifyFunction:i=>{s=i},setBatchNotifyFunction:i=>{n=i},setScheduler:i=>{r=i}}}var nt=st(),N,fe,rt=(fe=class{constructor(){S(this,N)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),We(this.gcTime)&&m(this,N,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(U?1/0:5*60*1e3))}clearGcTimeout(){a(this,N)&&(clearTimeout(a(this,N)),m(this,N,void 0))}},N=new WeakMap,fe),x,w,L,C,k,de,Tt=(de=class extends rt{constructor(e){super();S(this,C);S(this,x);S(this,w);S(this,L);this.mutationId=e.mutationId,m(this,w,e.mutationCache),m(this,x,[]),this.state=e.state||it(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){a(this,x).includes(e)||(a(this,x).push(e),this.clearGcTimeout(),a(this,w).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){m(this,x,a(this,x).filter(s=>s!==e)),this.scheduleGc(),a(this,w).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){a(this,x).length||(this.state.status==="pending"?this.scheduleGc():a(this,w).remove(this))}continue(){var e;return((e=a(this,L))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,d,i,l,h,f,p,_,y,E,c,u,v,g,P,A,j,I,z;m(this,L,tt({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(b,Q)=>{O(this,C,k).call(this,{type:"failed",failureCount:b,error:Q})},onPause:()=>{O(this,C,k).call(this,{type:"pause"})},onContinue:()=>{O(this,C,k).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>a(this,w).canRun(this)}));const s=this.state.status==="pending",n=!a(this,L).canStart();try{if(!s){O(this,C,k).call(this,{type:"pending",variables:e,isPaused:n}),await((o=(r=a(this,w).config).onMutate)==null?void 0:o.call(r,e,this));const Q=await((i=(d=this.options).onMutate)==null?void 0:i.call(d,e));Q!==this.state.context&&O(this,C,k).call(this,{type:"pending",context:Q,variables:e,isPaused:n})}const b=await a(this,L).start();return await((h=(l=a(this,w).config).onSuccess)==null?void 0:h.call(l,b,e,this.state.context,this)),await((p=(f=this.options).onSuccess)==null?void 0:p.call(f,b,e,this.state.context)),await((y=(_=a(this,w).config).onSettled)==null?void 0:y.call(_,b,null,this.state.variables,this.state.context,this)),await((c=(E=this.options).onSettled)==null?void 0:c.call(E,b,null,e,this.state.context)),O(this,C,k).call(this,{type:"success",data:b}),b}catch(b){try{throw await((v=(u=a(this,w).config).onError)==null?void 0:v.call(u,b,e,this.state.context,this)),await((P=(g=this.options).onError)==null?void 0:P.call(g,b,e,this.state.context)),await((j=(A=a(this,w).config).onSettled)==null?void 0:j.call(A,void 0,b,this.state.variables,this.state.context,this)),await((z=(I=this.options).onSettled)==null?void 0:z.call(I,void 0,b,e,this.state.context)),b}finally{O(this,C,k).call(this,{type:"error",error:b})}}finally{a(this,w).runNext(this)}}},x=new WeakMap,w=new WeakMap,L=new WeakMap,C=new WeakSet,k=function(e){const s=n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=s(this.state),nt.batch(()=>{a(this,x).forEach(n=>{n.onMutationUpdate(e)}),a(this,w).notify({mutation:this,type:"updated",action:e})})},de);function it(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}const we="$$_queryClient",Rt=()=>{const t=Fe(we);if(!t)throw new Error("No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?");return t},Mt=t=>{ke(we,t)};/**
 * @license lucide-svelte v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ot=Ke("<svg><!><!></svg>");function Nt(t,e){const s=oe(e,["children","$$slots","$$events","$$legacy"]),n=oe(s,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Te(e,!1);let r=K(e,"name",8,void 0),o=K(e,"color",8,"currentColor"),d=K(e,"size",8,24),i=K(e,"strokeWidth",8,2),l=K(e,"absoluteStrokeWidth",8,!1),h=K(e,"iconNode",24,()=>[]);const f=(...c)=>c.filter((u,v,g)=>!!u&&g.indexOf(u)===v).join(" ");Qe();var p=ot();let _;var y=Me(p);De(y,1,h,Ge,(c,u)=>{let v=()=>te(u)[0],g=()=>te(u)[1];var P=qe(),A=Ae(P);Ue(A,v,!0,(j,I)=>{let z;ee(()=>z=ae(j,z,{...g()},void 0,j.namespaceURI===ye,j.nodeName.includes("-")))}),se(c,P)});var E=Ne(y);ze(E,e,"default",{},null),Le(p),ee(()=>_=ae(p,_,{...at,...n,width:d(),height:d(),stroke:o(),"stroke-width":l()?Number(i())*24/Number(d()):i(),class:f("lucide-icon","lucide",r()?`lucide-${r()}`:"",s.class)},void 0,!0)),se(t,p),Re()}export{Nt as I,Tt as M,rt as R,me as S,Rt as a,bt as b,_t as c,Ve as d,Ue as e,tt as f,it as g,H as h,kt as i,Ft as j,et as k,Be as l,Et as m,nt as n,xt as o,Ot as p,jt as q,Pt as r,Ct as s,gt as t,Xe as u,ve as v,St as w,wt as x,J as y,Mt as z};