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
const component = async () => component_cache ??= (await import('./_page.svelte-Cq5KAkEf.js')).default;
const server_id = "src/routes/party/[id]/members/+page.server.ts";
const imports = ["_app/immutable/nodes/12.D-taPaQs.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.aUzNjL39.js","_app/immutable/chunks/svelte-head.BhKDNomO.js","_app/immutable/chunks/template.DeaMfOID.js","_app/immutable/chunks/each.CDDwiIZh.js","_app/immutable/chunks/render.HNL4GQ_1.js","_app/immutable/chunks/attributes.ccYLxblo.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-J3c-FOki.js.map
