import{C as l,Y as f,O as m,a5 as p,a6 as h,h as i,d as s,F as g,a as E}from"./runtime.8MaW9EIQ.js";function v(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=m;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,u=!r.startsWith("<!>");return()=>{if(i)return a(s,null),s;n===void 0&&(n=v(u?r:"<!>"+r),e||(n=f(n)));var o=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var c=f(o),d=o.lastChild;a(c,d)}else a(o,o);return o}}function M(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,u;return()=>{if(i)return a(s,null),s;if(!u){var o=v(n),c=f(o);u=f(c)}var d=u.cloneNode(!0);return a(d,d),d}}function N(r=""){if(!i){var t=l(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=l()),g(e)),a(e,e),e}function x(){if(i)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),a(t,e),r}function b(r,t){if(i){m.nodes_end=s,E();return}r!==null&&r.before(t)}export{b as a,N as b,a as c,x as d,M as n,y as t};
