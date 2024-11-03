import { p as prisma } from './index4-D9xrZjJk.js';
import { g as getObjectSignedUrl } from './index7-DHYmSmFO.js';
import '@prisma/client';
import './shared-server-BfUoNEXY.js';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';

const load = async () => {
  const data = await prisma.party.findMany();
  for (const party of data) {
    party.image = await getObjectSignedUrl(party.image);
  }
  return {
    parties: data
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-SE-o8Wml.js')).default;
const server_id = "src/routes/party/+page.server.ts";
const imports = ["_app/immutable/nodes/10.BoHUcUL5.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.CUd8L4PE.js","_app/immutable/chunks/svelte-head.DhZz02Q9.js","_app/immutable/chunks/template.d_0FGAGE.js","_app/immutable/chunks/each.dZy8B3G7.js","_app/immutable/chunks/props.DOJ_1Ofh.js","_app/immutable/chunks/store.X--5bqZB.js","_app/immutable/chunks/utils.DRqmrcfj.js","_app/immutable/chunks/render.BzBl1P_w.js","_app/immutable/chunks/attributes.BHTXVK9S.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-V76bSYdb.js.map
