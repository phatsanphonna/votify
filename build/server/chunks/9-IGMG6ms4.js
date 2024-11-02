import { p as prisma } from './index4-D9xrZjJk.js';
import { d as private_env } from './shared-server-BfUoNEXY.js';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import '@prisma/client';

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: private_env.AWS_ACCESS_KEY_ID,
    secretAccessKey: private_env.AWS_SECRET_ACCESS_KEY,
    sessionToken: private_env.AWS_SESSION_TOKEN
  }
});
const getObjectSignedUrl = async (key) => {
  return await getSignedUrl(
    s3,
    new GetObjectCommand({
      Bucket: private_env.AWS_S3_BUCKET_NAME,
      Key: key
    }),
    { expiresIn: 3600 }
  );
};
const load = async () => {
  const data = await prisma.party.findMany();
  for (const party of data) {
    party.image = await getObjectSignedUrl(party.image);
  }
  return {
    parties: data
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DHXgabUZ.js')).default;
const server_id = "src/routes/party/+page.server.ts";
const imports = ["_app/immutable/nodes/9.NrJEtPCq.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/runtime.BebzK8jN.js","_app/immutable/chunks/template.B-ZAag9S.js","_app/immutable/chunks/attributes.V9_NCSXj.js","_app/immutable/chunks/utils.nWTeyq6A.js","_app/immutable/chunks/props.BVkS62al.js","_app/immutable/chunks/store.NiGiiPUC.js","_app/immutable/chunks/utils.BBtvxxXF.js","_app/immutable/chunks/render.3iZNqjfO.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-IGMG6ms4.js.map
