import { V as copy_payload, W as assign_payload, n as pop, J as store_get, K as unsubscribe_stores, p as push } from './index-DelxRFK-.js';
import { g as goto } from './client-TAfaRk9z.js';
import './index6-wPPICOf-.js';
import { c as createMutation, L as LoadingButton } from './LoadingButton-CZ6Hz7NU.js';
import './create-DOlC2Afs.js';
import { I as Input } from './input-CUCHD6cG.js';
import './exports-CTha0ECg.js';
import './index3-BqMKRLPk.js';
import './context-BPbySZWZ.js';
import './utils-Cwet9JSK.js';
import './Icon-D4DBTRDJ.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let nationalId = "";
  let password = "";
  const mutate = createMutation({
    mutationKey: ["signin"],
    mutationFn: async () => {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nationalId, password })
      });
      if (!response.ok) {
        throw new Error(JSON.parse((await response.json()).message));
      }
      return await response.json();
    },
    onSuccess: (data) => {
      goto();
    },
    onError: (error) => {
      console.error(JSON.stringify(error));
    }
  });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="p-8 flex flex-col gap-4"><h1 class="text-center text-4xl font-bold text-primary">เข้าสู่ระบบ</h1> <form class="flex flex-col gap-2">`;
    Input($$payload2, {
      get value() {
        return nationalId;
      },
      set value($$value) {
        nationalId = $$value;
        $$settled = false;
      },
      placeholder: "เลขบัตรประชาชน",
      inputmode: "numeric",
      disabled: store_get($$store_subs ??= {}, "$mutate", mutate).isPending
    });
    $$payload2.out += `<!----> `;
    Input($$payload2, {
      get value() {
        return password;
      },
      set value($$value) {
        password = $$value;
        $$settled = false;
      },
      placeholder: "รหัสผ่าน",
      type: "password",
      disabled: store_get($$store_subs ??= {}, "$mutate", mutate).isPending
    });
    $$payload2.out += `<!----> `;
    LoadingButton($$payload2, {
      type: "submit",
      isLoading: store_get($$store_subs ??= {}, "$mutate", mutate).isPending,
      children: ($$payload3) => {
        $$payload3.out += `<!---->เข้าสู่ระบบ`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></form></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D3Dnywhb.js.map
