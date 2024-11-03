import { U as head, S as escape_html, n as pop, p as push } from './index-DelxRFK-.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>ประวัติพรรค${escape_html(data.party.name)}</title>`;
  });
  $$payload.out += `<p>${escape_html(data.party.background)}</p>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-TeWUEhEd.js.map
