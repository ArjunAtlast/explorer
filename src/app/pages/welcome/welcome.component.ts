import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Stat } from 'src/app/models/stat.model';
import { GameState } from 'src/app/store/states/game.state';
import { WikiGameService } from 'src/app/services/wiki-game.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  timeLeft$: Observable<{min:number, sec:number}>;

  stat$: Observable<Stat>;

  rank$: Observable<number>;

  @Select(GameState.stats) playerStats$: Observable<any>;

  constructor(private store: Store, private game: WikiGameService) { }

  ngOnInit() {

    this.timeLeft$ = this.store.select(state => {
      const time = state.game.timeLeft;
      return {
        min: Math.floor(time/60),
        sec: time%60
      }
    });

    this.stat$ = this.store.select(state => state.game.stat);

    this.game.openGame();

    this.rank$ = this.game.rank$;

  }

}
