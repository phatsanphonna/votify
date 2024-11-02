import { n as pop, p as push } from './index-B2WRtpts.js';

function Layout($$payload, $$props) {
  push();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}

export { Layout as default };
//# sourceMappingURL=layout.svelte-CDA3VRN2.js.map
