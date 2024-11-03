import { V as copy_payload, W as assign_payload, n as pop, J as store_get, K as unsubscribe_stores, p as push } from './index-DelxRFK-.js';
import { g as goto } from './client-TAfaRk9z.js';
import './index6-wPPICOf-.js';
import { c as createMutation, L as LoadingButton } from './LoadingButton-kVvRq2L7.js';
import { I as Input } from './input-CUCHD6cG.js';
import './exports-CTha0ECg.js';
import './create-DOlC2Afs.js';
import './index3-BqMKRLPk.js';
import './Icon-DRpDL4XZ.js';
import './utils-Cwet9JSK.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let nationalId = "";
  let password = "";
  let confirmPassword = "";
  const mutate = createMutation({
    mutationKey: ["signup"],
    mutationFn: async () => {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nationalId, password, confirmPassword })
      });
      if (!response.ok) {
        throw new Error("Sign in failed");
      }
      return await response.json();
    },
    onSuccess: (data) => {
      goto();
    }
  });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="p-8 flex flex-col gap-4"><h1 class="text-center text-4xl font-bold text-primary">สร้างบัญชีผู้ใช้</h1> <form class="flex flex-col gap-2">`;
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
    Input($$payload2, {
      get value() {
        return confirmPassword;
      },
      set value($$value) {
        confirmPassword = $$value;
        $$settled = false;
      },
      placeholder: "ยืนยันรหัสผ่าน",
      type: "password",
      disabled: store_get($$store_subs ??= {}, "$mutate", mutate).isPending
    });
    $$payload2.out += `<!----> `;
    LoadingButton($$payload2, {
      type: "submit",
      isLoading: store_get($$store_subs ??= {}, "$mutate", mutate).isPending,
      children: ($$payload3) => {
        $$payload3.out += `<!---->สร้างบัญชีผู้ใช้`;
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
//# sourceMappingURL=_page.svelte-BoJx_Y61.js.map
