import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RoomComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public socketService: SocketService) {}
}
