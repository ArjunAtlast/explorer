import { Game } from "../../models/game.model";
import { Player } from "../../models/player.model";
import { Stat } from "src/app/models/stat.model";
import { Page } from "src/app/models/page.model";

export class CreateGame {
  static readonly type = '[GAME] Create Game';
  constructor (public payload: Game) {}
}

export class StartGame {
  static readonly type = '[GAME] Start Game';
  constructor (public payload: number) {}
}

export class EndGame {
  static readonly type = '[GAME] End Game';
  constructor (public success: boolean) {}
}

export class CreatePlayer {
  static readonly type = '[GAME] Create Player';
  constructor (public payload: Player) {}
}

export class DestroyPlayer {
  static readonly type = '[GAME] Destroy Player';
  constructor () {}
}

export class UpdateTimer {
  static readonly type = '[GAME] Update Timer';
  constructor (public payload: number) {}
}

export class PushPage {
  static readonly type = '[GAME] Push Page';
  constructor (public payload: Page) {}
}

export class PopPage {
  static readonly type = '[GAME] Pop Page';
  constructor (public payload: Page) {}
}
