import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { GameState } from './states/game.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      GameState
    ]),
    NgxsLoggerPluginModule.forRoot()
  ],
  exports: [
    NgxsModule,
    NgxsLoggerPluginModule
  ]
})
export class StoreModule {

}
