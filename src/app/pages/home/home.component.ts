import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public bonusImg = '/assets/img/logo-bonus.svg';
  public bonusClass = 'score__logo score__logo--bonus';

  constructor(
    private gs: GameService
  ) { }

  get getScore() {
    return this.gs.getScore;
  }
}
