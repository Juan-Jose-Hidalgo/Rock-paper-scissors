import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent {

  constructor(
    private route: Router
  ) { }

  selectOption(option: string) {
    this.route.navigateByUrl(`/${option}`)
  }
}
