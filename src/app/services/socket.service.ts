// src/app/services/socket.service.ts
import { Injectable } from '@angular/core';
import { Socket, SocketIoModule } from 'ngx-socket-io';
import { SocketConfig } from './socket-config.model';

@Injectable({
  providedIn: 'root',
  useValue: [SocketIoModule.forRoot(SocketConfig)],
})
export class SocketService {
  constructor(private socket: Socket) {}

  joinRoom(room: string): void {
    this.socket.emit('joinRoom', room);
  }

  sendFile(room: string, file: string): void {
    this.socket.emit('file', { room, file });
  }

  onFile(): any {
    return this.socket.fromEvent('file');
  }
}
