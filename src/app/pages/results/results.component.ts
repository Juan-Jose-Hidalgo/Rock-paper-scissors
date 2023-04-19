import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-normal-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public userMove = '';
  public cpuMove = 'none';
  public result = '';

  private gameOptions = ['rock', 'paper', 'scissors'];

  constructor(
    private cs: CookieService,
    private gs: GameService
  ) { }



  async ngOnInit(): Promise<void> {
    this.userMove = this.cs.get('userMove');
    await this.getCpuMove();
    this.getResult();
  }

  async getCpuMove(): Promise<void> {
    this.cpuMove = await this.gs.cpuMove(this.gameOptions);
  }

  getResult() {
    this.result = this.gs.setGame(this.userMove, this.cpuMove, 'normalGameScore');
  }
}
