import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from "./user/entity/user.entity";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from './user/user.module';
import { Token } from "./token/entity/token.entity";
import { Chat } from "./chat/enity/chat.enity";
import { TokenModule } from "./token/token.module";
import { ChatModule } from "./chat/chat.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env" }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USER,
      password: String(process.env.PASSWORD),
      database: process.env.DATABASE,
      entities: [User, Token, Chat],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    TokenModule,
    ChatModule
  ],
})

export class AppModule { }

