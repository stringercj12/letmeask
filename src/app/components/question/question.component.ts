import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Question {
  id: string;
  title: string;
  room_id: string;
  user_id: string;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input({ required: true }) question!: Question;
  @Output() onDelete: EventEmitter<boolean> = new EventEmitter();
  onMark: boolean = false;



  action() {
    this.onDelete.emit(true);
  }

}
