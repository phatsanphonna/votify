import { O as escape_html, J as store_get, K as unsubscribe_stores, n as pop, p as push } from './index-B2WRtpts.js';
import { p as page } from './stores-DkWwSDAW.js';
import './client-TAfaRk9z.js';
import './exports-CTha0ECg.js';

function Error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-s489xPK2.js.map
