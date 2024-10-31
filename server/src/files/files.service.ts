import { Injectable } from "@nestjs/common";
import fs from "fs"
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
    LoadFile(file: Express.Multer.File): string {
        const newName = uuidv4();
        const prefix = file.originalname.split('.').pop();
        const createName = `${newName}.${prefix}`;
        const basic = join(__dirname, '..', '..', 'static');
        fs.writeFileSync(`${basic}/${createName}`, Buffer.from(file.buffer));
        return createName;
    }
}