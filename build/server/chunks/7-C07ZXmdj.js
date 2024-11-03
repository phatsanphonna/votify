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
const component = async () => component_cache ??= (await import('./_page.svelte-DioD6BqB.js')).default;
const server_id = "src/routes/(auth)/vote/+page.server.ts";
const imports = ["_app/immutable/nodes/7.BAg5WNSX.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.CUd8L4PE.js","_app/immutable/chunks/render.BzBl1P_w.js","_app/immutable/chunks/svelte-head.DhZz02Q9.js","_app/immutable/chunks/template.d_0FGAGE.js","_app/immutable/chunks/each.dZy8B3G7.js","_app/immutable/chunks/this.D-e3P9U2.js","_app/immutable/chunks/attributes.BHTXVK9S.js","_app/immutable/chunks/store.X--5bqZB.js","_app/immutable/chunks/utils.DRqmrcfj.js","_app/immutable/chunks/LoadingButton.B13gZwl5.js","_app/immutable/chunks/index.CGhM8uf7.js","_app/immutable/chunks/Icon.DDJ4JNKP.js","_app/immutable/chunks/slot.M8yLwYd-.js","_app/immutable/chunks/lifecycle.DFTc0-wV.js","_app/immutable/chunks/props.DOJ_1Ofh.js","_app/immutable/chunks/snippet.BnXeYVyZ.js","_app/immutable/chunks/utils.DQXDmRk-.js","_app/immutable/chunks/create.D9ODmlkY.js","_app/immutable/chunks/index-client.Bf_0YrRR.js","_app/immutable/chunks/index.D1p0k09n.js","_app/immutable/chunks/updater.BWxkItDZ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-C07ZXmdj.js.map
