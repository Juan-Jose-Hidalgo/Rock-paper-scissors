import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  public scoreImg = '/assets/img/logo-bonus.svg';
  public scoreClass = 'score__logo score__logo--bonus';
  public scoreValue = 0;
  public gameMode = 'normal';

  constructor(
    private route: Router,
    private gs: GameService
  ) { }

  get getNormalScore() {
    return this.gs.getNormalScore;
  }

  get getAdvancedScore() {
    return this.gs.getAdvancedScore;
  }

  ngOnInit(): void {
    console.log(this.getGameMode())
  }

  getGameMode() {
    this.gameMode = this.gs.getGameMode();
    this.initScore();
  }

  play(userMove: string) {
    this.gs.play(userMove);
    this.route.navigateByUrl('/normal-game-results');
  }

  initScore() {
    if (this.gameMode === 'normal') {
      this.scoreImg = '/assets/img/logo.svg';
      this.scoreClass = 'score__logo';
      this.scoreValue = this.getNormalScore;
    } else {
      this.scoreImg = '/assets/img/logo-bonus.svg';
      this.scoreClass = 'score__logo score__logo--bonus';
      this.scoreValue = this.getAdvancedScore;
    }

  }
}
