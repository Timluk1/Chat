import { Module } from "@nestjs/common";
import { ChatController } from "./chat.controller";
import { ChatGateway } from "./Chat.gateway";

@Module({
    controllers: [ChatController],
    providers: [ChatGateway],
    imports: [], 
})
export class ChatModule {}