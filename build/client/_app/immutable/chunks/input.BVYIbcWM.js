import"./disclose-version.Bg9kRutz.js";import{ay as h,u as b,h as y,e as g,t as x,g as k}from"./runtime.aUzNjL39.js";import{e as l}from"./render.HNL4GQ_1.js";import{a as w,t as I}from"./template.DeaMfOID.js";import{a as z,r as E,b as L}from"./attributes.ccYLxblo.js";import{i as N}from"./lifecycle.CnXF_tO4.js";import{b as i}from"./button.C88FkVZf.js";import{l as f,a as r}from"./props.XMVdRfqy.js";import{c as P}from"./utils.rToxleUx.js";function V(n,t,u,o=u){n.addEventListener(t,u);const s=n.__on_r;s?n.__on_r=()=>{s(),o()}:n.__on_r=o,z()}function j(n,t,u=t){var o=h();V(n,"input",()=>{var s=d(n)?m(n.value):n.value;u(s),o&&s!==(s=t())&&(n.value=s??"")}),b(()=>{var s=t();if(y&&n.defaultValue!==n.value){u(n.value);return}d(n)&&s===m(n.value)||n.type==="date"&&!s&&!n.value||s!==n.value&&(n.value=s??"")})}function d(n){var t=n.type;return t==="number"||t==="range"}function m(n){return n===""?null:+n}var q=I("<input>");function M(n,t){const u=f(t,["children","$$slots","$$events","$$legacy"]),o=f(u,["class","value","readonly"]);g(t,!1);let s=r(t,"class",8,void 0),v=r(t,"value",12,void 0),_=r(t,"readonly",8,void 0);N();var a=q();E(a);let c;x(()=>c=L(a,c,{class:P("border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",s()),readonly:_(),...o})),j(a,v),l("blur",a,function(e){i.call(this,t,e)}),l("change",a,function(e){i.call(this,t,e)}),l("click",a,function(e){i.call(this,t,e)}),l("focus",a,function(e){i.call(this,t,e)}),l("focusin",a,function(e){i.call(this,t,e)}),l("focusout",a,function(e){i.call(this,t,e)}),l("keydown",a,function(e){i.call(this,t,e)}),l("keypress",a,function(e){i.call(this,t,e)}),l("keyup",a,function(e){i.call(this,t,e)}),l("mouseover",a,function(e){i.call(this,t,e)}),l("mouseenter",a,function(e){i.call(this,t,e)}),l("mouseleave",a,function(e){i.call(this,t,e)}),l("mousemove",a,function(e){i.call(this,t,e)}),l("paste",a,function(e){i.call(this,t,e)}),l("input",a,function(e){i.call(this,t,e)}),l("wheel",a,function(e){i.call(this,t,e)},void 0,!0),w(n,a),k()}export{M as I};
