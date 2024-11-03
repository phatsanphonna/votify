import { p as prisma } from './index4-D9xrZjJk.js';
import { e as error } from './index2-DzcLzHBX.js';
import { g as getObjectSignedUrl } from './index7-DHYmSmFO.js';
import '@prisma/client';
import './shared-server-BfUoNEXY.js';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';

const load = async ({ params }) => {
  const data = await prisma.party.findUnique({
    where: {
      id: params.id
    }
  });
  if (!data) {
    return error(404, "Party not found");
  }
  const parties = await prisma.party.findMany({
    orderBy: {
      votes: "desc"
    }
  });
  const ranking = parties.findIndex((party) => party.id === data.id) + 1;
  const candidate = await prisma.partyCandidate.findMany({
    where: {
      partyMember: {
        partyId: data.id
      }
    },
    include: {
      partyMember: true
    }
  });
  data.image = await getObjectSignedUrl(data.image);
  return {
    party: data,
    candidate: candidate[0],
    ranking
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DF_NdW3q.js')).default;
const server_id = "src/routes/party/[id]/+layout.server.ts";
const imports = ["_app/immutable/nodes/4.D90erbHk.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.8MaW9EIQ.js","_app/immutable/chunks/render.DNC5ILtV.js","_app/immutable/chunks/template.DEdvQlwJ.js","_app/immutable/chunks/snippet.DSd6ii3V.js","_app/immutable/chunks/attributes.C4eqOsKD.js","_app/immutable/chunks/class.6IpZ8mhx.js","_app/immutable/chunks/store.B8IAFY5V.js","_app/immutable/chunks/utils.352NZ3fP.js","_app/immutable/chunks/utils.CH0gNPov.js","_app/immutable/chunks/create.BlF16bQl.js","_app/immutable/chunks/index.BPDzd7Iu.js","_app/immutable/chunks/index-client.D8m34BzE.js","_app/immutable/chunks/lifecycle.3nKBxlw8.js","_app/immutable/chunks/props.MJjq2fm6.js","_app/immutable/chunks/updater.Bh7ROSFv.js","_app/immutable/chunks/stores.BQDWbXHJ.js","_app/immutable/chunks/entry.B_7kLJt4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-CIASC4-m.js.map
