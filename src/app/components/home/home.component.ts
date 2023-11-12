import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    HttpClientModule,
  ],
  providers: [SocketService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  code = new FormControl('');

  constructor(public socketService: SocketService) {}

  createRoom(): void {
    console.log('Creating room');
    this.socketService.createRoom();
  }

  joinRoom(code: string): void {
    console.log(`Joining room ${code}`);
    this.socketService.joinRoom(code);
  }
}
