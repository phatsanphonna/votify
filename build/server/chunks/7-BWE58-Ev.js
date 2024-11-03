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
const component = async () => component_cache ??= (await import('./_page.svelte-DAJRJFxr.js')).default;
const server_id = "src/routes/(auth)/vote/+page.server.ts";
const imports = ["_app/immutable/nodes/7.DDMPCyDT.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.8MaW9EIQ.js","_app/immutable/chunks/render.DNC5ILtV.js","_app/immutable/chunks/template.DEdvQlwJ.js","_app/immutable/chunks/each.Cd_iAiCk.js","_app/immutable/chunks/index-client.D8m34BzE.js","_app/immutable/chunks/attributes.C4eqOsKD.js","_app/immutable/chunks/store.B8IAFY5V.js","_app/immutable/chunks/utils.352NZ3fP.js","_app/immutable/chunks/LoadingButton.Bgv8OQjq.js","_app/immutable/chunks/index.BPDzd7Iu.js","_app/immutable/chunks/index.ysDOyIPM.js","_app/immutable/chunks/create.BlF16bQl.js","_app/immutable/chunks/lifecycle.3nKBxlw8.js","_app/immutable/chunks/props.MJjq2fm6.js","_app/immutable/chunks/snippet.DSd6ii3V.js","_app/immutable/chunks/utils.CH0gNPov.js","_app/immutable/chunks/updater.Bh7ROSFv.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-BWE58-Ev.js.map
