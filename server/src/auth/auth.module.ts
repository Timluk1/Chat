import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TokenModule } from "src/token/token.module";
import { UserModule } from "src/user/user.module";
import { AccessTokenStrategy } from "./strategies/accessToken.strategy";

@Module({
    controllers: [AuthController],
    providers: [AuthService, AccessTokenStrategy],
    imports: [TokenModule, UserModule], 
})
export class AuthModule {}
