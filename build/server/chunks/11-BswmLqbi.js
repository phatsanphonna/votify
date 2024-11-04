const load = async ({ parent }) => {
  const { party } = await parent();
  return {
    party
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-TeWUEhEd.js')).default;
const server_id = "src/routes/party/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/11.TCzxKwiq.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.aUzNjL39.js","_app/immutable/chunks/render.HNL4GQ_1.js","_app/immutable/chunks/svelte-head.BhKDNomO.js","_app/immutable/chunks/template.DeaMfOID.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-BswmLqbi.js.map
