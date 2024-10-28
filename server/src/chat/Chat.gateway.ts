import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})

export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    // получаем userId и айдишники активных чатов
    console.log('Message received:', message);  
    this.server.emit('message', message);
  }

  handleConnection(client: Socket) {
    const authToken = client.handshake.auth;
    console.log(authToken);
    // получаем все чаты пользователя и добавляем client.join(room);
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
