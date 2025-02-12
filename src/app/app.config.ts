import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    LoginComponent 
  ]
};
