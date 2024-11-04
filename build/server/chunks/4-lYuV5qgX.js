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
const component = async () => component_cache ??= (await import('./_layout.svelte-COjv62g7.js')).default;
const server_id = "src/routes/party/[id]/+layout.server.ts";
const imports = ["_app/immutable/nodes/4.uxGbAC_0.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.aUzNjL39.js","_app/immutable/chunks/render.HNL4GQ_1.js","_app/immutable/chunks/svelte-head.BhKDNomO.js","_app/immutable/chunks/template.DeaMfOID.js","_app/immutable/chunks/snippet.CwITyDou.js","_app/immutable/chunks/attributes.ccYLxblo.js","_app/immutable/chunks/class.BpURcwoG.js","_app/immutable/chunks/store.phIPBGZI.js","_app/immutable/chunks/utils.ylBIWhXo.js","_app/immutable/chunks/utils.rToxleUx.js","_app/immutable/chunks/create.Bvef7Gho.js","_app/immutable/chunks/index.BkiM7uAi.js","_app/immutable/chunks/index-client.DObiQXvy.js","_app/immutable/chunks/lifecycle.CnXF_tO4.js","_app/immutable/chunks/props.XMVdRfqy.js","_app/immutable/chunks/if.DtqLP0Zw.js","_app/immutable/chunks/slot.CNa0AiKR.js","_app/immutable/chunks/this.DgjYA9T8.js","_app/immutable/chunks/updater.L4zTpWAg.js","_app/immutable/chunks/stores.BKzT11XR.js","_app/immutable/chunks/entry.DiJVCEx0.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-lYuV5qgX.js.map
