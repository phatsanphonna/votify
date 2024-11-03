import { N as ensure_array_like, U as head, M as spread_props, n as pop, I as attr, S as escape_html, p as push } from './index-DelxRFK-.js';

function PartyCard($$payload, $$props) {
  let { image, name, votes, href } = $$props;
  $$payload.out += `<a${attr("href", `party/${href}`)} class="shadow bg-gradient-to-t from-[#27374D] to-[#9DB2BF] rounded-2xl p-4 flex flex-col gap-2 text-center justify-center items-center h-64"><img${attr("src", image)} width="100" height="100"${attr("alt", `${name} party photo`)} class="rounded-full"> <p class="text-2xl font-bold text-white">พรรค${escape_html(name)}</p> <p class="text-white">${escape_html(votes)} คะแนน</p></a>`;
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.parties);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>พรรคการเมืองทั้งหมด</title>`;
  });
  $$payload.out += `<div class="p-8 flex flex-col gap-4"><h1 class="text-2xl">รายชื่อพรรคทั้งหมด</h1> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let party = each_array[$$index];
    PartyCard($$payload, spread_props([party, { href: party.id }]));
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-SE-o8Wml.js.map
