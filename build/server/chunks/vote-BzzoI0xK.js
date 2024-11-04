import { M as spread_props, F as slot, P as sanitize_props } from './index-DelxRFK-.js';
import { I as Icon } from './Icon-D4DBTRDJ.js';

function Vote($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m9 12 2 2 4-4" }],
    [
      "path",
      {
        "d": "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
      }
    ],
    ["path", { "d": "M22 19H2" }]
  ];
  Icon($$payload, spread_props([
    { name: "vote" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}

export { Vote as V };
//# sourceMappingURL=vote-BzzoI0xK.js.map
