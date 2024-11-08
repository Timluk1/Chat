import { Controller, Post, Body, Res, InternalServerErrorException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CloudImagesService } from "src/cloudImages/cloudImages.service";

@Controller("/api/auth")
export class AuthController {
    constructor(private authService: AuthService,
        private cloudImagesService: CloudImagesService
    ) {
    }

    @Post("/registration")
    @UseInterceptors(FileInterceptor('userImage'))
    async registration(
        @UploadedFile() file: Express.Multer.File,
        @Body() data: AuthDto
    ) {
        const key = await this.cloudImagesService.uploadFile(file);
        const user = await this.authService.registration(data, key);
        if (!user) throw new InternalServerErrorException("Ошибка регистрации");
        return {
            accessToken: user.accessToken
        };
    }
}
