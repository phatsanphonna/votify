import { n as pop, p as push } from './index-CohHun4k.js';

function Layout($$payload, $$props) {
  push();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}

export { Layout as default };
//# sourceMappingURL=layout.svelte-CL2T-JNB.js.map
