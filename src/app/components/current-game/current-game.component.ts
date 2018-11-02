import { Component, OnInit } from '@angular/core';
import { WikiGameService } from 'src/app/services/wiki-game.service';
import { Game } from 'src/app/models/game.model';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.scss']
})
export class CurrentGameComponent implements OnInit {

  game$: Observable<Game>;

  constructor(private wikiGame: WikiGameService, private store: Store) { }

  ngOnInit() {

    this.game$ = this.store.select(state => state.game.game);

  }


  startGame() {
    this.wikiGame.startGame();
  }


}
