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
const component = async () => component_cache ??= (await import('./_layout.svelte-fhSVIS6f.js')).default;
const server_id = "src/routes/party/[id]/+layout.server.ts";
const imports = ["_app/immutable/nodes/4.Dyk0nKFh.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.CUd8L4PE.js","_app/immutable/chunks/render.BzBl1P_w.js","_app/immutable/chunks/svelte-head.DhZz02Q9.js","_app/immutable/chunks/template.d_0FGAGE.js","_app/immutable/chunks/snippet.BnXeYVyZ.js","_app/immutable/chunks/attributes.BHTXVK9S.js","_app/immutable/chunks/class.ymJJw_sP.js","_app/immutable/chunks/store.X--5bqZB.js","_app/immutable/chunks/utils.DRqmrcfj.js","_app/immutable/chunks/utils.DQXDmRk-.js","_app/immutable/chunks/create.D9ODmlkY.js","_app/immutable/chunks/index.CGhM8uf7.js","_app/immutable/chunks/index-client.Bf_0YrRR.js","_app/immutable/chunks/lifecycle.DFTc0-wV.js","_app/immutable/chunks/props.DOJ_1Ofh.js","_app/immutable/chunks/this.D-e3P9U2.js","_app/immutable/chunks/slot.M8yLwYd-.js","_app/immutable/chunks/updater.BWxkItDZ.js","_app/immutable/chunks/stores.2hPB0PKY.js","_app/immutable/chunks/entry.c75LEA1_.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-DBh2tv5W.js.map
