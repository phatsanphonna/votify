import { d as private_env } from './shared-server-BfUoNEXY.js';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

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

export { getObjectSignedUrl as g };
//# sourceMappingURL=index7-DHYmSmFO.js.map
