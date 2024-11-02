import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const load = async () => {
  const data = await prisma.party.findMany();
  return {
    parties: data
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DQ51Girh.js')).default;
const server_id = "src/routes/party/+page.server.ts";
const imports = ["_app/immutable/nodes/3.CLCwtDRy.js","_app/immutable/chunks/disclose-version.hrPzCK-_.js","_app/immutable/chunks/runtime.BBr2q3Ln.js","_app/immutable/chunks/render.BqZ_mqHI.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-DmLvkqFS.js.map
