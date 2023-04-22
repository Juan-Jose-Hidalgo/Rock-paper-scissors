import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-advanced-game',
  templateUrl: './advanced-game.component.html',
  styleUrls: ['./advanced-game.component.scss']
})
export class AdvancedGameComponent {

  constructor(
    private cs: CookieService,
    private route: Router
  ) { }


  goToResults(playerMove: string) {
    this.cs.set('userMove', playerMove);
    this.route.navigateByUrl('/game/results')
  }

}
