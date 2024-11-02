import { p as prisma } from './index4-D9xrZjJk.js';
import '@prisma/client';

const load = async ({ locals }) => {
  const user = locals.user;
  const data = await prisma.user.findUnique({
    where: {
      id: user?.id
    },
    include: {
      area: {
        include: {
          candidates: true
        }
      }
    }
  });
  console.log(data);
  return {
    user: data,
    area: data.area,
    candidates: data.area.candidates
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CWIMZiN5.js')).default;
const server_id = "src/routes/(auth)/vote/+page.server.ts";
const imports = ["_app/immutable/nodes/6.CXYyL5hI.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.BebzK8jN.js","_app/immutable/chunks/render.3iZNqjfO.js","_app/immutable/chunks/utils.nWTeyq6A.js","_app/immutable/chunks/template.B-ZAag9S.js","_app/immutable/chunks/if.DD3DEDZz.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-C0ZzjXUU.js.map
