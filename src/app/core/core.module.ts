import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SOCKET_IO_PROVIDER, SOCKET_IO_CONFIG_PROVIDER } from './services/socket-io.facade';
import { SocketService } from './services/socket.service';
import { AuthGuard } from './services/auth.guard';
import { user } from './store/user.reducer';
import { messages } from './store/messages.reducer';
import { routes } from './core.routes';
import { CorePreloadingStrategy } from './core-preloading-strategy';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ user, messages }),
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: CorePreloadingStrategy
      }
    ),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SOCKET_IO_CONFIG_PROVIDER,
    SOCKET_IO_PROVIDER,
    CorePreloadingStrategy,
    AuthGuard,
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SocketService
      ]
    };
  }
}
