import { p as prisma } from './index4-D9xrZjJk.js';
import { g as getObjectSignedUrl } from './index7-DHYmSmFO.js';
import '@prisma/client';
import './shared-server-BfUoNEXY.js';
import '@aws-sdk/client-s3';
import '@aws-sdk/s3-request-presigner';

const load = async ({ locals }) => {
  const user = locals.user;
  const data = await prisma.user.findUnique({
    where: {
      id: user?.id
    },
    include: {
      area: {
        include: {
          candidates: {
            orderBy: {
              number: "asc"
            },
            include: {
              partyMember: {
                include: {
                  party: true
                }
              }
            }
          }
        }
      }
    }
  });
  const candidates = await Promise.all(data.area.candidates.map(async (candidate) => ({
    ...candidate,
    partyMember: {
      ...candidate.partyMember,
      profileImage: await getObjectSignedUrl(candidate.partyMember.profileImage)
    }
  })));
  return {
    user: data,
    area: data.area,
    candidates
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CC8dXv4V.js')).default;
const server_id = "src/routes/(auth)/vote/+page.server.ts";
const imports = ["_app/immutable/nodes/7.DzOMgg-k.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.aUzNjL39.js","_app/immutable/chunks/render.HNL4GQ_1.js","_app/immutable/chunks/svelte-head.BhKDNomO.js","_app/immutable/chunks/template.DeaMfOID.js","_app/immutable/chunks/each.CDDwiIZh.js","_app/immutable/chunks/if.DtqLP0Zw.js","_app/immutable/chunks/attributes.ccYLxblo.js","_app/immutable/chunks/store.phIPBGZI.js","_app/immutable/chunks/utils.ylBIWhXo.js","_app/immutable/chunks/LoadingButton.B5mYmLkx.js","_app/immutable/chunks/index.BkiM7uAi.js","_app/immutable/chunks/context.DnMfB6UO.js","_app/immutable/chunks/snippet.CwITyDou.js","_app/immutable/chunks/props.XMVdRfqy.js","_app/immutable/chunks/utils.rToxleUx.js","_app/immutable/chunks/create.Bvef7Gho.js","_app/immutable/chunks/index-client.DObiQXvy.js","_app/immutable/chunks/index.1APeLoBs.js","_app/immutable/chunks/slot.CNa0AiKR.js","_app/immutable/chunks/lifecycle.CnXF_tO4.js","_app/immutable/chunks/Icon.2RWYNG04.js","_app/immutable/chunks/this.DgjYA9T8.js","_app/immutable/chunks/updater.L4zTpWAg.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-HZ2lOSgr.js.map
