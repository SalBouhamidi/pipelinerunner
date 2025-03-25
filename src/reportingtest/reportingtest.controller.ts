import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('reportingtest')
export class ReportingtestController {

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './reports',
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                    callback(null, `${file.originalname}-${uniqueSuffix}${extname(file.originalname)}`);
                },
            }),
        }),
    )
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        try {
            // console.log("hiho")
            if (!file) {
                throw new Error('no file uploaded');
            } else {
                console.log("comming back report ")
            }
        } catch (e) {
            throw new Error(`failed to upload file: ${e.message}`);
        }
    }
}
