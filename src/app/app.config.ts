import { provideRouter } from '@angular/router';
import { routes } from './app.routes.server';


export const appConfig = {
  providers: [
    provideRouter(routes),
    // Adicione outros provedores aqui, se necessário
  ],
};
