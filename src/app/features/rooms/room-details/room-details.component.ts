import { Component } from '@angular/core';
import { Question, QuestionComponent } from '../../../components/question/question.component';
import { ModalDeleteComponent } from '../../../components/modal-delete/modal-delete.component';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [QuestionComponent, ModalDeleteComponent],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss'
})
export class RoomDetailsComponent {
  questions: Question[] = [];
  loading: boolean = true;
  modalOpen: boolean = false;
  onDeleted: any;
  numero = 0;
  

  ngOnInit() {
    this.loading = true;
    setInterval(() => {
      this.loading = false;
      this.questions = [
        {
          id: 'dsk23w23kd29',
          room_id: 'dsdsdsdsd',
          title: 'Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes.',
          user_id: 'dsd 222222222222222222222222222222222'
        },
        {
          id: 'dsk23w23kd22',
          room_id: 'dsdsdsdsd',
          title: 'Estou integrando a emissão de nota fiscal numa aplicação, e a API me retorna um link html pra impressão. O problema é que quando jogo pra imprimir pela biblioteca react-print, usando o...',
          user_id: 'dsd 222222222222222222222222222222222'
        },
        {
          id: 'dsk23w23kd23',
          room_id: 'dsdsdsdsd',
          title: 'Quais são as principais diferenças do ReactJS para web, para o React Native?',
          user_id: 'dsd 222222222222222222222222222222222'
        }
      ];
    }, 3000);
  }

  modalDelete(event: any){
    console.log('event => ', event)
    this.modalOpen = event;
  }
}
