import{z as f,w,A as q}from"./runtime.D6zu14a2.js";import{s as _}from"./utils.Dapv9fV0.js";const a=[];function z(e,t){return{subscribe:A(e,t).subscribe}}function A(e,t=f){let r=null;const o=new Set;function i(n){if(q(e,n)&&(e=n,r)){const u=!a.length;for(const s of o)s[1](),a.push(s,e);if(u){for(let s=0;s<a.length;s+=2)a[s][0](a[s+1]);a.length=0}}}function l(n){i(n(e))}function b(n,u=f){const s=[n,u];return o.add(s),o.size===1&&(r=t(i,l)||f),n(e),()=>{o.delete(s),o.size===0&&r&&(r(),r=null)}}return{set:i,update:l,subscribe:b}}function B(e,t,r){const o=!Array.isArray(e),i=o?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=t.length<2;return z(r,(b,n)=>{let u=!1;const s=[];let d=0,p=f;const y=()=>{if(d)return;p();const c=t(o?s[0]:s,b,n);l?b(c):p=typeof c=="function"?c:f},h=i.map((c,g)=>_(c,m=>{s[g]=m,d&=~(1<<g),u&&y()},()=>{d|=1<<g}));return u=!0,y(),function(){w(h),p(),u=!1}})}function E(e){return{subscribe:e.subscribe.bind(e)}}function S(e){let t;return _(e,r=>t=r)(),t}export{E as a,B as d,S as g,z as r,A as w};
