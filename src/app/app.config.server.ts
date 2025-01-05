import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { serverRoutes } from './app.routes.server';
import { appConfig } from './app.config';
;

export const serverConfig = {
  providers: [
    provideServerRendering(),
    // Adicione provedores específicos do servidor aqui
  ],
};

// Mescle as configurações do cliente (appConfig) e do servidor (serverConfig)
export const config = mergeApplicationConfig(appConfig, serverConfig);
