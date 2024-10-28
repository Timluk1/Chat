import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';
import { TokenService } from "src/token/token.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private tokenService: TokenService
    ) { }

    async registration(authDto: AuthDto) {
        // получаем пароль
        const password = authDto.password;
        // хэшируем пароль
        const hashPassword = await bcrypt.hash(password, 5);
        // добавляем пользователя в бд и получаем данные о нем
        const user = await this.userService.createUser({ ...authDto, password: hashPassword });
        const jwt = { email: user.email, id: user.id };
        // генерируем токены
        const [refreshToken, accessToken] = [this.tokenService.generateRefreshToken(jwt), this.tokenService.generateAccessToken(jwt)];
        // добавляем токен в базу данных
        await this.tokenService.addTokenInDb({ refreshToken, user });
        return { refreshToken, accessToken };
    }

    async login(authDto: AuthDto) {
        // получить пароль и почту, сравнить с данными в бд, выдать токены
        const user = await this.userService.verifyUser(authDto);
        const jwt = { email: user.email, id: user.id };
        // генерируем токены
        const [refreshToken, accessToken] = [this.tokenService.generateRefreshToken(jwt), this.tokenService.generateAccessToken(jwt)];
        // добавляем токен в базу данных
        await this.tokenService.addTokenInDb({ refreshToken, user });
        return { refreshToken, accessToken }
    }
}