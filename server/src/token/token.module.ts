import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { TokenService } from "./token.service";
import { Token } from "./entity/token.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: process.env.JWT_ACCESS_SECRET,
            signOptions: { expiresIn: '15m' }
        }),
        JwtModule.register({
            secret: process.env.JWT_REFRESH_SECRET,
            signOptions: { expiresIn: '7d' }
        }),
        TypeOrmModule.forFeature([Token])
    ],
    providers: [TokenService], 
    exports: [TokenService]   
})
export class TokenModule {}
