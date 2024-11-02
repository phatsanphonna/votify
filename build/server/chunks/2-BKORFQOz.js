import { r as redirect } from './index2-DzcLzHBX.js';

const load = async ({ locals }) => {
  const user = locals.user;
  if (!user) {
    return redirect(302, "/signin");
  }
  return {
    user
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-CDA3VRN2.js')).default;
const server_id = "src/routes/(auth)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.Uajzgk1y.js","_app/immutable/chunks/3.ByidmuOj.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.BebzK8jN.js","_app/immutable/chunks/template.B-ZAag9S.js","_app/immutable/chunks/snippet.D94RU37J.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-BKORFQOz.js.map
