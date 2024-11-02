import { env } from '$env/dynamic/private';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const s3 = new S3Client({
	region: 'us-east-1',
	credentials: {
		accessKeyId: env.AWS_ACCESS_KEY_ID,
		secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
		sessionToken: env.AWS_SESSION_TOKEN
	}
});

export const getObject = async (key: string) => {
	return await s3.send(
		new GetObjectCommand({
			Bucket: env.AWS_S3_BUCKET_NAME,
			Key: key
		})
	);
};

export const getObjectSignedUrl = async (key: string) => {
	return await getSignedUrl(
		s3,
		new GetObjectCommand({
			Bucket: env.AWS_S3_BUCKET_NAME,
			Key: key
		}),
		{ expiresIn: 3600 }
	);
};
