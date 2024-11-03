import { L as rest_props, p as push, E as fallback, O as spread_attributes, G as bind_props, n as pop, P as sanitize_props } from './index-CohHun4k.js';
import { c as cn } from './utils-GiUy8APZ.js';

function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "readonly"]);
  push();
  let className = fallback($$props["class"], void 0);
  let value = fallback($$props["value"], void 0);
  let readonly = fallback($$props["readonly"], void 0);
  $$payload.out += `<input${spread_attributes({
    class: cn("border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50", className),
    value,
    readonly,
    ...$$restProps
  })}>`;
  bind_props($$props, { class: className, value, readonly });
  pop();
}

export { Input as I };
//# sourceMappingURL=input-DcFRSmSL.js.map
