// src/app/app.component.ts
import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';
import { FileModel } from './models/file.model';
import { FormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, SocketIoModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  roomCode: string = '';
  fileContent: string = '';
  fileName: string = '';
  isConnected: boolean = false;

  constructor(private socketService: SocketService) {}

  connectToRoom(): void {
    this.isConnected = true;
    this.socketService.joinRoom(this.roomCode);
  }

  sendFile(): void {
    const file: FileModel = {
      name: this.fileName,
      content: this.fileContent
    };

    this.socketService.sendFile(this.roomCode, JSON.stringify(file));
  }
}
