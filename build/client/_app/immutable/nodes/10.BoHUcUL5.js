import"../chunks/disclose-version.Bg9kRutz.js";import{i as o,s as p,r as i,t as v,e as g,g as u,$ as _,j as n}from"../chunks/runtime.CUd8L4PE.js";import{h as b}from"../chunks/svelte-head.DhZz02Q9.js";import{a as c,t as h}from"../chunks/template.d_0FGAGE.js";import{e as w,i as y}from"../chunks/each.dZy8B3G7.js";import{s as j}from"../chunks/props.DOJ_1Ofh.js";import{s as d}from"../chunks/render.BzBl1P_w.js";import{s as l}from"../chunks/attributes.BHTXVK9S.js";var B=h('<a class="shadow bg-gradient-to-t from-[#27374D] to-[#9DB2BF] rounded-2xl p-4 flex flex-col gap-2 text-center justify-center items-center h-64"><img width="100" height="100" class="rounded-full"> <p class="text-2xl font-bold text-white"> </p> <p class="text-white"> </p></a>');function D(m,t){var e=B(),r=o(e),a=p(r,2),s=o(a);i(a);var f=p(a,2),x=o(f);i(f),i(e),v(()=>{l(e,"href",`party/${t.href}`),l(r,"src",t.image),l(r,"alt",`${t.name} party photo`),d(s,`พรรค${t.name??""}`),d(x,`${t.votes??""} คะแนน`)}),c(m,e)}var C=h('<div class="p-8 flex flex-col gap-4"><h1 class="text-2xl">รายชื่อพรรคทั้งหมด</h1> <!></div>');function H(m,t){g(t,!0);var e=C();b(a=>{_.title="พรรคการเมืองทั้งหมด"});var r=p(o(e),2);w(r,17,()=>t.data.parties,y,(a,s)=>{D(a,j(()=>n(s),{get href(){return n(s).id}}))}),i(e),c(m,e),u()}export{H as component};
