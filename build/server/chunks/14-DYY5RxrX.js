import { p as prisma } from './index4-D9xrZjJk.js';
import '@prisma/client';

const load = async () => {
  const data = await prisma.party.findMany({
    orderBy: {
      votes: "desc"
    }
  });
  return {
    parties: data
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DIRrRLbZ.js')).default;
const server_id = "src/routes/statistics/+page.server.ts";
const imports = ["_app/immutable/nodes/14.DK09TcGN.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.CUd8L4PE.js","_app/immutable/chunks/svelte-head.DhZz02Q9.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-DYY5RxrX.js.map
