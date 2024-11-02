import { e as escape_html } from './escaping-BQR1pbqy.js';

function _page($$payload, $$props) {
  let { data } = $$props;
  $$payload.out += `<!---->${escape_html(JSON.stringify(data))}`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DQ51Girh.js.map
