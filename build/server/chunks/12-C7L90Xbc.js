import { p as prisma } from './index4-D9xrZjJk.js';
import { e as error } from './index2-DzcLzHBX.js';
import { g as getObjectSignedUrl } from './index7-DHYmSmFO.js';
import '@prisma/client';
import './shared-server-BfUoNEXY.js';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';

const load = async ({ params, parent }) => {
  const { party } = await parent();
  const data = await prisma.partyMember.findMany({
    where: {
      partyId: params.id
    }
  });
  if (!data) {
    return error(404, "Party not found");
  }
  const parseData = await Promise.all(data.map(async (member) => {
    member.profileImage = await getObjectSignedUrl(member.profileImage);
    return member;
  }));
  return {
    members: parseData,
    party
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-wj_SfSS4.js')).default;
const server_id = "src/routes/party/[id]/members/+page.server.ts";
const imports = ["_app/immutable/nodes/12.ymBm_fn_.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.CUd8L4PE.js","_app/immutable/chunks/svelte-head.DhZz02Q9.js","_app/immutable/chunks/template.d_0FGAGE.js","_app/immutable/chunks/each.dZy8B3G7.js","_app/immutable/chunks/render.BzBl1P_w.js","_app/immutable/chunks/attributes.BHTXVK9S.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-C7L90Xbc.js.map