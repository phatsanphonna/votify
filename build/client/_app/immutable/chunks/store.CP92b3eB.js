import{s as b}from"./utils.Dapv9fV0.js";import{C as c,D as f,z as i,k as a,j as l}from"./runtime.D6zu14a2.js";let n=!1;function _(e,u,r){const s=r[u]??(r[u]={store:null,source:f(void 0),unsubscribe:i});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=i;else{var t=!0;s.unsubscribe=b(e,o=>{t?s.source.v=o:a(s.source,o)}),t=!1}return l(s.source)}function g(e,u,r){let s=r[u];return s&&s.store!==e&&(s.unsubscribe(),s.unsubscribe=i),e}function v(){const e={};return c(()=>{for(var u in e)e[u].unsubscribe()}),e}function y(e){var u=n;try{return n=!1,[e(),n]}finally{n=u}}export{_ as a,g as b,y as c,v as s};
