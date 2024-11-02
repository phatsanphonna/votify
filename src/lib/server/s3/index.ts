import { AWS_ACCESS_KEY_ID, AWS_S3_BUCKET_NAME, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN } from '$env/static/private';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const s3 = new S3Client({
	region: 'us-east-1',
	credentials: {
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY,
    sessionToken: AWS_SESSION_TOKEN
	}
});

export const getObject = async (key: string) => {
	return await s3.send(
		new GetObjectCommand({
			Bucket: AWS_S3_BUCKET_NAME,
			Key: key
		})
	);
};

export const getObjectSignedUrl = async (key: string) => {
	return await getSignedUrl(
		s3,
		new GetObjectCommand({
			Bucket: AWS_S3_BUCKET_NAME,
			Key: key
		}),
		{ expiresIn: 3600 }
	);
};
