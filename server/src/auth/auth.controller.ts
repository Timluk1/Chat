import { Controller, Post, Body, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { RegistrationDto } from "./dto/auth.dto";
import { Response } from 'express';


@Controller("/api/auth")
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("/registration")
    async registration(@Res() response: Response, @Body() authDto: AuthDto) {
        const { refreshToken, accessToken } = await this.authService.registration(authDto);
        response.cookie('refreshToken', refreshToken, {
            httpOnly: true, 
            maxAge: 30 * 24 * 60 * 60 * 1000 
        });
        return response.json({ accessToken });

    }

    @Post("/login")
    async login(@Res() response: Response, @Body() authDto: AuthDto) {
        const { refreshToken, accessToken } = await this.authService.login(authDto);
        response.cookie('refreshToken', refreshToken, {
            httpOnly: true, 
            maxAge: 30 * 24 * 60 * 60 * 1000 
        });
        return response.json({ accessToken });
    }
}