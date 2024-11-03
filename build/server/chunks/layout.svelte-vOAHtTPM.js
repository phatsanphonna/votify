import { n as pop, p as push } from './index-DelxRFK-.js';

function Layout($$payload, $$props) {
  push();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}

export { Layout as default };
//# sourceMappingURL=layout.svelte-vOAHtTPM.js.map
