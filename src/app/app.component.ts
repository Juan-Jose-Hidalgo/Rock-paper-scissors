import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Rock Paper Scissors';
  score = 1;

  constructor(
    private gs: GameService
  ) { }

  ngOnInit() {
    this.gs.checkLocalScore('normalGameScore');
  }

  get getScore() {
    return this.gs.getScore;
  }
}
