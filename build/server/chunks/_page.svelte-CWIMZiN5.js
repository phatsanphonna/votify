import { O as escape_html, n as pop, p as push } from './index-B2WRtpts.js';

function VoteStatusCard($$payload, $$props) {
  let { firstname, lastname, isVoted, votedAt } = $$props;
  $$payload.out += `<div class="bg-[#27374D] p-2 rounded-lg text-white"><p class="font-bold">สวัสดี, ${escape_html(firstname)} ${escape_html(lastname)}</p> `;
  if (isVoted) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-sm">คุณได้ใช้สิทธิ์การเลือกตั้งแล้ว <span class="text-[#0F996D] font-bold">เมื่อ ${escape_html(votedAt)}</span></p>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="text-sm">ขณะนี้ สิทธิ์การเลือกตั้งของคุณ <span class="text-[#C91313] font-bold">ยังไม่ได้ใช้งาน</span></p>`;
  }
  $$payload.out += `<!--]--> <p class="text-xs">กรุณาใช้สิทธิ์ภายในวันเวลาที่กำหนด เพื่อรักษาผลประโยชน์ของตน</p></div>`;
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<div class="p-8 flex flex-col gap-4"><h1 class="text-center text-4xl font-bold text-primary">คูหาออนไลน์</h1> `;
  VoteStatusCard($$payload, {
    firstname: data.user.firstname,
    lastname: data.user.lastname,
    isVoted: data.user.isVoted,
    votedAt: data.user.votedAt
  });
  $$payload.out += `<!----> <div><p class="text-center text-2xl font-bold">รายชื่อผู้สมัครเลือกตั้ง${escape_html(data.area.name)}</p> <p class="text-center">ท่านสามารถเลือกได้เพียง <span class="font-bold text-[#C91313]">1 ครั้ง</span> เท่านั้น</p></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CWIMZiN5.js.map
