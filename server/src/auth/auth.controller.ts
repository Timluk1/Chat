import { Controller, Post, Body, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesService } from "src/files/files.service";
import { Response } from 'express';

@Controller("/api/auth")
export class AuthController {
    constructor(private authService: AuthService, private filesService: FilesService) {}

    @Post("/registration")
    @UseInterceptors(FileInterceptor('userImage'))
    async registration(
        @UploadedFile() file: Express.Multer.File,
        @Body() data: AuthDto
    ) {
//        const user = await this.authService.registration(data);
        const fileName = await this.filesService.loadFile(file);
        console.log(fileName)
        return {
            message: "Регистрация прошла успешно!"
        }
    }
}
