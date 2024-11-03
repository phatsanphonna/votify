import { p as prisma } from './index4-D9xrZjJk.js';
import { e as error } from './index2-DzcLzHBX.js';
import { g as getObjectSignedUrl } from './index7-DHYmSmFO.js';
import '@prisma/client';
import './shared-server-BfUoNEXY.js';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';

const load = async ({ params }) => {
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
    members: parseData
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cxj-nQ1g.js')).default;
const server_id = "src/routes/party/[id]/members/+page.server.ts";
const imports = ["_app/immutable/nodes/12.B3hr0EZh.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.8MaW9EIQ.js","_app/immutable/chunks/template.DEdvQlwJ.js","_app/immutable/chunks/each.Cd_iAiCk.js","_app/immutable/chunks/render.DNC5ILtV.js","_app/immutable/chunks/attributes.C4eqOsKD.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-BYNBsYB8.js.map
