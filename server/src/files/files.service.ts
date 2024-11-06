import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { promises as fs } from "fs"; 
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
    async loadFile(file: Express.Multer.File): Promise<string> {
            const newName = uuidv4();
            const extension = file.originalname.split('.').pop();
            const fileName = `${newName}.${extension}`;
            const filePath = join(__dirname, '..', '..', 'static', fileName);
            await fs.writeFile(filePath, file.buffer);

            return fileName;
    }
}
