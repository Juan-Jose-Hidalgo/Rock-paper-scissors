import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {

  private gameOptions = ['rock', 'paper', 'scissors'];

  constructor(
    private route: Router,
    private gs: GameService
  ) { }

  ngOnInit(): void {
  }

  play(userMove: string) {
    this.gs.play(userMove);
    this.route.navigateByUrl('/normal-game-results');
  }
}
