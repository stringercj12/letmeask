import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-new',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './room-new.component.html',
  styleUrl: './room-new.component.scss'
})
export class RoomNewComponent {
  nomeDaSala: string = "";
}
