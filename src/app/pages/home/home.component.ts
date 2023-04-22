import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public bonusImg = '/assets/img/logo-bonus.svg';

  constructor(
    private cs: CookieService,
    private gs: GameService,
    private route: Router
  ) { }

  get getNormalScore() {
    return this.gs.getNormalScore;
  }

  get getAdvancedScore() {
    return this.gs.getAdvancedScore;
  }

  ngOnInit() {
  }

  resetScore(scoreType: string) {
    this.gs.resetScore(scoreType);
  }

  startGame(gameMode: string) {
    this.cs.set('gameMode', gameMode);
    this.route.navigateByUrl(`/game/${gameMode}`);
  }
}
