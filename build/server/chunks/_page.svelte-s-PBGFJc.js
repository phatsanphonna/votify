import { S as escape_html, I as attr, n as pop, p as push } from './index-DelxRFK-.js';
import { b as buttonVariants } from './index6-wPPICOf-.js';
import { V as Vote } from './vote-BzzoI0xK.js';
import './create-DOlC2Afs.js';
import './index3-BqMKRLPk.js';
import './Icon-D4DBTRDJ.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const { user, area } = data;
  $$payload.out += `<div class="flex flex-col w-full bg-gradient-to-t from-[#27374D] to-[#9DB2BF] p-4 text-white shadow"><a href="/" class="underline">ย้อนกลับ</a> <div class="flex justify-between"><div class="flex flex-col justify-between"><div><h1 class="text-2xl font-bold">สวัสดี คุณ${escape_html(user.firstname)}</h1></div></div></div></div> <div class="flex justify-between rounded-lg p-2 bg-[#DDE6ED] items-center m-4">`;
  if (user.isVoted) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex gap-2 text-primary items-center">`;
    Vote($$payload, {});
    $$payload.out += `<!----> <div><p class="text-primary">คุณได้ใช้สิทธิ์การเลือกตั้งแล้ว</p> <p class="text-primary">เมื่อ ${escape_html(user.votedAt?.toLocaleString())}</p></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex gap-2 text-primary">`;
    Vote($$payload, {});
    $$payload.out += `<!----> <p class="text-primary">คุณยังไม่ได้ใช้สิทธิ์เลือกตั้ง</p></div> <a href="/vote"${attr("class", buttonVariants())}>เลือกตั้ง</a>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-s-PBGFJc.js.map
