import { Page } from "./page.model";
import { Player } from "./player.model";
import { Game } from "./game.model";

export interface Stat {
  game: Game;
  player: Player;
  paths: Page[];
}
