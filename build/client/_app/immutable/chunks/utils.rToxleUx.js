import{q as l,v as x,u as p,M as v,N as $}from"./runtime.aUzNjL39.js";import{t as g}from"./create.Bvef7Gho.js";function q(t,n,o){l(()=>{var r=x(()=>n(t,o==null?void 0:o())||{});if(o&&(r!=null&&r.update)){var e=!1,f={};p(()=>{var s=o();v(s),e&&$(f,s)&&(f=s,r.update(s))}),e=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function m(t){var n,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var e=t.length;for(n=0;n<e;n++)t[n]&&(o=m(t[n]))&&(r&&(r+=" "),r+=o)}else for(o in t)t[o]&&(r&&(r+=" "),r+=o);return r}function A(){for(var t,n,o=0,r="",e=arguments.length;o<e;o++)(t=arguments[o])&&(n=m(t))&&(r&&(r+=" "),r+=n);return r}function b(t){const n=t-1;return n*n*n+1}function C(...t){return g(A(t))}const M=(t,n={y:-8,x:0,start:.95,duration:150})=>{const o=getComputedStyle(t),r=o.transform==="none"?"":o.transform,e=(s,a,c)=>{const[u,d]=a,[i,y]=c;return(s-u)/(d-u)*(y-i)+i},f=s=>Object.keys(s).reduce((a,c)=>s[c]===void 0?a:a+`${c}:${s[c]};`,"");return{duration:n.duration??200,delay:0,css:s=>{const a=e(s,[0,1],[n.y??5,0]),c=e(s,[0,1],[n.x??0,0]),u=e(s,[0,1],[n.start??.95,1]);return f({transform:`${r} translate3d(${c}px, ${a}px, 0) scale(${u})`,opacity:s})},easing:b}};export{q as a,C as c,M as f};
