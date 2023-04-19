import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  @Input() rulesImg = '/assets/img/image-rules.svg';
  @Output() close = new EventEmitter<boolean>();

  @ViewChild('rules') rulesElement!: ElementRef;

  ngAfterViewInit() {
    this.rulesElement.nativeElement.classList.add('rules--show');
  }

  closeModal() {
    this.changeAnimation();
    setTimeout(() => {
      this.close.emit(false);
    }, 500);
  }

  changeAnimation() {
    this.rulesElement.nativeElement.classList.add('rules--hide');
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.closeModal();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.target === this.rulesElement.nativeElement) {
      this.closeModal();
    }
  }
}
