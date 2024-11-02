var Pt=e=>{throw TypeError(e)};var mt=(e,t,s)=>t.has(e)||Pt("Cannot "+s);var r=(e,t,s)=>(mt(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?Pt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),o=(e,t,s,i)=>(mt(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),P=(e,t,s)=>(mt(e,t,"access private method"),s);var lt=(e,t,s,i)=>({set _(n){o(e,t,n,s)},get _(){return r(e,t,i)}});import{d as It,a as xt}from"../chunks/disclose-version.hrPzCK-_.js";import{ab as kt,a1 as Xt,ae as Yt,aj as Zt,aa as te,l as ee,aq as se,a2 as ie,ar as re,p as Lt,h as Ht,i as _t}from"../chunks/runtime.BBr2q3Ln.js";import{i as ne}from"../chunks/lifecycle.BwQx5Ps-.js";import{p as ae,o as ue,b as oe}from"../chunks/index-client.qgZlBHUp.js";function he(e,t,s,i,n){var u;kt&&Xt();var a=(u=t.$$slots)==null?void 0:u[s],h=!1;a===!0&&(a=t.children,h=!0),a===void 0||a(e,h?()=>i:i)}function ce(e,t,...s){var i=e,n=ee,a;Yt(()=>{n!==(n=t())&&(a&&(se(a),a=null),a=te(()=>n(i,...s)))},Zt),kt&&(i=ie)}var yt=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},pt=typeof window>"u"||"Deno"in globalThis;function R(){}function le(e,t){return typeof e=="function"?e(t):e}function de(e){return typeof e=="number"&&e>=0&&e!==1/0}function fe(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ft(e,t){return typeof e=="function"?e(t):e}function ye(e,t){return typeof e=="function"?e(t):e}function St(e,t){const{type:s="all",exact:i,fetchStatus:n,predicate:a,queryKey:h,stale:u}=e;if(h){if(i){if(t.queryHash!==gt(h,t.options))return!1}else if(!ut(t.queryKey,h))return!1}if(s!=="all"){const f=t.isActive();if(s==="active"&&!f||s==="inactive"&&f)return!1}return!(typeof u=="boolean"&&t.isStale()!==u||n&&n!==t.state.fetchStatus||a&&!a(t))}function Ot(e,t){const{exact:s,status:i,predicate:n,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(s){if(at(t.options.mutationKey)!==at(a))return!1}else if(!ut(t.options.mutationKey,a))return!1}return!(i&&t.state.status!==i||n&&!n(t))}function gt(e,t){return((t==null?void 0:t.queryKeyHashFn)||at)(e)}function at(e){return JSON.stringify(e,(t,s)=>bt(s)?Object.keys(s).sort().reduce((i,n)=>(i[n]=s[n],i),{}):s)}function ut(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!ut(e[s],t[s])):!1}function Gt(e,t){if(e===t)return e;const s=Ct(e)&&Ct(t);if(s||bt(e)&&bt(t)){const i=s?e:Object.keys(e),n=i.length,a=s?t:Object.keys(t),h=a.length,u=s?[]:{};let f=0;for(let w=0;w<h;w++){const m=s?w:a[w];(!s&&i.includes(m)||s)&&e[m]===void 0&&t[m]===void 0?(u[m]=void 0,f++):(u[m]=Gt(e[m],t[m]),u[m]===e[m]&&e[m]!==void 0&&f++)}return n===h&&f===n?e:u}return t}function Ct(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function bt(e){if(!Dt(e))return!1;const t=e.constructor;if(t===void 0)return!0;const s=t.prototype;return!(!Dt(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Dt(e){return Object.prototype.toString.call(e)==="[object Object]"}function pe(e){return new Promise(t=>{setTimeout(t,e)})}function me(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?Gt(e,t):t}function ve(e,t,s=0){const i=[...e,t];return s&&i.length>s?i.slice(1):i}function be(e,t,s=0){const i=[t,...e];return s&&i.length>s?i.slice(0,-1):i}var wt=Symbol();function Nt(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===wt?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var $,H,X,Mt,ge=(Mt=class extends yt{constructor(){super();l(this,$);l(this,H);l(this,X);o(this,X,t=>{if(!pt&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){r(this,H)||this.setEventListener(r(this,X))}onUnsubscribe(){var t;this.hasListeners()||((t=r(this,H))==null||t.call(this),o(this,H,void 0))}setEventListener(t){var s;o(this,X,t),(s=r(this,H))==null||s.call(this),o(this,H,t(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(t){r(this,$)!==t&&(o(this,$,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(s=>{s(t)})}isFocused(){var t;return typeof r(this,$)=="boolean"?r(this,$):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},$=new WeakMap,H=new WeakMap,X=new WeakMap,Mt),Bt=new ge,Y,_,Z,Qt,we=(Qt=class extends yt{constructor(){super();l(this,Y,!0);l(this,_);l(this,Z);o(this,Z,t=>{if(!pt&&window.addEventListener){const s=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}}})}onSubscribe(){r(this,_)||this.setEventListener(r(this,Z))}onUnsubscribe(){var t;this.hasListeners()||((t=r(this,_))==null||t.call(this),o(this,_,void 0))}setEventListener(t){var s;o(this,Z,t),(s=r(this,_))==null||s.call(this),o(this,_,t(this.setOnline.bind(this)))}setOnline(t){r(this,Y)!==t&&(o(this,Y,t),this.listeners.forEach(i=>{i(t)}))}isOnline(){return r(this,Y)}},Y=new WeakMap,_=new WeakMap,Z=new WeakMap,Qt),ft=new we;function Pe(){let e,t;const s=new Promise((n,a)=>{e=n,t=a});s.status="pending",s.catch(()=>{});function i(n){Object.assign(s,n),delete s.resolve,delete s.reject}return s.resolve=n=>{i({status:"fulfilled",value:n}),e(n)},s.reject=n=>{i({status:"rejected",reason:n}),t(n)},s}function Fe(e){return Math.min(1e3*2**e,3e4)}function zt(e){return(e??"online")==="online"?ft.isOnline():!0}var $t=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function vt(e){return e instanceof $t}function Vt(e){let t=!1,s=0,i=!1,n;const a=Pe(),h=c=>{var p;i||(y(new $t(c)),(p=e.abort)==null||p.call(e))},u=()=>{t=!0},f=()=>{t=!1},w=()=>Bt.isFocused()&&(e.networkMode==="always"||ft.isOnline())&&e.canRun(),m=()=>zt(e.networkMode)&&e.canRun(),d=c=>{var p;i||(i=!0,(p=e.onSuccess)==null||p.call(e,c),n==null||n(),a.resolve(c))},y=c=>{var p;i||(i=!0,(p=e.onError)==null||p.call(e,c),n==null||n(),a.reject(c))},D=()=>new Promise(c=>{var p;n=q=>{(i||w())&&c(q)},(p=e.onPause)==null||p.call(e)}).then(()=>{var c;n=void 0,i||(c=e.onContinue)==null||c.call(e)}),S=()=>{if(i)return;let c;const p=s===0?e.initialPromise:void 0;try{c=p??e.fn()}catch(q){c=Promise.reject(q)}Promise.resolve(c).then(d).catch(q=>{var K;if(i)return;const A=e.retry??(pt?0:3),b=e.retryDelay??Fe,E=typeof b=="function"?b(s,q):b,j=A===!0||typeof A=="number"&&s<A||typeof A=="function"&&A(s,q);if(t||!j){y(q);return}s++,(K=e.onFail)==null||K.call(e,s,q),pe(E).then(()=>w()?void 0:D()).then(()=>{t?y(q):S()})})};return{promise:a,cancel:h,continue:()=>(n==null||n(),a),cancelRetry:u,continueRetry:f,canStart:m,start:()=>(m()?S():D().then(S),a)}}function Se(){let e=[],t=0,s=u=>{u()},i=u=>{u()},n=u=>setTimeout(u,0);const a=u=>{t?e.push(u):n(()=>{s(u)})},h=()=>{const u=e;e=[],u.length&&n(()=>{i(()=>{u.forEach(f=>{s(f)})})})};return{batch:u=>{let f;t++;try{f=u()}finally{t--,t||h()}return f},batchCalls:u=>(...f)=>{a(()=>{u(...f)})},schedule:a,setNotifyFunction:u=>{s=u},setBatchNotifyFunction:u=>{i=u},setScheduler:u=>{n=u}}}var C=Se(),V,At,Jt=(At=class{constructor(){l(this,V)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),de(this.gcTime)&&o(this,V,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(pt?1/0:5*60*1e3))}clearGcTimeout(){r(this,V)&&(clearTimeout(r(this,V)),o(this,V,void 0))}},V=new WeakMap,At),tt,et,Q,F,ot,J,T,k,Rt,Oe=(Rt=class extends Jt{constructor(t){super();l(this,T);l(this,tt);l(this,et);l(this,Q);l(this,F);l(this,ot);l(this,J);o(this,J,!1),o(this,ot,t.defaultOptions),this.setOptions(t.options),this.observers=[],o(this,Q,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,o(this,tt,De(this.options)),this.state=t.state??r(this,tt),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=r(this,F))==null?void 0:t.promise}setOptions(t){this.options={...r(this,ot),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&r(this,Q).remove(this)}setData(t,s){const i=me(this.state.data,t,this.options);return P(this,T,k).call(this,{data:i,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),i}setState(t,s){P(this,T,k).call(this,{type:"setState",state:t,setStateOptions:s})}cancel(t){var i,n;const s=(i=r(this,F))==null?void 0:i.promise;return(n=r(this,F))==null||n.cancel(t),s?s.then(R).catch(R):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(r(this,tt))}isActive(){return this.observers.some(t=>ye(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===wt||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!fe(this.state.dataUpdatedAt,t)}onFocus(){var s;const t=this.observers.find(i=>i.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(s=r(this,F))==null||s.continue()}onOnline(){var s;const t=this.observers.find(i=>i.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(s=r(this,F))==null||s.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),r(this,Q).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(s=>s!==t),this.observers.length||(r(this,F)&&(r(this,J)?r(this,F).cancel({revert:!0}):r(this,F).cancelRetry()),this.scheduleGc()),r(this,Q).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||P(this,T,k).call(this,{type:"invalidate"})}fetch(t,s){var f,w,m;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(r(this,F))return r(this,F).continueRetry(),r(this,F).promise}if(t&&this.setOptions(t),!this.options.queryFn){const d=this.observers.find(y=>y.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,n=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(o(this,J,!0),i.signal)})},a=()=>{const d=Nt(this.options,s),y={queryKey:this.queryKey,meta:this.meta};return n(y),o(this,J,!1),this.options.persister?this.options.persister(d,y,this):d(y)},h={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:a};n(h),(f=this.options.behavior)==null||f.onFetch(h,this),o(this,et,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((w=h.fetchOptions)==null?void 0:w.meta))&&P(this,T,k).call(this,{type:"fetch",meta:(m=h.fetchOptions)==null?void 0:m.meta});const u=d=>{var y,D,S,c;vt(d)&&d.silent||P(this,T,k).call(this,{type:"error",error:d}),vt(d)||((D=(y=r(this,Q).config).onError)==null||D.call(y,d,this),(c=(S=r(this,Q).config).onSettled)==null||c.call(S,this.state.data,d,this)),this.scheduleGc()};return o(this,F,Vt({initialPromise:s==null?void 0:s.initialPromise,fn:h.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var y,D,S,c;if(d===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(p){u(p);return}(D=(y=r(this,Q).config).onSuccess)==null||D.call(y,d,this),(c=(S=r(this,Q).config).onSettled)==null||c.call(S,d,this.state.error,this),this.scheduleGc()},onError:u,onFail:(d,y)=>{P(this,T,k).call(this,{type:"failed",failureCount:d,error:y})},onPause:()=>{P(this,T,k).call(this,{type:"pause"})},onContinue:()=>{P(this,T,k).call(this,{type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode,canRun:()=>!0})),r(this,F).start()}},tt=new WeakMap,et=new WeakMap,Q=new WeakMap,F=new WeakMap,ot=new WeakMap,J=new WeakMap,T=new WeakSet,k=function(t){const s=i=>{switch(t.type){case"failed":return{...i,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Ce(i.data,this.options),fetchMeta:t.meta??null};case"success":return{...i,data:t.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=t.error;return vt(n)&&n.revert&&r(this,et)?{...r(this,et),fetchStatus:"idle"}:{...i,error:n,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...t.state}}};this.state=s(this.state),C.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),r(this,Q).notify({query:this,type:"updated",action:t})})},Rt);function Ce(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:zt(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function De(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=t!==void 0,i=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var U,Tt,qe=(Tt=class extends yt{constructor(t={}){super();l(this,U);this.config=t,o(this,U,new Map)}build(t,s,i){const n=s.queryKey,a=s.queryHash??gt(n,s);let h=this.get(a);return h||(h=new Oe({cache:this,queryKey:n,queryHash:a,options:t.defaultQueryOptions(s),state:i,defaultOptions:t.getQueryDefaults(n)}),this.add(h)),h}add(t){r(this,U).has(t.queryHash)||(r(this,U).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const s=r(this,U).get(t.queryHash);s&&(t.destroy(),s===t&&r(this,U).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){C.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return r(this,U).get(t)}getAll(){return[...r(this,U).values()]}find(t){const s={exact:!0,...t};return this.getAll().find(i=>St(s,i))}findAll(t={}){const s=this.getAll();return Object.keys(t).length>0?s.filter(i=>St(t,i)):s}notify(t){C.batch(()=>{this.listeners.forEach(s=>{s(t)})})}onFocus(){C.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){C.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},U=new WeakMap,Tt),I,O,W,x,L,jt,Ee=(jt=class extends Jt{constructor(t){super();l(this,x);l(this,I);l(this,O);l(this,W);this.mutationId=t.mutationId,o(this,O,t.mutationCache),o(this,I,[]),this.state=t.state||Me(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){r(this,I).includes(t)||(r(this,I).push(t),this.clearGcTimeout(),r(this,O).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){o(this,I,r(this,I).filter(s=>s!==t)),this.scheduleGc(),r(this,O).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){r(this,I).length||(this.state.status==="pending"?this.scheduleGc():r(this,O).remove(this))}continue(){var t;return((t=r(this,W))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var n,a,h,u,f,w,m,d,y,D,S,c,p,q,A,b,E,j,K,ct;o(this,W,Vt({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(g,z)=>{P(this,x,L).call(this,{type:"failed",failureCount:g,error:z})},onPause:()=>{P(this,x,L).call(this,{type:"pause"})},onContinue:()=>{P(this,x,L).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>r(this,O).canRun(this)}));const s=this.state.status==="pending",i=!r(this,W).canStart();try{if(!s){P(this,x,L).call(this,{type:"pending",variables:t,isPaused:i}),await((a=(n=r(this,O).config).onMutate)==null?void 0:a.call(n,t,this));const z=await((u=(h=this.options).onMutate)==null?void 0:u.call(h,t));z!==this.state.context&&P(this,x,L).call(this,{type:"pending",context:z,variables:t,isPaused:i})}const g=await r(this,W).start();return await((w=(f=r(this,O).config).onSuccess)==null?void 0:w.call(f,g,t,this.state.context,this)),await((d=(m=this.options).onSuccess)==null?void 0:d.call(m,g,t,this.state.context)),await((D=(y=r(this,O).config).onSettled)==null?void 0:D.call(y,g,null,this.state.variables,this.state.context,this)),await((c=(S=this.options).onSettled)==null?void 0:c.call(S,g,null,t,this.state.context)),P(this,x,L).call(this,{type:"success",data:g}),g}catch(g){try{throw await((q=(p=r(this,O).config).onError)==null?void 0:q.call(p,g,t,this.state.context,this)),await((b=(A=this.options).onError)==null?void 0:b.call(A,g,t,this.state.context)),await((j=(E=r(this,O).config).onSettled)==null?void 0:j.call(E,void 0,g,this.state.variables,this.state.context,this)),await((ct=(K=this.options).onSettled)==null?void 0:ct.call(K,void 0,g,t,this.state.context)),g}finally{P(this,x,L).call(this,{type:"error",error:g})}}finally{r(this,O).runNext(this)}}},I=new WeakMap,O=new WeakMap,W=new WeakMap,x=new WeakSet,L=function(t){const s=i=>{switch(t.type){case"failed":return{...i,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...i,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:t.error,failureCount:i.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),C.batch(()=>{r(this,I).forEach(i=>{i.onMutationUpdate(t)}),r(this,O).notify({mutation:this,type:"updated",action:t})})},jt);function Me(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var M,ht,Kt,Qe=(Kt=class extends yt{constructor(t={}){super();l(this,M);l(this,ht);this.config=t,o(this,M,new Map),o(this,ht,Date.now())}build(t,s,i){const n=new Ee({mutationCache:this,mutationId:++lt(this,ht)._,options:t.defaultMutationOptions(s),state:i});return this.add(n),n}add(t){const s=dt(t),i=r(this,M).get(s)??[];i.push(t),r(this,M).set(s,i),this.notify({type:"added",mutation:t})}remove(t){var i;const s=dt(t);if(r(this,M).has(s)){const n=(i=r(this,M).get(s))==null?void 0:i.filter(a=>a!==t);n&&(n.length===0?r(this,M).delete(s):r(this,M).set(s,n))}this.notify({type:"removed",mutation:t})}canRun(t){var i;const s=(i=r(this,M).get(dt(t)))==null?void 0:i.find(n=>n.state.status==="pending");return!s||s===t}runNext(t){var i;const s=(i=r(this,M).get(dt(t)))==null?void 0:i.find(n=>n!==t&&n.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}clear(){C.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...r(this,M).values()].flat()}find(t){const s={exact:!0,...t};return this.getAll().find(i=>Ot(s,i))}findAll(t={}){return this.getAll().filter(s=>Ot(t,s))}notify(t){C.batch(()=>{this.listeners.forEach(s=>{s(t)})})}resumePausedMutations(){const t=this.getAll().filter(s=>s.state.isPaused);return C.batch(()=>Promise.all(t.map(s=>s.continue().catch(R))))}},M=new WeakMap,ht=new WeakMap,Kt);function dt(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function qt(e){return{onFetch:(t,s)=>{var m,d,y,D,S;const i=t.options,n=(y=(d=(m=t.fetchOptions)==null?void 0:m.meta)==null?void 0:d.fetchMore)==null?void 0:y.direction,a=((D=t.state.data)==null?void 0:D.pages)||[],h=((S=t.state.data)==null?void 0:S.pageParams)||[];let u={pages:[],pageParams:[]},f=0;const w=async()=>{let c=!1;const p=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(t.signal.aborted?c=!0:t.signal.addEventListener("abort",()=>{c=!0}),t.signal)})},q=Nt(t.options,t.fetchOptions),A=async(b,E,j)=>{if(c)return Promise.reject();if(E==null&&b.pages.length)return Promise.resolve(b);const K={queryKey:t.queryKey,pageParam:E,direction:j?"backward":"forward",meta:t.options.meta};p(K);const ct=await q(K),{maxPages:g}=t.options,z=j?be:ve;return{pages:z(b.pages,ct,g),pageParams:z(b.pageParams,E,g)}};if(n&&a.length){const b=n==="backward",E=b?Ae:Et,j={pages:a,pageParams:h},K=E(i,j);u=await A(j,K,b)}else{const b=e??a.length;do{const E=f===0?h[0]??i.initialPageParam:Et(i,u);if(f>0&&E==null)break;u=await A(u,E),f++}while(f<b)}return u};t.options.persister?t.fetchFn=()=>{var c,p;return(p=(c=t.options).persister)==null?void 0:p.call(c,w,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s)}:t.fetchFn=w}}}function Et(e,{pages:t,pageParams:s}){const i=t.length-1;return t.length>0?e.getNextPageParam(t[i],t,s[i],s):void 0}function Ae(e,{pages:t,pageParams:s}){var i;return t.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,t[0],t,s[0],s):void 0}var v,G,N,st,it,B,rt,nt,Ut,Wt=(Ut=class{constructor(e={}){l(this,v);l(this,G);l(this,N);l(this,st);l(this,it);l(this,B);l(this,rt);l(this,nt);o(this,v,e.queryCache||new qe),o(this,G,e.mutationCache||new Qe),o(this,N,e.defaultOptions||{}),o(this,st,new Map),o(this,it,new Map),o(this,B,0)}mount(){lt(this,B)._++,r(this,B)===1&&(o(this,rt,Bt.subscribe(async e=>{e&&(await this.resumePausedMutations(),r(this,v).onFocus())})),o(this,nt,ft.subscribe(async e=>{e&&(await this.resumePausedMutations(),r(this,v).onOnline())})))}unmount(){var e,t;lt(this,B)._--,r(this,B)===0&&((e=r(this,rt))==null||e.call(this),o(this,rt,void 0),(t=r(this,nt))==null||t.call(this),o(this,nt,void 0))}isFetching(e){return r(this,v).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return r(this,G).findAll({...e,status:"pending"}).length}getQueryData(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=r(this,v).get(t.queryHash))==null?void 0:s.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const s=this.defaultQueryOptions(e),i=r(this,v).build(this,s);return e.revalidateIfStale&&i.isStaleByTime(Ft(s.staleTime,i))&&this.prefetchQuery(s),Promise.resolve(t)}}getQueriesData(e){return r(this,v).findAll(e).map(({queryKey:t,state:s})=>{const i=s.data;return[t,i]})}setQueryData(e,t,s){const i=this.defaultQueryOptions({queryKey:e}),n=r(this,v).get(i.queryHash),a=n==null?void 0:n.state.data,h=le(t,a);if(h!==void 0)return r(this,v).build(this,i).setData(h,{...s,manual:!0})}setQueriesData(e,t,s){return C.batch(()=>r(this,v).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,s)]))}getQueryState(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=r(this,v).get(t.queryHash))==null?void 0:s.state}removeQueries(e){const t=r(this,v);C.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=r(this,v),i={type:"active",...e};return C.batch(()=>(s.findAll(e).forEach(n=>{n.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){const s={revert:!0,...t},i=C.batch(()=>r(this,v).findAll(e).map(n=>n.cancel(s)));return Promise.all(i).then(R).catch(R)}invalidateQueries(e={},t={}){return C.batch(()=>{if(r(this,v).findAll(e).forEach(i=>{i.invalidate()}),e.refetchType==="none")return Promise.resolve();const s={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(s,t)})}refetchQueries(e={},t){const s={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},i=C.batch(()=>r(this,v).findAll(e).filter(n=>!n.isDisabled()).map(n=>{let a=n.fetch(void 0,s);return s.throwOnError||(a=a.catch(R)),n.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(i).then(R)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const s=r(this,v).build(this,t);return s.isStaleByTime(Ft(t.staleTime,s))?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(R).catch(R)}fetchInfiniteQuery(e){return e.behavior=qt(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(R).catch(R)}ensureInfiniteQueryData(e){return e.behavior=qt(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ft.isOnline()?r(this,G).resumePausedMutations():Promise.resolve()}getQueryCache(){return r(this,v)}getMutationCache(){return r(this,G)}getDefaultOptions(){return r(this,N)}setDefaultOptions(e){o(this,N,e)}setQueryDefaults(e,t){r(this,st).set(at(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...r(this,st).values()];let s={};return t.forEach(i=>{ut(e,i.queryKey)&&(s={...s,...i.defaultOptions})}),s}setMutationDefaults(e,t){r(this,it).set(at(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...r(this,it).values()];let s={};return t.forEach(i=>{ut(e,i.mutationKey)&&(s={...s,...i.defaultOptions})}),s}defaultQueryOptions(e){if(e._defaulted)return e;const t={...r(this,N).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=gt(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===wt&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...r(this,N).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){r(this,v).clear(),r(this,G).clear()}},v=new WeakMap,G=new WeakMap,N=new WeakMap,st=new WeakMap,it=new WeakMap,B=new WeakMap,rt=new WeakMap,nt=new WeakMap,Ut);const Re="$$_queryClient",Te=e=>{re(Re,e)};function je(e,t){Lt(t,!1);let s=ae(t,"client",24,()=>new Wt);ue(()=>{s().mount()}),Te(s()),oe(()=>{s().unmount()}),ne();var i=It(),n=Ht(i);he(n,t,"default",{}),xt(e,i),_t()}const Ke=new Wt;function He(e,t){Lt(t,!0),je(e,{client:Ke,children:(s,i)=>{var n=It(),a=Ht(n);ce(a,()=>t.children),xt(s,n)},$$slots:{default:!0}}),_t()}export{He as component};