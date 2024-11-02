import { r as readable, g as get, d as derived } from './index3-BWICsx-M.js';
import { S as Subscribable, x as shallowEqualObjects, h as hashKey, y as getDefaultState, n as notifyManager, z as getQueryClientContext, g as buttonVariants, I as Icon, A as twMerge } from './index6-CWJ92vGx.js';
import { p as push, M as spread_props, n as pop, S as rest_props, E as fallback, T as spread_attributes, G as bind_props, F as slot, N as sanitize_props, U as element } from './index-B2WRtpts.js';

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var MutationObserver = class extends Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (this.#currentMutation?.state.status === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? getDefaultState();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    notifyManager.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const context = this.#currentResult.context;
        if (action?.type === "success") {
          this.#mutateOptions.onSuccess?.(action.data, variables, context);
          this.#mutateOptions.onSettled?.(action.data, null, variables, context);
        } else if (action?.type === "error") {
          this.#mutateOptions.onError?.(action.error, variables, context);
          this.#mutateOptions.onSettled?.(
            void 0,
            action.error,
            variables,
            context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};
function useQueryClient(queryClient) {
  return getQueryClientContext();
}
function isSvelteStore(obj) {
  return "subscribe" in obj && typeof obj.subscribe === "function";
}
function noop() {
}
function createMutation(options, queryClient) {
  const client = useQueryClient();
  const optionsStore = isSvelteStore(options) ? options : readable(options);
  const observer = new MutationObserver(client, get(optionsStore));
  let mutate;
  optionsStore.subscribe(($options) => {
    mutate = (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    };
    observer.setOptions($options);
  });
  const result = readable(observer.getCurrentResult(), (set) => {
    return observer.subscribe(notifyManager.batchCalls((val) => set(val)));
  });
  const { subscribe } = derived(result, ($result) => ({
    ...$result,
    mutate,
    mutateAsync: $result.mutate
  }));
  return { subscribe };
}
function Loader($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 2v4" }],
    ["path", { "d": "m16.2 7.8 2.9-2.9" }],
    ["path", { "d": "M18 12h4" }],
    ["path", { "d": "m16.2 16.2 2.9 2.9" }],
    ["path", { "d": "M12 18v4" }],
    ["path", { "d": "m4.9 19.1 2.9-2.9" }],
    ["path", { "d": "M2 12h4" }],
    ["path", { "d": "m4.9 4.9 2.9 2.9" }]
  ];
  Icon($$payload, spread_props([
    { name: "loader" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key) => {
      if (key !== "action") {
        attrs[key] = builder[key];
      }
    });
  });
  return attrs;
}
function Button$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "type", "builders", "el"]);
  push();
  let href = fallback($$props["href"], () => void 0, true);
  let type = fallback($$props["type"], () => void 0, true);
  let builders = fallback($$props["builders"], () => [], true);
  let el = fallback($$props["el"], () => void 0, true);
  const attrs = { "data-button-root": "" };
  if (builders && builders.length) {
    $$payload.out += "<!--[-->";
    const $$tag = href ? "a" : "button";
    element(
      $$payload,
      $$tag,
      () => {
        $$payload.out += `${spread_attributes({
          type: href ? void 0 : type,
          href,
          tabindex: "0",
          ...getAttrs(builders),
          ...$$restProps,
          ...attrs
        })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {});
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    const $$tag_1 = href ? "a" : "button";
    element(
      $$payload,
      $$tag_1,
      () => {
        $$payload.out += `${spread_attributes({
          type: href ? void 0 : type,
          href,
          tabindex: "0",
          ...$$restProps,
          ...attrs
        })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {});
        $$payload.out += `<!---->`;
      }
    );
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { href, type, builders, el });
  pop();
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "variant", "size", "builders"]);
  push();
  let className = fallback($$props["class"], void 0);
  let variant = fallback($$props["variant"], "default");
  let size = fallback($$props["size"], "default");
  let builders = fallback($$props["builders"], () => [], true);
  Button$1($$payload, spread_props([
    {
      builders,
      class: cn(buttonVariants({ variant, size, className })),
      type: "button"
    },
    $$restProps,
    {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { class: className, variant, size, builders });
  pop();
}
function LoadingButton($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    disabled,
    isLoading,
    $$slots,
    $$events,
    ...others
  } = $$props;
  Button($$payload, spread_props([
    {
      class: cn(buttonVariants({ className })),
      disabled: disabled || isLoading
    },
    others,
    {
      children: ($$payload2) => {
        $$payload2.out += `<div class="flex items-center justify-center text-accent">`;
        if (isLoading) {
          $$payload2.out += "<!--[-->";
          Loader($$payload2, {});
        } else {
          $$payload2.out += "<!--[!-->";
          children($$payload2);
          $$payload2.out += `<!---->`;
        }
        $$payload2.out += `<!--]--></div>`;
      },
      $$slots: { default: true }
    }
  ]));
  pop();
}
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

export { Input as I, LoadingButton as L, createMutation as c };
//# sourceMappingURL=input-D0_pxQAq.js.map
