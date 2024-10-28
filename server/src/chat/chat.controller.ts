import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';

@Controller("/api/chat")
export class ChatController {
    @UseGuards(AuthGuard("jwt-access"))
    @Get("")
    main() {
        return {chat: "Chat"}
    }
}