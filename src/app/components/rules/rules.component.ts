import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  @Input() rulesImageUrl: string = '/assets/img/image-rules.svg';
  @Output() onClose = new EventEmitter<boolean>();

  @ViewChild('rules') rulesElement!: ElementRef;

  ngAfterViewInit() {
    this.showRulesElement();
  }

  /**
   * Closes the rules modal.
   * This method triggers the hideRulesElement() method to animate the modal and hide it.
   * After the animation is finished, it emits a close event using the emitCloseEvent() method.
   * 
   * @memberof RulesComponent
   * @returns void
   */
  closeModal() {
    this.hideRulesElement();
    setTimeout(() => {
      this.emitCloseEvent();
    }, 500);
  }

  /**
   * Hides the rules element by adding the 'rules--hide' class to its native element.
   * 
   * @memberof RulesComponent
   * @returns void
   */
  hideRulesElement(): void {
    this.rulesElement.nativeElement.classList.add('rules--hide');
  }

  /**
   * Shows the rules element by adding the "rules--show" class to the native element.
   * 
   * @memberof RulesComponent
   * @returns void
   */
  showRulesElement(): void {
    this.rulesElement.nativeElement.classList.add('rules--show');
  }

  /**
   * Emits a close event with a boolean value of false.
   * 
   * @memberof RulesComponent
   * @returns void
   */
  emitCloseEvent(): void {
    this.onClose.emit(false);
  }

  /**
   * Handles the keyboard event when the user presses the escape key to close the modal.
   * 
   * @memberof RulesComponent
   * @returns void
   */
  @HostListener('document:keydown.escape', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    this.closeModal();
  }

  /**
   * Listens to the click event and checks if the target is the rules element to close modal.
   * 
   * @memberof RulesComponent
   * @param event The MouseEvent object.
   * @returns void
   */
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (event.target === this.rulesElement.nativeElement) {
      this.closeModal();
    }
  }
}