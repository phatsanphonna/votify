import { p as prisma } from './index4-D9xrZjJk.js';
import '@prisma/client';

const load = async ({ locals }) => {
  const user = locals.user;
  const userData = await prisma.user.findUnique({
    where: {
      id: user?.id
    },
    include: {
      area: true
    }
  });
  return {
    user: userData,
    area: userData.area
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-s-PBGFJc.js')).default;
const server_id = "src/routes/(auth)/me/+page.server.ts";
const imports = ["_app/immutable/nodes/6.DOHSC4pb.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.aUzNjL39.js","_app/immutable/chunks/render.HNL4GQ_1.js","_app/immutable/chunks/svelte-head.BhKDNomO.js","_app/immutable/chunks/template.DeaMfOID.js","_app/immutable/chunks/if.DtqLP0Zw.js","_app/immutable/chunks/class.BpURcwoG.js","_app/immutable/chunks/index.1APeLoBs.js","_app/immutable/chunks/create.Bvef7Gho.js","_app/immutable/chunks/index.BkiM7uAi.js","_app/immutable/chunks/utils.ylBIWhXo.js","_app/immutable/chunks/index-client.DObiQXvy.js","_app/immutable/chunks/vote.C7tq4ktf.js","_app/immutable/chunks/slot.CNa0AiKR.js","_app/immutable/chunks/props.XMVdRfqy.js","_app/immutable/chunks/store.phIPBGZI.js","_app/immutable/chunks/Icon.2RWYNG04.js","_app/immutable/chunks/each.CDDwiIZh.js","_app/immutable/chunks/attributes.ccYLxblo.js","_app/immutable/chunks/lifecycle.CnXF_tO4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-DtWgdQqN.js.map
