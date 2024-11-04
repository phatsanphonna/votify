import { S as escape_html, I as attr, J as store_get, K as unsubscribe_stores, n as pop, L as rest_props, E as fallback, M as spread_props, G as bind_props, p as push, F as slot, O as spread_attributes, P as sanitize_props } from './index-DelxRFK-.js';
import { c as cn } from './utils-LN02QbR0.js';
import { m as makeElement } from './bundle-mjs-BtH-axbQ.js';
import { c as createBitAttrs, r as removeUndefined, g as getOptionUpdater, t as toWritableStores } from './updater-BtqTlIyF.js';
import { p as page } from './stores-CP9uf3zP.js';
import './index3-BqMKRLPk.js';
import './client-TAfaRk9z.js';
import './exports-CTha0ECg.js';

const defaults = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = makeElement("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined(props)), getAttrs };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
function Separator$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "orientation",
    "decorative",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let orientation = fallback($$props["orientation"], "horizontal");
  let decorative = fallback($$props["decorative"], true);
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const { elements: { root }, updateOption, getAttrs } = setCtx({ orientation, decorative });
  const attrs = getAttrs("root");
  updateOption("orientation", orientation);
  updateOption("decorative", decorative);
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { builder }, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { orientation, decorative, asChild, el });
  pop();
}
function Separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "orientation", "decorative"]);
  push();
  let className = fallback($$props["class"], void 0);
  let orientation = fallback($$props["orientation"], "horizontal");
  let decorative = fallback($$props["decorative"], void 0);
  Separator$1($$payload, spread_props([
    {
      class: cn("bg-border shrink-0", orientation === "horizontal" ? "h-[1px] w-full" : "min-h-full w-[1px]", className),
      orientation,
      decorative
    },
    $$restProps
  ]));
  bind_props($$props, { class: className, orientation, decorative });
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { data, children } = $$props;
  const { party, candidate, ranking } = data;
  $$payload.out += `<div class="flex flex-col w-full bg-gradient-to-t from-[#27374D] to-[#9DB2BF] p-4 text-white shadow"><a href="/party" class="underline">ย้อนกลับ</a> <div class="flex justify-between"><div class="flex flex-col justify-between"><div><h1 class="text-2xl font-bold">พรรค${escape_html(party.name)}</h1> <p class="text-lg">${escape_html(candidate.partyMember?.name)}</p> <span>${escape_html(party.votes)} คะแนน</span></div> <p class="text-4xl font-bold">อันดับที่ ${escape_html(ranking)}</p></div> <img${attr("src", party.image)}${attr("alt", party.name)} width="150" height="150" class="rounded-full"></div></div> <div class="p-8 flex flex-col gap-4"><ul class="flex gap-2"><li${attr("class", cn({
    underline: !store_get($$store_subs ??= {}, "$page", page).url.pathname.endsWith("policy") && !store_get($$store_subs ??= {}, "$page", page).url.pathname.endsWith("members")
  }))}><a${attr("href", `/party/${store_get($$store_subs ??= {}, "$page", page).params.id}`)}>ประวัติ</a></li> `;
  Separator($$payload, { orientation: "vertical" });
  $$payload.out += `<!----> <li${attr("class", cn({
    underline: store_get($$store_subs ??= {}, "$page", page).url.pathname.endsWith("policy")
  }))}><a${attr("href", `/party/${store_get($$store_subs ??= {}, "$page", page).params.id}/policy`)}>นโยบาย</a></li> `;
  Separator($$payload, { orientation: "vertical" });
  $$payload.out += `<!----> <li${attr("class", cn({
    underline: store_get($$store_subs ??= {}, "$page", page).url.pathname.endsWith("members")
  }))}><a${attr("href", `/party/${store_get($$store_subs ??= {}, "$page", page).params.id}/members`)}>สมาชิก</a></li></ul> `;
  children($$payload);
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DB0aOsl6.js.map
