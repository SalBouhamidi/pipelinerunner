import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { GitService } from '../git/git.service';

@Controller('runtest')
export class RuntestController {
  constructor(private gitservice : GitService){}
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          callback(null, `${file.originalname}-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File){
    try{
      if(!file){
        throw new Error('no file uploaded');
      }else{
        let result = await this.gitservice.createBranchAndPushFile(file.path)
        console.log("weeeee the result is here", result)
      }
    }catch(e){
      throw new Error(`failed to upload file: ${e.message}`);
    }
  }
}
