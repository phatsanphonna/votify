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

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CkMc7XOL.js')).default;
const server_id = "src/routes/party/[id]/policy/+page.server.ts";
const imports = ["_app/immutable/nodes/13.fa58ISAp.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.CUd8L4PE.js","_app/immutable/chunks/render.BzBl1P_w.js","_app/immutable/chunks/svelte-head.DhZz02Q9.js","_app/immutable/chunks/template.d_0FGAGE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-dJkh1MHK.js.map
