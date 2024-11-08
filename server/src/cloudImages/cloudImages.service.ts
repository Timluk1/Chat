import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CloudImagesService {
    private client: S3Client;
    private bucketName: string;

    constructor(
    ) {
        const s3_region = process.env.REGION_S3
        this.bucketName = process.env.BUCKET_NAME_S3

        if (!s3_region) {
            throw new Error('S3_REGION not found in environment variables');
        }

        this.client = new S3Client({
            region: s3_region,
            endpoint: process.env.URL_S3,
            credentials: {
                accessKeyId: process.env.ACCESS_S3_KEY,
                secretAccessKey: process.env.SECRET_S3_KEY,
            },
            forcePathStyle: true,
        });
    }

    async uploadFile(file: Express.Multer.File) {
        const key = `${uuidv4()}`;
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype,

            Metadata: {
                originalName: file.originalname,
            },
        });

        await this.client.send(command);
        return key;
    }

    async getImageUrl(key: string) {
        const commandGetImage = new GetObjectCommand({
            Bucket: this.bucketName,
            Key: key,
        });

        const url = await getSignedUrl(this.client, commandGetImage, {
            expiresIn: 60 * 60, // 1 hour
        });

        return url;
    }

}
