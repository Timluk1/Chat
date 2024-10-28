import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TokensDto, TokenDbDto } from "./dto/token.dto";
import { Token } from "./entity/token.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TokenService {
    constructor(
        @InjectRepository(Token)
        private tokenRepository: Repository<Token>,
        private jwtService: JwtService
    ) { }

    async addTokenInDb(tokenDbDto: TokenDbDto): Promise<Token> {
        // Попробуем найти существующий токен по пользователю
        let token = await this.tokenRepository.findOne({ where: { user: { id: tokenDbDto.user.id } } });

        if (token) {
            // Если токен уже существует, обновляем его
            token.refreshToken = tokenDbDto.refreshToken;
            return await this.tokenRepository.save(token);
        } else {
            // Если токена нет, создаем новый
            token = this.tokenRepository.create(tokenDbDto);
            return await this.tokenRepository.save(token);
        }
    }

    generateRefreshToken(tokenDto: TokensDto): string {
        return this.jwtService.sign(tokenDto, { secret: process.env.JWT_REFRESH_SECRET });
    }

    generateAccessToken(tokenDto: TokensDto): string {
        return this.jwtService.sign(tokenDto, { secret: process.env.JWT_ACCESS_SECRET });
    }

    verifyToken() {

    }
}
