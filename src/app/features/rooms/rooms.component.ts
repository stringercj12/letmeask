import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  loading = false;
  auth = false;


  toLoginGoogle() {
    this.loading = true;
    this.auth = false;
    setInterval(() => {
      this.loading = false;
      this.auth = true;
    }, 6000);
  }
}
