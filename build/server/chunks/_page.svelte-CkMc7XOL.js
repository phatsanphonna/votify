import { U as head, S as escape_html, n as pop, p as push } from './index-DelxRFK-.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>นโยบายพรรค${escape_html(data.party.name)}</title>`;
  });
  $$payload.out += `<p>${escape_html(data.party.policy)}</p>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CkMc7XOL.js.map
