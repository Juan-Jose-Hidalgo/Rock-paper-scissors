import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeConfig } from 'src/app/models/mode-config.type';
import { Score } from 'src/app/models/score.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  public gameMode = 'classic';
  public score!: Score;
  public toogleModal = false;

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
    this.getGameMode();
    this.initScore(this.gameMode);
  }

  getGameMode() {
    this.gameMode = this.gs.getGameMode();
  }

  play(userMove: string) {
    this.gs.play(userMove);
    this.route.navigateByUrl('/normal-game-results');
  }

  initScore(gameMode: string) {
    this.score = this.gs.initScore(gameMode);
  }

  openModal() {
    this.toogleModal = true;
  }

  closeModal(event: boolean) {
    this.toogleModal = event;
  }
}
