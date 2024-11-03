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

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fiXrPV-j.js')).default;
const server_id = "src/routes/party/+page.server.ts";
const imports = ["_app/immutable/nodes/9.CRC-LDEj.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.D6zu14a2.js","_app/immutable/chunks/template.CARJj4di.js","_app/immutable/chunks/attributes.CNzAtfu0.js","_app/immutable/chunks/render.BzbPydf4.js","_app/immutable/chunks/props.DdAzSyh3.js","_app/immutable/chunks/store.CP92b3eB.js","_app/immutable/chunks/utils.Dapv9fV0.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-FwhpxLII.js.map
