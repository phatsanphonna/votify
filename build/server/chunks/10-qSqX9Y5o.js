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
const component = async () => component_cache ??= (await import('./_page.svelte-JeCMcGjZ.js')).default;
const server_id = "src/routes/party/+page.server.ts";
const imports = ["_app/immutable/nodes/10.AqJD5ixK.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.8MaW9EIQ.js","_app/immutable/chunks/template.DEdvQlwJ.js","_app/immutable/chunks/each.Cd_iAiCk.js","_app/immutable/chunks/props.MJjq2fm6.js","_app/immutable/chunks/store.B8IAFY5V.js","_app/immutable/chunks/utils.352NZ3fP.js","_app/immutable/chunks/render.DNC5ILtV.js","_app/immutable/chunks/attributes.C4eqOsKD.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-qSqX9Y5o.js.map
