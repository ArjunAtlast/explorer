import { Game } from "src/app/models/game.model";
import { Player } from "src/app/models/player.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { StartGame, EndGame, CreatePlayer, DestroyPlayer, PushPage, UpdateTimer, PopPage, CreateGame } from "../actions/game.action";
import { Stat } from "src/app/models/stat.model";
import * as _ from 'lodash';

export interface GameStateModel {
  game: Game;
  player: Player;
  stat: Stat;
  timeLeft: number;
}

@State<GameStateModel>({
  name: 'game',
  defaults: {
    game: null,
    player: null,
    timeLeft: 0,
    stat: null
  }
})
export class GameState {

  @Selector()
  static game(state: GameStateModel) {
    return state.game;
  }

  @Selector()
  static player(state: GameStateModel) {
    return state.player;
  }

  @Selector()
  static timeLeft(state: GameStateModel) {
    return state.timeLeft;
  }

  @Selector()
  static stats({player, game, stat}: GameStateModel) {

    if(!player) return null;

    return {
      games: player.stats.length + (game && game.started?1:0),
      paths: _.sumBy(player.stats, (stat:Stat) => stat.paths.length) + (stat?stat.paths.length:0),
      points: player.points,
      rank: 0
    }
  }

  @Action(CreateGame)
  createGame(ctx: StateContext<GameStateModel>, {payload}: CreateGame) {

    const {player} = ctx.getState();

    ctx.patchState({
      game: {
        ...payload,
        started: false
      }
    });

  }

  @Action(StartGame)
  startGame(ctx: StateContext<GameStateModel>, {payload}: StartGame) {

    const {game, player} = ctx.getState();

    ctx.patchState({
      game: {
        ...game,
        started: true
      },
      stat: {
        game: game,
        player: player,
        paths: []
      },
      timeLeft: payload
    })

  }

  @Action(EndGame)
  endGame(ctx: StateContext<GameStateModel>, {success}: EndGame) {

    const {player, stat, game} = ctx.getState();

    const new_points = success? player.points + Math.ceil(game.total_points/stat.paths.length) : player.points;

    ctx.patchState({
      player: {
        ...player,
        points: new_points,
        stats: [...player.stats, stat]
      },
      stat: null,
      game: null,
    });

  }

  @Action(CreatePlayer)
  createPlayer(ctx: StateContext<GameStateModel>, {payload}: CreatePlayer) {

    ctx.patchState({
      player: payload
    });

  }

  @Action(DestroyPlayer)
  destroyPlayer(ctx: StateContext<GameStateModel>, action: DestroyPlayer) {

    ctx.patchState({
      player: null
    });

  }

  @Action(PushPage)
  pushPage(ctx: StateContext<GameStateModel>, {payload}: PushPage) {

    const {stat} = ctx.getState();

    ctx.patchState({
      stat: {
        ...stat,
        paths: [...stat.paths, payload]
      }
    });

  }

  @Action(PopPage)
  popPage(ctx: StateContext<GameStateModel>, action: PopPage) {

    const {stat} = ctx.getState();

    ctx.patchState({
      stat: {
        ...stat,
        paths: stat.paths.slice(0, -1)
      }
    });

  }

  @Action(UpdateTimer)
  updateTimer(ctx: StateContext<GameStateModel>, {payload}: UpdateTimer) {

    const state = ctx.getState();

    ctx.patchState({
      timeLeft: Math.max(state.timeLeft - payload, 0)
    });

  }

}
