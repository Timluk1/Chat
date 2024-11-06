import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { FilesService } from "./files.service"

@Module({
    imports: [
        MulterModule.register({
            dest: "../../../files/usersImages",
        }),
    ],
    exports: [FilesService],
    providers: [FilesService], 
})
export class FilesModule {}
