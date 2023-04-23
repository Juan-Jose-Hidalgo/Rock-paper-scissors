import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-classic-board',
  templateUrl: './classic-board.component.html',
  styleUrls: ['./classic-board.component.scss']
})
export class ClassicBoardComponent {

  constructor(
    private cs: CookieService,
    private route: Router
  ) { }


  goToResults(playerMove: string) {
    this.cs.set('userMove', playerMove, undefined, '/');
    this.route.navigateByUrl('/game/results')
  }
}
