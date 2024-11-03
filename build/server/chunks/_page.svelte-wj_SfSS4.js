import { N as ensure_array_like, U as head, n as pop, S as escape_html, I as attr, p as push } from './index-DelxRFK-.js';

function MemberCard($$payload, $$props) {
  push();
  let { member, index } = $$props;
  $$payload.out += `<div class="border-b flex justify-between items-center p-2"><div><p class="text-sm text-primary">สมาชิกลำดับที่ ${escape_html(index)}</p> <p class="text-lg">${escape_html(member.name)}</p></div> <img${attr("src", member.profileImage)}${attr("alt", member.name)} width="50" height="50" class="rounded-full"></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const each_array = ensure_array_like(data.members);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>สมาชิคพรรค${escape_html(data.party.name)}</title>`;
  });
  $$payload.out += `<div class="flex flex-col gap-2"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let member = each_array[index];
    MemberCard($$payload, { member, index: index + 1 });
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-wj_SfSS4.js.map
