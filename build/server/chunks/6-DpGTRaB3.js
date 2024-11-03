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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-wBQOOBA5.js')).default;
const server_id = "src/routes/(auth)/vote/+page.server.ts";
const imports = ["_app/immutable/nodes/6.D0QCLEWn.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.D6zu14a2.js","_app/immutable/chunks/render.BzbPydf4.js","_app/immutable/chunks/template.CARJj4di.js","_app/immutable/chunks/attributes.CNzAtfu0.js","_app/immutable/chunks/index-client.BQMO2lfi.js","_app/immutable/chunks/store.CP92b3eB.js","_app/immutable/chunks/utils.Dapv9fV0.js","_app/immutable/chunks/LoadingButton.5qfDZWEc.js","_app/immutable/chunks/index.BKt0AyIO.js","_app/immutable/chunks/index.o0pz0p5v.js","_app/immutable/chunks/lifecycle.C1eGgMtS.js","_app/immutable/chunks/props.DdAzSyh3.js","_app/immutable/chunks/snippet.BfZcgiui.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-DpGTRaB3.js.map
