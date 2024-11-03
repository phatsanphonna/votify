import { S as escape_html, n as pop, p as push } from './index-CohHun4k.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<p>${escape_html(data.party.policy)}</p>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Gi7AFLt5.js.map
