import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.scss'
})
export class ModalDeleteComponent {
  @Input() modalOpen: boolean = false;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<boolean> = new EventEmitter();



  action() {
    this.onClose.emit(false);
  }


  delete() {
    this.onDelete.emit(true)
  }
}
