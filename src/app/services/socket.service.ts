import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  isConnected = false;
  codeNumber: string = '';
  currentMembers: string[] = [];

  constructor(private socket: Socket) {
    socket.on('roomCode', (code: string) => {
      this.isConnected = true;
      this.codeNumber = code;
    });
    socket.on('usersInRoom', (members: string[]) => {
      this.currentMembers = members;
    });
  }

  createRoom(): void {
    this.socket.emit('createRoom');
  }

  joinRoom(room: string): void {
    this.socket.emit('joinRoom', room);
  }

  sendFile(room: string, file: string): void {
    this.socket.emit('file', { room, file });
  }
}
