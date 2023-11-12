import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { routes } from './app.routes';

export const socketConfig: SocketIoConfig = {
  url: 'http://localhost:3000', // Change this in deploy
  options: {},
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(SocketIoModule.forRoot(socketConfig)),
  ],
};
