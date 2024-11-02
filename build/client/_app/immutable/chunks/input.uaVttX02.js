var X=e=>{throw TypeError(e)};var Q=(e,t,s)=>t.has(e)||X("Cannot "+s);var f=(e,t,s)=>(Q(e,t,"read from private field"),s?s.call(e):t.get(e)),N=(e,t,s)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),A=(e,t,s,i)=>(Q(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),P=(e,t,s)=>(Q(e,t,"access private method"),s);import{r as Y,a as ht,d as vt}from"./entry.CCFkMjoS.js";import{S as bt,y as mt,q as Z,z as yt,b as nt,A as gt,I as _t,w as K,B as p,C as kt,x as rt}from"./index.CSArfgcR.js";import"./disclose-version.Bg9kRutz.js";import{i as wt,a as xt,j as lt,v as Mt,aF as Ot,aG as Ct,B as St,a7 as Et,f as O,p as j,b as V,t as D,aH as $,g as U,ak as ut,d as zt,r as Lt,w as tt}from"./runtime.BebzK8jN.js";import{d as C,a as w,t as ot}from"./template.B-ZAag9S.js";import{i as ct}from"./if.DD3DEDZz.js";import{s as Nt}from"./snippet.D94RU37J.js";import{l as L,s as J,p as k,r as At}from"./props.BVkS62al.js";import{i as T}from"./lifecycle.DqKuX0jm.js";import{e as u}from"./utils.nWTeyq6A.js";import{a as Pt,b as F,r as It}from"./attributes.V9_NCSXj.js";import{b as et}from"./this.C_kBrDXs.js";function qt(e,t,s){wt(()=>{var i=xt(()=>t(e,s==null?void 0:s())||{});if(s&&(i!=null&&i.update)){var n=!1,o={};lt(()=>{var h=s();Mt(h),n&&Ot(o,h)&&(o=h,i.update(h))}),n=!0}if(i!=null&&i.destroy)return()=>i.destroy()})}function Rt(e,t,s,i=s){e.addEventListener(t,s);const n=e.__on_r;n?e.__on_r=()=>{n(),i()}:e.__on_r=i,Pt()}function Bt(e,t,s=t){var i=Ct();Rt(e,"input",()=>{var n=st(e)?it(e.value):e.value;s(n),i&&n!==(n=t())&&(e.value=n??"")}),lt(()=>{var n=t();if(St&&e.defaultValue!==e.value){s(e.value);return}st(e)&&n===it(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function st(e){var t=e.type;return t==="number"||t==="range"}function it(e){return e===""?null:+e}function r(e,t){var o;var s=(o=e.$$events)==null?void 0:o[t.type],i=Et(s)?s.slice():s==null?[]:[s];for(var n of i)n.call(this,t)}var S,E,g,x,M,B,H,at,Kt=(at=class extends bt{constructor(t,s){super();N(this,M);N(this,S);N(this,E);N(this,g);N(this,x);A(this,S,t),this.setOptions(s),this.bindMethods(),P(this,M,B).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const s=this.options;this.options=f(this,S).defaultMutationOptions(t),mt(this.options,s)||f(this,S).getMutationCache().notify({type:"observerOptionsUpdated",mutation:f(this,g),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&Z(s.mutationKey)!==Z(this.options.mutationKey)?this.reset():((i=f(this,g))==null?void 0:i.state.status)==="pending"&&f(this,g).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=f(this,g))==null||t.removeObserver(this)}onMutationUpdate(t){P(this,M,B).call(this),P(this,M,H).call(this,t)}getCurrentResult(){return f(this,E)}reset(){var t;(t=f(this,g))==null||t.removeObserver(this),A(this,g,void 0),P(this,M,B).call(this),P(this,M,H).call(this)}mutate(t,s){var i;return A(this,x,s),(i=f(this,g))==null||i.removeObserver(this),A(this,g,f(this,S).getMutationCache().build(f(this,S),this.options)),f(this,g).addObserver(this),f(this,g).execute(t)}},S=new WeakMap,E=new WeakMap,g=new WeakMap,x=new WeakMap,M=new WeakSet,B=function(){var s;const t=((s=f(this,g))==null?void 0:s.state)??yt();A(this,E,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},H=function(t){nt.batch(()=>{var s,i,n,o,h,l,v,a;if(f(this,x)&&this.hasListeners()){const y=f(this,E).variables,_=f(this,E).context;(t==null?void 0:t.type)==="success"?((i=(s=f(this,x)).onSuccess)==null||i.call(s,t.data,y,_),(o=(n=f(this,x)).onSettled)==null||o.call(n,t.data,null,y,_)):(t==null?void 0:t.type)==="error"&&((l=(h=f(this,x)).onError)==null||l.call(h,t.error,y,_),(a=(v=f(this,x)).onSettled)==null||a.call(v,void 0,t.error,y,_))}this.listeners.forEach(y=>{y(f(this,E))})})},at);function Ut(e){return gt()}function jt(e){return"subscribe"in e&&typeof e.subscribe=="function"}function Vt(){}function ue(e,t){const s=Ut(),i=jt(e)?e:Y(e),n=new Kt(s,ht(i));let o;i.subscribe(v=>{o=(a,y)=>{n.mutate(a,y).catch(Vt)},n.setOptions(v)});const h=Y(n.getCurrentResult(),v=>n.subscribe(nt.batchCalls(a=>v(a)))),{subscribe:l}=vt(h,v=>({...v,mutate:o,mutateAsync:v.mutate}));return{subscribe:l}}function Gt(e,t){const s=L(t,["children","$$slots","$$events","$$legacy"]);_t(e,J({name:"loader"},()=>s,{iconNode:[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]],children:(n,o)=>{var h=C(),l=O(h);K(l,t,"default",{}),w(n,h)},$$slots:{default:!0}}))}function Qt(e,t){const s=[];return t.builders.forEach(i=>{const n=i.action(e);n&&s.push(n)}),{destroy:()=>{s.forEach(i=>{i.destroy&&i.destroy()})}}}function Dt(e){const t={};return e.forEach(s=>{Object.keys(s).forEach(i=>{i!=="action"&&(t[i]=s[i])})}),t}function Ft(e,t){const s=L(t,["children","$$slots","$$events","$$legacy"]),i=L(s,["href","type","builders","el"]);j(t,!1);let n=k(t,"href",24,()=>{}),o=k(t,"type",24,()=>{}),h=k(t,"builders",24,()=>[]),l=k(t,"el",28,()=>{});const v={"data-button-root":""};T();var a=C(),y=O(a);ct(y,()=>h()&&h().length,_=>{var z=C(),G=O(z);const m=ut(()=>Dt(h()));p(G,()=>n()?"a":"button",!1,(b,q)=>{et(b,d=>l(d),()=>l()),qt(b,(d,ft)=>Qt(d,ft),()=>({builders:h()}));let I;D(()=>I=F(b,I,{type:n()?void 0:o(),href:n(),tabindex:"0",...U(m),...i,...v},void 0,b.namespaceURI===$,b.nodeName.includes("-"))),u("click",b,function(d){r.call(this,t,d)}),u("change",b,function(d){r.call(this,t,d)}),u("keydown",b,function(d){r.call(this,t,d)}),u("keyup",b,function(d){r.call(this,t,d)}),u("mouseenter",b,function(d){r.call(this,t,d)}),u("mouseleave",b,function(d){r.call(this,t,d)}),u("mousedown",b,function(d){r.call(this,t,d)}),u("pointerdown",b,function(d){r.call(this,t,d)}),u("mouseup",b,function(d){r.call(this,t,d)}),u("pointerup",b,function(d){r.call(this,t,d)});var R=C(),c=O(R);K(c,t,"default",{}),w(q,R)}),w(_,z)},_=>{var z=C(),G=O(z);p(G,()=>n()?"a":"button",!1,(m,b)=>{et(m,c=>l(c),()=>l());let q;D(()=>q=F(m,q,{type:n()?void 0:o(),href:n(),tabindex:"0",...i,...v},void 0,m.namespaceURI===$,m.nodeName.includes("-"))),u("click",m,function(c){r.call(this,t,c)}),u("change",m,function(c){r.call(this,t,c)}),u("keydown",m,function(c){r.call(this,t,c)}),u("keyup",m,function(c){r.call(this,t,c)}),u("mouseenter",m,function(c){r.call(this,t,c)}),u("mouseleave",m,function(c){r.call(this,t,c)}),u("mousedown",m,function(c){r.call(this,t,c)}),u("pointerdown",m,function(c){r.call(this,t,c)}),u("mouseup",m,function(c){r.call(this,t,c)}),u("pointerup",m,function(c){r.call(this,t,c)});var I=C(),R=O(I);K(R,t,"default",{}),w(b,I)}),w(_,z)}),w(e,a),V()}function dt(e){var t,s,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(s=dt(e[t]))&&(i&&(i+=" "),i+=s)}else for(s in e)e[s]&&(i&&(i+=" "),i+=s);return i}function Ht(){for(var e,t,s=0,i="",n=arguments.length;s<n;s++)(e=arguments[s])&&(t=dt(e))&&(i&&(i+=" "),i+=t);return i}function W(...e){return kt(Ht(e))}function Jt(e,t){const s=L(t,["children","$$slots","$$events","$$legacy"]),i=L(s,["class","variant","size","builders"]);j(t,!1);let n=k(t,"class",8,void 0),o=k(t,"variant",8,"default"),h=k(t,"size",8,"default"),l=k(t,"builders",24,()=>[]);T();var v=ut(()=>W(rt({variant:o(),size:h(),className:n()})));Ft(e,J({get builders(){return l()},get class(){return U(v)},type:"button"},()=>i,{$$events:{click(a){r.call(this,t,a)},keydown(a){r.call(this,t,a)}},children:(a,y)=>{var _=C(),z=O(_);K(z,t,"default",{}),w(a,_)},$$slots:{default:!0}})),V()}var Tt=ot('<div class="flex items-center justify-center text-accent"><!></div>');function oe(e,t){j(t,!0);let s=At(t,["$$slots","$$events","$$legacy","children","class","disabled","isLoading"]);var i=tt(()=>W(rt({className:t.class}))),n=tt(()=>t.disabled||t.isLoading);Jt(e,J({get class(){return U(i)},get disabled(){return U(n)}},()=>s,{$$events:{click(o){r.call(this,t,o)},change(o){r.call(this,t,o)},keydown(o){r.call(this,t,o)},keyup(o){r.call(this,t,o)},mouseenter(o){r.call(this,t,o)},mouseleave(o){r.call(this,t,o)}},children:(o,h)=>{var l=Tt(),v=zt(l);ct(v,()=>t.isLoading,a=>{Gt(a,{})},a=>{var y=C(),_=O(y);Nt(_,()=>t.children),w(a,y)}),Lt(l),w(o,l)},$$slots:{default:!0}})),V()}var Wt=ot("<input>");function ce(e,t){const s=L(t,["children","$$slots","$$events","$$legacy"]),i=L(s,["class","value","readonly"]);j(t,!1);let n=k(t,"class",8,void 0),o=k(t,"value",12,void 0),h=k(t,"readonly",8,void 0);T();var l=Wt();It(l);let v;D(()=>v=F(l,v,{class:W("border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",n()),readonly:h(),...i})),Bt(l,o),u("blur",l,function(a){r.call(this,t,a)}),u("change",l,function(a){r.call(this,t,a)}),u("click",l,function(a){r.call(this,t,a)}),u("focus",l,function(a){r.call(this,t,a)}),u("focusin",l,function(a){r.call(this,t,a)}),u("focusout",l,function(a){r.call(this,t,a)}),u("keydown",l,function(a){r.call(this,t,a)}),u("keypress",l,function(a){r.call(this,t,a)}),u("keyup",l,function(a){r.call(this,t,a)}),u("mouseover",l,function(a){r.call(this,t,a)}),u("mouseenter",l,function(a){r.call(this,t,a)}),u("mouseleave",l,function(a){r.call(this,t,a)}),u("mousemove",l,function(a){r.call(this,t,a)}),u("paste",l,function(a){r.call(this,t,a)}),u("input",l,function(a){r.call(this,t,a)}),u("wheel",l,function(a){r.call(this,t,a)},void 0,!0),w(e,l),V()}export{ce as I,oe as L,ue as c};
