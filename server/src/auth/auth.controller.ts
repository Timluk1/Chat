import { Controller, Post, Body, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from 'express';

@Controller("/api/auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("/registration")
    @UseInterceptors(FileInterceptor('userImage'))
    async registration(
        @UploadedFile() file: Express.Multer.File,
        @Res() response: Response,
        @Body() data: AuthDto
    ) {
        return {}
    }
}
