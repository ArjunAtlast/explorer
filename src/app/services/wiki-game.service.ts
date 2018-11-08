import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateTimer, EndGame, CreatePlayer, StartGame, CreateGame } from '../store/actions/game.action';
import { Game } from '../models/game.model';
import { User } from '../models/user.model';
import { Player } from '../models/player.model';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import * as _ from 'lodash';
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiGameService {

  //for setting up timer
  // timer;

  //games list
  games: Game[];

  player_id: string;

  constructor(private store: Store, private router: Router, private fs: AngularFirestore, private auth: AuthService) {

  }

  /**
   * Open the game
   */
  openGame() {

    //create a new player
    this.createPlayer();

    this.fs.collection('games').valueChanges()
      .subscribe( (games: Game[]) => {

        this.games = _.shuffle(games);

        //create a new game
        const game = this.games.pop();
        this.store.dispatch(new CreateGame(game));

      })
    ;

    // this.watchTime();

    this.watchStat();

  }

  get rank$(): Observable<number> {

      return this.fs.collection('players').valueChanges()
        .pipe(map(
          (players: Player[]) => {

            const sortedPlayers = _.orderBy(players, 'points', 'desc');

            // console.log(sortedPlayers);

            if(this.player_id) return _.findIndex(sortedPlayers, {player_id: this.player_id}) + 1;

            else return -1;

          }
        ))
      ;

  }

  /**
   * Watch Stat
   */
  private watchStat() {

    //update stats in store
    this.store.select(state => ({ game: state.game.game, stat: state.game.stat}))
      .subscribe(
        ({game, stat}) => {
          if(game && stat && stat.paths.length > 0) {

            // console.log(game.end.title, _.last(stat.paths));

            if (game.end.title === _.last(stat.paths).title) {
              this.store.dispatch(new EndGame(true));

              if(this.games.length > 0) {
                this.store.dispatch(new CreateGame(this.games.pop()));
              }

              this.router.navigate(['']);
            }

          }
      })
    ;

    //update points in firestore
    this.store.select(state => state.game.player).subscribe(

      (player: Player) => {

        this.fs.collection('players').doc(player.player_id).update(player);

      }

    );

  }

  /**
   * Create a new player
   */
  private async createPlayer() {

    //create a dummy user
    const user: User = this.auth.currentUser;

    this.player_id = user.user_id;

    //create a player
    const player: Player = {
      player_id: this.player_id,
      user: user,
      stats: [],
      points: 0
    };

    await this.fs.collection('players').doc(player.player_id).set(player);

    this.store.dispatch(new CreatePlayer(player));

  }

  /**
   * Watch the timer. End game when time runs out
   */
  // private watchTime() {

  //   this.store.select(state => state.game.timeLeft).subscribe(
  //     time => {

  //       if(this.timer && time <= 0) {
  //         clearInterval(this.timer);
  //         this.store.dispatch(new EndGame(false));

  //         //navigate to home
  //         this.router.navigate(['']);
  //       }

  //     }
  //   );

  // }

  /**
   * Start Game
   */
  async startGame() {

    this.store.dispatch(new StartGame(5*60));

    // if(!this.timer) {

    //   this.timer = setInterval(
    //     () => {
    //       this.store.dispatch(new UpdateTimer(1));
    //     },
    //     1000
    //   );

    // }

    const game = await this.store.select(state => state.game.game).pipe(first(val => val != null)).toPromise();

    this.router.navigate([`wiki/${game.start.title}`]);

  }

  /**
   * Skip current game
   */
  async skipGame() {

    const game = await this.store.select(state => state.game.game).pipe(first(val => val != null)).toPromise();

    this.games.unshift(game);

    this.store.dispatch(new CreateGame(this.games.pop()));

  }

}
