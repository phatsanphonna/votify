import { r as redirect } from './index2-DzcLzHBX.js';

const load = async ({ locals }) => {
  const user = locals.user;
  if (user) {
    return redirect(302, "/");
  }
  return {};
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-CL2T-JNB.js')).default;
const server_id = "src/routes/(unauth)/+layout.server.ts";
const imports = ["_app/immutable/nodes/3.Y-iirAiS.js","_app/immutable/chunks/3.BHa-rLA9.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.8MaW9EIQ.js","_app/immutable/chunks/template.DEdvQlwJ.js","_app/immutable/chunks/snippet.DSd6ii3V.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-CMYEZo7Z.js.map
