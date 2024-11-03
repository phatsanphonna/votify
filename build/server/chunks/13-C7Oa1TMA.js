import { p as prisma } from './index4-D9xrZjJk.js';
import { e as error } from './index2-DzcLzHBX.js';
import '@prisma/client';

const load = async ({ params }) => {
  const data = await prisma.party.findUnique({
    where: {
      id: params.id
    }
  });
  if (!data) {
    return error(404, "Party not found");
  }
  return {
    party: data
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Gi7AFLt5.js')).default;
const server_id = "src/routes/party/[id]/policy/+page.server.ts";
const imports = ["_app/immutable/nodes/13.LH8r91DX.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.8MaW9EIQ.js","_app/immutable/chunks/render.DNC5ILtV.js","_app/immutable/chunks/template.DEdvQlwJ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-C7Oa1TMA.js.map
