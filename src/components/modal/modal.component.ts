import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() modalTitle: string = '';
  @Input() modalParagraph: string = '';
  @Input() modalAccept: string = 'Confirm'; 

  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmAction = new EventEmitter<void>(); 

  close() {
    this.closeModal.emit();
  }

  confirm() {
    this.confirmAction.emit();
  }
}
